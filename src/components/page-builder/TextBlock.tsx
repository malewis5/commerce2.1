import { PortableText } from '@portabletext/react';
import React from 'react';
import { components } from '../portable-text';

export default function TextBlock({ block }: any) {
  return (
    <article className='max-w-screen-lg mx-auto px-4 lg:px-0' key={block._key}>
      <div className='mx-auto my-3 prose prose-base dark:prose-invert prose-a:text-blue-500'>
        <PortableText value={block.blockText} components={components} />
      </div>
    </article>
  );
}
