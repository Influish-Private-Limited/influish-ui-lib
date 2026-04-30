import React from "react";
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
export declare const Card: React.FC<CardProps>;
export interface CardHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
    title?: React.ReactNode;
    subheader?: React.ReactNode;
    action?: React.ReactNode;
}
export declare const CardHeader: React.FC<CardHeaderProps>;
export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    padded?: boolean;
}
export declare const CardBody: React.FC<CardBodyProps>;
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    bordered?: boolean;
    align?: "left" | "right";
}
export declare const CardFooter: React.FC<CardFooterProps>;
export interface CardMediaProps extends React.HTMLAttributes<HTMLDivElement> {
    image?: string;
    height?: string | number;
    alt?: string;
}
export declare const CardMedia: React.FC<CardMediaProps>;
