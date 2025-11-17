'use client';

import { Button } from '@/components/ui/button';
import { FAQSection } from '@/components/faq-session';
import { Mail } from 'lucide-react';

export default function FAQPage() {
  const faqItems = [
    {
      id: '1',
      question: 'Berapa lama proyek dikerjakan? ',
      answer:
        'Beragam berdasarkan kompleksitas. Untuk proyek sederhana, biasanya 1 - 3 hari.',
    },
    {
      id: '2',
      question: 'Apakah bisa di-refund',
      answer:
        'Proyek yang sudah disepakati (DP sudah ditransfer) tidak dapat di-refund',
    },
    {
      id: '3',
      question: 'Apakah ada jatah revisi?',
      answer:
        'Ada. Maksimal 7x revisi minor (contoh: mengubah warna, tambahan fungsionalitas sederhana, dll.)',
    },
  ];

  return (
    <main className='mx-auto w-full max-w-screen-xl bg-background'>
      <div className='container mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'>
          <div className='flex flex-col justify-start'>
            <h1 className='bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-5xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]'>
              Masih bingung? Tenang, kami siap membantumu
            </h1>
            <p className='text-lg text-muted-foreground mb-8'>
              Jika ada pertanyaan lain yang belum ada di sini boleh tanyakan dan
              konsultasikan langung ke kita
            </p>
          </div>
          <div>
            <FAQSection items={faqItems} />
          </div>
        </div>
      </div>
    </main>
  );
}
