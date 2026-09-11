import { NextResponse } from "next/server";
import { Resend } from "resend";

export type ContactPayload = {
  nome: string;
  telefone: string;
  email: string;
  servico?: string;
  mensagem?: string;
};

function isValidPayload(body: unknown): body is ContactPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.nome === "string" &&
    b.nome.trim().length > 0 &&
    typeof b.telefone === "string" &&
    b.telefone.trim().length > 0 &&
    typeof b.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email)
  );
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!isValidPayload(body)) {
    return NextResponse.json(
      { error: "Preencha nome, telefone e um e-mail válido." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("RESEND_API_KEY or CONTACT_TO_EMAIL is not configured.");
    return NextResponse.json(
      { error: "Envio de e-mail não configurado no servidor." },
      { status: 500 }
    );
  }

  const from = process.env.CONTACT_FROM_EMAIL || "Volotão Site <onboarding@resend.dev>";
  const { nome, telefone, email, servico, mensagem } = body;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Solicitação de proposta — site (${nome})`,
      text: [
        `Nome: ${nome}`,
        `Telefone: ${telefone}`,
        `E-mail: ${email}`,
        `Tipo de seguro: ${servico || "-"}`,
        "",
        mensagem || "",
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Não foi possível enviar a solicitação." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json({ error: "Não foi possível enviar a solicitação." }, { status: 500 });
  }
}
