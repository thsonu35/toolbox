import React from "react";
import { Code2, ShieldCheck, Activity, ArrowRight, Layers, Sparkles, Mail, Zap, Link as LinkIcon, FileJson } from "lucide-react";

// Featured tools updated for Pure Black/White Dark Mode
const FEATURED_TOOLS = [
  { 
    id: 1, name: "JSON Formatter", desc: "Format & validate JSON.", badge: "Featured", 
    icon: <Code2 className="w-4 h-4 text-sky-500" />, 
    theme: { bg: "bg-sky-50/50 dark:bg-black", border: "border-sky-100 hover:border-sky-300 dark:border-neutral-800 dark:hover:border-sky-500/50", badge: "bg-white dark:bg-neutral-900 text-sky-600 dark:text-sky-400 border-sky-100 dark:border-neutral-800", btn: "bg-white dark:bg-neutral-900 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-neutral-800 hover:bg-sky-500 hover:text-white dark:hover:bg-sky-500 dark:hover:text-black" }
  },
  { 
    id: 2, name: "JWT Decoder", desc: "Decode Web Tokens.", badge: "Trending", 
    icon: <ShieldCheck className="w-4 h-4 text-indigo-500" />, 
    theme: { bg: "bg-indigo-50/50 dark:bg-black", border: "border-indigo-100 hover:border-indigo-300 dark:border-neutral-800 dark:hover:border-indigo-500/50", badge: "bg-white dark:bg-neutral-900 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-neutral-800", btn: "bg-white dark:bg-neutral-900 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-neutral-800 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-black" }
  },
  { 
    id: 3, name: "Base64 Encoder", desc: "Encode strings fast.", badge: "Popular", 
    icon: <Activity className="w-4 h-4 text-emerald-500" />, 
    theme: { bg: "bg-emerald-50/50 dark:bg-black", border: "border-emerald-100 hover:border-emerald-300 dark:border-neutral-800 dark:hover:border-emerald-500/50", badge: "bg-white dark:bg-neutral-900 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-neutral-800", btn: "bg-white dark:bg-neutral-900 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-neutral-800 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-black" }
  },
  { 
    id: 4, name: "Hash Generator", desc: "MD5, SHA-256 Hashes.", badge: "New", 
    icon: <Layers className="w-4 h-4 text-rose-500" />, 
    theme: { bg: "bg-rose-50/50 dark:bg-black", border: "border-rose-100 hover:border-rose-300 dark:border-neutral-800 dark:hover:border-rose-500/50", badge: "bg-white dark:bg-neutral-900 text-rose-600 dark:text-rose-400 border-rose-100 dark:border-neutral-800", btn: "bg-white dark:bg-neutral-900 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-neutral-800 hover:bg-rose-500 hover:text-white dark:hover:bg-rose-500 dark:hover:text-black" }
  },
  { 
    id: 5, name: "URL Encoder", desc: "Encode URL params.", badge: "Useful", 
    icon: <LinkIcon className="w-4 h-4 text-purple-500" />, 
    theme: { bg: "bg-purple-50/50 dark:bg-black", border: "border-purple-100 hover:border-purple-300 dark:border-neutral-800 dark:hover:border-purple-500/50", badge: "bg-white dark:bg-neutral-900 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-neutral-800", btn: "bg-white dark:bg-neutral-900 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-neutral-800 hover:bg-purple-500 hover:text-white dark:hover:bg-purple-500 dark:hover:text-black" }
  },
  { 
    id: 6, name: "XML Validator", desc: "Validate XML trees.", badge: "Essential", 
    icon: <FileJson className="w-4 h-4 text-teal-500" />, 
    theme: { bg: "bg-teal-50/50 dark:bg-black", border: "border-teal-100 hover:border-teal-300 dark:border-neutral-800 dark:hover:border-teal-500/50", badge: "bg-white dark:bg-neutral-900 text-teal-600 dark:text-teal-400 border-teal-100 dark:border-neutral-800", btn: "bg-white dark:bg-neutral-900 text-teal-600 dark:text-teal-400 border border-teal-100 dark:border-neutral-800 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-500 dark:hover:text-black" }
  },
];

const COMING_SOON = [
  { id: 201, name: "GraphQL Debugger", desc: "Inspect and debug queries.", icon: <Layers className="w-4 h-4 text-indigo-500" /> },
  { id: 202, name: "Webhook Tester", desc: "Catch and inspect payloads.", icon: <Activity className="w-4 h-4 text-emerald-500" /> },
  { id: 203, name: "Regex Matcher", desc: "Live regular expressions.", icon: <Code2 className="w-4 h-4 text-rose-500" /> },
];

// Naya Full-Width About Widget (Black in Dark Mode)
export function AboutWidget({ formattedTitle }: { formattedTitle: string }) {
  return (
    <div className="bg-sky-50 dark:bg-black border-2 border-sky-100 dark:border-neutral-800 rounded-2xl p-4 sm:p-6 shadow-sm w-full transition-colors duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-[15px] font-black text-sky-950 dark:text-white flex items-center gap-2 mb-2">
            <Layers className="w-5 h-5 text-sky-600 dark:text-sky-400" /> About {formattedTitle}
          </h3>
          <p className="text-[12px] font-bold text-sky-800/80 dark:text-neutral-400 leading-relaxed max-w-3xl">
            This suite contains essential utilities for professionals. Everything is optimized for speed, fully secure, and processes locally in your browser ensuring absolute data privacy.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 shrink-0">
          {["Formatting", "Security", "Client-side", "Free"].map((tag) => (
            <span key={tag} className="text-[10px] font-black uppercase tracking-wider bg-white dark:bg-neutral-900 border border-sky-200 dark:border-neutral-800 px-3 py-1.5 rounded-lg text-sky-700 dark:text-sky-400 shadow-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Editor's Picks (Pure Black in Dark Mode)
export function LeftWidgets() {
  return (
    <div className="bg-white dark:bg-black border-2 border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 sm:p-5 shadow-sm h-full flex flex-col transition-colors duration-300">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-[16px] font-black text-neutral-900 dark:text-white flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-500" /> Editor's Picks
          </h3>
          <p className="text-[11px] font-bold text-neutral-500 dark:text-neutral-400 mt-0.5">Most used tools this week.</p>
        </div>
      </div>
      
      {/* 3x2 Grid for Featured Tools */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 flex-1">
        {FEATURED_TOOLS.map((tool) => (
          <div key={tool.id} className={`${tool.theme.bg} border-2 ${tool.theme.border} rounded-xl p-3 flex flex-col justify-between transition-all group`}>
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 flex items-center justify-center shadow-sm">
                  {tool.icon}
                </div>
                <span className={`text-[8.5px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded border ${tool.theme.badge}`}>
                  {tool.badge}
                </span>
              </div>
              <h4 className="text-[12px] font-black text-neutral-900 dark:text-white mb-0.5 whitespace-nowrap overflow-hidden text-ellipsis">{tool.name}</h4>
              <p className="text-[10px] font-bold text-neutral-600 dark:text-neutral-400 leading-tight mb-3 line-clamp-2">{tool.desc}</p>
            </div>
            <button className={`w-full font-black text-[10.5px] py-1.5 rounded-lg transition-all flex items-center justify-center gap-1 shadow-sm ${tool.theme.btn}`}>
              Launch <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RightWidgets() {
  return (
    <div className="flex flex-col gap-4 h-full">
      
      {/* Coming Soon Box (Pure Black in Dark Mode) */}
      <div className="bg-amber-50 dark:bg-black border-2 border-amber-100 dark:border-neutral-800 rounded-2xl p-4 shadow-sm flex-1 transition-colors duration-300">
        <h3 className="text-[13px] font-black text-amber-950 dark:text-white uppercase tracking-wider flex items-center gap-1.5 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-500" /> Coming Soon
        </h3>
        <div className="flex flex-col gap-3">
          {COMING_SOON.map((tool) => (
            <div key={tool.id} className="bg-white dark:bg-neutral-900 border border-amber-200/60 dark:border-neutral-800 rounded-lg p-2.5 flex items-center gap-2.5 relative group overflow-hidden shadow-sm transition-colors duration-300">
              <div className="absolute inset-0 bg-white/90 dark:bg-black/90 backdrop-blur-[2px] z-10 flex items-center justify-end pr-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-[10px] px-3 py-1.5 rounded flex items-center gap-1.5 shadow-sm transition-colors">
                  <Mail className="w-3.5 h-3.5" /> Notify Me
                </button>
              </div>
              <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-black border border-amber-100 dark:border-neutral-800 flex items-center justify-center shrink-0">
                {tool.icon}
              </div>
              <div>
                <h4 className="text-[12px] font-black text-amber-950 dark:text-white leading-none mb-1">{tool.name}</h4>
                <p className="text-[10px] font-bold text-amber-800/70 dark:text-neutral-400 leading-tight">{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* API CTA (Dark Neutral in Dark Mode) */}
      <div className="bg-neutral-900 dark:bg-neutral-900 border-2 border-neutral-800 dark:border-neutral-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
        <div>
          <h4 className="text-[13px] font-black text-white mb-0.5">Automate Workflows</h4>
          <p className="text-[10px] font-bold text-neutral-400 leading-tight">
            Dedicated endpoints for your dev team.
          </p>
        </div>
        <button className="shrink-0 w-full sm:w-auto bg-sky-500 hover:bg-sky-400 text-white font-bold text-[11px] px-4 py-2 rounded-lg transition-all shadow-sm">
          View API Pricing
        </button>
      </div>

    </div>
  );
}