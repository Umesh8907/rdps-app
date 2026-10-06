"use client";

import * as React from "react";
import {
  MessageSquare,
  Search,
  Phone,
  Mail,
  CheckCircle2,
  Clock,
  Trash2,
  Eye,
  Save,
  X,
  ExternalLink,
  ChevronRight,
  AlertCircle,
  Archive,
  Copy,
  Check,
} from "lucide-react";
import { ContactRecord, ContactStatus } from "@/lib/db";

export default function AdminContactsPage() {
  const [contacts, setContacts] = React.useState<ContactRecord[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [statusFilter, setStatusFilter] = React.useState<string>("all");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [selectedContact, setSelectedContact] = React.useState<ContactRecord | null>(null);

  const [editingStatus, setEditingStatus] = React.useState<ContactStatus>("new");
  const [editingNotes, setEditingNotes] = React.useState<string>("");
  const [saving, setSaving] = React.useState(false);
  const [saveSuccess, setSaveSuccess] = React.useState(false);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const query = new URLSearchParams();
      if (statusFilter !== "all") query.set("status", statusFilter);
      if (searchQuery.trim()) query.set("search", searchQuery.trim());

      const res = await fetch(`/api/admin/contacts?${query.toString()}`);
      if (res.ok) {
        const data = await res.json();
        setContacts(data.contacts || []);
      }
    } catch (err) {
      console.error("Failed to load contacts", err);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchContacts();
  }, [statusFilter]);

  const handleOpenDetails = (contact: ContactRecord) => {
    setSelectedContact(contact);
    setEditingStatus(contact.status || "new");
    setEditingNotes(contact.notes || "");
    setSaveSuccess(false);
  };

  const handleSaveNotesAndStatus = async () => {
    if (!selectedContact?.id) return;
    setSaving(true);
    setSaveSuccess(false);

    try {
      const res = await fetch(`/api/admin/contacts/${selectedContact.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: editingStatus,
          notes: editingNotes,
        }),
      });

      if (res.ok) {
        setContacts((prev) =>
          prev.map((c) =>
            c.id === selectedContact.id
              ? { ...c, status: editingStatus, notes: editingNotes }
              : c
          )
        );
        setSelectedContact((prev) =>
          prev ? { ...prev, status: editingStatus, notes: editingNotes } : null
        );
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
      }
    } catch (err) {
      console.error("Failed to update contact enquiry", err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete message from "${name}"?`)) return;

    try {
      const res = await fetch(`/api/admin/contacts/${id}`, { method: "DELETE" });
      if (res.ok) {
        setContacts((prev) => prev.filter((c) => c.id !== id));
        if (selectedContact?.id === id) {
          setSelectedContact(null);
        }
      }
    } catch (err) {
      console.error("Failed to delete contact", err);
    }
  };

  const getStatusBadge = (status?: string) => {
    switch (status) {
      case "new":
        return { label: "New Message", bg: "bg-amber-500/15 text-amber-300 border-amber-500/30" };
      case "read":
        return { label: "Read / Reviewed", bg: "bg-blue-500/15 text-blue-300 border-blue-500/30" };
      case "replied":
        return { label: "Replied", bg: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30" };
      case "archived":
        return { label: "Archived", bg: "bg-slate-800 text-slate-400 border-slate-700" };
      default:
        return { label: "New", bg: "bg-amber-500/15 text-amber-300 border-amber-500/30" };
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Search & Filter Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetchContacts();
          }}
          className="flex-1 max-w-md relative"
        >
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, phone, message content..."
            className="admin-input pl-10 pr-20 py-2.5 text-xs sm:text-sm"
          />
          <button
            type="submit"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg transition-colors"
          >
            Search
          </button>
        </form>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {[
            { key: "all", label: "All Messages" },
            { key: "new", label: "New" },
            { key: "read", label: "Read" },
            { key: "replied", label: "Replied" },
            { key: "archived", label: "Archived" },
          ].map((tab) => {
            const active = statusFilter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setStatusFilter(tab.key)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                  active
                    ? "bg-amber-500 text-slate-950 border-amber-400 font-bold"
                    : "bg-[#0B132B] text-slate-400 border-slate-800 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Messages Table */}
      <div className="bg-[#0B132B] border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        {loading ? (
          <div className="p-12 text-center text-slate-400 space-y-2">
            <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs">Loading contact messages...</p>
          </div>
        ) : contacts.length === 0 ? (
          <div className="p-12 text-center space-y-2">
            <MessageSquare className="w-10 h-10 text-slate-600 mx-auto" />
            <p className="text-sm font-bold text-slate-300">No contact messages found</p>
            <p className="text-xs text-slate-500">
              Inbound questions and general inquiries will appear here.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#080d1e] text-slate-400 text-[11px] uppercase tracking-wider border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">Contact</th>
                  <th className="py-3 px-4">Subject</th>
                  <th className="py-3 px-4">Message Snippet</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {contacts.map((c) => {
                  const badge = getStatusBadge(c.status);
                  return (
                    <tr
                      key={c.id}
                      className="hover:bg-slate-900/40 transition-colors group cursor-pointer"
                      onClick={() => handleOpenDetails(c)}
                    >
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-white group-hover:text-amber-300 transition-colors">
                          {c.name}
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">{c.phone}</div>
                        {c.email && <div className="text-[11px] text-slate-500">{c.email}</div>}
                      </td>

                      <td className="py-3.5 px-4 font-semibold text-slate-200">
                        {c.subject || "General Inquiry"}
                      </td>

                      <td className="py-3.5 px-4 text-xs text-slate-400 max-w-xs">
                        <p className="line-clamp-2 italic font-sans">&quot;{c.message}&quot;</p>
                      </td>

                      <td className="py-3.5 px-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${badge.bg}`}
                        >
                          {badge.label}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 text-xs text-slate-400 whitespace-nowrap">
                        {c.createdAt ? new Date(c.createdAt).toLocaleDateString("en-IN") : "Recent"}
                      </td>

                      <td
                        className="py-3.5 px-4 text-right whitespace-nowrap"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center justify-end gap-1.5">
                          <a
                            href={`https://wa.me/${c.phone.replace(/[^0-9]/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20"
                            title="Chat on WhatsApp"
                          >
                            <MessageSquare className="w-4 h-4" />
                          </a>

                          <a
                            href={`tel:${c.phone}`}
                            className="p-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20"
                            title="Call"
                          >
                            <Phone className="w-4 h-4" />
                          </a>

                          <button
                            onClick={() => handleOpenDetails(c)}
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
                            title="View Details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => handleDelete(c.id!, c.name)}
                            className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20"
                            title="Delete"
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

      {/* Message Details Modal */}
      {selectedContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs transition-opacity"
            onClick={() => setSelectedContact(null)}
          />

          <div className="relative w-full max-w-lg bg-[#0B132B] border border-slate-800 rounded-3xl shadow-2xl z-50 overflow-hidden animate-fadeIn">
            {/* Header */}
            <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-[#080d1e]">
              <div>
                <h3 className="text-base font-bold text-white">{selectedContact.name}</h3>
                <p className="text-xs text-slate-400">{selectedContact.subject || "General Project Enquiry"}</p>
              </div>
              <button
                onClick={() => setSelectedContact(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-5 text-xs sm:text-sm">
              {/* Contact info buttons */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${selectedContact.phone}`}
                  className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-blue-500/15 text-blue-300 font-bold border border-blue-500/30 text-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {selectedContact.phone}</span>
                </a>
                {selectedContact.email && (
                  <a
                    href={`mailto:${selectedContact.email}?subject=Re: ${encodeURIComponent(selectedContact.subject || "Your Enquiry with RDPS")}`}
                    className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-purple-500/15 text-purple-300 font-bold border border-purple-500/30 text-xs"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email Client</span>
                  </a>
                )}
              </div>

              {/* Message */}
              <div>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold block mb-1">
                  Message Content
                </span>
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
                  {selectedContact.message}
                </div>
              </div>

              {/* Status and Notes */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Status & Response Notes
                  </span>
                  {saveSuccess && (
                    <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Saved!</span>
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Mark Message As</label>
                  <select
                    value={editingStatus}
                    onChange={(e) => setEditingStatus(e.target.value as ContactStatus)}
                    className="admin-select py-2 px-3 text-xs font-semibold"
                  >
                    <option value="new">🟡 New</option>
                    <option value="read">🔵 Read / Followed Up</option>
                    <option value="replied">🟢 Replied</option>
                    <option value="archived">⚪ Archived</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Internal Note</label>
                  <textarea
                    rows={2}
                    value={editingNotes}
                    onChange={(e) => setEditingNotes(e.target.value)}
                    placeholder="e.g. Called client, sent quotation via WhatsApp."
                    className="admin-input p-2.5 text-xs"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSaveNotesAndStatus}
                  disabled={saving}
                  className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>{saving ? "Saving..." : "Save Status"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
