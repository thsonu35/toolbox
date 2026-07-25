"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Wrench, Heart, Send, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-card border-t border-border/80 pt-12 pb-8 overflow-hidden text-muted-foreground">
      {/* Background Gradient Glows */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="w-full px-6 sm:px-12 lg:px-20 max-w-[1550px] mx-auto">
        
        {/* Top Feature Banner & Newsletter CTA */}
        <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-purple-500/10 border border-sky-500/20 shadow-lg backdrop-blur-md">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-600 dark:text-sky-400 text-[10px] font-bold uppercase tracking-wider mb-2">
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>Stay Ahead With New Micro-Tools</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-foreground">
                Get notified when we drop new tools
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-medium">
                No spam ever. Just high-utility developer & media tools delivered to your inbox.
              </p>
            </div>

            {/* Newsletter Input Box */}
            <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex-1 max-w-md">
              {subscribed ? (
                <div className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>You're subscribed! Welcome aboard.</span>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-2 bg-background/90 p-1.5 rounded-2xl border border-border shadow-inner">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent px-3.5 py-2 text-xs sm:text-sm text-foreground focus:outline-none placeholder:text-muted-foreground/60 font-medium"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Main Footer Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          
          {/* Brand & Mission Column */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 font-black text-xl text-foreground mb-3 group">
              <div className="p-2 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-md group-hover:scale-105 transition-transform">
                <Wrench className="w-4 h-4" />
              </div>
              <span className="tracking-tight">TOOLBOX</span>
            </Link>

            <p className="text-xs sm:text-sm text-muted-foreground max-w-sm mb-4 leading-relaxed font-medium">
              Empowering 500,000+ developers, creators, and students with 100% free, browser-first, lightning-fast utilities.
            </p>

            {/* System Operational Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>All Systems Operational (100% Uptime)</span>
            </div>

            {/* Glowing Social Media Badges */}
            <div className="flex items-center gap-2.5">
              {/* GitHub */}
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-secondary/80 hover:bg-sky-500/10 hover:text-sky-500 border border-border/80 transition-all hover:scale-110 text-foreground"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>

              {/* X / Twitter */}
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Twitter" 
                className="p-2.5 rounded-xl bg-secondary/80 hover:bg-sky-500/10 hover:text-sky-500 border border-border/80 transition-all hover:scale-110 text-foreground"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="LinkedIn" 
                className="p-2.5 rounded-xl bg-secondary/80 hover:bg-sky-500/10 hover:text-sky-500 border border-border/80 transition-all hover:scale-110 text-foreground"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-extrabold text-foreground mb-3 text-[11px] uppercase tracking-widest text-sky-600 dark:text-sky-400">
              Tool Suites
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li><Link href="#tools" className="hover:text-sky-500 transition-colors">Popular Utilities</Link></li>
              <li><Link href="#categories" className="hover:text-sky-500 transition-colors">Developer Tools</Link></li>
              <li><Link href="#categories" className="hover:text-sky-500 transition-colors">PDF Suite</Link></li>
              <li><Link href="#categories" className="hover:text-sky-500 transition-colors">Image & Media</Link></li>
              <li><Link href="#categories" className="hover:text-sky-500 transition-colors">AI Prompt Studio</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-extrabold text-foreground mb-3 text-[11px] uppercase tracking-widest text-sky-600 dark:text-sky-400">
              Developers
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li><Link href="/docs" className="hover:text-sky-500 transition-colors">API Docs</Link></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-sky-500 transition-colors">GitHub Repository</a></li>
              <li><Link href="/changelog" className="hover:text-sky-500 transition-colors">Changelog & Release</Link></li>
              <li><Link href="/status" className="hover:text-sky-500 transition-colors">System Status</Link></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h4 className="font-extrabold text-foreground mb-3 text-[11px] uppercase tracking-widest text-sky-600 dark:text-sky-400">
              Legal & Info
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li><Link href="/about" className="hover:text-sky-500 transition-colors">About Us</Link></li>
              <li><Link href="/privacy" className="hover:text-sky-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-sky-500 transition-colors">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:text-sky-500 transition-colors">Contact Support</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Security & Copyright */}
        <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-semibold">
          <div className="flex items-center gap-2 text-muted-foreground">
            <ShieldCheck className="w-4 h-4 text-sky-500" />
            <span>100% Client-Side Encryption — Zero Data Retention</span>
          </div>

          <div className="flex items-center gap-1.5 text-muted-foreground">
            <span>© {new Date().getFullYear()} Toolbox Inc. Crafted with</span>
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 inline" />
            <span>for global developers</span>
          </div>
        </div>

      </div>
    </footer>
  );
}