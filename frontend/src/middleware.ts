import { NextResponse } from 'next/server'

export async function middleware() {
  // Middleware disabled - no auth redirects
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Disabled - no routes are processed by middleware
  ],
}
