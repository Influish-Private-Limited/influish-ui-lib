import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import React, { createContext, useState, useMemo, useEffect, useCallback, useContext, useRef, forwardRef, useId } from 'react';
import { createPortal } from 'react-dom';

const colors = {
    primary: {
        50: "#eef2ff",
        100: "#e0e7ff",
        200: "#c7d2fe",
        300: "#a5b4fc",
        400: "#818cf8",
        500: "#6366f1",
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81",
    },
    secondary: {
        50: "#fdf4ff",
        100: "#fae8ff",
        200: "#f5d0fe",
        300: "#f0abfc",
        400: "#e879f9",
        500: "#d946ef",
        600: "#c026d3",
        700: "#a21caf",
        800: "#86198f",
        900: "#701a75",
    },
    neutral: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",
    },
    success: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
    },
    warning: {
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24",
        500: "#f59e0b",
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f",
    },
    error: {
        50: "#fff1f2",
        100: "#ffe4e6",
        200: "#fecdd3",
        300: "#fda4af",
        400: "#fb7185",
        500: "#f43f5e",
        600: "#e11d48",
        700: "#be123c",
        800: "#9f1239",
        900: "#881337",
    },
    info: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
    },
};
const typography = {
    fontFamily: {
        base: "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif",
        mono: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
    },
    fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
    },
    fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
    },
    lineHeight: {
        tight: "1.25",
        base: "1.5",
        relaxed: "1.75",
    },
};
const spacing = {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    32: "8rem",
};
const border = {
    width: {
        none: "0",
        thin: "1px",
        base: "2px",
        thick: "4px",
    },
    style: {
        solid: "solid",
        dashed: "dashed",
        dotted: "dotted",
    },
};
const borderRadius = {
    none: "0",
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    "2xl": "1.5rem",
    full: "9999px",
};
const shadow = {
    none: "none",
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
};
const transition = {
    fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
    base: "250ms cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "400ms cubic-bezier(0.4, 0, 0.2, 1)",
};
const zIndex = {
    base: 0,
    dropdown: 100,
    sticky: 200,
    overlay: 300,
    modal: 400,
    toast: 500,
    tooltip: 600,
};
const modal = {
    sm: "24rem",
    md: "36rem",
    lg: "52rem",
    xl: "72rem",
};

const lightTheme = {
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
const darkTheme = {
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
const defaultTheme = lightTheme;

const ThemeContext = createContext({
    theme: defaultTheme,
    setMode: () => undefined,
    toggleMode: () => undefined,
});
ThemeContext.displayName = "InfluishThemeContext";

function isObject(val) {
    return typeof val === "object" && val !== null && !Array.isArray(val);
}
function deepMerge(base, override) {
    const result = { ...base };
    for (const key in override) {
        const overrideVal = override[key];
        const baseVal = base[key];
        if (isObject(overrideVal) && isObject(baseVal)) {
            result[key] = deepMerge(baseVal, overrideVal);
        }
        else if (overrideVal !== undefined) {
            result[key] = overrideVal;
        }
    }
    return result;
}
function mergeTheme(userTheme) {
    const mode = userTheme?.mode ?? "light";
    const baseTheme = mode === "dark" ? darkTheme : lightTheme;
    if (!userTheme)
        return baseTheme;
    const { mode: _mode, ...rest } = userTheme;
    return deepMerge(baseTheme, rest);
}
function applyThemeToCssVars(theme, element = document.documentElement) {
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
                    element.style.setProperty(`--it-${key}-${subKey}`, subVal);
                });
            }
        });
    }
    // Primary palette
    if (colors?.primary) {
        Object.entries(colors.primary).forEach(([shade, val]) => {
            element.style.setProperty(`--it-primary-${shade}`, val);
        });
    }
    // Secondary palette
    if (colors?.secondary) {
        Object.entries(colors.secondary).forEach(([shade, val]) => {
            element.style.setProperty(`--it-secondary-${shade}`, val);
        });
    }
    if (typography) {
        Object.entries(typography).forEach(([k, v]) => {
            const prop = k.replace(/[A-Z]/g, "-$&").toLowerCase();
            if (typeof v === "string") {
                element.style.setProperty(`--it-${prop}`, v);
            }
            else if (isObject(v)) {
                Object.entries(v).forEach(([subKey, subVal]) => {
                    if (k === "fontFamily" && subKey === "base") {
                        element.style.setProperty("--it-font-family", subVal);
                    }
                    element.style.setProperty(`--it-${prop}-${subKey}`, subVal);
                });
            }
        });
    }
    // Spacing
    if (spacing) {
        Object.entries(spacing).forEach(([k, v]) => {
            element.style.setProperty(`--it-space-${k}`, v);
        });
    }
    // Border
    if (border?.width) {
        Object.entries(border.width).forEach(([k, v]) => {
            element.style.setProperty(`--it-border-width-${k}`, v);
        });
    }
    if (border?.style) {
        Object.entries(border.style).forEach(([k, v]) => {
            element.style.setProperty(`--it-border-style-${k}`, v);
        });
    }
    // Border radius
    if (borderRadius) {
        Object.entries(borderRadius).forEach(([k, v]) => {
            element.style.setProperty(`--it-radius-${k}`, v);
        });
    }
    // Modal sizing
    if (modal) {
        Object.entries(modal).forEach(([k, v]) => {
            element.style.setProperty(`--it-modal-${k}`, v);
        });
    }
    // Shadows
    if (shadow) {
        Object.entries(shadow).forEach(([k, v]) => {
            element.style.setProperty(`--it-shadow-${k}`, v);
        });
    }
    // Z-Index
    if (zIndex) {
        Object.entries(zIndex).forEach(([k, v]) => {
            element.style.setProperty(`--it-z-${k}`, v.toString());
        });
    }
    // Transitions
    if (transition?.fast)
        element.style.setProperty("--it-transition-fast", transition.fast);
    if (transition?.base)
        element.style.setProperty("--it-transition-base", transition.base);
    if (transition?.slow)
        element.style.setProperty("--it-transition-slow", transition.slow);
    // Other colors
    if (colors?.error) {
        Object.entries(colors.error).forEach(([shade, val]) => {
            element.style.setProperty(`--it-error-${shade}`, val);
        });
    }
    if (colors?.success) {
        Object.entries(colors.success).forEach(([shade, val]) => {
            element.style.setProperty(`--it-success-${shade}`, val);
        });
    }
    if (colors?.warning) {
        Object.entries(colors.warning).forEach(([shade, val]) => {
            element.style.setProperty(`--it-warning-${shade}`, val);
        });
    }
}

/**
 * `ThemeProvider` wraps your application and injects the InfluishTheme
 * design tokens as CSS custom properties on `<html>`.
 *
 * Note: You should import the library's CSS in your root file:
 * import 'influish-theme/styles.css';
 */
const ThemeProvider = ({ theme: userTheme, defaultMode = "light", children, }) => {
    const [mode, setModeState] = useState(userTheme?.mode ?? defaultMode);
    const resolvedTheme = useMemo(() => mergeTheme({ ...userTheme, mode }), [userTheme, mode]);
    useEffect(() => {
        applyThemeToCssVars(resolvedTheme);
        // Set data-theme for CSS selector matching [data-theme="dark"]
        document.documentElement.setAttribute("data-theme", mode);
        // Compatibility with any existing data-it-mode selectors
        document.documentElement.setAttribute("data-it-mode", mode);
        document.documentElement.style.setProperty("--it-font-family", resolvedTheme.typography.fontFamily.base);
    }, [resolvedTheme, mode]);
    const setMode = useCallback((m) => setModeState(m), []);
    const toggleMode = useCallback(() => setModeState((prev) => (prev === "light" ? "dark" : "light")), []);
    return (jsx(ThemeContext.Provider, { value: { theme: resolvedTheme, setMode, toggleMode }, children: children }));
};

/**
 * Access the current InfluishTheme and mode controls.
 *
 * @example
 * ```tsx
 * const { theme, toggleMode } = useTheme();
 * ```
 */
function useTheme() {
    return useContext(ThemeContext);
}

/**
 * Tracks whether a CSS media query matches.
 *
 * @example
 * ```tsx
 * const isMobile = useMediaQuery("(max-width: 768px)");
 * ```
 */
function useMediaQuery(query) {
    const [matches, setMatches] = useState(() => {
        if (typeof window === "undefined")
            return false;
        return window.matchMedia(query).matches;
    });
    useEffect(() => {
        if (typeof window === "undefined")
            return;
        const mql = window.matchMedia(query);
        setMatches(mql.matches);
        const handler = (e) => setMatches(e.matches);
        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
    }, [query]);
    return matches;
}

let _counter = 0;
function uid() {
    return `snackbar-${++_counter}-${Date.now()}`;
}
/**
 * Manage a queue of toast/snackbar notifications.
 *
 * @example
 * ```tsx
 * const { messages, show } = useSnackbar();
 * show("Saved!", "success");
 * ```
 */
function useSnackbar(maxMessages = 5) {
    const [messages, setMessages] = useState([]);
    const timers = useRef(new Map());
    const dismiss = useCallback((id) => {
        const t = timers.current.get(id);
        if (t) {
            clearTimeout(t);
            timers.current.delete(id);
        }
        setMessages((prev) => prev.filter((m) => m.id !== id));
    }, []);
    const show = useCallback((message, severity = "info", duration = 4000) => {
        const id = uid();
        setMessages((prev) => {
            const next = [...prev, { id, message, severity, duration }];
            return next.slice(-maxMessages);
        });
        if (duration > 0) {
            const t = setTimeout(() => dismiss(id), duration);
            timers.current.set(id, t);
        }
    }, [dismiss, maxMessages]);
    const dismissAll = useCallback(() => {
        timers.current.forEach((t) => clearTimeout(t));
        timers.current.clear();
        setMessages([]);
    }, []);
    useEffect(() => {
        const map = timers.current;
        return () => {
            map.forEach((t) => clearTimeout(t));
            map.clear();
        };
    }, []);
    return { messages, show, dismiss, dismissAll };
}

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

/**
 * Concatenates two arrays faster than the array spread operator.
 */
const concatArrays = (array1, array2) => {
  // Pre-allocate for better V8 optimization
  const combinedArray = new Array(array1.length + array2.length);
  for (let i = 0; i < array1.length; i++) {
    combinedArray[i] = array1[i];
  }
  for (let i = 0; i < array2.length; i++) {
    combinedArray[array1.length + i] = array2[i];
  }
  return combinedArray;
};

// Factory function ensures consistent object shapes
const createClassValidatorObject = (classGroupId, validator) => ({
  classGroupId,
  validator
});
// Factory ensures consistent ClassPartObject shape
const createClassPartObject = (nextPart = new Map(), validators = null, classGroupId) => ({
  nextPart,
  validators,
  classGroupId
});
const CLASS_PART_SEPARATOR = '-';
const EMPTY_CONFLICTS = [];
// I use two dots here because one dot is used as prefix for class groups in plugins
const ARBITRARY_PROPERTY_PREFIX = 'arbitrary..';
const createClassGroupUtils = config => {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  const getClassGroupId = className => {
    if (className.startsWith('[') && className.endsWith(']')) {
      return getGroupIdForArbitraryProperty(className);
    }
    const classParts = className.split(CLASS_PART_SEPARATOR);
    // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and skip it.
    const startIndex = classParts[0] === '' && classParts.length > 1 ? 1 : 0;
    return getGroupRecursive(classParts, startIndex, classMap);
  };
  const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
    if (hasPostfixModifier) {
      const modifierConflicts = conflictingClassGroupModifiers[classGroupId];
      const baseConflicts = conflictingClassGroups[classGroupId];
      if (modifierConflicts) {
        if (baseConflicts) {
          // Merge base conflicts with modifier conflicts
          return concatArrays(baseConflicts, modifierConflicts);
        }
        // Only modifier conflicts
        return modifierConflicts;
      }
      // Fall back to without postfix if no modifier conflicts
      return baseConflicts || EMPTY_CONFLICTS;
    }
    return conflictingClassGroups[classGroupId] || EMPTY_CONFLICTS;
  };
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
};
const getGroupRecursive = (classParts, startIndex, classPartObject) => {
  const classPathsLength = classParts.length - startIndex;
  if (classPathsLength === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[startIndex];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  if (nextClassPartObject) {
    const result = getGroupRecursive(classParts, startIndex + 1, nextClassPartObject);
    if (result) return result;
  }
  const validators = classPartObject.validators;
  if (validators === null) {
    return undefined;
  }
  // Build classRest string efficiently by joining from startIndex onwards
  const classRest = startIndex === 0 ? classParts.join(CLASS_PART_SEPARATOR) : classParts.slice(startIndex).join(CLASS_PART_SEPARATOR);
  const validatorsLength = validators.length;
  for (let i = 0; i < validatorsLength; i++) {
    const validatorObj = validators[i];
    if (validatorObj.validator(classRest)) {
      return validatorObj.classGroupId;
    }
  }
  return undefined;
};
/**
 * Get the class group ID for an arbitrary property.
 *
 * @param className - The class name to get the group ID for. Is expected to be string starting with `[` and ending with `]`.
 */
const getGroupIdForArbitraryProperty = className => className.slice(1, -1).indexOf(':') === -1 ? undefined : (() => {
  const content = className.slice(1, -1);
  const colonIndex = content.indexOf(':');
  const property = content.slice(0, colonIndex);
  return property ? ARBITRARY_PROPERTY_PREFIX + property : undefined;
})();
/**
 * Exported for testing only
 */
const createClassMap = config => {
  const {
    theme,
    classGroups
  } = config;
  return processClassGroups(classGroups, theme);
};
// Split into separate functions to maintain monomorphic call sites
const processClassGroups = (classGroups, theme) => {
  const classMap = createClassPartObject();
  for (const classGroupId in classGroups) {
    const group = classGroups[classGroupId];
    processClassesRecursively(group, classMap, classGroupId, theme);
  }
  return classMap;
};
const processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
  const len = classGroup.length;
  for (let i = 0; i < len; i++) {
    const classDefinition = classGroup[i];
    processClassDefinition(classDefinition, classPartObject, classGroupId, theme);
  }
};
// Split into separate functions for each type to maintain monomorphic call sites
const processClassDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
  if (typeof classDefinition === 'string') {
    processStringDefinition(classDefinition, classPartObject, classGroupId);
    return;
  }
  if (typeof classDefinition === 'function') {
    processFunctionDefinition(classDefinition, classPartObject, classGroupId, theme);
    return;
  }
  processObjectDefinition(classDefinition, classPartObject, classGroupId, theme);
};
const processStringDefinition = (classDefinition, classPartObject, classGroupId) => {
  const classPartObjectToEdit = classDefinition === '' ? classPartObject : getPart(classPartObject, classDefinition);
  classPartObjectToEdit.classGroupId = classGroupId;
};
const processFunctionDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
  if (isThemeGetter(classDefinition)) {
    processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
    return;
  }
  if (classPartObject.validators === null) {
    classPartObject.validators = [];
  }
  classPartObject.validators.push(createClassValidatorObject(classGroupId, classDefinition));
};
const processObjectDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
  const entries = Object.entries(classDefinition);
  const len = entries.length;
  for (let i = 0; i < len; i++) {
    const [key, value] = entries[i];
    processClassesRecursively(value, getPart(classPartObject, key), classGroupId, theme);
  }
};
const getPart = (classPartObject, path) => {
  let current = classPartObject;
  const parts = path.split(CLASS_PART_SEPARATOR);
  const len = parts.length;
  for (let i = 0; i < len; i++) {
    const part = parts[i];
    let next = current.nextPart.get(part);
    if (!next) {
      next = createClassPartObject();
      current.nextPart.set(part, next);
    }
    current = next;
  }
  return current;
};
// Type guard maintains monomorphic check
const isThemeGetter = func => 'isThemeGetter' in func && func.isThemeGetter === true;

// LRU cache implementation using plain objects for simplicity
const createLruCache = maxCacheSize => {
  if (maxCacheSize < 1) {
    return {
      get: () => undefined,
      set: () => {}
    };
  }
  let cacheSize = 0;
  let cache = Object.create(null);
  let previousCache = Object.create(null);
  const update = (key, value) => {
    cache[key] = value;
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = Object.create(null);
    }
  };
  return {
    get(key) {
      let value = cache[key];
      if (value !== undefined) {
        return value;
      }
      if ((value = previousCache[key]) !== undefined) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (key in cache) {
        cache[key] = value;
      } else {
        update(key, value);
      }
    }
  };
};
const IMPORTANT_MODIFIER = '!';
const MODIFIER_SEPARATOR = ':';
const EMPTY_MODIFIERS = [];
// Pre-allocated result object shape for consistency
const createResultObject = (modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition, isExternal) => ({
  modifiers,
  hasImportantModifier,
  baseClassName,
  maybePostfixModifierPosition,
  isExternal
});
const createParseClassName = config => {
  const {
    prefix,
    experimentalParseClassName
  } = config;
  /**
   * Parse class name into parts.
   *
   * Inspired by `splitAtTopLevelOnly` used in Tailwind CSS
   * @see https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
   */
  let parseClassName = className => {
    // Use simple array with push for better performance
    const modifiers = [];
    let bracketDepth = 0;
    let parenDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    const len = className.length;
    for (let index = 0; index < len; index++) {
      const currentCharacter = className[index];
      if (bracketDepth === 0 && parenDepth === 0) {
        if (currentCharacter === MODIFIER_SEPARATOR) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + 1;
          continue;
        }
        if (currentCharacter === '/') {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === '[') bracketDepth++;else if (currentCharacter === ']') bracketDepth--;else if (currentCharacter === '(') parenDepth++;else if (currentCharacter === ')') parenDepth--;
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.slice(modifierStart);
    // Inline important modifier check
    let baseClassName = baseClassNameWithImportantModifier;
    let hasImportantModifier = false;
    if (baseClassNameWithImportantModifier.endsWith(IMPORTANT_MODIFIER)) {
      baseClassName = baseClassNameWithImportantModifier.slice(0, -1);
      hasImportantModifier = true;
    } else if (
    /**
     * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
     * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
     */
    baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER)) {
      baseClassName = baseClassNameWithImportantModifier.slice(1);
      hasImportantModifier = true;
    }
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
    return createResultObject(modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition);
  };
  if (prefix) {
    const fullPrefix = prefix + MODIFIER_SEPARATOR;
    const parseClassNameOriginal = parseClassName;
    parseClassName = className => className.startsWith(fullPrefix) ? parseClassNameOriginal(className.slice(fullPrefix.length)) : createResultObject(EMPTY_MODIFIERS, false, className, undefined, true);
  }
  if (experimentalParseClassName) {
    const parseClassNameOriginal = parseClassName;
    parseClassName = className => experimentalParseClassName({
      className,
      parseClassName: parseClassNameOriginal
    });
  }
  return parseClassName;
};

/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */
const createSortModifiers = config => {
  // Pre-compute weights for all known modifiers for O(1) comparison
  const modifierWeights = new Map();
  // Assign weights to sensitive modifiers (highest priority, but preserve order)
  config.orderSensitiveModifiers.forEach((mod, index) => {
    modifierWeights.set(mod, 1000000 + index); // High weights for sensitive mods
  });
  return modifiers => {
    const result = [];
    let currentSegment = [];
    // Process modifiers in one pass
    for (let i = 0; i < modifiers.length; i++) {
      const modifier = modifiers[i];
      // Check if modifier is sensitive (starts with '[' or in orderSensitiveModifiers)
      const isArbitrary = modifier[0] === '[';
      const isOrderSensitive = modifierWeights.has(modifier);
      if (isArbitrary || isOrderSensitive) {
        // Sort and flush current segment alphabetically
        if (currentSegment.length > 0) {
          currentSegment.sort();
          result.push(...currentSegment);
          currentSegment = [];
        }
        result.push(modifier);
      } else {
        // Regular modifier - add to current segment for batch sorting
        currentSegment.push(modifier);
      }
    }
    // Sort and add any remaining segment items
    if (currentSegment.length > 0) {
      currentSegment.sort();
      result.push(...currentSegment);
    }
    return result;
  };
};
const createConfigUtils = config => ({
  cache: createLruCache(config.cacheSize),
  parseClassName: createParseClassName(config),
  sortModifiers: createSortModifiers(config),
  ...createClassGroupUtils(config)
});
const SPLIT_CLASSES_REGEX = /\s+/;
const mergeClassList = (classList, configUtils) => {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds,
    sortModifiers
  } = configUtils;
  /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */
  const classGroupsInConflict = [];
  const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
  let result = '';
  for (let index = classNames.length - 1; index >= 0; index -= 1) {
    const originalClassName = classNames[index];
    const {
      isExternal,
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    if (isExternal) {
      result = originalClassName + (result.length > 0 ? ' ' + result : result);
      continue;
    }
    let hasPostfixModifier = !!maybePostfixModifierPosition;
    let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        // Not a Tailwind class
        result = originalClassName + (result.length > 0 ? ' ' + result : result);
        continue;
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        // Not a Tailwind class
        result = originalClassName + (result.length > 0 ? ' ' + result : result);
        continue;
      }
      hasPostfixModifier = false;
    }
    // Fast path: skip sorting for empty or single modifier
    const variantModifier = modifiers.length === 0 ? '' : modifiers.length === 1 ? modifiers[0] : sortModifiers(modifiers).join(':');
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.indexOf(classId) > -1) {
      // Tailwind class omitted due to conflict
      continue;
    }
    classGroupsInConflict.push(classId);
    const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
    for (let i = 0; i < conflictGroups.length; ++i) {
      const group = conflictGroups[i];
      classGroupsInConflict.push(modifierId + group);
    }
    // Tailwind class not in conflict
    result = originalClassName + (result.length > 0 ? ' ' + result : result);
  }
  return result;
};

/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */
const twJoin = (...classLists) => {
  let index = 0;
  let argument;
  let resolvedValue;
  let string = '';
  while (index < classLists.length) {
    if (argument = classLists[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
};
const toValue = mix => {
  // Fast path for strings
  if (typeof mix === 'string') {
    return mix;
  }
  let resolvedValue;
  let string = '';
  for (let k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
};
const createTailwindMerge = (createConfigFirst, ...createConfigRest) => {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall;
  const initTailwindMerge = classList => {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  };
  const tailwindMerge = classList => {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  };
  functionToCall = initTailwindMerge;
  return (...args) => functionToCall(twJoin(...args));
};
const fallbackThemeArr = [];
const fromTheme = key => {
  const themeGetter = theme => theme[key] || fallbackThemeArr;
  themeGetter.isThemeGetter = true;
  return themeGetter;
};
const arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
const arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
const fractionRegex = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/;
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
// Shadow always begins with x and y offset separated by underscore optionally prepended by inset
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
const isFraction = value => fractionRegex.test(value);
const isNumber = value => !!value && !Number.isNaN(Number(value));
const isInteger = value => !!value && Number.isInteger(Number(value));
const isPercent = value => value.endsWith('%') && isNumber(value.slice(0, -1));
const isTshirtSize = value => tshirtUnitRegex.test(value);
const isAny = () => true;
const isLengthOnly = value =>
// `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
// For example, `hsl(0 0% 0%)` would be classified as a length without this check.
// I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
const isNever = () => false;
const isShadow = value => shadowRegex.test(value);
const isImage = value => imageRegex.test(value);
const isAnyNonArbitrary = value => !isArbitraryValue(value) && !isArbitraryVariable(value);
const isArbitrarySize = value => getIsArbitraryValue(value, isLabelSize, isNever);
const isArbitraryValue = value => arbitraryValueRegex.test(value);
const isArbitraryLength = value => getIsArbitraryValue(value, isLabelLength, isLengthOnly);
const isArbitraryNumber = value => getIsArbitraryValue(value, isLabelNumber, isNumber);
const isArbitraryWeight = value => getIsArbitraryValue(value, isLabelWeight, isAny);
const isArbitraryFamilyName = value => getIsArbitraryValue(value, isLabelFamilyName, isNever);
const isArbitraryPosition = value => getIsArbitraryValue(value, isLabelPosition, isNever);
const isArbitraryImage = value => getIsArbitraryValue(value, isLabelImage, isImage);
const isArbitraryShadow = value => getIsArbitraryValue(value, isLabelShadow, isShadow);
const isArbitraryVariable = value => arbitraryVariableRegex.test(value);
const isArbitraryVariableLength = value => getIsArbitraryVariable(value, isLabelLength);
const isArbitraryVariableFamilyName = value => getIsArbitraryVariable(value, isLabelFamilyName);
const isArbitraryVariablePosition = value => getIsArbitraryVariable(value, isLabelPosition);
const isArbitraryVariableSize = value => getIsArbitraryVariable(value, isLabelSize);
const isArbitraryVariableImage = value => getIsArbitraryVariable(value, isLabelImage);
const isArbitraryVariableShadow = value => getIsArbitraryVariable(value, isLabelShadow, true);
const isArbitraryVariableWeight = value => getIsArbitraryVariable(value, isLabelWeight, true);
// Helpers
const getIsArbitraryValue = (value, testLabel, testValue) => {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return testLabel(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
};
const getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = false) => {
  const result = arbitraryVariableRegex.exec(value);
  if (result) {
    if (result[1]) {
      return testLabel(result[1]);
    }
    return shouldMatchNoLabel;
  }
  return false;
};
// Labels
const isLabelPosition = label => label === 'position' || label === 'percentage';
const isLabelImage = label => label === 'image' || label === 'url';
const isLabelSize = label => label === 'length' || label === 'size' || label === 'bg-size';
const isLabelLength = label => label === 'length';
const isLabelNumber = label => label === 'number';
const isLabelFamilyName = label => label === 'family-name';
const isLabelWeight = label => label === 'number' || label === 'weight';
const isLabelShadow = label => label === 'shadow';
const getDefaultConfig = () => {
  /**
   * Theme getters for theme variable namespaces
   * @see https://tailwindcss.com/docs/theme#theme-variable-namespaces
   */
  /***/
  const themeColor = fromTheme('color');
  const themeFont = fromTheme('font');
  const themeText = fromTheme('text');
  const themeFontWeight = fromTheme('font-weight');
  const themeTracking = fromTheme('tracking');
  const themeLeading = fromTheme('leading');
  const themeBreakpoint = fromTheme('breakpoint');
  const themeContainer = fromTheme('container');
  const themeSpacing = fromTheme('spacing');
  const themeRadius = fromTheme('radius');
  const themeShadow = fromTheme('shadow');
  const themeInsetShadow = fromTheme('inset-shadow');
  const themeTextShadow = fromTheme('text-shadow');
  const themeDropShadow = fromTheme('drop-shadow');
  const themeBlur = fromTheme('blur');
  const themePerspective = fromTheme('perspective');
  const themeAspect = fromTheme('aspect');
  const themeEase = fromTheme('ease');
  const themeAnimate = fromTheme('animate');
  /**
   * Helpers to avoid repeating the same scales
   *
   * We use functions that create a new array every time they're called instead of static arrays.
   * This ensures that users who modify any scale by mutating the array (e.g. with `array.push(element)`) don't accidentally mutate arrays in other parts of the config.
   */
  /***/
  const scaleBreak = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'];
  const scalePosition = () => ['center', 'top', 'bottom', 'left', 'right', 'top-left',
  // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
  'left-top', 'top-right',
  // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
  'right-top', 'bottom-right',
  // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
  'right-bottom', 'bottom-left',
  // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
  'left-bottom'];
  const scalePositionWithArbitrary = () => [...scalePosition(), isArbitraryVariable, isArbitraryValue];
  const scaleOverflow = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'];
  const scaleOverscroll = () => ['auto', 'contain', 'none'];
  const scaleUnambiguousSpacing = () => [isArbitraryVariable, isArbitraryValue, themeSpacing];
  const scaleInset = () => [isFraction, 'full', 'auto', ...scaleUnambiguousSpacing()];
  const scaleGridTemplateColsRows = () => [isInteger, 'none', 'subgrid', isArbitraryVariable, isArbitraryValue];
  const scaleGridColRowStartAndEnd = () => ['auto', {
    span: ['full', isInteger, isArbitraryVariable, isArbitraryValue]
  }, isInteger, isArbitraryVariable, isArbitraryValue];
  const scaleGridColRowStartOrEnd = () => [isInteger, 'auto', isArbitraryVariable, isArbitraryValue];
  const scaleGridAutoColsRows = () => ['auto', 'min', 'max', 'fr', isArbitraryVariable, isArbitraryValue];
  const scaleAlignPrimaryAxis = () => ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch', 'baseline', 'center-safe', 'end-safe'];
  const scaleAlignSecondaryAxis = () => ['start', 'end', 'center', 'stretch', 'center-safe', 'end-safe'];
  const scaleMargin = () => ['auto', ...scaleUnambiguousSpacing()];
  const scaleSizing = () => [isFraction, 'auto', 'full', 'dvw', 'dvh', 'lvw', 'lvh', 'svw', 'svh', 'min', 'max', 'fit', ...scaleUnambiguousSpacing()];
  const scaleSizingInline = () => [isFraction, 'screen', 'full', 'dvw', 'lvw', 'svw', 'min', 'max', 'fit', ...scaleUnambiguousSpacing()];
  const scaleSizingBlock = () => [isFraction, 'screen', 'full', 'lh', 'dvh', 'lvh', 'svh', 'min', 'max', 'fit', ...scaleUnambiguousSpacing()];
  const scaleColor = () => [themeColor, isArbitraryVariable, isArbitraryValue];
  const scaleBgPosition = () => [...scalePosition(), isArbitraryVariablePosition, isArbitraryPosition, {
    position: [isArbitraryVariable, isArbitraryValue]
  }];
  const scaleBgRepeat = () => ['no-repeat', {
    repeat: ['', 'x', 'y', 'space', 'round']
  }];
  const scaleBgSize = () => ['auto', 'cover', 'contain', isArbitraryVariableSize, isArbitrarySize, {
    size: [isArbitraryVariable, isArbitraryValue]
  }];
  const scaleGradientStopPosition = () => [isPercent, isArbitraryVariableLength, isArbitraryLength];
  const scaleRadius = () => [
  // Deprecated since Tailwind CSS v4.0.0
  '', 'none', 'full', themeRadius, isArbitraryVariable, isArbitraryValue];
  const scaleBorderWidth = () => ['', isNumber, isArbitraryVariableLength, isArbitraryLength];
  const scaleLineStyle = () => ['solid', 'dashed', 'dotted', 'double'];
  const scaleBlendMode = () => ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'];
  const scaleMaskImagePosition = () => [isNumber, isPercent, isArbitraryVariablePosition, isArbitraryPosition];
  const scaleBlur = () => [
  // Deprecated since Tailwind CSS v4.0.0
  '', 'none', themeBlur, isArbitraryVariable, isArbitraryValue];
  const scaleRotate = () => ['none', isNumber, isArbitraryVariable, isArbitraryValue];
  const scaleScale = () => ['none', isNumber, isArbitraryVariable, isArbitraryValue];
  const scaleSkew = () => [isNumber, isArbitraryVariable, isArbitraryValue];
  const scaleTranslate = () => [isFraction, 'full', ...scaleUnambiguousSpacing()];
  return {
    cacheSize: 500,
    theme: {
      animate: ['spin', 'ping', 'pulse', 'bounce'],
      aspect: ['video'],
      blur: [isTshirtSize],
      breakpoint: [isTshirtSize],
      color: [isAny],
      container: [isTshirtSize],
      'drop-shadow': [isTshirtSize],
      ease: ['in', 'out', 'in-out'],
      font: [isAnyNonArbitrary],
      'font-weight': ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'],
      'inset-shadow': [isTshirtSize],
      leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
      perspective: ['dramatic', 'near', 'normal', 'midrange', 'distant', 'none'],
      radius: [isTshirtSize],
      shadow: [isTshirtSize],
      spacing: ['px', isNumber],
      text: [isTshirtSize],
      'text-shadow': [isTshirtSize],
      tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest']
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ['auto', 'square', isFraction, isArbitraryValue, isArbitraryVariable, themeAspect]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ['container'],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isNumber, isArbitraryValue, isArbitraryVariable, themeContainer]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      'break-after': [{
        'break-after': scaleBreak()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      'break-before': [{
        'break-before': scaleBreak()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      'break-inside': [{
        'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column']
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      'box-decoration': [{
        'box-decoration': ['slice', 'clone']
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ['border', 'content']
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ['sr-only', 'not-sr-only'],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ['right', 'left', 'none', 'start', 'end']
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ['left', 'right', 'both', 'none', 'start', 'end']
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ['isolate', 'isolation-auto'],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      'object-fit': [{
        object: ['contain', 'cover', 'fill', 'none', 'scale-down']
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      'object-position': [{
        object: scalePositionWithArbitrary()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: scaleOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-x': [{
        'overflow-x': scaleOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-y': [{
        'overflow-y': scaleOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: scaleOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-x': [{
        'overscroll-x': scaleOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-y': [{
        'overscroll-y': scaleOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
      /**
       * Inset
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: scaleInset()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-x': [{
        'inset-x': scaleInset()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-y': [{
        'inset-y': scaleInset()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        'inset-s': scaleInset(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: scaleInset()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        'inset-e': scaleInset(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: scaleInset()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-bs': [{
        'inset-bs': scaleInset()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-be': [{
        'inset-be': scaleInset()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: scaleInset()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: scaleInset()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: scaleInset()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: scaleInset()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ['visible', 'invisible', 'collapse'],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [isInteger, 'auto', isArbitraryVariable, isArbitraryValue]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [isFraction, 'full', 'auto', themeContainer, ...scaleUnambiguousSpacing()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      'flex-direction': [{
        flex: ['row', 'row-reverse', 'col', 'col-reverse']
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      'flex-wrap': [{
        flex: ['nowrap', 'wrap', 'wrap-reverse']
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [isNumber, isFraction, 'auto', 'initial', 'none', isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ['', isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ['', isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [isInteger, 'first', 'last', 'none', isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      'grid-cols': [{
        'grid-cols': scaleGridTemplateColsRows()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start-end': [{
        col: scaleGridColRowStartAndEnd()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start': [{
        'col-start': scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-end': [{
        'col-end': scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      'grid-rows': [{
        'grid-rows': scaleGridTemplateColsRows()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start-end': [{
        row: scaleGridColRowStartAndEnd()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start': [{
        'row-start': scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-end': [{
        'row-end': scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      'grid-flow': [{
        'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense']
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      'auto-cols': [{
        'auto-cols': scaleGridAutoColsRows()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      'auto-rows': [{
        'auto-rows': scaleGridAutoColsRows()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: scaleUnambiguousSpacing()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-x': [{
        'gap-x': scaleUnambiguousSpacing()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-y': [{
        'gap-y': scaleUnambiguousSpacing()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      'justify-content': [{
        justify: [...scaleAlignPrimaryAxis(), 'normal']
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      'justify-items': [{
        'justify-items': [...scaleAlignSecondaryAxis(), 'normal']
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      'justify-self': [{
        'justify-self': ['auto', ...scaleAlignSecondaryAxis()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      'align-content': [{
        content: ['normal', ...scaleAlignPrimaryAxis()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      'align-items': [{
        items: [...scaleAlignSecondaryAxis(), {
          baseline: ['', 'last']
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      'align-self': [{
        self: ['auto', ...scaleAlignSecondaryAxis(), {
          baseline: ['', 'last']
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      'place-content': [{
        'place-content': scaleAlignPrimaryAxis()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      'place-items': [{
        'place-items': [...scaleAlignSecondaryAxis(), 'baseline']
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      'place-self': [{
        'place-self': ['auto', ...scaleAlignSecondaryAxis()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: scaleUnambiguousSpacing()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: scaleMargin()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: scaleMargin()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: scaleMargin()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: scaleMargin()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: scaleMargin()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: scaleMargin()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: scaleMargin()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: scaleMargin()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: scaleMargin()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: scaleMargin()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: scaleMargin()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      'space-x': [{
        'space-x': scaleUnambiguousSpacing()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      'space-x-reverse': ['space-x-reverse'],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      'space-y': [{
        'space-y': scaleUnambiguousSpacing()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      'space-y-reverse': ['space-y-reverse'],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: scaleSizing()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      'inline-size': [{
        inline: ['auto', ...scaleSizingInline()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      'min-inline-size': [{
        'min-inline': ['auto', ...scaleSizingInline()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      'max-inline-size': [{
        'max-inline': ['none', ...scaleSizingInline()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      'block-size': [{
        block: ['auto', ...scaleSizingBlock()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      'min-block-size': [{
        'min-block': ['auto', ...scaleSizingBlock()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      'max-block-size': [{
        'max-block': ['none', ...scaleSizingBlock()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [themeContainer, 'screen', ...scaleSizing()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      'min-w': [{
        'min-w': [themeContainer, 'screen', /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
        'none', ...scaleSizing()]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      'max-w': [{
        'max-w': [themeContainer, 'screen', 'none', /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
        'prose', /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
        {
          screen: [themeBreakpoint]
        }, ...scaleSizing()]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ['screen', 'lh', ...scaleSizing()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      'min-h': [{
        'min-h': ['screen', 'lh', 'none', ...scaleSizing()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      'max-h': [{
        'max-h': ['screen', 'lh', ...scaleSizing()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      'font-size': [{
        text: ['base', themeText, isArbitraryVariableLength, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      'font-smoothing': ['antialiased', 'subpixel-antialiased'],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      'font-style': ['italic', 'not-italic'],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      'font-weight': [{
        font: [themeFontWeight, isArbitraryVariableWeight, isArbitraryWeight]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      'font-stretch': [{
        'font-stretch': ['ultra-condensed', 'extra-condensed', 'condensed', 'semi-condensed', 'normal', 'semi-expanded', 'expanded', 'extra-expanded', 'ultra-expanded', isPercent, isArbitraryValue]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      'font-family': [{
        font: [isArbitraryVariableFamilyName, isArbitraryFamilyName, themeFont]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      'font-features': [{
        'font-features': [isArbitraryValue]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-normal': ['normal-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-ordinal': ['ordinal'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-slashed-zero': ['slashed-zero'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-figure': ['lining-nums', 'oldstyle-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-spacing': ['proportional-nums', 'tabular-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [themeTracking, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      'line-clamp': [{
        'line-clamp': [isNumber, 'none', isArbitraryVariable, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [/** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
        themeLeading, ...scaleUnambiguousSpacing()]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      'list-image': [{
        'list-image': ['none', isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      'list-style-position': [{
        list: ['inside', 'outside']
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      'list-style-type': [{
        list: ['disc', 'decimal', 'none', isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      'text-alignment': [{
        text: ['left', 'center', 'right', 'justify', 'start', 'end']
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      'placeholder-color': [{
        placeholder: scaleColor()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      'text-color': [{
        text: scaleColor()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      'text-decoration-style': [{
        decoration: [...scaleLineStyle(), 'wavy']
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      'text-decoration-thickness': [{
        decoration: [isNumber, 'from-font', 'auto', isArbitraryVariable, isArbitraryLength]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      'text-decoration-color': [{
        decoration: scaleColor()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      'underline-offset': [{
        'underline-offset': [isNumber, 'auto', isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      'text-wrap': [{
        text: ['wrap', 'nowrap', 'balance', 'pretty']
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: scaleUnambiguousSpacing()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      'vertical-align': [{
        align: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces']
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ['normal', 'words', 'all', 'keep']
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ['break-word', 'anywhere', 'normal']
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ['none', 'manual', 'auto']
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ['none', isArbitraryVariable, isArbitraryValue]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      'bg-attachment': [{
        bg: ['fixed', 'local', 'scroll']
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      'bg-clip': [{
        'bg-clip': ['border', 'padding', 'content', 'text']
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      'bg-origin': [{
        'bg-origin': ['border', 'padding', 'content']
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      'bg-position': [{
        bg: scaleBgPosition()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      'bg-repeat': [{
        bg: scaleBgRepeat()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      'bg-size': [{
        bg: scaleBgSize()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      'bg-image': [{
        bg: ['none', {
          linear: [{
            to: ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl']
          }, isInteger, isArbitraryVariable, isArbitraryValue],
          radial: ['', isArbitraryVariable, isArbitraryValue],
          conic: [isInteger, isArbitraryVariable, isArbitraryValue]
        }, isArbitraryVariableImage, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      'bg-color': [{
        bg: scaleColor()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from-pos': [{
        from: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via-pos': [{
        via: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to-pos': [{
        to: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from': [{
        from: scaleColor()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via': [{
        via: scaleColor()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to': [{
        to: scaleColor()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: scaleRadius()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-s': [{
        'rounded-s': scaleRadius()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-e': [{
        'rounded-e': scaleRadius()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-t': [{
        'rounded-t': scaleRadius()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-r': [{
        'rounded-r': scaleRadius()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-b': [{
        'rounded-b': scaleRadius()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-l': [{
        'rounded-l': scaleRadius()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ss': [{
        'rounded-ss': scaleRadius()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-se': [{
        'rounded-se': scaleRadius()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ee': [{
        'rounded-ee': scaleRadius()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-es': [{
        'rounded-es': scaleRadius()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tl': [{
        'rounded-tl': scaleRadius()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tr': [{
        'rounded-tr': scaleRadius()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-br': [{
        'rounded-br': scaleRadius()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-bl': [{
        'rounded-bl': scaleRadius()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w': [{
        border: scaleBorderWidth()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-x': [{
        'border-x': scaleBorderWidth()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-y': [{
        'border-y': scaleBorderWidth()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-s': [{
        'border-s': scaleBorderWidth()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-e': [{
        'border-e': scaleBorderWidth()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-bs': [{
        'border-bs': scaleBorderWidth()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-be': [{
        'border-be': scaleBorderWidth()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-t': [{
        'border-t': scaleBorderWidth()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-r': [{
        'border-r': scaleBorderWidth()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-b': [{
        'border-b': scaleBorderWidth()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-l': [{
        'border-l': scaleBorderWidth()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      'divide-x': [{
        'divide-x': scaleBorderWidth()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      'divide-x-reverse': ['divide-x-reverse'],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      'divide-y': [{
        'divide-y': scaleBorderWidth()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      'divide-y-reverse': ['divide-y-reverse'],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      'border-style': [{
        border: [...scaleLineStyle(), 'hidden', 'none']
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      'divide-style': [{
        divide: [...scaleLineStyle(), 'hidden', 'none']
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color': [{
        border: scaleColor()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-x': [{
        'border-x': scaleColor()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-y': [{
        'border-y': scaleColor()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-s': [{
        'border-s': scaleColor()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-e': [{
        'border-e': scaleColor()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-bs': [{
        'border-bs': scaleColor()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-be': [{
        'border-be': scaleColor()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-t': [{
        'border-t': scaleColor()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-r': [{
        'border-r': scaleColor()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-b': [{
        'border-b': scaleColor()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-l': [{
        'border-l': scaleColor()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      'divide-color': [{
        divide: scaleColor()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      'outline-style': [{
        outline: [...scaleLineStyle(), 'none', 'hidden']
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      'outline-offset': [{
        'outline-offset': [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      'outline-w': [{
        outline: ['', isNumber, isArbitraryVariableLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      'outline-color': [{
        outline: scaleColor()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
        // Deprecated since Tailwind CSS v4.0.0
        '', 'none', themeShadow, isArbitraryVariableShadow, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      'shadow-color': [{
        shadow: scaleColor()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      'inset-shadow': [{
        'inset-shadow': ['none', themeInsetShadow, isArbitraryVariableShadow, isArbitraryShadow]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      'inset-shadow-color': [{
        'inset-shadow': scaleColor()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      'ring-w': [{
        ring: scaleBorderWidth()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      'ring-w-inset': ['ring-inset'],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      'ring-color': [{
        ring: scaleColor()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      'ring-offset-w': [{
        'ring-offset': [isNumber, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      'ring-offset-color': [{
        'ring-offset': scaleColor()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      'inset-ring-w': [{
        'inset-ring': scaleBorderWidth()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      'inset-ring-color': [{
        'inset-ring': scaleColor()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      'text-shadow': [{
        'text-shadow': ['none', themeTextShadow, isArbitraryVariableShadow, isArbitraryShadow]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      'text-shadow-color': [{
        'text-shadow': scaleColor()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      'mix-blend': [{
        'mix-blend': [...scaleBlendMode(), 'plus-darker', 'plus-lighter']
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      'bg-blend': [{
        'bg-blend': scaleBlendMode()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      'mask-clip': [{
        'mask-clip': ['border', 'padding', 'content', 'fill', 'stroke', 'view']
      }, 'mask-no-clip'],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      'mask-composite': [{
        mask: ['add', 'subtract', 'intersect', 'exclude']
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      'mask-image-linear-pos': [{
        'mask-linear': [isNumber]
      }],
      'mask-image-linear-from-pos': [{
        'mask-linear-from': scaleMaskImagePosition()
      }],
      'mask-image-linear-to-pos': [{
        'mask-linear-to': scaleMaskImagePosition()
      }],
      'mask-image-linear-from-color': [{
        'mask-linear-from': scaleColor()
      }],
      'mask-image-linear-to-color': [{
        'mask-linear-to': scaleColor()
      }],
      'mask-image-t-from-pos': [{
        'mask-t-from': scaleMaskImagePosition()
      }],
      'mask-image-t-to-pos': [{
        'mask-t-to': scaleMaskImagePosition()
      }],
      'mask-image-t-from-color': [{
        'mask-t-from': scaleColor()
      }],
      'mask-image-t-to-color': [{
        'mask-t-to': scaleColor()
      }],
      'mask-image-r-from-pos': [{
        'mask-r-from': scaleMaskImagePosition()
      }],
      'mask-image-r-to-pos': [{
        'mask-r-to': scaleMaskImagePosition()
      }],
      'mask-image-r-from-color': [{
        'mask-r-from': scaleColor()
      }],
      'mask-image-r-to-color': [{
        'mask-r-to': scaleColor()
      }],
      'mask-image-b-from-pos': [{
        'mask-b-from': scaleMaskImagePosition()
      }],
      'mask-image-b-to-pos': [{
        'mask-b-to': scaleMaskImagePosition()
      }],
      'mask-image-b-from-color': [{
        'mask-b-from': scaleColor()
      }],
      'mask-image-b-to-color': [{
        'mask-b-to': scaleColor()
      }],
      'mask-image-l-from-pos': [{
        'mask-l-from': scaleMaskImagePosition()
      }],
      'mask-image-l-to-pos': [{
        'mask-l-to': scaleMaskImagePosition()
      }],
      'mask-image-l-from-color': [{
        'mask-l-from': scaleColor()
      }],
      'mask-image-l-to-color': [{
        'mask-l-to': scaleColor()
      }],
      'mask-image-x-from-pos': [{
        'mask-x-from': scaleMaskImagePosition()
      }],
      'mask-image-x-to-pos': [{
        'mask-x-to': scaleMaskImagePosition()
      }],
      'mask-image-x-from-color': [{
        'mask-x-from': scaleColor()
      }],
      'mask-image-x-to-color': [{
        'mask-x-to': scaleColor()
      }],
      'mask-image-y-from-pos': [{
        'mask-y-from': scaleMaskImagePosition()
      }],
      'mask-image-y-to-pos': [{
        'mask-y-to': scaleMaskImagePosition()
      }],
      'mask-image-y-from-color': [{
        'mask-y-from': scaleColor()
      }],
      'mask-image-y-to-color': [{
        'mask-y-to': scaleColor()
      }],
      'mask-image-radial': [{
        'mask-radial': [isArbitraryVariable, isArbitraryValue]
      }],
      'mask-image-radial-from-pos': [{
        'mask-radial-from': scaleMaskImagePosition()
      }],
      'mask-image-radial-to-pos': [{
        'mask-radial-to': scaleMaskImagePosition()
      }],
      'mask-image-radial-from-color': [{
        'mask-radial-from': scaleColor()
      }],
      'mask-image-radial-to-color': [{
        'mask-radial-to': scaleColor()
      }],
      'mask-image-radial-shape': [{
        'mask-radial': ['circle', 'ellipse']
      }],
      'mask-image-radial-size': [{
        'mask-radial': [{
          closest: ['side', 'corner'],
          farthest: ['side', 'corner']
        }]
      }],
      'mask-image-radial-pos': [{
        'mask-radial-at': scalePosition()
      }],
      'mask-image-conic-pos': [{
        'mask-conic': [isNumber]
      }],
      'mask-image-conic-from-pos': [{
        'mask-conic-from': scaleMaskImagePosition()
      }],
      'mask-image-conic-to-pos': [{
        'mask-conic-to': scaleMaskImagePosition()
      }],
      'mask-image-conic-from-color': [{
        'mask-conic-from': scaleColor()
      }],
      'mask-image-conic-to-color': [{
        'mask-conic-to': scaleColor()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      'mask-mode': [{
        mask: ['alpha', 'luminance', 'match']
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      'mask-origin': [{
        'mask-origin': ['border', 'padding', 'content', 'fill', 'stroke', 'view']
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      'mask-position': [{
        mask: scaleBgPosition()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      'mask-repeat': [{
        mask: scaleBgRepeat()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      'mask-size': [{
        mask: scaleBgSize()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      'mask-type': [{
        'mask-type': ['alpha', 'luminance']
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      'mask-image': [{
        mask: ['none', isArbitraryVariable, isArbitraryValue]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
        // Deprecated since Tailwind CSS v3.0.0
        '', 'none', isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: scaleBlur()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      'drop-shadow': [{
        'drop-shadow': [
        // Deprecated since Tailwind CSS v4.0.0
        '', 'none', themeDropShadow, isArbitraryVariableShadow, isArbitraryShadow]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      'drop-shadow-color': [{
        'drop-shadow': scaleColor()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ['', isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      'hue-rotate': [{
        'hue-rotate': [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ['', isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ['', isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      'backdrop-filter': [{
        'backdrop-filter': [
        // Deprecated since Tailwind CSS v3.0.0
        '', 'none', isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      'backdrop-blur': [{
        'backdrop-blur': scaleBlur()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      'backdrop-brightness': [{
        'backdrop-brightness': [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      'backdrop-contrast': [{
        'backdrop-contrast': [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      'backdrop-grayscale': [{
        'backdrop-grayscale': ['', isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      'backdrop-hue-rotate': [{
        'backdrop-hue-rotate': [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      'backdrop-invert': [{
        'backdrop-invert': ['', isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      'backdrop-opacity': [{
        'backdrop-opacity': [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      'backdrop-saturate': [{
        'backdrop-saturate': [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      'backdrop-sepia': [{
        'backdrop-sepia': ['', isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      'border-collapse': [{
        border: ['collapse', 'separate']
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing': [{
        'border-spacing': scaleUnambiguousSpacing()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-x': [{
        'border-spacing-x': scaleUnambiguousSpacing()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-y': [{
        'border-spacing-y': scaleUnambiguousSpacing()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      'table-layout': [{
        table: ['auto', 'fixed']
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ['top', 'bottom']
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ['', 'all', 'colors', 'opacity', 'shadow', 'transform', 'none', isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      'transition-behavior': [{
        transition: ['normal', 'discrete']
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [isNumber, 'initial', isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ['linear', 'initial', themeEase, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ['none', themeAnimate, isArbitraryVariable, isArbitraryValue]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ['hidden', 'visible']
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [themePerspective, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      'perspective-origin': [{
        'perspective-origin': scalePositionWithArbitrary()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: scaleRotate()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      'rotate-x': [{
        'rotate-x': scaleRotate()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      'rotate-y': [{
        'rotate-y': scaleRotate()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      'rotate-z': [{
        'rotate-z': scaleRotate()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: scaleScale()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-x': [{
        'scale-x': scaleScale()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-y': [{
        'scale-y': scaleScale()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-z': [{
        'scale-z': scaleScale()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-3d': ['scale-3d'],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: scaleSkew()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-x': [{
        'skew-x': scaleSkew()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-y': [{
        'skew-y': scaleSkew()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [isArbitraryVariable, isArbitraryValue, '', 'none', 'gpu', 'cpu']
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      'transform-origin': [{
        origin: scalePositionWithArbitrary()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      'transform-style': [{
        transform: ['3d', 'flat']
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: scaleTranslate()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-x': [{
        'translate-x': scaleTranslate()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-y': [{
        'translate-y': scaleTranslate()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-z': [{
        'translate-z': scaleTranslate()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-none': ['translate-none'],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: scaleColor()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ['none', 'auto']
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      'caret-color': [{
        caret: scaleColor()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      'color-scheme': [{
        scheme: ['normal', 'dark', 'light', 'light-dark', 'only-dark', 'only-light']
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ['auto', 'default', 'pointer', 'wait', 'text', 'move', 'help', 'not-allowed', 'none', 'context-menu', 'progress', 'cell', 'crosshair', 'vertical-text', 'alias', 'copy', 'no-drop', 'grab', 'grabbing', 'all-scroll', 'col-resize', 'row-resize', 'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'zoom-in', 'zoom-out', isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      'field-sizing': [{
        'field-sizing': ['fixed', 'content']
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      'pointer-events': [{
        'pointer-events': ['auto', 'none']
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ['none', '', 'y', 'x']
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      'scroll-behavior': [{
        scroll: ['auto', 'smooth']
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-m': [{
        'scroll-m': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mx': [{
        'scroll-mx': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-my': [{
        'scroll-my': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ms': [{
        'scroll-ms': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-me': [{
        'scroll-me': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mbs': [{
        'scroll-mbs': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mbe': [{
        'scroll-mbe': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mt': [{
        'scroll-mt': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mr': [{
        'scroll-mr': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mb': [{
        'scroll-mb': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ml': [{
        'scroll-ml': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-p': [{
        'scroll-p': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-px': [{
        'scroll-px': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-py': [{
        'scroll-py': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-ps': [{
        'scroll-ps': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pe': [{
        'scroll-pe': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pbs': [{
        'scroll-pbs': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pbe': [{
        'scroll-pbe': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pt': [{
        'scroll-pt': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pr': [{
        'scroll-pr': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pb': [{
        'scroll-pb': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pl': [{
        'scroll-pl': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      'snap-align': [{
        snap: ['start', 'end', 'center', 'align-none']
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      'snap-stop': [{
        snap: ['normal', 'always']
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-type': [{
        snap: ['none', 'x', 'y', 'both']
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-strictness': [{
        snap: ['mandatory', 'proximity']
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ['auto', 'none', 'manipulation']
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-x': [{
        'touch-pan': ['x', 'left', 'right']
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-y': [{
        'touch-pan': ['y', 'up', 'down']
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-pz': ['touch-pinch-zoom'],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ['none', 'text', 'all', 'auto']
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      'will-change': [{
        'will-change': ['auto', 'scroll', 'contents', 'transform', isArbitraryVariable, isArbitraryValue]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ['none', ...scaleColor()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      'stroke-w': [{
        stroke: [isNumber, isArbitraryVariableLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ['none', ...scaleColor()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      'forced-color-adjust': [{
        'forced-color-adjust': ['auto', 'none']
      }]
    },
    conflictingClassGroups: {
      overflow: ['overflow-x', 'overflow-y'],
      overscroll: ['overscroll-x', 'overscroll-y'],
      inset: ['inset-x', 'inset-y', 'inset-bs', 'inset-be', 'start', 'end', 'top', 'right', 'bottom', 'left'],
      'inset-x': ['right', 'left'],
      'inset-y': ['top', 'bottom'],
      flex: ['basis', 'grow', 'shrink'],
      gap: ['gap-x', 'gap-y'],
      p: ['px', 'py', 'ps', 'pe', 'pbs', 'pbe', 'pt', 'pr', 'pb', 'pl'],
      px: ['pr', 'pl'],
      py: ['pt', 'pb'],
      m: ['mx', 'my', 'ms', 'me', 'mbs', 'mbe', 'mt', 'mr', 'mb', 'ml'],
      mx: ['mr', 'ml'],
      my: ['mt', 'mb'],
      size: ['w', 'h'],
      'font-size': ['leading'],
      'fvn-normal': ['fvn-ordinal', 'fvn-slashed-zero', 'fvn-figure', 'fvn-spacing', 'fvn-fraction'],
      'fvn-ordinal': ['fvn-normal'],
      'fvn-slashed-zero': ['fvn-normal'],
      'fvn-figure': ['fvn-normal'],
      'fvn-spacing': ['fvn-normal'],
      'fvn-fraction': ['fvn-normal'],
      'line-clamp': ['display', 'overflow'],
      rounded: ['rounded-s', 'rounded-e', 'rounded-t', 'rounded-r', 'rounded-b', 'rounded-l', 'rounded-ss', 'rounded-se', 'rounded-ee', 'rounded-es', 'rounded-tl', 'rounded-tr', 'rounded-br', 'rounded-bl'],
      'rounded-s': ['rounded-ss', 'rounded-es'],
      'rounded-e': ['rounded-se', 'rounded-ee'],
      'rounded-t': ['rounded-tl', 'rounded-tr'],
      'rounded-r': ['rounded-tr', 'rounded-br'],
      'rounded-b': ['rounded-br', 'rounded-bl'],
      'rounded-l': ['rounded-tl', 'rounded-bl'],
      'border-spacing': ['border-spacing-x', 'border-spacing-y'],
      'border-w': ['border-w-x', 'border-w-y', 'border-w-s', 'border-w-e', 'border-w-bs', 'border-w-be', 'border-w-t', 'border-w-r', 'border-w-b', 'border-w-l'],
      'border-w-x': ['border-w-r', 'border-w-l'],
      'border-w-y': ['border-w-t', 'border-w-b'],
      'border-color': ['border-color-x', 'border-color-y', 'border-color-s', 'border-color-e', 'border-color-bs', 'border-color-be', 'border-color-t', 'border-color-r', 'border-color-b', 'border-color-l'],
      'border-color-x': ['border-color-r', 'border-color-l'],
      'border-color-y': ['border-color-t', 'border-color-b'],
      translate: ['translate-x', 'translate-y', 'translate-none'],
      'translate-none': ['translate', 'translate-x', 'translate-y', 'translate-z'],
      'scroll-m': ['scroll-mx', 'scroll-my', 'scroll-ms', 'scroll-me', 'scroll-mbs', 'scroll-mbe', 'scroll-mt', 'scroll-mr', 'scroll-mb', 'scroll-ml'],
      'scroll-mx': ['scroll-mr', 'scroll-ml'],
      'scroll-my': ['scroll-mt', 'scroll-mb'],
      'scroll-p': ['scroll-px', 'scroll-py', 'scroll-ps', 'scroll-pe', 'scroll-pbs', 'scroll-pbe', 'scroll-pt', 'scroll-pr', 'scroll-pb', 'scroll-pl'],
      'scroll-px': ['scroll-pr', 'scroll-pl'],
      'scroll-py': ['scroll-pt', 'scroll-pb'],
      touch: ['touch-x', 'touch-y', 'touch-pz'],
      'touch-x': ['touch'],
      'touch-y': ['touch'],
      'touch-pz': ['touch']
    },
    conflictingClassGroupModifiers: {
      'font-size': ['leading']
    },
    orderSensitiveModifiers: ['*', '**', 'after', 'backdrop', 'before', 'details-content', 'file', 'first-letter', 'first-line', 'marker', 'placeholder', 'selection']
  };
};
const twMerge = /*#__PURE__*/createTailwindMerge(getDefaultConfig);

/**
 * Merges class names using clsx and tailwind-merge.
 * This is essential for building Tailwind-based component libraries.
 */
function cn(...inputs) {
    return twMerge(clsx(inputs));
}

// ─── Validators ────────────────────────────────────────────────────────────
/** Run a list of validation rules against a value and return all errors. */
function validate(value, rules) {
    const errors = [];
    for (const rule of rules) {
        if (!rule.validate(value)) {
            errors.push(rule.message);
        }
    }
    return { valid: errors.length === 0, errors };
}
// ─── Built-in Rules ─────────────────────────────────────────────────────────
const required = (msg = "This field is required") => ({
    validate: (v) => v.trim().length > 0,
    message: msg,
});
const minLength = (min, msg) => ({
    validate: (v) => v.length >= min,
    message: msg ?? `Must be at least ${min} characters`,
});
const maxLength = (max, msg) => ({
    validate: (v) => v.length <= max,
    message: msg ?? `Must be at most ${max} characters`,
});
const pattern = (regex, msg) => ({
    validate: (v) => regex.test(v),
    message: msg,
});
const email = (msg = "Must be a valid email address") => pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, msg);
const url = (msg = "Must be a valid URL") => pattern(/^https?:\/\/.+/, msg);
const numeric = (msg = "Must be a number") => ({
    validate: (v) => !isNaN(Number(v)) && v.trim().length > 0,
    message: msg,
});

// ─── Animation presets for InfluishTheme ──────────────────────────────────
// Works with both CSS transitions and framer-motion variants.
/** CSS transition presets */
const cssTransitions = {
    fadeIn: `
    @keyframes it-fade-in {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
  `,
    slideUp: `
    @keyframes it-slide-up {
      from { transform: translateY(12px); opacity: 0; }
      to   { transform: translateY(0);    opacity: 1; }
    }
  `,
    slideDown: `
    @keyframes it-slide-down {
      from { transform: translateY(-12px); opacity: 0; }
      to   { transform: translateY(0);     opacity: 1; }
    }
  `,
    scaleIn: `
    @keyframes it-scale-in {
      from { transform: scale(0.92); opacity: 0; }
      to   { transform: scale(1);    opacity: 1; }
    }
  `,
};
// ─── Framer Motion variants (optional dependency) ────────────────────────
const motionVariants = {
    fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
    },
    slideUp: {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 12 },
        transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
    },
    slideDown: {
        initial: { opacity: 0, y: -12 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -12 },
        transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
    },
    scaleIn: {
        initial: { opacity: 0, scale: 0.92 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.92 },
        transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
    },
    modalOverlay: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
    },
};

const variantStyles = {
    primary: "bg-primary-500 text-white shadow-it-sm hover:bg-primary-600 focus-visible:ring-primary-500",
    secondary: "bg-secondary-500 text-white shadow-it-sm hover:bg-secondary-600 focus-visible:ring-secondary-500",
    outlined: "bg-transparent border-primary-500 text-primary-500 hover:bg-bg-subtle focus-visible:ring-primary-500",
    ghost: "bg-transparent text-text-primary hover:bg-bg-subtle focus-visible:ring-primary-500",
    error: "bg-error-500 text-white shadow-it-sm hover:bg-error-600 focus-visible:ring-error-500",
    success: "bg-success-500 text-white shadow-it-sm hover:bg-success-600 focus-visible:ring-success-500",
};
const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs rounded-it-sm",
    md: "px-5 py-2.5 text-sm rounded-it-md",
    lg: "px-7 py-3.5 text-base rounded-it-lg",
};
const Button = React.forwardRef(({ variant = "primary", size = "md", loading = false, fullWidth = false, startIcon, endIcon, children, className, disabled, ...rest }, ref) => {
    const isDisabled = disabled || loading;
    return (jsxs("button", { ref: ref, className: cn("inline-flex items-center justify-center gap-2 border-2 border-transparent font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-offset-2", variantStyles[variant], sizeStyles[size], fullWidth && "w-full", loading && "cursor-wait", className), disabled: isDisabled, "aria-disabled": isDisabled, "aria-busy": loading, ...rest, children: [loading && (jsx("span", { className: "w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin", "aria-hidden": "true" })), !loading && startIcon && (jsx("span", { className: "inline-flex shrink-0", children: startIcon })), jsx("span", { className: "inline-flex items-center", children: children }), !loading && endIcon && (jsx("span", { className: "inline-flex shrink-0", children: endIcon }))] }));
});
Button.displayName = "Button";

const Input = forwardRef(({ size = "md", error = false, fullWidth = false, startAdornment, endAdornment, className, disabled, ...props }, ref) => {
    const sizeStyles = {
        sm: "min-h-[2rem] px-2",
        md: "min-h-[2.5rem] px-3",
        lg: "min-h-[3rem] px-4",
    };
    return (jsxs("div", { className: cn("inline-flex items-center bg-bg-paper border-[1.5px] border-border-default rounded-it-md transition-all duration-150 focus-within:border-border-focus focus-within:ring-[3px] focus-within:ring-primary-500/20", error && "border-border-error focus-within:ring-error-500/20", disabled && "bg-bg-subtle cursor-not-allowed opacity-50", fullWidth && "w-full", sizeStyles[size], className), children: [startAdornment && (jsx("div", { className: "inline-flex items-center text-text-secondary mr-1.5 shrink-0", children: startAdornment })), jsx("input", { ref: ref, disabled: disabled, className: cn("bg-transparent border-none text-text-primary flex-1 font-base text-sm leading-normal outline-none py-1 w-full placeholder:text-text-secondary disabled:cursor-not-allowed", startAdornment && "pl-1", endAdornment && "pr-1"), ...props }), endAdornment && (jsx("div", { className: "inline-flex items-center text-text-secondary ml-1.5 shrink-0", children: endAdornment }))] }));
});
Input.displayName = "Input";

const TextField = React.forwardRef(({ label, helperText, error = false, multiline = false, rows = 4, fullWidth = false, className, disabled, id: providedId, ...props }, ref) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const InputComponent = multiline ? "textarea" : "input";
    return (jsxs("div", { className: cn("flex flex-col gap-1.5", fullWidth && "w-full", className), children: [label && (jsx("label", { htmlFor: id, className: cn("text-text-primary font-medium text-sm", error && "text-error-500", disabled && "opacity-50"), children: label })), jsx("div", { className: cn("inline-flex bg-bg-paper border-[1.5px] border-border-default rounded-it-md transition-all duration-150 focus-within:border-border-focus focus-within:ring-[3px] focus-within:ring-primary-500/20", error && "border-border-error focus-within:ring-error-500/20", disabled && "bg-bg-subtle cursor-not-allowed opacity-50", fullWidth && "w-full"), children: jsx(InputComponent, { id: id, ref: ref, disabled: disabled, rows: multiline ? rows : undefined, className: cn("bg-transparent border-none text-text-primary flex-1 font-base text-sm leading-normal outline-none p-2.5 w-full placeholder:text-text-secondary disabled:cursor-not-allowed", multiline && "resize-y"), ...props }) }), helperText && (jsx("span", { className: cn("text-text-secondary text-xs", error && "text-error-500"), children: helperText }))] }));
});
TextField.displayName = "TextField";

const Select = forwardRef(({ label, options = [], error = false, helperText, fullWidth = false, size = "md", className, disabled, children, id: providedId, ...props }, ref) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const sizeStyles = {
        sm: "min-h-[2rem] px-2",
        md: "min-h-[2.5rem] px-3",
        lg: "min-h-[3rem] px-4",
    };
    return (jsxs("div", { className: cn("flex flex-col gap-1.5", fullWidth && "w-full", className), children: [label && (jsx("label", { htmlFor: id, className: cn("text-text-primary font-medium text-sm", error && "text-border-error", disabled && "opacity-50"), children: label })), jsxs("div", { className: cn("relative inline-flex items-center bg-bg-paper border-[1.5px] border-border-default rounded-it-md transition-all duration-150 focus-within:border-border-focus focus-within:ring-[3px] focus-within:ring-primary-500/20", error && "border-border-error focus-within:ring-error-500/20", disabled && "bg-bg-subtle opacity-50 pointer-events-none", fullWidth && "w-full", sizeStyles[size]), children: [jsx("select", { id: id, ref: ref, disabled: disabled, className: "appearance-none bg-transparent border-none text-text-primary flex-1 font-base text-sm leading-normal outline-none py-1 w-full cursor-pointer pr-7 placeholder:text-text-secondary", ...props, children: children ||
                            options.map((opt) => (jsx("option", { value: opt.value, className: "bg-bg-paper text-text-primary", children: opt.label }, opt.value))) }), jsx("svg", { className: "absolute right-2.5 w-4 h-4 text-text-secondary pointer-events-none", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })] }), helperText && (jsx("span", { className: cn("text-text-secondary text-xs", error && "text-border-error"), children: helperText }))] }));
});
Select.displayName = "Select";

const Modal = ({ open, onClose, children, size = "md", closeOnOverlayClick = true, }) => {
    const overlayRef = useRef(null);
    useEffect(() => {
        if (open)
            document.body.style.overflow = "hidden";
        else
            document.body.style.overflow = "unset";
        return () => { document.body.style.overflow = "unset"; };
    }, [open]);
    if (!open)
        return null;
    const handleOverlayClick = (e) => {
        if (closeOnOverlayClick && e.target === overlayRef.current) {
            onClose();
        }
    };
    const isCustomSize = !["sm", "md", "lg", "xl", "full"].includes(size);
    const sizeClasses = {
        sm: "max-w-it-modal-sm",
        md: "max-w-it-modal-md",
        lg: "max-w-it-modal-lg",
        xl: "max-w-it-modal-xl",
        full: "max-w-[calc(100vw-2rem)] h-[calc(100vh-2rem)]",
    };
    return createPortal(jsx("div", { ref: overlayRef, className: "fixed inset-0 z-[400] flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm animate-fade-in", onClick: handleOverlayClick, role: "dialog", "aria-modal": "true", children: jsx("div", { className: cn("bg-bg-paper border border-border-default rounded-it-xl shadow-it-2xl outline-none overflow-y-auto w-full animate-zoom-in max-h-[calc(100vh-2rem)]", !isCustomSize && sizeClasses[size]), style: isCustomSize ? { maxWidth: size } : undefined, children: children }) }), document.body);
};

/**
 * `Dialog` is a high-level modal component for important messages and user actions.
 */
const Dialog = ({ open, onClose, title, icon, children, footer, actions, size = "md", className, closeOnOverlayClick = true, }) => {
    return (jsx(Modal, { open: open, onClose: onClose, size: size, closeOnOverlayClick: closeOnOverlayClick, children: jsxs("div", { className: cn("flex flex-col", className), children: [(title || icon || !!onClose) && (jsxs("div", { className: "flex items-center gap-3 px-6 pt-5 pb-4 border-b border-border-default", children: [icon && (jsx("span", { className: "text-primary-500 inline-flex shrink-0", children: icon })), title && (jsx("h2", { className: "text-text-primary flex-1 font-base text-lg font-semibold leading-tight m-0", children: title })), jsx("button", { onClick: onClose, className: "inline-flex items-center justify-center shrink-0 w-8 h-8 rounded-it-md bg-transparent border-none text-text-secondary cursor-pointer transition-colors duration-150 hover:bg-bg-subtle hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-focus focus-visible:outline-offset-2", "aria-label": "Close dialog", children: jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) })] })), jsx("div", { className: "px-6 py-5 text-text-secondary font-base text-md leading-relaxed", children: children }), (footer || (actions && actions.length > 0)) && (jsx("div", { className: "flex items-center justify-end gap-2 px-6 pt-4 pb-5 border-t border-border-default", children: footer
                        ? footer
                        : actions?.map((action, idx) => (jsx(Button, { variant: action.variant ?? (idx === (actions.length - 1) ? "primary" : "ghost"), onClick: action.onClick, loading: action.loading, disabled: action.disabled, startIcon: action.startIcon, size: "md", children: action.label }, idx))) }))] }) }));
};

const Card = ({ variant = "elevated", elevation = "sm", radius = "md", hoverable = false, fullWidth = false, className, children, ...props }) => {
    const variantStyles = {
        elevated: "border border-transparent",
        outlined: "border border-border-default shadow-none",
        filled: "bg-bg-subtle border-none shadow-none",
        ghost: "bg-transparent border-none shadow-none",
    };
    const elevationStyles = {
        none: "shadow-none",
        sm: "shadow-it-sm",
        md: "shadow-it-md",
        lg: "shadow-it-lg",
    };
    const radiusStyles = {
        none: "rounded-none",
        sm: "rounded-it-sm",
        md: "rounded-it-md",
        lg: "rounded-it-lg",
        xl: "rounded-it-xl",
        "2xl": "rounded-it-2xl",
    };
    return (jsx("div", { className: cn("relative bg-bg-paper overflow-hidden transition-all duration-200", variantStyles[variant], elevationStyles[elevation], radiusStyles[radius], hoverable && "hover:shadow-it-xl hover:-translate-y-1 cursor-pointer", fullWidth && "w-full", className), ...props, children: children }));
};
const CardHeader = ({ title, subheader, action, className, ...props }) => (jsxs("div", { className: cn("px-6 pt-5 pb-0 flex items-start justify-between gap-3", className), ...props, children: [jsxs("div", { className: "flex-1 min-w-0", children: [title && (jsx("h3", { className: "text-text-primary font-semibold text-lg leading-tight truncate", children: title })), subheader && (jsx("p", { className: "text-text-secondary text-sm mt-1", children: subheader }))] }), action && jsx("div", { className: "shrink-0", children: action })] }));
const CardBody = ({ padded = true, className, children, ...props }) => (jsx("div", { className: cn("text-text-secondary leading-relaxed", padded && "p-6", className), ...props, children: children }));
const CardFooter = ({ bordered = false, align = "left", className, children, ...props }) => (jsx("div", { className: cn("px-6 py-4 flex items-center gap-2", bordered && "border-t border-border-default", align === "right" && "justify-end", className), ...props, children: children }));
const CardMedia = ({ image, height = 200, alt = "", className, style, children, ...props }) => (jsx("div", { className: cn("w-full overflow-hidden", className), style: { height, ...style }, ...props, children: image ? (jsx("img", { src: image, alt: alt, className: "w-full h-full object-cover" })) : (children) }));

const Container = ({ size = "lg", centered = true, padding = true, className, children, ...props }) => {
    const sizeClasses = {
        sm: "max-w-[40rem]",
        md: "max-w-[56rem]",
        lg: "max-w-[72rem]",
        xl: "max-w-[80rem]",
        "2xl": "max-w-[96rem]",
        full: "max-w-full",
    };
    return (jsx("div", { className: cn("w-full", centered && "mx-auto", padding && "px-6", sizeClasses[size], className), ...props, children: children }));
};
const Grid = ({ cols = 12, gap = "md", className, children, ...props }) => {
    const gapClasses = {
        none: "gap-0",
        sm: "gap-2",
        md: "gap-4",
        lg: "gap-6",
        xl: "gap-8",
    };
    return (jsx("div", { className: cn("grid", gapClasses[gap], className), ...props, children: children }));
};
const GridItem = ({ span = 12, sm, md, lg, xl, className, children, style, ...props }) => {
    return (jsx("div", { className: cn(
        // We use CSS variables for grid spans as it's more flexible than generating 144 Tailwind classes
        className), style: {
            ...style,
            "--it-col-span": span,
            "--it-col-span-sm": sm,
            "--it-col-span-md": md,
            "--it-col-span-lg": lg,
            "--it-col-span-xl": xl,
        }, ...props, children: children }));
};

const NavbarBrand = ({ className, ...props }) => (jsx("a", { className: cn("text-lg font-bold text-text-primary no-underline flex items-center gap-3 tracking-tight", className), ...props }));
const NavbarNav = ({ className, ...props }) => (jsx("nav", { className: cn("flex items-center gap-3 flex-1 justify-center px-4 max-lg:hidden", className), ...props }));
const NavbarEnd = ({ className, ...props }) => (jsx("div", { className: cn("flex items-center gap-3 justify-end", className), ...props }));
const Navbar = ({ sticky, bordered, maxWidth, className, children, style, ...props }) => {
    return (jsx("header", { className: cn("flex items-center justify-between px-6 py-2 h-20 bg-bg-paper border-b border-border-default transition-all duration-300 w-full box-border", sticky && "sticky top-0 backdrop-blur-md", bordered && "border-b border-border-default", className), style: {
            zIndex: "var(--it-z-sticky, 200)",
            ...(sticky ? { backgroundColor: "rgb(var(--it-bg-paper) / 0.85)" } : {}),
            ...style
        }, ...props, children: jsx("div", { className: "w-full flex items-center justify-between h-full mx-auto max-sm:px-0", style: maxWidth ? { maxWidth } : undefined, children: children }) }));
};
Navbar.Brand = NavbarBrand;
Navbar.Nav = NavbarNav;
Navbar.End = NavbarEnd;
Navbar.displayName = "Navbar";

const SidebarHeader = ({ className, ...props }) => (jsx("div", { className: cn("p-5 border-b shrink-0 group-data-[collapsed=true]:justify-center group-data-[collapsed=true]:py-4 flex items-center gap-3", className), ...props }));
const SidebarNav = ({ className, ...props }) => (jsx("nav", { className: cn("flex-1 overflow-y-auto py-3 px-3", className), ...props }));
const SidebarList = ({ className, ...props }) => (jsx("ul", { className: cn("flex flex-col gap-1 list-none m-0 p-0", className), role: "list", ...props }));
const SidebarFooter = ({ className, ...props }) => (jsx("div", { className: cn("p-4 border-t mt-auto shrink-0 group-data-[collapsed=true]:justify-center flex items-center", className), ...props }));
const SidebarItemComp = ({ label, icon, active, disabled, badge, href, hasChildren, children, className, onClick, ...props }) => {
    const Tag = href ? "a" : "button";
    const [isOpen, setIsOpen] = React.useState(active);
    const handleToggle = (e) => {
        if (hasChildren)
            setIsOpen(!isOpen);
        onClick?.(e);
    };
    return (jsxs("div", { className: "flex flex-col relative group/item", children: [active && (jsx("div", { className: "absolute left-0 top-1.5 bottom-1.5 w-1 bg-action-primary rounded-r-full z-10" })), jsxs(Tag, { href: href, className: cn("flex items-center gap-3 w-full px-3 py-2.5 border-none rounded-it-lg bg-transparent text-text-secondary font-base text-sm font-medium no-underline cursor-pointer text-left transition-all duration-200 whitespace-nowrap hover:bg-bg-subtle hover:text-text-primary", active && "bg-primary-500/10 text-action-primary font-semibold", disabled && "opacity-50 cursor-not-allowed", "group-data-[collapsed=true]:justify-center group-data-[collapsed=true]:px-0", className), onClick: handleToggle, "aria-current": active ? "page" : undefined, "aria-disabled": disabled, ...(Tag === "button" ? { type: "button" } : {}), ...props, children: [icon && jsx("span", { className: "inline-flex items-center justify-center w-5 h-5 shrink-0 transition-transform group-hover/item:scale-110", children: icon }), jsx("span", { className: "flex-1 overflow-hidden text-ellipsis group-data-[collapsed=true]:hidden", children: label }), badge !== undefined && (jsx("span", { className: "inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1.5 rounded-full bg-action-primary text-white text-[0.625rem] font-bold shrink-0 group-data-[collapsed=true]:hidden shadow-sm", children: badge })), hasChildren && (jsx("span", { className: cn("inline-block w-1.5 h-1.5 border-r-[1.5px] border-b-[1.5px] border-current -rotate-45 transition-transform duration-200 ml-auto shrink-0 opacity-50 group-data-[collapsed=true]:hidden", isOpen && "rotate-45") }))] }), isOpen && children && (jsx("ul", { className: "list-none my-1 ml-9 p-0 flex flex-col gap-1 group-data-[collapsed=true]:hidden border-l border-border-default/50", role: "list", children: children }))] }));
};
const Sidebar = ({ items, activeKey, onSelect, collapsed = false, responsive = false, width = 260, variant = "docked", className, children, style, ...rest }) => {
    return (jsxs("aside", { "data-collapsed": collapsed || undefined, className: cn("flex flex-col h-full bg-bg-paper transition-[width,margin] duration-300 shrink-0 overflow-hidden group", variant === "docked" ? "border-r" : "m-4 rounded-it-xl shadow-it-lg border", (collapsed || responsive) && "w-[4.5rem] md:w-auto", !collapsed && !responsive && "w-[var(--sidebar-width)]", className), style: {
            ["--sidebar-width"]: typeof width === "number" ? `${width}px` : width,
            ...style
        }, "aria-label": "Sidebar navigation", ...rest, children: [children, items && (jsx(SidebarNav, { children: jsx(SidebarList, { children: items.map((item) => (jsx(SidebarItemComp, { label: item.label, icon: item.icon, active: activeKey === item.key, disabled: item.disabled, badge: item.badge, href: item.href, hasChildren: item.children && item.children.length > 0, onClick: () => onSelect?.(item.key), children: item.children?.map((child) => (jsx(SidebarItemComp, { label: child.label, active: activeKey === child.key, onClick: () => onSelect?.(child.key) }, child.key))) }, item.key))) }) }))] }));
};
Sidebar.Header = SidebarHeader;
Sidebar.Nav = SidebarNav;
Sidebar.List = SidebarList;
Sidebar.Item = SidebarItemComp;
Sidebar.Footer = SidebarFooter;
Sidebar.displayName = "Sidebar";

const Tooltip = ({ content, position = "top", children, delay = 200, }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [coords, setCoords] = useState({ top: 0, left: 0 });
    const triggerRef = useRef(null);
    const timerRef = useRef();
    const updatePosition = () => {
        if (!triggerRef.current)
            return;
        const rect = triggerRef.current.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let top = 0;
        let left = 0;
        switch (position) {
            case "top":
                top = rect.top + scrollTop - 8;
                left = rect.left + scrollLeft + rect.width / 2;
                break;
            case "bottom":
                top = rect.bottom + scrollTop + 8;
                left = rect.left + scrollLeft + rect.width / 2;
                break;
            case "left":
                top = rect.top + scrollTop + rect.height / 2;
                left = rect.left + scrollLeft - 8;
                break;
            case "right":
                top = rect.top + scrollTop + rect.height / 2;
                left = rect.right + scrollLeft + 8;
                break;
        }
        setCoords({ top, left });
    };
    const handleMouseEnter = () => {
        timerRef.current = setTimeout(() => {
            updatePosition();
            setIsVisible(true);
        }, delay);
    };
    const handleMouseLeave = () => {
        clearTimeout(timerRef.current);
        setIsVisible(false);
    };
    useEffect(() => {
        return () => clearTimeout(timerRef.current);
    }, []);
    const positionClasses = {
        top: "-translate-x-1/2 -translate-y-full",
        bottom: "-translate-x-1/2",
        left: "-translate-x-full -translate-y-1/2",
        right: "-translate-y-1/2",
    };
    const arrowClasses = {
        top: "top-full left-1/2 -translate-x-1/2 border-t-neutral-900",
        bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-neutral-900",
        left: "left-full top-1/2 -translate-y-1/2 border-l-neutral-900",
        right: "right-full top-1/2 -translate-y-1/2 border-r-neutral-900",
    };
    return (jsxs(Fragment, { children: [React.cloneElement(children, {
                ref: triggerRef,
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave,
            }), isVisible &&
                createPortal(jsxs("div", { className: cn("absolute z-[600] px-3 py-1.5 bg-neutral-900 text-white text-xs font-medium rounded-it-md shadow-it-lg pointer-events-none whitespace-nowrap animate-fade-in animate-zoom-in", positionClasses[position]), style: { top: coords.top, left: coords.left }, children: [content, jsx("div", { className: cn("absolute w-0 h-0 border-4 border-transparent", arrowClasses[position]) })] }), document.body)] }));
};

const SnackbarContainer = ({ messages, onDismiss, position = "bottom-right", }) => {
    const positionClasses = {
        "top-left": "top-0 left-0 items-start",
        "top-center": "top-0 left-1/2 -translate-x-1/2 items-center",
        "top-right": "top-0 right-0 items-end",
        "bottom-left": "bottom-0 left-0 items-start",
        "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 items-center",
        "bottom-right": "bottom-0 right-0 items-end",
    };
    return createPortal(jsx("div", { className: cn("fixed z-[500] w-full max-w-[26rem] p-4 pointer-events-none flex flex-col gap-2.5", positionClasses[position]), children: messages.map((msg) => (jsx(SnackbarItem, { msg: msg, onDismiss: onDismiss }, msg.id))) }), document.body);
};
const SnackbarItem = ({ msg, onDismiss }) => {
    const [isLeaving, setIsLeaving] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            handleDismiss();
        }, 3000);
        return () => clearTimeout(timer);
    }, [isLeaving]);
    const handleDismiss = () => {
        setIsLeaving(true);
        setTimeout(() => onDismiss(msg.id), 400);
    };
    const typeClasses = {
        success: "bg-green-50 border-green-500 text-green-800",
        error: "bg-red-50 border-red-500 text-red-800",
        warning: "bg-orange-50 border-orange-500 text-orange-800",
        info: "bg-blue-50 border-blue-500 text-blue-800",
    };
    return (jsxs("div", { className: cn("flex items-start gap-2.5 min-w-[18rem] max-w-[26rem] p-3 px-4 border rounded-it-lg shadow-it-lg pointer-events-auto font-base text-sm animate-slide-in-right", isLeaving && "opacity-0 translate-x-4 transition-all duration-400", typeClasses[msg.type]), children: [jsxs("span", { className: "shrink-0 mt-0.5", children: [msg.type === "success" && "✅", msg.type === "error" && "❌", msg.type === "warning" && "⚠️", msg.type === "info" && "ℹ️"] }), jsx("span", { className: "flex-1 font-medium leading-normal", children: msg.message }), jsx("button", { onClick: handleDismiss, className: "inline-flex items-center justify-center shrink-0 w-6 h-6 rounded-it-sm bg-transparent border-none text-inherit cursor-pointer opacity-60 transition-all hover:bg-black/5 hover:opacity-100", children: "\u00D7" })] }));
};

export { Button, Card, CardBody, CardFooter, CardHeader, CardMedia, Container, Dialog, Grid, GridItem, Input, Modal, Navbar, Select, Sidebar, SnackbarContainer, SnackbarItem, TextField, ThemeContext, ThemeProvider, Tooltip, cn, cssTransitions, darkTheme, defaultTheme, email, lightTheme, maxLength, mergeTheme, minLength, motionVariants, numeric, pattern, required, url, useMediaQuery, useSnackbar, useTheme, validate };
//# sourceMappingURL=index.js.map
