"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import { AdminSidebar } from "./AdminSidebar";
import { AdminHeader } from "./AdminHeader";

export function AdminLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const [newQuotesCount, setNewQuotesCount] = React.useState(0);
  const [newContactsCount, setNewContactsCount] = React.useState(0);
  const [dbConnected, setDbConnected] = React.useState(false);
  const [loadingAuth, setLoadingAuth] = React.useState(true);

  // If we are on /admin/login, don't show the sidebar or header shell
  const isLoginPage = pathname === "/admin/login";

  const fetchStats = React.useCallback(async () => {
    try {
      const res = await fetch("/api/admin/stats");
      if (res.status === 401) {
        if (!isLoginPage) {
          router.push("/admin/login");
        }
        return;
      }
      if (res.ok) {
        const data = await res.json();
        if (data.stats) {
          setNewQuotesCount(data.stats.quotations?.new || 0);
          setNewContactsCount(data.stats.contacts?.new || 0);
          setDbConnected(!!data.stats.dbConnected);
        }
      }
    } catch (err) {
      console.error("Failed to load badge stats", err);
    } finally {
      setLoadingAuth(false);
    }
  }, [isLoginPage, router]);

  React.useEffect(() => {
    if (!isLoginPage) {
      fetchStats();
    } else {
      setLoadingAuth(false);
    }
  }, [fetchStats, isLoginPage]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchStats();
    router.refresh();
    setTimeout(() => setIsRefreshing(false), 500);
  };

  if (isLoginPage) {
    return (
      <div className="min-h-screen bg-[#070D1E] text-slate-100 flex items-center justify-center p-4">
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070D1E] text-slate-100 flex flex-col lg:flex-row antialiased">
      {/* Sidebar */}
      <AdminSidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        newQuotesCount={newQuotesCount}
        newContactsCount={newContactsCount}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <AdminHeader
          onOpenMobileMenu={() => setMobileOpen(true)}
          onRefresh={handleRefresh}
          isRefreshing={isRefreshing}
          dbConnected={dbConnected}
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto space-y-6">
          {children}
        </main>
      </div>
    </div>
  );
}
