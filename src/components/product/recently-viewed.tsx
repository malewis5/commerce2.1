import { getProduct } from '@/lib/shopify';
import { Product } from '@/lib/shopify/types';
import Link from 'next/link';
import { GridTileImage } from '../grid/tile';
import { getViewedItems } from './actions';

export async function RecentlyViewed() {
  const productHandles = await getViewedItems();

  let products: (Product | undefined)[] = [];

  if (productHandles && productHandles.length > 0) {
    try {
      products = await Promise.all(
        productHandles.map((handle) => getProduct(handle, 'no-store'))
      );
    } catch (err) {
      console.log(err);
    }
  }

  if (products.length === 0) return null;

  return (
    <div className='my-8'>
      <h2 className='mb-4 text-2xl font-bold'>Recently Viewed</h2>
      <ul className='flex w-full gap-4 overflow-x-auto pt-1'>
        {products.map(
          (product) =>
            product && (
              <li
                key={product.handle}
                className='aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5'
              >
                <Link
                  className='relative h-full w-full'
                  href={`/product/${product.handle}`}
                >
                  <GridTileImage
                    alt={product.title}
                    label={{
                      title: product.title,
                      amount: product.priceRange.maxVariantPrice.amount,
                      currencyCode:
                        product.priceRange.maxVariantPrice.currencyCode,
                    }}
                    src={product.featuredImage?.url}
                    fill
                    sizes='(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw'
                  />
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  );
}
