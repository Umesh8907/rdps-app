"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  FolderKanban,
  Image as ImageIcon,
  Settings,
  LogOut,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  HardHat,
  Sparkles,
} from "lucide-react";

interface AdminSidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  newQuotesCount?: number;
  newContactsCount?: number;
}

export function AdminSidebar({
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
  newQuotesCount = 0,
  newContactsCount = 0,
}: AdminSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = React.useState(false);

  const handleLogout = async () => {
    if (!confirm("Are you sure you want to log out of the Admin Portal?")) return;
    setLoggingOut(true);
    try {
      await fetch("/api/admin/auth/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch {
      router.push("/admin/login");
    } finally {
      setLoggingOut(false);
    }
  };

  const navItems = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
      badge: null,
      exact: true,
    },
    {
      title: "Quotations (CRM)",
      href: "/admin/quotations",
      icon: FileText,
      badge: newQuotesCount > 0 ? `${newQuotesCount} new` : null,
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    },
    {
      title: "Contact Messages",
      href: "/admin/contacts",
      icon: MessageSquare,
      badge: newContactsCount > 0 ? `${newContactsCount}` : null,
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    },
    {
      title: "Projects CMS",
      href: "/admin/projects",
      icon: FolderKanban,
      badge: "Phase 2",
      badgeColor: "bg-slate-800 text-slate-400 border-slate-700",
    },
    {
      title: "Media Gallery",
      href: "/admin/gallery",
      icon: ImageIcon,
      badge: "Phase 2",
      badgeColor: "bg-slate-800 text-slate-400 border-slate-700",
    },
    {
      title: "Portal Settings",
      href: "/admin/settings",
      icon: Settings,
      badge: null,
    },
  ];

  const isActive = (href: string, exact?: boolean) => {
    if (exact) return pathname === href;
    return pathname?.startsWith(href);
  };

  const sidebarContent = (
    <div className="flex flex-col h-full bg-[#0B132B] text-slate-200 border-r border-slate-800/80 selection:bg-amber-500 selection:text-slate-950">
      {/* Brand Header */}
      <div className="p-4 flex items-center justify-between border-b border-slate-800/80">
        <Link
          href="/admin"
          className="flex items-center gap-3 group overflow-hidden"
          onClick={() => setMobileOpen(false)}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-400 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20 shrink-0 font-extrabold tracking-wider">
            <HardHat className="w-6 h-6" />
          </div>
          {!collapsed && (
            <div className="transition-all duration-200 truncate">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base tracking-tight text-white">RDPS</span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  ADMIN
                </span>
              </div>
              <p className="text-[11px] text-slate-400 truncate">Infrastructure CRM</p>
            </div>
          )}
        </Link>

        {/* Desktop Collapse Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex items-center justify-center w-7 h-7 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
          title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1.5">
        <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
          {!collapsed ? "Core Management" : "•••"}
        </div>

        {navItems.map((item) => {
          const active = isActive(item.href, item.exact);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group relative ${
                active
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-md shadow-amber-500/10"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/50"
              }`}
              title={collapsed ? item.title : undefined}
            >
              <Icon
                className={`w-5 h-5 shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                  active ? "text-slate-950" : "text-slate-400 group-hover:text-amber-400"
                }`}
              />

              {!collapsed && (
                <span className="flex-1 truncate">{item.title}</span>
              )}

              {!collapsed && item.badge && (
                <span
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                    active
                      ? "bg-slate-950/20 text-slate-950 border-slate-950/30"
                      : item.badgeColor || "bg-slate-800 text-slate-300 border-slate-700"
                  }`}
                >
                  {item.badge}
                </span>
              )}

              {/* Active bar for collapsed mode */}
              {collapsed && active && (
                <div className="absolute right-0 top-2 bottom-2 w-1 rounded-l bg-amber-400" />
              )}
            </Link>
          );
        })}
      </div>

      {/* Footer Profile & Actions */}
      <div className="p-3 border-t border-slate-800/80 space-y-2 bg-[#080d1e]">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-2.5 px-3 py-2 text-xs text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/40 transition-colors group"
          title="Open Public Website"
        >
          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-400 shrink-0" />
          {!collapsed && <span className="truncate">Live Website</span>}
        </Link>

        <button
          onClick={handleLogout}
          disabled={loggingOut}
          className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-rose-400 hover:text-rose-200 hover:bg-rose-500/10 rounded-lg border border-transparent hover:border-rose-500/20 transition-all"
          title="Log out"
        >
          <LogOut className="w-4 h-4 shrink-0" />
          {!collapsed && <span>{loggingOut ? "Logging out..." : "Log Out"}</span>}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:block h-screen sticky top-0 transition-all duration-300 z-30 ${
          collapsed ? "w-20" : "w-64"
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative w-72 max-w-[85vw] h-full shadow-2xl z-50">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
