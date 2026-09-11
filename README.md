# Volotão Corretora de Seguros — Landing Page

Landing page de alta conversão para a Volotão, corretora de seguros. Construída com **Next.js (App Router) + TypeScript + Tailwind CSS**, com navegação fluida (scroll suave, seção ativa, barra de progresso), catálogo de serviços com busca/filtros instantâneos, e envio de e-mail real pelo formulário de proposta via **Resend**.

> A pasta `design/` contém o material original do handoff do Claude Design (protótipo HTML/CSS/JS e o histórico de decisões) — mantida como referência, não faz parte do app.

## Estrutura de pastas

```
app/
  page.tsx            # monta a página a partir das seções
  layout.tsx           # fontes, metadata
  api/contact/route.ts # endpoint que envia o e-mail da proposta (Resend)
components/
  layout/               # Header, Footer, WhatsAppButton
  sections/             # Hero, Highlights, ServiceCatalog, ServiceModal, Insurers, About, ProposalForm, Contact
  providers/            # ServiceModalProvider — estado compartilhado do modal/formulário
  ui/                   # Icon, Logo, PlaceholderImage
lib/
  services.ts           # catálogo de serviços + categorias
  site-config.ts         # dados da empresa (telefone, e-mail, endereço, seguradoras…)
  icons.ts               # paths dos ícones outline usados pelo <Icon />
  scroll.ts               # helper de scroll suave com offset do header
hooks/
  useActiveSection.ts     # seção ativa no menu (IntersectionObserver)
  useScrollProgress.ts    # barra de progresso do header
```

## Como rodar

```bash
npm install
cp .env.example .env.local   # preencha as variáveis abaixo
npm run dev
```

## Configuração

Todo o conteúdo editável (placeholders) está centralizado em `lib/site-config.ts` e `lib/services.ts` — não é preciso caçar texto espalhado pelos componentes.

### Envio de e-mail (formulário "Solicitar Proposta")

O endpoint `app/api/contact/route.ts` envia o e-mail via [Resend](https://resend.com). Configure em `.env.local`:

| Variável | Descrição |
|---|---|
| `RESEND_API_KEY` | Chave de API do Resend (grátis em resend.com/api-keys) |
| `CONTACT_TO_EMAIL` | E-mail que recebe as solicitações |
| `CONTACT_FROM_EMAIL` | Remetente. O domínio sandbox do Resend funciona sem configuração; para enviar como `@volotaoseguros.com.br`, verifique o domínio no painel do Resend |

Sem essas variáveis configuradas, o formulário mostra um erro amigável em vez de falhar silenciosamente.

**Trocar para SMTP/Nodemailer:** se preferir não usar o Resend, troque a implementação dentro de `app/api/contact/route.ts` — o formulário (`components/sections/ProposalForm.tsx`) já só depende do contrato HTTP (`POST /api/contact` com JSON, resposta `{ ok: true }` ou `{ error: string }`), então a troca fica isolada nesse único arquivo.

### Outros placeholders

- **WhatsApp:** `NEXT_PUBLIC_WHATSAPP_NUMBER` em `.env.local` (formato `55DDDNUMERO`).
- **Logos das seguradoras**, **foto do hero/destaques** e **mapa do Google**: hoje são placeholders visuais (`components/ui/PlaceholderImage.tsx` e a lista de texto em `siteConfig.insurers`). Substitua por imagens/iframe reais quando disponíveis.
- **Endereço, telefone, horário, redes sociais:** `lib/site-config.ts`.

## Decisões de implementação

- **Responsividade via Tailwind**, não JS: onde o protótipo original alternava entre layouts mobile/desktop lendo `window.innerWidth`, aqui isso é `hidden md:flex` / `sm:hidden` etc. — mais simples de manter e sem risco de hidration mismatch.
- **Estado do modal de serviço** é compartilhado entre os destaques, o catálogo e o formulário via `ServiceModalProvider` (React Context), para o botão "Usar no formulário" poder pré-selecionar o campo "Tipo de seguro".
- **Seção ativa do menu** usa `IntersectionObserver` (não scroll polling) para performance.
