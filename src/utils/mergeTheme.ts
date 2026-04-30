import type { Theme, UserTheme, DeepPartial } from "../theme/types";
import { lightTheme, darkTheme } from "../theme/defaultTheme";

function isObject(val: unknown): val is Record<string, unknown> {
  return typeof val === "object" && val !== null && !Array.isArray(val);
}

function deepMerge<T extends Record<string, unknown>>(base: T, override: DeepPartial<T>): T {
  const result = { ...base } as T;
  for (const key in override) {
    const overrideVal = override[key as keyof typeof override];
    const baseVal = base[key as keyof T];
    if (isObject(overrideVal) && isObject(baseVal)) {
      (result as Record<string, unknown>)[key] = deepMerge(
        baseVal as Record<string, unknown>,
        overrideVal as Record<string, unknown>,
      );
    } else if (overrideVal !== undefined) {
      (result as Record<string, unknown>)[key] = overrideVal;
    }
  }
  return result;
}

export function mergeTheme(userTheme?: UserTheme): Theme {
  const mode = userTheme?.mode ?? "light";
  const baseTheme = mode === "dark" ? darkTheme : lightTheme;
  if (!userTheme) return baseTheme;
  const { mode: _mode, ...rest } = userTheme;
  void _mode;
  return deepMerge(baseTheme, rest as DeepPartial<Theme>);
}

export function applyThemeToCssVars(theme: Theme, element: HTMLElement = document.documentElement): void {
  const { semantic, typography, spacing, border, borderRadius, shadow, transition, colors, modal, zIndex } = theme;

  // Semantic
  element.style.setProperty("--it-bg-default", semantic.background.default);
  element.style.setProperty("--it-bg-paper", semantic.background.paper);
  element.style.setProperty("--it-bg-subtle", semantic.background.subtle);
  element.style.setProperty("--it-text-primary", semantic.text.primary);
  element.style.setProperty("--it-text-secondary", semantic.text.secondary);
  element.style.setProperty("--it-text-disabled", semantic.text.disabled);
  element.style.setProperty("--it-text-inverse", semantic.text.inverse);
  element.style.setProperty("--it-border-default", semantic.border.default);
  element.style.setProperty("--it-border-focus", semantic.border.focus);
  element.style.setProperty("--it-border-error", semantic.border.error);
  element.style.setProperty("--it-action-primary", semantic.action.primary);
  element.style.setProperty("--it-action-primary-hover", semantic.action.primaryHover);
  element.style.setProperty("--it-action-primary-active", semantic.action.primaryActive);
  element.style.setProperty("--it-action-primary-text", semantic.action.primaryText);
  if (semantic) {
    Object.entries(semantic).forEach(([key, val]) => {
      if (isObject(val)) {
        Object.entries(val).forEach(([subKey, subVal]) => {
          element.style.setProperty(`--it-${key}-${subKey}`, subVal as string);
        });
      }
    });
  }

  // Primary palette
  if (colors?.primary) {
    Object.entries(colors.primary).forEach(([shade, val]) => {
      element.style.setProperty(`--it-primary-${shade}`, val as string);
    });
  }

  // Secondary palette
  if (colors?.secondary) {
    Object.entries(colors.secondary).forEach(([shade, val]) => {
      element.style.setProperty(`--it-secondary-${shade}`, val as string);
    });
  }

  if (typography) {
    Object.entries(typography).forEach(([k, v]) => {
      const prop = k.replace(/[A-Z]/g, "-$&").toLowerCase();
      if (typeof v === "string") {
        element.style.setProperty(`--it-${prop}`, v);
      } else if (isObject(v)) {
        Object.entries(v).forEach(([subKey, subVal]) => {
          if (k === "fontFamily" && subKey === "base") {
            element.style.setProperty("--it-font-family", subVal as string);
          }
          element.style.setProperty(`--it-${prop}-${subKey}`, subVal as string);
        });
      }
    });
  }

  // Spacing
  if (spacing) {
    Object.entries(spacing).forEach(([k, v]) => {
      element.style.setProperty(`--it-space-${k}`, v as string);
    });
  }

  // Border
  if (border?.width) {
    Object.entries(border.width).forEach(([k, v]) => {
      element.style.setProperty(`--it-border-width-${k}`, v as string);
    });
  }
  if (border?.style) {
    Object.entries(border.style).forEach(([k, v]) => {
      element.style.setProperty(`--it-border-style-${k}`, v as string);
    });
  }

  // Border radius
  if (borderRadius) {
    Object.entries(borderRadius).forEach(([k, v]) => {
      element.style.setProperty(`--it-radius-${k}`, v as string);
    });
  }

  // Modal sizing
  if (modal) {
    Object.entries(modal).forEach(([k, v]) => {
      element.style.setProperty(`--it-modal-${k}`, v as string);
    });
  }

  // Shadows
  if (shadow) {
    Object.entries(shadow).forEach(([k, v]) => {
      element.style.setProperty(`--it-shadow-${k}`, v as string);
    });
  }

  // Z-Index
  if (zIndex) {
    Object.entries(zIndex).forEach(([k, v]) => {
      element.style.setProperty(`--it-z-${k}`, v.toString());
    });
  }

  // Transitions
  if (transition?.fast) element.style.setProperty("--it-transition-fast", transition.fast);
  if (transition?.base) element.style.setProperty("--it-transition-base", transition.base);
  if (transition?.slow) element.style.setProperty("--it-transition-slow", transition.slow);

  // Other colors
  if (colors?.error) {
    Object.entries(colors.error).forEach(([shade, val]) => {
      element.style.setProperty(`--it-error-${shade}`, val as string);
    });
  }
  if (colors?.success) {
    Object.entries(colors.success).forEach(([shade, val]) => {
      element.style.setProperty(`--it-success-${shade}`, val as string);
    });
  }
  if (colors?.warning) {
    Object.entries(colors.warning).forEach(([shade, val]) => {
      element.style.setProperty(`--it-warning-${shade}`, val as string);
    });
  }
}
