import { getCollection, getCollectionProducts } from '@/lib/shopify';

import React from 'react';
import ProductGridItems from '../layout/product-grid-items';
import Grid from '../grid';
import { Button } from '../ui/button';
import Link from 'next/link';

export default async function CollectionGrid({ block }: any) {
  const products = await getCollectionProducts({
    collection: block.collection,
    first: 3,
  });

  const collection = await getCollection(block.collection);

  return (
    <section className='mt-8 mb-8 px-4'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4'>
        The {collection?.title} Collection
      </h1>
      {products.length === 0 ? (
        <p className='py-3 text-lg'>{`No products found in this collection`}</p>
      ) : (
        <Grid className='grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          <ProductGridItems products={products} />
        </Grid>
      )}
      <div className='w-full flex items-center justify-center'>
        <Button asChild>
          <Link href={`/search/${block.collection}`}>View Collection</Link>
        </Button>
      </div>
    </section>
  );
}
