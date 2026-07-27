"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Bell, Moon, Sun, Menu, X, Wrench, User } from "lucide-react";

interface NavbarProps {
  toggleTheme?: () => void;
  onOpenSearch?: () => void;
  onOpenLogin?: () => void;
  isDarkMode?: boolean;
}

export default function Navbar({
  toggleTheme,
  onOpenSearch,
  onOpenLogin,
  isDarkMode = false,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  const handleSearchClick = () => {
    if (onOpenSearch) {
      onOpenSearch();
    } else {
      setSearchOpen(true);
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-200 w-full ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-background border-b border-transparent"
        }`}
      >
        <div className="w-full px-6 sm:px-12 lg:px-20 max-w-[1550px] mx-auto h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-10 lg:gap-12 h-full">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="bg-sky-600 text-white p-2.5 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
                <Wrench className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-foreground">
                TOOLBOX
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8 h-full text-base font-medium text-muted-foreground">
               <Link href="/" className="h-full flex items-center relative text-foreground/85 hover:text-foreground transition-colors group">
                Home <span className="absolute bottom-2.5 left-0 w-0 h-0.5 bg-sky-600 transition-all duration-200 group-hover:w-full" />
              </Link>
              <Link href="categories" className="h-full flex items-center relative text-foreground/85 hover:text-foreground transition-colors group">
                Categories <span className="absolute bottom-2.5 left-0 w-0 h-0.5 bg-sky-600 transition-all duration-200 group-hover:w-full" />
              </Link>
               <Link href="#tools" className="h-full flex items-center relative text-foreground/85 hover:text-foreground transition-colors group">
                Tools <span className="absolute bottom-2.5 left-0 w-0 h-0.5 bg-sky-600 transition-all duration-200 group-hover:w-full" />
              </Link>
              <Link href="#api" className="h-full flex items-center relative text-foreground/85 hover:text-foreground transition-colors group">
                API <span className="absolute bottom-2.5 left-0 w-0 h-0.5 bg-sky-600 transition-all duration-200 group-hover:w-full" />
              </Link>
              <Link href="#docs" className="h-full flex items-center relative text-foreground/85 hover:text-foreground transition-colors group">
                Docs <span className="absolute bottom-2.5 left-0 w-0 h-0.5 bg-sky-600 transition-all duration-200 group-hover:w-full" />
              </Link>
            </nav>
          </div>

          <div className="hidden lg:flex items-center gap-3 h-full">
            <button
              onClick={handleSearchClick}
              aria-label="Search tools"
              className="p-3 text-muted-foreground hover:text-foreground rounded-2xl hover:bg-secondary transition-colors cursor-pointer"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              aria-label="Notifications"
              className="p-3 text-muted-foreground hover:text-foreground rounded-2xl hover:bg-secondary transition-colors relative cursor-pointer"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-sky-600 rounded-full" />
            </button>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-3 text-muted-foreground hover:text-foreground rounded-2xl hover:bg-secondary transition-colors cursor-pointer"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <div className="ml-2 flex items-center">
              <button
                onClick={onOpenLogin}
                className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm py-3 px-6 rounded-2xl shadow-sm transition-all active:scale-95 cursor-pointer"
              >
                <User className="w-4 h-4" />
                <span>Login / Dashboard</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button onClick={toggleTheme} className="p-3 text-muted-foreground hover:text-foreground rounded-xl hover:bg-secondary cursor-pointer">
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-3 text-foreground rounded-xl hover:bg-secondary cursor-pointer">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-background border-b border-border px-6 py-6 shadow-xl flex flex-col gap-4">
            <Link href="#tools" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-foreground py-1.5">Tools</Link>
            <Link href="#categories" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-foreground py-1.5">Categories</Link>
            <div className="pt-4 border-t border-border flex flex-col gap-3">
              <button
                onClick={() => { setMobileMenuOpen(false); handleSearchClick(); }}
                className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 text-base font-medium text-foreground bg-secondary rounded-xl cursor-pointer"
              >
                <Search className="w-5 h-5" /> Search Tools...
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); if (onOpenLogin) onOpenLogin(); }}
                className="w-full flex items-center justify-center gap-2 bg-sky-600 text-white font-semibold py-3.5 text-base rounded-xl shadow-sm cursor-pointer"
              >
                <User className="w-5 h-5" />
                <span>Login / Dashboard</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Internal Search Modal Fallback */}
      {searchOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-24 px-4"
          onClick={() => setSearchOpen(false)}
        >
          <div 
            className="bg-background border border-border w-full max-w-xl rounded-2xl shadow-xl p-5 relative flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center gap-3 w-full">
                <Search className="w-5 h-5 text-muted-foreground" />
                <input type="text" placeholder="Search for JSON Formatter, Merge PDF, Image Compressor..." autoFocus className="w-full bg-transparent text-foreground text-base focus:outline-none" />
              </div>
              <button onClick={() => setSearchOpen(false)} className="p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}