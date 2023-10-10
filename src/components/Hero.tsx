import Image from 'next/image';
import Balancer from 'react-wrap-balancer';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '../../sanity/lib/client';

interface IHeroProps {
  block: {
    _type: 'hero';
    tagline: string;
    _key: string;
    image: [Object];
    heading: string;
  };
}

export default function Hero({
  block: { tagline, image, heading },
}: IHeroProps) {
  const imageBuilder = imageUrlBuilder(client);

  return (
    <section className='w-full pt-12 md:pt-24 lg:pt-32'>
      <div className='md:container md:space-y-10 xl:space-y-16'>
        <div className='relative max-w-[1200px] mx-auto'>
          <Image
            alt='Hero'
            className='w-full aspect-[2/1] overflow-hidden object-cover object-center'
            height='600'
            src={imageBuilder.image(image).width(1200).height(600).url()}
            width='1200'
            priority={true}
          />
          <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-4 text-center'>
            <div className='space-y-2'>
              <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white'>
                <Balancer>{heading}</Balancer>
              </h1>
              <p className='mx-auto max-w-[700px] text-white md:text-xl'>
                <Balancer>{tagline}</Balancer>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
