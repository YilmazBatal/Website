"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Cpu, Database, Layout, ChevronDown, ImageIcon, Maximize2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function EasyRPGPage() {
  const showcaseImages = [
    {
      title: "Map UI",
      tag: "Interface Design",
      desc: "Minimap, dynamic stat bars, and immersive quest tracking.",
      src: "/Map.png",
    },
    {
      title: "Inventory System",
      tag: "Data Management",
      desc: "Grid-based inventory with pagination.",
      src: "/Backpack.png",
    },
    // {
    //   title: "Skill Tree",
    //   tag: "Progression",
    //   desc: "Node-based skill system linked to Scriptable Objects.",
    //   src: "/ui-skills.jpg",
    // },
  ];

  return (
    <main className="min-h-screen text-white relative overflow-hidden selection:bg-blue-500/30">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-[512px] bg-gradient-to-b from-blue-900/50 via-purple-800/15 to-transparent -z-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto py-24 px-6 md:px-8 relative z-10">
        <Link href="/#Projects" className="inline-flex items-center gap-2 text-blue-400 mb-12 hover:gap-4 transition-all font-mono text-sm">
          <ArrowLeft size={18} /> BACK_TO_LAB
        </Link>

        <header className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 italic uppercase tracking-tighter"
          >
            Easy RPG <span className="text-blue-500 not-italic">[2026]</span>
          </motion.h1>
          <p className="text-xl text-gray-400 font-mono leading-relaxed max-w-2xl">
            Modular architecture study. Visualizing complex systems through clean interface design.
          </p>
        </header>

        {/* Big Showcase Carousel */}
        <section className="mb-32">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
              {showcaseImages.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="group relative w-full aspect-video md:h-[600px] rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur-sm">
                    {/* Image Placeholder/Image */}
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
                      <Image 
                        src={item.src} 
                        alt={item.title} 
                        fill
                        className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" 
                      />
                      {/* <ImageIcon size={64} className="text-white/5" /> */}
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 flex flex-col md:flex-row justify-between items-end gap-6">
                      <div className="max-w-xl">
                        <span className="text-blue-500 font-mono text-sm tracking-[0.2em] uppercase mb-2 block">
                          {item.tag}
                        </span>
                        <h3 className="text-4xl md:text-5xl font-bold italic uppercase mb-4 tracking-tighter">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 font-mono text-sm md:text-base">
                          {item.desc}
                        </p>
                      </div>
                      <div className="hidden md:flex items-center gap-2 text-white/20 font-mono text-xs uppercase tracking-widest group-hover:text-blue-400 transition-colors">
                        {/* <Maximize2 size={16} /> View Full Detail */}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-slate-900 border-white/10 hover:bg-blue-600 transition-colors" />
              <CarouselNext className="static translate-y-0 bg-slate-900 border-white/10 hover:bg-blue-600 transition-colors" />
            </div>
          </Carousel>
        </section>

        {/* Dropdown System Details */}
        <section className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-blue-500">Architecture Deep-Dive</h2>
            <div className="h-[1px] flex-1 bg-blue-500/20"></div>
          </div>

          <DropdownCard 
            icon={<Cpu size={20} />}
            title="Service-Oriented Architecture"
            desc="Every major system (Combat, UI, Data) is a separate service registered to a central hub."
            details="This prevents 'Spaghetti Code'. If I want to replace the inventory system, I only change one file without touching the rest of the game."
          />
          <DropdownCard 
            icon={<Database size={20} />}
            title="Hybrid Save System"
            desc="Combines ScriptableObjects for static data and JSON for dynamic player states."
            details="The game can handle 10,000+ items without a performance hit because only the necessary IDs are serialized."
          />
        </section>
      </div>
    </main>
  );
}

// --- Bileşenler ---

function DropdownCard({ icon, title, desc, details }: { icon: React.ReactNode, title: string, desc: string, details: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`rounded-2xl border transition-all duration-300 ${isOpen ? 'border-blue-500/50 bg-blue-500/5' : 'border-white/5 bg-slate-900/30'}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="w-full p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`p-2 rounded-lg ${isOpen ? 'bg-blue-500' : 'bg-white/5 text-blue-400'}`}>{icon}</div>
          <h3 className="text-lg font-bold uppercase tracking-tight">{title}</h3>
        </div>
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
            <div className="px-6 pb-6 space-y-3">
              <p className="text-gray-300 font-mono text-sm border-l-2 border-blue-500/30 pl-4">{desc}</p>
              <p className="text-gray-500 text-xs italic">{details}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}