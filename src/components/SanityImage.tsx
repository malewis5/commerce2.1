import React from 'react';
import Image from 'next/image';
import { urlForImage } from '@/lib/sanity/image';

export default function SanityImage({
  image,
  height,
  width,
  fill = false,
  priority = false,
  className,
}: {
  image: any;
  priority?: boolean;
  height?: number;
  width?: number;
  fill?: boolean;
  className?: string;
}) {
  console.log(image);
  let imageUrl;

  if (width && height && !fill) {
    imageUrl = urlForImage(image)
      .width(width)
      .height(height)
      .dpr(2)
      .quality(80)
      .format('webp')
      .url();
  } else {
    imageUrl = urlForImage(image)
      .width(1920)
      .height(1080)
      .dpr(2)
      .quality(80)
      .format('webp')
      .url();
  }

  const blurUrl = urlForImage(image).width(20).quality(20).url();

  return (
    <Image
      className={className}
      priority={priority}
      src={imageUrl}
      placeholder='blur'
      blurDataURL={blurUrl}
      fill={fill}
      alt={image.alt}
      height={height}
      width={width}
    />
  );
}
