import React from "react";
import { cn } from "../../utils/cn";

export type CardVariant = "elevated" | "outlined" | "filled" | "ghost";
export type CardElevation = "none" | "sm" | "md" | "lg";
export type CardRadius = "none" | "sm" | "md" | "lg" | "xl" | "2xl";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  elevation?: CardElevation;
  radius?: CardRadius;
  hoverable?: boolean;
  fullWidth?: boolean;
}

export const Card: React.FC<CardProps> = ({
  variant = "elevated",
  elevation = "sm",
  radius = "md",
  hoverable = false,
  fullWidth = false,
  className,
  children,
  ...props
}) => {
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

  return (
    <div
      className={cn(
        "relative bg-bg-paper overflow-hidden transition-all duration-200",
        variantStyles[variant],
        elevationStyles[elevation],
        radiusStyles[radius],
        hoverable && "hover:shadow-it-xl hover:-translate-y-1 cursor-pointer",
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export interface CardHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  subheader?: React.ReactNode;
  action?: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subheader,
  action,
  className,
  ...props
}) => (
  <div className={cn("px-6 pt-5 pb-0 flex items-start justify-between gap-3", className)} {...props}>
    <div className="flex-1 min-w-0">
      {title && (
        <h3 className="text-text-primary font-semibold text-lg leading-tight truncate">
          {title}
        </h3>
      )}
      {subheader && (
        <p className="text-text-secondary text-sm mt-1">
          {subheader}
        </p>
      )}
    </div>
    {action && <div className="shrink-0">{action}</div>}
  </div>
);

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  padded?: boolean;
}

export const CardBody: React.FC<CardBodyProps> = ({
  padded = true,
  className,
  children,
  ...props
}) => (
  <div
    className={cn(
      "text-text-secondary leading-relaxed",
      padded && "p-6",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  bordered?: boolean;
  align?: "left" | "right";
}

export const CardFooter: React.FC<CardFooterProps> = ({
  bordered = false,
  align = "left",
  className,
  children,
  ...props
}) => (
  <div
    className={cn(
      "px-6 py-4 flex items-center gap-2",
      bordered && "border-t border-border-default",
      align === "right" && "justify-end",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export interface CardMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  height?: string | number;
  alt?: string;
}

export const CardMedia: React.FC<CardMediaProps> = ({
  image,
  height = 200,
  alt = "",
  className,
  style,
  children,
  ...props
}) => (
  <div
    className={cn("w-full overflow-hidden", className)}
    style={{ height, ...style }}
    {...props}
  >
    {image ? (
      <img src={image} alt={alt} className="w-full h-full object-cover" />
    ) : (
      children
    )}
  </div>
);
