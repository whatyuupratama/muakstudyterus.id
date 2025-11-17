'use client';

import React, { useEffect, useState } from 'react';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

export function Testimoni() {
  return (
    <div className='h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden'>
      <h2 className='text-2xl md:text-3xl font-semibold text-center text-zinc-900 dark:text-white mb-2'>
        Testimoni klien kami
      </h2>

      <p className='text-center text-zinc-600 dark:text-zinc-400 max-w-2xl mb-8 px-4'>
        Dipercaya untuk menyelesaikan lebih dari 70+ proyek atau berbagai solusi
        lainnya
      </p>
      <InfiniteMovingCards
        items={testimonials}
        direction='right'
        speed='slow'
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      'PPT aku awalnya acak banget, tapi dibikin rapi dan enak dilihat. Cepet pula, kaget sendiri.',
    name: 'Nadya',
    title: 'Mahasiswi',
  },

  {
    quote:
      'Supervised learning yang bikin aku mumet berhari-hari, disini sehari langsung jadi. Beneran nolong.',
    name: 'Arya',
    title: 'Informatika',
  },

  {
    quote:
      'Tugas pondokku dibenerin rapi dan sesuai arahan. Nyaman banget komunikasinya.',
    name: 'Mada',
    title: 'Santri',
  },

  {
    quote:
      'Bab 4 ku awalnya ga karuan, tapi dibantuin jadi jelas banget. Rasanya lega parah.',
    name: 'Putri',
    title: 'Statistik',
  },

  {
    quote:
      'Revisiku banyak banget tapi tetep dibantu sabar. Hasil akhirnya rapi, puas banget.',
    name: 'Bintang',
    title: 'Mahasiswa',
  },

  {
    quote:
      'PPT buat presentasi kerja jadi jauh lebih bagus. Sampai ada yang nanya siapa yang ngerjain.',
    name: 'Hendri',
    title: 'Karyawan',
  },

  {
    quote:
      'Niatnya revisi dikit, tapi malah dibagusin semuanya. Senyum sendiri lihat hasilnya.',
    name: 'Zaki',
    title: 'Mahasiswa',
  },

  {
    quote:
      'Deadlinenya ngeri banget tapi tetep selesai cepat dan rapi. Penyelamat banget sih.',
    name: 'Bella',
    title: 'Mahasiswi',
  },

  {
    quote:
      'Dijelasin sekalian pas dibantu supervised learning. Jadi ngerti dan siap buat presentasi.',
    name: 'Rifki',
    title: 'Data Science',
  },

  {
    quote:
      'Pesan PPT plus analisis, dan dua-duanya dibuat rapi. Tinggal presentasi aja, aman.',
    name: 'Cindy',
    title: 'Mahasiswi',
  },
];
