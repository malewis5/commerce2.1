import React from 'react';
import { sanityFetch } from '../../../sanity/lib/sanity-fetch';
import { postsQuery } from '../../../sanity/lib/queries';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { components } from '@/components/portable-text';
import Image from 'next/image';
import PostCard from '@/components/PostCard';
import { Post } from '../../../sanity/schemas/post';
import { PortableTextBlock } from 'sanity';

const getHeadline = (post: Post) => {
  if (!post.body) return null;

  const firstH1 = post.body.find(
    (block: PortableTextBlock) =>
      block._type === 'block' && block.style === 'h1'
  );
  return firstH1;
};

const getPreview = (post: Post) => {
  if (!post.body) return null;

  const firstP = post.body.find(
    (block: PortableTextBlock) =>
      block._type === 'block' && block.style === 'normal'
  );
  return firstP;
};

export default async function Page() {
  const posts = await sanityFetch<Post[]>({
    query: postsQuery,
  });

  const headlinePost = posts[0];

  return (
    <main className='container mx-auto px-4 md:px-6 py-8'>
      <section className='mb-8'>
        <h2 className='text-2xl font-bold mb-4'>{headlinePost.title}</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <Image
              alt='Top Story Image'
              className='w-full h-72 object-cover object-center rounded-lg'
              height='400'
              src='https://picsum.photos/600/400'
              width='600'
            />
          </div>
          <div className='flex flex-col justify-center'>
            <PortableText
              value={getHeadline(headlinePost)}
              components={components}
            />
            <div className='line-clamp-3'>
              <PortableText
                value={getPreview(posts[0])}
                components={components}
              />
            </div>
            {headlinePost?.slug?.current && (
              <Link
                className='mt-4'
                href={`/blog/${headlinePost?.slug?.current}`}
              >
                Read More
              </Link>
            )}
          </div>
        </div>
      </section>
      <section className='mb-8'>
        <h2 className='text-2xl font-bold mb-4'>Posts</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {posts.map((post) => {
            return <PostCard key={post._id} post={post} />;
          })}
        </div>
      </section>
    </main>
  );
}
