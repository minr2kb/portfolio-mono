import { useEffect, useRef, useState } from 'react';
import { AgentHeader } from '@/components/AgentHeader';
import { ChatComposer } from '@/components/ChatComposer';
import { Conversation } from '@/components/Conversation';
import { ExampleQuestions } from '@/components/ExampleQuestions';
import {
  appendTurn,
  type DemoMessage,
  type DemoResponse,
  FIXED_REPLY,
  nextStreamChunk,
  PREPARATION_STEP_MS,
} from '@/lib/demo-chat';

const Home = () => {
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState<DemoMessage[]>([]);
  const [response, setResponse] = useState<DemoResponse | null>(null);
  const [announcement, setAnnouncement] = useState('');
  const nextId = useRef(1);

  useEffect(() => {
    if (!response) return;

    if (response.phase !== 'streaming') {
      const timer = window.setTimeout(
        () => {
          if (response.phase === 'reading') {
            setResponse({ id: response.id, phase: 'preparing' });
            setAnnouncement('예시 답변을 정리하는 중입니다.');
          } else if (response.phase === 'preparing') {
            setResponse({ id: response.id, phase: 'complete' });
            setAnnouncement('예시 답변 준비가 끝났습니다.');
          } else {
            setMessages((current) =>
              current.map((message) =>
                message.id === response.id
                  ? { ...message, text: nextStreamChunk(FIXED_REPLY, '') }
                  : message,
              ),
            );
            setResponse({ id: response.id, phase: 'streaming' });
            setAnnouncement('고정된 예시 답변을 표시하고 있습니다.');
          }
        },
        response.phase === 'complete' ? 300 : PREPARATION_STEP_MS,
      );
      return () => window.clearTimeout(timer);
    }

    let visibleText = nextStreamChunk(FIXED_REPLY, '');
    const timer = window.setInterval(() => {
      visibleText = nextStreamChunk(FIXED_REPLY, visibleText);
      setMessages((current) =>
        current.map((message) =>
          message.id === response.id
            ? { ...message, text: visibleText }
            : message,
        ),
      );
      if (visibleText === FIXED_REPLY) {
        window.clearInterval(timer);
        setResponse(null);
        setAnnouncement(`예시 답변: ${FIXED_REPLY}`);
      }
    }, 35);

    return () => window.clearInterval(timer);
  }, [response]);

  const send = (question: string) => {
    if (response !== null) return;
    const turn = appendTurn(messages, question, nextId.current);
    if (!turn) return;

    nextId.current += 2;
    setDraft('');
    setAnnouncement('예시 대화에서 질문을 살펴보는 중입니다.');
    setMessages(turn.messages);
    setResponse({ id: turn.assistantId, phase: 'reading' });
  };

  return (
    <main className='agent-scene h-dvh text-[#0f172a]'>
      <div className='relative z-10 mx-auto flex h-full max-w-6xl flex-col px-4 sm:px-8'>
        <AgentHeader />
        <Conversation messages={messages} response={response} />
        <ExampleQuestions disabled={response !== null} onSelect={send} />
        <ChatComposer
          value={draft}
          streaming={response !== null}
          onChange={setDraft}
          onSend={() => send(draft)}
        />
        <p role='status' aria-live='polite' className='sr-only'>
          {announcement}
        </p>
      </div>
    </main>
  );
};

export default Home;
