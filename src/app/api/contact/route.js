import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { sanitizeContactPayload, validateContactPayload } from '@/app/lib/contactValidation';
import { buildContactEmailHtml, buildContactEmailText } from '@/app/lib/contactEmailTemplate';

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Invalid request body.' }, { status: 400 });
  }

  const payload = sanitizeContactPayload(body);
  const errors = validateContactPayload(payload);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ message: 'Please fix the errors and try again.', errors }, { status: 400 });
  }

  const { GMAIL_USER, GMAIL_APP_PASSWORD, RECEIVING_EMAIL } = process.env;
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !RECEIVING_EMAIL) {
    console.error('Contact form: missing GMAIL_USER, GMAIL_APP_PASSWORD, or RECEIVING_EMAIL env vars.');
    return NextResponse.json(
      { message: 'The contact form is temporarily unavailable. Please try again later.' },
      { status: 500 }
    );
  }

  const submittedAt = new Date();

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Crystal Decor Website" <${GMAIL_USER}>`,
      to: RECEIVING_EMAIL,
      replyTo: payload.email,
      subject: `New Consultation Request from ${payload.firstName} ${payload.lastName}`,
      text: buildContactEmailText({ ...payload, submittedAt }),
      html: buildContactEmailHtml({ ...payload, submittedAt }),
    });

    return NextResponse.json({ message: 'Your message has been sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Contact form: failed to send email.', error);
    return NextResponse.json(
      { message: 'We could not send your message right now. Please try again later.' },
      { status: 502 }
    );
  }
}
