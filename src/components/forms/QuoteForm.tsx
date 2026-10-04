"use client";

import * as React from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Upload,
  MessageSquare,
  ShieldCheck,
  Building,
  Layers,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";

const projectTypes = [
  "Residential",
  "Commercial",
  "Industrial",
  "Infrastructure",
  "Irrigation",
  "Other",
];

const availableServices = [
  "Pipeline Laying",
  "Excavation",
  "Stormwater Line",
  "Sewer Line",
  "Water Supply Line",
  "RCC Chamber",
  "Commercial Plumbing",
  "Residential Plumbing",
  "Irrigation Work",
  "Other",
];

export function QuoteForm() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    phone: "",
    email: "",
    companyName: "",
    projectType: "Commercial",
    projectLocation: "",
    state: "Chhattisgarh",
    services: [] as string[],
    projectSize: "",
    startDate: "",
    description: "",
    privacyConsent: false,
  });

  const [attachments, setAttachments] = React.useState<string[]>([]);
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [referenceId, setReferenceId] = React.useState("");

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileNames = Array.from(e.target.files).map((f) => f.name);
      setAttachments((prev) => [...prev, ...fileNames]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.projectLocation || !formData.description) {
      setErrorMessage("Please complete all required fields marked with *.");
      return;
    }
    if (!formData.privacyConsent) {
      setErrorMessage("Please accept the privacy policy agreement before submitting.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, attachments }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setReferenceId(data.referenceId || "RD-" + Math.floor(100000 + Math.random() * 900000));
      setStatus("success");
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please contact us directly.");
    }
  };

  if (status === "success") {
    const whatsappText = encodeURIComponent(
      `Hello RD Plumbing Solution,\n\nI have submitted a quotation request.\nReference ID: ${referenceId}\nName: ${formData.fullName}\nProject Type: ${formData.projectType}\nLocation: ${formData.projectLocation}\nServices: ${formData.services.join(", ")}\n\nPlease review my scope and provide an estimate.`
    );

    return (
      <div className="bg-white rounded-3xl border border-[#d2e6fc] shadow-lg p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <h3 className="text-2xl font-black text-[#172B4D]">
          Quotation Request Submitted Successfully!
        </h3>

        <div className="p-4 rounded-xl bg-[#F5F9FF] border border-[#E2EAF4] inline-block text-sm text-[#172B4D]">
          Reference ID: <span className="font-mono font-bold text-[#1769D2]">{referenceId}</span>
        </div>

        <p className="text-sm text-[#64748B] leading-relaxed">
          Thank you, <strong className="text-[#172B4D]">{formData.fullName}</strong>. Our engineering and estimation team will review your project details and get in touch within 24 hours.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${whatsappText}`}
            variant="primary"
            size="lg"
            isExternal
            className="w-full sm:w-auto"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Notify via WhatsApp for Faster Quote
          </Button>

          <Button
            onClick={() => {
              setStatus("idle");
              setFormData({
                fullName: "",
                phone: "",
                email: "",
                companyName: "",
                projectType: "Commercial",
                projectLocation: "",
                state: "Chhattisgarh",
                services: [],
                projectSize: "",
                startDate: "",
                description: "",
                privacyConsent: false,
              });
              setAttachments([]);
            }}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-[#E2EAF4] shadow-lg p-6 sm:p-10 space-y-8">
      {errorMessage && (
        <div className="p-4 rounded-xl bg-[#FEF2F2] border border-[#FCA5A5] text-[#991B1B] text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* 1. Personal / Contact Info */}
      <div className="space-y-4">
        <h4 className="text-base font-bold text-[#172B4D] border-b border-[#E2EAF4] pb-2 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#1769D2] text-white text-xs flex items-center justify-center font-bold">1</span>
          Contact Information
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#172B4D] uppercase tracking-wider mb-1">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Rahul Sharma"
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2EAF4] focus:outline-none focus:border-[#1769D2] focus:ring-1 focus:ring-[#1769D2] text-sm"
            />
          </div>

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
              placeholder="rahul@example.com"
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2EAF4] focus:outline-none focus:border-[#1769D2] focus:ring-1 focus:ring-[#1769D2] text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#172B4D] uppercase tracking-wider mb-1">
              Company / Builder Name <span className="text-[#94A3B8] font-normal lowercase">(optional)</span>
            </label>
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              placeholder="e.g. Apex Infrastructure Pvt Ltd"
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2EAF4] focus:outline-none focus:border-[#1769D2] focus:ring-1 focus:ring-[#1769D2] text-sm"
            />
          </div>
        </div>
      </div>

      {/* 2. Project Information */}
      <div className="space-y-4">
        <h4 className="text-base font-bold text-[#172B4D] border-b border-[#E2EAF4] pb-2 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#1769D2] text-white text-xs flex items-center justify-center font-bold">2</span>
          Project Details
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#172B4D] uppercase tracking-wider mb-1">
              Project Type *
            </label>
            <select
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2EAF4] focus:outline-none focus:border-[#1769D2] focus:ring-1 focus:ring-[#1769D2] text-sm bg-white"
            >
              {projectTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#172B4D] uppercase tracking-wider mb-1">
              Project Location (City / Area) *
            </label>
            <input
              type="text"
              required
              value={formData.projectLocation}
              onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
              placeholder="e.g. Sector 24, Naya Raipur"
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2EAF4] focus:outline-none focus:border-[#1769D2] focus:ring-1 focus:ring-[#1769D2] text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#172B4D] uppercase tracking-wider mb-1">
              State *
            </label>
            <input
              type="text"
              required
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              placeholder="e.g. Chhattisgarh"
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2EAF4] focus:outline-none focus:border-[#1769D2] focus:ring-1 focus:ring-[#1769D2] text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#172B4D] uppercase tracking-wider mb-1">
              Approximate Size / Quantity <span className="text-[#94A3B8] font-normal lowercase">(optional)</span>
            </label>
            <input
              type="text"
              value={formData.projectSize}
              onChange={(e) => setFormData({ ...formData, projectSize: e.target.value })}
              placeholder="e.g. 500 meters pipeline / 40 chambers"
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2EAF4] focus:outline-none focus:border-[#1769D2] focus:ring-1 focus:ring-[#1769D2] text-sm"
            />
          </div>
        </div>
      </div>

      {/* 3. Required Services Multi-Select */}
      <div className="space-y-3">
        <label className="block text-xs font-bold text-[#172B4D] uppercase tracking-wider">
          Required Services <span className="text-[#64748B] font-normal">(select all that apply)</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {availableServices.map((service) => {
            const isSelected = formData.services.includes(service);
            return (
              <button
                type="button"
                key={service}
                onClick={() => toggleService(service)}
                className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all flex items-center justify-between ${
                  isSelected
                    ? "bg-[#EAF4FF] border-[#1769D2] text-[#1769D2] shadow-xs"
                    : "bg-[#F5F9FF] border-[#E2EAF4] text-[#475569] hover:bg-[#EAF4FF]"
                }`}
              >
                <span>{service}</span>
                {isSelected && <CheckCircle2 className="w-4 h-4 text-[#1769D2] shrink-0 ml-1" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Description & Scope */}
      <div className="space-y-2">
        <label className="block text-xs font-bold text-[#172B4D] uppercase tracking-wider">
          Project Description & Scope Details *
        </label>
        <textarea
          rows={4}
          required
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Please describe pipe sizes, trench depths, site conditions, or specific execution milestones..."
          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2EAF4] focus:outline-none focus:border-[#1769D2] focus:ring-1 focus:ring-[#1769D2] text-sm leading-relaxed"
        />
      </div>

      {/* 5. Document Attachments */}
      <div className="space-y-2">
        <label className="block text-xs font-bold text-[#172B4D] uppercase tracking-wider">
          Attach Drawings / Site Photos / BOQ <span className="text-[#94A3B8] font-normal lowercase">(optional)</span>
        </label>
        <div className="border-2 border-dashed border-[#E2EAF4] rounded-2xl p-6 text-center hover:border-[#1769D2] transition-colors bg-[#F5F9FF]">
          <input
            type="file"
            id="file-upload"
            multiple
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.dwg"
            onChange={handleFileUpload}
            className="hidden"
          />
          <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
            <Upload className="w-8 h-8 text-[#1769D2] mb-2" />
            <span className="text-sm font-semibold text-[#172B4D]">
              Click to browse PDF drawings, images, or documents
            </span>
            <span className="text-xs text-[#64748B] mt-1">
              Supports PDF, PNG, JPG, DOCX (Max 15MB)
            </span>
          </label>
          {attachments.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              {attachments.map((file, idx) => (
                <span key={idx} className="inline-flex items-center text-xs bg-white border border-[#E2EAF4] px-2.5 py-1 rounded-md text-[#1769D2] font-mono">
                  {file}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 6. Privacy Policy Consent */}
      <div className="pt-2">
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.privacyConsent}
            onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
            className="mt-1 h-4 w-4 rounded border-[#E2EAF4] text-[#1769D2] focus:ring-[#1769D2]"
          />
          <span className="text-xs text-[#64748B] leading-normal">
            I agree that RD Plumbing Solution may store and process my submitted contact and project information to prepare a quotation and discuss project execution.
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={status === "loading"}
          className="w-full justify-center shadow-md py-4 text-base"
        >
          {status === "loading" ? "Processing & Submitting..." : "Submit Quotation Request"}
          <Send className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </form>
  );
}
