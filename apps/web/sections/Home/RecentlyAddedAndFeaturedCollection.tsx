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
    <section className="py-8 sm:py-12 bg-background relative overflow-hidden border-y border-border/60">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-sky-500/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full px-6 sm:px-12 lg:px-20 max-w-[1550px] mx-auto relative z-10">
        
        {/* MAIN GRID: Left Recently Added vs Right Featured Collections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* ================= LEFT SIDE: RECENTLY ADDED ================= */}
          <div className="lg:col-span-5 flex flex-col">
            
            {/* Stylish Compact Header */}
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500/20 to-blue-500/10 border border-sky-500/30 flex items-center justify-center shadow-sm">
                  <Terminal className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <span className="text-[9px] font-mono font-extrabold uppercase tracking-widest text-sky-500 block mb-0.5">CHRONOLOGICAL FEED</span>
                  <h3 className="text-lg sm:text-xl font-black tracking-tight text-foreground leading-none">
                    Recently Added
                  </h3>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono font-bold text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-full border border-sky-500/20 shadow-sm animate-pulse">
                <Zap className="w-2.5 h-2.5 fill-current" /> LIVE
              </span>
            </div>

            {/* Terminal Card Body */}
            <div className="bg-card border border-border/80 rounded-2xl p-4 flex flex-col justify-between shadow-sm relative overflow-hidden flex-1">
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-border/60">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                    <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                    <span className="ml-1 text-[11px] font-mono font-bold text-muted-foreground">recent_releases.log</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {LIVE_FEEDS.map((tool) => (
                    <Link
                      key={tool.id}
                      href={tool.href}
                      className="group flex flex-col sm:flex-row sm:items-center justify-between p-2.5 sm:p-3 rounded-xl bg-secondary/60 hover:bg-secondary border border-border/60 hover:border-sky-500/40 transition-all duration-300 gap-2"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500 group-hover:scale-150 transition-transform shrink-0" />
                        <div>
                          <div className="flex items-center gap-2 flex-wrap mb-0.5">
                            <h4 className="text-xs font-black text-foreground group-hover:text-sky-400 transition-colors">
                              {tool.name}
                            </h4>
                            <span className={`text-[8px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded border ${tool.badgeColor}`}>
                              {tool.badge}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-muted-foreground">{tool.category}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between sm:justify-end gap-2 pl-4 sm:pl-0">
                        <span className="text-[10px] font-mono text-muted-foreground">{tool.time}</span>
                        <div className="w-5 h-5 rounded-full bg-background border border-border flex items-center justify-center text-foreground group-hover:bg-sky-500 group-hover:text-white transition-all shadow-sm">
                          <ArrowUpRight className="w-2.5 h-2.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-2.5 border-t border-border/60 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-muted-foreground">Looking for older patches?</span>
                <Link href="/tools?sort=all" className="text-[11px] font-bold text-foreground hover:text-sky-400 flex items-center gap-1">
                  Full Changelog <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

          </div>


          {/* ================= RIGHT SIDE: FEATURED COLLECTIONS ================= */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Centered Compact Header */}
            <div className="flex flex-col items-center text-center mb-3 px-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[9px] font-mono font-extrabold uppercase tracking-widest mb-1.5 shadow-sm">
                CURATED BUNDLES
              </div>
              <div className="flex items-center justify-center gap-2.5 mb-1.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-indigo-500/10 border border-purple-500/30 flex items-center justify-center shadow-sm">
                  <Layers className="w-4 h-4 text-purple-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-foreground leading-none">
                  Featured Collections
                </h3>
              </div>
              <Link href="/collections" className="text-[11px] font-extrabold text-purple-400 hover:text-purple-300 inline-flex items-center gap-1 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20 transition-all shadow-sm">
                <span>View All Bundles</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>

            {/* 3 Bright & Light Colorful Boxes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-stretch flex-1">
              
              {/* BOX 1: Developer Core */}
              <Link
                href="/collections/developer-essentials"
                className="group relative p-4 rounded-2xl bg-gradient-to-br from-sky-500/20 via-blue-500/10 to-sky-400/5 border border-sky-400/50 hover:border-sky-400 hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-400/50 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <Code2 className="w-4 h-4 text-sky-400" />
                    </div>
                    <span className="text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/40">
                      15 Utilities
                    </span>
                  </div>
                  <h3 className="text-sm font-black text-foreground tracking-tight group-hover:text-sky-400 transition-colors mb-0.5">
                    Developer Core
                  </h3>
                  <p className="text-[11px] font-medium text-muted-foreground leading-snug">
                    JSON formatters, JWT decoders & minifiers.
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-sky-500/30 flex items-center justify-between text-[11px] font-bold text-foreground">
                  <span className="text-sky-500 dark:text-sky-400">Explore Bundle</span>
                  <div className="w-6 h-6 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all">
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>


              {/* BOX 2: Secure PDF Suite */}
              <Link
                href="/collections/pdf-essentials"
                className="group relative p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-emerald-400/5 border border-emerald-400/50 hover:border-emerald-400 hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                      10 Utilities
                    </span>
                  </div>
                  <h3 className="text-sm font-black text-foreground tracking-tight group-hover:text-emerald-400 transition-colors mb-0.5">
                    Secure PDF Suite
                  </h3>
                  <p className="text-[11px] font-medium text-muted-foreground leading-snug">
                    Merge, split, compress, and sign securely.
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-emerald-500/30 flex items-center justify-between text-[11px] font-bold text-foreground">
                  <span className="text-emerald-500 dark:text-emerald-400">Explore Bundle</span>
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>


              {/* BOX 3: AI Workflows (Spans full width) */}
              <Link
                href="/collections/ai-productivity"
                className="group relative p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 via-indigo-500/10 to-purple-400/5 border border-purple-400/50 hover:border-purple-400 hover:shadow-sm transition-all duration-300 sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-400/50 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform shrink-0">
                    <Cpu className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="text-sm font-black text-foreground tracking-tight group-hover:text-purple-400 transition-colors">
                        AI Workflows & Prompts
                      </h3>
                      <span className="text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/40">
                        12 Utilities
                      </span>
                    </div>
                    <p className="text-[11px] font-medium text-muted-foreground leading-snug">
                      Instant document summarizers, prompt architectures, and structured text assistants.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto pt-2.5 sm:pt-0 border-t sm:border-t-0 border-purple-500/30 gap-2 shrink-0">
                  <span className="text-[11px] font-bold text-purple-500 dark:text-purple-400 sm:hidden">Explore Bundle</span>
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all shadow-sm">
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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