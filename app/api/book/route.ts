import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { resend } from '@/lib/resend';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, service, budget, description } = body;

    if (!name || !email || !service || !description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { error: dbError } = await supabase
      .from('bookings')
      .insert([{ name, email, company, service, budget, description }]);

    if (dbError) {
      console.error('Supabase error:', dbError);
      return NextResponse.json({ error: 'Failed to save booking' }, { status: 500 });
    }

    await resend.emails.send({
      from: 'NADARISGETAE <onboarding@resend.dev>',
      to: email,
      subject: 'Booking Confirmed - NADARISGETAE',
      html: `
        <div style="background:#1F1F1F;color:#ffffff;padding:40px;font-family:sans-serif;max-width:600px;margin:0 auto;">
          <div style="border-bottom:1px solid #333333;padding-bottom:24px;margin-bottom:24px;">
            <h1 style="color:#FFD700;font-size:20px;font-weight:600;margin:0;">NADARISGETAE</h1>
            <p style="color:#6b7280;font-size:12px;margin:4px 0 0;">Full-Stack Developer and AI Solutions Builder</p>
          </div>
          <h2 style="color:#ffffff;font-size:18px;font-weight:600;margin-bottom:8px;">Booking Received</h2>
          <p style="color:#9ca3af;font-size:14px;line-height:1.6;margin-bottom:24px;">Thank you ${name}, your project inquiry has been received. I will review your submission and respond within 24 to 48 hours.</p>
          <div style="background:#2A2A2A;border-radius:8px;padding:24px;margin-bottom:24px;">
            <h3 style="color:#FFD700;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:16px;">Submission Summary</h3>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="color:#6b7280;font-size:13px;padding:6px 0;width:40%;">Name</td><td style="color:#ffffff;font-size:13px;padding:6px 0;">${name}</td></tr>
              <tr><td style="color:#6b7280;font-size:13px;padding:6px 0;">Email</td><td style="color:#ffffff;font-size:13px;padding:6px 0;">${email}</td></tr>
              <tr><td style="color:#6b7280;font-size:13px;padding:6px 0;">Company</td><td style="color:#ffffff;font-size:13px;padding:6px 0;">${company || 'Not provided'}</td></tr>
              <tr><td style="color:#6b7280;font-size:13px;padding:6px 0;">Service</td><td style="color:#ffffff;font-size:13px;padding:6px 0;">${service}</td></tr>
              <tr><td style="color:#6b7280;font-size:13px;padding:6px 0;">Budget</td><td style="color:#ffffff;font-size:13px;padding:6px 0;">${budget || 'Not specified'}</td></tr>
            </table>
          </div>
          <p style="color:#6b7280;font-size:12px;line-height:1.6;">This is an automated confirmation. Please do not reply to this email. For urgent matters contact hello@nadarisgetae.com</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
