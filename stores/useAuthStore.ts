
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isLoggedIn: boolean;
  username: string;
  login: () => void;
  logout: () => void;
  setUserName: (username: string) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      username: "",
      login: () => set({ isLoggedIn: true }),
      logout: () => set({ isLoggedIn: false }),
      setUserName: (username) => set({ username: username })
    }),
    {
      name: 'auth-storage', // unique name for localStorage
    }
  )
);
