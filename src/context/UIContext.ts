import { createContext, useState } from "react";
import { UI_Props } from "../types/ContextTypes";

export const GlobalLayout = createContext<UI_Props>({
  isClicked: false,
  setIsClicked: () => {},
});
