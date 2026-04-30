import type { Theme } from "./types";
export interface ThemeContextValue {
    theme: Theme;
    setMode: (mode: "light" | "dark") => void;
    toggleMode: () => void;
}
export declare const ThemeContext: import("react").Context<ThemeContextValue>;
