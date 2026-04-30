import React from "react";
export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
    sticky?: boolean;
    bordered?: boolean;
    /** Inner content max width */
    maxWidth?: string;
}
declare const NavbarBrand: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>>;
declare const NavbarNav: React.FC<React.HTMLAttributes<HTMLElement>>;
declare const NavbarEnd: React.FC<React.HTMLAttributes<HTMLDivElement>>;
export declare const Navbar: React.FC<NavbarProps> & {
    Brand: typeof NavbarBrand;
    Nav: typeof NavbarNav;
    End: typeof NavbarEnd;
};
export {};
