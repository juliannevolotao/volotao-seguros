import { siteConfig } from "@/lib/site-config";

export function Insurers() {
  return (
    <section
      id="seguradoras"
      className="reveal-on-scroll border-y border-ink-100 bg-ink-50"
    >
      <div className="mx-auto max-w-[1180px] px-5 py-[clamp(46px,6vw,76px)] text-center">
        <h2 className="text-[clamp(24px,3vw,34px)] font-extrabold tracking-tight text-[#0F2138]">
          Trabalhamos com as melhores seguradoras do mercado
        </h2>
        <p className="mx-auto mt-3 max-w-[560px] text-base text-ink-700">
          Comparamos coberturas e preços entre as maiores companhias do país para indicar a melhor
          opção para o seu perfil.
        </p>
        <div className="mt-[34px] grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-3">
          {siteConfig.insurers.map((insurer) => (
            <div
              key={insurer}
              className="flex h-20 items-center justify-center rounded-xl border border-ink-200 bg-white px-3.5 text-center text-[14.5px] font-bold tracking-wide text-ink-500"
            >
              {insurer}
            </div>
          ))}
        </div>
        <p className="mt-5 font-mono text-xs text-ink-400">
          substituir pelos logos oficiais das seguradoras parceiras
        </p>
      </div>
    </section>
  );
}
