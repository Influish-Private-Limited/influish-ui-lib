import React from "react";
export type ModalSize = "sm" | "md" | "lg" | "xl" | "full" | (string & {});
export interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    size?: ModalSize;
    closeOnOverlayClick?: boolean;
}
export declare const Modal: React.FC<ModalProps>;
