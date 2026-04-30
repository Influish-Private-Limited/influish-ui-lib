/** CSS transition presets */
export declare const cssTransitions: {
    fadeIn: string;
    slideUp: string;
    slideDown: string;
    scaleIn: string;
};
export declare const motionVariants: {
    fadeIn: {
        initial: {
            opacity: number;
        };
        animate: {
            opacity: number;
        };
        exit: {
            opacity: number;
        };
        transition: {
            duration: number;
        };
    };
    slideUp: {
        initial: {
            opacity: number;
            y: number;
        };
        animate: {
            opacity: number;
            y: number;
        };
        exit: {
            opacity: number;
            y: number;
        };
        transition: {
            duration: number;
            ease: number[];
        };
    };
    slideDown: {
        initial: {
            opacity: number;
            y: number;
        };
        animate: {
            opacity: number;
            y: number;
        };
        exit: {
            opacity: number;
            y: number;
        };
        transition: {
            duration: number;
            ease: number[];
        };
    };
    scaleIn: {
        initial: {
            opacity: number;
            scale: number;
        };
        animate: {
            opacity: number;
            scale: number;
        };
        exit: {
            opacity: number;
            scale: number;
        };
        transition: {
            duration: number;
            ease: number[];
        };
    };
    modalOverlay: {
        initial: {
            opacity: number;
        };
        animate: {
            opacity: number;
        };
        exit: {
            opacity: number;
        };
        transition: {
            duration: number;
        };
    };
};
export type MotionVariantKey = keyof typeof motionVariants;
