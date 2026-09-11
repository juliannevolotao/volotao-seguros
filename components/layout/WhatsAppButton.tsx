import { Icon } from "@/components/ui/Icon";
import { waLink } from "@/lib/site-config";

export function WhatsAppButton() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-[18px] right-[18px] z-[60] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-whatsapp text-whatsapp-text shadow-wa transition-colors hover:bg-whatsapp-dark hover:text-whatsapp-textDark"
    >
      <Icon name="whatsapp" size={30} strokeWidth={1.9} />
    </a>
  );
}
