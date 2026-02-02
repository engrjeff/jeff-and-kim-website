import { FAQ } from '@/components/faq';
import { Footer } from '@/components/footer';
import { Gallery } from '@/components/gallery';
import { Map } from '@/components/map';
import { NavigationMenu } from '@/components/navigation-menu';
import { OfficialHashtags } from '@/components/official-hashtags';
import { ScrollToTopButton } from '@/components/scroll-to-top-button';

export default function WeddingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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
    </>
  );
}
