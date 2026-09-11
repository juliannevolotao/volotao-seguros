import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { siteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const title = `${siteConfig.fullName} | Seguro Auto, Saúde e Consórcio em São Vicente - SP`;
const description =
  "Mais de 15 anos protegendo o que é importante para você. Cotação comparativa de seguro auto, seguro saúde, consórcio, seguro residencial e empresarial com atendimento humano em São Vicente - SP.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "corretora de seguros",
    "seguro auto",
    "seguro de carro",
    "seguro saúde",
    "consórcio",
    "seguro residencial",
    "seguro empresarial",
    "corretora de seguros São Vicente",
    "corretora de seguros SP",
    siteConfig.fullName,
  ],
  authors: [{ name: siteConfig.fullName }],
  creator: siteConfig.fullName,
  publisher: siteConfig.fullName,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: siteConfig.fullName,
    title,
    description,
    images: [{ url: "/images/logo.png", width: 2172, height: 724, alt: siteConfig.fullName }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1c74c9",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
