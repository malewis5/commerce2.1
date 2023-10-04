import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function Home() {
  return (
    <main className='w-full h-screen flex items-center justify-center'>
      <div>
        <Button asChild>
          <Link href='/search'>Let&apos;s shop</Link>
        </Button>
      </div>
    </main>
  );
}
