import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export function EmailTemplate({
  name,
  email,
  company,
  message,
}: EmailTemplateProps) {
  return `
    <div>
      <h1>Recibimos tu consulta, ${name}!</h1>
      <p>Te contactaremos pronto a ${email}.</p>
      ${company ? `<p>Guardamos tu empresa: ${company}</p>` : ""}
      <p>Mensaje: </p>
      <i style="font-size:xx-small">${message}</i>
    </div>
    `;
}
