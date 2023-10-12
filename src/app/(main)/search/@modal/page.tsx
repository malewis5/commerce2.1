import { Modal } from '@/components/product/modal';
import React from 'react';

export default function Page({
  searchParams,
}: {
  searchParams: { qv: string; handle: string };
}) {
  console.log(searchParams);
  if (!searchParams.handle || !searchParams.qv) return null;

  return <Modal handle={searchParams.handle} />;
}
