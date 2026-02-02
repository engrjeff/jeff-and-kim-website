export function Map() {
  return (
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
  );
}
