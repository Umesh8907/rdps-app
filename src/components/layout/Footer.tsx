import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Shield,
  MessageSquare,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  return (
    <footer className="bg-[#F5F9FF] border-t border-[#E2EAF4] text-[#172B4D]">
      {/* Top Banner / Corporate Highlight */}
      <div className="border-b border-[#E2EAF4] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#EAF4FF] border border-[#d2e6fc] flex items-center justify-center text-[#1769D2] shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#172B4D]">
                  {siteConfig.tagline}
                </h4>
                <p className="text-xs sm:text-sm text-[#64748B]">
                  {siteConfig.supportingStatement}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/request-a-quotation"
                className="px-5 py-2.5 rounded-lg bg-[#1769D2] hover:bg-[#124B9A] text-white text-xs sm:text-sm font-semibold shadow-sm transition-colors"
              >
                Request Quotation
              </Link>
              <Link
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${siteConfig.whatsappPrefill}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-white border border-[#E2EAF4] hover:bg-[#EAF4FF] text-[#1769D2] text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#1769D2] flex items-center justify-center text-white font-black text-xl shadow-sm">
                RD
              </div>
              <div>
                <span className="text-lg font-black tracking-tight text-[#172B4D] block">
                  RD Plumbing Solution
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-[#64748B] uppercase">
                  Contractor & Civil Execution
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed pr-4">
              Providing professional plumbing, underground pipeline installation, stormwater drainage, and civil infrastructure execution based in Naya Raipur, Chhattisgarh, with project coverage across India.
            </p>

            <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-[#475569]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1769D2] shrink-0 mt-0.5" />
                <span>{siteConfig.location.fullOfficeAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#1769D2] shrink-0" />
                <span>Phone: {siteConfig.contact.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#1769D2] shrink-0" />
                <span>Email: {siteConfig.contact.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#1769D2] shrink-0" />
                <span>{siteConfig.contact.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#172B4D] border-b border-[#E2EAF4] pb-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {siteConfig.navigation.footer.services.map((svc) => (
                <li key={svc.name}>
                  <Link
                    href={svc.href}
                    className="text-[#64748B] hover:text-[#1769D2] transition-colors inline-block"
                  >
                    {svc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#172B4D] border-b border-[#E2EAF4] pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {siteConfig.navigation.footer.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#64748B] hover:text-[#1769D2] transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#172B4D] border-b border-[#E2EAF4] pb-2">
              Service Areas
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {siteConfig.navigation.footer.locations.map((loc) => (
                <li key={loc.name}>
                  <Link
                    href={loc.href}
                    className="text-[#64748B] hover:text-[#1769D2] transition-colors inline-block"
                  >
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Link
                href="/areas-we-serve"
                className="text-xs font-semibold text-[#1769D2] hover:underline inline-flex items-center gap-1"
              >
                View full coverage <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#E2EAF4] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#1769D2] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-[#1769D2] transition-colors">
              Contact Business
            </Link>
            <Link href="/request-a-quotation" className="hover:text-[#1769D2] transition-colors">
              Request Quotation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
