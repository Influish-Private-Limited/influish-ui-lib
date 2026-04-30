import React from "react";
export type SnackbarType = "success" | "error" | "warning" | "info";
export type SnackbarPosition = "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
export interface SnackbarMessage {
    id: string;
    type: SnackbarType;
    message: string;
}
export interface SnackbarContainerProps {
    messages: SnackbarMessage[];
    onDismiss: (id: string) => void;
    position?: SnackbarPosition;
}
export declare const SnackbarContainer: React.FC<SnackbarContainerProps>;
export interface SnackbarItemProps {
    msg: SnackbarMessage;
    onDismiss: (id: string) => void;
}
export declare const SnackbarItem: React.FC<SnackbarItemProps>;
