"use client";

import { useState } from "react";
import { useServiceModal } from "@/components/providers/ServiceModalProvider";
import { Icon } from "@/components/ui/Icon";
import { SERVICES } from "@/lib/services";
import { waLink } from "@/lib/site-config";

type Status = "idle" | "sending" | "sent" | "error";

export function ProposalForm() {
  const { formService, setFormService } = useServiceModal();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = new FormData(e.currentTarget);
    const payload = {
      nome: form.get("nome"),
      telefone: form.get("telefone"),
      email: form.get("email"),
      servico: form.get("servico"),
      mensagem: form.get("mensagem"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || "Não foi possível enviar a solicitação.");
      }
      setStatus("sent");
      e.currentTarget.reset();
      setFormService("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Não foi possível enviar a solicitação.");
    }
  };

  return (
    <section
      id="proposta"
      className="reveal-on-scroll bg-gradient-to-br from-brand-800 to-[#123B72]"
    >
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-10 px-5 py-[clamp(48px,6vw,84px)] lg:grid-cols-2 lg:gap-[60px]">
        <div>
          <h2 className="text-[clamp(28px,3.6vw,40px)] font-extrabold tracking-tight text-white">
            Solicitar proposta
          </h2>
          <p className="mt-4 max-w-[440px] text-[16.5px] leading-[1.7] text-brand-300">
            Preencha os dados e retornamos com uma cotação comparativa. Se preferir, fale agora
            mesmo com um corretor pelo WhatsApp — é o nosso canal mais rápido.
          </p>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="mt-[26px] inline-flex items-center gap-3 rounded-[13px] bg-whatsapp px-[26px] py-[18px] text-[16.5px] font-bold text-whatsapp-text hover:bg-whatsapp-dark hover:text-whatsapp-textDark"
          >
            <Icon name="whatsapp" size={22} />
            Prefiro falar no WhatsApp agora
          </a>
          <p className="mt-[22px] text-[13.5px] text-brand-400">
            Atendimento de segunda a sexta, das 9h às 18h.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-4 rounded-2xl bg-white p-[clamp(22px,3vw,32px)] shadow-formCard"
        >
          <label className="flex flex-col gap-1.5">
            <span className="text-[13.5px] font-bold text-ink-800">Nome</span>
            <input
              name="nome"
              required
              placeholder="Seu nome completo"
              className="rounded-[11px] border border-ink-300 px-[15px] py-3.5 text-[15.5px] text-ink-950 outline-none focus:border-brand-600 focus:ring-4 focus:ring-brand-600/15"
            />
          </label>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-4">
            <label className="flex flex-col gap-1.5">
              <span className="text-[13.5px] font-bold text-ink-800">Telefone / WhatsApp</span>
              <input
                name="telefone"
                required
                type="tel"
                placeholder="(00) 00000-0000"
                className="rounded-[11px] border border-ink-300 px-[15px] py-3.5 text-[15.5px] text-ink-950 outline-none focus:border-brand-600 focus:ring-4 focus:ring-brand-600/15"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-[13.5px] font-bold text-ink-800">E-mail</span>
              <input
                name="email"
                required
                type="email"
                placeholder="voce@email.com"
                className="rounded-[11px] border border-ink-300 px-[15px] py-3.5 text-[15.5px] text-ink-950 outline-none focus:border-brand-600 focus:ring-4 focus:ring-brand-600/15"
              />
            </label>
          </div>
          <label className="flex flex-col gap-1.5">
            <span className="text-[13.5px] font-bold text-ink-800">Tipo de seguro</span>
            <select
              name="servico"
              value={formService}
              onChange={(e) => setFormService(e.target.value)}
              className="rounded-[11px] border border-ink-300 bg-white px-[15px] py-3.5 text-[15.5px] text-ink-950 outline-none focus:border-brand-600 focus:ring-4 focus:ring-brand-600/15"
            >
              <option value="">Selecione uma opção</option>
              {SERVICES.map((s) => (
                <option key={s.name} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-[13.5px] font-bold text-ink-800">Mensagem</span>
            <textarea
              name="mensagem"
              rows={4}
              placeholder="Conte brevemente o que você precisa"
              className="resize-y rounded-[11px] border border-ink-300 px-[15px] py-3.5 text-[15.5px] text-ink-950 outline-none focus:border-brand-600 focus:ring-4 focus:ring-brand-600/15"
            />
          </label>
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-1 rounded-xl bg-brand-600 py-[17px] text-[16.5px] font-bold text-white transition-colors hover:bg-brand-800 disabled:opacity-60"
          >
            {status === "sending" ? "Enviando..." : "Enviar solicitação"}
          </button>
          {status === "sent" && (
            <p className="rounded-[10px] border border-success-border bg-success-bg px-3.5 py-3 text-sm text-success-text">
              Solicitação enviada com sucesso! Em breve entraremos em contato.
            </p>
          )}
          {status === "error" && (
            <p className="rounded-[10px] border border-red-200 bg-red-50 px-3.5 py-3 text-sm text-red-700">
              {errorMessage}
            </p>
          )}
          <p className="text-[12.5px] leading-relaxed text-ink-400">
            Seus dados são usados apenas para o envio da cotação.
          </p>
        </form>
      </div>
    </section>
  );
}
