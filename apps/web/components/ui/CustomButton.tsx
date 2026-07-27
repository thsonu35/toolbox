import React from "react";
import Link from "next/link";

interface CustomButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
}

export default function CustomButton({
  text,
  href,
  onClick,
  icon,
  variant = "primary",
  className = "",
}: CustomButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-150 shadow-sm focus:outline-none focus:ring-2 focus:ring-ring";
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-border bg-background hover:bg-secondary text-foreground",
    ghost: "bg-transparent shadow-none hover:bg-secondary text-foreground",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {icon && <span>{icon}</span>}
        <span>{text}</span>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </button>
  );
}