"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  FileCode2, Image as ImageIcon, FileSpreadsheet, Sparkles, 
  KeyRound, Lock, FileText, ArrowRight, Zap, Flame, CheckCircle2, Shield
} from "lucide-react";

interface Tool {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  uses: string;
  badge: string;
  icon: React.ReactNode;
  gradient: string;
  accentColor: string;
  features: string[];
  href: string;
}

const POPULAR_TOOLS: Tool[] = [
  {
    id: "json-formatter",
    name: "JSON Formatter & Validator",
    tagline: "Format, validate & convert JSON in real-time",
    description: "Instant client-side JSON parser with syntax error detection, tree view visualization, and fast minification.",
    category: "Developer Suite",
    uses: "2.4M+",
    badge: "Most Popular",
    icon: <FileCode2 className="w-5 h-5 text-sky-400" />,
    gradient: "from-sky-500/20 via-blue-600/10 to-transparent",
    accentColor: "border-sky-500/50 text-sky-500 bg-sky-500/10",
    features: ["Zero Server Logs", "Tree View & Graph", "Export to CSV/XML"],
    href: "/tools/json-formatter",
  },
  {
    id: "image-compressor",
    name: "Smart Image Compressor",
    tagline: "Compress WebP, PNG & JPG up to 90%",
    description: "Browser-based lossy & lossless image compression pipeline that keeps your visual media crisp while shrinking file size.",
    category: "Media & Graphics",
    uses: "3.1M+",
    badge: "Trending",
    icon: <ImageIcon className="w-5 h-5 text-emerald-400" />,
    gradient: "from-emerald-500/20 via-teal-600/10 to-transparent",
    accentColor: "border-emerald-500/50 text-emerald-500 bg-emerald-500/10",
    features: ["Batch Processing", "EXIF Removal", "Offline Conversion"],
    href: "/tools/image-compressor",
  },
  {
    id: "pdf-merge",
    name: "PDF Suite Pro",
    tagline: "Merge, split & reorder PDF pages instantly",
    description: "Combine multiple PDF files into a single clean document or split large manuals with drag-and-drop ease.",
    category: "Document Utility",
    uses: "1.8M+",
    badge: "Essential",
    icon: <FileSpreadsheet className="w-5 h-5 text-rose-400" />,
    gradient: "from-rose-500/20 via-red-600/10 to-transparent",
    accentColor: "border-rose-500/50 text-rose-500 bg-rose-500/10",
    features: ["Military-grade Encryption", "100% Client-side", "No Watermarks"],
    href: "/tools/pdf-merge",
  },
  {
    id: "ai-prompt",
    name: "AI System Prompt Studio",
    tagline: "Build high-converting prompts for LLMs",
    description: "Craft structured, context-aware prompt templates for ChatGPT, Claude, and Midjourney to maximize output accuracy.",
    category: "AI & Productivity",
    uses: "1.2M+",
    badge: "AI Powered",
    icon: <Sparkles className="w-5 h-5 text-amber-400" />,
    gradient: "from-amber-500/20 via-orange-600/10 to-transparent",
    accentColor: "border-amber-500/50 text-amber-500 bg-amber-500/10",
    features: ["Role Framing", "Chain-of-Thought", "1-Click Copy"],
    href: "/tools/ai-prompt-generator",
  },
  {
    id: "password-gen",
    name: "Cryptographic Hash & Key Gen",
    tagline: "Generate SHA-256, Bcrypt & Passwords",
    description: "Create high-entropy passwords, HMAC keys, and generate secure hashes directly inside your browser sandbox.",
    category: "Security & Encryption",
    uses: "950K+",
    badge: "Security First",
    icon: <KeyRound className="w-5 h-5 text-indigo-400" />,
    gradient: "from-indigo-500/20 via-purple-600/10 to-transparent",
    accentColor: "border-indigo-500/50 text-indigo-500 bg-indigo-500/10",
    features: ["Custom Entropy", "Bcrypt & SHA-256", "Offline Cryptography"],
    href: "/tools/password-generator",
  },
];

export default function PopularTools() {
  const [activeTool, setActiveTool] = useState<Tool>(POPULAR_TOOLS[0]);

  return (
    <section id="tools" className="py-12 sm:py-16 bg-background relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="w-full px-6 sm:px-12 lg:px-20 max-w-[1550px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-border/60 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-[11px] font-bold uppercase tracking-wider mb-2">
              <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>High-Frequency Utilities</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-foreground">
              Popular Tools Hub
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-sm font-medium">
            Select any tool from the deck to preview its capabilities and launch it instantly.
          </p>
        </div>

        {/* Interactive Split Feature Hub Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column (Active Tool Showcase) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-card border border-sky-500/30 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl transition-all duration-300">
            
            {/* Dynamic Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${activeTool.gradient} pointer-events-none -z-0`} />
            
            <div className="relative z-10">
              {/* Card Header Info */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-background/90 border border-border shadow-sm flex items-center justify-center">
                    {activeTool.icon}
                  </div>
                  <div>
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${activeTool.accentColor}`}>
                      {activeTool.category}
                    </span>
                    <h4 className="text-[11px] font-semibold text-muted-foreground mt-1">
                      {activeTool.uses} Executions
                    </h4>
                  </div>
                </div>

                <div className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-background/80 border border-border text-[11px] font-bold text-foreground">
                  <Zap className="w-3 h-3 text-amber-500 fill-amber-500" />
                  <span>{activeTool.badge}</span>
                </div>
              </div>

              {/* Main Active Title & Description */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight mb-2">
                {activeTool.name}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-sky-600 dark:text-sky-400 mb-3">
                {activeTool.tagline}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 max-w-xl">
                {activeTool.description}
              </p>

              {/* Feature Pills List */}
              <div className="flex flex-wrap gap-2 mb-6">
                {activeTool.features.map((feat, idx) => (
                  <div 
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-background/90 border border-border text-[11px] font-bold text-foreground shadow-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Launch CTA Bar */}
            <div className="relative z-10 pt-4 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground">
                <Shield className="w-3.5 h-3.5 text-sky-500" />
                <span>Runs 100% locally in your browser</span>
              </div>

              <Link
                href={activeTool.href}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-xl shadow-md shadow-sky-500/20 transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>Launch {activeTool.name.split(" ")[0]}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          {/* Right Column (Tools Deck / List) */}
          <div className="lg:col-span-5 flex flex-col gap-2.5 justify-center">
            {POPULAR_TOOLS.map((tool) => {
              const isSelected = activeTool.id === tool.id;
              return (
                <div
                  key={tool.id}
                  onClick={() => setActiveTool(tool)}
                  onMouseEnter={() => setActiveTool(tool)}
                  className={`group p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? "bg-card border-sky-500 shadow-md scale-[1.01]"
                      : "bg-card/60 hover:bg-card border-border/70 hover:border-sky-500/40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-lg border transition-colors ${
                      isSelected 
                        ? "bg-sky-500/10 border-sky-500/40" 
                        : "bg-secondary border-border"
                    }`}>
                      {tool.icon}
                    </div>

                    <div>
                      <h4 className={`text-xs sm:text-sm font-bold transition-colors ${
                        isSelected ? "text-sky-600 dark:text-sky-400" : "text-foreground group-hover:text-sky-500"
                      }`}>
                        {tool.name}
                      </h4>
                      <p className="text-[11px] text-muted-foreground font-medium mt-0.5 line-clamp-1">
                        {tool.tagline}
                      </p>
                    </div>
                  </div>

                  <div className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all shrink-0 ${
                    isSelected 
                      ? "bg-sky-600 text-white border-sky-600" 
                      : "bg-secondary text-muted-foreground border-border group-hover:text-foreground"
                  }`}>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}