import { Suspense } from 'react';

import { getCollections } from '@/lib/shopify';
import FilterList from './filter';
import { Skeleton } from '@/components/ui/skeleton';

async function CollectionList() {
  const collections = await getCollections();
  return <FilterList list={collections} title='Collections' />;
}

const activeAndTitles = 'bg-neutral-800 dark:bg-neutral-300';
const items = 'bg-neutral-400 dark:bg-neutral-700';

export default function Collections() {
  return (
    <Suspense
      fallback={
        <div className='col-span-2 hidden h-[400px] w-full flex-none py-4 lg:block'>
          <Skeleton className={activeAndTitles} />
          <Skeleton className={activeAndTitles} />
          <Skeleton className={items} />
          <Skeleton className={items} />
          <Skeleton className={items} />
          <Skeleton className={items} />
          <Skeleton className={items} />
          <Skeleton className={items} />
          <Skeleton className={items} />
          <Skeleton className={items} />
        </div>
      }
    >
      <CollectionList />
    </Suspense>
  );
}
