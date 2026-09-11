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

export default function Home() {
  return (
    <ServiceModalProvider>
      <div className="w-full overflow-x-hidden">
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
      </div>
    </ServiceModalProvider>
  );
}
