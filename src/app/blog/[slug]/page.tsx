import Post from '@/components/Post';
import { postPathsQuery, postQuery } from '../../../lib/sanity/queries';
import { sanityFetch, token } from '../../../lib/sanity/sanity-fetch';
import PreviewProvider from '@/components/preview/PreviewProvider';
import { SanityDocument } from 'next-sanity';
import { draftMode } from 'next/headers';
import PreviewPost from '@/components/preview/PreviewPost';
import { client } from '../../../lib/sanity/client';

export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);
  return posts;
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
