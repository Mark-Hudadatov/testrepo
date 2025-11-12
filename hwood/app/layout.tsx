import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { IBM_Plex_Sans_Hebrew } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { defaultMetadata } from '@/lib/seo';

const plex = IBM_Plex_Sans_Hebrew({ subsets: ['hebrew', 'latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-plex' });

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={plex.variable}>
      <body className="bg-light font-plex text-dark">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
