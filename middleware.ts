import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
//redirect to dashboard page if URL is matched from the config variable
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/dashboard', request.url))
}
 
export const config = {
  matcher: '/',
}