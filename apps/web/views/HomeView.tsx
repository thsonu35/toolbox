"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import LoginModal from "@/components/ui/LoginModal";
import SearchModal from "@/components/ui/SearchModal";
import Hero from "@/sections/Home/Hero";
import Categories from "@/sections/Home/Categories";
import PopularTools from "@/sections/Home/PopularTools";
import RecentlyAdded from "@/sections/Home/RecentlyAddedAndFeaturedCollection";
import FaqAndCta from "@/sections/Home/FaqAndCta";
import Footer from "@/components/Footer";
import Statistics from "@/sections/Home/Statistics";
import WhyToolbox from "@/sections/Home/WhyToolbox";
import Floating from "@/sections/Home/FloatingAIChat"

export default function HomeView() {
  /* State Management */
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); 
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  /* Lifecycle Effects */
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("toolbox-theme");
    
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  /* Theme Handlers */
  const toggleTheme = () => {
    setIsDarkMode((prevTheme) => {
      const newTheme = !prevTheme;
      localStorage.setItem("toolbox-theme", newTheme ? "dark" : "light");
      
      if (newTheme) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      
      return newTheme;
    });
  };

  /* Prevent Hydration Mismatch */
  if (!mounted) return null;

  /* Render Layout */
  return (
    <div className={isDarkMode ? "dark" : ""}>
      
    
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenLogin={() => setIsLoginModalOpen(true)}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
      />

  
      <Hero />
      <Categories />
      <PopularTools />
      <RecentlyAdded />
      <WhyToolbox />
      <Floating/>
      <Statistics />
      <FaqAndCta />
      <Footer />


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