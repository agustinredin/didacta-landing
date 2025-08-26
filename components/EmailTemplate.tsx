import * as React from 'react';

interface EmailTemplateProps {
  name: string
  email: string
  company?: string
  message: string
}

export function EmailTemplate({ name, email, company, message }: EmailTemplateProps) {
  return (`
    <div>
      <h1>Welcome, ${name}!</h1>
    </div>
    `);
}