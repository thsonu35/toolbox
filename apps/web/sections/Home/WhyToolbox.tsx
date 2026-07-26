"use client";

import React from "react";
import { Zap, ShieldCheck, HeartHandshake, Laptop, Lock, Sparkles, Cpu } from "lucide-react";

interface Feature {
  title: string;
  desc: string;
  icon: React.ReactNode;
  cardBg: string;
  iconBg: string;
  iconColor: string;
  hoverBorder: string;
}

const FEATURES: Feature[] = [
  {
    title: "Fast Processing",
    desc: "Files and text payloads are processed in milliseconds with zero server lag.",
    icon: <Zap className="w-5 h-5" />,
    cardBg: "bg-amber-500/[0.03] dark:bg-amber-500/[0.06]",
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-500",
    hoverBorder: "hover:border-amber-500/60 hover:shadow-amber-500/20",
  },
  {
    title: "Privacy First",
    desc: "100% client-side execution. Uploaded files are purged instantly.",
    icon: <ShieldCheck className="w-5 h-5" />,
    cardBg: "bg-emerald-500/[0.03] dark:bg-emerald-500/[0.06]",
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-500",
    hoverBorder: "hover:border-emerald-500/60 hover:shadow-emerald-500/20",
  },
  {
    title: "Always Free",
    desc: "Standard micro-utilities are completely free without mandatory sign-ups.",
    icon: <HeartHandshake className="w-5 h-5" />,
    cardBg: "bg-rose-500/[0.03] dark:bg-rose-500/[0.06]",
    iconBg: "bg-rose-500/15",
    iconColor: "text-rose-500",
    hoverBorder: "hover:border-rose-500/60 hover:shadow-rose-500/20",
  },
  {
    title: "Cross Platform",
    desc: "Works seamlessly on desktop, tablet, mobile, and all modern browsers.",
    icon: <Laptop className="w-5 h-5" />,
    cardBg: "bg-sky-500/[0.03] dark:bg-sky-500/[0.06]",
    iconBg: "bg-sky-500/15",
    iconColor: "text-sky-500",
    hoverBorder: "hover:border-sky-500/60 hover:shadow-sky-500/20",
  },
  {
    title: "No Installation",
    desc: "Everything works directly in your browser without downloading heavy software.",
    icon: <Lock className="w-5 h-5" />,
    cardBg: "bg-indigo-500/[0.03] dark:bg-indigo-500/[0.06]",
    iconBg: "bg-indigo-500/15",
    iconColor: "text-indigo-500",
    hoverBorder: "hover:border-indigo-500/60 hover:shadow-indigo-500/20",
  },
  {
    title: "Modern UI",
    desc: "Clean, bold, and distraction-free interface built for maximum efficiency.",
    icon: <Sparkles className="w-5 h-5" />,
    cardBg: "bg-purple-500/[0.03] dark:bg-purple-500/[0.06]",
    iconBg: "bg-purple-500/15",
    iconColor: "text-purple-500",
    hoverBorder: "hover:border-purple-500/60 hover:shadow-purple-500/20",
  },
];

export default function WhyToolbox() {
  return (
    <section className="py-12 sm:py-16 bg-background relative overflow-hidden border-y border-border/60">
      
      {/* Background Soft Ambient Glows */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="w-full px-6 sm:px-12 lg:px-20 max-w-[1550px] mx-auto relative z-10">
        
        {/* Balanced Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/10 via-sky-500/10 to-purple-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-extrabold uppercase tracking-widest mb-3 shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-emerald-500" />
            <span>Why Choose Toolbox</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-foreground mb-2">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-sky-500 to-purple-500">Speed & Trust</span>
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-muted-foreground">
            No complex setups. Streamlined experience to handle tasks securely.
          </p>
        </div>

        {/* Colorful Grid with Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((feat, idx) => (
            <div
              key={idx}
              className={`flex flex-col p-5 sm:p-6 rounded-2xl ${feat.cardBg} border border-border/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${feat.hoverBorder}`}
            >
              <div className="flex items-center gap-3.5 mb-3">
                <div className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center shadow-inner ${feat.iconBg} ${feat.iconColor}`}>
                  {feat.icon}
                </div>
                <h3 className="text-base sm:text-lg font-black text-foreground tracking-tight">
                  {feat.title}
                </h3>
              </div>
              
              <p className="text-xs sm:text-sm font-medium text-muted-foreground leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}