import React from "react";
import { type ModalSize } from "../Modal/Modal";
import { type ButtonVariant } from "../Button/Button";
export interface DialogAction {
    label: string;
    onClick: () => void;
    variant?: ButtonVariant;
    loading?: boolean;
    disabled?: boolean;
    startIcon?: React.ReactNode;
}
export interface DialogProps {
    /** Whether the dialog is visible */
    open: boolean;
    /** Callback fired when the dialog requests to close */
    onClose: () => void;
    /** Dialog title */
    title?: React.ReactNode;
    /** Optional icon next to title */
    icon?: React.ReactNode;
    /** Dialog content */
    children?: React.ReactNode;
    /** Custom footer content (overrides actions) */
    footer?: React.ReactNode;
    /** Action buttons to show in footer */
    actions?: DialogAction[];
    /** Dialog width size */
    size?: ModalSize;
    /** Additional CSS classes for the dialog container */
    className?: string;
    /** Whether clicking the backdrop closes the dialog */
    closeOnOverlayClick?: boolean;
}
/**
 * `Dialog` is a high-level modal component for important messages and user actions.
 */
export declare const Dialog: React.FC<DialogProps>;
