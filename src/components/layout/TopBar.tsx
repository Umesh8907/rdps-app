"use client";

import * as React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Megaphone,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export interface FlashMessage {
  id: string;
  badge: string;
  text: string;
  linkText?: string;
  linkHref?: string;
}

const defaultFlashMessages: FlashMessage[] = [
  {
    id: "tenders-notice",
    badge: "Contract Notice",
    text: "Now accepting pipeline, drainage & plumbing infrastructure contracts for 2026 across Pan-India.",
    linkText: "Request BOQ",
    linkHref: "/request-a-quotation",
  },
  {
    id: "active-worksites",
    badge: "Active Worksites",
    text: "Live pipeline laying and chamber construction underway in Sector 24, Naya Raipur.",
    linkText: "View Worksites",
    linkHref: "/projects/ongoing",
  },
  {
    id: "turnaround-quote",
    badge: "Rapid Estimates",
    text: "Fast turnaround for civil & underground infrastructure project quotations.",
    linkText: "Get Quote",
    linkHref: "/request-a-quotation",
  },
  {
    id: "direct-helpline",
    badge: "Direct Line",
    text: "Direct discussion with Chief Project Engineer for commercial projects.",
    linkText: "Call Now",
    linkHref: `tel:${siteConfig.contact.phone}`,
  },
];

export function TopBar() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [animating, setAnimating] = React.useState(false);

  const messages = defaultFlashMessages;

  const nextMessage = React.useCallback(() => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
      setAnimating(false);
    }, 200);
  }, [messages.length]);

  const prevMessage = React.useCallback(() => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + messages.length) % messages.length);
      setAnimating(false);
    }, 200);
  }, [messages.length]);

  React.useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextMessage();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, nextMessage]);

  const currentMsg = messages[currentIndex];

  return (
    <div
      className="bg-[#172B4D] text-white border-b border-[#23385D] text-xs transition-all relative z-50 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-9 sm:h-10">
          
          {/* Left / Center: Flashing Message Ticker */}
          <div className="flex items-center gap-2 sm:gap-3 grow overflow-hidden pr-2 sm:pr-4">
            {/* Live Indicator / Flash Badge */}
            <div className="hidden xs:flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#1769D2] text-white font-bold text-[10px] tracking-wider uppercase shrink-0 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-ping" />
              <span>{currentMsg.badge}</span>
            </div>

            {/* Navigation Arrows for Ticker */}
            <div className="flex items-center gap-0.5 shrink-0 text-slate-400">
              <button
                onClick={prevMessage}
                aria-label="Previous announcement"
                className="p-1 hover:text-white hover:bg-white/10 rounded transition-colors focus:outline-none"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={nextMessage}
                aria-label="Next announcement"
                className="p-1 hover:text-white hover:bg-white/10 rounded transition-colors focus:outline-none"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Rotating Message Content */}
            <div
              className={`flex items-center gap-2 truncate transition-all duration-200 ${
                animating ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
              }`}
            >
              <span className="text-slate-200 font-normal truncate text-[11px] sm:text-xs">
                {currentMsg.text}
              </span>

              {currentMsg.linkHref && currentMsg.linkText && (
                <Link
                  href={currentMsg.linkHref}
                  className="hidden md:inline-flex items-center gap-1 text-[#3988E8] hover:text-white font-semibold underline underline-offset-2 shrink-0 transition-colors text-[11px] sm:text-xs"
                >
                  <span>{currentMsg.linkText}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              )}
            </div>
          </div>

          {/* Right Side: Quick Contact & Working Hours (Desktop & Tablet) */}
          <div className="hidden lg:flex items-center gap-5 shrink-0 text-slate-300 text-[11px]">
            {/* Phone */}
            <Link
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#3988E8]" />
              <span className="font-semibold text-white">{siteConfig.contact.phoneDisplay}</span>
            </Link>

            <span className="text-slate-600">|</span>

            {/* Email */}
            <Link
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#3988E8]" />
              <span>{siteConfig.contact.email}</span>
            </Link>

            <span className="text-slate-600">|</span>

            {/* Location / Presence */}
            <div className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#3988E8]" />
              <span>Naya Raipur, CG</span>
            </div>
          </div>

          {/* Mobile Right Call Icon */}
          <div className="flex lg:hidden items-center shrink-0">
            <Link
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#1769D2]/30 hover:bg-[#1769D2]/60 text-white font-medium text-[11px] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#3988E8]" />
              <span className="hidden sm:inline">{siteConfig.contact.phoneDisplay}</span>
              <span className="sm:hidden">Call</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
