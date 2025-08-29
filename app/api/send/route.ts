import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
resend.domains.create({ name: "agustinredin.online" });

export async function POST(req: Request) {
  try {
    const { name, email, company, message } = await req.json();

    const html = EmailTemplate({ name, email, company, message });

    const { data, error } = await resend.emails.send({
      from: "alerts@agustinredin.online",
      to: email,
      subject: "Hello world",
      html,
    });

    if (error) {
      return Response.json({ error: error.message || error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (err: any) {
    return Response.json(
      { error: err.message || "Error desconocido" },
      { status: 500 }
    );
  }
}
