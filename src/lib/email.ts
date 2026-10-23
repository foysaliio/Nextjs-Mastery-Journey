import { Resend } from "resend";

interface SendEmailInput {
  to: string;
  subject: string;
  text: string;
}

export const sendEmail = async ({ to, subject, text }: SendEmailInput) => {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;

  if (!apiKey || !from) {
    throw new Error("Email service is not configured.");
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to,
    subject,
    text,
  });

  if (error) {
    throw new Error(error.message);
  }
};
