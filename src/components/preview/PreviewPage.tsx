'use client';

import { useParams } from 'next/navigation';
import type { SanityDocument } from '@sanity/client';
import { useLiveQuery } from '@sanity/preview-kit';
import { postQuery } from '../../../sanity/lib/queries';
import Hero from '@/components/Hero';

export default function PreviewPage({ page }: { page: SanityDocument }) {
  const params = useParams();
  const [data] = useLiveQuery(page, postQuery, params);

  return (
    <>
      {data.pageBuilder.map((block: any) => {
        if (block._type === 'hero') {
          return <Hero block={block} key={block._key} />;
        }
      })}
    </>
  );
}
