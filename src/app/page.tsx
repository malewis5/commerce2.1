import { SanityDocument } from 'next-sanity';
import React from 'react';
import Hero from '@/components/page-builder/Hero';
import { pageQuery } from '@/lib/sanity/queries';
import { sanityFetch } from '@/lib/sanity/sanity-fetch';
import BlogGrid from '@/components/page-builder/BlogGrid';
import CollectionGrid from '@/components/page-builder/CollectionGrid';

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
        } else if (block._type === 'blogGrid') {
          return <BlogGrid block={block} key={block._key} />;
        } else if (block._type === 'collectionGrid') {
          return <CollectionGrid block={block} key={block._key} />;
        }
      })}
    </>
  );
}
