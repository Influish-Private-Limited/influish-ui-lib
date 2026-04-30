import type { Theme, UserTheme } from "../theme/types";
export declare function mergeTheme(userTheme?: UserTheme): Theme;
export declare function applyThemeToCssVars(theme: Theme, element?: HTMLElement): void;
