import { SanityDocument } from 'next-sanity';
import React from 'react';
import { pageQuery } from '../../sanity/lib/queries';
import { sanityFetch } from '../../sanity/lib/sanity-fetch';
import Hero from '@/components/Hero';

export default async function Page({ params }: { params: { slug: string } }) {
  params.slug = '/';

  const page = await sanityFetch<SanityDocument>({
    query: pageQuery,
    params,
    tags: [params.slug],
  });

  return (
    <>
      {page.pageBuilder.map((block: any) => {
        if (block._type === 'hero') {
          return <Hero block={block} key={block._key} />;
        }
      })}
    </>
  );
}
