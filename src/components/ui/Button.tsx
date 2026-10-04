import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, isExternal, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const variants = {
      primary:
        "bg-[#1769D2] hover:bg-[#124B9A] text-white shadow-sm hover:shadow-md focus:ring-[#1769D2] btn-shimmer",
      secondary:
        "bg-[#EAF4FF] hover:bg-[#d8eaff] text-[#1769D2] font-semibold focus:ring-[#3988E8]",
      outline:
        "border border-[#E2EAF4] hover:border-[#1769D2] hover:bg-[#F3F8FF] text-[#172B4D] hover:text-[#1769D2] focus:ring-[#1769D2]",
      ghost:
        "text-[#172B4D] hover:bg-[#F3F8FF] hover:text-[#1769D2] focus:ring-[#1769D2]",
      white:
        "bg-white hover:bg-[#F3F8FF] text-[#1769D2] border border-[#E2EAF4] shadow-sm hover:shadow focus:ring-[#1769D2]",
    };

    const sizes = {
      sm: "text-xs px-3 py-1.5 gap-1.5",
      md: "text-sm px-4 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
    };

    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <Link
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className={combinedClassName}
        >
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
