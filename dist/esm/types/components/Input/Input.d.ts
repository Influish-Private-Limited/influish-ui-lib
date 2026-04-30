import React from "react";
export type InputSize = "sm" | "md" | "lg";
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    size?: InputSize;
    error?: boolean;
    fullWidth?: boolean;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
