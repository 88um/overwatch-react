//used to sync the session with the client
//client makes a request to the server to check if the session is valid

import { getSession } from '@/lib/session';
import { NextResponse } from 'next/server';

export async function GET() {
  const session = await getSession();
  
  return NextResponse.json({
    isAuthenticated: !!session
  });
} 