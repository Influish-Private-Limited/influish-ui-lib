import React from "react";
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
    centered?: boolean;
    padding?: boolean;
}
export declare const Container: React.FC<ContainerProps>;
export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    cols?: number | {
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
    };
    gap?: "none" | "sm" | "md" | "lg" | "xl";
}
export declare const Grid: React.FC<GridProps>;
export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
    span?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}
export declare const GridItem: React.FC<GridItemProps>;
