import Link from 'next/link';

const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Shop',
    href: '/shop',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'About',
    href: '/about',
  },
];

export const Navbar = () => {
  return (
    <nav>
      <ul className='flex gap-2'>
        {navItems.map((item) => {
          return (
            <li key={item.href}>
              <Link href={item.href}>
                <p>{item.label}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
