# scroll-animation-framer-motion

A super simple, flexible, and lightweight scroll-based animation component for React and Next.js projects. Powered by Framer Motion.

---

## Features

- Easy to use
- 8+ predefined directions (fade, zoom, flip, slide)
- Configurable delay, viewport options (`once`, `amount`)
- Works perfectly with **Next.js** and **React**

---

## Installation

```bash
npm install scroll-animation-framer-motion
# or
yarn add scroll-animation-framer-motion



import ScrollAnimation from "scroll-animation-framer-motion";

export default function Page() {
  return (
    <ScrollAnimation direction="left" delay={0.2}>
      <h1>Hello, World!</h1>
    </ScrollAnimation>
  );
}

Prop        Type                                                                          | Default | Description

direction   "left" | "right" | "up" | "down" | "popIn"                                       "right"  Direction or style of animation
            | "fadeIn" | "zoomIn" | "flipX" | "flipY" | "right" |  

delay        number                                                                            0      Delay before the animation starts (in seconds)

className    string                                                                            ""     Custom CSS classes

once         boolean                                                                          true    Animate only once or every time it enters view
                                                                       
amount       number                                                                            0.2    How much of the element must be visible to trigger animation
