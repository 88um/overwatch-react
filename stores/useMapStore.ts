
import { create } from "zustand";
import { Map } from "@/types";

interface MapState {
  isActive: boolean;
  map: Map | null;
  show: () => void;
  close: () => void;
  setMap: (map: Map) => void;
}

export const useMapStore = create<MapState>((set: (partial: Partial<MapState>) => void) => ({
  isActive: false,
  map: null,
  show: () => set({ isActive: true }),
  close: () => set({ isActive: false }),
  setMap: (map) => set({ map }),
  
}));