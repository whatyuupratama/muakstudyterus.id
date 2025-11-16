'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
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

export function FAQSection({ items = defaultFAQs }: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className='space-y-2'>
      {items.map((item) => (
        <div key={item.id} className='border-b border-border'>
          <button
            onClick={() => toggleOpen(item.id)}
            className='w-full py-4 px-0 flex items-center justify-between text-left hover:bg-muted/50 transition-colors'
            aria-expanded={openId === item.id}
          >
            <span className='font-medium text-foreground'>{item.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                openId === item.id ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openId === item.id && (
            <div className='pb-4 px-0 text-muted-foreground'>{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
