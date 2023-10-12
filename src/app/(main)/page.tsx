import { SanityDocument } from 'next-sanity';
import React from 'react';
import { pageQuery, postQuery } from '@/lib/sanity/queries';
import { sanityFetch } from '@/lib/sanity/sanity-fetch';
import { notFound } from 'next/navigation';
import { IPage } from '@/lib/sanity/schemas/documents/page';
import { RenderPage } from '@/components/page-builder';
import { Metadata } from 'next';
import { urlForImage } from '@/lib/sanity/image';

export const runtime = 'edge';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  params.slug = '/';

  const page = await sanityFetch<SanityDocument<IPage>>({
    query: pageQuery,
    params,
    tags: [params.slug],
    revalidate: 3600,
  });

  const seo = page?.seo;

  return {
    title: seo?.title || process.env.SITE_NAME,
    description: seo?.description,

    openGraph: seo?.ogImage
      ? {
          images: [
            {
              url: urlForImage(seo.ogImage).width(1200).height(630).url(),
              width: 1200,
              height: 630,
              alt: seo.ogImage.alt,
            },
          ],
        }
      : null,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  params.slug = '/';

  const page = await sanityFetch<SanityDocument<IPage>>({
    query: pageQuery,
    params,
    tags: [params.slug],
    revalidate: 3600,
  });

  if (!page) {
    notFound();
  }

  return <RenderPage page={page} />;
}
