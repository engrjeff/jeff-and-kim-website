import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter, Cinzel, Playfair } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-elegant' });

const playfair = Playfair({
  subsets: ['latin'],
  variable: '--font-decorative',
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Jeff & Kim',
  description: 'The official website of Jeff & Kim',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
