import * as React from 'react';
import React__default, { ReactNode } from 'react';
import { ClassValue } from 'clsx';

type ColorScale = {
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
type ThemeColors = {
    primary: ColorScale;
    secondary: ColorScale;
    neutral: ColorScale;
    success: ColorScale;
    warning: ColorScale;
    error: ColorScale;
    info: ColorScale;
};
type ThemeTypography = {
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
type ThemeSpacing = {
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
type ThemeBorder = {
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
type ThemeBorderRadius = {
    none: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    full: string;
};
type ThemeShadow = {
    none: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
};
type ThemeTransition = {
    fast: string;
    base: string;
    slow: string;
};
type ThemeZIndex = {
    base: number;
    dropdown: number;
    sticky: number;
    overlay: number;
    modal: number;
    toast: number;
    tooltip: number;
};
type ThemeModal = {
    sm: string;
    md: string;
    lg: string;
    xl: string;
};
type ThemeMode = "light" | "dark";
type ThemeSemanticColors = {
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
type Theme = {
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
type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
type UserTheme = DeepPartial<Theme> & {
    mode?: ThemeMode;
};

interface ThemeProviderProps {
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
declare const ThemeProvider: React__default.FC<ThemeProviderProps>;

interface ThemeContextValue {
    theme: Theme;
    setMode: (mode: "light" | "dark") => void;
    toggleMode: () => void;
}
declare const ThemeContext: React.Context<ThemeContextValue>;

declare const lightTheme: Theme;
declare const darkTheme: Theme;
declare const defaultTheme: Theme;

/**
 * Access the current InfluishTheme and mode controls.
 *
 * @example
 * ```tsx
 * const { theme, toggleMode } = useTheme();
 * ```
 */
declare function useTheme(): ThemeContextValue;

/**
 * Tracks whether a CSS media query matches.
 *
 * @example
 * ```tsx
 * const isMobile = useMediaQuery("(max-width: 768px)");
 * ```
 */
declare function useMediaQuery(query: string): boolean;

type SnackbarSeverity = "success" | "error" | "warning" | "info";
interface SnackbarMessage$1 {
    id: string;
    message: string;
    severity: SnackbarSeverity;
    duration: number;
}
interface UseSnackbarReturn {
    messages: SnackbarMessage$1[];
    show: (message: string, severity?: SnackbarSeverity, duration?: number) => void;
    dismiss: (id: string) => void;
    dismissAll: () => void;
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
declare function useSnackbar(maxMessages?: number): UseSnackbarReturn;

/**
 * Merges class names using clsx and tailwind-merge.
 * This is essential for building Tailwind-based component libraries.
 */
declare function cn(...inputs: ClassValue[]): string;

declare function mergeTheme(userTheme?: UserTheme): Theme;

type ValidationRule<T = string> = {
    validate: (value: T) => boolean;
    message: string;
};
type ValidationResult = {
    valid: boolean;
    errors: string[];
};
/** Run a list of validation rules against a value and return all errors. */
declare function validate<T>(value: T, rules: ValidationRule<T>[]): ValidationResult;
declare const required: (msg?: string) => ValidationRule;
declare const minLength: (min: number, msg?: string) => ValidationRule;
declare const maxLength: (max: number, msg?: string) => ValidationRule;
declare const pattern: (regex: RegExp, msg: string) => ValidationRule;
declare const email: (msg?: string) => ValidationRule;
declare const url: (msg?: string) => ValidationRule;
declare const numeric: (msg?: string) => ValidationRule;

/** CSS transition presets */
declare const cssTransitions: {
    fadeIn: string;
    slideUp: string;
    slideDown: string;
    scaleIn: string;
};
declare const motionVariants: {
    fadeIn: {
        initial: {
            opacity: number;
        };
        animate: {
            opacity: number;
        };
        exit: {
            opacity: number;
        };
        transition: {
            duration: number;
        };
    };
    slideUp: {
        initial: {
            opacity: number;
            y: number;
        };
        animate: {
            opacity: number;
            y: number;
        };
        exit: {
            opacity: number;
            y: number;
        };
        transition: {
            duration: number;
            ease: number[];
        };
    };
    slideDown: {
        initial: {
            opacity: number;
            y: number;
        };
        animate: {
            opacity: number;
            y: number;
        };
        exit: {
            opacity: number;
            y: number;
        };
        transition: {
            duration: number;
            ease: number[];
        };
    };
    scaleIn: {
        initial: {
            opacity: number;
            scale: number;
        };
        animate: {
            opacity: number;
            scale: number;
        };
        exit: {
            opacity: number;
            scale: number;
        };
        transition: {
            duration: number;
            ease: number[];
        };
    };
    modalOverlay: {
        initial: {
            opacity: number;
        };
        animate: {
            opacity: number;
        };
        exit: {
            opacity: number;
        };
        transition: {
            duration: number;
        };
    };
};
type MotionVariantKey = keyof typeof motionVariants;

type ButtonVariant = "primary" | "secondary" | "outlined" | "ghost" | "error" | "success";
type ButtonSize = "sm" | "md" | "lg";
interface ButtonProps extends React__default.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    fullWidth?: boolean;
    startIcon?: React__default.ReactNode;
    endIcon?: React__default.ReactNode;
}
declare const Button: React__default.ForwardRefExoticComponent<ButtonProps & React__default.RefAttributes<HTMLButtonElement>>;

type InputSize = "sm" | "md" | "lg";
interface InputProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "size"> {
    size?: InputSize;
    error?: boolean;
    fullWidth?: boolean;
    startAdornment?: React__default.ReactNode;
    endAdornment?: React__default.ReactNode;
}
declare const Input: React__default.ForwardRefExoticComponent<InputProps & React__default.RefAttributes<HTMLInputElement>>;

interface TextFieldProps extends React__default.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label?: string;
    helperText?: string;
    error?: boolean;
    multiline?: boolean;
    rows?: number;
    fullWidth?: boolean;
}
declare const TextField: React__default.ForwardRefExoticComponent<TextFieldProps & React__default.RefAttributes<HTMLInputElement | HTMLTextAreaElement>>;

type SelectSize = "sm" | "md" | "lg";
interface SelectOption {
    label: string;
    value: string | number;
}
interface SelectProps extends Omit<React__default.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
    label?: string;
    options?: SelectOption[];
    error?: boolean;
    helperText?: string;
    fullWidth?: boolean;
    size?: SelectSize;
}
declare const Select: React__default.ForwardRefExoticComponent<SelectProps & React__default.RefAttributes<HTMLSelectElement>>;

type ModalSize = "sm" | "md" | "lg" | "xl" | "full" | (string & {});
interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React__default.ReactNode;
    size?: ModalSize;
    closeOnOverlayClick?: boolean;
}
declare const Modal: React__default.FC<ModalProps>;

interface DialogAction {
    label: string;
    onClick: () => void;
    variant?: ButtonVariant;
    loading?: boolean;
    disabled?: boolean;
    startIcon?: React__default.ReactNode;
}
interface DialogProps {
    /** Whether the dialog is visible */
    open: boolean;
    /** Callback fired when the dialog requests to close */
    onClose: () => void;
    /** Dialog title */
    title?: React__default.ReactNode;
    /** Optional icon next to title */
    icon?: React__default.ReactNode;
    /** Dialog content */
    children?: React__default.ReactNode;
    /** Custom footer content (overrides actions) */
    footer?: React__default.ReactNode;
    /** Action buttons to show in footer */
    actions?: DialogAction[];
    /** Dialog width size */
    size?: ModalSize;
    /** Additional CSS classes for the dialog container */
    className?: string;
    /** Whether clicking the backdrop closes the dialog */
    closeOnOverlayClick?: boolean;
}
/**
 * `Dialog` is a high-level modal component for important messages and user actions.
 */
declare const Dialog: React__default.FC<DialogProps>;

type CardVariant = "elevated" | "outlined" | "filled" | "ghost";
type CardElevation = "none" | "sm" | "md" | "lg";
type CardRadius = "none" | "sm" | "md" | "lg" | "xl" | "2xl";
interface CardProps extends React__default.HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant;
    elevation?: CardElevation;
    radius?: CardRadius;
    hoverable?: boolean;
    fullWidth?: boolean;
}
declare const Card: React__default.FC<CardProps>;
interface CardHeaderProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, "title"> {
    title?: React__default.ReactNode;
    subheader?: React__default.ReactNode;
    action?: React__default.ReactNode;
}
declare const CardHeader: React__default.FC<CardHeaderProps>;
interface CardBodyProps extends React__default.HTMLAttributes<HTMLDivElement> {
    padded?: boolean;
}
declare const CardBody: React__default.FC<CardBodyProps>;
interface CardFooterProps extends React__default.HTMLAttributes<HTMLDivElement> {
    bordered?: boolean;
    align?: "left" | "right";
}
declare const CardFooter: React__default.FC<CardFooterProps>;
interface CardMediaProps extends React__default.HTMLAttributes<HTMLDivElement> {
    image?: string;
    height?: string | number;
    alt?: string;
}
declare const CardMedia: React__default.FC<CardMediaProps>;

interface ContainerProps extends React__default.HTMLAttributes<HTMLDivElement> {
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
    centered?: boolean;
    padding?: boolean;
}
declare const Container: React__default.FC<ContainerProps>;
interface GridProps extends React__default.HTMLAttributes<HTMLDivElement> {
    cols?: number | {
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
    };
    gap?: "none" | "sm" | "md" | "lg" | "xl";
}
declare const Grid: React__default.FC<GridProps>;
interface GridItemProps extends React__default.HTMLAttributes<HTMLDivElement> {
    span?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}
declare const GridItem: React__default.FC<GridItemProps>;

interface NavbarProps extends React__default.HTMLAttributes<HTMLElement> {
    sticky?: boolean;
    bordered?: boolean;
    /** Inner content max width */
    maxWidth?: string;
}
declare const NavbarBrand: React__default.FC<React__default.AnchorHTMLAttributes<HTMLAnchorElement>>;
declare const NavbarNav: React__default.FC<React__default.HTMLAttributes<HTMLElement>>;
declare const NavbarEnd: React__default.FC<React__default.HTMLAttributes<HTMLDivElement>>;
declare const Navbar: React__default.FC<NavbarProps> & {
    Brand: typeof NavbarBrand;
    Nav: typeof NavbarNav;
    End: typeof NavbarEnd;
};

interface SidebarItem {
    key: string;
    label: string;
    icon?: React__default.ReactNode;
    href?: string;
    onClick?: () => void;
    badge?: string | number;
    disabled?: boolean;
    children?: SidebarItem[];
}
interface SidebarProps extends Omit<React__default.HTMLAttributes<HTMLElement>, "onSelect"> {
    items?: SidebarItem[];
    activeKey?: string;
    onSelect?: (key: string) => void;
    collapsed?: boolean;
    responsive?: boolean;
    width?: number | string;
    variant?: "docked" | "floating";
}
declare const SidebarHeader: React__default.FC<React__default.HTMLAttributes<HTMLDivElement>>;
declare const SidebarNav: React__default.FC<React__default.HTMLAttributes<HTMLElement>>;
declare const SidebarList: React__default.FC<React__default.HTMLAttributes<HTMLUListElement>>;
declare const SidebarFooter: React__default.FC<React__default.HTMLAttributes<HTMLDivElement>>;
interface SidebarItemProps extends React__default.HTMLAttributes<HTMLElement> {
    label: string;
    icon?: React__default.ReactNode;
    active?: boolean;
    disabled?: boolean;
    badge?: string | number;
    href?: string;
    hasChildren?: boolean;
}
declare const SidebarItemComp: React__default.FC<SidebarItemProps>;
declare const Sidebar: React__default.FC<SidebarProps> & {
    Header: typeof SidebarHeader;
    Nav: typeof SidebarNav;
    List: typeof SidebarList;
    Item: typeof SidebarItemComp;
    Footer: typeof SidebarFooter;
};

type TooltipPosition = "top" | "bottom" | "left" | "right";
interface TooltipProps {
    content: React__default.ReactNode;
    position?: TooltipPosition;
    children: React__default.ReactElement;
    delay?: number;
}
declare const Tooltip: React__default.FC<TooltipProps>;

type SnackbarType = "success" | "error" | "warning" | "info";
type SnackbarPosition = "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
interface SnackbarMessage {
    id: string;
    type: SnackbarType;
    message: string;
}
interface SnackbarContainerProps {
    messages: SnackbarMessage[];
    onDismiss: (id: string) => void;
    position?: SnackbarPosition;
}
declare const SnackbarContainer: React__default.FC<SnackbarContainerProps>;
interface SnackbarItemProps {
    msg: SnackbarMessage;
    onDismiss: (id: string) => void;
}
declare const SnackbarItem: React__default.FC<SnackbarItemProps>;

export { Button, Card, CardBody, CardFooter, CardHeader, CardMedia, Container, Dialog, Grid, GridItem, Input, Modal, Navbar, Select, Sidebar, SnackbarContainer, SnackbarItem, TextField, ThemeContext, ThemeProvider, Tooltip, cn, cssTransitions, darkTheme, defaultTheme, email, lightTheme, maxLength, mergeTheme, minLength, motionVariants, numeric, pattern, required, url, useMediaQuery, useSnackbar, useTheme, validate };
export type { ButtonProps, CardBodyProps, CardElevation, CardFooterProps, CardHeaderProps, CardMediaProps, CardProps, CardRadius, CardVariant, ContainerProps, DeepPartial, DialogProps, GridItemProps, GridProps, InputProps, InputSize, ModalProps, ModalSize, MotionVariantKey, NavbarProps, SelectOption, SelectProps, SelectSize, SidebarProps, SnackbarContainerProps, SnackbarItemProps, SnackbarMessage$1 as SnackbarMessage, SnackbarSeverity, TextFieldProps, Theme, ThemeBorderRadius, ThemeColors, ThemeContextValue, ThemeMode, ThemeProviderProps, ThemeSemanticColors, ThemeShadow, ThemeSpacing, ThemeTypography, TooltipProps, UseSnackbarReturn, UserTheme, ValidationResult, ValidationRule };
