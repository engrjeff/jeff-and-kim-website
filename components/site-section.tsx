import { cn } from '@/lib/utils';
import { type ComponentProps } from 'react';

const backgroundClassesMap = {
  '1': 'bg-[url(/assets/hero-mobile.png)] md:bg-[url(/assets/hero-tablet.png)] lg:bg-[url(/assets/hero.png)] bg-no-repeat bg-cover bg-center',
  '2': 'bg-[url(/assets/hero-mobile-2.png)] md:bg-[url(/assets/hero-tablet-2.png)] lg:bg-[url(/assets/hero-2.png)] bg-no-repeat bg-cover bg-center',
  '3': 'bg-[url(/assets/hero-mobile-3.png)] md:bg-[url(/assets/hero-tablet-3.png)] lg:bg-[url(/assets/hero-3.png)] bg-no-repeat bg-cover bg-center',
  '4': 'bg-[url(/assets/hero-mobile-4.png)] md:bg-[url(/assets/hero-tablet-4.png)] lg:bg-[url(/assets/hero-4.png)] bg-no-repeat bg-cover bg-center',
};

export function SiteSection({
  className,
  background,
  ...props
}: ComponentProps<'section'> & { background: '1' | '2' | '3' | '4' }) {
  const backgroundClasses = backgroundClassesMap[background];

  return (
    <section
      className={cn(
        'min-h-screen gap-3 flex flex-col items-center justify-center px-4 py-6',
        backgroundClasses,
        className,
      )}
      {...props}
    />
  );
}
