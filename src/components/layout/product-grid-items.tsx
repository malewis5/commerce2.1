import Grid from '@/components/grid';
import { GridTileImage } from '@/components/grid/tile';
import { Product } from '@/lib/shopify/types';
import Link from 'next/link';
import QuickView from '../quick-view';

export default function ProductGridItems({
  products,
  showQuickView = false,
}: {
  products: Product[];
  showQuickView?: boolean;
}) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item
          key={product.handle}
          className='animate-fadeIn relative group'
        >
          <Link
            className='relative inline-block h-full w-full'
            href={`/product/${product.handle}`}
          >
            <GridTileImage
              alt={product.title}
              label={{
                title: product.title,
                amount: product.priceRange.maxVariantPrice.amount,
                currencyCode: product.priceRange.maxVariantPrice.currencyCode,
              }}
              src={product.featuredImage?.url}
              fill
              sizes='(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw'
            />
          </Link>
          {showQuickView && (
            <div className='absolute inset-0 hidden lg:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'>
              <QuickView
                className='pointer-events-auto'
                handle={product.handle}
              />
            </div>
          )}
        </Grid.Item>
      ))}
    </>
  );
}
