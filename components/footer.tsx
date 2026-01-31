/* eslint-disable @next/next/no-img-element */

const mapLink =
  'https://maps.google.com/maps/dir//The+Garden+Hive+Events+Place+H5CG%2BRWQ+Manuel+L.+Quezon+Ext+Antipolo,+1870+Rizal/@14.572089,121.1773646,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3397c0ae0565c03d:0xa1934f5719d2ceaa';

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

      <div className="my-4 flex items-center gap-2">
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          View Map
        </a>
        <span>&bull;</span>
        <a href="/rsvp" className="hover:underline">
          RSVP
        </a>
      </div>
    </footer>
  );
}
