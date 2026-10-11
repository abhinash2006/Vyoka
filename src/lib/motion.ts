import type { Variants, Transition } from "framer-motion";

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

export const transitionFast: Transition = {
  duration: 0.2,
  ease: EASE_OUT_EXPO,
};

export const transitionMedium: Transition = {
  duration: 0.4,
  ease: EASE_OUT_EXPO,
};

export const transitionSlow: Transition = {
  duration: 0.7,
  ease: EASE_OUT_EXPO,
};

export const springPhysics: Transition = {
  type: "spring",
  stiffness: 350,
  damping: 25,
};

export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE_OUT_EXPO,
    },
  },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: EASE_OUT_EXPO,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const scaleUpVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: EASE_OUT_EXPO,
    },
  },
};
