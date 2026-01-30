/* eslint-disable @next/next/no-img-element */
import { CountdownTimer } from '@/components/countdown-timer';
import { RSVPForm } from '@/components/rsvp-form';
import { SiteSection } from '@/components/site-section';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'RSVP',
};

function RSVPPage() {
  return (
    <>
      <SiteSection background="1">
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
          <RSVPForm />
        </div>

        <Link href="/" className="hover:underline">
          &larr; Back to Home
        </Link>
      </SiteSection>
      <section className="text-center px-4 py-6 bg-primary text-white">
        <Suspense>
          <CountdownTimer />
        </Suspense>
      </section>
    </>
  );
}

export default RSVPPage;
