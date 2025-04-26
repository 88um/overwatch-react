
import { Map } from '@/types';
import { create } from 'zustand';


interface MapState {
  isActive: boolean;
  map : Map | undefined;
  show: () => void;
  close: () => void;
  setMap: (map : Map) => void;
}

export const useMapStore = create<MapState>()(
    (set) => ({
        isActive: false,
        map: undefined,
        show: () => set({ isActive: true }),
        close: () => set({ isActive: false }),
        setMap: (map : Map) => set({ map })
    })
  
);
