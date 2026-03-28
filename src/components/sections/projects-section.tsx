"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { LinkIcon, ArrowRight, Activity, ImageIcon, Terminal, Cpu, Database, Layout } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const projectsData = {
  signature: {
    title: "Easy RPG [2026]",
    slug: "easy-rpg",
    desc: "This will be my signature project for the next few years. A sophisticated RPG system currently in active development within Unity, transitioning from core logic to a high-fidelity graphical interface. Featuring a decoupled modular system for dynamic inventory management and JSON-driven data persistence. [ Please go to details page for further information ]",
    status: "Active Development",
    stats: [
      { label: "Engine", value: "Unity 2022.3", icon: <Cpu size={14} /> },
      { label: "Architecture", value: "SOA / SOLID", icon: <Layout size={14} /> },
      { label: "Persistence", value: "JSON / SO", icon: <Database size={14} /> },
      { label: "Pattern", value: "Service Locator", icon: <Terminal size={14} /> },
    ]
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
      desc: "Pou like virtual pet game. Programming, art, and design is done by me.",
      techs: ["Binary Serializer", "Virtual Pet System", "Minigames"],
      url: "https://ilmas.itch.io/cube-slasher",
      imageUrl: "/Games/cowie.png"
    },
    {
      title: "Sheero The Hero [2023]",
      desc: "Endless 2D platform game. Built for SCOREJAM.",
      techs: ["Dynamic Platform", "Leaderboard", "Dialogue System"],
      url: "https://ilmas.itch.io/sheero-the-hero",
      imageUrl: "/Games/sheero.png"
    },
  ]
};

// Yardımcı Bileşen: Teknik Veri Satırı
const StatItem = ({ label, value, icon }: { label: string, value: string, icon: React.ReactNode }) => (
  <div className="flex flex-col gap-1">
    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-1">
      {icon} {label}
    </span>
    <span className="text-sm font-mono text-blue-400 font-bold tracking-tight">{value}</span>
  </div>
);

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
  };

  return (
    <div id="Projects" className="md:py-32 py-16 px-6 md:px-8">
      <div ref={ref} className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h1 
            variants={fadeInUp} initial="initial" animate="animate"
            className="text-6xl font-semibold mb-6"
          >
            Projects
          </motion.h1>
          <motion.p 
            variants={fadeInUp} initial="initial" animate="animate" transition={{ delay: 0.2 }}
            className="text-[1.33rem] font-mono mb-2 max-w-2xl text-gray-400"
          >
            Technical works featuring game jam entries and ongoing architectural studies.
          </motion.p>
        </div>

        {/* Signature Card (3. Opsiyon Tasarımı) */}
        <motion.div 
          variants={fadeInUp} initial="initial" animate="animate" transition={{ delay: 0.3 }}
          className="w-full mb-24"
        >
          <Link href={`/projects/${projectsData.signature.slug}`} className="block group">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/40 backdrop-blur-md transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.15)]">
              <div className="flex flex-col lg:flex-row min-h-[450px]">
                
                {/* Sol Taraf: İçerik */}
                <div className="p-8 lg:p-16 lg:w-3/5 z-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                    <Activity size={14} className="animate-pulse" /> {projectsData.signature.status}
                  </div>
                  <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6 leading-none group-hover:text-blue-400 transition-colors">
                    {projectsData.signature.title}
                  </h3>
                  <p className="text-gray-400 font-mono text-lg mb-10 leading-relaxed max-w-xl">
                    {projectsData.signature.desc}
                  </p>
                  <div className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs group-hover:text-blue-400 transition-all">
                    View Technical Breakdown <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
                
                {/* Sağ Taraf: Technical Overview Panel (Görsel yerine Veri) */}
                <div className="lg:w-2/5 bg-slate-950/50 border-l border-white/5 p-8 lg:p-12 flex flex-col justify-center gap-8 relative overflow-hidden">
                   {/* Background Decoration */}
                   <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full"></div>
                   
                   <h4 className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.4em] flex items-center gap-2 border-b border-white/5 pb-4">
                      <Terminal size={14} className="text-blue-500" /> System_Logs
                   </h4>
                   
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 relative z-10">
                      {projectsData.signature.stats.map((stat, i) => (
                        <StatItem key={i} label={stat.label} value={stat.value} icon={stat.icon} />
                      ))}
                   </div>

                   <div className="mt-4 pt-4 border-t border-white/5">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Compiler: Success</span>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Carousel */}
        <motion.div 
          variants={fadeInUp} initial="initial" animate="animate" transition={{ delay: 0.4 }}
          className="w-full relative px-0 md:px-12"
        >
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-6">
              {projectsData.archive.map((project, index) => (
                <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3">
                  <div className="h-[520px] flex flex-col bg-slate-900/40 border border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-md transition-all duration-500 hover:border-blue-500/40 group relative">
                    <div className="h-48 bg-slate-800/50 relative flex items-center justify-center border-b border-white/5 overflow-hidden">
                      {project.imageUrl ? (
                        <Image src={project.imageUrl} fill className="object-cover opacity-60 group-hover:opacity-90 transition-all duration-700 group-hover:scale-110" alt={project.title} />
                      ) : (
                        <ImageIcon size={40} className="text-white/5" />
                      )}
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 z-[30] p-3 rounded-xl bg-slate-950/90 text-blue-400 hover:text-white border border-white/10 hover:border-blue-500/50 transition-all" onClick={(e) => e.stopPropagation()}>
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
                          <span key={i} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-gray-400 group-hover:text-blue-300/70 transition-colors uppercase tracking-tighter">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex items-center justify-center gap-4 mt-8 md:mt-0">
               <CarouselPrevious className="static md:absolute md:-left-12 translate-y-0 border-white/10 bg-slate-900/50 hover:bg-blue-600 text-white transition-all" />
               <CarouselNext className="static md:absolute md:-right-12 translate-y-0 border-white/10 bg-slate-900/50 hover:bg-blue-600 text-white transition-all" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </div>
  );
}