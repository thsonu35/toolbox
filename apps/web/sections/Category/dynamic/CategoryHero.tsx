import React from "react";
import { Search, Code2, Zap, Activity, CheckCircle, RefreshCw } from "lucide-react";

interface CategoryHeroProps {
  formattedTitle: string;
}

export default function CategoryHero({ formattedTitle }: CategoryHeroProps) {
  return (
    <div className="flex flex-col gap-8 pt-2">
      {/* Top Header Layout */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        <div className="flex-1 w-full">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-card border border-border shadow-xl flex items-center justify-center shrink-0">
              <Code2 className="w-12 h-12 text-sky-600 dark:text-sky-400" />
            </div>
            <div className="pt-2">
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground mb-3">
                {formattedTitle}
              </h1>
              <div className="flex items-center gap-6 text-muted-foreground font-medium text-sm">
                <div><span className="block text-xl font-black text-foreground">48</span> Tools</div>
                <div><span className="block text-xl font-black text-foreground">2.1M</span> Monthly Uses</div>
                <div><span className="block text-xl font-black text-foreground">Weekly</span> Updated</div>
              </div>
            </div>
          </div>

          {/* Search and Action Buttons */}
          <div className="max-w-xl">
            <div className="relative flex items-center mb-4">
              <Search className="w-4 h-4 absolute left-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder={`Search tools in ${formattedTitle}...`}
                className="w-full bg-card border border-border rounded-xl pl-11 pr-12 py-3.5 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-lg"
              />
              <div className="absolute right-3 px-2 py-1 rounded bg-secondary text-[10px] font-bold text-muted-foreground border border-border">
                ⌘ K
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex-1 bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm py-3 px-4 rounded-xl transition-colors shadow-md cursor-pointer">
                Explore All Tools
              </button>
              <button className="flex-1 bg-card hover:bg-secondary text-foreground font-bold text-sm py-3 px-4 rounded-xl transition-colors shadow-md border border-border cursor-pointer">
                API Documentation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "System Uptime", value: "99.99%", icon: <Zap className="w-4 h-4 text-sky-500" /> },
          { label: "Avg. Response", value: "500ms", icon: <Activity className="w-4 h-4 text-emerald-500" /> },
          { label: "Success Rate", value: "99.8%", icon: <CheckCircle className="w-4 h-4 text-indigo-500" /> },
          { label: "Data Refresh", value: "Weekly", icon: <RefreshCw className="w-4 h-4 text-purple-500" /> },
        ].map((stat, idx) => (
          <div key={idx} className="bg-card border border-border/60 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center mb-3">
              {stat.icon}
            </div>
            <h4 className="text-xl font-black text-foreground">{stat.value}</h4>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}