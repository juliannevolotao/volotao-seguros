import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/lib/site-config";

const VALUES = [
  {
    title: "Atendimento personalizado.",
    text: "Você fala sempre com o mesmo corretor.",
  },
  {
    title: "Agilidade.",
    text: "Cotações comparativas em até 24 horas úteis.",
  },
  {
    title: "Transparência.",
    text: "Coberturas e exclusões explicadas antes da contratação.",
  },
];

export function About() {
  return (
    <section id="sobre" className="reveal-on-scroll mx-auto max-w-[1180px] px-5 py-[clamp(52px,7vw,88px)]">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-[60px]">
        <div>
          <span className="text-[12.5px] font-bold tracking-[.16em] text-brand-600">
            SOBRE A {siteConfig.name.toUpperCase()}
          </span>
          <h2 className="mt-3.5 text-[clamp(28px,3.6vw,40px)] font-extrabold tracking-tight text-[#0F2138]">
            Uma corretora que atende pessoas, não apólices
          </h2>
          <p className="mt-[18px] text-[16.5px] leading-[1.7] text-ink-700">
            São mais de {siteConfig.yearsInMarket} anos no mercado de seguros construindo relações
            de confiança com famílias e empresas. Cuidamos de todo o processo: entendemos sua
            necessidade, comparamos as seguradoras, explicamos cada cobertura em linguagem simples
            e acompanhamos você no momento em que mais importa — o do sinistro.
          </p>
          <div className="mt-[26px] flex flex-col gap-3.5">
            {VALUES.map((v) => (
              <span key={v.title} className="flex items-start gap-3">
                <Icon
                  name="checkmark"
                  size={20}
                  strokeWidth={2}
                  className="mt-0.5 shrink-0 text-brand-600"
                />
                <span className="text-[15.5px] leading-snug text-ink-800">
                  <strong className="text-ink-950">{v.title}</strong> {v.text}
                </span>
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-3.5">
          {siteConfig.stats.about.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-ink-200 bg-ink-50 p-[26px]">
              <strong className="block text-[34px] font-extrabold tracking-tight text-brand-800">
                {stat.value}
              </strong>
              <span className="mt-1.5 block text-sm font-semibold text-ink-600">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
