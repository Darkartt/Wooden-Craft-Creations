import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactEmail } from '@/components/email/contact-email';
import { contactFormSchema } from '@/lib/validations';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('[send-email] Received request body:', JSON.stringify(body, null, 2));

    // Validate the request body
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      console.error('[send-email] Validation failed:', JSON.stringify(validationResult.error.errors, null, 2));
      return NextResponse.json(
        { error: 'Invalid request data', details: validationResult.error.errors },
        { status: 400 }
      );
    }

    const validatedData = validationResult.data;
    console.log('[send-email] Validated data:', JSON.stringify(validatedData, null, 2));

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('[send-email] RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the site administrator.' },
        { status: 500 }
      );
    }

    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY);
    const recipientEmail = process.env.CONTACT_EMAIL_TO || 'Jklwoodcrafts@yahoo.co.uk';
    console.log('[send-email] Sending email to:', recipientEmail);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'JKL Woodcrafts <onboarding@resend.dev>',
      to: recipientEmail,
      replyTo: validatedData.email,
      subject: `New Project Inquiry from ${validatedData.name}`,
      react: ContactEmail(validatedData),
    });

    if (error) {
      console.error('[send-email] Resend API error:', JSON.stringify(error, null, 2));
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    console.log('[send-email] Email sent successfully:', data);
    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
