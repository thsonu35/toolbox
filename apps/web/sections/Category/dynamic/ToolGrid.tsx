import React from "react";
import { Code2, LayoutGrid, List } from "lucide-react";

interface ToolGridProps {
  formattedTitle: string;
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const MAIN_TOOLS = [
  { id: 101, name: "JSON Formatter", desc: "Advanced JSON formatting and validation.", status: "ACTIVE" },
  { id: 102, name: "JWT Decoder", desc: "Securely decode and verify tokens.", status: "ACTIVE" },
  { id: 103, name: "Base64 Encoder", desc: "Fast Base64 string encoding.", status: "ACTIVE" },
  { id: 104, name: "UUID Generator", desc: "Generate v4 UUIDs instantly.", status: "ACTIVE" },
  { id: 105, name: "Bcrypt Hash", desc: "Hash passwords securely.", status: "ACTIVE" },
  { id: 106, name: "URL Encoder", desc: "Encode and decode URL parameters.", status: "ACTIVE" },
  { id: 107, name: "MD5 Hash Generator", desc: "Generate MD5 hashes quickly.", status: "ACTIVE" },
  { id: 108, name: "XML Validator", desc: "Validate and format XML strings.", status: "ACTIVE" },
];

export default function ToolGrid({ formattedTitle, viewMode, setViewMode, activeFilter, setActiveFilter }: ToolGridProps) {
  return (
    <div className="flex flex-col gap-5 w-full">
      
      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <h3 className="text-[18px] font-black text-neutral-900 dark:text-white">All Available Utilities</h3>
          <span className="text-[11px] font-black bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 px-2 py-0.5 rounded uppercase">{MAIN_TOOLS.length} Tools</span>
        </div>
        
        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            {["All", "Popular", "Newest", "Free"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-lg text-[12px] font-black transition-all whitespace-nowrap ${
                  activeFilter === filter 
                    ? "bg-neutral-900 dark:bg-white text-white dark:text-black shadow-sm" 
                    : "text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          
          <div className="hidden sm:flex items-center bg-neutral-200 dark:bg-neutral-800 rounded-md p-1 border border-neutral-300 dark:border-neutral-700">
            <button onClick={() => setViewMode("grid")} className={`p-1 rounded transition-colors ${viewMode === "grid" ? "bg-white dark:bg-neutral-700 shadow-sm text-sky-600 dark:text-sky-400" : "text-neutral-500 dark:text-neutral-400"}`}>
              <LayoutGrid className="w-3.5 h-3.5" />
            </button>
            <button onClick={() => setViewMode("list")} className={`p-1 rounded transition-colors ${viewMode === "list" ? "bg-white dark:bg-neutral-700 shadow-sm text-sky-600 dark:text-sky-400" : "text-neutral-500 dark:text-neutral-400"}`}>
              <List className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Tools Grid Area */}
      <div className={`grid gap-4 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"}`}>
        {MAIN_TOOLS.map((tool) => (
          <div key={tool.id} className={`bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 flex ${viewMode === "grid" ? "flex-col justify-between" : "flex-row items-center gap-4"} hover:border-sky-400 dark:hover:border-sky-500 hover:shadow-md transition-all group`}>
            <div className="w-full">
              <div className="flex items-center justify-between mb-3">
                {/* Icon Box */}
                <div className="w-10 h-10 rounded-lg bg-sky-50 dark:bg-neutral-900 border border-sky-100 dark:border-neutral-800 flex items-center justify-center shrink-0 group-hover:bg-sky-500/10 transition-colors">
                  <Code2 className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                </div>
                {/* Status Badge */}
                {viewMode === "grid" && (
                  <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20">
                    {tool.status}
                  </span>
                )}
              </div>
              <h4 className="text-[14px] font-black text-neutral-900 dark:text-white mb-1">{tool.name}</h4>
              <p className="text-[11px] font-bold text-neutral-500 dark:text-neutral-400 leading-tight">
                {tool.desc}
              </p>
            </div>
            {/* Launch Button */}
            <button className={`bg-neutral-50 dark:bg-neutral-900 hover:bg-sky-600 dark:hover:bg-sky-500 hover:text-white border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 font-bold text-[12px] rounded-lg transition-all ${viewMode === "grid" ? "w-full py-2.5 mt-4" : "px-6 py-2.5 shrink-0"}`}>
              Launch Tool
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}