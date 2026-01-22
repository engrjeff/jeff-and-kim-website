/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RSVP',
};

function RSVPPage() {
  return (
    <section className="min-h-screen bg-[url(/assets/hero-mobile.png)] lg:bg-[url(/assets/hero.png)] bg-center bg-cover bg-no-repeat gap-3 flex flex-col items-center justify-center">
      <img
        src="/assets/monogram-v2-on-white.svg"
        alt="Kim and Jeff"
        className="object-contain size-20 mb-6"
      />
      <p className="font-decorative text-right text-xl">The wedding of</p>
      <h2 className="text-center font-bold text-5xl text-kimjeff lg:text-7xl font-elegant uppercase tracking-tighter flex items-center">
        Kim{' '}
        <span className="font-serif font-normal text-2xl inline-block mx-4">
          &
        </span>{' '}
        Jeff
      </h2>
      <p className="font-decorative text-right text-xl">
        April 20, 2026 | The Garden Hive
      </p>

      <div className="w-full max-w-xl p-6 space-y-4">
        <h1 className="font-decorative font-bold text-xl lg:text-3xl text-center">
          RSVP
        </h1>
        <Input
          autoFocus
          className="bg-white h-12 w-full"
          placeholder="Enter your name"
        />
        <Button size="cta" className="font-elegant w-full">
          Confirm My Attendance
        </Button>
      </div>

      <Link href="/">Back to Home</Link>
    </section>
  );
}

export default RSVPPage;
