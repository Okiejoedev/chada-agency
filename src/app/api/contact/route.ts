import { NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log the contact form submission
    console.log('New contact form submission:', {
      name,
      email,
      company,
      message,
      timestamp: new Date().toISOString()
    });

    // Here you can:
    // 1. Save to database using Prisma
    // 2. Send email using a service like SendGrid or Resend
    // 3. Send notification to Slack
    // 4. Store in a CRM
    
    // For now, we'll just simulate successful processing
    // In a real application, you might want to:
    
    // Example: Save to database (if you had a contacts table)
    // const contact = await db.contact.create({
    //   data: { name, email, company, message }
    // });

    // Example: Send notification email
    // await sendNotificationEmail({ name, email, company, message });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        data: { name, email, company }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}