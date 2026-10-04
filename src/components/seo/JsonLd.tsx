import { siteConfig } from "@/data/siteConfig";

export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://rdplumbingsolution.com/#business",
        "name": siteConfig.name,
        "legalName": siteConfig.legalName,
        "description": "Professional plumbing, underground pipeline installation, and civil infrastructure contractor based in Naya Raipur, Chhattisgarh, India.",
        "url": "https://rdplumbingsolution.com",
        "telephone": siteConfig.contact.phone,
        "email": siteConfig.contact.email,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": siteConfig.location.city,
          "addressRegion": siteConfig.location.state,
          "addressCountry": "IN",
        },
        "areaServed": [
          { "@type": "City", "name": "Naya Raipur" },
          { "@type": "City", "name": "Raipur" },
          { "@type": "City", "name": "Durg" },
          { "@type": "City", "name": "Bhilai" },
          { "@type": "City", "name": "Bilaspur" },
          { "@type": "State", "name": "Chhattisgarh" },
          { "@type": "Country", "name": "India" },
        ],
        "priceRange": "$$",
        "openingHours": "Mo-Sa 08:30-19:00",
      },
      {
        "@type": "Organization",
        "@id": "https://rdplumbingsolution.com/#organization",
        "name": siteConfig.name,
        "url": "https://rdplumbingsolution.com",
        "logo": "https://rdplumbingsolution.com/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": siteConfig.contact.phone,
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["Hindi", "English"],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
