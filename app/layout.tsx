import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter, Cinzel, Playfair } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site';
import { Footer } from '@/components/footer';
import { FAQ } from '@/components/faq';
import { NavigationMenu } from '@/components/navigation-menu';
import { ConvexClientProvider } from '@/components/convex-client-provider';
import { ScrollToTopButton } from '@/components/scroll-to-top-button';
import { Map } from '@/components/map';
import { OfficialHashtags } from '@/components/official-hashtags';
import { Gallery } from '@/components/gallery';

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
  title: {
    template: `%s | ${site.title}`,
    default: site.title,
  },
  description: site.description,
  openGraph: {
    title: site.title,
    images: [
      {
        url: site.opengraphImage,
        alt: site.title,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${playfair.variable} antialiased`}
      >
        <ConvexClientProvider>
          <NavigationMenu />
          <main>
            {children}
            <Gallery />
            <OfficialHashtags />
            <Map />
            <FAQ />
          </main>
          <Footer />
          <ScrollToTopButton />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
