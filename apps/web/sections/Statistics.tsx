"use client";

import React from "react";
import { Wrench, FileCheck, Users, ShieldCheck, Activity } from "lucide-react";

interface StatItem {
  id: string;
  value: string;
  label: string;
  subtext: string;
  icon: React.ReactNode;
  iconColor: string;
  gradient: string;
  hoverBorder: string;
  bgGlow: string;
}

const STATS: StatItem[] = [
  {
    id: "tools",
    value: "150+",
    label: "Active Utilities",
    subtext: "Across 12 categories",
    icon: <Wrench className="w-3.5 h-3.5" />,
    iconColor: "text-sky-500",
    gradient: "from-sky-500 to-blue-600 dark:from-sky-400 dark:to-blue-500",
    hoverBorder: "hover:border-sky-500/50 hover:shadow-[0_0_20px_rgba(14,165,233,0.15)]",
    bgGlow: "bg-sky-500",
  },
  {
    id: "processed",
    value: "500K+",
    label: "Files Processed",
    subtext: "Zero retention",
    icon: <FileCheck className="w-3.5 h-3.5" />,
    iconColor: "text-emerald-500",
    gradient: "from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500",
    hoverBorder: "hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]",
    bgGlow: "bg-emerald-500",
  },
  {
    id: "users",
    value: "50K+",
    label: "Monthly Users",
    subtext: "Global professionals",
    icon: <Users className="w-3.5 h-3.5" />,
    iconColor: "text-purple-500",
    gradient: "from-purple-500 to-pink-600 dark:from-purple-400 dark:to-pink-500",
    hoverBorder: "hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]",
    bgGlow: "bg-purple-500",
  },
  {
    id: "uptime",
    value: "99.9%",
    label: "Edge Uptime",
    subtext: "Real-time execution",
    icon: <ShieldCheck className="w-3.5 h-3.5" />,
    iconColor: "text-amber-500",
    gradient: "from-amber-500 to-orange-600 dark:from-amber-400 dark:to-orange-500",
    hoverBorder: "hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]",
    bgGlow: "bg-amber-500",
  },
];

export default function Statistics() {
  return (
    <section className="py-8 sm:py-12 bg-background relative border-y border-border/60 flex items-center justify-center overflow-hidden">
      
      {/* Subtle Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-sky-500/5 dark:bg-sky-500/10 rounded-full blur-[80px] pointer-events-none -z-10" />

      <div className="w-full px-6 sm:px-12 lg:px-20 max-w-[1550px] mx-auto relative z-10">
        
        {/* Minimal Compact Header */}
        <div className="text-center max-w-lg mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary border border-border text-[9px] font-mono font-bold uppercase tracking-wider mb-2 shadow-sm text-foreground">
            <Activity className="w-2.5 h-2.5 text-sky-500" />
            <span>Platform Scale</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-foreground">
            Trusted by the <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-500">Community.</span>
          </h2>
        </div>

        {/* Circular Orbs Layout */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Decorative Connecting Line (Visible on Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] -translate-y-1/2 border-t border-dashed border-border/60 -z-10" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 relative z-10">
            {STATS.map((stat) => (
              <div 
                key={stat.id} 
                className={`group relative flex flex-col items-center justify-center text-center p-3.5 aspect-square w-full max-w-[160px] mx-auto rounded-full bg-card/60 backdrop-blur-md border border-border/80 transition-all duration-300 hover:-translate-y-1 cursor-default shadow-sm ${stat.hoverBorder}`}
              >
                {/* Background Hover Glow inside the circle */}
                <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-[0.03] dark:group-hover:opacity-[0.08] transition-opacity duration-300 pointer-events-none ${stat.bgGlow}`} />

                {/* Floating Icon */}
                <div className={`mb-1.5 p-2 rounded-full bg-secondary border border-border/80 transition-transform duration-300 group-hover:-translate-y-0.5 shadow-sm ${stat.iconColor}`}>
                  {stat.icon}
                </div>

                {/* Main Gradient Number */}
                <h3 className={`text-2xl sm:text-3xl font-black tracking-tighter mb-0.5 bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 leading-none`}>
                  {stat.value}
                </h3>

                {/* Text Content */}
                <div>
                  <p className="text-[10px] font-extrabold text-foreground mb-0.5 leading-tight">
                    {stat.label}
                  </p>
                  <p className="text-[8px] text-muted-foreground font-medium px-2 leading-tight">
                    {stat.subtext}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}