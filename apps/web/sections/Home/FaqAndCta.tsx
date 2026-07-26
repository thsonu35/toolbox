"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, ShieldCheck, Sparkles, HelpCircle, CheckCircle2 } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
  colors: {
    activeBg: string;
    activeBorder: string;
    activeText: string;
    iconBg: string;
    hoverBorder: string;
  };
}

const FAQS: FAQItem[] = [
  {
    q: "Is Toolbox completely free to use?",
    a: "Yes! All standard micro-utilities are 100% free with no hidden usage caps, paywalls, or forced sign-ups required.",
    colors: {
      activeBg: "bg-sky-500/10",
      activeBorder: "border-sky-500 shadow-sky-500/20",
      activeText: "text-sky-600 dark:text-sky-400",
      iconBg: "bg-sky-500 text-white",
      hoverBorder: "hover:border-sky-500/40",
    },
  },
  {
    q: "Do you store uploaded files or text payloads on your servers?",
    a: "No. Security and privacy are primary constraints. Almost all tools process payloads 100% in your browser memory. Temporary server tasks purge files instantly.",
    colors: {
      activeBg: "bg-emerald-500/10",
      activeBorder: "border-emerald-500 shadow-emerald-500/20",
      activeText: "text-emerald-600 dark:text-emerald-400",
      iconBg: "bg-emerald-500 text-white",
      hoverBorder: "hover:border-emerald-500/40",
    },
  },
  {
    q: "Do I need an account to use the tools?",
    a: "Not at all. You can access, execute, and copy outputs from any micro-app instantly without registering.",
    colors: {
      activeBg: "bg-purple-500/10",
      activeBorder: "border-purple-500 shadow-purple-500/20",
      activeText: "text-purple-600 dark:text-purple-400",
      iconBg: "bg-purple-500 text-white",
      hoverBorder: "hover:border-purple-500/40",
    },
  },
  {
    q: "Can I use Toolbox outputs for commercial projects?",
    a: "Yes, all files, formats, and code generated using Toolbox are yours to use commercially without restrictions.",
    colors: {
      activeBg: "bg-amber-500/10",
      activeBorder: "border-amber-500 shadow-amber-500/20",
      activeText: "text-amber-600 dark:text-amber-400",
      iconBg: "bg-amber-500 text-white",
      hoverBorder: "hover:border-amber-500/40",
    },
  },
  {
    q: "How often are new tools added?",
    a: "We deploy new developer, PDF, and media utilities weekly based on community feedback and workflow trends.",
    colors: {
      activeBg: "bg-rose-500/10",
      activeBorder: "border-rose-500 shadow-rose-500/20",
      activeText: "text-rose-600 dark:text-rose-400",
      iconBg: "bg-rose-500 text-white",
      hoverBorder: "hover:border-rose-500/40",
    },
  },
];

export default function FaqAndCta() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 sm:py-16 bg-background relative overflow-hidden">
      <div className="w-full px-6 sm:px-12 lg:px-20 max-w-[1550px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: FAQ Accordion (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-foreground text-[10px] font-black uppercase tracking-wider mb-2.5 border border-border">
                <HelpCircle className="w-3.5 h-3.5 text-sky-500" />
                <span>Frequently Asked Questions</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground mb-6">
                Got Questions? We've Got Answers.
              </h2>

              <div className="space-y-3">
                {FAQS.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div
                      key={index}
                      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                        isOpen
                          ? `${faq.colors.activeBorder} ${faq.colors.activeBg} shadow-md`
                          : `bg-card border-border/80 ${faq.colors.hoverBorder}`
                      }`}
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className={`w-full text-left px-4 py-3.5 flex items-center justify-between font-extrabold text-sm sm:text-base transition-colors ${
                          isOpen ? faq.colors.activeText : "text-foreground"
                        }`}
                      >
                        <span className="pr-3">{faq.q}</span>
                        <div
                          className={`p-1 rounded-lg transition-all duration-300 ${
                            isOpen
                              ? `${faq.colors.iconBg} shadow-sm rotate-180`
                              : "bg-secondary text-muted-foreground"
                          }`}
                        >
                          <ChevronDown className="w-3.5 h-3.5 shrink-0 transition-transform" />
                        </div>
                      </button>

                      {/* Dropdown Content */}
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-4 pb-4 text-xs sm:text-sm text-foreground/80 leading-relaxed font-medium">
                            {faq.a}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Deep Dark CTA Box (5 Cols) */}
          <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            {/* Dark Mode Neon Glows */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-sky-500/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-purple-600/20 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sky-300 text-[10px] font-black uppercase tracking-wider mb-4 shadow-sm backdrop-blur-md">
                <Sparkles className="w-3 h-3 text-purple-400 fill-purple-400" />
                <span>Supercharge Your Workflow</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight mb-3">
                Ready to simplify your daily work?
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                Join thousands of developers, creators, and students who rely on Toolbox for lightning-fast, secure micro-apps.
              </p>

              {/* White Checkmarks for Dark BG */}
              <div className="space-y-2.5 mb-6">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>500+ Online Tools Ready To Use</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>100% In-Browser & Private Sandbox</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No Registration Required</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-slate-800/80">
              <div className="flex flex-col sm:flex-row gap-2.5 mb-4">
                <Link
                  href="#tools"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-extrabold text-xs sm:text-sm py-3 px-5 rounded-xl transition-all shadow-md shadow-sky-500/20 active:scale-95"
                >
                  <span>Explore All Tools</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/login"
                  className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-extrabold text-xs sm:text-sm py-3 px-5 rounded-xl transition-all"
                >
                  <span>Sign In</span>
                </Link>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Installation • Always Free</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}