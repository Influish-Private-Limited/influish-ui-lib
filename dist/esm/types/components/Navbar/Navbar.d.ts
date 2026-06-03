import React from "react";
export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
    sticky?: boolean;
    bordered?: boolean;
    /** Inner content max width */
    maxWidth?: string;
    mobileMenu?: React.ReactNode;
    mobileAction?: React.ReactNode;
}
declare const NavbarBrand: React.FC<React.HTMLAttributes<HTMLDivElement>>;
declare const NavbarBrandText: React.FC<React.HTMLAttributes<HTMLSpanElement>>;
declare const NavbarNav: React.FC<React.HTMLAttributes<HTMLElement>>;
declare const NavbarEnd: React.FC<React.HTMLAttributes<HTMLDivElement>>;
declare const NavbarBrandIcon: React.FC<React.SVGProps<SVGSVGElement>>;
export declare const Navbar: React.FC<NavbarProps> & {
    BrandIcon: typeof NavbarBrandIcon;
    Brand: typeof NavbarBrand;
    BrandText: typeof NavbarBrandText;
    Nav: typeof NavbarNav;
    End: typeof NavbarEnd;
};
export {};
