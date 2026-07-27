"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

/* Import Global Layout Components */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoginModal from "@/components/ui/LoginModal";
import SearchModal from "@/components/ui/SearchModal";

/* Import Modularized Category Sections */
import CategoryHero from "@/sections/Category/dynamic/CategoryHero";
import ToolGrid from "@/sections/Category/dynamic/ToolGrid";
import CategorySidebar from "@/sections/Category/dynamic/CategorySidebar";

/* Interface Definitions */
interface CategoryViewProps {
  slug: string;
}

export default function CategoryView({ slug }: CategoryViewProps) {
  /* State Management */
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeFilter, setActiveFilter] = useState("All");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  /* Initialize Theme State */
  useEffect(() => {
    const savedTheme = localStorage.getItem("toolbox-theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  /* Theme Toggle Handler */
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

  /* Helper to format slug to title (e.g., 'developer-suite' -> 'Developer Suite') */
  const formattedTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  /* Render Layout */
  return (
    <div className={`min-h-screen bg-background text-foreground relative overflow-hidden ${isDarkMode ? "dark" : ""}`}>
      
      {/* Global Navbar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenLogin={() => setIsLoginModalOpen(true)}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
      />

      <div className="w-full px-4 sm:px-8 lg:px-12 max-w-[1550px] mx-auto pb-16 pt-6">
        
        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center gap-2 text-[11px] font-bold text-muted-foreground mb-6 uppercase tracking-wider">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-muted-foreground" />
          <Link href="/categories" className="hover:text-foreground transition-colors">Categories</Link>
          <ChevronRight className="w-3 h-3 text-muted-foreground" />
          <span className="text-foreground font-extrabold">{formattedTitle}</span>
        </nav>

        {/* Hero Section Component */}
        <CategoryHero formattedTitle={formattedTitle} />

        {/* Main Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-10">
          
          {/* Left Column: Tools Directory & Grid */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <ToolGrid 
              formattedTitle={formattedTitle} 
              viewMode={viewMode} 
              setViewMode={setViewMode} 
              activeFilter={activeFilter} 
              setActiveFilter={setActiveFilter} 
            />
          </div>

          {/* Right Column: Sidebar & Meta Info */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <CategorySidebar formattedTitle={formattedTitle} />
          </div>

        </div>
      </div>

      {/* Global Footer */}
      <Footer />

      {/* Global Modals */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
      
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />

    </div>
  );
}