'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import { Gallery } from './gallery';
import { ProductDescription } from './product-description';
import { Image } from '@/lib/shopify/types';
import { Skeleton } from '../ui/skeleton';
import { TAGS } from '@/lib/constants';

const fetcher = (url: string) =>
  fetch(url, {
    next: {
      tags: [TAGS.products],
    },
  }).then((r) => r.json());

export function Modal({ handle }: { handle: string }) {
  const router = useRouter();

  const handleOnOpenChange = (open: boolean) => {
    if (!open) {
      router.back();
    }
  };

  const { data, isLoading, error } = useSWR(
    `/api/product?handle=${handle}`,
    fetcher
  );

  if (error) return null;

  return (
    <Dialog open={true} onOpenChange={handleOnOpenChange}>
      <DialogContent>
        <div className='h-full w-full max-h-[90vh] overflow-auto'>
          {isLoading ? (
            <Skeleton className='relative aspect-square h-full max-h-[550px] w-full overflow-hidden' />
          ) : (
            <>
              <Gallery
                images={data.product.images.map((image: Image) => ({
                  src: image.url,
                  altText: image.altText,
                }))}
              />

              <div className='basis-full lg:basis-2/6'>
                <ProductDescription product={data.product} />
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
