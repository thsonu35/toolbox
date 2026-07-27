import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Activity, Mail, ChevronDown } from "lucide-react";

interface CategorySidebarProps {
  formattedTitle: string;
}

const COMING_SOON = [
  { id: 201, name: "GraphQL Debugger", desc: "Inspect and debug GraphQL queries.", icon: <ShieldCheck className="w-5 h-5" /> },
  { id: 202, name: "Webhook Tester", desc: "Catch and inspect webhook payloads.", icon: <Activity className="w-5 h-5" /> },
];

export default function CategorySidebar({ formattedTitle }: CategorySidebarProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-6">
      {/* Upcoming Features */}
      <div className="bg-card border border-border/60 rounded-2xl p-5 shadow-sm">
        <h3 className="text-sm font-black text-foreground mb-4 uppercase tracking-wider text-muted-foreground">Coming Soon</h3>
        <div className="flex flex-col gap-3">
          {COMING_SOON.map((tool) => (
            <div key={tool.id} className="relative bg-secondary/40 border border-border/40 rounded-xl p-4 overflow-hidden group">
              <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px] z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-background border border-border text-foreground font-bold text-xs px-4 py-2 rounded-lg shadow-sm flex items-center gap-1.5 hover:border-sky-500 cursor-pointer">
                  <Mail className="w-3.5 h-3.5" /> Notify Me
                </button>
              </div>
              <div className="opacity-60 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center shrink-0">
                  {tool.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <h4 className="text-sm font-bold text-foreground">{tool.name}</h4>
                    <span className="text-[8px] font-bold uppercase bg-amber-500/10 text-amber-600 px-1.5 py-0.5 rounded">Soon</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground font-medium">{tool.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Information */}
      <div className="bg-card border border-border/60 rounded-2xl p-5 shadow-sm">
        <h3 className="text-base font-black text-foreground mb-2">About {formattedTitle}</h3>
        <p className="text-xs text-muted-foreground font-medium leading-relaxed mb-4">
          This category contains essential utilities for professionals including formatters, decoders, and generators designed to streamline your daily workflow. Everything processes securely in your browser.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="text-[10px] font-bold bg-secondary border border-border/60 px-2.5 py-1 rounded-md text-foreground">Formatting</span>
          <span className="text-[10px] font-bold bg-secondary border border-border/60 px-2.5 py-1 rounded-md text-foreground">Security</span>
          <span className="text-[10px] font-bold bg-secondary border border-border/60 px-2.5 py-1 rounded-md text-foreground">API Tools</span>
          <span className="text-[10px] font-bold bg-secondary border border-border/60 px-2.5 py-1 rounded-md text-foreground">Free</span>
        </div>
      </div>

      {/* Interlinking Categories */}
      <div>
        <h3 className="text-sm font-black text-muted-foreground uppercase tracking-wider mb-3">Related Categories</h3>
        <div className="flex flex-wrap gap-2">
          {["Security", "AI", "Converters", "Text", "Image"].map((cat) => (
            <Link key={cat} href={`/categories/${cat.toLowerCase()}`} className="text-xs font-bold bg-background border border-border hover:border-sky-500/50 hover:bg-secondary px-4 py-2 rounded-xl text-foreground transition-all">
              {cat}
            </Link>
          ))}
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="bg-card border border-border/60 rounded-2xl p-5 shadow-sm">
        <h3 className="text-base font-black text-foreground mb-4">FAQ</h3>
        <div className="flex flex-col gap-2">
          {[
            { q: "What is in this category?", a: "Tools to format, encode, and debug data." },
            { q: "Are these tools client-side?", a: "Yes, 100% processed in your browser for privacy." },
            { q: "Is API access available?", a: "API access is available for enterprise users." }
          ].map((faq, index) => (
            <div key={index} className="border border-border/60 rounded-xl overflow-hidden bg-background">
              <button 
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-center justify-between p-3 text-left hover:bg-secondary transition-colors cursor-pointer"
              >
                <span className="text-xs font-bold text-foreground">{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
              </button>
              {openFaq === index && (
                <div className="p-3 pt-0 text-[11px] font-medium text-muted-foreground border-t border-border/40 bg-secondary/30">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar API Call To Action */}
      <div className="bg-gradient-to-br from-sky-500/10 to-blue-600/10 border border-sky-500/20 rounded-2xl p-5 text-center">
        <h4 className="text-base font-black text-foreground mb-2">Automate with our API</h4>
        <p className="text-xs text-muted-foreground font-medium mb-4">Integrate these exact tools directly into your own applications.</p>
        <div className="flex items-center gap-2">
          <button className="flex-1 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs py-2.5 rounded-xl transition-colors cursor-pointer">
            Get API Key
          </button>
          <button className="flex-1 bg-background border border-border hover:bg-secondary text-foreground font-bold text-xs py-2.5 rounded-xl transition-colors cursor-pointer">
            Docs
          </button>
        </div>
      </div>
    </div>
  );
}