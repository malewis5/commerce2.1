import { Button } from '@/components/ui/button';
import { ShoppingBagIcon } from 'lucide-react';
import Link from 'next/link';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import Cart from './cart';
import { Suspense } from 'react';
import OpenCart from './cart/open-cart';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/search' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
];

export function Navbar() {
  return (
    <header className='mb-8 w-full z-50 bg-white dark:bg-gray-800 shadow-md'>
      <div className='container mx-auto px-6 py-3 md:flex md:justify-between md:items-center'>
        <div className='flex justify-between items-center'>
          <div className='flex md:hidden'>
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
                  <SheetTitle>Navigation</SheetTitle>
                  {navItems.map((item) => {
                    return (
                      <SheetClose asChild key={item.href}>
                        <Link
                          className='text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300'
                          href={item.href}
                        >
                          {item.name}
                        </Link>
                      </SheetClose>
                    );
                  })}
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <div>
            <Link
              className='text-gray-800 dark:text-white text-2xl font-bold md:text-3xl hover:text-gray-700 dark:hover:text-gray-300'
              href='/'
            >
              {process.env.COMPANY_NAME}
            </Link>
          </div>

          <div className='md:hidden flex'>
            <Suspense fallback={<OpenCart />}>
              <Cart />
            </Suspense>
          </div>
        </div>
        <nav className='hidden md:flex space-x-10 items-center justify-center'>
          {navItems.map((item) => {
            return (
              <Link
                key={item.href}
                className='text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300'
                href={item.href}
              >
                {item.name}
              </Link>
            );
          })}
          <div className='hidden md:flex'>
            <Suspense fallback={<OpenCart />}>
              <Cart />
            </Suspense>
          </div>
        </nav>
      </div>
    </header>
  );
}
