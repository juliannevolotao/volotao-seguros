import { Icon } from "@/components/ui/Icon";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig, waLink } from "@/lib/site-config";

const TRUST_ITEMS = ["Cotação em até 24h", "Atendimento humano", "Assessoria em sinistros"];

function HeroStats() {
  return (
    <>
      {siteConfig.stats.hero.map((stat, i) => (
        <span key={stat.value} className="flex items-center gap-[18px]">
          {i > 0 && <span className="h-full w-px self-stretch bg-ink-200" />}
          <span className="flex flex-col">
            <strong className="text-[22px] text-brand-800">{stat.value}</strong>
            <span className="text-xs font-semibold leading-[1.3] text-ink-600 whitespace-pre-line">
              {stat.label}
            </span>
          </span>
        </span>
      ))}
    </>
  );
}

export function Hero() {
  return (
    <>
      <section
        id="topo"
        className="border-b border-ink-100 bg-gradient-to-b from-brand-50 to-white"
      >
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-5 py-[clamp(40px,7vw,88px)] sm:gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-100 px-3.5 py-2 text-[12.5px] font-bold tracking-[.08em] text-brand-800">
              <Icon name="shield" size={14} strokeWidth={2.2} />
              +{siteConfig.yearsInMarket} ANOS DE MERCADO
            </span>
            <h1 className="mt-5 text-[clamp(34px,5.4vw,56px)] font-extrabold leading-[1.06] tracking-tight text-[#0F2138]">
              Mais de {siteConfig.yearsInMarket} anos protegendo o que é importante para você
            </h1>
            <p className="mt-5 max-w-[520px] text-[clamp(16px,1.6vw,19px)] leading-relaxed text-ink-700">
              Consórcio, seguro de veículo e seguro saúde são o nosso forte — e o portfólio vai
              além, com soluções para casa, empresa e viagem. Atendimento próximo do primeiro
              contato ao acionamento do sinistro.
            </p>

            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
              <a
                href="#proposta"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-brand-600 px-[26px] py-4 text-base font-bold text-white shadow-cta transition-colors hover:bg-brand-800"
              >
                Solicitar Proposta
                <Icon name="arrowRight" size={17} strokeWidth={2.2} />
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border-[1.5px] border-whatsapp bg-white px-6 py-[15px] text-base font-bold text-success-text transition-colors hover:bg-whatsapp hover:text-whatsapp-text"
              >
                <Icon name="whatsapp" size={18} />
                Falar no WhatsApp
              </a>
            </div>

            <div className="mt-8 hidden flex-wrap gap-[22px] text-[13.5px] font-semibold text-ink-600 sm:flex">
              {TRUST_ITEMS.map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Icon name="checkmark" size={16} strokeWidth={2.4} className="shrink-0 text-brand-600" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative">
              <PlaceholderImage label="foto institucional — família / escritório" aspect="aspect-[4/3]" />
              <img src="/images/section1.jpg" alt="foto institucional — família / escritório" className="absolute inset-0 h-full w-full object-cover rounded-2xl" />
              <div className="absolute -bottom-[18px] -left-2 hidden max-w-[calc(100%+8px)] gap-[18px] rounded-2xl border border-ink-200 bg-white p-4 px-5 shadow-stats sm:flex">
                <HeroStats />
              </div>
            </div>
            <div className="mt-3.5 flex items-center justify-between gap-3 rounded-2xl border border-ink-200 bg-white p-4 text-center sm:hidden">
              <HeroStats />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mobile-only trust strip, in the logo's blue gradient */}
      <div className="flex gap-0 overflow-x-auto bg-gradient-to-r from-brand-700 to-brand-500 text-white no-scrollbar sm:hidden">
        {TRUST_ITEMS.map((item) => (
          <span
            key={item}
            className="flex flex-none items-center gap-2 whitespace-nowrap px-[18px] py-3.5 text-[13px] font-semibold"
          >
            <Icon name="checkmark" size={15} strokeWidth={2.6} className="shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </>
  );
}
