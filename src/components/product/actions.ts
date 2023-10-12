'use server';

import { getAnonId } from '@/app/(main)/actions';
import { kv } from '@vercel/kv';
import { cookies } from 'next/headers';

export const viewItem = async (
  handle: string | undefined
): Promise<String | undefined> => {
  let anonId = cookies().get('anonId')?.value;

  if (!anonId) {
    console.log('No anonId found');
    return;
  }

  try {
    const currentTimestamp = Date.now();
    const score = await kv.zscore(anonId, handle);

    if (score === null) {
      const setSize = await kv.zcard(anonId);

      if (setSize > 5) {
        await kv.zpopmin(anonId, 1);
      }
    }
    await kv.zadd(anonId, { score: currentTimestamp, member: handle });
  } catch (e) {
    console.error('Error:', e);
    return 'Error adding item to viewed items';
  }
};

export const getViewedItems = async () => {
  let anonId = await getAnonId();

  if (!anonId) {
    return;
  }
  try {
    const res: string[] = await kv.zrange(anonId, 1, -1, {
      rev: true,
    });
    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};
