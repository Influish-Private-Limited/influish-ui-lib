import React from "react";
export type SelectSize = "sm" | "md" | "lg";
export interface SelectOption {
    label: string;
    value: string | number;
}
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
    label?: string;
    options?: SelectOption[];
    error?: boolean;
    helperText?: string;
    fullWidth?: boolean;
    size?: SelectSize;
}
export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;
