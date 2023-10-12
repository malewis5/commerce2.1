import { Post } from '@/lib/sanity/schemas/documents/post';
import React from 'react';
import PostCard from '../PostCard';
import Link from 'next/link';
import { Button } from '../ui/button';
import { IBlogGrid } from '@/lib/sanity/schemas/objects/blog-grid';

export default function BlogGrid({ block }: { block: IBlogGrid }) {
  return (
    <section className='mt-8 mb-8 px-4'>
      <Link href='/blog'>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4'>
          Our Recent Posts
        </h1>
      </Link>
      <div
        key={block._key}
        className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-4'
      >
        {block.blogs?.length === 0 ? (
          <p className='text-center text-2xl font-bold'>
            There are no posts yet.
          </p>
        ) : (
          <>
            {block.blogs?.map((blog: Post) => {
              return <PostCard key={blog._id} post={blog} />;
            })}
          </>
        )}
      </div>
      <div className='w-full items-center justify-center flex'>
        <Button asChild>
          <Link href='/blog'>View More</Link>
        </Button>
      </div>
    </section>
  );
}
