import React, { useId, forwardRef } from "react";
import { cn } from "../../utils/cn";

export type SelectSize = "sm" | "md" | "lg";

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: string;
  options?: SelectOption[];
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  size?: SelectSize;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      options = [],
      error = false,
      helperText,
      fullWidth = false,
      size = "md",
      className,
      disabled,
      children,
      id: providedId,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const id = providedId || generatedId;

    const sizeStyles = {
      sm: "min-h-[2rem] px-2",
      md: "min-h-[2.5rem] px-3",
      lg: "min-h-[3rem] px-4",
    };

    return (
      <div className={cn("flex flex-col gap-1.5", fullWidth && "w-full", className)}>
        {label && (
          <label
            htmlFor={id}
            className={cn(
              "text-text-primary font-medium text-sm",
              error && "text-border-error",
              disabled && "opacity-50"
            )}
          >
            {label}
          </label>
        )}
        <div
          className={cn(
            "relative inline-flex items-center bg-bg-paper border-[1.5px] border-border-default rounded-it-md transition-all duration-150 focus-within:border-border-focus focus-within:ring-[3px] focus-within:ring-primary-500/20",
            error && "border-border-error focus-within:ring-error-500/20",
            disabled && "bg-bg-subtle opacity-50 pointer-events-none",
            fullWidth && "w-full",
            sizeStyles[size]
          )}
        >
          <select
            id={id}
            ref={ref}
            disabled={disabled}
            className="appearance-none bg-transparent border-none text-text-primary flex-1 font-base text-sm leading-normal outline-none py-1 w-full cursor-pointer pr-7 placeholder:text-text-secondary"
            {...props}
          >
            {children ||
              options.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-bg-paper text-text-primary">
                  {opt.label}
                </option>
              ))}
          </select>
          <svg
            className="absolute right-2.5 w-4 h-4 text-text-secondary pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        {helperText && (
          <span className={cn("text-text-secondary text-xs", error && "text-border-error")}>
            {helperText}
          </span>
        )}
      </div>
    );
  },
);

Select.displayName = "Select";
