import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Mohon lengkapi semua field yang diperlukan' },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email environment variables not configured');
      return NextResponse.json(
        { error: 'Konfigurasi email belum diatur. Silakan hubungi administrator.' },
        { status: 500 }
      );
    }

    console.log('Attempting to send email with:', {
      user: process.env.EMAIL_USER,
      to: 'fatwawebde@gmail.com',
      from: name,
      service: service
    });

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      debug: true, // Enable debug logging
    });

    // Test transporter connection
    try {
      await transporter.verify();
      console.log('Transporter verified successfully');
    } catch (verifyError) {
      console.error('Transporter verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Konfigurasi email tidak valid. Periksa EMAIL_USER dan EMAIL_PASS.' },
        { status: 500 }
      );
    }

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'fatwawebdev@gmail.com',
      subject: `Pesan Baru dari ${name} - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px;">Pesan Baru dari Form Kontak</h2>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #555;">Nama:</strong>
              <span style="color: #333; margin-left: 10px;">${name}</span>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #555;">Email:</strong>
              <span style="color: #333; margin-left: 10px;">${email}</span>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #555;">Layanan:</strong>
              <span style="color: #333; margin-left: 10px;">${service}</span>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #555;">Pesan:</strong>
              <div style="color: #333; margin-top: 10px; padding: 15px; background-color: #f8f9fa; border-radius: 5px; line-height: 1.5;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #777; font-size: 12px;">
              <p>Pesan ini dikirim melalui form kontak website Cendekia pada ${new Date().toLocaleString('id-ID')}</p>
            </div>
          </div>
        </div>
      `,
    };

    // Send email
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);

    return NextResponse.json(
      { success: true, message: 'Pesan berhasil dikirim!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.' },
      { status: 500 }
    );
  }
}
