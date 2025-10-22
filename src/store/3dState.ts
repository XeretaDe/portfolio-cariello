import { create } from "zustand";

// #region Types

interface i3dStateProps {
  isOnPC: boolean;
  isControlling: boolean;
  isClicked: boolean;
  setClicked: () => void;
  setState: () => void;
  model: "Teclado" | "Monitor" | "Livro" | "Vitrola" | "Default"
}

type apps_props = {
  name: string,
  src: string,
  [key: string]: any
}

interface OsProps {
  apps_taksbar: apps_props[]
}



// #endregion

// #region State Store

const use3dState = create<i3dStateProps>((set) => ({
  isOnPC: false,
  isControlling: false,
  isClicked: false,
  setClicked: () => set((state) => ({ isClicked: !state.isClicked})),
  setState: () => set((state) => ({ isOnPC: !state.isOnPC })),
  model: "Default"
}));


const useSafeGuard = create(() => ({

}))



export const useOsState = create<OsProps>((set) => ({
  apps_taksbar: [
    {
      name: "Explorer",
      src: ""
    }
  ]
}))

// #endregion