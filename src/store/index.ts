import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import dynamic from 'next/dynamic'



type ThemeProp = "dark" | "white";

interface ThemeStoreProps {
  theme: boolean;
  setTheme: () => void;
}

interface LoadingState {
  isFirstTime: boolean;
  setLoad: (state: boolean) => void;
}

// export const useLanguageStore = create((set) => ({
//   lang: "us",
//   setLanguage: (language: string) => set({ lang: language }),
// }));

interface LanguageState {
  language: string;
  setLanguage: (l: string) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: "en-US",
      setLanguage: (l: string) => set({ language: l }),
    }),
    {
      name: "language-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
export const useThemeStore = create<ThemeStoreProps>((set) => ({
  theme: false,
  setTheme: () => set((state) => ({ theme: !state.theme })),
}));

export const useLoadingStore = create<LoadingState>()(
  persist(
    (set, get) => ({
      isFirstTime: true,
      setLoad: (state: boolean) => set({ isFirstTime: state }),
    }),
    {
      name: "LoadingCookie",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
