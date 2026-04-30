import React from "react";
export interface SidebarItem {
    key: string;
    label: string;
    icon?: React.ReactNode;
    href?: string;
    onClick?: () => void;
    badge?: string | number;
    disabled?: boolean;
    children?: SidebarItem[];
}
export interface SidebarProps extends Omit<React.HTMLAttributes<HTMLElement>, "onSelect"> {
    items?: SidebarItem[];
    activeKey?: string;
    onSelect?: (key: string) => void;
    collapsed?: boolean;
    responsive?: boolean;
    width?: number | string;
    variant?: "docked" | "floating";
}
declare const SidebarHeader: React.FC<React.HTMLAttributes<HTMLDivElement>>;
declare const SidebarNav: React.FC<React.HTMLAttributes<HTMLElement>>;
declare const SidebarList: React.FC<React.HTMLAttributes<HTMLUListElement>>;
declare const SidebarFooter: React.FC<React.HTMLAttributes<HTMLDivElement>>;
interface SidebarItemProps extends React.HTMLAttributes<HTMLElement> {
    label: string;
    icon?: React.ReactNode;
    active?: boolean;
    disabled?: boolean;
    badge?: string | number;
    href?: string;
    hasChildren?: boolean;
}
declare const SidebarItemComp: React.FC<SidebarItemProps>;
export declare const Sidebar: React.FC<SidebarProps> & {
    Header: typeof SidebarHeader;
    Nav: typeof SidebarNav;
    List: typeof SidebarList;
    Item: typeof SidebarItemComp;
    Footer: typeof SidebarFooter;
};
export {};
