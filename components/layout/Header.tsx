"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { scrollToId } from "@/lib/scroll";
import { waLink } from "@/lib/site-config";

const NAV_ITEMS = [
  { id: "servicos", label: "Serviços" },
  { id: "sobre", label: "Sobre" },
  { id: "seguradoras", label: "Seguradoras Parceiras" },
  { id: "contato", label: "Contato" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const progress = useScrollProgress();
  const active = useActiveSection(["topo", "servicos", "seguradoras", "sobre", "contato"]);

  const goTo = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-5 py-3">
        <a
          href="#topo"
          onClick={(e) => {
            e.preventDefault();
            goTo("topo");
          }}
          className="flex items-center gap-2.5"
        >
          <Logo />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                goTo(item.id);
              }}
              className="relative py-1.5 text-[14.5px] font-semibold text-ink-800 transition-colors hover:text-brand-800"
            >
              {item.label}
              <span
                className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded-full bg-brand-600 transition-transform duration-300 ease-[cubic-bezier(.22,.7,.3,1)]"
                style={{ transform: `scaleX(${active === item.id ? 1 : 0})` }}
              />
            </a>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 rounded-[10px] bg-whatsapp px-[18px] py-[11px] text-sm font-bold text-whatsapp-text shadow-[0_2px_8px_rgba(37,211,102,.28)] transition-colors hover:bg-whatsapp-dark hover:text-whatsapp-textDark"
          >
            <Icon name="whatsapp" size={17} />
            Fale no WhatsApp
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2.5 md:hidden">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            aria-label="Fale no WhatsApp"
            className="flex h-[46px] w-[46px] items-center justify-center rounded-xl bg-whatsapp text-whatsapp-text"
          >
            <Icon name="whatsapp" size={22} />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            className="flex h-[46px] w-[46px] items-center justify-center rounded-xl border border-ink-200 bg-white text-ink-900"
          >
            <Icon name={menuOpen ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>

      {/* Scroll progress bar */}
      <div aria-hidden="true" className="h-0.5 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-brand-600 to-brand-500 transition-[width] duration-100 ease-linear"
          style={{ width: `${(progress * 100).toFixed(2)}%` }}
        />
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="flex flex-col border-t border-ink-200 bg-white px-5 pb-[18px] pt-2 md:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                goTo(item.id);
              }}
              className="border-b border-ink-100 py-3.5 text-base font-semibold text-ink-900 last:border-b-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#proposta"
            onClick={(e) => {
              e.preventDefault();
              goTo("proposta");
            }}
            className="mt-3.5 rounded-xl bg-brand-600 py-[15px] text-center font-bold text-white"
          >
            Solicitar Proposta
          </a>
        </nav>
      )}
    </header>
  );
}
