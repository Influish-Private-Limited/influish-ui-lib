import React from "react";
export type TooltipPosition = "top" | "bottom" | "left" | "right";
export interface TooltipProps {
    content: React.ReactNode;
    position?: TooltipPosition;
    children: React.ReactElement;
    delay?: number;
}
export declare const Tooltip: React.FC<TooltipProps>;
