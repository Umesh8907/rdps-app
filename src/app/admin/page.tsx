"use client";

import * as React from "react";
import Link from "next/link";
import {
  FileText,
  TrendingUp,
  Clock,
  CheckCircle2,
  XCircle,
  MessageSquare,
  ArrowUpRight,
  Download,
  Phone,
  Mail,
  ExternalLink,
  ChevronRight,
  Calendar,
  MapPin,
  HardHat,
  Sparkles,
  Layers,
} from "lucide-react";
import { QuotationRecord, ContactRecord } from "@/lib/db";

export default function AdminDashboardPage() {
  const [stats, setStats] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/stats");
      if (res.ok) {
        const data = await res.json();
        setStats(data.stats);
      }
    } catch (err) {
      console.error("Dashboard stats error:", err);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchDashboardData();
  }, []);

  const getStatusBadge = (status?: string) => {
    switch (status) {
      case "new":
        return { label: "New Lead", bg: "bg-amber-500/15 text-amber-300 border-amber-500/30" };
      case "reviewing":
        return { label: "Under Review", bg: "bg-blue-500/15 text-blue-300 border-blue-500/30" };
      case "quote_sent":
        return { label: "Quote Sent", bg: "bg-purple-500/15 text-purple-300 border-purple-500/30" };
      case "won":
        return { label: "Deal Won", bg: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30" };
      case "lost":
        return { label: "Lost / Closed", bg: "bg-rose-500/15 text-rose-300 border-rose-500/30" };
      default:
        return { label: "New", bg: "bg-amber-500/15 text-amber-300 border-amber-500/30" };
    }
  };

  if (loading && !stats) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-28 rounded-2xl bg-slate-900/60 border border-slate-800/80" />
          ))}
        </div>
        <div className="h-80 rounded-2xl bg-slate-900/60 border border-slate-800/80" />
      </div>
    );
  }

  const quotes = stats?.quotations || { total: 0, new: 0, reviewing: 0, sent: 0, won: 0, lost: 0 };
  const contacts = stats?.contacts || { total: 0, new: 0 };
  const recentQuotes: QuotationRecord[] = stats?.recentQuotations || [];
  const popularServices = stats?.popularServices || [];

  return (
    <div className="space-y-6">
      {/* Top Banner / Quick Action Bar */}
      <div className="bg-linear-to-r from-amber-500/10 via-slate-900/90 to-slate-900 border border-amber-500/20 p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-white">Engineering Leads & Quotation Control</h2>
            <span className="text-xs px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-bold">
              Phase 1 Active
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Track inquiries, update technical estimations, and contact site developers.
          </p>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <a
            href="/api/admin/quotations/export"
            download
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-amber-400" />
            <span>Export CSV</span>
          </a>
          <Link
            href="/admin/quotations"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow-md shadow-amber-500/20 transition-colors"
          >
            <span>View All Leads</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Quotes */}
        <div className="bg-[#0B132B] border border-slate-800 p-5 rounded-2xl relative overflow-hidden group hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Total Quotation Leads
            </span>
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">{quotes.total}</span>
            {quotes.new > 0 && (
              <span className="text-xs font-bold text-amber-400 bg-amber-500/15 px-2 py-0.5 rounded-full border border-amber-500/30">
                {quotes.new} new
              </span>
            )}
          </div>
          <p className="text-[11px] text-slate-500 mt-1">Inbound piling & foundation RFQs</p>
        </div>

        {/* In Review */}
        <div className="bg-[#0B132B] border border-slate-800 p-5 rounded-2xl relative overflow-hidden group hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              In Review / Estimating
            </span>
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">{quotes.reviewing + quotes.sent}</span>
            <span className="text-xs font-medium text-slate-400">
              ({quotes.sent} quote sent)
            </span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">Active negotiation pipeline</p>
        </div>

        {/* Won Projects */}
        <div className="bg-[#0B132B] border border-slate-800 p-5 rounded-2xl relative overflow-hidden group hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Deals Won / Mobilized
            </span>
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-black text-emerald-400">{quotes.won}</span>
            <span className="text-xs font-semibold text-emerald-300/80">
              {quotes.total > 0 ? `${Math.round((quotes.won / quotes.total) * 100)}% conversion` : "0%"}
            </span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">Contracts signed & mobilized</p>
        </div>

        {/* Contact Messages */}
        <div className="bg-[#0B132B] border border-slate-800 p-5 rounded-2xl relative overflow-hidden group hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Contact Inquiries
            </span>
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center">
              <MessageSquare className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">{contacts.total}</span>
            {contacts.new > 0 && (
              <span className="text-xs font-bold text-purple-300 bg-purple-500/15 px-2 py-0.5 rounded-full border border-purple-500/30">
                {contacts.new} unread
              </span>
            )}
          </div>
          <p className="text-[11px] text-slate-500 mt-1">General inquiries & rig rentals</p>
        </div>
      </div>

      {/* Main Grid: Recent Inquiries + Service Demand Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Recent Quotations Stream */}
        <div className="lg:col-span-2 bg-[#0B132B] border border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white">Recent Quotation Requests</h3>
              <p className="text-xs text-slate-400">Latest technical inquiries from developers & contractors</p>
            </div>
            <Link
              href="/admin/quotations"
              className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
            >
              <span>View CRM</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {recentQuotes.length === 0 ? (
            <div className="p-8 text-center border border-dashed border-slate-800 rounded-xl">
              <HardHat className="w-8 h-8 text-slate-600 mx-auto mb-2" />
              <p className="text-sm font-semibold text-slate-400">No quotation requests yet</p>
              <p className="text-xs text-slate-500 mt-0.5">New submissions via the website will appear here instantly.</p>
            </div>
          ) : (
            <div className="divide-y divide-slate-800/80">
              {recentQuotes.map((q) => {
                const badge = getStatusBadge(q.status);
                return (
                  <div
                    key={q.id}
                    className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group hover:bg-slate-900/40 p-2 rounded-xl transition-colors"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                          {q.fullName}
                        </span>
                        {q.companyName && (
                          <span className="text-xs text-slate-400 font-medium">
                            • {q.companyName}
                          </span>
                        )}
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${badge.bg}`}>
                          {badge.label}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-slate-400 flex-wrap">
                        <span className="flex items-center gap-1 text-slate-300">
                          <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          {q.projectLocation}, {q.state}
                        </span>
                        {q.createdAt && (
                          <span className="text-slate-500">
                            {new Date(q.createdAt).toLocaleDateString("en-IN", {
                              month: "short",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-400 line-clamp-1 italic font-sans">
                        &quot;{q.description}&quot;
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2 shrink-0">
                      <Link
                        href={`/admin/quotations?id=${q.id}`}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                      >
                        Manage Lead
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Right 1 Col: Popular Services Breakdown & Quick Stats */}
        <div className="space-y-6">
          {/* Popular Services Demand */}
          <div className="bg-[#0B132B] border border-slate-800 rounded-2xl p-5 space-y-4">
            <div>
              <h3 className="text-base font-bold text-white">Top Services Demanded</h3>
              <p className="text-xs text-slate-400">Most frequent client requirements</p>
            </div>

            {popularServices.length === 0 ? (
              <p className="text-xs text-slate-500 italic">No services data available yet.</p>
            ) : (
              <div className="space-y-3">
                {popularServices.map((svc: any, idx: number) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-medium truncate">{svc.name}</span>
                      <span className="text-amber-400 font-bold shrink-0">{svc.count} requests</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-amber-500 to-amber-400 rounded-full"
                        style={{
                          width: `${Math.min(100, (svc.count / Math.max(1, quotes.total)) * 100)}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Help Card */}
          <div className="bg-linear-to-br from-slate-900 to-[#0B132B] border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2">
              <HardHat className="w-5 h-5 text-amber-400" />
              <h4 className="text-sm font-bold text-white">RDPS Lead Workflow</h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              When a client requests a quote, check their borehole soil conditions, verify rig capacity, update status to <span className="text-purple-300 font-semibold">&quot;Quote Sent&quot;</span>, and record your internal BOQ estimation in notes.
            </p>
            <div className="pt-2">
              <Link
                href="/admin/quotations"
                className="text-xs font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
              >
                <span>Go to Quotations CRM</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
