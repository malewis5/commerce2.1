'use client';

import { Button } from '@/components/ui/button';
import { XCircle } from 'lucide-react';
import { useEffect } from 'react';
import { log } from '@logtail/next';

export default function Error({
  error,
  reset,
}: {
  error: any;
  reset: () => void;
}) {
  useEffect(() => {
    log.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div>
          <div className='flex flex-col items-center justify-center space-y-8'>
            <XCircle className='h-24 w-24' />
            <div className='text-center'>
              <h1 className='text-4xl font-bold'>Oops, something went wrong</h1>
            </div>
            <Button
              onClick={reset}
              className='px-8 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-md'
            >
              Go Home
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
