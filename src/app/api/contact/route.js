// Server API placeholder — nodemailer removed to avoid build errors for users who choose client-side options.
export async function POST(req) {
  const body = await req.json();
  const fromName = body.from_name || body.name || '';
  const fromEmail = body.from_email || body.email || '';
  const message = body.message || '';
  const toEmail = body.to_email || '';
  const useDefaultEmailAddress = body.use_default_email_address || '';
  const replyTo = body.reply_to || '';
  const cc = body.cc || '';
  const bcc = body.bcc || '';

  return new Response(
    JSON.stringify({
      error: 'Server email not configured. Use EmailJS or set up SMTP and install nodemailer.',
      received: {
        to_email: toEmail,
        from_name: fromName,
        from_email: fromEmail,
        use_default_email_address: useDefaultEmailAddress,
        reply_to: replyTo,
        cc,
        bcc,
        message,
      },
    }),
    { status: 501 }
  );
}
