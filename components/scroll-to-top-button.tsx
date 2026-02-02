'use client';

import { useEffect, useState, useCallback } from 'react';
import { Button } from './ui/button';
import { ChevronUpIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

function useScrollToTop(threshold: number = 300) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const scrollCallback = () => {
      const scrolledFromTop = window.scrollY;
      setShown(() => scrolledFromTop > threshold);
    };

    window.addEventListener('scroll', scrollCallback);

    scrollCallback();

    return () => {
      window.removeEventListener('scroll', scrollCallback);
    };
  }, [threshold]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { shown, scrollToTop };
}

export function ScrollToTopButton() {
  const { shown, scrollToTop } = useScrollToTop(300);

  return (
    <Button
      type="button"
      size="icon-lg"
      aria-label="scroll to top"
      className={cn(
        'fixed bottom-4 right-4 transition-transform border border-white',
        shown ? 'scale-100' : 'scale-0',
      )}
      onClick={scrollToTop}
    >
      <ChevronUpIcon />
    </Button>
  );
}
