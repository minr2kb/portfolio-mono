const questions = [
  '어떤 프로젝트를 만들었나요?',
  '기술 선택 기준이 궁금해요',
  '요즘 집중하는 일은 무엇인가요?',
];

type ExampleQuestionsProps = {
  disabled: boolean;
  onSelect: (question: string) => void;
};

export function ExampleQuestions({
  disabled,
  onSelect,
}: ExampleQuestionsProps) {
  return (
    <div
      aria-label='예시 질문'
      className='mx-auto flex w-full max-w-3xl shrink-0 gap-2 overflow-x-auto pb-3'
    >
      {questions.map((question) => (
        <Button
          key={question}
          type='button'
          variant='outline'
          disabled={disabled}
          onClick={() => onSelect(question)}
          className='h-auto shrink-0 rounded-full border-[#c8daed] bg-white/85 px-4 py-2.5 text-sm text-slate-700 shadow-sm hover:bg-[#eaf3ff] focus-visible:ring-blue-500 disabled:cursor-wait'
        >
          {question}
        </Button>
      ))}
    </div>
  );
}

import { Button } from '@/components/ui/button';
