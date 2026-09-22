"use client";

import React from "react";
import { ArrowRight, Sparkles, Zap, ShieldCheck, Cpu } from "lucide-react";
import CustomButton from "../../components/ui/CustomButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-16 bg-gradient-to-br from-sky-100/90 via-sky-50/60 to-blue-100/70 dark:from-sky-950/60 dark:via-background dark:to-blue-950/40">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-400/15 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Main Container */}
      <div className="w-full px-6 sm:px-12 lg:px-20 max-w-[1400px] mx-auto relative z-10 pb-12">
        
        {/* Centered Compact Content Wrapper (Wider text layout, compact vertical space) */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Top Trust Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sky-200/60 dark:bg-sky-900/60 border border-sky-300 dark:border-sky-700 text-xs sm:text-sm font-semibold text-sky-950 dark:text-sky-100 mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <span>Trusted by 500,000+ users worldwide</span>
          </div>

          {/* Large Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-4">
            Everything You Need <br className="hidden sm:inline" />
            in One <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 dark:from-sky-400 dark:to-blue-400">Toolbox</span>
          </h1>

          {/* Short Description */}
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 leading-relaxed font-normal max-w-3xl">
            Free online tools for developers, students, creators, businesses, and professionals. Instant, secure, and built for speed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 w-full mb-8">
            <CustomButton
              text="Explore Tools"
              href="#tools"
              icon={<ArrowRight className="w-5 h-5" />}
              variant="primary"
              className="text-sm sm:text-base px-7 py-3 shadow-lg shadow-sky-500/25 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white font-semibold transition-all hover:scale-105 active:scale-95"
            />
            <CustomButton
              text="Browse Categories"
              href="#categories"
              variant="secondary"
              className="text-sm sm:text-base px-7 py-3 shadow-sm bg-background/90 hover:bg-background border border-sky-200 dark:border-sky-800 transition-all font-semibold"
            />
          </div>

          {/* Mini Feature Highlights Footer */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-muted-foreground pt-5 border-t border-sky-200/80 dark:border-sky-800/60 w-full">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span className="font-semibold text-foreground">Lightning Fast</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span className="font-semibold text-foreground">100% Secure & Free</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span className="font-semibold text-foreground">AI Powered</span>
            </div>
          </div>

        </div>

      </div>

      {/* Cloud-like Blurry & Fading Bottom Transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-background via-sky-100/50 dark:via-background/40 to-transparent pointer-events-none z-20" />
    </section>
  );
}