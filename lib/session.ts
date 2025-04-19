'use server'

import { cookies } from 'next/headers';
import { SignJWT, jwtVerify } from 'jose';


const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'super-duper-secret-key');

export async function createSession(username: string) {
  const token = await new SignJWT({ username })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('24h')
    .sign(secret);

  const cookieStore = await cookies();
  cookieStore.set('session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  });
}

export async function getSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get('session');
  if (!session) return null;

  try {
    const { payload } = await jwtVerify(session.value, secret);
    return payload as { username: string };
  } catch {
    return null;
  }
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
} 