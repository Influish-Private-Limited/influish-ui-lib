import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "../../utils/cn";

export type TooltipPosition = "top" | "bottom" | "left" | "right";

export interface TooltipProps {
  content: React.ReactNode;
  position?: TooltipPosition;
  children: React.ReactElement;
  delay?: number;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = "top",
  children,
  delay = 200,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLElement>(null);
  const timerRef = useRef<NodeJS.Timeout>();

  const updatePosition = () => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    let top = 0;
    let left = 0;

    switch (position) {
      case "top":
        top = rect.top + scrollTop - 8;
        left = rect.left + scrollLeft + rect.width / 2;
        break;
      case "bottom":
        top = rect.bottom + scrollTop + 8;
        left = rect.left + scrollLeft + rect.width / 2;
        break;
      case "left":
        top = rect.top + scrollTop + rect.height / 2;
        left = rect.left + scrollLeft - 8;
        break;
      case "right":
        top = rect.top + scrollTop + rect.height / 2;
        left = rect.right + scrollLeft + 8;
        break;
    }

    setCoords({ top, left });
  };

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => {
      updatePosition();
      setIsVisible(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    clearTimeout(timerRef.current);
    setIsVisible(false);
  };

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const positionClasses = {
    top: "-translate-x-1/2 -translate-y-full",
    bottom: "-translate-x-1/2",
    left: "-translate-x-full -translate-y-1/2",
    right: "-translate-y-1/2",
  };

  const arrowClasses = {
    top: "top-full left-1/2 -translate-x-1/2 border-t-neutral-900",
    bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-neutral-900",
    left: "left-full top-1/2 -translate-y-1/2 border-l-neutral-900",
    right: "right-full top-1/2 -translate-y-1/2 border-r-neutral-900",
  };

  return (
    <>
      {React.cloneElement(children, {
        ref: triggerRef,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      })}
      {isVisible &&
        createPortal(
          <div
            className={cn(
              "absolute z-[600] px-3 py-1.5 bg-neutral-900 text-white text-xs font-medium rounded-it-md shadow-it-lg pointer-events-none whitespace-nowrap animate-fade-in animate-zoom-in",
              positionClasses[position]
            )}
            style={{ top: coords.top, left: coords.left }}
          >
            {content}
            <div className={cn("absolute w-0 h-0 border-4 border-transparent", arrowClasses[position])} />
          </div>,
          document.body
        )}
    </>
  );
};
