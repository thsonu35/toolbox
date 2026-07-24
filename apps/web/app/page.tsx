"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import PopularTools from "@/components/PopularTools";

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleOpenSearch = () => {
    console.log("Open global search command palette (Ctrl+K)");
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Navbar 
        onOpenSearch={handleOpenSearch} 
        toggleTheme={toggleTheme} 
        isDarkMode={isDarkMode} 
      />

      <Hero/>

      <Categories/>
      <PopularTools/>
    </div>
  );
}