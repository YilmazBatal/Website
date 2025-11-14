"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Github, LinkIcon } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { FaBridge } from "react-icons/fa6";
import { desc } from "motion/react-client";

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.1,
  });

  const projects = [
    {
      title: "Sheero The Hero [2023]",
      desc: "Endless 2D platform game that participated in the SCOREJAM. Try to save your parents.",
      tech1: "- Dynamic Platform Generation",
      tech2: "- Online Leaderboard System",
      tech3: "- Dialogue System",
      github_url: "https://ilmas.itch.io/sheero-the-hero",
    },
    {
      title: "Cube Slasher [2023]",
      desc: "A 2D arcade mob slasher where you face new monsters as u improve. I handled all programming and art for this project.",
      tech1: "- Data Management using Binary Serializer",
      tech2: "- Scriptable Object architecture for item/enemy data",
      tech3: "- Multiplayer Co-op Mode",
      tech4: "- Firebase Integration",
      github_url: "https://ilmas.itch.io/cube-slasher",
    },
    {
      title: "Bio - Bot [2024]",
      desc: "This one is a 'Team Work' project where i worked with a composer and an artist. This game has participated in a 'SPEEDRUN' themed game jam.",
      tech1: "- Online Leaderboard System",
      tech2: "- Puzzle System",
      github_url: "https://ilmas.itch.io/bio-bot",
    },
    {
      title: "CarrotXD [2023]",
      desc: "2.5D Puzzle / Traps based Platformer",
      tech1: "- Scene Management",
      tech2: "- Puzzle System",
      github_url: "https://github.com/YilmazBatal/CarrotXD",
    },
  ];

  return (
    <div id="Projects" className="md:pt-32 md:pb-16 py-12">
      <div
        ref={ref}
        className="flex flex-col items-center justify-center gap-8"
      >
        {/* Header */}
        <div className="text-center max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="text-6xl font-semibold mb-6"
          >
            Projects
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="text-[1.33rem] mb-1 font-mono"
          >
            These are the selections from some of my projects.
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="text-[1rem] -mb-5 font-mono"
          >
            URL Icon will direct to the platform where a person can test/use the
            project.
          </motion.h3>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="w-full max-w-7xl px-4"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-[500px] my-10 flex flex-col items-center justify-start bg-gradient-to-br from-blue-900/20 to-purple-800/10 border-2 border-blue-500/30 hover:border-blue-400/50 rounded-2xl py-8 px-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group backdrop-blur-sm hover:scale-[1.02]">
                    <h3 className="text-[1.33rem] font-semibold mb-4 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                      {project.github_url && (
                        <Link target="_blank" href={project.github_url}>
                          <LinkIcon />
                        </Link>
                      )}
                      {project.title}
                    </h3>
                    <div className="space-y-2">
                      <p className="text-[1.1rem] font-mono mb-5 font-semibold text-gray-300">
                        {project.desc}
                      </p>
                      <p className="text-[1.1rem] font-mono font-semibold text-gray-300">
                        {project.tech1}
                      </p>
                      <p className="text-[1.1rem] font-mono font-semibold text-gray-300">
                        {project.tech2}
                      </p>
                      <p className="text-[1.1rem] font-mono font-semibold text-gray-300">
                        {project.tech3}
                      </p>
                      <p className="text-[1.1rem] font-mono font-semibold text-gray-300">
                        {project.tech4}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>
      </div>
    </div>
  );
}
