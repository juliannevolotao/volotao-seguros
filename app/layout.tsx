import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Volotão Corretora de Seguros",
  description:
    "Mais de 15 anos protegendo o que é importante para você. Consórcio, seguro de veículo, seguro saúde e muito mais.",
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
