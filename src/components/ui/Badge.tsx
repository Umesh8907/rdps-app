import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "blue" | "success" | "neutral" | "outline";
}

export function Badge({ className, variant = "blue", children, ...props }: BadgeProps) {
  const variants = {
    blue: "bg-[#EAF4FF] text-[#1769D2] border border-[#d2e6fc]",
    success: "bg-[#DCFCE7] text-[#166534] border border-[#bbf7d0]",
    neutral: "bg-[#F3F8FF] text-[#475569] border border-[#E2EAF4]",
    outline: "border border-[#E2EAF4] text-[#172B4D] bg-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
