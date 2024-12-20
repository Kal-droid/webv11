import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/email';

interface SendEmailParams {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail({ name, email, message }: SendEmailParams) {
  try {
    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      {
        from_name: name,
        from_email: email,
        message: message
      },
      EMAIL_CONFIG.PUBLIC_KEY
    );

    if (response.status !== 200) {
      throw new Error('Failed to send email');
    }

    return response;
  } catch (error) {
    console.error('Email Error:', error);
    throw new Error('Failed to send email. Please try again.');
  }
}