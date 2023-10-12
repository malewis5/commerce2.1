'use client';

import { Button } from '@/components/ui/button';
import { log } from '@logtail/next';
import { XCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Error({ error }: { error: any }) {
  useEffect(() => {
    log.error(error);
  }, [error]);

  const router = useRouter();

  return (
    <div>
      <div className='flex flex-col items-center justify-center space-y-8'>
        <XCircle className='h-24 w-24' />
        <div className='text-center'>
          <h1 className='text-4xl font-bold'>
            Oops, we can&apos;t find that product
          </h1>
        </div>
        <Button
          onClick={() => router.back()}
          className='px-8 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-md'
        >
          Go Back
        </Button>
      </div>
    </div>
  );
}
