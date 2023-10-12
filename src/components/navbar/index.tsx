import Link from 'next/link';
import Cart from '../cart';
import { Suspense } from 'react';
import OpenCart from '../cart/open-cart';
import Search from './search';
import MobileMenu from './mobile-menu';
import { sanityFetch } from '@/lib/sanity/sanity-fetch';
import { SanityDocument } from 'next-sanity';
import { navigationQuery } from '@/lib/sanity/queries';

export async function Navbar() {
  const { navItems } = await sanityFetch<
    SanityDocument<{ navItems: { title: string; slug: string }[] }>
  >({
    query: navigationQuery,
    params: { tag: 'main' },
    tags: ['navigation'],
  });

  console.log(navItems);

  return (
    <nav className='relative flex items-center justify-between p-4 lg:px-6 mb-8 shadow-md bg-white'>
      <Suspense>
        <MobileMenu navItems={navItems} />
      </Suspense>
      <div className='hidden lg:flex w-full items-center'>
        <div className='flex w-full md:w-1/3'>
          <Link
            className='text-gray-800 dark:text-white text-2xl font-bold md:text-3xl hover:text-gray-700 dark:hover:text-gray-300'
            href='/'
          >
            {process.env.COMPANY_NAME}
          </Link>
        </div>
        <div className='flex w-full md:w-1/3'>
          <Search />
        </div>
        <div className='flex w-full md:w-1/3 justify-end'>
          <div className='hidden lg:flex space-x-5 xl:space-x-10 items-center'>
            <Suspense>
              {navItems.map((item) => {
                return (
                  <Link
                    key={item.slug}
                    className='text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300'
                    href={item.slug}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </Suspense>
            <div className='hidden md:flex'>
              <Suspense fallback={<OpenCart />}>
                <Cart />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
