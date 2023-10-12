import Link from 'next/link';
import React, { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';
import Cart from '@/components/cart';
import OpenCart from '@/components/cart/open-cart';
import Search from './search';

export default function MobileMenu({
  navItems,
}: {
  navItems: { title: string; slug: string }[];
}) {
  return (
    <div className='flex w-full lg:hidden items-center'>
      <Sheet>
        <SheetTrigger>
          <Button size='icon' variant='outline' asChild>
            <>
              <svg
                className=' h-6 w-6'
                fill='none'
                height='24'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                width='24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <line x1='4' x2='20' y1='12' y2='12' />
                <line x1='4' x2='20' y1='6' y2='6' />
                <line x1='4' x2='20' y1='18' y2='18' />
              </svg>
              <span className='sr-only'>Open main menu</span>
            </>
          </Button>
        </SheetTrigger>
        <SheetContent side={'left'} className='w-full md:w-3/4'>
          <SheetHeader>
            <SheetTitle className='w-full items-center justify-start text-start text-2xl'>
              Navigation
            </SheetTitle>
            <Search />
            {navItems.map((item) => {
              return (
                <SheetClose asChild key={item.slug}>
                  <Link
                    className='text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 text-start text-xl border-b-2'
                    href={item.slug}
                  >
                    {item.title}
                  </Link>
                </SheetClose>
              );
            })}
          </SheetHeader>
        </SheetContent>
      </Sheet>
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
