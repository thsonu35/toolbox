import React from "react";
import Link from "next/link";
import { Code2, FileText, Image as ImageIcon, Video, ShieldCheck, Type, Calculator, Music, Users, ArrowUpRight, ChevronDown, Wrench } from "lucide-react";

const ALL_CATEGORIES_DATA = [
  {
    id: "developer",
    title: "Developer",
    toolsCount: "18 Tools",
    users: "256K users",
    badge: "Popular",
    badgeColor: "bg-emerald-500/15 text-emerald-600 border-emerald-500/30",
    description: "Essential tools for developers and programmers",
    icon: <Code2 className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
    iconBg: "bg-sky-500/15 border-sky-500/30",
    href: "/categories/developer-suite",
  },
  {
    id: "pdf tools",
    title: "PDF Tools",
    toolsCount: "17 Tools",
    users: "312K users",
    badge: "Popular",
    badgeColor: "bg-emerald-500/15 text-emerald-600 border-emerald-500/30",
    description: "Convert, edit, merge, and optimize PDF files",
    icon: <FileText className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
    iconBg: "bg-rose-500/15 border-rose-500/30",
    href: "/categories/pdf-essentials",
  },
  {
    id: "image tools",
    title: "Image Tools",
    toolsCount: "36 Tools",
    users: "421K users",
    badge: "Essential",
    badgeColor: "bg-sky-500/15 text-sky-600 border-sky-500/30",
    description: "Compress, resize, convert, and edit images",
    icon: <ImageIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    iconBg: "bg-emerald-500/15 border-emerald-500/30",
    href: "/categories/image-graphics",
  },
  {
    id: "video tools",
    title: "Video Tools",
    toolsCount: "62 Tools",
    users: "289K users",
    badge: "Popular",
    badgeColor: "bg-emerald-500/15 text-emerald-600 border-emerald-500/30",
    description: "Video conversion, editing, and downloading tools",
    icon: <Video className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    iconBg: "bg-blue-500/15 border-blue-500/30",
    href: "/categories/video-utilities",
  },
  {
    id: "audio tools",
    title: "Audio Tools",
    toolsCount: "23 Tools",
    users: "154K users",
    badge: "New",
    badgeColor: "bg-amber-500/15 text-amber-600 border-amber-500/30",
    description: "Audio conversion, editing, and processing tools",
    icon: <Music className="w-5 h-5 text-pink-600 dark:text-pink-400" />,
    iconBg: "bg-pink-500/15 border-pink-500/30",
    href: "/categories/audio-tools",
  },
  {
    id: "security",
    title: "Security",
    toolsCount: "15 Tools",
    users: "198K users",
    badge: "Popular",
    badgeColor: "bg-emerald-500/15 text-emerald-600 border-emerald-500/30",
    description: "Security analysis, encryption, and privacy tools",
    icon: <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
    iconBg: "bg-indigo-500/15 border-indigo-500/30",
    href: "/categories/security-hash",
  },
  {
    id: "text tools",
    title: "Text Tools",
    toolsCount: "16 Tools",
    users: "221K users",
    badge: "Essential",
    badgeColor: "bg-sky-500/15 text-sky-600 border-sky-500/30",
    description: "Text analysis, formatting, and conversion tools",
    icon: <Type className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
    iconBg: "bg-teal-500/15 border-teal-500/30",
    href: "/categories/text-formatting",
  },
  {
    id: "calculator",
    title: "Calculator",
    toolsCount: "12 Tools",
    users: "142K users",
    badge: "Popular",
    badgeColor: "bg-emerald-500/15 text-emerald-600 border-emerald-500/30",
    description: "Various calculators for different calculations",
    icon: <Calculator className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
    iconBg: "bg-cyan-500/15 border-cyan-500/30",
    href: "/categories/calculators",
  },
];

const TOOLS_BY_CATEGORY_DATA: Record<string, Array<{ id: string; title: string; description: string; href: string; badge: string; users: string }>> = {
  developer: [
    { id: "json-formatter", title: "JSON Formatter & Validator", description: "Pretty print, parse, and validate JSON data instantly with error detection.", href: "/tools/json-formatter", badge: "Popular", users: "98K users" },
    { id: "jwt-decoder", title: "JWT Token Decoder", description: "Decode JSON Web Tokens to inspect header, payload, and signature data securely.", href: "/tools/jwt-decoder", badge: "Essential", users: "64K users" },
    { id: "base64-encoder", title: "Base64 Encoder/Decoder", description: "Encode raw text or files into Base64 format or decode them back seamlessly.", href: "/tools/base64-encoder", badge: "Fast", users: "82K users" },
    { id: "hash-generator", title: "MD5 & SHA Hash Generator", description: "Generate secure cryptographic hashes like MD5, SHA-256, and SHA-512.", href: "/tools/hash-generator", badge: "Secure", users: "45K users" },
  ],
  "pdf tools": [
    { id: "pdf-merge", title: "Merge PDF Files", description: "Combine multiple PDF documents into a single optimized file securely.", href: "/tools/pdf-merge", badge: "Popular", users: "140K users" },
    { id: "pdf-compress", title: "Compress PDF Size", description: "Reduce PDF file size without losing visual document quality.", href: "/tools/pdf-compress", badge: "Essential", users: "115K users" },
    { id: "pdf-to-word", title: "PDF to Word Converter", description: "Convert complex PDF layouts into editable Microsoft Word documents.", href: "/tools/pdf-to-word", badge: "Fast", users: "89K users" },
    { id: "pdf-split", title: "Split PDF Document", description: "Extract individual pages or ranges from large PDF files seamlessly.", href: "/tools/pdf-split", badge: "New", users: "72K users" },
  ],
  "image tools": [
    { id: "image-compressor", title: "Image Compressor", description: "Optimize PNG, JPEG, and WebP images with advanced compression algorithms.", href: "/tools/image-compressor", badge: "Popular", users: "210K users" },
    { id: "image-resizer", title: "Bulk Image Resizer", description: "Resize multiple images simultaneously with custom pixel dimensions.", href: "/tools/image-resizer", badge: "Essential", users: "134K users" },
    { id: "svg-to-png", title: "SVG to PNG Converter", description: "Export vector graphics into crisp high-resolution raster images.", href: "/tools/svg-to-png", badge: "New", users: "55K users" },
    { id: "image-cropper", title: "Advanced Image Cropper", description: "Crop images precisely with aspect ratio presets for web and social media.", href: "/tools/image-cropper", badge: "Fast", users: "92K users" },
  ],
  "video tools": [
    { id: "video-compressor", title: "MP4 Video Compressor", description: "Reduce video file sizes for seamless web sharing and storage.", href: "/tools/video-compressor", badge: "Popular", users: "95K users" },
    { id: "gif-maker", title: "Video to GIF Converter", description: "Extract video clips and convert them into smooth, animated GIFs.", href: "/tools/gif-maker", badge: "Essential", users: "78K users" },
    { id: "video-trimmer", title: "Online Video Trimmer", description: "Cut unwanted sections from your video files instantly in the browser.", href: "/tools/video-trimmer", badge: "Fast", users: "64K users" },
    { id: "audio-extractor", title: "Extract Audio from Video", description: "Pull high-quality MP3 audio tracks directly from video recordings.", href: "/tools/audio-extractor", badge: "New", users: "51K users" },
  ],
  "audio tools": [
    { id: "mp3-cutter", title: "MP3 Audio Cutter", description: "Trim audio tracks and create customized ringtones or sound bites.", href: "/tools/mp3-cutter", badge: "Popular", users: "62K users" },
    { id: "audio-converter", title: "WAV to MP3 Converter", description: "Convert audio formats instantly with lossless quality preservation.", href: "/tools/audio-converter", badge: "New", users: "41K users" },
    { id: "volume-booster", title: "Audio Volume Booster", description: "Amplifies quiet sound tracks safely without digital clipping distortion.", href: "/tools/volume-booster", badge: "Fast", users: "38K users" },
    { id: "pitch-shifter", title: "Pitch & Tempo Shifter", description: "Modify track frequency and playback speed effortlessly.", href: "/tools/pitch-shifter", badge: "Essential", users: "29K users" },
  ],
  security: [
    { id: "password-generator", title: "Secure Password Generator", description: "Generate cryptographically secure passwords with custom symbol constraints.", href: "/tools/password-generator", badge: "Popular", users: "110K users" },
    { id: "uuid-generator", title: "UUID v4 Generator", description: "Generate unique identifiers in bulk for database entries and keys.", href: "/tools/uuid-generator", badge: "Essential", users: "88K users" },
    { id: "rsa-generator", title: "RSA Key Pair Generator", description: "Generate public and private cryptographic keys for secure authentication.", href: "/tools/rsa-generator", badge: "Secure", users: "42K users" },
    { id: "ip-lookup", title: "IP Address Inspector", description: "Analyze network routing, geolocation, and ISP details securely.", href: "/tools/ip-lookup", badge: "Fast", users: "67K users" },
  ],
  "text tools": [
    { id: "case-converter", title: "Text Case Converter", description: "Switch text between uppercase, lowercase, camelCase, snake_case, and more.", href: "/tools/case-converter", badge: "Popular", users: "92K users" },
    { id: "word-counter", title: "Advanced Word Counter", description: "Analyze reading time, character count, word density, and keyword frequency.", href: "/tools/word-counter", badge: "Essential", users: "76K users" },
    { id: "text-diff", title: "Text Diff Checker", description: "Compare two text blocks or code files side by side to track differences.", href: "/tools/text-diff", badge: "Useful", users: "84K users" },
  ],
  calculator: [
    { id: "percentage-calc", title: "Percentage Calculator", description: "Calculate margins, discounts, ratios, and percentage differences instantly.", href: "/tools/percentage-calc", badge: "Popular", users: "85K users" },
    { id: "roi-calculator", title: "ROI & Revenue Calculator", description: "Compute return on investment, profit margins, and growth projections.", href: "/tools/roi-calculator", badge: "Essential", users: "53K users" },
    { id: "unit-converter", title: "Universal Unit Converter", description: "Convert length, mass, temperature, and speed units accurately.", href: "/tools/unit-converter", badge: "Fast", users: "71K users" },
    { id: "gst-calculator", title: "GST & Tax Calculator", description: "Compute taxes, net amounts, and gross totals with customized rates.", href: "/tools/gst-calculator", badge: "New", users: "48K users" },
  ],
};

interface CategoriesGridProps {
  activeTab?: string;
}

export default function CategoriesGrid({ activeTab = "All Categories" }: CategoriesGridProps) {
  const currentTab = activeTab || "All Categories";
  const isAllCategories = currentTab === "All Categories";

  const filteredCategories = isAllCategories 
    ? ALL_CATEGORIES_DATA 
    : ALL_CATEGORIES_DATA.filter(cat => 
        cat.title.toLowerCase() === currentTab.toLowerCase() ||
        cat.title.toLowerCase().includes(currentTab.toLowerCase())
      );

  const matchedCategoryKey = Object.keys(TOOLS_BY_CATEGORY_DATA).find(
    key => key.toLowerCase() === currentTab.toLowerCase() || currentTab.toLowerCase().includes(key)
  );

  const activeToolsList = matchedCategoryKey ? TOOLS_BY_CATEGORY_DATA[matchedCategoryKey] : [];

  return (
    <div id="categories-grid" className="w-full px-4 sm:px-8 lg:px-12 max-w-[1550px] mx-auto py-8">
      
      {/* Header bar with vibrant color accents */}
      <div className="flex items-center justify-between mb-5 pb-3 border-b-2 border-border/60">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-foreground tracking-tight flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
            {isAllCategories ? "All Categories" : `${currentTab} Tools`}
          </h2>
          <p className="text-xs text-muted-foreground font-semibold mt-0.5">
            {isAllCategories 
              ? "Discover tools organized by category to find exactly what you need."
              : `Explore all specialized utilities available under the ${currentTab} suite.`}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-muted-foreground hidden sm:inline">Sort by:</span>
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border border-sky-500/30 text-xs font-bold text-sky-600 dark:text-sky-400 shadow-xs hover:border-sky-500 transition-all">
            <span>Most Popular</span> <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Strict 4 Columns in a Row Layout */}
      {isAllCategories ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredCategories.map((cat) => (
            <div 
              key={cat.id} 
              className="bg-card/90 hover:bg-card border-2 border-border/80 rounded-2xl p-4 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-sky-500/60 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl border ${cat.iconBg} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform`}>
                    {cat.icon}
                  </div>
                  <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-lg border ${cat.badgeColor}`}>
                    {cat.toolsCount}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-sm font-black text-foreground group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-xs text-muted-foreground font-medium leading-relaxed mb-4 line-clamp-2">
                  {cat.description}
                </p>
              </div>

              <div className="pt-3 border-t border-border/60 flex items-center justify-between">
                <span className="text-[11px] font-bold text-muted-foreground flex items-center gap-1">
                  <Users className="w-3 h-3 text-sky-500" /> {cat.users}
                </span>
                <Link 
                  href={cat.href}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-sky-500/10 hover:bg-sky-600 hover:text-white text-sky-600 dark:text-sky-400 text-xs font-black transition-all group-hover:bg-sky-600 group-hover:text-white border border-sky-500/20"
                >
                  <span>Open</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {activeToolsList.length > 0 ? (
            activeToolsList.map((tool) => (
              <div 
                key={tool.id} 
                className="bg-card/90 hover:bg-card border-2 border-border/80 rounded-2xl p-4 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-sky-500/60 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl border border-sky-500/30 bg-sky-500/15 flex items-center justify-center text-sky-600 dark:text-sky-400 group-hover:scale-110 transition-transform">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-black px-2.5 py-0.5 rounded-lg bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30 uppercase">
                      {tool.badge}
                    </span>
                  </div>

                  <h3 className="text-sm font-black text-foreground group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors mb-1.5">
                    {tool.title}
                  </h3>

                  <p className="text-xs text-muted-foreground font-medium leading-relaxed mb-5 line-clamp-2">
                    {tool.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/60 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-muted-foreground flex items-center gap-1">
                    <Users className="w-3 h-3 text-sky-500" /> {tool.users}
                  </span>
                  <Link 
                    href={tool.href}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-sky-500/10 hover:bg-sky-600 hover:text-white text-sky-600 dark:text-sky-400 text-xs font-black transition-all group-hover:bg-sky-600 group-hover:text-white border border-sky-500/20"
                  >
                    <span>Launch</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center bg-card border-2 border-border/80 rounded-2xl">
              <p className="text-muted-foreground text-xs font-bold">No specific tools found under "{currentTab}".</p>
            </div>
          )}
        </div>
      )}

      {/* View More Button */}
      {isAllCategories && (
        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-card hover:bg-secondary border-2 border-border text-foreground font-black text-xs transition-all shadow-sm cursor-pointer">
            <span>View More Categories</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}