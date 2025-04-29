'use client';

import { useEffect } from 'react';
import { useAuthStore } from '@/stores/useAuthStore';
import { useRouter } from 'next/navigation';

export default function AuthSync() {
  const { login, logout } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch('/api/auth/check-session');
        const data = await res.json();
        
        if (data.isAuthenticated) {
          login();
        } else {
          // If no valid session exists, clear the persisted auth state
          logout();
          //router.push('/')
        }
      } catch (error) {
        // If there's an error checking the session, assume not authenticated
        logout();
        //router.push('/')
      }
    };

    checkSession();
  }, [login, logout]);

  return null; // This component doesn't render anything
} 