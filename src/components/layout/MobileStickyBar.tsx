"use client";

import Link from "next/link";
import { Phone, MessageSquare, FileText } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function MobileStickyBar() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E2EAF4] shadow-[0_-4px_12px_rgba(0,0,0,0.06)] px-3 py-2">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Now */}
        <Link
          href={`tel:${siteConfig.contact.phone}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-[#F3F8FF] hover:bg-[#EAF4FF] text-[#172B4D] border border-[#E2EAF4] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#1769D2] mb-0.5" />
          <span className="text-[11px] font-bold">Call Now</span>
        </Link>

        {/* WhatsApp */}
        <Link
          href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${siteConfig.whatsappPrefill}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-[#EAF4FF] hover:bg-[#d8eaff] text-[#1769D2] border border-[#d2e6fc] transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-[#1769D2] mb-0.5" />
          <span className="text-[11px] font-bold">WhatsApp</span>
        </Link>

        {/* Get Quote */}
        <Link
          href="/request-a-quotation"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-[#1769D2] hover:bg-[#124B9A] text-white shadow-sm transition-colors"
        >
          <FileText className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[11px] font-bold">Get Quote</span>
        </Link>
      </div>
    </div>
  );
}
