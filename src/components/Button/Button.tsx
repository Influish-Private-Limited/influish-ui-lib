import React from "react";
import { cn } from "../../utils/cn";

export type ButtonVariant = "primary" | "secondary" | "outlined" | "ghost" | "error" | "success";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary-500 text-white shadow-it-sm hover:bg-primary-600 focus-visible:ring-primary-500",
  secondary: "bg-secondary-500 text-white shadow-it-sm hover:bg-secondary-600 focus-visible:ring-secondary-500",
  outlined: "bg-transparent border-primary-500 text-primary-500 hover:bg-bg-subtle focus-visible:ring-primary-500",
  ghost: "bg-transparent text-text-primary hover:bg-bg-subtle focus-visible:ring-primary-500",
  error: "bg-error-500 text-white shadow-it-sm hover:bg-error-600 focus-visible:ring-error-500",
  success: "bg-success-500 text-white shadow-it-sm hover:bg-success-600 focus-visible:ring-success-500",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3.5 py-1.5 text-xs rounded-it-sm",
  md: "px-5 py-2.5 text-sm rounded-it-md",
  lg: "px-7 py-3.5 text-base rounded-it-lg",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      fullWidth = false,
      startIcon,
      endIcon,
      children,
      className,
      disabled,
      ...rest
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 border-2 border-transparent font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && "w-full",
          loading && "cursor-wait",
          className,
        )}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading}
        {...rest}
      >
        {loading && (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" aria-hidden="true" />
        )}
        {!loading && startIcon && (
          <span className="inline-flex shrink-0">{startIcon}</span>
        )}
        <span className="inline-flex items-center">{children}</span>
        {!loading && endIcon && (
          <span className="inline-flex shrink-0">{endIcon}</span>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";
