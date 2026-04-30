// Global Styles
import "./styles/globals.css";

// Theme
export { ThemeProvider } from "./theme/ThemeProvider";
export type { ThemeProviderProps } from "./theme/ThemeProvider";
export { ThemeContext } from "./theme/ThemeContext";
export type { ThemeContextValue } from "./theme/ThemeContext";
export { lightTheme, darkTheme, defaultTheme } from "./theme/defaultTheme";
export type {
  Theme,
  UserTheme,
  ThemeMode,
  ThemeColors,
  ThemeTypography,
  ThemeSpacing,
  ThemeBorderRadius,
  ThemeShadow,
  ThemeSemanticColors,
  DeepPartial,
} from "./theme/types";

// Hooks
export { useTheme } from "./hooks/useTheme";
export { useMediaQuery } from "./hooks/useMediaQuery";
export { useSnackbar } from "./hooks/useSnackbar";
export type { SnackbarMessage, SnackbarSeverity, UseSnackbarReturn } from "./hooks/useSnackbar";

// Utils
export { cn } from "./utils/cn";
export { mergeTheme } from "./utils/mergeTheme";
export {
  validate,
  required,
  minLength,
  maxLength,
  pattern,
  email,
  url,
  numeric,
} from "./utils/validators";
export type { ValidationRule, ValidationResult } from "./utils/validators";

// Animations
export { motionVariants, cssTransitions } from "./animations/transitions";
export type { MotionVariantKey } from "./animations/transitions";

// Components — Button
export { Button } from "./components/Button/Button";
export type { ButtonProps } from "./components/Button/Button";

// Components — Input
export { Input } from "./components/Input/Input";
export type { InputProps, InputSize } from "./components/Input/Input";

// Components — TextField
export { TextField } from "./components/TextField/TextField";
export type { TextFieldProps } from "./components/TextField/TextField";

// Components — Select
export { Select } from "./components/Select/Select";
export type { SelectProps, SelectOption, SelectSize } from "./components/Select/Select";

// Components — Modal
export { Modal } from "./components/Modal/Modal";
export type { ModalProps, ModalSize } from "./components/Modal/Modal";

// Components — Dialog
export { Dialog } from "./components/Dialog/Dialog";
export type { DialogProps } from "./components/Dialog/Dialog";

// Components — Card
export { Card, CardHeader, CardBody, CardFooter, CardMedia } from "./components/Card/Card";
export type { CardProps, CardHeaderProps, CardBodyProps, CardFooterProps, CardMediaProps, CardElevation, CardVariant, CardRadius } from "./components/Card/Card";

// Components — Grid / Container
export { Grid, GridItem, Container } from "./components/Grid/Grid";
export type { GridProps, GridItemProps, ContainerProps } from "./components/Grid/Grid";

// Components — Navbar
export { Navbar } from "./components/Navbar/Navbar";
export type { NavbarProps } from "./components/Navbar/Navbar";

// Components — Sidebar
export { Sidebar } from "./components/Sidebar/Sidebar";
export type { SidebarProps } from "./components/Sidebar/Sidebar";

// Components — Tooltip
export { Tooltip } from "./components/Tooltip/Tooltip";
export type { TooltipProps } from "./components/Tooltip/Tooltip";

// Components — Snackbar
export { SnackbarContainer, SnackbarItem } from "./components/Snackbar/Snackbar";
export type { SnackbarContainerProps, SnackbarItemProps } from "./components/Snackbar/Snackbar";

// Components — Icon
// export { Icon } from "./components/Icon/Icon";
// export type { IconProps, IconName } from "./components/Icon/Icon";
