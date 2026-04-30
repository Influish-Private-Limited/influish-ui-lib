import React from "react";
import { cn } from "../../utils/cn";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  centered?: boolean;
  padding?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  size = "lg",
  centered = true,
  padding = true,
  className,
  children,
  ...props
}) => {
  const sizeClasses = {
    sm: "max-w-[40rem]",
    md: "max-w-[56rem]",
    lg: "max-w-[72rem]",
    xl: "max-w-[80rem]",
    "2xl": "max-w-[96rem]",
    full: "max-w-full",
  };

  return (
    <div
      className={cn(
        "w-full",
        centered && "mx-auto",
        padding && "px-6",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: number | { sm?: number; md?: number; lg?: number; xl?: number };
  gap?: "none" | "sm" | "md" | "lg" | "xl";
}

export const Grid: React.FC<GridProps> = ({
  cols = 12,
  gap = "md",
  className,
  children,
  ...props
}) => {
  const gapClasses = {
    none: "gap-0",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
  };

  return (
    <div
      className={cn(
        "grid",
        gapClasses[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export const GridItem: React.FC<GridItemProps> = ({
  span = 12,
  sm,
  md,
  lg,
  xl,
  className,
  children,
  style,
  ...props
}) => {
  return (
    <div
      className={cn(
        // We use CSS variables for grid spans as it's more flexible than generating 144 Tailwind classes
        className
      )}
      style={{
        ...style,
        "--it-col-span": span,
        "--it-col-span-sm": sm,
        "--it-col-span-md": md,
        "--it-col-span-lg": lg,
        "--it-col-span-xl": xl,
      } as React.CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
};
