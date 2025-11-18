import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from '@/components/ui/terminal';

export function TerminalDemo() {
  const stepColor = 'text-green-500';

  const steps = [
    '✔ Fetching project details...',
    '✔ Analyzing requirements & scope.',
    '✔ Initiating execution phase.',
    '✔ Processing logic & structure.',
    '✔ Optimizing output quality.',
    '✔ Running validation checks.',
    '✔ Finalizing result.',
  ];

  return (
    <Terminal>
      <TypingAnimation>
        &gt; satutitik execute --target=&quot;Your-Goal&quot;
      </TypingAnimation>
      {steps.map((step, index) => (
        <AnimatedSpan key={index} className={stepColor}>
          {step}
        </AnimatedSpan>
      ))}
      <AnimatedSpan className='text-blue-500'>
        <span>ℹ Status:</span>
        <span className='pl-2'>100% Solved.</span>
      </AnimatedSpan>
      <TypingAnimation className='text-muted-foreground'>
        Task completed. Ready for handover.
      </TypingAnimation>
    </Terminal>
  );
}
