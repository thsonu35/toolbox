"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { 
  Code2, FileText, Image, Video, Music, Sparkles, 
  ShieldCheck, Type, ArrowLeftRight, Share2, Calculator, 
  ChevronLeft, ChevronRight, ArrowUpRight, Grid 
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
    icon: <Code2 className="w-7 h-7 text-sky-500 dark:text-sky-400" />,
    tag: "JSON, Regex, Formatter & APIs",
    glowColor: "from-sky-500/20 via-sky-500/5 to-transparent",
    circleColor: "bg-sky-500/15 border-sky-500/40 shadow-sky-500/20",
    borderColor: "hover:border-sky-500/80",
    href: "#developer",
  },
  {
    id: "pdf",
    title: "PDF Essentials",
    count: 32,
    icon: <FileText className="w-7 h-7 text-rose-500 dark:text-rose-400" />,
    tag: "Merge, Split, Compress & Edit",
    glowColor: "from-rose-500/20 via-rose-500/5 to-transparent",
    circleColor: "bg-rose-500/15 border-rose-500/40 shadow-rose-500/20",
    borderColor: "hover:border-rose-500/80",
    href: "#pdf",
  },
  {
    id: "image",
    title: "Image & Graphics",
    count: 26,
    icon: <Image className="w-7 h-7 text-emerald-500 dark:text-emerald-400" />,
    tag: "Crop, Resize, WebP & Compress",
    glowColor: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    circleColor: "bg-emerald-500/15 border-emerald-500/40 shadow-emerald-500/20",
    borderColor: "hover:border-emerald-500/80",
    href: "#image",
  },
  {
    id: "ai",
    title: "AI Productivity",
    count: 22,
    icon: <Sparkles className="w-7 h-7 text-amber-500 dark:text-amber-400" />,
    tag: "Prompts, Smart AI Generators",
    glowColor: "from-amber-500/20 via-amber-500/5 to-transparent",
    circleColor: "bg-amber-500/15 border-amber-500/40 shadow-amber-500/20",
    borderColor: "hover:border-amber-500/80",
    href: "#ai",
  },
  {
    id: "security",
    title: "Security & Hash",
    count: 14,
    icon: <ShieldCheck className="w-7 h-7 text-indigo-500 dark:text-indigo-400" />,
    tag: "SHA256, Password Generator",
    glowColor: "from-indigo-500/20 via-indigo-500/5 to-transparent",
    circleColor: "bg-indigo-500/15 border-indigo-500/40 shadow-indigo-500/20",
    borderColor: "hover:border-indigo-500/80",
    href: "#security",
  },
  {
    id: "converter",
    title: "Data Converters",
    count: 38,
    icon: <ArrowLeftRight className="w-7 h-7 text-purple-500 dark:text-purple-400" />,
    tag: "CSV, JSON, XML, Base64",
    glowColor: "from-purple-500/20 via-purple-500/5 to-transparent",
    circleColor: "bg-purple-500/15 border-purple-500/40 shadow-purple-500/20",
    borderColor: "hover:border-purple-500/80",
    href: "#converter",
  },
  {
    id: "text",
    title: "Text & Formatting",
    count: 29,
    icon: <Type className="w-7 h-7 text-teal-500 dark:text-teal-400" />,
    tag: "Diff Checker, Word Counter",
    glowColor: "from-teal-500/20 via-teal-500/5 to-transparent",
    circleColor: "bg-teal-500/15 border-teal-500/40 shadow-teal-500/20",
    borderColor: "hover:border-teal-500/80",
    href: "#text",
  },
  {
    id: "video",
    title: "Video Utilities",
    count: 18,
    icon: <Video className="w-7 h-7 text-blue-500 dark:text-blue-400" />,
    tag: "GIF Maker, Video Trimmer",
    glowColor: "from-blue-500/20 via-blue-500/5 to-transparent",
    circleColor: "bg-blue-500/15 border-blue-500/40 shadow-blue-500/20",
    borderColor: "hover:border-blue-500/80",
    href: "#video",
  },
  {
    id: "audio",
    title: "Audio Tools",
    count: 15,
    icon: <Music className="w-7 h-7 text-pink-500 dark:text-pink-400" />,
    tag: "Extract Audio, Cut MP3",
    glowColor: "from-pink-500/20 via-pink-500/5 to-transparent",
    circleColor: "bg-pink-500/15 border-pink-500/40 shadow-pink-500/20",
    borderColor: "hover:border-pink-500/80",
    href: "#audio",
  },
  {
    id: "social",
    title: "Social & SEO",
    count: 21,
    icon: <Share2 className="w-7 h-7 text-fuchsia-500 dark:text-fuchsia-400" />,
    tag: "OpenGraph Preview, Meta Tags",
    glowColor: "from-fuchsia-500/20 via-fuchsia-500/5 to-transparent",
    circleColor: "bg-fuchsia-500/15 border-fuchsia-500/40 shadow-fuchsia-500/20",
    borderColor: "hover:border-fuchsia-500/80",
    href: "#social",
  },
  {
    id: "calculator",
    title: "Calculators & Math",
    count: 19,
    icon: <Calculator className="w-7 h-7 text-cyan-500 dark:text-cyan-400" />,
    tag: "Bitwise, Unit Converter",
    glowColor: "from-cyan-500/20 via-cyan-500/5 to-transparent",
    circleColor: "bg-cyan-500/15 border-cyan-500/40 shadow-cyan-500/20",
    borderColor: "hover:border-cyan-500/80",
    href: "#calculator",
  },
];

export default function Categories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="categories" className="py-12 sm:py-16 bg-background overflow-hidden">
      <div className="w-full px-6 sm:px-12 lg:px-20 max-w-[1550px] mx-auto">
        
        {/* Header with Navigation & View All Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-border/60 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-600 dark:text-sky-400">
              Browse Directory
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-foreground mt-0.5">
              Explore Categories
            </h2>
          </div>

          {/* Controls & View All Button */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <Link
              href="#all-categories"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-secondary/80 hover:bg-secondary border border-border text-foreground font-semibold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              <Grid className="w-4 h-4 text-sky-500" />
              <span>View All Categories</span>
            </Link>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                aria-label="Scroll left"
                className="p-2.5 rounded-2xl bg-secondary/80 hover:bg-secondary border border-border text-foreground transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Scroll right"
                className="p-2.5 rounded-2xl bg-secondary/80 hover:bg-secondary border border-border text-foreground transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Slider */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto scrollbar-none scroll-smooth pb-4 pt-1 px-1 -mx-1 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className={`snap-start flex-shrink-0 w-[80%] sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] group relative bg-gradient-to-br ${category.glowColor} bg-card border border-border/80 ${category.borderColor} rounded-[1.8rem] p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between cursor-pointer overflow-hidden`}
            >
              <div>
                {/* Header with Bada Circular Icon Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-14 h-14 rounded-full border-2 ${category.circleColor} shadow-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                    {category.icon}
                  </div>
                  
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-secondary/90 border border-border text-foreground group-hover:bg-background transition-colors">
                    {category.count} tools
                  </span>
                </div>

                {/* Moderate Balanced Title & Subtitle */}
                <h3 className="text-lg sm:text-xl font-bold text-foreground tracking-tight group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-muted-foreground font-medium mt-1 leading-relaxed">
                  {category.tag}
                </p>
              </div>

              {/* Action Footer */}
              <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs sm:text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                <span>Browse Category</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-sky-600 dark:text-sky-400" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}