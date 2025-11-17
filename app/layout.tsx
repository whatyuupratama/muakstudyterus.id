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
    'bisaselesai.id — Joki & Layanan IT | Proyek, Penulisan Ilmiah, Isi Seminar',
  description:
    'muakstudyterus menyediakan layanan joki proyek, pengembangan perangkat lunak, penulisan dan publikasi ilmiah, serta pengisian seminar coding. Solusi cepat, profesional, dan dapat disesuaikan untuk startup, akademisi, dan tim engineering.',
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
