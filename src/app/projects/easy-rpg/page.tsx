"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  ArrowLeft, Cpu, Database, Layout, ChevronDown, 
  Terminal, Code2, Zap, Milestone, Layers, Maximize2, X
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function EasyRPGPage() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  // Close modal with Esc key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImg(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const showcaseImages = [
    {
      title: "Map & Navigation UI",
      tag: "Interface Design",
      desc: "Custom minimap logic with dynamic quest markers and coordinate tracking.",
      src: "/Signature/testgif.gif",
    },
    {
      title: "Inventory & Persistence",
      tag: "Data Management",
      desc: "Grid-based inventory system synced with custom JSON serialization.",
      src: "/Backpack.png",
    },
  ];

  const technicalStats = [
    { label: "Architecture", value: "Service-Oriented (SOA)", icon: <Cpu size={16} /> },
    { label: "Data Format", value: "JSON / ScriptableObjects", icon: <Database size={16} /> },
    { label: "UI Framework", value: "LeanTween / Event-Based", icon: <Zap size={16} /> },
    { label: "Scripting", value: "C# / Unity LTS", icon: <Terminal size={16} /> },
  ];

  return (
    <main className="top-0 min-h-screen text-white relative overflow-hidden selection:bg-purple-500/30 ">
      
      {/* --- LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-7xl aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.2)] border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={selectedImg} alt="Preview" fill className="object-contain" priority />
              <button onClick={() => setSelectedImg(null)} className="absolute top-6 right-6 p-3 rounded-full bg-slate-900/80 hover:bg-red-500 transition-colors border border-white/10 text-white">
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-[2048px] bg-gradient-to-b from-blue-900/40 via-purple-900/25 to-transparent -z-20 pointer-events-none" />
      <div className="absolute  top-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto py-24 px-6 md:px-8 relative z-10">
            <h1 className="text-1xl font-semibold mb-6 italic uppercase tracking-tighter leading-none text-yellow-500/50 text-center">This page is under construction!</h1>
        
        {/* Navigation */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link href="/#Projects" className="inline-flex items-center gap-2 text-blue-400/80 mb-12 hover:text-blue-300 hover:gap-4 transition-all font-mono text-xs tracking-widest uppercase">
            <ArrowLeft size={16} /> Return_to_Home
          </Link>
        </motion.div>

        {/* Header */}
        <header className="mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >

            <h1 className="text-7xl font-semibold mb-6 italic uppercase tracking-tighter leading-none">Easy RPG</h1>
            <h2 className="text-[1.33rem] font-mono mb-2 max-w-5xl text-gray-400 leading-relaxed">
  A modular, extensible RPG framework built with Unity. Focused on 
  <span className="text-blue-400"> Decoupled Architecture</span> and 
  <span className="text-blue-400"> Performance-Driven UI</span>. 
  Moving beyond hardcoded logic into a data-driven ecosystem.
</h2>
          </motion.div>
        </header>

        {/* Technical Stats Panel */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {technicalStats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md">
              <div className="text-blue-500 mb-3">{stat.icon}</div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 font-mono">{stat.label}</p>
              <p className="text-sm font-bold font-mono tracking-tight">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* --- CARD-BASED CAROUSEL --- */}
        <section className="mb-32">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-6">
              {showcaseImages.map((item, index) => (
                <CarouselItem key={index} className="pl-6 lg:basis-1/1">
                  <div className="group flex flex-col bg-slate-900/20 border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-blue-500/30 hover:bg-slate-900/40 shadow-2xl">
                    <div className="relative w-full aspect-video md:h-[500px] overflow-hidden border-b border-white/5 cursor-zoom-in" onClick={() => setSelectedImg(item.src)}>
                      <Image src={item.src} alt={item.title} fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                      <div className="absolute top-6 left-6 z-20">
                        <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-blue-400 uppercase tracking-widest">System_Preview</span>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 pointer-events-none">
                         <div className="p-4 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-500/50"><Maximize2 size={32} className="text-blue-400" /></div>
                      </div>
                    </div>
                    <div className="p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 bg-gradient-to-br from-transparent to-blue-500/[0.02]">
                      <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="h-[1px] w-6 bg-blue-500/50"></span>
                          <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase">{item.tag}</span>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-black italic uppercase mb-4 tracking-tighter group-hover:text-blue-400 transition-colors">{item.title}</h3>
                        <p className="text-gray-400 font-mono text-sm md:text-base leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="hidden md:flex flex-col items-end gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => setSelectedImg(item.src)} className="p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-blue-600 transition-all"><Maximize2 size={24} /></button>
                        <span className="text-[9px] font-mono text-gray-500 uppercase tracking-tighter">Ref_ID: {index + 1}04-X</span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-4 mt-10">
              <CarouselPrevious className="static translate-y-0 h-14 w-14 bg-slate-900 border-white/10 hover:bg-blue-600 text-white shadow-xl" />
              <CarouselNext className="static translate-y-0 h-14 w-14 bg-slate-900 border-white/10 hover:bg-blue-600 text-white shadow-xl" />
            </div>
          </Carousel>
        </section>

        {/* --- ARCHITECTURE DEEP-DIVE (DROPDOWN CARDS) --- */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-32">
          <div className="lg:col-span-4 sticky top-24">
            <h2 className="text-3xl font-bold italic uppercase tracking-tighter mb-6 flex items-center gap-3 leading-tight"><Code2 className="text-blue-500" /> System<br />Architecture</h2>
            <p className="text-gray-400 font-mono text-sm leading-relaxed">Moving away from rigid monolithic structures. Implementing systems that favor expansion over modification.</p>
          </div>
          <div className="lg:col-span-8 space-y-6">
            <DropdownCard 
      icon={<Layers size={20} />} 
      title="Service-Oriented Architecture (SOA)" 
      desc="Centralized system access via Service Locator pattern to eliminate hard dependencies." 
      details="UI, Combat, and Data Managers operate as isolated services. This decoupling ensures that a change in the Inventory logic never breaks the Combat engine, making the codebase modular and unit-test ready." 
    />

    {/* 2. Hybrid Data Kartı (Mevcut) */}
    <DropdownCard 
      icon={<Database size={20} />} 
      title="Hybrid Data Persistence" 
      desc="Strategic mix of ScriptableObjects for static templates and JSON for dynamic player state." 
      details="Utilized custom JSON serialization for persistent data like inventory indices and player stats. This approach allows for 'Hot Reloading' during development and optimizes save-file overhead by avoiding redundant metadata." 
    />

    {/* 3. YENİ: UI Framework (LeanTween / Event-Based) */}
    <DropdownCard 
      icon={<Zap size={20} />} 
      title="Asynchronous UI Framework" 
      desc="Tween-based feedback loops driven by a C# Event Bus for high-performance interactions." 
      details="Replaced expensive Update() polling with an Observer pattern. Using LeanTween for procedural animations, UI elements like health bars and notifications react only when specific data-change events fire, reducing CPU overhead in complex combat scenes." 
    />

    {/* 4. YENİ: Scripting (C# / Unity LTS) */}
    <DropdownCard 
      icon={<Terminal size={20} />} 
      title="Production-Grade Scripting" 
      desc="Strongly typed C# architecture leveraging modern OOP principles within Unity 2022.3 LTS." 
      details="Implemented advanced C# features including Generics for Manager templates, Coroutines for non-blocking combat sequences, and Deep-Copy constructors for entity instantiation. Adhering to SOLID principles to ensure the framework remains scalable for multi-year development." 
    />
          </div>
        </section>

        {/* --- ROADMAP SECTION --- */}
        <section className="p-8 md:p-12 rounded-[2.5rem] border border-blue-500/20 bg-blue-500/5 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5"><Milestone size={180} /></div>
          <h2 className="text-2xl font-bold uppercase tracking-widest mb-12 flex items-center gap-3 italic"><Milestone className="text-blue-500" /> Development Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <RoadmapItem step="01" status="Completed" title="Core Systems" desc="Architecture for SOA, Event Bus, and core data management systems has been implemented." />
            <RoadmapItem step="02" status="In Progress" title="Combat & AI" desc="FSM-based enemy AI and probability-based combat engine development." />
            <RoadmapItem step="03" status="Planned" title="Polish & UI" desc="Shader-graph integration and a comprehensive visual overhaul of the UGUI." />
          </div>
        </section>
      </div>
    </main>
  );
}

// --- SUB-COMPONENTS ---

function DropdownCard({ icon, title, desc, details }: { icon: React.ReactNode, title: string, desc: string, details: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`rounded-3xl border transition-all duration-500 ${isOpen ? 'border-blue-500/50 bg-blue-500/10' : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.04]'}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="w-full p-8 flex items-center justify-between group">
        <div className="flex items-center gap-5">
          <div className={`p-3 rounded-2xl transition-all duration-500 ${isOpen ? 'bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]' : 'bg-white/5 text-blue-400'}`}>{icon}</div>
          <div className="text-left">
            <h3 className="text-lg font-bold uppercase tracking-tight mb-1">{title}</h3>
            <p className="text-xs font-mono text-gray-400 ">{desc}</p>
          </div>
        </div>
        <ChevronDown className={`transition-transform duration-500 ${isOpen ? 'rotate-180 text-blue-500' : 'text-gray-600'}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4 }}>
            <div className="px-8 pb-8 pt-2"><div className="p-6 rounded-2xl bg-black/40 border border-white/5 text-sm font-mono text-gray-400 italic leading-relaxed">{details}</div></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function RoadmapItem({ step, status, title, desc }: { step: string, status: string, title: string, desc: string }) {
  return (
    <div className="space-y-4 relative">
      <div className="text-5xl font-black text-white/5 absolute -top-6 -left-2 select-none">{step}</div>
      <div className="relative">
        <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded border mb-4 inline-block ${status === 'In Progress' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30 animate-pulse' : status === 'Completed' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-white/5 text-gray-500 border-white/10'}`}>{status}</span>
        <h4 className="text-lg font-bold uppercase tracking-tight mb-2">{title}</h4>
        <p className="text-xs font-mono text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}