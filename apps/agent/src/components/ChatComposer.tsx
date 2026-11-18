import { ArrowUpRight } from 'lucide-react';
import type { KeyboardEvent } from 'react';
import { Button } from '@/components/ui/button';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupTextarea,
} from '@/components/ui/input-group';

type ChatComposerProps = {
  value: string;
  streaming: boolean;
  onChange: (value: string) => void;
  onSend: () => void;
};

export function ChatComposer({
  value,
  streaming,
  onChange,
  onSend,
}: ChatComposerProps) {
  const onKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (
      event.key !== 'Enter' ||
      event.shiftKey ||
      event.nativeEvent.isComposing
    ) {
      return;
    }
    event.preventDefault();
    onSend();
  };

  return (
    <div className='mx-auto w-full max-w-3xl shrink-0 pb-7 sm:pb-10'>
      <InputGroup className='agent-composer min-h-28 items-start rounded-[1.8rem] border-[#c8daed] bg-white shadow-[0_24px_62px_-31px_rgba(55,105,167,0.45)] sm:min-h-32 sm:rounded-[2rem]'>
        <InputGroupTextarea
          aria-label='질문 입력'
          placeholder='프로젝트에 대해 질문하기'
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={onKeyDown}
          rows={2}
          className='min-h-14 px-5 pt-4 sm:px-6'
        />
        <InputGroupAddon
          align='block-end'
          className='justify-between px-4 pb-3 sm:px-5'
        >
          <span className='text-xs text-slate-500'>고정 응답 데모</span>
          <Button
            type='button'
            size='icon-sm'
            disabled={!value.trim() || streaming}
            aria-label='질문 보내기'
            onClick={onSend}
          >
            <ArrowUpRight aria-hidden='true' />
          </Button>
        </InputGroupAddon>
      </InputGroup>
      <p className='mt-3 text-center text-xs leading-5 text-slate-600'>
        입력 내용은 전송되지 않으며, 고정된 예시 답변만 표시됩니다.
      </p>
    </div>
  );
}
