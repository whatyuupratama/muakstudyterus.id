import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';

import { SmoothCursor } from '@/components/ui/smooth-cursor';
import { seoDefaults, siteUrl } from '@/lib/seo';
const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});
export const metadata: Metadata = {
  title: 'satutitik.id - Layanan Solusi IT, Riset, dan Penjoki Tugas Digital',
  description:
    'satutitik.id melayani solusi end-to-end: joki proyek IT, riset & penulisan ilmiah, manipulasi data besar, hingga pendampingan seminar coding. Fokus solusi cepat, profesional, dan siap untuk startup, akademisi, serta tim engineering.',
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
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'satutitik.id - Layanan Solusi IT, Riset, dan Penjoki Tugas Digital',
    description:
      'satutitik.id melayani solusi end-to-end: joki proyek IT, riset & penulisan ilmiah, manipulasi data besar, hingga pendampingan seminar coding. Fokus solusi cepat, profesional, dan siap untuk startup, akademisi, serta tim engineering.',
    siteName: seoDefaults.siteName,
    locale: seoDefaults.locale,
    images: [
      {
        url: new URL('/showgoogle.png', siteUrl).toString(),
        width: 512,
        height: 512,
        alt: 'satutitik.id layanan solusi IT',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'satutitik.id - Layanan Solusi IT, Riset, dan Penjoki Tugas Digital',
    description:
      'satutitik.id melayani solusi end-to-end: joki proyek IT, riset & penulisan ilmiah, manipulasi data besar, hingga pendampingan seminar coding. Fokus solusi cepat, profesional, dan siap untuk startup, akademisi, serta tim engineering.',
    images: [new URL('/showgoogle.png', siteUrl).toString()],
    site: seoDefaults.siteName,
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
