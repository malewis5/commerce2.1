import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';
import { revalidatePath, revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

const secret = process.env.SANITY_CONTENT_PAGE_WEBHOOK_SECRET ?? '';

export async function POST(request: Request) {
  const topic = request.headers.get('x-sanity-topic');
  const signature = request.headers.get(SIGNATURE_HEADER_NAME) || '';
  const body = await request.json();

  const isBlogPageUpdate = topic === 'post';
  const isPageUpdate = topic === 'page';

  if (!isValidSignature(JSON.stringify(body), signature, secret)) {
    console.error('Invalid sanity webhook secret');
    return NextResponse.json({ status: 200 });
  }

  if (!isBlogPageUpdate && !isPageUpdate) {
    return NextResponse.json({ status: 200 });
  }

  if (isBlogPageUpdate) {
    console.log(
      `Received webhook for ${topic} with body: ${JSON.stringify(body)}`
    );

    const slug = body.slug.current;
    const tag = `${slug}`;

    console.log(`Revalidating tag: ${tag}`);
    revalidateTag(tag);

    console.log(`Revalidating path: /blog`);
    revalidatePath('/blog');
  }

  if (isPageUpdate) {
    console.log(
      `Received webhook for ${topic} with body: ${JSON.stringify(body)}`
    );

    const slug = body.slug.current;
    const tag = `${slug}`;

    console.log(`Revalidating tag: ${tag}`);
    revalidateTag(tag);
  }

  return NextResponse.json({ status: 200, revalidated: true, now: Date.now() });
}
