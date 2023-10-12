import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.cookies.has('anonId')) {
    return NextResponse.next();
  }

  const response = NextResponse.next();
  const anonId = crypto.randomUUID();
  response.cookies.set('anonId', anonId);

  return response;
}
