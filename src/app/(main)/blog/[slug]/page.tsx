import Post from '@/components/blog-post';
import { postQuery } from '../../../../lib/sanity/queries';
import { sanityFetch, token } from '../../../../lib/sanity/sanity-fetch';
import PreviewProvider from '@/components/preview/preview-provider';
import { SanityDocument } from 'next-sanity';
import { draftMode } from 'next/headers';
import PreviewPost from '@/components/preview/preview-post';

export const runtime = 'edge';

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
