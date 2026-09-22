"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoginModal from "@/components/ui/LoginModal";
import SearchModal from "@/components/ui/SearchModal";

import CategoryHero from "@/sections/Category/dynamic/CategoryHero";
import { AboutWidget, LeftWidgets, RightWidgets } from "@/sections/Category/dynamic/CategoryWidgets";
import ToolGrid from "@/sections/Category/dynamic/ToolGrid";

interface CategoryViewProps {
  slug: string;
}

export default function CategoryView({ slug }: CategoryViewProps) {
  const [mounted, setMounted] = useState(false); 
  
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeFilter, setActiveFilter] = useState("All");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("toolbox-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
    
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      localStorage.setItem("toolbox-theme", newTheme ? "dark" : "light");
      if (newTheme) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newTheme;
    });
  };

  const formattedTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  if (!mounted) {
    return <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950" />; 
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 relative overflow-hidden transition-colors duration-300">
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenLogin={() => setIsLoginModalOpen(true)}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1550px] mx-auto pb-12 pt-4">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[11px] font-bold text-neutral-500 dark:text-neutral-400 mb-4 uppercase tracking-wider">
          <Link href="/" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/categories" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Categories</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-neutral-900 dark:text-white font-extrabold">{formattedTitle}</span>
        </nav>

        {/* Top Hero Section */}
        <div className="mb-6">
          <CategoryHero formattedTitle={formattedTitle} />
        </div>

        {/* About Section - Full Width */}
        <div className="mb-8">
          <AboutWidget formattedTitle={formattedTitle} />
        </div>

        {/* Main Content: All Tools Grid */}
        <div className="w-full mb-12">
          <ToolGrid 
            formattedTitle={formattedTitle} 
            viewMode={viewMode} 
            setViewMode={setViewMode} 
            activeFilter={activeFilter} 
            setActiveFilter={setActiveFilter} 
          />
        </div>

        {/* Bottom Split */}
        <div className="flex flex-col lg:flex-row gap-6 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <div className="w-full lg:w-[60%] flex flex-col gap-6 shrink-0">
            <LeftWidgets />
          </div>
          <div className="w-full lg:w-[40%] flex flex-col gap-6">
            <RightWidgets />
          </div>
        </div>

      </div>

      <Footer />
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}