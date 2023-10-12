import Post from '@/components/blog-post';
import { postQuery } from '../../../../lib/sanity/queries';
import { sanityFetch, token } from '../../../../lib/sanity/sanity-fetch';
import PreviewProvider from '@/components/preview/preview-provider';
import { SanityDocument } from 'next-sanity';
import { draftMode } from 'next/headers';
import PreviewPost from '@/components/preview/preview-post';
import { Metadata } from 'next';
import { IPost } from '@/lib/sanity/schemas/documents/post';
import { urlForImage } from '@/lib/sanity/image';

export const runtime = 'edge';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await sanityFetch<SanityDocument<IPost>>({
    query: postQuery,
    params,
    tags: [params.slug],
  });

  return {
    title: post.title,
    description: post.body[0].children[0].text,
    authors: [{ name: post?.author?.name ?? process.env.SITE_NAME }],
    openGraph: post.mainImage
      ? {
          images: [
            {
              url: urlForImage(post.mainImage).width(1200).height(630).url(),
              width: 1200,
              height: 630,
              alt: post.mainImage?.alt,
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

export default async function Page({ params }: { params: any }) {
  const isDraftMode = draftMode().isEnabled;
  const post = await sanityFetch<SanityDocument>({
    query: postQuery,
    params,
    tags: [params.slug],
  });

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewPost post={post} />
      </PreviewProvider>
    );
  }

  return <Post post={post} />;
}
