import React, { forwardRef } from "react";
import { cn } from "../../utils/cn";

export type InputSize = "sm" | "md" | "lg";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: InputSize;
  error?: boolean;
  fullWidth?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = "md",
      error = false,
      fullWidth = false,
      startAdornment,
      endAdornment,
      className,
      disabled,
      ...props
    },
    ref,
  ) => {
    const sizeStyles = {
      sm: "min-h-[2rem] px-2",
      md: "min-h-[2.5rem] px-3",
      lg: "min-h-[3rem] px-4",
    };

    return (
      <div
        className={cn(
          "inline-flex items-center bg-bg-paper border-[1.5px] border-border-default rounded-it-md transition-all duration-150 focus-within:border-border-focus focus-within:ring-[3px] focus-within:ring-primary-500/20",
          error && "border-border-error focus-within:ring-error-500/20",
          disabled && "bg-bg-subtle cursor-not-allowed opacity-50",
          fullWidth && "w-full",
          sizeStyles[size],
          className,
        )}
      >
        {startAdornment && (
          <div className="inline-flex items-center text-text-secondary mr-1.5 shrink-0">
            {startAdornment}
          </div>
        )}
        <input
          ref={ref}
          disabled={disabled}
          className={cn(
            "bg-transparent border-none text-text-primary flex-1 font-base text-sm leading-normal outline-none py-1 w-full placeholder:text-text-secondary disabled:cursor-not-allowed",
            startAdornment && "pl-1",
            endAdornment && "pr-1",
          )}
          {...props}
        />
        {endAdornment && (
          <div className="inline-flex items-center text-text-secondary ml-1.5 shrink-0">
            {endAdornment}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";