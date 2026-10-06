"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, AnimatePresence, useInView, useScroll } from "framer-motion";
import {
  ArrowLeft,
  Cpu,
  Database,
  ChevronDown,
  Terminal,
  Code2,
  Zap,
  Milestone,
  Layers,
  Maximize2,
  X,
  User,
  Music,
  Layout,
  Gamepad2,
  SearchCheck,
  Sparkles,
  DownloadCloud,
  Hexagon,
  GitBranch,
  Gauge,
  Shield,
  Lightbulb,
  TrendingUp,
  Sword,
  Backpack,
  MapPin,
  Coins,
  Wrench,
  BookOpen,
  Github,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function EasyRPGPortfolio() {
  const [selectedMedia, setSelectedMedia] = useState<{ src: string; isVideo: boolean } | null>(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: false, amount: 0.3 });
  const { scrollY } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      const maxScroll = 3000;
      setScrollProgress(Math.min(latest / maxScroll, 1));
    });
    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedMedia(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // ============ ARCHITECTURAL PILLARS ============
  const architecturePillars = [
    {
      icon: <Layers size={24} />,
      title: "Service-Oriented",
      subtitle: "Decoupled Managers",
      desc: "Combat, Inventory, and Data systems operate as isolated services. Zero hard dependencies.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Zap size={24} />,
      title: "Event-Driven",
      subtitle: "Observer Pattern",
      desc: "UI reacts only when events fire. No expensive Update() polling. GC-optimized.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Database size={24} />,
      title: "Data-Driven",
      subtitle: "Config Layer",
      desc: "Game behavior lives in JSON/ScriptableObjects, not code. Hot-reload ready.",
      color: "from-emerald-500 to-teal-500", 
    },
    {
      icon: <Shield size={24} />,
      title: "SOLID Ready",
      subtitle: "Production Grade",
      desc: "Extensible without modification. Interface-based contracts. Unit-test friendly.",
      color: "from-orange-500 to-red-500",
    },
  ];

  // ============ GAMEPLAY SYSTEMS ============
  const gameplaySystems = [
    {
      icon: <Sword size={20} />,
      title: "Turn-Based Combat",
      desc: "Strategic damage calculations with critical hit mechanics and probability-based outcomes.",
      metrics: { label: "Combat Turns", value: "Optimized" },
    },
    {
      icon: <Backpack size={20} />,
      title: "Dynamic Inventory",
      desc: "Real-time item management with equipment swapping and loot generation.",
      metrics: { label: "Inventory Slots", value: "Unlimited" },
    },
    {
      icon: <Wrench size={20} />,
      title: "Upgrade System",
      desc: "Blacksmith integration with procedural gear upgrades and stat progression.",
      metrics: { label: "Upgrade", value: "Instant" },
    },
    {
      icon: <MapPin size={20} />,
      title: "World Exploration",
      desc: "Hub-based progression with unlockable and dynamic region scaling.",
      metrics: { label: "Regions", value: "Expanding" },
    },
    {
      icon: <Coins size={20} />,
      title: "Economic System",
      desc: "Dynamic shops depending on the region with Buy/sell mechanics.",
      metrics: { label: "NPCs", value: "Interactive" },
    },
    {
      icon: <TrendingUp size={20} />,
      title: "Progression Tracking",
      desc: "Comprehensive analytics dashboard with character stats and combat insights.",
      metrics: { label: "Stats Tracked", value: "20+" },
    },
  ];

  // ============ TECHNICAL STACK ============
  const techStack = [
    { label: "Engine", value: "Unity 2022.3 LTS", icon: <Cpu size={16} /> },
    { label: "Language", value: "C# 11 (Modern)", icon: <Code2 size={16} /> },
    { label: "Architecture", value: "Service-Oriented", icon: <Layers size={16} /> },
    { label: "Events", value: "Observer Pattern", icon: <Zap size={16} /> },
    { label: "Data Format", value: "JSON + ScriptableObjects", icon: <Database size={16} /> },
    { label: "UI Framework", value: "LeanTween + Event Bus", icon: <Layout size={16} /> },
  ];

  // ============ DEVELOPMENT PHASES ============
  const roadmapPhases = [
    {
      phase: "Phase 1",
      title: "Architecture Foundation",
      status: "✅ Completed",
      items: ["Event Bus System", "Service Locator", "State Pattern UI", "Data Persistence"],
      color: "emerald",
    },
    {
      phase: "Phase 2",
      title: "Core Gameplay Loop",
      status: "✅ Completed",
      items: ["Combat Engine", "Inventory Management", "Loot Generation", "Progression System"],
      color: "blue",
    },
    {
      phase: "Phase 3",
      title: "Advanced Features",
      status: "🛑 Stopped",
      items: ["Procedural Dungeons", "Boss Encounters with minigames", "Visual Polish"],
      color: "amber",
    },
  ];

  // ============ CREDITS ============
  const credits = [
    { label: "Lead Architect", value: "Yilmaz Batal", icon: <Code2 size={16} /> },
    { label: "UI/Systems Design", value: "Yilmaz Batal", icon: <Layout size={16} /> },
    { label: "Game Design", value: "Yilmaz Batal", icon: <Gamepad2 size={16} /> },
    { label: "Audio Direction", value: "Brandon Davis", url: "https://brandonmicdavis.com/", icon: <Music size={16} /> },
    { label: "Character Art", value: "AI-Generated Assets", icon: <Sparkles size={16} /> },
  ];

  const showcaseItems = [
    {
      title: "Gameplay Demo",
      tag: "Full System",
      desc: "Complete turn-based combat with event-driven UI, inventory management, and progression tracking.",
      src: "/Signature/Easyrpg Trailer.mp4",
      isVideo: true,
      year: "2025",
    },
  ];

  return (
    <main className="relative min-h-screen text-white overflow-hidden bg-slate-950 selection:bg-blue-500/30">
      {/* ============ ANIMATED GRADIENT BACKGROUND ============ */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-[2048px] bg-gradient-to-b from-blue-950/40 via-purple-950/20 to-transparent pointer-events-none" />
        <div className="absolute top-[10%] right-[-15%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      </div>

      {/* ============ SCROLL PROGRESS BAR ============ */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50"
        style={{ scaleX: scrollProgress, originX: 0 }}
      />

      {/* ============ MEDIA LIGHTBOX ============ */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 30 }}
              className="relative w-full max-w-7xl aspect-video rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(59,130,246,0.3)] border border-white/10 bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.isVideo ? (
                <video
                  src={selectedMedia.src}
                  suppressHydrationWarning={true}
                  controls
                  autoPlay
                  loop
                  className="w-full h-full object-contain"
                />
              ) : (
                <Image src={selectedMedia.src} alt="Preview" fill className="object-contain" priority />
              )}
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-slate-900/80 hover:bg-red-500 transition-colors border border-white/10 text-white z-50"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============ MAIN CONTENT ============ */}
      <div className="relative z-10 max-w-7xl mx-auto py-20 px-6 md:px-8">
        {/* NAVIGATION */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-20">
          <Link
            href="/#Projects"
            className="inline-flex items-center gap-2 text-blue-400/70 hover:text-blue-300 transition-all font-mono text-xs tracking-widest uppercase group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* ============ HERO SECTION ============ */}
        <motion.header
          ref={headerRef}
          initial={{ opacity: 0, y: 60 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-32 pt-12"
        >
          <div className="flex items-start justify-between gap-8 mb-8">
            <div>
              <h1 className="text-7xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-6 text-blue-400">
                Easy RPG
              </h1>
              <div className="h-1 w-32 bg-blue-500 mb-8" />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="hidden lg:block text-6xl"
            >
              ⚔️
            </motion.div>
          </div>

          <div className="space-y-6 max-w-4xl">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              A <span className="text-blue-400 font-semibold">production-grade RPG framework</span> built on{" "}
              <span className="text-blue-300 font-semibold">Event-Driven Architecture</span> and{" "}
              <span className="text-blue-300 font-semibold">SOLID principles</span>.
            </p>
            <p className="text-lg text-gray-400 font-mono">
              Where strategic game design meets professional software engineering.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-10">
            <motion.a
              href="https://drive.google.com/drive/folders/1zN78K6mbtYIUMgJV7N0UGI5R91pUlJWf?usp=sharing"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-wider text-sm shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              <DownloadCloud size={18} />
              Download Build 0.1.3
            </motion.a>
            <motion.a
              href="https://github.com/YilmazBatal/EasyRPG"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-blue-500/50 bg-blue-500/10 hover:bg-blue-500/15 text-blue-300 font-bold uppercase tracking-wider text-sm transition-all"
            >
              <Github size={18} />
              View Source Code
            </motion.a>
          </div>
        </motion.header>

        {/* ============ TECHNICAL STATS GRID ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-32"
        >
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-4 md:p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="text-blue-400 mb-2">{tech.icon}</div>
              <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-1 font-mono">{tech.label}</p>
              <p className="text-xs font-bold font-mono tracking-tight text-white">
                {tech.value}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ============ GAMEPLAY VIDEO SHOWCASE ============ */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-40"
        >
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-4">
              Experience the Game
            </h2>
            <div className="h-1 w-20 bg-blue-500" />
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
              {showcaseItems.map((item, index) => (
                <CarouselItem key={index} className="pl-0">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="group flex flex-col bg-slate-900/30 border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 shadow-2xl cursor-zoom-in"
                    onClick={() => setSelectedMedia({ src: item.src, isVideo: item.isVideo })}
                  >
                    <div className="relative w-full aspect-video overflow-hidden border-b border-white/5 bg-black">
                      {item.isVideo ? (
                        <video
                          src={item.src}
                          muted
                          autoPlay
                          loop
                          playsInline
                          suppressHydrationWarning={true}
                          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700"
                        />
                      ) : (
                        <Image src={item.src} alt={item.title} fill className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-2 rounded-full bg-slate-950/80 backdrop-blur-md border border-blue-500/30 text-[11px] font-mono text-blue-300 uppercase tracking-widest">
                          {item.tag}
                        </span>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="p-4 rounded-full bg-blue-500/15 backdrop-blur-md border border-blue-500/30 shadow-lg shadow-blue-500/20"
                        >
                          <Maximize2 size={40} className="text-blue-400" />
                        </motion.div>
                      </div>
                    </div>

                    <div className="p-8 md:p-10 flex flex-col justify-between h-full bg-gradient-to-br from-transparent via-transparent to-transparent">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <p className="text-blue-400 font-mono text-xs tracking-[0.3em] uppercase mb-2">
                              ▶ {item.year}
                            </p>
                            <h3 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed mt-4">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.section>

        {/* ============ ARCHITECTURE PILLARS ============ */}
        <motion.section className="mb-40" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-4 flex items-center gap-3">
              <Layers className="text-blue-400" size={40} />
              Architectural Excellence
            </h2>
            <p className="text-gray-400 font-mono text-sm">
              Engineering principles that scale from indie to commercial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {architecturePillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-500"
              >
                <div className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${pillar.color} text-white mb-6`}>
                  {pillar.icon}
                </div>

                <h3 className="text-2xl font-bold uppercase tracking-tight mb-1">{pillar.title}</h3>
                <p className="text-blue-300 text-sm font-mono tracking-wider uppercase mb-4">{pillar.subtitle}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ============ GAMEPLAY SYSTEMS GRID ============ */}
        <motion.section className="mb-40" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-4 flex items-center gap-3">
              <Gamepad2 className="text-blue-400" size={40} />
              Gameplay Systems
            </h2>
            <div className="h-1 w-20 bg-blue-500" />
            <p className="text-gray-400 font-mono text-sm">6 interconnected systems powering the experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameplaySystems.map((system, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -8 }}
                className="p-7 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-xl transition-all duration-500 hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/5"
              >
                <div className="inline-block p-3 rounded-xl bg-blue-500/10 text-blue-400 mb-4 group-hover:bg-blue-500/15 transition-colors">
                  {system.icon}
                </div>

                <h4 className="text-lg font-bold uppercase tracking-tight mb-2">{system.title}</h4>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">{system.desc}</p>

                <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">{system.metrics.label}</span>
                  <span className="text-sm font-bold text-blue-400">{system.metrics.value}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ============ DEVELOPMENT ROADMAP ============ */}
        <motion.section className="mb-40">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-4 flex items-center gap-3">
              <Milestone className="text-blue-400" size={40} />
              Development Timeline
            </h2>
            <div className="h-1 w-20 bg-blue-500" />
            <p className="text-gray-400 font-mono text-sm">From foundation to production-ready</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roadmapPhases.map((phase, idx) => {
              const colorMap = {
                emerald: "from-blue-500/20 to-blue-600/10 border-blue-500/20 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5",
                blue: "from-blue-500/20 to-blue-600/10 border-blue-500/20 hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/5",
                amber: "from-blue-500/10 to-blue-600/5 border-blue-500/10 animate-pulse hover:shadow-lg hover:shadow-blue-500/10",
              };
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className={`p-8 rounded-3xl border bg-gradient-to-br ${colorMap[phase.color as keyof typeof colorMap]} backdrop-blur-xl transition-all duration-500`}
                >
                  <div className="text-5xl font-black text-white/10 mb-4">{phase.phase}</div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-3">{phase.title}</h3>
                  <p className="text-sm font-mono text-gray-400 mb-6">{phase.status}</p>

                  <ul className="space-y-3">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ============ CREDITS SECTION ============ */}
        <motion.section className="mb-40" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-4 flex items-center gap-3">
              <User className="text-blue-400" size={40} />
              Credits & Contributors
            </h2>
            <div className="h-1 w-20 bg-blue-500" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {credits.map((person, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-md transition-all hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/15 transition-colors">
                    {person.icon}
                  </div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-gray-500 font-mono">{person.label}</p>
                </div>
                {person.url ? (
                  <a
                    href={person.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-blue-300 hover:text-blue-200 transition-colors"
                  >
                    {person.value}
                  </a>
                ) : (
                  <p className="text-sm font-bold text-white">{person.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ============ FINAL CTA ============ */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-12 md:p-16 rounded-4xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-xl text-center mb-20 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-6">Ready to Explore?</h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
            Download the latest build and experience event-driven game architecture in action.
            Latest 0.1.3
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              href="https://drive.google.com/drive/folders/1zN78K6mbtYIUMgJV7N0UGI5R91pUlJWf?usp=sharing"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-wider shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              <DownloadCloud size={20} />
              Download Now
            </motion.a>
            <motion.a
              href="https://github.com/YilmazBatal/EasyRPG"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full border border-blue-500/50 bg-blue-500/10 hover:bg-blue-500/15 text-blue-300 font-bold uppercase tracking-wider transition-all"
            >
              <Github size={20} />
              GitHub Repository
            </motion.a>
          </div>
        </motion.section>
      </div>

      {/* ============ FOOTER ============ */}
      <footer className="relative z-10 border-t border-white/5 bg-slate-950/50 backdrop-blur-xl py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-blue-400">Project</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A portfolio-grade RPG built on professional software architecture, showcasing event-driven design and
                SOLID principles.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-blue-400">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://github.com/YilmazBatal/EasyRPG" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <a href="https://drive.google.com/drive/folders/1zN78K6mbtYIUMgJV7N0UGI5R91pUlJWf?usp=sharing" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                    Download Build
                  </a>
                </li>
                <li>
                  <Link href="/" className="text-gray-400 hover:text-blue-400 transition">
                    Back to Portfolio
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-blue-400">Built With</h3>
              <ul className="space-y-2 text-sm text-gray-400 font-mono">
                <li>Unity 2022.3 LTS</li>
                <li>C# 11 Modern</li>
                <li>Event Bus Pattern</li>
                <li>SOLID Architecture</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-mono">
            <p>© 2025 Yilmaz Batal • EasyRPG Portfolio Project</p>
            <p>Engineering Excellence in Game Development</p>
          </div>
        </div>
      </footer>
    </main>
  );
}