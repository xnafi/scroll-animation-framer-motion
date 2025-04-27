import React, { ReactNode } from "react";
interface ScrollAnimationProps {
    children: ReactNode;
    delay?: number;
    direction?: "left" | "right" | "up" | "down" | "popIn" | "fadeIn" | "zoomIn" | "flipX" | "flipY";
    className?: string;
    once?: boolean;
    amount?: number;
}
declare const ScrollAnimation: React.FC<ScrollAnimationProps>;
export default ScrollAnimation;
