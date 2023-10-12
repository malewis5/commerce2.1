'use server';

import { cookies } from 'next/headers';

export async function createAnonId() {
  let anonId = cookies().get('anonId')?.value;
  if (!anonId) {
    anonId = crypto.randomUUID();
    cookies().set('anonId', anonId);
  }
  return anonId;
}

export async function getAnonId() {
  let anonId = cookies().get('anonId')?.value;
  if (!anonId) {
    return null;
  }
  return anonId;
}
