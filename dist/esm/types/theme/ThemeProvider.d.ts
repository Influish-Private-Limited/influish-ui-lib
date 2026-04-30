import React from "react";
import type { ReactNode } from "react";
import type { UserTheme } from "./types";
export interface ThemeProviderProps {
    /** Optional partial theme overrides */
    theme?: UserTheme;
    /** Initial color mode; defaults to "light" */
    defaultMode?: "light" | "dark";
    children: ReactNode;
}
/**
 * `ThemeProvider` wraps your application and injects the InfluishTheme
 * design tokens as CSS custom properties on `<html>`.
 *
 * Note: You should import the library's CSS in your root file:
 * import 'influish-theme/styles.css';
 */
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
export default ThemeProvider;
