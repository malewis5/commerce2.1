import { getCollectionProducts } from '@/lib/shopify';

import React from 'react';
import ProductGridItems from '../layout/product-grid-items';
import Grid from '../grid';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ICollectionGrid } from '@/lib/sanity/schemas/objects/collection-grid';

export async function CollectionGrid({ block }: { block: ICollectionGrid }) {
  const products = await getCollectionProducts({
    collection: block.collection,
    first: 3,
  });

  return (
    <section className='mt-8 mb-8 px-4'>
      <Link href={block.slug}>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4'>
          {block.title}
        </h1>
      </Link>
      <div className='mb-4'>
        {products.length === 0 ? (
          <p className='py-3 text-lg'>No products found in this collection</p>
        ) : (
          <Grid className='grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            <ProductGridItems
              products={products}
              priority={block?.priority ?? false}
            />
          </Grid>
        )}
      </div>
      <div className='w-full flex items-center justify-center'>
        <Button asChild>
          <Link href={block.slug}>View Collection</Link>
        </Button>
      </div>
    </section>
  );
}
