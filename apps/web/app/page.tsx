"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "@/sections/Hero";
import Categories from "@/sections/Categories";
import PopularTools from "@/sections/PopularTools";
import RecentlyAdded from "@/sections/RecentlyAddedAndFeaturedCollection";
import FaqAndCta from "@/sections/FaqAndCta";
import Footer from "@/components/Footer";
import Statistics from "@/sections/Statistics";
import FeaturedCollections from "@/sections/FeaturedCollections";
import WhyToolbox from "@/sections/WhyToolbox";

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