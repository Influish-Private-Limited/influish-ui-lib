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

// ─── Sub-components ──────────────────────────────────────────────────────────

const NavbarBrand: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "flex min-w-0 shrink-0 items-center gap-3 text-lg font-bold tracking-tight text-text-primary text-[var(--it-text-primary,#111)] no-underline lg:min-w-[160px]",
      className
    )}
    {...props}
  />
);
NavbarBrand.displayName = "NavbarBrand";

const NavbarBrandText: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  className,
  ...props
}) => (
  <span className={cn("hidden lg:inline", className)} {...props} />
);
NavbarBrandText.displayName = "NavbarBrandText";

const NavbarNav: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => (
  <nav
    className={cn(
      "hidden lg:flex items-center justify-center gap-6 flex-1 px-6",
      className
    )}
    {...props}
  />
);
NavbarNav.displayName = "NavbarNav";

const NavbarEnd: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={cn("hidden lg:flex items-center gap-3 justify-end shrink-0", className)}
    {...props}
  />
);
NavbarEnd.displayName = "NavbarEnd";

const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7H20" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 12H20" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 17H20" />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6L18 18M6 18L18 6" />
  </svg>
);

const NavbarBrandIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  children,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn("h-6 w-6", className)}
    {...props}
  >
    {children ?? (
      // Default: checkmark-circle (original v1 icon)
      <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10.0001 16L7.0001 13L8.4101 11.59L10.0001 13.17L15.5901 7.58002L17.0001 8.99002L10.0001 16Z" />
    )}
  </svg>
);
NavbarBrandIcon.displayName = "NavbarBrandIcon";

// Helpers 
/** Recursively find a child with a matching displayName. */
function pickChild(
  children: React.ReactNode,
  displayName: string
): React.ReactNode {
  let found: React.ReactNode = null;

  React.Children.forEach(children, (child) => {
    if (found || !React.isValidElement(child)) return;

    if ((child.type as any)?.displayName === displayName) {
      found = child;
      return;
    }

    if (child.props?.children) {
      const nested = pickChild(child.props.children, displayName);
      if (nested) found = nested;
    }
  });

  return found;
}

export const Navbar: React.FC<NavbarProps> & {
  BrandIcon: typeof NavbarBrandIcon;
  Brand: typeof NavbarBrand;
  BrandText: typeof NavbarBrandText;
  Nav: typeof NavbarNav;
  End: typeof NavbarEnd;
} = ({
  sticky,
  bordered,
  maxWidth,
  className,
  children,
  style,
  mobileMenu,
  mobileAction,
  ...props
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const brandSection = pickChild(children, "NavbarBrand");
  const navSection   = pickChild(children, "NavbarNav");
  const endSection   = pickChild(children, "NavbarEnd");

  return (
    <header
      className={cn(
        "relative overflow-visible w-full h-20 px-6 py-2",
        "flex items-center",
        "bg-[var(--it-bg-paper,#fff)]",
        "transition-all duration-300",
        bordered && "border-b border-[var(--it-border-default,#e5e7eb)]",
        sticky && "sticky top-0 backdrop-blur-md",
        className
      )}
      style={{
        zIndex: "var(--it-z-sticky, 200)",
        ...(sticky ? { backgroundColor: "rgb(var(--it-bg-paper) / 0.85)" } : {}),
        ...style,
      }}
      {...props}
    >
      {/* ── Inner layout ──────────────────────────────────────────────── */}
      <div
        className="mx-auto h-full w-full overflow-visible px-0 sm:px-2"
        style={maxWidth ? { maxWidth } : undefined}
      >
        <div className="grid h-full w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 overflow-visible lg:flex lg:justify-between">

          {/* LEFT — Brand */}
          <div className="flex min-w-0 items-center justify-start lg:shrink-0">{brandSection}</div>

          {/* CENTER — hamburger (mobile) / nav links (desktop) */}
          <div className="flex items-center justify-center lg:hidden">
            <button
              type="button"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl p-0 text-text-primary transition hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>

          <div className="hidden min-w-0 flex-1 items-center justify-center overflow-visible lg:flex">
            {navSection}
          </div>

          {/* RIGHT — mobileAction (mobile) / end section (desktop) */}
          <div className="flex shrink-0 items-center justify-end gap-2 overflow-visible lg:gap-3">
            {/* mobileAction: shown only on mobile, hidden on desktop */}
            {mobileAction && (
              <div className="inline-flex shrink-0 items-center lg:hidden">{mobileAction}</div>
            )}
            {endSection}
          </div>

        </div>
      </div>

      {/* ── Mobile menu panel ─────────────────────────────────────────── */}
      <div
        className={cn(
          "absolute top-full left-0 w-full z-50 lg:hidden",
          "bg-[var(--it-bg-paper,#fff)]",
          "overflow-hidden transition-all duration-300",
          bordered && "border-b border-[var(--it-border-default,#e5e7eb)]",
          isMobileMenuOpen ? "pointer-events-auto max-h-[500px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="px-4 py-5 sm:px-6">{mobileMenu}</div>
      </div>
    </header>
  );
};

Navbar.BrandIcon  = NavbarBrandIcon;
Navbar.Brand      = NavbarBrand;
Navbar.BrandText  = NavbarBrandText;
Navbar.Nav        = NavbarNav;
Navbar.End        = NavbarEnd;
Navbar.displayName = "Navbar";
