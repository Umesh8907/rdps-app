"use client";

import * as React from "react";
import { Send, CheckCircle2, AlertCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";

export function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    subject: "Project Consultation",
    message: "",
  });

  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [refId, setRefId] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      setErrorMessage("Please fill in your Name, Phone Number, and Message.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setRefId(data.referenceId || "MSG-" + Math.floor(100000 + Math.random() * 900000));
      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An error occurred. Please call or WhatsApp us.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-3xl border border-[#d2e6fc] shadow-md p-8 text-center space-y-5">
        <div className="w-14 h-14 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-[#172B4D]">
          Message Sent Successfully!
        </h3>
        <p className="text-sm text-[#64748B]">
          Thank you, <strong className="text-[#172B4D]">{formData.name}</strong>. Our team in Naya Raipur will contact you shortly.
        </p>
        <Button
          onClick={() => {
            setStatus("idle");
            setFormData({ name: "", phone: "", email: "", subject: "Project Consultation", message: "" });
          }}
          variant="outline"
          size="md"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-[#E2EAF4] shadow-md p-6 sm:p-8 space-y-5">
      {errorMessage && (
        <div className="p-3.5 rounded-xl bg-[#FEF2F2] border border-[#FCA5A5] text-[#991B1B] text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div>
        <label className="block text-xs font-bold text-[#172B4D] uppercase tracking-wider mb-1">
          Your Name *
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="e.g. Amit Verma"
          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2EAF4] focus:outline-none focus:border-[#1769D2] focus:ring-1 focus:ring-[#1769D2] text-sm"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#172B4D] uppercase tracking-wider mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98765 43210"
            className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2EAF4] focus:outline-none focus:border-[#1769D2] focus:ring-1 focus:ring-[#1769D2] text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#172B4D] uppercase tracking-wider mb-1">
            Email Address <span className="text-[#94A3B8] font-normal lowercase">(optional)</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="amit@example.com"
            className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2EAF4] focus:outline-none focus:border-[#1769D2] focus:ring-1 focus:ring-[#1769D2] text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-[#172B4D] uppercase tracking-wider mb-1">
          Subject
        </label>
        <input
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          placeholder="e.g. Drainage quotation for residential layout"
          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2EAF4] focus:outline-none focus:border-[#1769D2] focus:ring-1 focus:ring-[#1769D2] text-sm"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-[#172B4D] uppercase tracking-wider mb-1">
          Message & Project Details *
        </label>
        <textarea
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please write your questions or site location details..."
          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2EAF4] focus:outline-none focus:border-[#1769D2] focus:ring-1 focus:ring-[#1769D2] text-sm"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "loading"}
        className="w-full justify-center shadow-sm"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
        <Send className="w-4 h-4 ml-2" />
      </Button>
    </form>
  );
}
