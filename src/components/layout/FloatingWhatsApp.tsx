"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageSquare } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function FloatingWhatsApp() {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40">
      <Link
        href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${siteConfig.whatsappPrefill}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="Chat with RD Plumbing Solution on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-white text-white" />
        <span className="hidden sm:inline font-semibold text-xs tracking-wide">
          Chat on WhatsApp
        </span>
      </Link>
    </div>
  );
}
