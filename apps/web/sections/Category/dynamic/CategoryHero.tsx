import React from "react";
import { Search, Code2, Zap, Activity, CheckCircle, RefreshCw, Cpu, ShieldCheck, FileText, Image as ImageIcon, Video, Music, Type, Calculator, Sparkles } from "lucide-react";

interface CategoryHeroProps {
  formattedTitle: string;
}

// Slightly dialed-back balanced theme configuration
const getCategoryTheme = (title: string) => {
  const t = title.toLowerCase();
  
  if (t.includes("pdf")) {
    return {
      icon: <FileText className="w-9 h-9 text-rose-500" />,
      badgeBg: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/25",
      accentGlow: "bg-rose-500/10",
      gradientBg: "from-rose-500/10 via-orange-500/[0.03] to-transparent",
      tagline: "High-performance document processing, merging, and compression engine."
    };
  }
  if (t.includes("image")) {
    return {
      icon: <ImageIcon className="w-9 h-9 text-emerald-500" />,
      badgeBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25",
      accentGlow: "bg-emerald-500/10",
      gradientBg: "from-emerald-500/10 via-teal-500/[0.03] to-transparent",
      tagline: "Advanced pixel manipulation, bulk compression, and format conversion."
    };
  }
  if (t.includes("video")) {
    return {
      icon: <Video className="w-9 h-9 text-blue-500" />,
      badgeBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/25",
      accentGlow: "bg-blue-500/10",
      gradientBg: "from-blue-500/10 via-indigo-500/[0.03] to-transparent",
      tagline: "Lightning-fast media encoding, compression, and GIF extraction."
    };
  }
  if (t.includes("audio")) {
    return {
      icon: <Music className="w-9 h-9 text-pink-500" />,
      badgeBg: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/25",
      accentGlow: "bg-pink-500/10",
      gradientBg: "from-pink-500/10 via-purple-500/[0.03] to-transparent",
      tagline: "Lossless audio track trimming, conversion, and pitch manipulation."
    };
  }
  if (t.includes("security") || t.includes("hash")) {
    return {
      icon: <ShieldCheck className="w-9 h-9 text-indigo-500" />,
      badgeBg: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/25",
      accentGlow: "bg-indigo-500/10",
      gradientBg: "from-indigo-500/10 via-purple-500/[0.03] to-transparent",
      tagline: "Cryptographic hash generation, secure password auditing, and tokens."
    };
  }
  if (t.includes("text")) {
    return {
      icon: <Type className="w-9 h-9 text-teal-500" />,
      badgeBg: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/25",
      accentGlow: "bg-teal-500/10",
      gradientBg: "from-teal-500/10 via-emerald-500/[0.03] to-transparent",
      tagline: "Comprehensive string transformation, case conversion, and word metrics."
    };
  }
  if (t.includes("calculator")) {
    return {
      icon: <Calculator className="w-9 h-9 text-cyan-500" />,
      badgeBg: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/25",
      accentGlow: "bg-cyan-500/10",
      gradientBg: "from-cyan-500/10 via-sky-500/[0.03] to-transparent",
      tagline: "Precision financial calculators, percentage metrics, and ratios."
    };
  }

  // Developer / Default Suite
  return {
    icon: <Code2 className="w-9 h-9 text-sky-500" />,
    badgeBg: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/25",
    accentGlow: "bg-sky-500/10",
    gradientBg: "from-sky-500/10 via-indigo-500/[0.03] to-transparent",
    tagline: "Professional-grade utilities designed for instant client-side processing."
  };
};

export default function CategoryHero({ formattedTitle }: CategoryHeroProps) {
  const theme = getCategoryTheme(formattedTitle);

  return (
    <div className="flex flex-col gap-6 pt-2">
      
      {/* Unified Banner with Pure Black/White base and vibrant tint */}
      <div className={`relative bg-gradient-to-br ${theme.gradientBg} bg-white dark:bg-black border-2 border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-xl overflow-hidden flex flex-col gap-8 backdrop-blur-xl`}>
        
        {/* Soft Ambient Glow */}
        <div className={`absolute top-0 right-1/4 w-[450px] h-[220px] ${theme.accentGlow} blur-[120px] pointer-events-none rounded-full`} />

        {/* Top Header Content Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          
          <div className="flex items-center gap-5 sm:gap-6">
            {/* Unique Category Icon Container */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white dark:bg-black border-2 border-neutral-200 dark:border-neutral-800 shadow-md flex items-center justify-center shrink-0">
              {theme.icon}
            </div>

            <div className="flex flex-col gap-2">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest w-fit ${theme.badgeBg}`}>
                <Sparkles className="w-3 h-3" /> Verified Suite
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
                {formattedTitle}
              </h1>
              <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm font-medium leading-relaxed max-w-xl">
                {theme.tagline}
              </p>
            </div>
          </div>

          {/* Live Metrics Showcase Box */}
          <div className="flex sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
            <div className="flex-1 sm:flex-none flex items-center justify-between gap-6 px-4 py-3 rounded-2xl bg-white/90 dark:bg-black/90 border border-neutral-200 dark:border-neutral-800 shadow-xs">
              <span className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Total Utilities</span>
              <span className="text-base font-black text-neutral-900 dark:text-white">48 Tools</span>
            </div>
            <div className="flex-1 sm:flex-none flex items-center justify-between gap-6 px-4 py-3 rounded-2xl bg-white/90 dark:bg-black/90 border border-neutral-200 dark:border-neutral-800 shadow-xs">
              <span className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Monthly Users</span>
              <span className="text-base font-black text-emerald-600 dark:text-emerald-400">2.1M+</span>
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800 relative z-10" />

        {/* Telemetry Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          {[
            { 
              label: "System Uptime", 
              value: "99.99%", 
              subtext: "Operational",
              icon: <Zap className="w-4 h-4 text-amber-500" />,
              cardBg: "bg-amber-500/[0.04] border-amber-500/25 hover:border-amber-500/50"
            },
            { 
              label: "Execution Speed", 
              value: "< 50ms", 
              subtext: "Client-Side",
              icon: <Activity className="w-4 h-4 text-emerald-500" />,
              cardBg: "bg-emerald-500/[0.04] border-emerald-500/25 hover:border-emerald-500/50"
            },
            { 
              label: "Security Index", 
              value: "100%", 
              subtext: "Zero Logs",
              icon: <ShieldCheck className="w-4 h-4 text-indigo-500" />,
              cardBg: "bg-indigo-500/[0.04] border-indigo-500/25 hover:border-indigo-500/50"
            },
            { 
              label: "Engine Version", 
              value: "v4.2.0", 
              subtext: "Stable",
              icon: <Cpu className="w-4 h-4 text-purple-500" />,
              cardBg: "bg-purple-500/[0.04] border-purple-500/25 hover:border-purple-500/50"
            },
          ].map((stat, idx) => (
            <div key={idx} className={`border-2 rounded-2xl p-4 shadow-xs transition-all flex flex-col justify-between ${stat.cardBg} bg-white/50 dark:bg-black/50 backdrop-blur-md group`}>
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-xl bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  {stat.icon}
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800">
                  {stat.subtext}
                </span>
              </div>
              <div>
                <h4 className="text-lg font-black text-neutral-900 dark:text-white tracking-tight mb-0.5">{stat.value}</h4>
                <p className="text-[10px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}