'use client'
import { Card, CardContent, CardTitle } from "../ui/card";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// TypeScript interfaces
interface Skill {
  icon: string;
  name: string;
  alt: string;
}
interface SkillCardProps {
  title: string;
  skills: Skill[];
  index: number;
  isInView: boolean;
}
interface SkillItemProps {
  skill: Skill;
  iconSize?: number;
}

// Reusable SkillItem component
const SkillItem = ({ skill, iconSize = 65 }: SkillItemProps) => (
  <div className="flex flex-col justify-center items-center">
    <div className="w-[75px] h-[75px] flex justify-center items-center">
      <Image
        className="mx-auto max-h-[75px]"
        src={skill.icon}
        width={iconSize}
        height={iconSize}
        alt={skill.alt}
      />
    </div>
    <p className="font-semibold mt-3">{skill.name}</p>
  </div>
);

// Reusable SkillCard component with animation
const SkillCard = ({ title, skills, index, isInView }: SkillCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    transition={{ 
      duration: 0.6,
      delay: 0.5 + (index * 0.15),
      ease: "easeOut"
    }}
  >
    <Card className="w-full h-full flex bg-dark border-white border-muted-foreground rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-800/10 border-2 border-blue-500/30 hover:border-blue-400/50 py-8 px-4 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group backdrop-blur-sm">
      <CardTitle className="text-2xl">{title}</CardTitle>
      <CardContent>
        <div className="grid grid-cols-3 items-center justify-center gap-5">
          {skills.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

// Main component with data separation
export function SkillSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.1,
  });

  const webDevSkills: Skill[] = [
    { icon: "/icons/html.png", name: "HTML5", alt: "HTML5" },
    { icon: "/icons/css.png", name: "CSS3", alt: "CSS3" },
    { icon: "/icons/js.png", name: "Javascript", alt: "Javascript" },
    { icon: "/icons/nodejs.png", name: "Node JS", alt: "Node JS" },
    { icon: "/icons/TW.png", name: "Tailwind", alt: "Tailwind" },
    { icon: "/icons/nextjs.png", name: "Next JS", alt: "Next.js" },
  ];

  const gameDevSkills: Skill[] = [
    { icon: "/icons/unity.png", name: "Unity", alt: "Unity Engine" },
    { icon: "/icons/cs.png", name: "C#", alt: "C Sharp" },
    { icon: "/icons/firebase.svg", name: " Firebase", alt: "Firebase" },
    { icon: "/icons/blender.png", name: " Blender", alt: "Blender" },
  ];

  const designSkills: Skill[] = [
    { icon: "/icons/ps.png", name: "Photoshop", alt: "Photoshop" },
    { icon: "/icons/ai.png", name: " Illustrator", alt: "Illustrator" },
  ];

  return (
    <div id="Skills" className="md:py-32 py-12">
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
          Skills & Tools
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ 
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut"
          }}
          className="text-xl font-semibold mb-10 mx-auto max-w-2xl font-mono"
        >
          The MOST used languages, libraries, frameworks, tools used by me.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr w-[100%]">
          <SkillCard 
            title="Web Development" 
            skills={webDevSkills} 
            index={0}
            isInView={isInView}
          />
          <SkillCard 
            title="Game Development" 
            skills={gameDevSkills} 
            index={1}
            isInView={isInView}
          />
          <SkillCard 
            title="Design Tools" 
            skills={designSkills} 
            index={2}
            isInView={isInView}
          />
        </div>
      </div>
    </div>
  );
}