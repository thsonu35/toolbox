"use client";

import React from "react";
import Link from "next/link";
import { 
  Code2, FileText, Image, Video, Music, Sparkles, 
  ShieldCheck, Type, ArrowLeftRight, Share2, Calculator, 
  Database, Network, Palette, Globe, Coins, Gamepad2, FileArchive, 
  ArrowUpRight, Grid 
} from "lucide-react";

interface Category {
  id: string;
  title: string;
  count: number;
  icon: React.ReactNode;
  tag: string;
  glowColor: string;
  circleColor: string;
  borderColor: string;
  href: string;
}

const CATEGORIES: Category[] = [
  {
    id: "dev",
    title: "Developer Suite",
    count: 48,
    icon: <Code2 className="w-4 h-4 text-sky-500 dark:text-sky-400" />,
    tag: "JSON, Regex, APIs",
    glowColor: "from-sky-500/15 via-sky-500/5 to-transparent",
    circleColor: "bg-sky-500/15 border-sky-500/30",
    borderColor: "hover:border-sky-500/70",
    href: "#developer",
  },
  {
    id: "pdf",
    title: "PDF Essentials",
    count: 32,
    icon: <FileText className="w-4 h-4 text-rose-500 dark:text-rose-400" />,
    tag: "Merge, Split, Edit",
    glowColor: "from-rose-500/15 via-rose-500/5 to-transparent",
    circleColor: "bg-rose-500/15 border-rose-500/30",
    borderColor: "hover:border-rose-500/70",
    href: "#pdf",
  },
  {
    id: "image",
    title: "Image & Graphics",
    count: 26,
    icon: <Image className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />,
    tag: "Crop, Resize, WebP",
    glowColor: "from-emerald-500/15 via-emerald-500/5 to-transparent",
    circleColor: "bg-emerald-500/15 border-emerald-500/30",
    borderColor: "hover:border-emerald-500/70",
    href: "#image",
  },
  {
    id: "ai",
    title: "AI Productivity",
    count: 22,
    icon: <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400" />,
    tag: "Prompts, Generators",
    glowColor: "from-amber-500/15 via-amber-500/5 to-transparent",
    circleColor: "bg-amber-500/15 border-amber-500/30",
    borderColor: "hover:border-amber-500/70",
    href: "#ai",
  },
  {
    id: "security",
    title: "Security & Hash",
    count: 14,
    icon: <ShieldCheck className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />,
    tag: "SHA256, Passwords",
    glowColor: "from-indigo-500/15 via-indigo-500/5 to-transparent",
    circleColor: "bg-indigo-500/15 border-indigo-500/30",
    borderColor: "hover:border-indigo-500/70",
    href: "#security",
  },
  {
    id: "converter",
    title: "Data Converters",
    count: 38,
    icon: <ArrowLeftRight className="w-4 h-4 text-purple-500 dark:text-purple-400" />,
    tag: "CSV, JSON, Base64",
    glowColor: "from-purple-500/15 via-purple-500/5 to-transparent",
    circleColor: "bg-purple-500/15 border-purple-500/30",
    borderColor: "hover:border-purple-500/70",
    href: "#converter",
  },
  {
    id: "text",
    title: "Text & Formatting",
    count: 29,
    icon: <Type className="w-4 h-4 text-teal-500 dark:text-teal-400" />,
    tag: "Diff Checker, Count",
    glowColor: "from-teal-500/15 via-teal-500/5 to-transparent",
    circleColor: "bg-teal-500/15 border-teal-500/30",
    borderColor: "hover:border-teal-500/70",
    href: "#text",
  },
  {
    id: "video",
    title: "Video Utilities",
    count: 18,
    icon: <Video className="w-4 h-4 text-blue-500 dark:text-blue-400" />,
    tag: "GIF, Trimmer",
    glowColor: "from-blue-500/15 via-blue-500/5 to-transparent",
    circleColor: "bg-blue-500/15 border-blue-500/30",
    borderColor: "hover:border-blue-500/70",
    href: "#video",
  },
  {
    id: "audio",
    title: "Audio Tools",
    count: 15,
    icon: <Music className="w-4 h-4 text-pink-500 dark:text-pink-400" />,
    tag: "Extract, Cut MP3",
    glowColor: "from-pink-500/15 via-pink-500/5 to-transparent",
    circleColor: "bg-pink-500/15 border-pink-500/30",
    borderColor: "hover:border-pink-500/70",
    href: "#audio",
  },
  {
    id: "social",
    title: "Social & SEO",
    count: 21,
    icon: <Share2 className="w-4 h-4 text-fuchsia-500 dark:text-fuchsia-400" />,
    tag: "OpenGraph, Meta Tags",
    glowColor: "from-fuchsia-500/15 via-fuchsia-500/5 to-transparent",
    circleColor: "bg-fuchsia-500/15 border-fuchsia-500/30",
    borderColor: "hover:border-fuchsia-500/70",
    href: "#social",
  },
  {
    id: "calculator",
    title: "Calculators",
    count: 19,
    icon: <Calculator className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />,
    tag: "Bitwise, Units",
    glowColor: "from-cyan-500/15 via-cyan-500/5 to-transparent",
    circleColor: "bg-cyan-500/15 border-cyan-500/30",
    borderColor: "hover:border-cyan-500/70",
    href: "#calculator",
  },
  {
    id: "database",
    title: "Database Tools",
    count: 16,
    icon: <Database className="w-4 h-4 text-orange-500 dark:text-orange-400" />,
    tag: "SQL, Prisma, Schema",
    glowColor: "from-orange-500/15 via-orange-500/5 to-transparent",
    circleColor: "bg-orange-500/15 border-orange-500/30",
    borderColor: "hover:border-orange-500/70",
    href: "#database",
  },
  {
    id: "network",
    title: "Network & DNS",
    count: 12,
    icon: <Network className="w-4 h-4 text-lime-500 dark:text-lime-400" />,
    tag: "Ping, WHOIS, SSL",
    glowColor: "from-lime-500/15 via-lime-500/5 to-transparent",
    circleColor: "bg-lime-500/15 border-lime-500/30",
    borderColor: "hover:border-lime-500/70",
    href: "#network",
  },
  {
    id: "design",
    title: "Color & Design",
    count: 24,
    icon: <Palette className="w-4 h-4 text-violet-500 dark:text-violet-400" />,
    tag: "Palettes, Contrast",
    glowColor: "from-violet-500/15 via-violet-500/5 to-transparent",
    circleColor: "bg-violet-500/15 border-violet-500/30",
    borderColor: "hover:border-violet-500/70",
    href: "#design",
  },
  {
    id: "web",
    title: "Web & Domain",
    count: 17,
    icon: <Globe className="w-4 h-4 text-red-500 dark:text-red-400" />,
    tag: "DNS, SSL, Headers",
    glowColor: "from-red-500/15 via-red-500/5 to-transparent",
    circleColor: "bg-red-500/15 border-red-500/30",
    borderColor: "hover:border-red-500/70",
    href: "#web",
  },
  {
    id: "finance",
    title: "Finance & Crypto",
    count: 20,
    icon: <Coins className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />,
    tag: "Currency, Interest",
    glowColor: "from-yellow-500/15 via-yellow-500/5 to-transparent",
    circleColor: "bg-yellow-500/15 border-yellow-500/30",
    borderColor: "hover:border-yellow-500/70",
    href: "#finance",
  },
  {
    id: "gaming",
    title: "Gaming Utils",
    count: 11,
    icon: <Gamepad2 className="w-4 h-4 text-emerald-600 dark:text-emerald-300" />,
    tag: "Crosshair, DPI Calc",
    glowColor: "from-emerald-600/15 via-emerald-600/5 to-transparent",
    circleColor: "bg-emerald-600/15 border-emerald-600/30",
    borderColor: "hover:border-emerald-600/70",
    href: "#gaming",
  },
  {
    id: "archive",
    title: "File Archives",
    count: 14,
    icon: <FileArchive className="w-4 h-4 text-sky-600 dark:text-sky-300" />,
    tag: "Zip, Tar, Unpack",
    glowColor: "from-sky-600/15 via-sky-600/5 to-transparent",
    circleColor: "bg-sky-600/15 border-sky-600/30",
    borderColor: "hover:border-sky-600/70",
    href: "#archive",
  },
];

export default function Categories() {
  return (
    <section id="categories" className="py-10 sm:py-14 bg-background overflow-hidden">
      <div className="w-full px-6 sm:px-12 lg:px-20 max-w-[1550px] mx-auto">
        
        {/* Header with Title & View All Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 pb-3 border-b border-border/60 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-600 dark:text-sky-400">
              Browse Directory
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground mt-0.5">
              Explore Categories
            </h2>
          </div>

          <Link
            href="#all-categories"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-secondary/80 hover:bg-secondary border border-border text-foreground font-semibold text-xs transition-all hover:scale-105 active:scale-95 shadow-sm self-start sm:self-auto"
          >
            <Grid className="w-4 h-4 text-sky-500" />
            <span>View All Categories</span>
          </Link>
        </div>

        {/* 6 Columns Grid Layout  */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className={`group relative bg-gradient-to-br ${category.glowColor} bg-white/90 dark:bg-card border border-border/80 ${category.borderColor} rounded-xl p-3 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 flex flex-col justify-between cursor-pointer overflow-hidden`}
            >
              <div>
                {/* Icon & Count Badge */}
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-9 h-9 rounded-lg border ${category.circleColor} shadow-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                    {category.icon}
                  </div>
                  
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-secondary/80 border border-border/60 text-muted-foreground group-hover:text-foreground transition-colors">
                    {category.count}
                  </span>
                </div>

                {/* Title & Tag */}
                <h3 className="text-xs font-bold text-foreground tracking-tight group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors line-clamp-1">
                  {category.title}
                </h3>
                
                <p className="text-[10px] text-muted-foreground font-medium mt-0.5 leading-snug line-clamp-1">
                  {category.tag}
                </p>
              </div>

              {/* Action Footer */}
              <div className="mt-3 pt-2 border-t border-border/40 flex items-center justify-between text-[10px] font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                <span>Explore</span>
                <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-sky-600 dark:text-sky-400" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}