"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "@/sections/Home/Hero";
import Categories from "@/sections/Home/Categories";
import PopularTools from "@/sections/Home/PopularTools";
import RecentlyAdded from "@/sections/Home/RecentlyAddedAndFeaturedCollection";
import FaqAndCta from "@/sections/Home/FaqAndCta";
import Footer from "@/components/Footer";
import Statistics from "@/sections/Home/Statistics";
import WhyToolbox from "@/sections/Home/WhyToolbox";

export default function Page() {
  /* State */
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  /* Effects */
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

  /* Handlers */
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

  const handleOpenSearch = () => {
    console.log("Open global search command palette (Ctrl+K)");
  };

  if (!mounted) return null;

  /* Render */
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Navbar
        onOpenSearch={handleOpenSearch}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
      />

      <Hero />
      <Categories />
      <PopularTools />
      <RecentlyAdded />
      <WhyToolbox />
      <Statistics />
      <FaqAndCta />
      <Footer />
    </div>
  );
}