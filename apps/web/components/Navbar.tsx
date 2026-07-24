"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { 
  Search, Bell, Moon, Sun, Menu, X, Wrench, User, 
  Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle2 
} from "lucide-react";

interface NavbarProps {
  toggleTheme?: () => void;
  isDarkMode?: boolean;
}

export default function Navbar({
  toggleTheme,
  isDarkMode = false,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Login Modal States
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  // Form Input States
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

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

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(isSignUp ? "Registering user:" : "Logging in user:", { fullName, email, password, rememberMe });
    setLoginModalOpen(false);
  };

  const handleCloseModal = useCallback(() => {
    setLoginModalOpen(false);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-colors duration-150 w-full ${
          isScrolled
            ? "bg-background/90 border-b border-border shadow-sm"
            : "bg-background border-b border-transparent"
        }`}
      >
        {/* Container */}
        <div className="w-full px-8 sm:px-16 lg:px-24 h-24 flex items-center justify-between">
          
          {/* Left Section */}
          <div className="flex items-center gap-16 h-full">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="bg-sky-600 text-white p-3 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
                <Wrench className="w-7 h-7" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-foreground">
                TOOLBOX
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-12 h-full text-lg font-medium text-muted-foreground">
              <Link href="#tools" className="h-full flex items-center relative text-foreground/85 hover:text-foreground transition-colors group">
                Tools
                <span className="absolute bottom-3 left-0 w-0 h-0.5 bg-foreground transition-all duration-200 group-hover:w-full" />
              </Link>
              <Link href="#categories" className="h-full flex items-center relative text-foreground/85 hover:text-foreground transition-colors group">
                Categories
                <span className="absolute bottom-3 left-0 w-0 h-0.5 bg-foreground transition-all duration-200 group-hover:w-full" />
              </Link>
              <Link href="#api" className="h-full flex items-center relative text-foreground/85 hover:text-foreground transition-colors group">
                API
                <span className="absolute bottom-3 left-0 w-0 h-0.5 bg-foreground transition-all duration-200 group-hover:w-full" />
              </Link>
              <Link href="#pricing" className="h-full flex items-center relative text-foreground/85 hover:text-foreground transition-colors group">
                Pricing
                <span className="absolute bottom-3 left-0 w-0 h-0.5 bg-foreground transition-all duration-200 group-hover:w-full" />
              </Link>
              <Link href="#docs" className="h-full flex items-center relative text-foreground/85 hover:text-foreground transition-colors group">
                Documentation
                <span className="absolute bottom-3 left-0 w-0 h-0.5 bg-foreground transition-all duration-200 group-hover:w-full" />
              </Link>
            </nav>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-5 h-full">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search tools"
              className="p-3.5 text-muted-foreground hover:text-foreground rounded-2xl hover:bg-secondary transition-colors"
            >
              <Search className="w-6 h-6" />
            </button>

            <button
              aria-label="Notifications"
              className="p-3.5 text-muted-foreground hover:text-foreground rounded-2xl hover:bg-secondary transition-colors relative"
            >
              <Bell className="w-6 h-6" />
              <span className="absolute top-3 right-3 w-2 h-2 bg-sky-600 rounded-full" />
            </button>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-3.5 text-muted-foreground hover:text-foreground rounded-2xl hover:bg-secondary transition-colors"
            >
              {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>

            <div className="ml-3 flex items-center">
              <button
                onClick={() => setLoginModalOpen(true)}
                className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-base py-3.5 px-7 rounded-2xl shadow-sm transition-colors active:scale-95"
              >
                <User className="w-5 h-5" />
                <span>Login / Dashboard</span>
              </button>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-3 text-muted-foreground hover:text-foreground rounded-xl hover:bg-secondary"
            >
              {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 text-foreground rounded-xl hover:bg-secondary"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-24 left-0 w-full bg-background border-b border-border px-8 py-8 shadow-xl flex flex-col gap-6">
            <Link href="#tools" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-foreground py-2">Tools</Link>
            <Link href="#categories" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-foreground py-2">Categories</Link>
            <Link href="#api" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-foreground py-2">API</Link>
            <Link href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-foreground py-2">Pricing</Link>
            <Link href="#docs" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-foreground py-2">Documentation</Link>
            
            <div className="pt-5 border-t border-border flex flex-col gap-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSearchOpen(true);
                }}
                className="flex items-center justify-center gap-3 w-full py-4 px-4 text-lg font-medium text-foreground bg-secondary rounded-xl"
              >
                <Search className="w-5 h-5" /> Search Tools...
              </button>
              <div className="w-full pt-1">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setLoginModalOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-sky-600 text-white font-semibold py-4 text-lg rounded-xl shadow-sm"
                >
                  <User className="w-5 h-5" />
                  <span>Login / Dashboard</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center pt-20 px-4">
          <div className="bg-background border border-border w-full max-w-2xl rounded-2xl shadow-xl p-6 relative flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-3 w-full">
                <Search className="w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search for JSON Formatter, Merge PDF, Image Compressor..."
                  autoFocus
                  className="w-full bg-transparent text-foreground text-base focus:outline-none"
                />
              </div>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* High Performance Lightweight Responsive Login Modal */}
      {loginModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 sm:p-6"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-background border border-border w-full max-w-lg max-h-[85vh] rounded-3xl shadow-2xl p-6 sm:p-8 relative flex flex-col overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleCloseModal}
              className="absolute top-5 right-5 z-30 p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary transition-colors cursor-pointer border border-border/60"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Section */}
            <div className="text-center mb-6">
              <div className="inline-flex p-3 bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 rounded-2xl mb-3 border border-sky-200 dark:border-sky-800">
                <Wrench className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                {isSignUp ? "Create Your Account" : "Welcome Back"}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mt-1 max-w-sm mx-auto">
                {isSignUp 
                  ? "Get instant access to 500+ developer & productivity tools" 
                  : "Sign in to access your saved tools, history & API keys"}
              </p>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <button
                type="button"
                className="flex items-center justify-center gap-2.5 bg-secondary hover:bg-secondary/80 border border-border text-foreground font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.2 9 5 12 5z"/>
                  <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"/>
                  <path fill="#FBBC05" d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 10.8 0 12.5s.7 2.8 1.9 5.2l3.7-2.9z"/>
                  <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.2-6.4-5.2L1.9 16C3.7 19.7 7.5 23 12 23z"/>
                </svg>
                <span>Google</span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-2.5 bg-secondary hover:bg-secondary/80 border border-border text-foreground font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors"
              >
                <svg className="w-5 h-5 fill-current text-foreground" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative flex items-center justify-center mb-5">
              <div className="border-t border-border w-full" />
              <span className="bg-background px-3 text-xs uppercase text-muted-foreground font-semibold tracking-wider whitespace-nowrap">
                Or continue with email
              </span>
              <div className="border-t border-border w-full" />
            </div>

            {/* Auth Form */}
            <form onSubmit={handleAuthSubmit} className="flex flex-col gap-3.5">
              
              {isSignUp && (
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    Full Name
                  </label>
                  <div className="relative flex items-center">
                    <User className="w-4 h-4 absolute left-3 text-muted-foreground" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full bg-secondary/40 border border-border focus:border-sky-500 rounded-xl pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-sky-500 transition-colors"
                    />
                  </div>
                </div>
              )}

              {/* Email Input */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                  Email Address
                </label>
                <div className="relative flex items-center">
                  <Mail className="w-4 h-4 absolute left-3 text-muted-foreground" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-secondary/40 border border-border focus:border-sky-500 rounded-xl pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-sky-500 transition-colors"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Password
                  </label>
                  {!isSignUp && (
                    <a href="#forgot" className="text-xs font-medium text-sky-600 dark:text-sky-400 hover:underline">
                      Forgot?
                    </a>
                  )}
                </div>
                <div className="relative flex items-center">
                  <Lock className="w-4 h-4 absolute left-3 text-muted-foreground" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-secondary/40 border border-border focus:border-sky-500 rounded-xl pl-10 pr-10 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-sky-500 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Checkbox */}
              <div className="flex items-center justify-between my-1">
                {!isSignUp ? (
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded border-border text-sky-600 focus:ring-sky-500"
                    />
                    <span className="text-xs text-muted-foreground font-medium">Remember me for 30 days</span>
                  </label>
                ) : (
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-sky-500 flex-shrink-0" />
                    <span>By signing up, you agree to Terms & Privacy Policy</span>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-1 inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm py-3 rounded-xl shadow-sm transition-colors cursor-pointer"
              >
                <span>{isSignUp ? "Create Account" : "Sign In to Dashboard"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Switcher */}
            <div className="mt-5 pt-4 border-t border-border text-center text-xs text-muted-foreground">
              {isSignUp ? (
                <p>
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsSignUp(false)}
                    className="font-bold text-sky-600 dark:text-sky-400 hover:underline cursor-pointer"
                  >
                    Sign In
                  </button>
                </p>
              ) : (
                <p>
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsSignUp(true)}
                    className="font-bold text-sky-600 dark:text-sky-400 hover:underline cursor-pointer"
                  >
                    Create free account
                  </button>
                </p>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
}