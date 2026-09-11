"use client";

import { Icon } from "@/components/ui/Icon";
import { useServiceModal } from "@/components/providers/ServiceModalProvider";
import { findService } from "@/lib/services";
import { waLink } from "@/lib/site-config";

export function ServiceModal() {
  const { selectedService, closeService, useServiceInForm } = useServiceModal();
  const service = selectedService ? findService(selectedService) : undefined;

  if (!service) return null;

  return (
    <div
      onClick={closeService}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-[#0A1A2C]/55 p-[18px] backdrop-blur-[3px] animate-volFade"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        className="max-h-[88vh] w-full max-w-[520px] overflow-y-auto rounded-2xl bg-white p-[clamp(24px,4vw,34px)] shadow-modal animate-volPop"
      >
        <div className="flex items-start justify-between gap-4">
          <span className="flex h-12 w-12 flex-none items-center justify-center rounded-[13px] bg-brand-100">
            <Icon name={service.icon} size={25} strokeWidth={1.7} className="text-brand-600" />
          </span>
          <button
            type="button"
            onClick={closeService}
            aria-label="Fechar"
            className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-[10px] border border-ink-200 bg-white text-ink-600 hover:bg-ink-50 hover:text-ink-950"
          >
            <Icon name="close" size={18} />
          </button>
        </div>
        <span className="mt-[18px] block text-[12.5px] font-bold tracking-[.14em] text-brand-600">
          {service.category.toUpperCase()}
        </span>
        <h3 className="mt-2 text-[26px] font-extrabold tracking-tight text-[#0F2138]">
          {service.name}
        </h3>
        <p className="mt-3.5 text-base leading-relaxed text-ink-700">{service.description}</p>
        <div className="mt-[26px] flex flex-wrap gap-2.5">
          <a
            href={waLink(`Olá! Tenho interesse em ${service.name}. Pode me enviar uma proposta?`)}
            target="_blank"
            rel="noopener"
            className="min-w-[200px] flex-1 rounded-xl bg-whatsapp px-5 py-[15px] text-center text-[15.5px] font-bold text-whatsapp-text hover:bg-whatsapp-dark hover:text-whatsapp-textDark"
          >
            Solicitar este seguro
          </a>
          <button
            type="button"
            onClick={useServiceInForm}
            className="min-w-[160px] flex-1 rounded-xl border-[1.5px] border-ink-300 bg-white px-5 py-3.5 text-[15.5px] font-bold text-brand-600 hover:border-brand-600 hover:bg-brand-50"
          >
            Usar no formulário
          </button>
        </div>
      </div>
    </div>
  );
}
