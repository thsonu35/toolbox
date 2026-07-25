"use client";

import React from "react";
import Link from "next/link";
import { Link2, QrCode, FileText, Sparkles, ArrowUpRight, Terminal, Code2, ShieldCheck, Cpu, Layers, Zap } from "lucide-react";

interface ToolItem {
  id: string;
  name: string;
  category: string;
  time: string;
  badge: string;
  badgeColor: string;
  href: string;
}

const LIVE_FEEDS: ToolItem[] = [
  { id: "1", name: "URL Shortener & Analytics", category: "Networking", time: "2d ago", badge: "New Release", badgeColor: "bg-sky-500/15 text-sky-400 border-sky-500/30", href: "/tools/url-shortener" },
  { id: "2", name: "Custom QR Code Generator", category: "Generators", time: "4d ago", badge: "Trending", badgeColor: "bg-purple-500/15 text-purple-400 border-purple-500/30", href: "/tools/qr-generator" },
  { id: "3", name: "Text Case Converter Pro", category: "Formatting", time: "1w ago", badge: "v2.0 Updated", badgeColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30", href: "/tools/case-converter" },
  { id: "4", name: "AI Text & Doc Summarizer", category: "Artificial Intelligence", time: "2w ago", badge: "AI Powered", badgeColor: "bg-amber-500/15 text-amber-400 border-amber-500/30", href: "/tools/ai-summarizer" },
];

export default function DiscoverSection() {
  return (
    <section className="py-20 sm:py-28 bg-background relative overflow-hidden border-y border-border/60">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-sky-500/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full px-6 sm:px-12 lg:px-20 max-w-[1550px] mx-auto relative z-10">
        
        {/* MAIN GRID: Left Recently Added vs Right Featured Collections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* ================= LEFT SIDE: RECENTLY ADDED ================= */}
          <div className="lg:col-span-5 flex flex-col">
            
            {/* Stylish Big Header */}
            <div className="flex items-center justify-between mb-6 px-1">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500/20 to-blue-500/10 border border-sky-500/30 flex items-center justify-center shadow-lg shadow-sky-500/10">
                  <Terminal className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-sky-500 block mb-0.5">CHRONOLOGICAL FEED</span>
                  <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
                    Recently Added
                  </h3>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono font-bold text-sky-400 bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-sky-500/20 shadow-sm animate-pulse">
                <Zap className="w-3.5 h-3.5 fill-current" /> LIVE
              </span>
            </div>

            {/* Terminal Card Body */}
            <div className="bg-card border-2 border-border/80 rounded-[2.5rem] p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden flex-1">
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/60">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono font-bold text-muted-foreground">recent_releases.log</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {LIVE_FEEDS.map((tool) => (
                    <Link
                      key={tool.id}
                      href={tool.href}
                      className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-secondary/60 hover:bg-secondary border border-border/60 hover:border-sky-500/40 transition-all duration-300 gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-sky-500 group-hover:scale-150 transition-transform shrink-0" />
                        <div>
                          <div className="flex items-center gap-2 flex-wrap mb-0.5">
                            <h4 className="text-sm font-black text-foreground group-hover:text-sky-400 transition-colors">
                              {tool.name}
                            </h4>
                            <span className={`text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md border ${tool.badgeColor}`}>
                              {tool.badge}
                            </span>
                          </div>
                          <span className="text-[11px] font-mono text-muted-foreground">{tool.category}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between sm:justify-end gap-3 pl-5 sm:pl-0">
                        <span className="text-xs font-mono text-muted-foreground">{tool.time}</span>
                        <div className="w-7 h-7 rounded-full bg-background border border-border flex items-center justify-center text-foreground group-hover:bg-sky-500 group-hover:text-white transition-all shadow-sm">
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-border/60 flex items-center justify-between">
                <span className="text-xs font-semibold text-muted-foreground">Looking for older patches?</span>
                <Link href="/tools?sort=all" className="text-xs font-bold text-foreground hover:text-sky-400 flex items-center gap-1">
                  View Full Changelog <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>


          {/* ================= RIGHT SIDE: FEATURED COLLECTIONS (Light, Bright & Colorful) ================= */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Centered Stylish Big Header */}
            <div className="flex flex-col items-center text-center mb-6 px-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-mono font-extrabold uppercase tracking-widest mb-2 shadow-sm">
                CURATED BUNDLES
              </div>
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/10 border border-purple-500/30 flex items-center justify-center shadow-lg shadow-purple-500/10">
                  <Layers className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
                  Featured Collections
                </h3>
              </div>
              <Link href="/collections" className="text-xs font-extrabold text-purple-400 hover:text-purple-300 inline-flex items-center gap-1.5 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20 transition-all shadow-sm">
                <span>View All Bundles</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 3 Bright & Light Colorful Boxes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch flex-1">
              
              {/* BOX 1: Developer Core (Bright Sky Theme) */}
              <Link
                href="/collections/developer-essentials"
                className="group relative p-6 sm:p-7 rounded-[2.2rem] bg-gradient-to-br from-sky-500/20 via-blue-500/10 to-sky-400/5 border-2 border-sky-400/60 hover:border-sky-400 hover:shadow-[0_0_35px_rgba(56,189,248,0.25)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-400/50 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Code2 className="w-6 h-6 text-sky-400" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/40">
                      15 Utilities
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-foreground tracking-tight group-hover:text-sky-400 transition-colors mb-1.5">
                    Developer Core
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground leading-relaxed">
                    JSON formatters, JWT decoders & fast minifiers.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-sky-500/30 flex items-center justify-between text-xs font-bold text-foreground">
                  <span className="text-sky-500 dark:text-sky-400">Explore Bundle</span>
                  <div className="w-8 h-8 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>


              {/* BOX 2: Secure PDF Suite (Bright Emerald Theme) */}
              <Link
                href="/collections/pdf-essentials"
                className="group relative p-6 sm:p-7 rounded-[2.2rem] bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-emerald-400/5 border-2 border-emerald-400/60 hover:border-emerald-400 hover:shadow-[0_0_35px_rgba(52,211,153,0.25)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <ShieldCheck className="w-6 h-6 text-emerald-400" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                      10 Utilities
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-foreground tracking-tight group-hover:text-emerald-400 transition-colors mb-1.5">
                    Secure PDF Suite
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground leading-relaxed">
                    Merge, split, compress, and sign secure documents.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-emerald-500/30 flex items-center justify-between text-xs font-bold text-foreground">
                  <span className="text-emerald-500 dark:text-emerald-400">Explore Bundle</span>
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>


              {/* BOX 3: AI Workflows (Bright Purple Theme - Spans full width) */}
              <Link
                href="/collections/ai-productivity"
                className="group relative p-6 sm:p-7 rounded-[2.2rem] bg-gradient-to-r from-purple-500/20 via-indigo-500/10 to-purple-400/5 border-2 border-purple-400/60 hover:border-purple-400 hover:shadow-[0_0_35px_rgba(192,132,252,0.25)] transition-all duration-300 sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-400/50 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                    <Cpu className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-black text-foreground tracking-tight group-hover:text-purple-400 transition-colors">
                        AI Workflows & Prompts
                      </h3>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/40">
                        12 Utilities
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground leading-relaxed">
                      Instant document summarizers, prompt architectures, and structured text assistants.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 border-purple-500/30 gap-3 shrink-0">
                  <span className="text-xs font-bold text-purple-500 dark:text-purple-400 sm:hidden">Explore Bundle</span>
                  <div className="w-9 h-9 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all shadow-sm">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}