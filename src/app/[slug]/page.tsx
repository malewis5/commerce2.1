import PreviewProvider from '@/components/preview/PreviewProvider';
import { SanityDocument } from 'next-sanity';
import { draftMode } from 'next/headers';
import React from 'react';
import { pageQuery } from '../../../sanity/lib/queries';
import { sanityFetch, token } from '../../../sanity/lib/sanity-fetch';
import Hero from '@/components/Hero';

export default async function Page({ params }: { params: { slug: string } }) {
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
