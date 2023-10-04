import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Post } from '../../sanity/schemas/post';

export default function PostCard({ post }: { post: Post }) {
  const date = new Date(post.publishedAt);
  const formattedDate = date.toLocaleDateString();

  return (
    <Link
      href={`/blog/${post.slug?.current}`}
      key={post._id}
      className='transition duration-200 transform hover:scale-105'
    >
      <div className='shadow hover:shadow-lg rounded-lg'>
        <Image
          alt='Politics Story Image'
          className='w-full h-64 object-cover object-center rounded-lg rounded-b-none'
          height='400'
          src='https://picsum.photos/600/400'
          width='600'
        />
        <div className='p-2'>
          <h3 className='text-xl font-bold mb-2 mt-2'>{post.title}</h3>
          <p className='text-zinc-500 dark:text-zinc-400'>{formattedDate}</p>
          <p className='mt-1'>Read More</p>
        </div>
      </div>
    </Link>
  );
}
