// store/useAuthStore.ts
import { create } from 'zustand';

interface AuthState {
  isLoggedIn: boolean;
  username : string;
  login: () => void;
  logout: () => void;
  setUserName : (username : string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  username : "",
  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false }),
  setUserName: (username) => set({username: username})
}));
