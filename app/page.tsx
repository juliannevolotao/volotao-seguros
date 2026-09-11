import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ServiceModalProvider } from "@/components/providers/ServiceModalProvider";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { ServiceCatalog } from "@/components/sections/ServiceCatalog";
import { ServiceModal } from "@/components/sections/ServiceModal";
import { Insurers } from "@/components/sections/Insurers";
import { About } from "@/components/sections/About";
import { ProposalForm } from "@/components/sections/ProposalForm";
import { Contact } from "@/components/sections/Contact";
import { siteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: siteConfig.fullName,
  image: `${siteUrl}/images/logo.png`,
  url: siteUrl,
  telephone: siteConfig.phones[0],
  email: siteConfig.contactEmail,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.line1,
    addressLocality: "São Vicente",
    addressRegion: "SP",
    postalCode: "11310-500",
    addressCountry: "BR",
  },
  areaServed: "São Vicente, SP",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: Object.values(siteConfig.social).filter((href) => href.startsWith("http")),
};

export default function Home() {
  return (
    <ServiceModalProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <Hero />
      <Highlights />
      <ServiceCatalog />
      <Insurers />
      <About />
      <ProposalForm />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ServiceModal />
    </ServiceModalProvider>
  );
}
