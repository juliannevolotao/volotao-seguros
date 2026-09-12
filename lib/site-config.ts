// Placeholder business details — swap these for the real ones before launch.
export const siteConfig = {
  name: "Volotão",
  fullName: "Volotão Corretora de Seguros",
  yearsInMarket: 15,
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5513974076020",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "fabiano@volotaoseguros.com.br",
  phones: ["(13) 97407-6020"],
  address: {
    line1: "R. Benjamin Constant, 61",
    line2: "Centro, São Vicente - SP, 11310-500",
  },
  hours: "Segunda a sexta, das 9h às 18h",
  social: {
    instagram: "https://www.instagram.com/volotaoseguros",
    facebook: "#",
    linkedin: "#",
  },
  insurers: [
    "Porto Seguro",
    "Bradesco Seguros",
    "Mapfre",
    "SulAmérica",
    "Allianz",
    "Tokio Marine",
    "HDI Seguros",
    "Azul Seguros",
  ],
  stats: {
    hero: [
      { value: "+15", label: "anos de\nmercado" },
      { value: "80+", label: "cotas\ncontempladas" },
      { value: "2 mil+", label: "clientes\natendidos" },
    ],
    about: [
      { value: "15+", label: "anos de mercado" },
      { value: "2.000+", label: "clientes atendidos" },
      { value: "10+", label: "seguradoras parceiras" },
      { value: "24h", label: "para retorno da cotação" },
    ],
  },
};

export function waLink(text?: string) {
  const num = siteConfig.whatsappNumber.replace(/\D/g, "");
  const message = text || "Olá! Gostaria de solicitar uma proposta de seguro.";
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}
