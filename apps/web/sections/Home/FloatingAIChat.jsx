"use client";

import React, { useState } from "react";
import { X, Send, Bot, User, Sparkles, Cpu } from "lucide-react";

export default function FloatingAIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hi there! I'm your AI toolbox assistant. Looking for a specific tool or need help? Ask me anything!" }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { sender: "user", text: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "This is a preview mode UI. Styled with a clean, high-contrast Black & White theme!" }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Chat Window Popup - Compact Height & Clean B&W Look */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[92vw] sm:w-[390px] h-[430px] bg-background/95 backdrop-blur-2xl border-2 border-zinc-300 dark:border-zinc-700 rounded-3xl shadow-2xl shadow-zinc-950/20 flex flex-col overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-6">
          
          {/* Header */}
          <div className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-5 py-3.5 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative p-2 bg-white/10 dark:bg-zinc-900/10 rounded-xl backdrop-blur-md border border-white/20 dark:border-zinc-900/20 shadow-inner">
                <Bot className="w-5 h-5 text-white dark:text-zinc-900" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 border-2 border-zinc-900 dark:border-zinc-100 rounded-full animate-pulse" />
              </div>
              <div>
                <h3 className="font-bold text-sm tracking-wide flex items-center gap-1.5">
                  Toolbox AI <Sparkles className="w-3.5 h-3.5 text-zinc-300 dark:text-zinc-700" />
                </h3>
                <span className="text-[11px] opacity-80 font-medium">
                  Ready to assist you
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1.5 opacity-80 hover:opacity-100 hover:bg-white/10 dark:hover:bg-zinc-900/10 rounded-xl transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-zinc-50/50 dark:bg-zinc-950/30">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex gap-2.5 items-end ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "ai" && (
                  <div className="w-7 h-7 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border border-zinc-300 dark:border-zinc-700 flex items-center justify-center shrink-0 shadow-sm">
                    <Cpu className="w-3.5 h-3.5" />
                  </div>
                )}
                <div 
                  className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${
                    msg.sender === "user" 
                      ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-br-none font-medium" 
                      : "bg-card border border-zinc-200 dark:border-zinc-800 text-foreground rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.sender === "user" && (
                  <div className="w-7 h-7 rounded-full bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 flex items-center justify-center shrink-0 text-foreground">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input Footer */}
          <form onSubmit={handleSendMessage} className="p-3 bg-background border-t border-zinc-200 dark:border-zinc-800 flex items-center gap-2">
            <input 
              type="text"
              placeholder="Ask AI about tools, categories..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-zinc-100/80 dark:bg-zinc-900/60 border border-zinc-300 dark:border-zinc-700 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all placeholder:text-muted-foreground/60"
            />
            <button 
              type="submit"
              className="p-2.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 rounded-xl shadow-md transition-all hover:scale-105 active:scale-95 flex items-center justify-center shrink-0 font-medium"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

      {/* Floating Trigger Button - Sleek Black & White with Sharp Contrast */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-16 h-16 sm:w-[4.2rem] sm:h-[4.2rem] bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 rounded-full shadow-2xl shadow-zinc-950/30 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none border-2 border-zinc-300 dark:border-zinc-700"
        aria-label="Open AI Assistant"
      >
        {/* Soft Glowing Ring Effect */}
        <span className="absolute inset-0 rounded-full bg-zinc-400 opacity-30 dark:opacity-20 animate-ping pointer-events-none" />
        
        {isOpen ? (
          <X className="w-8 h-8 transition-transform rotate-0" />
        ) : (
          <div className="relative flex items-center justify-center">
            <Bot className="w-8 h-8 transition-transform group-hover:scale-110" />
            <Sparkles className="absolute -top-2.5 -right-2.5 w-5 h-5 text-zinc-300 dark:text-zinc-600 animate-bounce" />
          </div>
        )}
      </button>
    </div>
  );
}