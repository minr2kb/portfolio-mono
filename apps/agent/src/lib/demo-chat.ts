export type DemoMessage = {
  id: number;
  role: 'user' | 'assistant';
  text: string;
};

export type DemoResponse = {
  id: number;
  phase: 'reading' | 'preparing' | 'complete' | 'streaming';
};

export const FIXED_REPLY =
  '반가워요! 지금은 채팅 화면을 체험할 수 있도록 고정된 예시 답변을 보여드리고 있어요. 곧 프로젝트와 기술적 선택을 더 자세히 살펴볼 수 있게 준비하겠습니다.';

export const PREPARATION_STEP_MS = 600;

export function appendTurn(
  messages: DemoMessage[],
  question: string,
  firstId: number,
): { messages: DemoMessage[]; assistantId: number } | null {
  const text = question.trim();
  if (!text) return null;

  return {
    messages: [
      ...messages,
      { id: firstId, role: 'user', text },
      { id: firstId + 1, role: 'assistant', text: '' },
    ],
    assistantId: firstId + 1,
  };
}

export function nextStreamChunk(
  fullText: string,
  currentText: string,
  step = 2,
): string {
  const characters = Array.from(fullText);
  const nextLength = Math.min(
    characters.length,
    Array.from(currentText).length + step,
  );
  return characters.slice(0, nextLength).join('');
}
