"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false, // Animation triggers every time it comes into view
    amount: 0.1, // Trigger when 30% of the element is visible
  });

  return (
    <div id="About" className="md:pt-32 md:pb-16 py-12">
      <div className="flex flex-col-reverse flex-reverse md:flex-row items-center justify-between gap-15 lg:gap-0">
        {/* Texts */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="flex flex-col justify-center items-center text-center mx-auto gap-4"
        >
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="text-6xl font-semibold mb-6"
            >
              About Me
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: "easeOut",
              }}
              className="text-[1.33rem] font-mono mb-2 max-w-2xl"
            >
              I'm a Computer Engineering student with a passion for indie game
              development. I am self-taught in Unity and C#, and I build my own
              projects from concept to completion.
            </motion.h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
