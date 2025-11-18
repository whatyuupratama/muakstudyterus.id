import { TerminalDemo } from '@/components/code-side';

export default function SideUnik() {
  return (
    <footer>
      <div className='mx-auto w-full max-w-screen-xl xl:pb-2 '>
        <div className='md:flex md:justify-between px-8 p-4 py-16 sm:pb-16 gap-16'>
          <div className='mb-12 flex-col flex gap-4 min-h-[400px] md:min-h-[500px]'>
            <TerminalDemo />
          </div>
          <div className=''>
            <span className='bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-6xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]'>
              Ditangani langsung oleh praktisi mahir dan peneliti berpengalaman.
              Fokus kami hasil presisi, bukan asal jadi
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
