/* eslint-disable @next/next/no-img-element */

export function Footer() {
  return (
    <footer className="bg-kimjeff text-white px-6 py-10 flex flex-col items-center justify-center">
      <img
        src="/assets/kimjeff-monogram-only-white.svg"
        alt="Kim and Jeff"
        className="object-contain size-20"
        height={80}
        width={80}
      />
      <p className="text-center font-bold font-elegant uppercase tracking-tighter flex items-center">
        Jeff{' '}
        <span className="font-serif font-normal text-xs inline-block mx-4">
          &
        </span>{' '}
        Kim
      </p>
      <p className="font-decorative text-right text-sm">
        April 20th, 2026 @ The Garden Hive
      </p>
    </footer>
  );
}
