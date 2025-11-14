'use client'
import React, { useRef } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.1,
  });

  return (
    <div id="Contact" className="md:py-32 py-12">
      <div ref={ref} className="flex flex-col items-center justify-between text-center gap-5 lg:gap-0">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ 
            duration: 0.6,
            ease: "easeOut"
          }}
          className="text-6xl font-semibold mb-3 mx-auto"
        >
          Contact
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr w-[100%]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ 
              duration: 0.6,
              delay: 0.4,
              ease: "easeOut"
            }}
            className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900/20 to-purple-800/10 border-2 border-blue-500/30 hover:border-blue-400/50 rounded-2xl py-12 px-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group backdrop-blur-sm"
          >
            <div className="mb-6 p-4 rounded-full bg-blue-900/30 border border-blue-500/40 group-hover:bg-blue-800/40 transition-colors">
              <Phone size={40} className="text-blue-300" />
            </div>
            <h3 className="text-[1.33rem] font-semibold">
              +90 (533) 823 80 82
            </h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ 
              duration: 0.6,
              delay: 0.55,
              ease: "easeOut"
            }}
            className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900/20 to-purple-800/10 border-2 border-blue-500/30 hover:border-blue-400/50 rounded-2xl py-12 px-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group backdrop-blur-sm"
          >
            <div className="mb-6 p-4 rounded-full bg-blue-900/30 border border-blue-500/40 group-hover:bg-blue-800/40 transition-colors">
              <Mail size={40} className="text-blue-300" />
            </div>
            <h3 className="text-[1.33rem] font-semibold">
              b.ogulbey@gmail.com
            </h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ 
              duration: 0.6,
              delay: 0.7,
              ease: "easeOut"
            }}
            className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900/20 to-purple-800/10 border-2 border-blue-500/30 hover:border-blue-400/50 rounded-2xl py-12 px-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group backdrop-blur-sm"
          >
            <div className="mb-6 p-4 rounded-full bg-blue-900/30 border border-blue-500/40 group-hover:bg-blue-800/40 transition-colors">
              <MapPin size={40} className="text-blue-300" />
            </div>
            <h3 className="text-[1.33rem] font-semibold">
              Turkiye, Istanbul Eu.
            </h3>
          </motion.div>
        </div>
      </div>
    </div>
  );
}