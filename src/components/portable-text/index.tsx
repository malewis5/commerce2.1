import { PortableTextReactComponents } from '@portabletext/react';
import { ReactNode } from 'react';
import Balancer from 'react-wrap-balancer';

export const components: Partial<PortableTextReactComponents> = {
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }: { children?: ReactNode }) => (
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4'>
        <Balancer>{children}</Balancer>
      </h1>
    ),
    h2: ({ children }: { children?: ReactNode }) => (
      <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        <Balancer>{children}</Balancer>
      </h2>
    ),
    h3: ({ children }: { children?: ReactNode }) => (
      <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
        <Balancer>{children}</Balancer>
      </h3>
    ),
    h4: ({ children }: { children?: ReactNode }) => (
      <h4 className='scroll-m-20 text-xl font-semibold tracking-tight'>
        <Balancer>{children}</Balancer>
      </h4>
    ),
    normal: ({ children }: { children?: ReactNode }) => (
      <p className='leading-7 [&:not(:first-child)]:mt-2 mb-2'>{children}</p>
    ),
  },
};
