import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "../../utils/cn";

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

export const SnackbarContainer: React.FC<SnackbarContainerProps> = ({
  messages,
  onDismiss,
  position = "bottom-right",
}) => {
  const positionClasses: Record<SnackbarPosition, string> = {
    "top-left": "top-0 left-0 items-start",
    "top-center": "top-0 left-1/2 -translate-x-1/2 items-center",
    "top-right": "top-0 right-0 items-end",
    "bottom-left": "bottom-0 left-0 items-start",
    "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 items-center",
    "bottom-right": "bottom-0 right-0 items-end",
  };

  return createPortal(
    <div className={cn("fixed z-[500] w-full max-w-[26rem] p-4 pointer-events-none flex flex-col gap-2.5", positionClasses[position])}>
      {messages.map((msg) => (
        <SnackbarItem key={msg.id} msg={msg} onDismiss={onDismiss} />
      ))}
    </div>,
    document.body,
  );
};

export interface SnackbarItemProps { msg: SnackbarMessage; onDismiss: (id: string) => void }

export const SnackbarItem: React.FC<SnackbarItemProps> = ({ msg, onDismiss }) => {
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleDismiss();
    }, 3000);

    return () => clearTimeout(timer);
  }, [isLeaving])

  const handleDismiss = () => {
    setIsLeaving(true);
    setTimeout(() => onDismiss(msg.id), 400);
  };

  const typeClasses: Record<SnackbarType, string> = {
    success: "bg-green-50 border-green-500 text-green-800",
    error: "bg-red-50 border-red-500 text-red-800",
    warning: "bg-orange-50 border-orange-500 text-orange-800",
    info: "bg-blue-50 border-blue-500 text-blue-800",
  };

  return (
    <div
      className={cn(
        "flex items-start gap-2.5 min-w-[18rem] max-w-[26rem] p-3 px-4 border rounded-it-lg shadow-it-lg pointer-events-auto font-base text-sm animate-slide-in-right",
        isLeaving && "opacity-0 translate-x-4 transition-all duration-400",
        typeClasses[msg.type]
      )}
    >
      <span className="shrink-0 mt-0.5">
        {msg.type === "success" && "✅"}
        {msg.type === "error" && "❌"}
        {msg.type === "warning" && "⚠️"}
        {msg.type === "info" && "ℹ️"}
      </span>
      <span className="flex-1 font-medium leading-normal">{msg.message}</span>
      <button
        onClick={handleDismiss}
        className="inline-flex items-center justify-center shrink-0 w-6 h-6 rounded-it-sm bg-transparent border-none text-inherit cursor-pointer opacity-60 transition-all hover:bg-black/5 hover:opacity-100"
      >
        ×
      </button>
    </div>
  );
};