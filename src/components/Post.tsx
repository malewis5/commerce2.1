import { SanityDocument } from '@sanity/client';
import { PortableText } from '@portabletext/react';
import { components } from './portable-text';
import SanityImage from './SanityImage';

export default function Post({ post }: { post: SanityDocument }) {
  return (
    <>
      {post && (
        <article className='max-w-screen-lg mx-auto px-4 lg:px-0'>
          <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
            {post.title}
          </h1>
          <p className='text-gray-800 dark:text-gray-400 mb-2'>
            {post?.author?.name ?? process.env.STORE_NAME}
          </p>
          <div className='relative z-0 max-w-screen-lg mx-auto overflow-hidden lg:rounded-lg aspect-video mb-4'>
            <SanityImage priority={true} image={post.mainImage} fill={true} />
          </div>
          <div className='mx-auto my-3 prose prose-base dark:prose-invert prose-a:text-blue-500'>
            {post.body && (
              <PortableText
                value={post.body}
                components={components}
                onMissingComponent={(e) => {
                  console.log(e);
                }}
              />
            )}
          </div>
        </article>
      )}
    </>
  );
}
