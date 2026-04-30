import React from "react";
import { cn } from "../../utils/cn";

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  sticky?: boolean;
  bordered?: boolean;
  /** Inner content max width */
  maxWidth?: string;
}

const NavbarBrand: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ className, ...props }) => (
  <a className={cn("text-lg font-bold text-text-primary no-underline flex items-center gap-3 tracking-tight", className)} {...props} />
);

const NavbarNav: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className, ...props }) => (
  <nav className={cn("flex items-center gap-3 flex-1 justify-center px-4 max-lg:hidden", className)} {...props} />
);

const NavbarEnd: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn("flex items-center gap-3 justify-end", className)} {...props} />
);

export const Navbar: React.FC<NavbarProps> & {
  Brand: typeof NavbarBrand;
  Nav: typeof NavbarNav;
  End: typeof NavbarEnd;
} = ({ sticky, bordered, maxWidth, className, children, style, ...props }) => {
  return (
    <header
      className={cn(
        "flex items-center justify-between px-6 py-2 h-20 bg-bg-paper border-b border-border-default transition-all duration-300 w-full box-border",
        sticky && "sticky top-0 backdrop-blur-md",
        bordered && "border-b border-border-default",
        className
      )}
      style={{
        zIndex: "var(--it-z-sticky, 200)",
        ...(sticky ? { backgroundColor: "rgb(var(--it-bg-paper) / 0.85)" } : {}),
        ...style
      }}
      {...props}
    >
      <div
        className="w-full flex items-center justify-between h-full mx-auto max-sm:px-0"
        style={maxWidth ? { maxWidth } : undefined}
      >
        {children}
      </div>
    </header>
  );
};

Navbar.Brand = NavbarBrand;
Navbar.Nav = NavbarNav;
Navbar.End = NavbarEnd;
Navbar.displayName = "Navbar";
