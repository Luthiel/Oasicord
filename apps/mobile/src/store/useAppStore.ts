import { create } from 'zustand';
import type { User, ClothingItem } from '../types';

interface AppState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  wardrobeItems: ClothingItem[];
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  setWardrobeItems: (items: ClothingItem[]) => void;
  logout: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  wardrobeItems: [],
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  setToken: (token) => set({ token }),
  setWardrobeItems: (items) => set({ wardrobeItems: items }),
  logout: () => set({ user: null, token: null, isAuthenticated: false, wardrobeItems: [] }),
}));
