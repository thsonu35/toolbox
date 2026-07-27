"use client";

import React, { useState, useEffect } from "react";
import { 
  X, Wrench, User, Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle2 
} from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(isSignUp ? "Registering user:" : "Logging in user:", { fullName, email, password, rememberMe });
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-background border border-border w-full max-w-md max-h-[90vh] rounded-3xl shadow-2xl p-6 sm:p-8 relative flex flex-col overflow-y-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 z-30 p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary transition-colors cursor-pointer border border-border/60"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Section */}
        <div className="text-center mb-6 mt-2">
          <div className="inline-flex p-3 bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 rounded-2xl mb-3 border border-sky-200 dark:border-sky-800">
            <Wrench className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-extrabold text-foreground tracking-tight">
            {isSignUp ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="text-sm text-muted-foreground mt-1 max-w-sm mx-auto">
            {isSignUp 
              ? "Get instant access to 500+ developer tools." 
              : "Sign in to access your dashboard & history."}
          </p>
        </div>

        {/* Social Login Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <button type="button" className="flex items-center justify-center gap-2.5 bg-secondary hover:bg-secondary/80 border border-border text-foreground font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.2 9 5 12 5z"/>
              <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"/>
              <path fill="#FBBC05" d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 10.8 0 12.5s.7 2.8 1.9 5.2l3.7-2.9z"/>
              <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.2-6.4-5.2L1.9 16C3.7 19.7 7.5 23 12 23z"/>
            </svg>
            <span>Google</span>
          </button>
          <button type="button" className="flex items-center justify-center gap-2.5 bg-secondary hover:bg-secondary/80 border border-border text-foreground font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors">
            <svg className="w-4 h-4 fill-current text-foreground" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </button>
        </div>

        <div className="relative flex items-center justify-center mb-5">
          <div className="border-t border-border w-full" />
          <span className="bg-background px-3 text-[10px] uppercase text-muted-foreground font-bold tracking-wider whitespace-nowrap">
            Or continue with email
          </span>
          <div className="border-t border-border w-full" />
        </div>

        {/* Auth Form */}
        <form onSubmit={handleAuthSubmit} className="flex flex-col gap-3">
          {isSignUp && (
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Full Name</label>
              <div className="relative flex items-center">
                <User className="w-4 h-4 absolute left-3 text-muted-foreground" />
                <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="John Doe" className="w-full bg-secondary/40 border border-border focus:border-sky-500 rounded-xl pl-9 pr-3 py-2 text-sm text-foreground focus:outline-none" />
              </div>
            </div>
          )}

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Email Address</label>
            <div className="relative flex items-center">
              <Mail className="w-4 h-4 absolute left-3 text-muted-foreground" />
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" className="w-full bg-secondary/40 border border-border focus:border-sky-500 rounded-xl pl-9 pr-3 py-2 text-sm text-foreground focus:outline-none" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Password</label>
              {!isSignUp && <a href="#forgot" className="text-[11px] font-medium text-sky-600 hover:underline">Forgot?</a>}
            </div>
            <div className="relative flex items-center">
              <Lock className="w-4 h-4 absolute left-3 text-muted-foreground" />
              <input type={showPassword ? "text" : "password"} required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full bg-secondary/40 border border-border focus:border-sky-500 rounded-xl pl-9 pr-9 py-2 text-sm text-foreground focus:outline-none" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 text-muted-foreground hover:text-foreground">
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between mt-1 mb-2">
            {!isSignUp ? (
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="w-3.5 h-3.5 rounded border-border text-sky-600 focus:ring-sky-500" />
                <span className="text-[11px] text-muted-foreground font-medium">Remember me for 30 days</span>
              </label>
            ) : (
              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                <span>By signing up, you agree to terms.</span>
              </div>
            )}
          </div>

          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm py-2.5 rounded-xl shadow-sm transition-colors">
            <span>{isSignUp ? "Create Account" : "Sign In"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-5 pt-4 border-t border-border text-center text-[11px] text-muted-foreground">
          {isSignUp ? (
            <p>Already have an account? <button onClick={() => setIsSignUp(false)} className="font-bold text-sky-600 hover:underline">Sign In</button></p>
          ) : (
            <p>Don't have an account? <button onClick={() => setIsSignUp(true)} className="font-bold text-sky-600 hover:underline">Create free account</button></p>
          )}
        </div>
      </div>
    </div>
  );
}