"use client";

import { useMemo, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { useServiceModal } from "@/components/providers/ServiceModalProvider";
import { CATEGORIES, SERVICES } from "@/lib/services";

export function ServiceCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("Todos");
  const { openService } = useServiceModal();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SERVICES.filter(
      (s) =>
        (category === "Todos" || s.category === category) &&
        (!q ||
          s.name.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q))
    );
  }, [query, category]);

  return (
    <section id="servicos" className="mx-auto max-w-[1180px] px-5 py-[clamp(52px,7vw,88px)]">
      <Reveal>
        <span className="text-[12.5px] font-bold tracking-[.16em] text-brand-600">
          CATÁLOGO DE SERVIÇOS
        </span>
        <h2 className="mt-3.5 text-[clamp(28px,3.6vw,40px)] font-extrabold tracking-tight text-[#0F2138]">
          Encontre a proteção certa
        </h2>
        <p className="mt-3 max-w-[560px] text-[16.5px] leading-relaxed text-ink-700">
          Busque pelo nome ou navegue pelas categorias. Clique em um serviço para ver os detalhes e
          solicitar sua proposta.
        </p>
      </Reveal>

      <Reveal
        delay={100}
        className="mt-[30px] flex items-center gap-3 rounded-2xl border border-ink-300 bg-white px-[18px] py-3.5 shadow-card"
      >
        <Icon name="search" size={20} strokeWidth={2} className="text-ink-400" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por nome ou categoria..."
          aria-label="Buscar serviços"
          className="min-w-0 flex-1 border-none bg-transparent text-base text-ink-950 outline-none placeholder:text-ink-400"
        />
      </Reveal>

      <Reveal
        delay={160}
        className="-mx-5 mt-[18px] flex gap-[9px] overflow-x-auto px-5 pb-1.5 no-scrollbar sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
      >
        {CATEGORIES.map((chip) => {
          const isActive = category === chip;
          return (
            <button
              key={chip}
              type="button"
              onClick={() => setCategory(chip)}
              className={`flex-none whitespace-nowrap rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors sm:flex-initial sm:whitespace-normal ${
                isActive
                  ? "border-brand-800 bg-brand-800 text-white"
                  : "border-ink-300 bg-white text-ink-800"
              }`}
            >
              {chip}
            </button>
          );
        })}
      </Reveal>

      <div
        className="mt-7 grid gap-3.5"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(215px, calc(50% - 7px)), 1fr))" }}
      >
        {filtered.map((service, i) => (
          <Reveal key={service.name} delay={(i % 6) * 60} y={16}>
            <button
              type="button"
              onClick={() => openService(service.name)}
              className="flex min-h-[126px] w-full flex-col gap-3 rounded-[15px] border border-ink-200 bg-white p-[clamp(14px,3vw,20px)] text-left transition-all hover:-translate-y-0.5 hover:border-brand-600 hover:shadow-card-hover"
            >
              <span className="flex h-[42px] w-[42px] items-center justify-center rounded-[11px] bg-brand-100">
                <Icon name={service.icon} size={22} strokeWidth={1.7} className="text-brand-600" />
              </span>
              <span className="flex flex-col gap-1">
                <span className="text-base font-bold tracking-tight text-ink-950">{service.name}</span>
                <span className="text-[12.5px] font-semibold text-ink-400">{service.category}</span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-9 text-center text-base text-ink-600">
          Nenhum serviço encontrado. Fale com a gente no WhatsApp — atendemos demandas sob medida.
        </p>
      )}
    </section>
  );
}
