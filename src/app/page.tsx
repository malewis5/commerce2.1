import { SanityDocument } from 'next-sanity';
import React from 'react';
import { pageQuery } from '@/lib/sanity/queries';
import { sanityFetch } from '@/lib/sanity/sanity-fetch';
import { notFound } from 'next/navigation';
import { IPage } from '@/lib/sanity/schemas/documents/page';
import { RenderPage } from '@/components/page-builder';

export const runtime = 'edge';

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

  return <RenderPage page={page} />;
}
