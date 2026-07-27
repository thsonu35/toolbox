import React from "react";
import Link from "next/link";
import { ChevronRight, Sparkles, Terminal, Cpu, Layers, Zap } from "lucide-react";
import CustomButton from "@/components/ui/CustomButton";

export default function CategoriesHero() {
  return (
    <div className="relative pt-8 pb-12 bg-background border-b-2 border-border/80 overflow-hidden">
      
      {/* Abstract Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-sky-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="w-full px-4 sm:px-8 lg:px-12 max-w-[1400px] mx-auto relative z-10">
        
        {/* Breadcrumb & Live Indicator Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
          <nav className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" />
            <span className="text-foreground font-extrabold">Categories Suite</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-card border-2 border-border text-xs font-bold text-foreground shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>150+ Developer Tools Active</span>
          </div>
        </div>

        {/* Compact Layout with Balanced Center Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-2">
          
          {/* Left Text Content */}
          <div className="flex flex-col items-start gap-4 max-w-2xl">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-500/30 text-sky-600 dark:text-sky-400 text-xs font-extrabold uppercase tracking-widest">
              <Sparkles className="w-4 h-4" /> Next-Gen Architecture
            </div>

            <div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground mb-3 leading-[1.1]">
                Explore All <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">Categories</span>
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base font-medium leading-relaxed">
                Unlock peak workflow efficiency with 150+ professional-grade, lightning-fast utilities built for modern engineers.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <CustomButton
                text="Browse All Tools"
                href="#categories-grid"
                variant="primary"
                className="px-5 py-2.5 font-bold shadow-md shadow-sky-500/20 text-xs"
              />
              <CustomButton
                text="Explore Documentation"
                href="/documentation"
                variant="outline"
                className="px-5 py-2.5 font-bold text-xs"
              />
            </div>
          </div>

          {/* Right Floating Tech Elements with Center Metric Pill */}
          <div className="w-full lg:w-auto flex flex-col gap-3 min-w-[320px]">
            
            {/* Added Center Highlight Pill to fill middle density */}
            <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-sky-500/10 border border-sky-500/30 text-xs font-bold text-sky-600 dark:text-sky-400 shadow-xs">
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-sky-500" /> High Performance Suite
              </span>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-sky-500/20">Optimized</span>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-card border-2 border-border/80 shadow-md hover:border-sky-500/60 transition-all">
              <div className="p-2.5 rounded-xl bg-sky-500/15 text-sky-600 dark:text-sky-400">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black text-foreground">Zero Latency Executions</h4>
                <p className="text-[11px] font-bold text-muted-foreground">Client-side compiled utilities</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-card border-2 border-border/80 shadow-md hover:border-indigo-500/60 transition-all">
              <div className="p-2.5 rounded-xl bg-indigo-500/15 text-indigo-600 dark:text-indigo-400">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black text-foreground">Advanced Processing</h4>
                <p className="text-[11px] font-bold text-muted-foreground">Optimized data structures</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-card border-2 border-border/80 shadow-md hover:border-emerald-500/60 transition-all">
              <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black text-foreground">Modular Architecture</h4>
                <p className="text-[11px] font-bold text-muted-foreground">21 Unified utility groups</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}