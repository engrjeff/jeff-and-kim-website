import Link from 'next/link';

const menuItems = [
  { name: 'Home', link: '/#home' },
  { name: 'Schedule', link: '/#schedule' },
  { name: 'Venue', link: '/#map' },
  { name: 'RSVP', link: '/rsvp' },
  { name: 'FAQ', link: '#faq' },
];

export function NavigationMenu() {
  return (
    <nav className="fixed top-4 w-full flex justify-center z-10">
      <ul className="p-5 bg-white/70 rounded-full backdrop-blur-lg flex gap-6 text-sm lg:text-lg text-kimjeff font-decorative font-medium lg:font-semibold">
        {menuItems.map((menu) => (
          <li key={menu.name}>
            <Link href={menu.link}>{menu.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
