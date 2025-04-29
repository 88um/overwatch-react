
import { Hero } from '@/types';
import { create } from 'zustand';


interface HeroState {
  isActive: boolean;
  hero : Hero | undefined;
  open: () => void;
  close: () => void;
  setHero: (hero : Hero) => void;
}

export const useHeroStore = create<HeroState>()(
    (set) => ({
        isActive: false,
        hero: undefined,
        open: () => set({ isActive: true }),
        close: () => set({ isActive: false }),
        setHero: (hero : Hero) => set({ hero })
    })
  
);
