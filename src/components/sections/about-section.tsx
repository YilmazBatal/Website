"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Link, Newspaper } from "lucide-react";
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
              className="text-[1.33rem] font-mono mb-2 max-w-2xl text-gray-400"
            >
              I'm a Computer Engineering student with a passion for indie game
              development. I am self-taught in Unity and C#, and I build my own
              projects from concept to completion.
            </motion.h2>
            <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
  transition={{
    duration: 0.6,
    delay: 0.4,
    ease: "easeOut",
  }}
  className="flex justify-center mt-6"
>
  <a
    href="https://drive.google.com/file/d/1DHj8fnld8mVtK6nYDLN_tbeW7fzVAshV/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-3 px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-gray-300 font-mono text-sm tracking-widest uppercase transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
  >
    <Newspaper size={18} className="group-hover:text-blue-400 transition-colors" />
    RESUME
  </a>
</motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}