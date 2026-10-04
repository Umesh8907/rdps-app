import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  ShieldCheck,
  Building,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact Us | RD Plumbing Solution",
  description:
    "Get in touch with RD Plumbing Solution in Naya Raipur, Chhattisgarh, for project inquiries, site inspections, and contract discussions.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-corporate-grid bg-[#F5F9FF] border-b border-[#E2EAF4] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Contact Us" }]} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold tracking-widest text-[#1769D2] uppercase bg-[#EAF4FF] px-3 py-1 rounded-full border border-[#d2e6fc] mb-3 inline-block">
              GET IN TOUCH
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172B4D] tracking-tight">
              Connect With Our Team
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
              Whether you are planning a new residential township, commercial complex, or underground utility pipeline, our team is ready to discuss your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 lg:py-20 border-b border-[#E2EAF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Office & Direct Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-[#172B4D] mb-3">
                  Operational Headquarters
                </h2>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Based in Naya Raipur, Chhattisgarh, coordinating field execution crews across the state and nationwide.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#F5F9FF] border border-[#E2EAF4] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E2EAF4] flex items-center justify-center text-[#1769D2] shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-0.5">
                      Office Location
                    </h4>
                    <p className="text-sm font-bold text-[#172B4D]">
                      {siteConfig.location.fullOfficeAddress}
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#F5F9FF] border border-[#E2EAF4] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E2EAF4] flex items-center justify-center text-[#1769D2] shrink-0 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-0.5">
                      Phone Contact
                    </h4>
                    <p className="text-sm font-bold text-[#172B4D]">
                      {siteConfig.contact.phoneDisplay}
                    </p>
                    <span className="text-xs text-[#64748B] mt-0.5 block">
                      Direct connection to site engineers
                    </span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#F5F9FF] border border-[#E2EAF4] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E2EAF4] flex items-center justify-center text-[#1769D2] shrink-0 shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-0.5">
                      Email Address
                    </h4>
                    <p className="text-sm font-bold text-[#172B4D]">
                      {siteConfig.contact.email}
                    </p>
                    <span className="text-xs text-[#64748B] mt-0.5 block">
                      Send tender drawings and RFQs
                    </span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#F5F9FF] border border-[#E2EAF4] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E2EAF4] flex items-center justify-center text-[#1769D2] shrink-0 shadow-xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-0.5">
                      Working Hours
                    </h4>
                    <p className="text-sm font-bold text-[#172B4D]">
                      {siteConfig.contact.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="p-6 rounded-2xl bg-[#EAF4FF] border border-[#d2e6fc] space-y-3">
                <h4 className="text-base font-bold text-[#172B4D] flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-[#1769D2]" />
                  Instant WhatsApp Communication
                </h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Connect with our on-call project supervisor directly to share site GPS locations or photos.
                </p>
                <Button
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${siteConfig.whatsappPrefill}`}
                  variant="primary"
                  size="md"
                  isExternal
                  className="w-full justify-center"
                >
                  Start WhatsApp Chat
                </Button>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-extrabold text-[#172B4D] mb-6">
                Send an Enquiry
              </h2>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
