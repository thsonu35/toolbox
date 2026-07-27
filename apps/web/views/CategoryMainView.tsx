"use client";

import React, { useState, useEffect } from "react";

/* Global Layout Components */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoginModal from "@/components/ui/LoginModal";
import SearchModal from "@/components/ui/SearchModal";

/* Modularized All Categories Sections */
import CategoriesHero from "@/sections/Category/Main-page/CategoriesHero";
import CategoryFiltersBar from "@/sections/Category/Main-page/CategoryFiltersBar";
import CategoriesGrid from "@/sections/Category/Main-page/CategoriesGrid";

export default function CategoryMainView() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("All Categories");

  useEffect(() => {
    const savedTheme = localStorage.getItem("toolbox-theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
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

  return (
    <div className={`min-h-screen bg-background text-foreground relative overflow-hidden ${isDarkMode ? "dark" : ""}`}>
      
      {/* Navbar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenLogin={() => setIsLoginModalOpen(true)}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
      />

      {/* Hero Section */}
      <CategoriesHero />

      {/* Category Filter Pills Bar */}
      <CategoryFiltersBar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Categories Grid Section */}
      <CategoriesGrid activeTab={activeTab} />

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

    </div>
  );
}