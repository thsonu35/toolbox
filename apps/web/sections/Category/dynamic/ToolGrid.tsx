import React from "react";
import { Code2, LayoutGrid, List, ChevronDown } from "lucide-react";

interface ToolGridProps {
  formattedTitle: string;
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const FEATURED_TOOLS = [
  { id: 1, name: "JSON Formatter", desc: "Format, validate & parse JSON payloads instantly.", uses: "2.1M", badge: "Featured" },
  { id: 2, name: "JWT Decoder", desc: "Decode and verify JSON Web Tokens securely.", uses: "762K", badge: "Trending" },
  { id: 3, name: "Base64 Encoder", desc: "Encode or decode strings & files to Base64.", uses: "410K", badge: "Popular" },
];

const MAIN_TOOLS = [
  { id: 101, name: "JSON Formatter", desc: "Description: 2 line short desc goes here for context.", status: "ACTIVE" },
  { id: 102, name: "JWT Decoder", desc: "Description: 2 line short desc goes here for context.", status: "ACTIVE" },
  { id: 103, name: "Base64 Encoder", desc: "Description: 2 line short desc goes here for context.", status: "ACTIVE" },
  { id: 104, name: "UUID Generator", desc: "Description: 2 line short desc goes here for context.", status: "ACTIVE" },
  { id: 105, name: "Bcrypt Hash", desc: "Description: 2 line short desc goes here for context.", status: "ACTIVE" },
  { id: 106, name: "URL Encoder", desc: "Description: 2 line short desc goes here for context.", status: "ACTIVE" },
];

export default function ToolGrid({ formattedTitle, viewMode, setViewMode, activeFilter, setActiveFilter }: ToolGridProps) {
  return (
    <div className="flex flex-col gap-8">
      {/* Featured Tools Section */}
      <div>
        <h3 className="text-lg font-black text-foreground mb-4">Featured Tools</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {FEATURED_TOOLS.map((tool) => (
            <div key={tool.id} className="bg-card border-2 border-sky-500/20 rounded-2xl p-4 flex flex-col justify-between hover:border-sky-500/50 transition-colors shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center shadow-sm">
                    <Code2 className="w-5 h-5 text-sky-500" />
                  </div>
                  <span className="text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-md bg-orange-500/10 text-orange-600 border border-orange-500/20">
                    {tool.badge}
                  </span>
                </div>
                <h4 className="text-base font-black text-foreground">{tool.name}</h4>
                <p className="text-xs text-muted-foreground font-medium mt-1 leading-snug line-clamp-2">
                  {tool.desc}
                </p>
              </div>
              <button className="w-full mt-4 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs py-2.5 rounded-xl transition-colors cursor-pointer">
                Open Tool
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Filter & Sort Bar */}
      <div className="sticky top-20 z-30 bg-card/90 backdrop-blur-md border border-border/80 rounded-2xl p-2 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto">
          {["All", "Popular", "Newest", "Free"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === filter 
                  ? "bg-sky-600 text-white shadow-sm" 
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <div className="flex items-center bg-secondary rounded-lg p-0.5 border border-border/60">
            <button onClick={() => setViewMode("grid")} className={`p-1.5 rounded-md transition-colors cursor-pointer ${viewMode === "grid" ? "bg-background shadow-sm text-sky-600" : "text-muted-foreground"}`}>
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button onClick={() => setViewMode("list")} className={`p-1.5 rounded-md transition-colors cursor-pointer ${viewMode === "list" ? "bg-background shadow-sm text-sky-600" : "text-muted-foreground"}`}>
              <List className="w-4 h-4" />
            </button>
          </div>
          <div className="h-4 w-px bg-border hidden sm:block" />
          <button className="flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-sky-600 transition-colors cursor-pointer">
            <span className="text-muted-foreground font-semibold">Sort by:</span> Popular <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Tool Directory Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-black text-foreground">All {formattedTitle} Tools</h3>
          <span className="text-xs font-bold text-muted-foreground">{MAIN_TOOLS.length} Tools available</span>
        </div>
        <div className={`grid gap-4 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
          {MAIN_TOOLS.map((tool) => (
            <div key={tool.id} className={`bg-card border border-border/60 rounded-2xl p-4 flex ${viewMode === "grid" ? "flex-col" : "flex-row items-center gap-4"} hover:border-sky-500/40 hover:shadow-md transition-all`}>
              <div className="flex items-start justify-between mb-3 w-full">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                  <Code2 className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                </div>
                {viewMode === "grid" && (
                  <span className="text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded text-emerald-600 bg-emerald-500/10 border border-emerald-500/20">
                    {tool.status}
                  </span>
                )}
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-black text-foreground">{tool.name}</h4>
                <p className="text-[11px] text-muted-foreground font-medium mt-1 leading-snug">
                  {tool.desc}
                </p>
              </div>
              <button className={`bg-secondary hover:bg-sky-600 hover:text-white text-foreground font-bold text-xs rounded-xl transition-colors cursor-pointer ${viewMode === "grid" ? "w-full py-2.5 mt-4" : "px-6 py-2.5 shrink-0"}`}>
                Open Tool
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Inline Enterprise CTA */}
      <div className="mt-4 rounded-3xl bg-slate-900 dark:bg-slate-950 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800 shadow-xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-[80px]" />
        <div className="relative z-10">
          <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Need Enterprise APIs?</h3>
          <p className="text-sm text-slate-300 font-medium max-w-md leading-relaxed">
            Get dedicated endpoints, higher rate limits, and priority support for your development team.
          </p>
        </div>
        <div className="relative z-10 shrink-0">
          <button className="bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-colors cursor-pointer">
            View Pricing
          </button>
        </div>
      </div>
    </div>
  );
}