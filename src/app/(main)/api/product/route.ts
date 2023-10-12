import { getProduct } from '@/lib/shopify';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const handle = searchParams.get('handle');
    if (!handle) throw new Error('No handle provided');
    const product = await getProduct(handle);
    return Response.json({ product });
  } catch (e) {
    console.log(e);
    return Response.json({ error: e });
  }
}
