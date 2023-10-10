import { Post } from '@/lib/sanity/schemas/post';
import React from 'react';
import PostCard from '../PostCard';

export default function BlogGrid({ block }: any) {
  return (
    <section className='mt-8 mb-8 px-4'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4'>
        Our Recent Posts
      </h1>
      <div key={block._key} className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {block.blogs.map((blog: Post) => {
          return <PostCard key={blog._id} post={blog} />;
        })}
      </div>
    </section>
  );
}
