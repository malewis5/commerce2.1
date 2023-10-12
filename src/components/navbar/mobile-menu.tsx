import Link from 'next/link';
import React, { Suspense } from 'react';
import Cart from '@/components/cart';
import OpenCart from '@/components/cart/open-cart';
import MobileSheet from './mobile-sheet';

export default function MobileMenu({
  navItems,
}: {
  navItems?: { title: string; slug: string }[];
}) {
  return (
    <div className='flex w-full lg:hidden items-center'>
      <MobileSheet navItems={navItems} />
      <div className='flex flex-grow justify-center'>
        <Link
          className='text-gray-800 dark:text-white text-2xl font-bold md:text-3xl hover:text-gray-700 dark:hover:text-gray-300'
          href='/'
        >
          {process.env.COMPANY_NAME}
        </Link>
      </div>

      <Suspense fallback={<OpenCart />}>
        <Cart />
      </Suspense>
    </div>
  );
}
