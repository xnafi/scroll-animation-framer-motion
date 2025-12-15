"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollAnimationShowcase() {
  const { scrollYProgress } = useScroll();

  // Parallax + progress bar
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const scaleX = scrollYProgress;

  return (
    <div className="bg-neutral-950 text-white">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.h1
          style={{ y: heroY }}
          className="text-6xl md:text-7xl font-extrabold text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Scroll Animation
          <br />
          Framer Motion
        </motion.h1>
      </section>

      {/* FADE + SLIDE SECTIONS */}
      {sections.map((section, i) => (
        <motion.section
          key={i}
          className="min-h-screen flex items-center justify-center px-6"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-3xl text-center">
            <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
            <p className="text-lg text-neutral-400">{section.text}</p>
          </div>
        </motion.section>
      ))}

      {/* STAGGERED CARDS */}
      <section className="min-h-screen px-8 flex flex-col justify-center">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Staggered Elements
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="rounded-2xl bg-neutral-900 p-6 border border-neutral-800"
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-neutral-400 text-sm">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="h-40 flex items-center justify-center text-neutral-500 text-sm">
        Built with ❤️ using Framer Motion scroll animations
      </footer>
    </div>
  );
}

/* ------------------ DATA ---------------- */

const sections = [
  {
    title: "Animate on Scroll",
    text: "Elements smoothly fade and slide into view as you scroll down the page.",
  },
  {
    title: "Parallax Motion",
    text: "Scroll position controls transform values for immersive depth.",
  },
  {
    title: "Progress Tracking",
    text: "Use scroll progress to visualize reading or navigation progress.",
  },
];

const cards = [
  {
    title: "Declarative",
    text: "Animations are defined as simple props, not imperative logic.",
  },
  {
    title: "Performant",
    text: "Optimized with requestAnimationFrame and GPU transforms.",
  },
  {
    title: "Composable",
    text: "Combine scroll, hover, tap, and layout animations together.",
  },
];
