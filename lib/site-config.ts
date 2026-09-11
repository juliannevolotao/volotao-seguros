// Placeholder business details — swap these for the real ones before launch.
export const siteConfig = {
  name: "Volotão",
  fullName: "Volotão Corretora de Seguros",
  yearsInMarket: 15,
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5500000000000",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contato@volotaoseguros.com.br",
  phones: ["(00) 0000-0000", "(00) 00000-0000"],
  address: {
    line1: "Rua Exemplo, 123 — Sala 45",
    line2: "Centro, Cidade/UF — CEP 00000-000",
  },
  hours: "Segunda a sexta, das 9h às 18h",
  social: {
    instagram: "#",
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
      { value: "20+", label: "seguradoras parceiras" },
      { value: "24h", label: "para retorno da cotação" },
    ],
  },
};

export function waLink(text?: string) {
  const num = siteConfig.whatsappNumber.replace(/\D/g, "");
  const message = text || "Olá! Gostaria de solicitar uma proposta de seguro.";
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}
