import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';

import { SmoothCursor } from '@/components/ui/smooth-cursor';
const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});
export const metadata: Metadata = {
  title:
    'satutitik.id - Joki & Layanan IT | Proyek, Penulisan Ilmiah, Manipulasi Ribuan Data Dan Masih Banyak Lagi',
  description:
    'satutitik.id menyediakan layanan joki proyek, pengembangan perangkat lunak, penulisan dan publikasi ilmiah, serta pengisian seminar coding. Solusi cepat, profesional, dan dapat disesuaikan untuk startup, akademisi, dan tim engineering.',
  keywords: [
    'satutitik.id',
    'joki proyek',
    'layanan IT',
    'pengembangan perangkat lunak',
    'penulisan ilmiah',
    'publikasi ilmiah',
    'manipulasi data',
    'seminar coding',
    'freelance developer',
    'konsultan software',
  ],
  metadataBase: new URL('https://satutitik.id'),
  alternates: {
    canonical: 'https://satutitik.id',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://satutitik.id',
    title:
      'satutitik.id - Joki & Layanan IT | Proyek, Penulisan Ilmiah, Manipulasi Ribuan Data',
    description:
      'satutitik.id menyediakan layanan joki proyek, pengembangan perangkat lunak, penulisan dan publikasi ilmiah, serta pengisian seminar coding. Solusi cepat, profesional, dan dapat disesuaikan untuk startup, akademisi, dan tim engineering.',
    siteName: 'satutitik.id',
    images: [
      {
        url: 'https://satutitik.id/icon.png',
        width: 512,
        height: 512,
        alt: 'satutitik.id logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'satutitik.id - Joki & Layanan IT | Proyek, Penulisan Ilmiah, Manipulasi Ribuan Data',
    description:
      'satutitik.id menyediakan layanan joki proyek, pengembangan perangkat lunak, penulisan dan publikasi ilmiah, serta pengisian seminar coding. Solusi cepat, profesional, dan dapat disesuaikan untuk startup, akademisi, dan tim engineering.',
    images: ['https://satutitik.id/icon.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          disableTransitionOnChange
        >
          <SmoothCursor />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
