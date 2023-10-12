'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

export default function QuickView({
  handle,
  className,
}: {
  handle?: string;
  className?: string;
}) {
  const router = useRouter();

  return (
    <Button
      className={className}
      onClick={() => {
        router.push(`?handle=${handle}&qv=true`);
      }}
    >
      Quick View
    </Button>
  );
}
