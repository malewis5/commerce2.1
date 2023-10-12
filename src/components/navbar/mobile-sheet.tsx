'use client';

import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import Search from './search';
import {
  SheetTrigger,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function MobileSheet({
  navItems,
}: {
  navItems?: { title: string; slug: string }[];
}) {
  const [open, setOpen] = useState(false);
  const currentSearchParams = useSearchParams();
  const previousSearchParams = useRef(currentSearchParams);

  useEffect(() => {
    if (previousSearchParams.current !== currentSearchParams) {
      setOpen(false);
      previousSearchParams.current = currentSearchParams;
    }
  }, [currentSearchParams]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side={'left'} className='w-full md:w-3/4'>
        <SheetHeader>
          <SheetTitle className='w-full items-center justify-start text-start text-2xl'>
            Navigation
          </SheetTitle>
          <Search />
          {navItems &&
            navItems.map((item) => {
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
  );
}
