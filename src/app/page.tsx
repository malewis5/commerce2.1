import { SanityDocument } from 'next-sanity';
import React from 'react';
import Hero from '@/components/page-builder/Hero';
import { pageQuery } from '@/lib/sanity/queries';
import { sanityFetch } from '@/lib/sanity/sanity-fetch';
import BlogGrid from '@/components/page-builder/BlogGrid';
import CollectionGrid from '@/components/page-builder/CollectionGrid';
import { notFound } from 'next/navigation';
import { IPage } from '@/lib/sanity/schemas/documents/page';
import { PortableText } from '@portabletext/react';
import { components } from '@/components/portable-text';

export default async function Page({ params }: { params: { slug: string } }) {
  params.slug = '/';

  const page = await sanityFetch<SanityDocument<IPage>>({
    query: pageQuery,
    params,
    tags: [params.slug],
  });

  if (!page) {
    notFound();
  }

  return (
    <>
      {page.pageBuilder.map((block: any) => {
        if (block._type === 'hero') {
          return <Hero block={block} key={block._key} />;
        } else if (block._type === 'blogGrid') {
          return <BlogGrid block={block} key={block._key} />;
        } else if (block._type === 'collectionGrid') {
          return <CollectionGrid block={block} key={block._key} />;
        } else if (block._type === 'blockObject') {
          return (
            <article
              className='max-w-screen-lg mx-auto px-4 lg:px-0'
              key={block._key}
            >
              <div className='mx-auto my-3 prose prose-base dark:prose-invert prose-a:text-blue-500'>
                <PortableText value={block.blockText} components={components} />
              </div>
            </article>
          );
        }
      })}
    </>
  );
}
