import { NextResponse } from 'next/server';
import { getSession } from './lib/session';

export async function middleware(request: Request) {
  const session = await getSession();
  const { pathname } = new URL(request.url);

  // List of protected routes that require authentication
  const protectedRoutes = ['/heroes', '/maps'];
  
  // Check if the current route is protected
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

  if (isProtectedRoute && !session) {
    // Redirect to login if trying to access protected route without session
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// Configure which routes the middleware should run on
export const config = {
  matcher: ['/heroes/:path*', '/maps/:path*']
}; 