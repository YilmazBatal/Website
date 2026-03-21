"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { LinkIcon, ArrowRight, Activity, ImageIcon } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const projectsData = {
  signature: {
    title: "Easy RPG [2026]",
    slug: "easy-rpg",
    desc: "This will be my signature project for the next few years! A sophisticated RPG system currently in active development within Unity, transitioning from core logic to a high-fidelity graphical interface. Featuring a decoupled modular system for dynamic inventory management and JSON-driven data persistence. [ Please go to details page for further information ]",
    techs: ["Unity", "C#", "SOA Architecture", "JSON Systems", "Modular Design"],
    status: "Active Development",
    imageUrl: "/Map.png" 
  },
  archive: [
    {
      title: "Cube Slasher [2024]",
      desc: "A 2D arcade mob slasher where you face new monsters as u improve. I handled all programming and art.",
      techs: ["Binary Serializer", "Scriptable Objects", "Dyanmic Generation", "Arcade RPG"],
      url: "https://ilmas.itch.io/cube-slasher",
      imageUrl: "/Games/cubeslasher.png"
    },
    {
      title: "Virtual Friend Cowie [2024]",
      desc: "Pou or Talking tom like virtual pet game. Her favorite food is actually strawberry. Programming, art, and design is done by me.",
      techs: ["Binary Serializer", "Scriptable Objects", "Virtual Pet System", "Minigames"],
      url: "https://ilmas.itch.io/cube-slasher",
      imageUrl: "/Games/cowie.png"
    },
    {
      title: "Sheero The Hero [2023]",
      desc: "Endless 2D platform game that participated in the SCOREJAM. Try to save your parents.",
      techs: ["Dynamic Platform Generation", "Leaderboard System", "Dialogue System"],
      url: "https://ilmas.itch.io/sheero-the-hero",
      imageUrl: "/Games/sheero.png"
    },
    {
      title: "Bio - Bot [2024]",
      desc: "Team project for a SPEEDRUN themed game jam. Worked with a composer and an artist.",
      techs: ["Puzzle System", "Online Ranking", "Seedrunner Integration", "Run and Gun Mechanics"],
      url: "https://ilmas.itch.io/bio-bot",
      imageUrl: "/Games/bio.png"
    },
    {
      title: "CarrotXD [2023]",
      desc: "2.5D Platform game focused on trap and level design.",
      techs: ["Scene Management", "Puzzle Design", "Traps", "Animation Management"],
      url: "https://github.com/YilmazBatal/CarrotXD",
      imageUrl: "/Games/carrot.png"
    }
  ]
};

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  // Animasyon varyantları
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
  };

  return (
    <div id="Projects" className="md:py-32 py-16 px-6 md:px-8 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6 }}
            className="text-6xl font-semibold mb-6 uppercase"
          >
            Projects
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 font-mono text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          >
            A collection of my technical works, featuring both completed game jam entries and ongoing architectural studies. I focus on building clean, modular systems, whether a project is finished or in active iteration.
          </motion.p>
        </div>

        {/* Signature Project Card */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full mb-24"
        >
          <Link href={`/projects/${projectsData.signature.slug}`} className="block">
            <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/40 backdrop-blur-md transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.2)]">
              <div className="flex flex-col lg:flex-row">
                <div className="p-8 lg:p-16 lg:w-3/5 z-10">
                  <div className="flex items-center gap-2 text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                    <Activity size={14} className="animate-pulse" /> {projectsData.signature.status}
                  </div>
                  <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8 leading-none group-hover:text-blue-400 transition-colors">
                    {projectsData.signature.title}
                  </h3>
                  <p className="text-gray-400 font-mono text-lg mb-10 leading-relaxed max-w-xl">
                    {projectsData.signature.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-10">
                    {projectsData.signature.techs.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-lg bg-blue-500/5 border border-blue-500/20 text-xs font-mono text-blue-300/60 uppercase tracking-tight">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs group-hover:text-blue-400 transition-all">
                    Exploration Mode <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
                
                {/* Resim Alanı Fix */}
                <div className="lg:w-2/5 bg-slate-800/30 min-h-[350px] relative border-l border-white/5 flex items-center justify-center p-8">
                   {projectsData.signature.imageUrl ? (
                      <div className="relative w-full h-full">
                        <Image 
                          src={projectsData.signature.imageUrl} 
                          fill 
                          className="object-contain opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" 
                          alt="signature" 
                        />
                      </div>
                   ) : (
                      <ImageIcon size={80} className="text-white/[0.03]" />
                   )}
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Carousel Section */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full relative px-4 md:px-0"
        >
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-6">
              {projectsData.archive.map((project, index) => (
                <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3">
                  <div className="h-[520px] flex flex-col bg-slate-900/40 border border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-md transition-all duration-500 hover:border-blue-500/40 group relative">
                    
                    <div className="h-48 bg-slate-800/50 relative flex items-center justify-center border-b border-white/5 overflow-hidden">
                      {project.imageUrl ? (
                        <Image 
                          src={project.imageUrl} 
                          fill 
                          className="object-cover opacity-60 group-hover:opacity-90 transition-all duration-700 group-hover:scale-110" 
                          alt={project.title} 
                        />
                      ) : (
                        <ImageIcon size={40} className="text-white/5" />
                      )}
                      
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 z-[30] p-3 rounded-xl bg-slate-950/90 text-blue-400 hover:text-white border border-white/10 hover:border-blue-500/50 hover:bg-blue-600 transition-all shadow-xl backdrop-blur-md"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <LinkIcon size={18} />
                      </a>
                    </div>

                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-mono text-gray-400 leading-relaxed mb-6 line-clamp-3">
                        {project.desc}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.techs.map((tech, i) => (
                          <span key={i} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-gray-400 group-hover:text-blue-300/70 group-hover:border-blue-500/20 transition-colors uppercase tracking-tighter">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="hidden md:block">
              <CarouselPrevious className="-left-16 border-white/10 bg-slate-900/50 hover:bg-blue-500/20 text-white transition-all" />
              <CarouselNext className="-right-16 border-white/10 bg-slate-900/50 hover:bg-blue-500/20 text-white transition-all" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </div>
  );
}