import React from "react";
import { cn } from "../../utils/cn";
import { Modal, type ModalSize } from "../Modal/Modal";
import { Button, type ButtonVariant } from "../Button/Button";

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
export const Dialog: React.FC<DialogProps> = ({
  open,
  onClose,
  title,
  icon,
  children,
  footer,
  actions,
  size = "md",
  className,
  closeOnOverlayClick = true,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      size={size}
      closeOnOverlayClick={closeOnOverlayClick}
    >
      <div className={cn("flex flex-col", className)}>
        {/* Header */}
        {(title || icon || !!onClose) && (
          <div className="flex items-center gap-3 px-6 pt-5 pb-4 border-b border-border-default">
            {icon && (
              <span className="text-primary-500 inline-flex shrink-0">
                {icon}
              </span>
            )}
            {title && (
              <h2 className="text-text-primary flex-1 font-base text-lg font-semibold leading-tight m-0">
                {title}
              </h2>
            )}
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center shrink-0 w-8 h-8 rounded-it-md bg-transparent border-none text-text-secondary cursor-pointer transition-colors duration-150 hover:bg-bg-subtle hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-focus focus-visible:outline-offset-2"
              aria-label="Close dialog"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Content */}
        <div className="px-6 py-5 text-text-secondary font-base text-md leading-relaxed">
          {children}
        </div>

        {/* Footer */}
        {(footer || (actions && actions.length > 0)) && (
          <div className="flex items-center justify-end gap-2 px-6 pt-4 pb-5 border-t border-border-default">
            {footer
              ? footer
              : actions?.map((action, idx) => (
                <Button
                  key={idx}
                  variant={action.variant ?? (idx === (actions.length - 1) ? "primary" : "ghost")}
                  onClick={action.onClick}
                  loading={action.loading}
                  disabled={action.disabled}
                  startIcon={action.startIcon}
                  size="md"
                >
                  {action.label}
                </Button>
              ))}
          </div>
        )}
      </div>
    </Modal>
  );
};
