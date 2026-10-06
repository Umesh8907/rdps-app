"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  RotateCw,
  Search,
  Database,
  ShieldCheck,
  Bell,
  Sparkles,
  ChevronRight,
} from "lucide-react";

interface AdminHeaderProps {
  onOpenMobileMenu: () => void;
  onRefresh?: () => void;
  isRefreshing?: boolean;
  dbConnected?: boolean;
}

export function AdminHeader({
  onOpenMobileMenu,
  onRefresh,
  isRefreshing = false,
  dbConnected = false,
}: AdminHeaderProps) {
  const pathname = usePathname();

  // Compute dynamic page title
  const getPageInfo = () => {
    if (pathname === "/admin") return { title: "Dashboard Overview", subtitle: "Real-time metrics & recent submissions" };
    if (pathname?.startsWith("/admin/quotations")) return { title: "Quotation Requests (CRM)", subtitle: "Manage piling inquiries & pipeline estimation" };
    if (pathname?.startsWith("/admin/contacts")) return { title: "Contact Enquiries", subtitle: "Inbound messages and customer requests" };
    if (pathname?.startsWith("/admin/projects")) return { title: "Projects Manager", subtitle: "Publish and update ongoing & completed site works" };
    if (pathname?.startsWith("/admin/gallery")) return { title: "Media Gallery", subtitle: "Rig photos, testing logs & on-site machinery photos" };
    if (pathname?.startsWith("/admin/settings")) return { title: "System & Settings", subtitle: "Portal configuration, database & credentials" };
    return { title: "Admin Portal", subtitle: "RDPS Management" };
  };

  const pageInfo = getPageInfo();

  return (
    <header className="sticky top-0 z-20 bg-[#0B132B]/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
      {/* Left section: mobile button + page heading */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileMenu}
          className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/70 border border-slate-700/60"
          aria-label="Open navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {pageInfo.title}
            </h1>
          </div>
          <p className="hidden sm:block text-xs text-slate-400 mt-0.5">
            {pageInfo.subtitle}
          </p>
        </div>
      </div>

      {/* Right section: DB status, Refresh, User badge */}
      <div className="flex items-center gap-3">
        {/* Database Status indicator */}
        <div
          className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${
            dbConnected
              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
              : "bg-amber-500/10 text-amber-300 border-amber-500/30"
          }`}
          title={dbConnected ? "Neon Postgres Live Connected" : "Running on Dev Mode In-Memory Store"}
        >
          <span className={`w-2 h-2 rounded-full ${dbConnected ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
          <Database className="w-3 h-3" />
          <span>{dbConnected ? "Neon DB" : "Dev Storage"}</span>
        </div>

        {/* Refresh button */}
        {onRefresh && (
          <button
            onClick={onRefresh}
            disabled={isRefreshing}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-700/50 transition-colors"
            title="Refresh current data"
          >
            <RotateCw className={`w-4 h-4 ${isRefreshing ? "animate-spin text-amber-400" : ""}`} />
          </button>
        )}

        {/* User pill */}
        <div className="flex items-center gap-2 pl-2 sm:border-l sm:border-slate-800">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 font-bold flex items-center justify-center text-xs shadow-sm">
            AD
          </div>
          <div className="hidden md:block text-left">
            <p className="text-xs font-semibold text-white leading-tight">Admin User</p>
            <p className="text-[10px] text-amber-400 font-medium">Superadmin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
