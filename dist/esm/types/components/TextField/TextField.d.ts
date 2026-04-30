import React from "react";
export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label?: string;
    helperText?: string;
    error?: boolean;
    multiline?: boolean;
    rows?: number;
    fullWidth?: boolean;
}
export declare const TextField: React.ForwardRefExoticComponent<TextFieldProps & React.RefAttributes<HTMLInputElement | HTMLTextAreaElement>>;
