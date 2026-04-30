export type ColorScale = {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
};
export type ThemeColors = {
    primary: ColorScale;
    secondary: ColorScale;
    neutral: ColorScale;
    success: ColorScale;
    warning: ColorScale;
    error: ColorScale;
    info: ColorScale;
};
export type ThemeTypography = {
    fontFamily: {
        base: string;
        mono: string;
    };
    fontSize: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        "4xl": string;
    };
    fontWeight: {
        light: number;
        regular: number;
        medium: number;
        semibold: number;
        bold: number;
    };
    lineHeight: {
        tight: string;
        base: string;
        relaxed: string;
    };
};
export type ThemeSpacing = {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    8: string;
    10: string;
    12: string;
    16: string;
    20: string;
    24: string;
    32: string;
};
export type ThemeBorder = {
    width: {
        none: string;
        thin: string;
        base: string;
        thick: string;
    };
    style: {
        solid: string;
        dashed: string;
        dotted: string;
    };
};
export type ThemeBorderRadius = {
    none: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    full: string;
};
export type ThemeShadow = {
    none: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
};
export type ThemeTransition = {
    fast: string;
    base: string;
    slow: string;
};
export type ThemeZIndex = {
    base: number;
    dropdown: number;
    sticky: number;
    overlay: number;
    modal: number;
    toast: number;
    tooltip: number;
};
export type ThemeModal = {
    sm: string;
    md: string;
    lg: string;
    xl: string;
};
export type ThemeMode = "light" | "dark";
export type ThemeSemanticColors = {
    background: {
        default: string;
        paper: string;
        subtle: string;
    };
    text: {
        primary: string;
        secondary: string;
        disabled: string;
        inverse: string;
    };
    border: {
        default: string;
        focus: string;
        error: string;
    };
    action: {
        primary: string;
        primaryHover: string;
        primaryActive: string;
        primaryText: string;
    };
};
export type Theme = {
    mode: ThemeMode;
    colors: ThemeColors;
    semantic: ThemeSemanticColors;
    typography: ThemeTypography;
    spacing: ThemeSpacing;
    border: ThemeBorder;
    borderRadius: ThemeBorderRadius;
    shadow: ThemeShadow;
    transition: ThemeTransition;
    zIndex: ThemeZIndex;
    modal: ThemeModal;
};
export type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
export type UserTheme = DeepPartial<Theme> & {
    mode?: ThemeMode;
};
