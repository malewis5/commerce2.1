import { CartItem } from '@/lib/shopify/types';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

import { useTransition } from 'react';
import LoadingDots from '../loading-dots';
import { removeItem } from './actions';
import { XIcon } from 'lucide-react';

export default function DeleteItemButton({ item }: { item: CartItem }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      aria-label='Remove cart item'
      onClick={() => {
        startTransition(async () => {
          const error = await removeItem(item.id);

          if (error) {
            // Trigger the error boundary in the root error.js
            throw new Error(error.toString());
          }

          router.refresh();
        });
      }}
      disabled={isPending}
      className={clsx(
        'ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-neutral-500 transition-all duration-200',
        {
          'cursor-not-allowed px-0': isPending,
        }
      )}
    >
      {isPending ? (
        <LoadingDots className='bg-white' />
      ) : (
        <XIcon className='hover:text-accent-3 mx-[1px] h-4 w-4 text-white dark:text-black' />
      )}
    </button>
  );
}
