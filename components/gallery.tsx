/* eslint-disable @next/next/no-img-element */

export function Gallery() {
  return (
    <section className="px-4 py-10">
      <div className="max-w-lg mx-auto">
        <p className="text-2xl italic text-center font-semibold font-decorative">
          We invite you to our wedding day!
        </p>
        <img
          src="/assets/kimjeff-collage.png"
          alt="Jeff & Kim"
          className="md:-my-8"
        />
        <p className="text-lg italic text-center font-semibold font-decorative">
          Kim & Jeff
        </p>
      </div>
    </section>
  );
}
