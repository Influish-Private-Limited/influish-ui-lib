import { createContext } from "react";
import type { Theme } from "./types";
import { defaultTheme } from "./defaultTheme";

export interface ThemeContextValue {
  theme: Theme;
  setMode: (mode: "light" | "dark") => void;
  toggleMode: () => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: defaultTheme,
  setMode: () => undefined,
  toggleMode: () => undefined,
});

ThemeContext.displayName = "InfluishThemeContext";
