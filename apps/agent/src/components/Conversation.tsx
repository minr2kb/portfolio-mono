import { Check, LoaderCircle } from 'lucide-react';
import { useLayoutEffect, useRef, useState } from 'react';
import memojiUrl from '@/assets/memoji.png';
import { Bubble, BubbleContent } from '@/components/ui/bubble';
import { Message, MessageContent } from '@/components/ui/message';
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from '@/components/ui/message-scroller';
import { Trace, TraceIcon, TraceLine, TraceTitle } from '@/components/ui/trace';
import type { DemoMessage, DemoResponse } from '@/lib/demo-chat';

type ConversationProps = {
  messages: DemoMessage[];
  response: DemoResponse | null;
};

type AvatarPosition = { left: number; top: number; size: number };

export function Conversation({ messages, response }: ConversationProps) {
  const [avatarPosition, setAvatarPosition] = useState<AvatarPosition | null>(
    null,
  );
  const contentRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const introSlotRef = useRef<HTMLDivElement>(null);
  const latestReplySlotRef = useRef<HTMLSpanElement>(null);
  const hasConversation = messages.length > 0;
  const latestAssistantId = messages.reduce<number | null>(
    (id, message) => (message.role === 'assistant' ? message.id : id),
    null,
  );

  useLayoutEffect(() => {
    const updateAvatarPosition = () => {
      const content = contentRef.current;
      const slot = hasConversation
        ? latestReplySlotRef.current
        : introSlotRef.current;
      if (!content || !slot) return;
      const contentRect = content.getBoundingClientRect();
      const slotRect = slot.getBoundingClientRect();
      const next = {
        left: slotRect.left - contentRect.left,
        top: slotRect.top - contentRect.top,
        size: slotRect.width,
      };
      setAvatarPosition((current) =>
        current?.left === next.left &&
        current.top === next.top &&
        current.size === next.size
          ? current
          : next,
      );
    };

    updateAvatarPosition();
    const observer = new ResizeObserver(updateAvatarPosition);
    if (contentRef.current) observer.observe(contentRef.current);
    if (latestReplySlotRef.current)
      observer.observe(latestReplySlotRef.current);
    const viewport = viewportRef.current;
    viewport?.addEventListener('scroll', updateAvatarPosition);
    window.addEventListener('resize', updateAvatarPosition);
    return () => {
      observer.disconnect();
      viewport?.removeEventListener('scroll', updateAvatarPosition);
      window.removeEventListener('resize', updateAvatarPosition);
    };
  }, [hasConversation, latestAssistantId]);

  return (
    <MessageScrollerProvider autoScroll scrollPreviousItemPeek={48}>
      <MessageScroller className='min-h-0 flex-1'>
        <MessageScrollerViewport
          ref={viewportRef}
          aria-label='예시 대화 내용'
          role='region'
        >
          <MessageScrollerContent
            ref={contentRef}
            aria-busy={response !== null}
            aria-live='off'
            className='relative mx-auto w-full min-h-full max-w-3xl gap-6 px-1 pb-8 pt-8 sm:gap-8'
          >
            <img
              src={memojiUrl}
              alt=''
              aria-hidden='true'
              className='agent-avatar pointer-events-none absolute z-10 rounded-full object-contain'
              style={
                avatarPosition
                  ? {
                      left: avatarPosition.left,
                      top: avatarPosition.top,
                      width: avatarPosition.size,
                      height: avatarPosition.size,
                    }
                  : { opacity: 0 }
              }
            />
            {hasConversation ? (
              messages.map((message) => (
                <MessageScrollerItem
                  key={message.id}
                  messageId={String(message.id)}
                  scrollAnchor={message.role === 'user'}
                  className={
                    message.role === 'assistant'
                      ? `[content-visibility:visible] ${message.id === latestAssistantId ? 'mt-10' : 'mt-0'}`
                      : ''
                  }
                >
                  <Message align={message.role === 'user' ? 'end' : 'start'}>
                    {message.id === latestAssistantId && (
                      <span
                        ref={latestReplySlotRef}
                        aria-hidden='true'
                        className='pointer-events-none absolute -top-10 left-0 size-9'
                      />
                    )}
                    <MessageContent
                      className={
                        message.role === 'user'
                          ? 'max-w-[85%] items-end sm:max-w-[75%]'
                          : 'max-w-[90%] items-start sm:max-w-[80%]'
                      }
                    >
                      {message.role === 'assistant' &&
                        message.id === response?.id &&
                        response.phase !== 'streaming' && (
                          <Trace
                            aria-hidden='true'
                            className='agent-thinking-trace'
                          >
                            <TraceLine className='rounded-full bg-blue-50/90 px-3 py-2 text-slate-600'>
                              <TraceIcon>
                                {response.phase === 'complete' ? (
                                  <Check className='size-4' />
                                ) : (
                                  <LoaderCircle className='size-4 animate-spin motion-reduce:animate-none' />
                                )}
                              </TraceIcon>
                              <TraceTitle>
                                {response.phase === 'reading'
                                  ? '예시 · 질문 살펴보는 중…'
                                  : response.phase === 'preparing'
                                    ? '예시 · 답변 정리하는 중…'
                                    : '예시 · 답변 준비 완료'}
                              </TraceTitle>
                            </TraceLine>
                          </Trace>
                        )}
                      {(message.role === 'user' || message.text) && (
                        <Bubble
                          align={message.role === 'user' ? 'end' : 'start'}
                          variant={
                            message.role === 'user' ? 'secondary' : 'tinted'
                          }
                          className='max-w-full'
                        >
                          <BubbleContent
                            aria-hidden={
                              message.role === 'assistant' &&
                              message.id === response?.id
                            }
                            className={
                              message.role === 'user'
                                ? 'whitespace-pre-wrap rounded-[1.4rem] rounded-tr-sm px-4 py-3 leading-6 text-slate-800'
                                : 'whitespace-pre-wrap rounded-[1.4rem] rounded-tl-sm border-[#dce8f5] px-4 py-3 leading-6 text-slate-800 shadow-[0_8px_28px_-22px_rgba(37,86,150,0.5)]'
                            }
                          >
                            {message.text}
                            {message.id === response?.id && (
                              <span
                                aria-hidden='true'
                                className='ml-1 inline-block h-4 w-0.5 rounded-full bg-blue-500 align-[-3px] motion-safe:animate-pulse'
                              />
                            )}
                          </BubbleContent>
                        </Bubble>
                      )}
                    </MessageContent>
                  </Message>
                </MessageScrollerItem>
              ))
            ) : (
              <MessageScrollerItem className='flex min-h-full flex-1 flex-col items-center justify-center text-center [content-visibility:visible]'>
                <div
                  ref={introSlotRef}
                  aria-hidden='true'
                  className='mb-4 size-32 sm:size-60'
                />
                <Message className='justify-center text-center'>
                  <MessageContent className='items-center'>
                    <h1 className='max-w-xl text-[clamp(2rem,5vw,3rem)] leading-tight font-semibold tracking-tight'>
                      안녕하세요, 민경배입니다.
                    </h1>
                    <p className='mt-2 max-w-120 text-sm leading-7 text-slate-600 sm:text-base break-keep text-balance'>
                      제 프로젝트와 기술적 선택을 대화로 살펴볼 수 있도록 준비
                      중이에요.
                    </p>
                  </MessageContent>
                </Message>
              </MessageScrollerItem>
            )}
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton aria-label='최신 대화로 이동' />
      </MessageScroller>
    </MessageScrollerProvider>
  );
}
