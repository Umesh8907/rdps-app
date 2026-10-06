"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Building,
} from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { TopBar } from "./TopBar";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 w-full shadow-xs">
      {/* Top Notice / Announcement Bar */}
      <TopBar />

      {/* Main Navbar */}
      <div
        className={cn(
          "w-full bg-white/95 backdrop-blur-md transition-all duration-300 border-b",
          scrolled ? "border-[#E2EAF4] shadow-sm py-2" : "border-[#E2EAF4]/80 py-2.5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative h-11 sm:h-12 w-auto flex items-center">
              <Image
                src="/assets/logo.png"
                alt="RD Plumbing Solution"
                width={200}
                height={52}
                priority
                className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-102"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {siteConfig.navigation.main.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              const hasDropdown = item.dropdown && item.dropdown.length > 0;

              if (hasDropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-colors",
                        isActive
                          ? "text-[#1769D2] bg-[#EAF4FF]"
                          : "text-[#172B4D] hover:text-[#1769D2] hover:bg-[#F3F8FF]"
                      )}
                    >
                      {item.name}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 text-[#64748B] transition-transform duration-200",
                          activeDropdown === item.name && "rotate-180 text-[#1769D2]"
                        )}
                      />
                    </Link>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 w-80 pt-2 z-50 animate-in fade-in-50 slide-in-from-top-2 duration-150">
                        <div className="bg-white rounded-xl border border-[#E2EAF4] shadow-xl p-2.5 space-y-1">
                          {item.dropdown?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block p-2.5 rounded-lg hover:bg-[#F3F8FF] transition-colors group/item"
                            >
                              <div className="text-xs font-bold text-[#172B4D] group-hover/item:text-[#1769D2] transition-colors">
                                {subItem.name}
                              </div>
                              {subItem.description && (
                                <p className="text-[11px] text-[#64748B] mt-0.5 line-clamp-1 leading-normal">
                                  {subItem.description}
                                </p>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors",
                    isActive
                      ? "text-[#1769D2] bg-[#EAF4FF]"
                      : "text-[#172B4D] hover:text-[#1769D2] hover:bg-[#F3F8FF]"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              href="/request-a-quotation"
              variant="primary"
              size="md"
              className="shadow-sm"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <Button
              href="/request-a-quotation"
              variant="primary"
              size="sm"
              className="text-xs px-2.5 py-1.5"
            >
              Quote
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#172B4D] hover:bg-[#F3F8FF] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E2EAF4] bg-white px-4 pt-3 pb-6 space-y-2 max-h-[85vh] overflow-y-auto animate-in fade-in-50 duration-200 shadow-xl">
          {siteConfig.navigation.main.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            const hasDropdown = item.dropdown && item.dropdown.length > 0;

            if (hasDropdown) {
              return (
                <div key={item.name} className="py-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#64748B] px-3 py-1.5">
                    {item.name}
                  </div>
                  <div className="pl-3 space-y-1 border-l-2 border-[#EAF4FF] ml-2 mt-1">
                    {item.dropdown?.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className={cn(
                          "block px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                          pathname === subItem.href
                            ? "text-[#1769D2] bg-[#EAF4FF] font-semibold"
                            : "text-[#172B4D] hover:bg-[#F3F8FF]"
                        )}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors",
                  isActive
                    ? "text-[#1769D2] bg-[#EAF4FF]"
                    : "text-[#172B4D] hover:bg-[#F3F8FF]"
                )}
              >
                {item.name}
              </Link>
            );
          })}

          <div className="pt-4 border-t border-[#E2EAF4] space-y-2">
            <Button
              href="/request-a-quotation"
              variant="primary"
              size="md"
              className="w-full justify-center"
            >
              Request a Quotation
            </Button>
            <Button
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${siteConfig.whatsappPrefill}`}
              variant="secondary"
              size="md"
              isExternal
              className="w-full justify-center"
            >
              <MessageSquare className="w-4 h-4 mr-1.5" />
              WhatsApp Enquiry
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
