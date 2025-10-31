import { create } from "zustand";

type InteractionModel = "Teclado" | "Monitor" | "Livro" | "Vitrola" | "Window" | null;

interface i3dInteractionState {
  activeInteraction: InteractionModel;
  setActiveInteraction: (interaction: InteractionModel) => void;

  isPcOn: boolean;
  turnPcOn: () => void;
}

type apps_props = {
  name: string;
  src: string;
  [key: string]: any;
};

interface OsProps {
  apps_taksbar: apps_props[];
}

// #endregion

// #region State Store

export const use3dState = create<i3dInteractionState>((set) => ({
  activeInteraction: null,
  isPcOn: false,
  turnPcOn: () => set({ isPcOn: true }),
  setActiveInteraction: (interaction) => set({ activeInteraction: interaction }),
}));


export const useOsState = create<OsProps>((set) => ({
  apps_taksbar: [
    {
      name: "Explorer",
      src: "",
    },
  ],
}));

// #endregion