// ─── Animation presets for InfluishTheme ──────────────────────────────────
// Works with both CSS transitions and framer-motion variants.

/** CSS transition presets */
export const cssTransitions = {
  fadeIn: `
    @keyframes it-fade-in {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
  `,
  slideUp: `
    @keyframes it-slide-up {
      from { transform: translateY(12px); opacity: 0; }
      to   { transform: translateY(0);    opacity: 1; }
    }
  `,
  slideDown: `
    @keyframes it-slide-down {
      from { transform: translateY(-12px); opacity: 0; }
      to   { transform: translateY(0);     opacity: 1; }
    }
  `,
  scaleIn: `
    @keyframes it-scale-in {
      from { transform: scale(0.92); opacity: 0; }
      to   { transform: scale(1);    opacity: 1; }
    }
  `,
};

// ─── Framer Motion variants (optional dependency) ────────────────────────

export const motionVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2 },
  },
  slideUp: {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 12 },
    transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
  },
  slideDown: {
    initial: { opacity: 0, y: -12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
    transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.92 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.92 },
    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
  },
  modalOverlay: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2 },
  },
};

export type MotionVariantKey = keyof typeof motionVariants;
