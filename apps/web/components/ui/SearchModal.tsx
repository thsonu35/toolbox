"use client";

import React, { useEffect } from "react";
import { Search, X } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4"
      onClick={onClose}
    >
      <div 
        className="bg-background border border-border w-full max-w-xl rounded-2xl shadow-2xl p-5 relative flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border/80 pb-3">
          <div className="flex items-center gap-3 w-full">
            <Search className="w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for JSON Formatter, Merge PDF..."
              autoFocus
              className="w-full bg-transparent text-foreground text-base focus:outline-none"
            />
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary cursor-pointer transition-colors border border-transparent hover:border-border/60"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
   
        <div className="pt-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            Quick Links
          </span>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="px-3 py-1.5 bg-secondary/60 text-xs font-medium rounded-lg text-muted-foreground cursor-pointer hover:bg-secondary hover:text-foreground transition-colors">JSON Formatter</span>
            <span className="px-3 py-1.5 bg-secondary/60 text-xs font-medium rounded-lg text-muted-foreground cursor-pointer hover:bg-secondary hover:text-foreground transition-colors">Image Compressor</span>
            <span className="px-3 py-1.5 bg-secondary/60 text-xs font-medium rounded-lg text-muted-foreground cursor-pointer hover:bg-secondary hover:text-foreground transition-colors">PDF Splitter</span>
          </div>
        </div>
      </div>
    </div>
  );
}