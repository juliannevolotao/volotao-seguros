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
    { name: "Porto Seguro", logo: "/images/insurers/porto-seguro.png", width: 447, height: 135 },
    { name: "Bradesco Seguros", logo: "/images/insurers/bradesco-seguros.webp", width: 567, height: 201 },
    { name: "Mapfre" },
    { name: "SulAmérica" },
    { name: "Allianz", logo: "/images/insurers/allianz.webp", width: 1500, height: 372 },
    { name: "Tokio Marine", logo: "/images/insurers/tokio-marine.jpg", width: 601, height: 185 },
    { name: "HDI Seguros", logo: "/images/insurers/hdi-seguros.webp", width: 311, height: 192 },
    { name: "Azul Seguros", logo: "/images/insurers/azul-seguros.svg", width: 500, height: 307 },
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
