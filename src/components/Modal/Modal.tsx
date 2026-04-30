import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { cn } from "../../utils/cn";

export type ModalSize = "sm" | "md" | "lg" | "xl" | "full" | (string & {});

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: ModalSize;
  closeOnOverlayClick?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  size = "md",
  closeOnOverlayClick = true,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [open]);

  if (!open) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === overlayRef.current) {
      onClose();
    }
  };

  const isCustomSize = !["sm", "md", "lg", "xl", "full"].includes(size as string);

  const sizeClasses: Record<string, string> = {
    sm: "max-w-it-modal-sm",
    md: "max-w-it-modal-md",
    lg: "max-w-it-modal-lg",
    xl: "max-w-it-modal-xl",
    full: "max-w-[calc(100vw-2rem)] h-[calc(100vh-2rem)]",
  };

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[400] flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm animate-fade-in"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className={cn(
          "bg-bg-paper border border-border-default rounded-it-xl shadow-it-2xl outline-none overflow-y-auto w-full animate-zoom-in max-h-[calc(100vh-2rem)]",
          !isCustomSize && sizeClasses[size as string]
        )}
        style={isCustomSize ? { maxWidth: size as string } : undefined}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};
