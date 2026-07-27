import React from "react";
import CategoryView from "@/views/CategoryView";

/* Type Definition for URL Parameters */
interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* Dynamic Page Metadata Generation for SEO */
export async function generateMetadata({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const rawSlug = resolvedParams?.slug || "general";
  const formattedTitle = rawSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${formattedTitle} | Toolbox`,
    description: `Explore all tools and utilities in the ${formattedTitle} category. Fast, secure, and fully browser-based.`,
  };
}

/* Main Server Component */
export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || "general";

  return <CategoryView slug={slug} />;
}