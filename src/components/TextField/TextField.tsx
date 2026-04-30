import React, { useId } from "react";
import { cn } from "../../utils/cn";

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
  multiline?: boolean;
  rows?: number;
  fullWidth?: boolean;
}

export const TextField = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, TextFieldProps>(
  (
    {
      label,
      helperText,
      error = false,
      multiline = false,
      rows = 4,
      fullWidth = false,
      className,
      disabled,
      id: providedId,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const id = providedId || generatedId;

    const InputComponent = multiline ? "textarea" : "input";

    return (
      <div className={cn("flex flex-col gap-1.5", fullWidth && "w-full", className)}>
        {label && (
          <label
            htmlFor={id}
            className={cn(
              "text-text-primary font-medium text-sm",
              error && "text-error-500",
              disabled && "opacity-50"
            )}
          >
            {label}
          </label>
        )}
        <div
          className={cn(
            "inline-flex bg-bg-paper border-[1.5px] border-border-default rounded-it-md transition-all duration-150 focus-within:border-border-focus focus-within:ring-[3px] focus-within:ring-primary-500/20",
            error && "border-border-error focus-within:ring-error-500/20",
            disabled && "bg-bg-subtle cursor-not-allowed opacity-50",
            fullWidth && "w-full"
          )}
        >
          <InputComponent
            id={id}
            ref={ref as any}
            disabled={disabled}
            rows={multiline ? rows : undefined}
            className={cn(
              "bg-transparent border-none text-text-primary flex-1 font-base text-sm leading-normal outline-none p-2.5 w-full placeholder:text-text-secondary disabled:cursor-not-allowed",
              multiline && "resize-y"
            )}
            {...(props as any)}
          />
        </div>
        {helperText && (
          <span
            className={cn(
              "text-text-secondary text-xs",
              error && "text-error-500"
            )}
          >
            {helperText}
          </span>
        )}
      </div>
    );
  },
);

TextField.displayName = "TextField";
