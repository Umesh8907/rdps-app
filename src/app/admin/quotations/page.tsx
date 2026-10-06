"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import {
  Search,
  Filter,
  Download,
  Phone,
  Mail,
  MessageSquare,
  MapPin,
  Calendar,
  Building,
  CheckCircle2,
  Clock,
  Send,
  Trophy,
  XCircle,
  Archive,
  Eye,
  Trash2,
  X,
  ExternalLink,
  ChevronRight,
  HardHat,
  Save,
  Copy,
  Check,
  AlertCircle,
} from "lucide-react";
import { QuotationRecord, QuotationStatus } from "@/lib/db";

const STATUS_CONFIG: Record<
  QuotationStatus,
  { label: string; bg: string; text: string; border: string; icon: any }
> = {
  new: {
    label: "New Lead",
    bg: "bg-amber-500/15",
    text: "text-amber-300",
    border: "border-amber-500/30",
    icon: Clock,
  },
  reviewing: {
    label: "Under Review",
    bg: "bg-blue-500/15",
    text: "text-blue-300",
    border: "border-blue-500/30",
    icon: Clock,
  },
  quote_sent: {
    label: "Quote Sent",
    bg: "bg-purple-500/15",
    text: "text-purple-300",
    border: "border-purple-500/30",
    icon: Send,
  },
  won: {
    label: "Deal Won",
    bg: "bg-emerald-500/15",
    text: "text-emerald-300",
    border: "border-emerald-500/30",
    icon: Trophy,
  },
  lost: {
    label: "Lost / Closed",
    bg: "bg-rose-500/15",
    text: "text-rose-300",
    border: "border-rose-500/30",
    icon: XCircle,
  },
  archived: {
    label: "Archived",
    bg: "bg-slate-800",
    text: "text-slate-400",
    border: "border-slate-700",
    icon: Archive,
  },
};

function QuotationsContent() {
  const searchParams = useSearchParams();
  const urlSelectedId = searchParams.get("id");

  const [quotations, setQuotations] = React.useState<QuotationRecord[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [statusFilter, setStatusFilter] = React.useState<string>("all");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [selectedQuote, setSelectedQuote] = React.useState<QuotationRecord | null>(null);

  // Edit / update status in modal
  const [editingStatus, setEditingStatus] = React.useState<QuotationStatus>("new");
  const [editingNotes, setEditingNotes] = React.useState<string>("");
  const [savingChanges, setSavingChanges] = React.useState(false);
  const [saveSuccess, setSaveSuccess] = React.useState(false);
  const [copiedPhone, setCopiedPhone] = React.useState(false);

  const fetchQuotations = async () => {
    try {
      setLoading(true);
      const query = new URLSearchParams();
      if (statusFilter !== "all") query.set("status", statusFilter);
      if (searchQuery.trim()) query.set("search", searchQuery.trim());

      const res = await fetch(`/api/admin/quotations?${query.toString()}`);
      if (res.ok) {
        const data = await res.json();
        setQuotations(data.quotations || []);

        if (urlSelectedId) {
          const match = (data.quotations || []).find((q: QuotationRecord) => q.id === urlSelectedId);
          if (match) {
            handleOpenDetails(match);
          }
        }
      }
    } catch (err) {
      console.error("Failed to load quotations", err);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchQuotations();
  }, [statusFilter]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchQuotations();
  };

  const handleOpenDetails = (quote: QuotationRecord) => {
    setSelectedQuote(quote);
    setEditingStatus(quote.status || "new");
    setEditingNotes(quote.notes || "");
    setSaveSuccess(false);
  };

  const handleUpdateStatusAndNotes = async () => {
    if (!selectedQuote?.id) return;
    setSavingChanges(true);
    setSaveSuccess(false);

    try {
      const res = await fetch(`/api/admin/quotations/${selectedQuote.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: editingStatus,
          notes: editingNotes,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        const updated = data.quotation;
        setSelectedQuote(updated);
        setQuotations((prev) =>
          prev.map((q) => (q.id === updated.id ? { ...q, ...updated } : q))
        );
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
      }
    } catch (err) {
      console.error("Failed to update quotation", err);
    } finally {
      setSavingChanges(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to permanently delete quotation request from "${name}"?`)) return;

    try {
      const res = await fetch(`/api/admin/quotations/${id}`, { method: "DELETE" });
      if (res.ok) {
        setQuotations((prev) => prev.filter((q) => q.id !== id));
        if (selectedQuote?.id === id) {
          setSelectedQuote(null);
        }
      }
    } catch (err) {
      console.error("Failed to delete quotation", err);
    }
  };

  const handleCopyPhone = (phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const generateWhatsAppLink = (q: QuotationRecord) => {
    const cleanPhone = q.phone.replace(/[^0-9]/g, "");
    const formattedPhone = cleanPhone.startsWith("91") ? cleanPhone : `91${cleanPhone}`;
    const text = encodeURIComponent(
      `Hello ${q.fullName},\n\nGreetings from RDPS (Rotary Drilling & Piling Solutions)!\n\nWe received your quotation inquiry for ${q.projectType} in ${q.projectLocation}, ${q.state}.\n\nOur engineering team has reviewed your project parameters. Would you be available for a brief discussion regarding the site soil condition, rig mobilization, and estimation?\n\nBest regards,\nRDPS Engineering Team`
    );
    return `https://wa.me/${formattedPhone}?text=${text}`;
  };

  const statusCounts = {
    all: quotations.length,
    new: quotations.filter((q) => q.status === "new" || !q.status).length,
    reviewing: quotations.filter((q) => q.status === "reviewing").length,
    quote_sent: quotations.filter((q) => q.status === "quote_sent").length,
    won: quotations.filter((q) => q.status === "won").length,
    lost: quotations.filter((q) => q.status === "lost").length,
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search */}
        <form onSubmit={handleSearchSubmit} className="flex-1 max-w-md relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by client, phone, location, project..."
            className="w-full pl-10 pr-20 py-2.5 rounded-xl bg-[#0B132B] border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-hidden focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
          />
          <button
            type="submit"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg transition-colors"
          >
            Search
          </button>
        </form>

        {/* Export & Actions */}
        <div className="flex items-center gap-2">
          <a
            href={`/api/admin/quotations/export?status=${statusFilter}&search=${encodeURIComponent(searchQuery)}`}
            download
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#0B132B] hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-amber-400" />
            <span>Export CSV ({quotations.length})</span>
          </a>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {[
          { key: "all", label: "All Leads" },
          { key: "new", label: "New Leads", count: statusCounts.new },
          { key: "reviewing", label: "Under Review", count: statusCounts.reviewing },
          { key: "quote_sent", label: "Quote Sent", count: statusCounts.quote_sent },
          { key: "won", label: "Won", count: statusCounts.won },
          { key: "lost", label: "Lost / Closed", count: statusCounts.lost },
        ].map((tab) => {
          const active = statusFilter === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setStatusFilter(tab.key)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border ${
                active
                  ? "bg-amber-500 text-slate-950 border-amber-400 shadow-sm"
                  : "bg-[#0B132B] text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
              }`}
            >
              <span>{tab.label}</span>
              {tab.count !== undefined && tab.count > 0 && (
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    active ? "bg-slate-950 text-amber-300" : "bg-slate-800 text-amber-400"
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Quotations Table */}
      <div className="bg-[#0B132B] border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        {loading ? (
          <div className="p-12 text-center text-slate-400 space-y-2">
            <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs">Loading quotation pipeline...</p>
          </div>
        ) : quotations.length === 0 ? (
          <div className="p-12 text-center space-y-2">
            <HardHat className="w-10 h-10 text-slate-600 mx-auto" />
            <p className="text-sm font-bold text-slate-300">No quotation requests found</p>
            <p className="text-xs text-slate-500">
              {searchQuery ? "Try clearing your search query." : "New leads submitted on the site will appear here."}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#080d1e] text-slate-400 text-[11px] uppercase tracking-wider border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">Client / Company</th>
                  <th className="py-3 px-4">Project & Location</th>
                  <th className="py-3 px-4">Services Demanded</th>
                  <th className="py-3 px-4">Timeline / Size</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {quotations.map((q) => {
                  const statusKey = (q.status || "new") as QuotationStatus;
                  const cfg = STATUS_CONFIG[statusKey] || STATUS_CONFIG.new;
                  const StatusIcon = cfg.icon;

                  return (
                    <tr
                      key={q.id}
                      className="hover:bg-slate-900/40 transition-colors group cursor-pointer"
                      onClick={() => handleOpenDetails(q)}
                    >
                      {/* Client */}
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-white group-hover:text-amber-300 transition-colors">
                          {q.fullName}
                        </div>
                        {q.companyName && (
                          <div className="text-xs text-slate-400 font-medium truncate max-w-[180px]">
                            {q.companyName}
                          </div>
                        )}
                        <div className="text-[11px] text-slate-500 mt-0.5">{q.phone}</div>
                      </td>

                      {/* Project & Location */}
                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-slate-200">{q.projectType}</div>
                        <div className="flex items-center gap-1 text-xs text-slate-400 mt-0.5">
                          <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                          <span>{q.projectLocation}, {q.state}</span>
                        </div>
                      </td>

                      {/* Services */}
                      <td className="py-3.5 px-4">
                        <div className="flex flex-wrap gap-1 max-w-[220px]">
                          {(q.services || []).slice(0, 2).map((s, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700 truncate"
                            >
                              {s}
                            </span>
                          ))}
                          {(q.services || []).length > 2 && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-slate-800 text-amber-400">
                              +{(q.services || []).length - 2} more
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Timeline / Size */}
                      <td className="py-3.5 px-4 text-xs text-slate-300">
                        {q.projectSize && <div className="font-medium">{q.projectSize}</div>}
                        {q.startDate && (
                          <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                            <Calendar className="w-3 h-3" />
                            <span>Start: {q.startDate}</span>
                          </div>
                        )}
                      </td>

                      {/* Status */}
                      <td className="py-3.5 px-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${cfg.bg} ${cfg.text} ${cfg.border}`}
                        >
                          <StatusIcon className="w-3 h-3" />
                          <span>{cfg.label}</span>
                        </span>
                      </td>

                      {/* Date */}
                      <td className="py-3.5 px-4 text-xs text-slate-400 whitespace-nowrap">
                        {q.createdAt ? (
                          new Date(q.createdAt).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                          })
                        ) : (
                          "Recent"
                        )}
                      </td>

                      {/* Action buttons */}
                      <td
                        className="py-3.5 px-4 text-right whitespace-nowrap"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center justify-end gap-1.5">
                          {/* WhatsApp */}
                          <a
                            href={generateWhatsAppLink(q)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 transition-colors"
                            title="Chat on WhatsApp"
                          >
                            <MessageSquare className="w-4 h-4" />
                          </a>

                          {/* Call */}
                          <a
                            href={`tel:${q.phone}`}
                            className="p-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20 transition-colors"
                            title="Call Phone"
                          >
                            <Phone className="w-4 h-4" />
                          </a>

                          {/* View details */}
                          <button
                            onClick={() => handleOpenDetails(q)}
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                            title="View Full Details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>

                          {/* Delete */}
                          <button
                            onClick={() => handleDelete(q.id!, q.fullName)}
                            className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 transition-colors"
                            title="Delete Request"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Slide-over Drawer / Modal for Selected Quotation */}
      {selectedQuote && (
        <div className="fixed inset-0 z-50 flex items-center justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs transition-opacity"
            onClick={() => setSelectedQuote(null)}
          />

          {/* Drawer Panel */}
          <div className="relative w-full max-w-2xl h-full bg-[#0B132B] border-l border-slate-800 shadow-2xl flex flex-col z-50 overflow-hidden animate-slideLeft">
            {/* Header */}
            <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-[#080d1e]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold">
                  <HardHat className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-white">{selectedQuote.fullName}</h3>
                    <span className="text-xs text-slate-400">ID: {selectedQuote.id?.slice(0, 14)}...</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    {selectedQuote.companyName || "Individual Client"} • Submitted{" "}
                    {selectedQuote.createdAt
                      ? new Date(selectedQuote.createdAt).toLocaleString("en-IN")
                      : "Recently"}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedQuote(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 text-xs sm:text-sm">
              {/* Quick Contact Bar */}
              <div className="grid grid-cols-3 gap-2.5">
                <a
                  href={generateWhatsAppLink(selectedQuote)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 font-bold border border-emerald-500/30 transition-all text-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Lead</span>
                </a>

                <a
                  href={`tel:${selectedQuote.phone}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-blue-500/15 hover:bg-blue-500/25 text-blue-300 font-bold border border-blue-500/30 transition-all text-xs"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {selectedQuote.phone}</span>
                </a>

                {selectedQuote.email ? (
                  <a
                    href={`mailto:${selectedQuote.email}?subject=Regarding RDPS Quotation Request for ${encodeURIComponent(
                      selectedQuote.projectType
                    )}`}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-purple-500/15 hover:bg-purple-500/25 text-purple-300 font-bold border border-purple-500/30 transition-all text-xs"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email Client</span>
                  </a>
                ) : (
                  <button
                    onClick={() => handleCopyPhone(selectedQuote.phone)}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold border border-slate-700 transition-all text-xs"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedPhone ? "Phone Copied" : "Copy Phone"}</span>
                  </button>
                )}
              </div>

              {/* Status & Estimation Section */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    CRM Lead Status & Pipeline
                  </label>
                  {saveSuccess && (
                    <span className="text-xs text-emerald-400 flex items-center gap-1 font-semibold animate-fadeIn">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Changes Saved!</span>
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Pipeline Stage</label>
                    <select
                      value={editingStatus}
                      onChange={(e) => setEditingStatus(e.target.value as QuotationStatus)}
                      className="w-full py-2 px-3 rounded-xl bg-[#0B132B] border border-slate-700 text-white text-xs font-semibold focus:outline-hidden focus:border-amber-400"
                    >
                      <option value="new">🟡 New Lead (Pending Review)</option>
                      <option value="reviewing">🔵 Under Review (Calculating BOQ)</option>
                      <option value="quote_sent">🟣 Quotation Dispatched</option>
                      <option value="won">🟢 Deal Won (Contract Signed)</option>
                      <option value="lost">🔴 Deal Lost / Cancelled</option>
                      <option value="archived">⚪ Archived</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Target Start Date</label>
                    <div className="py-2 px-3 rounded-xl bg-[#0B132B] border border-slate-800 text-slate-300 text-xs font-medium">
                      {selectedQuote.startDate || "Not specified by client"}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">
                    Internal Estimation Notes & Quotation Log
                  </label>
                  <textarea
                    rows={3}
                    value={editingNotes}
                    onChange={(e) => setEditingNotes(e.target.value)}
                    placeholder="Enter internal notes, e.g. 'Estimated 120 piles 800mm @ 18m. Quoted Rs 18.5L. Followed up on phone.'"
                    className="w-full p-3 rounded-xl bg-[#0B132B] border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-hidden focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleUpdateStatusAndNotes}
                  disabled={savingChanges}
                  className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>{savingChanges ? "Saving Updates..." : "Save Pipeline Status & Notes"}</span>
                </button>
              </div>

              {/* Project Specifications Card */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Project Scope & Technical Details
                </h4>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <span className="text-[11px] text-slate-500">Project Type</span>
                    <p className="text-xs font-bold text-white mt-0.5">{selectedQuote.projectType}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <span className="text-[11px] text-slate-500">Location & State</span>
                    <p className="text-xs font-bold text-white mt-0.5">
                      {selectedQuote.projectLocation}, {selectedQuote.state}
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 col-span-2">
                    <span className="text-[11px] text-slate-500">Estimated Project Size / Piles Count</span>
                    <p className="text-xs font-bold text-amber-300 mt-0.5">
                      {selectedQuote.projectSize || "Not specified"}
                    </p>
                  </div>
                </div>

                {/* Services Demanded */}
                <div>
                  <span className="text-[11px] text-slate-400 font-semibold block mb-2">
                    Selected Engineering Services ({selectedQuote.services?.length || 0})
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {(selectedQuote.services || []).map((s, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium"
                      >
                        ✓ {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Client Detailed Description */}
                <div>
                  <span className="text-[11px] text-slate-400 font-semibold block mb-1">
                    Client&apos;s Requirement Description
                  </span>
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap font-sans">
                    {selectedQuote.description}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-800 bg-[#080d1e] flex items-center justify-between">
              <button
                onClick={() => handleDelete(selectedQuote.id!, selectedQuote.fullName)}
                className="inline-flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300 font-semibold transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete Lead</span>
              </button>

              <button
                onClick={() => setSelectedQuote(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminQuotationsPage() {
  return (
    <React.Suspense
      fallback={
        <div className="p-12 text-center text-slate-400 space-y-2">
          <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs">Loading quotation CRM...</p>
        </div>
      }
    >
      <QuotationsContent />
    </React.Suspense>
  );
}
