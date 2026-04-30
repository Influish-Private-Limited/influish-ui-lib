import { colors, typography, spacing, borderRadius, shadow, transition, zIndex, border, modal } from "./tokens";
import type { Theme } from "./types";

export const lightTheme: Theme = {
  mode: "light",
  colors,
  semantic: {
    background: {
      default: colors.neutral[50],
      paper: "#ffffff",
      subtle: colors.neutral[100],
    },
    text: {
      primary: colors.neutral[900],
      secondary: colors.neutral[500],
      disabled: colors.neutral[300],
      inverse: "#ffffff",
    },
    border: {
      default: colors.neutral[200],
      focus: colors.primary[500],
      error: colors.error[500],
    },
    action: {
      primary: colors.primary[600],
      primaryHover: colors.primary[700],
      primaryActive: colors.primary[800],
      primaryText: "#ffffff",
    },
  },
  typography,
  spacing,
  border,
  borderRadius,
  shadow,
  transition,
  zIndex,
  modal,
};

export const darkTheme: Theme = {
  mode: "dark",
  colors,
  semantic: {
    background: {
      default: colors.neutral[900],
      paper: colors.neutral[800],
      subtle: colors.neutral[700],
    },
    text: {
      primary: colors.neutral[50],
      secondary: colors.neutral[400],
      disabled: colors.neutral[600],
      inverse: colors.neutral[900],
    },
    border: {
      default: colors.neutral[700],
      focus: colors.primary[400],
      error: colors.error[400],
    },
    action: {
      primary: colors.primary[500],
      primaryHover: colors.primary[400],
      primaryActive: colors.primary[300],
      primaryText: "#ffffff",
    },
  },
  typography,
  spacing,
  border,
  borderRadius,
  shadow,
  transition,
  zIndex,
  modal,
};

export const defaultTheme = lightTheme;
