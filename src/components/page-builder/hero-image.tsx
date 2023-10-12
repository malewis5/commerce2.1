import Balancer from 'react-wrap-balancer';
import SanityImage from '../sanity-image';
import { IHero } from '@/lib/sanity/schemas/objects/hero';
import Link from 'next/link';
import { Button } from '../ui/button';

export function HeroImage({
  block: { cta, slug, image, heading },
}: {
  block: IHero;
}) {
  const showCta = cta && slug && slug.current;

  return (
    <section className='w-full lg:px-12 mb-8'>
      <div className='lg:container lg:space-y-10 xl:space-y-16'>
        <div className='relative w-full lg:max-w-[1200px] lg:mx-auto'>
          <SanityImage
            className='w-full aspect-[2/1] min-h-[200px] overflow-hidden object-cover object-center'
            height={600}
            image={image}
            width={1200}
            priority={true}
          />
          <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-4 text-center'>
            <div className='space-y-2'>
              <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white mb-4'>
                <Balancer>{heading}</Balancer>
              </h1>
              {showCta && (
                <Button asChild variant={'outline'}>
                  <Link href={slug.current}>{cta}</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
