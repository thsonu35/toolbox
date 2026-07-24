"use client";

import React from "react";
import { ArrowRight, Sparkles, Zap, ShieldCheck, Cpu } from "lucide-react";
import CustomButton from "@/components/ui/CustomButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-6 lg:py-10 bg-background">
      {/* Soft Background Blue Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-sky-500/15 dark:bg-sky-500/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Main Container */}
      <div className="w-full px-6 sm:px-12 lg:px-20 max-w-[1550px] mx-auto">
        
        {/* Prominent Blue Gradient Highlight Box */}
        <div className="relative bg-gradient-to-br from-sky-100/90 via-sky-50/60 to-blue-100/70 dark:from-sky-950/60 dark:via-card dark:to-blue-950/40 border-2 border-sky-300/80 dark:border-sky-700/60 rounded-[2.5rem] px-6 py-8 sm:px-10 sm:py-12 lg:px-14 lg:py-14 shadow-2xl overflow-hidden">
          
          {/* Vibrant corner aura gradients */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-400/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Content Column (span-7) */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              
              {/* Top Trust Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-sky-100 dark:bg-sky-900/60 border border-sky-300 dark:border-sky-700 text-sm sm:text-base font-semibold text-sky-950 dark:text-sky-100 mb-5 shadow-sm">
                <Sparkles className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>Trusted by 500,000+ users worldwide</span>
              </div>

              {/* Large Heading */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-5">
                Everything You Need <br className="hidden sm:inline" />
                in One <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 dark:from-sky-400 dark:to-blue-400">Toolbox</span>
              </h1>

              {/* Short Description */}
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mb-8 leading-relaxed font-normal">
                Free online tools for developers, students, creators, businesses, and professionals. Instant, secure, and built for speed.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 w-full mb-8">
                <CustomButton
                  text="Explore Tools"
                  href="#tools"
                  icon={<ArrowRight className="w-5 h-5" />}
                  variant="primary"
                  className="text-base sm:text-lg px-8 py-4 shadow-lg shadow-sky-500/25 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white font-semibold transition-all"
                />
                <CustomButton
                  text="Browse Categories"
                  href="#categories"
                  variant="secondary"
                  className="text-base sm:text-lg px-8 py-4 shadow-sm bg-background/90 hover:bg-background border border-sky-200 dark:border-sky-800 transition-all font-semibold"
                />
              </div>

              {/* Mini Feature Highlights Footer */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm sm:text-base text-muted-foreground pt-5 border-t border-sky-200/80 dark:border-sky-800/60 w-full">
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

            {/* Right Image Column (span-5) - Image scaled up & prominent */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative w-full max-w-xl aspect-square flex items-center justify-center p-2">
                
                {/* Large 3D Image */}
                <img
                  src="/toolbox.png" 
                  alt="Toolbox 3D Illustration"
                  className="w-full h-full object-contain scale-125 lg:scale-140 drop-shadow-[0_25px_35px_rgba(14,165,233,0.3)] transition-transform duration-300 hover:scale-145"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}