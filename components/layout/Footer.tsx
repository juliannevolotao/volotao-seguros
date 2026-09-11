import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { siteConfig, waLink } from "@/lib/site-config";

const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#seguradoras", label: "Seguradoras Parceiras" },
  { href: "#proposta", label: "Solicitar Proposta" },
];

const SOCIAL_LINKS = [
  { icon: "instagram" as const, label: "Instagram", href: siteConfig.social.instagram },
  { icon: "facebook" as const, label: "Facebook", href: siteConfig.social.facebook },
  { icon: "linkedin" as const, label: "LinkedIn", href: siteConfig.social.linkedin },
  { icon: "whatsapp" as const, label: "WhatsApp", href: waLink() },
];

export function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-8 px-5 pb-7 pt-[clamp(40px,5vw,60px)]">
        <div>
          {/* <Logo variant="dark" /> */}
          
          <img src="/images/logo-branco.png" alt="Volotão Seguros Logo" className="w-48" />
          <p className="mt-[18px] max-w-[280px] text-sm leading-relaxed text-navy-200">
            Mais de {siteConfig.yearsInMarket} anos intermediando seguros e consórcios com
            atendimento próximo e transparente.
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          <strong className="text-[13px] tracking-[.12em] text-white">NAVEGAÇÃO</strong>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-[14.5px] text-navy-100 hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2.5">
          <strong className="text-[13px] tracking-[.12em] text-white">CONTATO</strong>
          <span className="text-[14.5px] leading-relaxed text-navy-200">
            {siteConfig.address.line1}
            <br />
            {siteConfig.address.line2.split("—")[0]}
          </span>
          <span className="text-[14.5px] text-navy-200">{siteConfig.phones[0]}</span>
          <span className="text-[14.5px] text-navy-200">{siteConfig.contactEmail}</span>
        </div>

        <div className="flex flex-col gap-3">
          <strong className="text-[13px] tracking-[.12em] text-white">REDES</strong>
          <div className="flex gap-2.5">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener" : undefined}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-[11px] border border-navy-700 text-navy-100 hover:border-navy-400 hover:text-white"
              >
                <Icon name={s.icon} size={18} strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1180px] flex-wrap justify-between gap-2.5 border-t border-navy-700 px-5 pb-8 pt-[18px] text-[13px] text-navy-300">
        <span>© {new Date().getFullYear()} {siteConfig.fullName}. Todos os direitos reservados.</span>
        <span>CNPJ 00.000.000/0001-00 · SUSEP 000000000</span>
      </div>
    </footer>
  );
}
