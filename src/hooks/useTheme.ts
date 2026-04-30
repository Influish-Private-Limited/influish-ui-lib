import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import type { ThemeContextValue } from "../theme/ThemeContext";

/**
 * Access the current InfluishTheme and mode controls.
 *
 * @example
 * ```tsx
 * const { theme, toggleMode } = useTheme();
 * ```
 */
export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}
