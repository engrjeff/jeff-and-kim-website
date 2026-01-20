/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <section className="min-h-screen bg-[url(/assets/hero-mobile.png)] lg:bg-[url(/assets/hero.png)] bg-center bg-cover bg-no-repeat gap-3 flex flex-col items-center justify-center">
        <p className="font-decorative italic text-xl">The wedding of</p>
        <h1 className="text-center font-bold text-7xl text-kimjeff lg:text-9xl font-elegant uppercase tracking-tighter flex items-center">
          Jeff{' '}
          <span className="font-serif font-normal text-2xl inline-block mx-4">
            &
          </span>{' '}
          Kim
        </h1>
        <p className="font-decorative italic text-right text-xl">
          April 20th, 2026 | The Garden Hive
        </p>

        <img
          src="/assets/kimjeff-monogram-only.svg"
          alt="Kim and Jeff"
          className="object-contain size-72 lg:size-96 -my-10 lg:-my-14"
        />

        <blockquote className="text-center italic">
          <p className=" lg:text-xl font-decorative">
            &ldquo;He has made everything beautiful in its time&rdquo;
          </p>
          <cite className="not-italic uppercase tracking-wider text-blue-950 font-semibold font-elegant text-sm">
            Ecclesiastes 3:11
          </cite>
        </blockquote>
      </section>
      <section className="px-6 py-10 lg:p-20 bg-kimjeff text-white text-center space-y-4">
        <h2 className="font-decorative italic font-bold text-lg lg:text-2xl text-center">
          We want to celebrate our union with you!
        </h2>
        <Button asChild size="cta" className="dark font-elegant">
          <Link href="/rsvp">RSVP Now</Link>
        </Button>
      </section>
      <section className="min-h-screen bg-[url(/assets/hero-mobile.png)] lg:bg-[url(/assets/hero.png)] bg-center bg-cover bg-no-repeat gap-3 flex flex-col items-center justify-center">
        <h2 className="font-elegant uppercase tracking-wider font-bold text-4xl text-center mb-8 text-kimjeff">
          Wedding Schedule
        </h2>
        <div className="text-center font-decorative text-lg lg:text-xl">
          <h3 className="italic text-2xl font-semibold mb-4">Ceremony</h3>
          <p>April 20th, 2026 | 3:00 PM</p>
          <p>A private ceremony</p>
          <p>
            @ The Garden Hive <span className="italic">Garden</span>
          </p>
        </div>
        <div className="text-center font-decorative text-lg lg:text-xl">
          <h3 className="italic text-2xl font-semibold mb-4">Reception</h3>
          <p>Immediately follows after the Ceremony</p>
          <p>
            @ The Garden Hive <span className="italic">Hall</span>
          </p>
        </div>
        <div className="text-center font-decorative text-lg lg:text-xl">
          <h3 className="italic text-2xl font-semibold mb-4">Venue</h3>
          <p>The Citywalk Bldg. ML Quezon St. Ext.</p>
          <p className="mb-4">Brgy. San Roque, Antipolo City 1870</p>
          <Button asChild size="cta">
            <a href="#map">View Map</a>
          </Button>
        </div>
      </section>

      <section className="min-h-screen border border-b bg-[url(/assets/hero-mobile.png)] lg:bg-[url(/assets/hero.png)] bg-center bg-cover bg-no-repeat gap-3 flex flex-col items-center justify-center">
        <div className="mb-8">
          <h2 className="font-elegant uppercase tracking-wider font-bold text-4xl text-center text-kimjeff">
            Attire
          </h2>
          <p className="font-decorative text-center">
            We would love to see you in your best and most comfortable
          </p>
        </div>
        <div className="text-center font-decorative text-lg lg:text-xl">
          <h3 className="italic text-2xl font-semibold mb-4">
            For Entourage & Sponsors
          </h3>
          <p>Formal Attire</p>
        </div>
        <div className="text-center font-decorative text-lg lg:text-xl">
          <h3 className="italic text-2xl font-semibold mb-4">For Guests</h3>
          <p>Semi-formal Attire</p>
        </div>

        <img
          src="/assets/kimjeff-attire-color-guide.svg"
          alt="Kim and Jeff"
          className="object-contain -my-40"
        />
      </section>

      <section className="min-h-screen border border-b bg-[url(/assets/hero-mobile.png)] lg:bg-[url(/assets/hero.png)] bg-center bg-cover bg-no-repeat gap-3 flex flex-col items-center justify-center">
        <div className="mb-8">
          <h2 className="font-elegant uppercase tracking-wider font-bold text-4xl text-center text-kimjeff">
            RSVP
          </h2>
          <p className="font-decorative text-center">
            We would really love for you to be part of our special day!
          </p>
        </div>
        <Button asChild size="cta" className="font-elegant">
          <Link href="/rsvp">Count me in</Link>
        </Button>
      </section>
      <section id="map">
        <div className="flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.4732398896967!2d121.17736459999999!3d14.572089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c0ae0565c03d%3A0xa1934f5719d2ceaa!2sThe%20Garden%20Hive%20Events%20Place!5e0!3m2!1sen!2sph!4v1768560484185!5m2!1sen!2sph"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
