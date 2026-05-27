import React from "react";
import { cn } from "../../utils/cn";

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  sticky?: boolean;
  bordered?: boolean;
  /** Inner content max width */
  maxWidth?: string;
  mobileMenu?: React.ReactNode;
  mobileAction?: React.ReactNode;
}

const NavbarBrand: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className, ...props }) => (
  <div className={cn(
    "flex text-lg font-bold text-text-primary no-underline items-center gap-3 tracking-tight min-w-0 sm:min-w-[160px]",
    className
  )} {...props} />
);

const NavbarNav: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className, ...props }) => (
  <nav className={cn("hidden lg:flex items-center justify-center gap-6 flex-1 px-6", className)} {...props} />
);

const NavbarEnd: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn("hidden lg:flex items-center gap-3 justify-end shrink-0", className)} {...props} />
);

export const Navbar: React.FC<NavbarProps> & {
  BrandIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  Brand: typeof NavbarBrand;
  Nav: typeof NavbarNav;
  End: typeof NavbarEnd;
} = ({ sticky, bordered, maxWidth, className, children, style, mobileMenu, mobileAction, ...props }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const childrenArray = React.Children.toArray(children);
  const brandSection = childrenArray[0];
  const navSection = childrenArray[1];
  const endSection = childrenArray[2];

  return (
    <header
      className={cn(
        "relative overflow-visible w-full border-b border-border-default flex items-center justify-between px-6 py-2 h-20 bg-bg-paper transition-all duration-300 w-full box-border",
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
        className="w-full h-full mx-auto items-center grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:flex lg:items-center lg:justify-between px-0 sm:px-2"
        style={maxWidth ? { maxWidth } : undefined}
      >

        {brandSection}

        <div className="flex justify-center items-center lg:hidden px-2">
          <button
            className="flex items-center justify-center rounded-xl p-2 transition hover:bg-white/10"
            aria-label="Toggle Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6L18 18M6 18L18 6" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7H20" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 12H20" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 17H20" />
              </svg>
            )}
          </button>
        </div>

        {navSection}

        {/* RIGHT — end actions */}
        <div className="flex items-center justify-end shrink-0 min-w-0 lg:min-w-[160px]">
          <div className="lg:hidden">{mobileAction}</div>
          {endSection}
        </div>
      </div>

      {/* MOBILE MENU — outside the flex row entirely */}
      <div className={cn(
        " transition-all duration-300 lg:hidden absolute top-full left-0 w-full bg-bg-paper border-b border-border-default",
        isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-4 py-5 sm:px-6">{mobileMenu}</div>
      </div>
    </header>
  );
};

Navbar.BrandIcon = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={cn("h-6 w-6", className)} {...props} >
    <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10.0001 16L7.0001 13L8.4101 11.59L10.0001 13.17L15.5901 7.58002L17.0001 8.99002L10.0001 16Z" />
  </svg>
);

Navbar.Brand = NavbarBrand;
Navbar.Nav = NavbarNav;
Navbar.End = NavbarEnd;
Navbar.displayName = "Navbar";