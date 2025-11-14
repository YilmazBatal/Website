'use client'
import { GraduationCap, Hammer } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.1,
  });

  return (
    <div id="Experiences" className="md:pt-32 md:pb-16 py-12">
      <div className="flex flex-col-reverse flex-reverse md:flex-row items-center justify-between gap-15 lg:gap-0">
        <div ref={ref} className="flex flex-col justify-center items-center text-center mx-auto gap-4 w-full">
          {/* Texts */}
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.6,
                ease: "easeOut"
              }}
              className="text-6xl font-semibold mb-6"
            >
              Education & Experience
            </motion.h1>
            
          </div>
          <div className="flex md:flex-row flex-col md:items-start items-center justify-around mx-auto gap-8 w-full">
            {/* Education */}
            <div className="flex flex-col gap-4 md:w-[50%] w-[100%]">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.4,
                  ease: "easeOut"
                }}
                className="text-3xl flex items-center items-center mx-auto font-semibold gap-2"
              >
                Education <GraduationCap strokeWidth={2.5} size={32} />
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.5,
                  ease: "easeOut"
                }}
                className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900/20 to-purple-800/10 border-2 border-blue-500/30 hover:border-blue-400/50 rounded-2xl py-8 px-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group backdrop-blur-sm"
              >
                <h1 className="text-[1.33rem] font-semibold mb-2">
                  Istinye University (2022 - 2024)
                </h1>
                <h3 className="text-[1.2rem] font-mono font-semibold">
                  Computer Programming <br /> (Associate degree)
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.65,
                  ease: "easeOut"
                }}
                className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900/20 to-purple-800/10 border-2 border-blue-500/30 hover:border-blue-400/50 rounded-2xl py-8 px-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group backdrop-blur-sm"
              >
                <h1 className="text-[1.33rem] font-semibold mb-2">
                  Bahçeşehir University (Cyprus) (2025 - Present)
                </h1>
                <h3 className="text-[1.2rem] font-mono font-semibold">
                  Computer Engineering <br /> (Bachelor's degree)
                </h3>
              </motion.div>
            </div>
            {/* Experience */}
            <div className="flex flex-col gap-4 md:w-[50%] w-[100%]">
              <motion.h1
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.4,
                  ease: "easeOut"
                }}
                className="text-3xl flex items-center items-center mx-auto font-semibold gap-2"
              >
                Experience <Hammer strokeWidth={2.5} size={32} />
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.5,
                  ease: "easeOut"
                }}
                className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900/20 to-purple-800/10 border-2 border-blue-500/30 hover:border-blue-400/50 rounded-2xl py-8 px-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group backdrop-blur-sm"
              >
                <h1 className="text-[1.33rem] font-semibold mb-2">
                  AcerPro Bilişim Teknolojileri A.Ş.
                </h1>
                <h3 className="text-[1.2rem] font-mono font-semibold">
                  Front End Developer (Trainee)
                </h3>
                <h3 className="text-[1.2rem] font-mono font-semibold">
                  2020.09 - 2022.12 (2 years and 3 months)
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.65,
                  ease: "easeOut"
                }}
                className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900/20 to-purple-800/10 border-2 border-blue-500/30 hover:border-blue-400/50 rounded-2xl py-8 px-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group backdrop-blur-sm"
              >
                <h1 className="text-[1.33rem] font-semibold mb-2">
                  Model ERP Yazılım Çözümleri
                </h1>
                <h3 className="text-[1.2rem] font-mono font-semibold">
                  Fundementals of ERP (Trainee)
                </h3>
                <h3 className="text-[1.2rem] font-mono font-semibold">
                  2023.6 - 2023.11 (5 months)
                </h3>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}