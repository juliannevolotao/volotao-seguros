"use client";

import { useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";
import { useServiceModal } from "@/components/providers/ServiceModalProvider";
import type { IconName } from "@/lib/icons";

type Highlight = {
  service: string;
  title: string;
  description: string;
  icon: IconName;
  image: string;
  variant: "primary" | "default";
};

const HIGHLIGHTS: Highlight[] = [
  {
    service: "Consórcio",
    title: "Consórcio",
    description: "Conquiste seu carro ou imóvel sem juros, com parcelas que cabem no seu planejamento.",
    icon: "cycle",
    image: "consorcio",
    variant: "primary",
  },
  {
    service: "Auto",
    title: "Seguro Veículo",
    description: "Colisão, roubo, terceiros, carro reserva e assistência 24h, com a melhor cotação entre as seguradoras.",
    icon: "car",
    image: "segurocarro",
    variant: "default",
  },
  {
    service: "Seguro Saúde",
    title: "Seguro Saúde",
    description: "Planos individuais, familiares e empresariais com a rede credenciada certa para o seu perfil.",
    icon: "health",
    image: "segurosaude",
    variant: "default",
  },
];

function HighlightCard({ item }: { item: Highlight }) {
  const { openService } = useServiceModal();
  const isPrimary = item.variant === "primary";

  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden rounded-2xl ${
        isPrimary
          ? "bg-gradient-to-br from-brand-800 to-brand-600 text-white"
          : "border border-ink-200 bg-white"
      }`}
    >
      <div className="relative">
        <PlaceholderImage
          label={item.image}
          aspect="aspect-video"
          tone={isPrimary ? "dark" : "light"}
          rounded="rounded-none"
        />
        <img src={`/images/${item.image}.jpg`} alt={item.image} className="absolute inset-0 h-full w-full object-cover rounded-2xl" />
        <span
          className={`absolute -bottom-[26px] left-[clamp(20px,2.4vw,26px)] flex h-[52px] w-[52px] items-center justify-center rounded-[13px] border ${
            isPrimary
              ? "border-white/20 bg-brand-800"
              : "border-ink-200 bg-white"
          }`}
        >
          <Icon
            name={item.icon}
            size={26}
            strokeWidth={1.8}
            className={isPrimary ? "text-white" : "text-brand-600"}
          />
        </span>
      </div>
      <div className="flex flex-1 flex-col px-[clamp(22px,2.6vw,28px)] pb-[clamp(24px,2.6vw,30px)] pt-[42px]">
        <h3
          className={`text-[clamp(21px,2.2vw,26px)] font-extrabold tracking-tight ${
            isPrimary ? "text-white" : "text-[#0F2138]"
          }`}
        >
          {item.title}
        </h3>
        <p className={`mt-2.5 text-[15.5px] leading-relaxed ${isPrimary ? "text-brand-300" : "text-ink-700"}`}>
          {item.description}
        </p>
        <button
          type="button"
          onClick={() => openService(item.service)}
          className={`mt-[22px] self-start rounded-[11px] px-[22px] py-[13px] text-[15px] font-bold transition-colors ${
            isPrimary
              ? "bg-white text-brand-800 hover:bg-brand-100"
              : "bg-brand-600 text-white hover:bg-brand-800"
          }`}
        >
          Saiba mais
        </button>
      </div>
    </div>
  );
}

export function Highlights() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [slide, setSlide] = useState(0);

  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const i = Math.round(el.scrollLeft / (el.scrollWidth / HIGHLIGHTS.length));
    setSlide(i);
  };

  const goToSlide = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: (el.scrollWidth / HIGHLIGHTS.length) * i, behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-[1180px] px-5 pt-[clamp(46px,6vw,72px)]">
      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className="-mx-5 flex gap-3.5 overflow-x-auto px-5 pb-1 no-scrollbar [scroll-snap-type:x_mandatory] md:mx-0 md:grid md:grid-cols-3 md:gap-[18px] md:overflow-visible md:px-0"
      >
        {HIGHLIGHTS.map((item, i) => (
          <Reveal
            key={item.service}
            delay={i * 90}
            className="flex-none snap-center [flex-basis:84%] md:flex-1 md:[flex-basis:auto]"
          >
            <HighlightCard item={item} />
          </Reveal>
        ))}
      </div>

      {/* Mobile-only dot indicators */}
      <div className="mt-[18px] flex justify-center gap-2 md:hidden">
        {HIGHLIGHTS.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goToSlide(i)}
            aria-label={`Ir para o destaque ${i + 1}`}
            className="h-[7px] rounded-full transition-all duration-300"
            style={{
              width: slide === i ? 24 : 7,
              background: slide === i ? "#1C74C9" : "#D3DDE8",
            }}
          />
        ))}
      </div>
    </section>
  );
}
