/* eslint-disable @next/next/no-img-element */

export function Footer() {
  return (
    <footer className="bg-primary text-white px-6 py-10 flex flex-col items-center justify-center">
      <img
        src="/assets/monogram-v2-on-dark.svg"
        alt="Kim and Jeff"
        className="object-contain size-16 mb-6"
        height={64}
        width={64}
      />
      <p className="text-center font-bold font-elegant uppercase tracking-tighter flex items-center">
        Kim{' '}
        <span className="font-serif font-normal text-xs inline-block mx-4">
          &
        </span>{' '}
        Jeff
      </p>
      <p className="font-decorative text-right text-sm">
        April 20, 2026 @ The Garden Hive
      </p>
    </footer>
  );
}
