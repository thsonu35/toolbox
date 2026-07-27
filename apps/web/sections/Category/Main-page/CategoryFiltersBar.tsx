import React from "react";
import { LayoutGrid, Code2, FileText, Image as ImageIcon, Video, ShieldCheck, Type, ArrowLeftRight, Database } from "lucide-react";

interface CategoryFiltersBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function CategoryFiltersBar({ activeTab, setActiveTab }: CategoryFiltersBarProps) {
  const filterTabs = [
    { name: "All Categories", icon: <LayoutGrid className="w-4 h-4 text-sky-600 dark:text-sky-400" /> },
    { name: "Developer", icon: <Code2 className="w-4 h-4 text-sky-500" /> },
    { name: "PDF Tools", icon: <FileText className="w-4 h-4 text-rose-500" /> },
    { name: "Image Tools", icon: <ImageIcon className="w-4 h-4 text-emerald-500" /> },
    { name: "Video Tools", icon: <Video className="w-4 h-4 text-blue-500" /> },
    { name: "Security", icon: <ShieldCheck className="w-4 h-4 text-indigo-500" /> },
    { name: "Text Tools", icon: <Type className="w-4 h-4 text-teal-500" /> },
    { name: "Converter", icon: <ArrowLeftRight className="w-4 h-4 text-amber-500" /> },
    { name: "Database", icon: <Database className="w-4 h-4 text-purple-500" /> },
  ];

  return (
    <div className="sticky top-16 z-30 bg-background/95 backdrop-blur-xl border-b-2 border-border/80 shadow-sm py-4">
      <div className="w-full px-4 sm:px-8 lg:px-12 max-w-[1550px] mx-auto flex items-center justify-between gap-3 overflow-x-auto no-scrollbar">
        
        {/* Filter Pills with increased text and font weight */}
        <div className="flex items-center gap-2.5 sm:gap-3 w-full justify-between min-w-max lg:min-w-0">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.name;
            return (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`inline-flex items-center gap-2.5 px-4 py-3 rounded-2xl text-xs sm:text-[13px] font-black transition-all cursor-pointer border-2 flex-1 justify-center whitespace-nowrap ${
                  isActive 
                    ? "bg-card text-foreground border-sky-500 shadow-md shadow-sky-500/20 ring-2 ring-sky-500/30" 
                    : "bg-card hover:bg-secondary/80 text-foreground border-border/80 hover:border-sky-500/50 shadow-2xs"
                }`}
              >
                <span className="p-1.5 rounded-xl bg-secondary border border-border/60">
                  {tab.icon}
                </span>
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}