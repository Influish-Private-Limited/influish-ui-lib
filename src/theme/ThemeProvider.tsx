import React, { useState, useEffect, useMemo, useCallback } from "react";
import type { ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";
import { mergeTheme, applyThemeToCssVars } from "../utils/mergeTheme";
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
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme: userTheme,
  defaultMode = "light",
  children,
}) => {
  const [mode, setModeState] = useState<"light" | "dark">(
    userTheme?.mode ?? defaultMode,
  );

  const resolvedTheme = useMemo(
    () => mergeTheme({ ...userTheme, mode }),
    [userTheme, mode],
  );

  useEffect(() => {
    applyThemeToCssVars(resolvedTheme);
    // Set data-theme for CSS selector matching [data-theme="dark"]
    document.documentElement.setAttribute("data-theme", mode);
    // Compatibility with any existing data-it-mode selectors
    document.documentElement.setAttribute("data-it-mode", mode);
    
    document.documentElement.style.setProperty(
      "--it-font-family",
      resolvedTheme.typography.fontFamily.base,
    );
  }, [resolvedTheme, mode]);

  const setMode = useCallback((m: "light" | "dark") => setModeState(m), []);
  const toggleMode = useCallback(
    () => setModeState((prev) => (prev === "light" ? "dark" : "light")),
    [],
  );

  return (
    <ThemeContext.Provider value={{ theme: resolvedTheme, setMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
