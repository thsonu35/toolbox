import HomeView from "@/views/HomeView";
import { Metadata } from "next";

/* Page SEO Metadata */
export const metadata: Metadata = {
  title: "Toolbox",
  description: "A comprehensive suite of browser-based micro-utilities for developers, creators, and students. Completely free and secure.",
};

export default function Page() {
  /* Render View Component */
  return <HomeView />;
}