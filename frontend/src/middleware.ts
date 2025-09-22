import { type NextRequest, NextResponse } from 'next/server'

export async function middleware(_request: NextRequest) {
  // Middleware disabled - no auth redirects
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Disabled - no routes are processed by middleware
  ],
}
