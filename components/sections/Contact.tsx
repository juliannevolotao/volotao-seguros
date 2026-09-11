import { Icon } from "@/components/ui/Icon";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig, waLink } from "@/lib/site-config";

const SOCIAL_LINKS = [
  {
    icon: "instagram" as const,
    label: "Instagram",
    href: siteConfig.social.instagram,
  },
  {
    icon: "facebook" as const,
    label: "Facebook",
    href: siteConfig.social.facebook,
  },
  {
    icon: "linkedin" as const,
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
  },
  { icon: "whatsapp" as const, label: "WhatsApp", href: waLink() },
];

export function Contact() {
  return (
    <section
      id="contato"
      className="mx-auto max-w-[1180px] px-5 py-[clamp(52px,7vw,88px)]"
    >
      <div className="grid grid-cols-1 items-start gap-9 lg:grid-cols-2 lg:gap-12">
        <div>
          <Reveal>
            <span className="text-[12.5px] font-bold tracking-[.16em] text-brand-600">
              CONTATO E LOCALIZAÇÃO
            </span>
            <h2 className="mt-3.5 text-[clamp(26px,3.2vw,36px)] font-extrabold tracking-tight text-[#0F2138]">
              Venha tomar um café com a gente
            </h2>
          </Reveal>

          <div className="mt-7 flex flex-col gap-5">
            {[
              {
                icon: "pin" as const,
                label: "Endereço",
                content: (
                  <>
                    {siteConfig.address.line1}
                    <br />
                    {siteConfig.address.line2}
                  </>
                ),
              },
              {
                icon: "handset" as const,
                label: "Telefone",
                content: siteConfig.phones.join(" · "),
              },
              {
                icon: "mail" as const,
                label: "E-mail",
                content: siteConfig.contactEmail,
              },
              {
                icon: "clock" as const,
                label: "Horário de atendimento",
                content: siteConfig.hours,
              },
            ].map((row, i) => (
              <Reveal
                key={row.label}
                as="span"
                delay={100 + i * 80}
                className="flex items-start gap-3.5"
              >
                <Icon
                  name={row.icon}
                  size={21}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-brand-600"
                />
                <span className="text-[15.5px] leading-relaxed text-ink-800">
                  <strong className="block text-ink-950">{row.label}</strong>
                  {row.content}
                </span>
              </Reveal>
            ))}
          </div>

          <Reveal delay={420} className="mt-7 flex gap-2.5">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener" : undefined}
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-200 text-ink-800 hover:border-brand-600 hover:text-brand-600"
              >
                <Icon name={s.icon} size={20} strokeWidth={1.8} />
              </a>
            ))}
          </Reveal>
        </div>

        <Reveal delay={120}>
          {/* <PlaceholderImage
            label="incorporar Google Maps (iframe)"
            aspect="aspect-[4/3]"
            rounded="rounded-2xl"
          /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.90441911534!2d-46.38505620000001!3d-23.9638198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1ddd1898eb4f%3A0x44d9b10a3ae43f39!2sR.%20Benjamin%20Constant%2C%2061%20-%20Centro%2C%20S%C3%A3o%20Vicente%20-%20SP%2C%2011310-500!5e0!3m2!1spt-BR!2sbr!4v1789162789059!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            className="rounded-2xl max-w-full "
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </Reveal>
      </div>
    </section>
  );
}
