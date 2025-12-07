'use client';

import { BorderBeam } from '@/components/magicui/border-beam';
import TextShimmer from '@/components/magicui/text-shimmer';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { motion } from 'motion/react';
import { LampContainer } from '../ui/lamp';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button';

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <section
      id='hero'
      className='relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8'
    >
      <div className='w-full h-20 flex items-center justify-center px-6'></div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
        ></motion.h1>
      </LampContainer>

      <h1 className='bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]'>
        Segala Kendala Teknis &
        <br className='hidden md:block' />
        Ilmiah, Tuntas di Satu Titik.
      </h1>
      <p className='mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]'>
        Mulai dari Riset, Pengembangan Sistem, hingga Tugas Digital
        <br className='hidden md:block' /> semua kami kerjakan dengan rapi dan
        tepat waktu ribet
      </p>

      <a
        href='https://wa.me/62895326370143?text=Halo!%20Saya%20tertarik%20dengan%20layanan%20satutitik.id.%20Bisa%20konsultasi%20dulu?%20😊'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Chat via WhatsApp'
      >
        <InteractiveHoverButton>
        Chat via WhatsApp
        </InteractiveHoverButton>
      </a>
      <div
        ref={ref}
        className='relative mt-[8rem]  animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]'
      >
        <div
          className={`rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] ${
            inView ? 'before:animate-image-glow' : ''
          }`}
        >
          <BorderBeam
            size={200}
            duration={12}
            delay={11}
            colorFrom='var(--color-one)'
            colorTo='var(--color-two)'
          />

          <Image
            src='/sectionshow.png'
            alt='Hero Image'
            width={1600}
            height={900}
            priority
            className='relative w-full h-full rounded-[inherit] border object-contain'
            sizes='(min-width: 1024px) 960px, 100vw'
          />
        </div>
      </div>
    </section>
  );
}
