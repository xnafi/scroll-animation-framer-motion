"use client";
import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number;
  direction?:
    | "left"
    | "right"
    | "up"
    | "down"
    | "popIn"
    | "fadeIn"
    | "zoomIn"
    | "flipX"
    | "flipY";
  className?: string;
  once?: boolean; // 👈 for viewport.once
  amount?: number; // 👈 for viewport.amount
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  delay = 0,
  direction = "right",
  className = "",
  once = true,
  amount = 0.2, // 👈 Default to 0.2
}) => {
  let slideVariants: Variants;

  if (direction === "popIn") {
    slideVariants = {
      initial: { opacity: 0, scale: 0.8 },
      animate: {
        opacity: 1,
        scale: 1,
        transition: { delay, duration: 0.6, ease: [0.42, 0, 0.58, 1] },
      },
    };
  } else if (direction === "fadeIn") {
    slideVariants = {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: { delay, duration: 0.8, ease: "easeInOut" },
      },
    };
  } else if (direction === "zoomIn") {
    slideVariants = {
      initial: { scale: 0 },
      animate: {
        scale: 1,
        transition: { delay, duration: 0.8, ease: "easeInOut" },
      },
    };
  } else if (direction === "flipX") {
    slideVariants = {
      initial: { rotateX: 90, opacity: 0 },
      animate: {
        rotateX: 0,
        opacity: 1,
        transition: { delay, duration: 0.8, ease: "easeInOut" },
      },
    };
  } else if (direction === "flipY") {
    slideVariants = {
      initial: { rotateY: 90, opacity: 0 },
      animate: {
        rotateY: 0,
        opacity: 1,
        transition: { delay, duration: 0.8, ease: "easeInOut" },
      },
    };
  } else {
    let initialVariant;
    switch (direction) {
      case "left":
        initialVariant = { opacity: 0, x: -100 };
        break;
      case "right":
        initialVariant = { opacity: 0, x: 100 };
        break;
      case "up":
        initialVariant = { opacity: 0, y: -100 };
        break;
      case "down":
        initialVariant = { opacity: 0, y: 100 };
        break;
      default:
        initialVariant = { opacity: 0, x: 100 };
    }

    slideVariants = {
      initial: initialVariant,
      animate: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { delay, duration: 0.8, ease: [0.42, 0, 0.58, 1] },
      },
    };
  }

  return (
    <div className="overflow-hidden">
      <motion.div
        variants={slideVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once, amount }} // 👈 Using both props
        className={`${className} block overflow-hidden`}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollAnimation;
