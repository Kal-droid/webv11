interface EmailData {
  name: string;
  email: string;
  message: string;
}

export function createMailtoLink(data: EmailData) {
  // Update this email address to your preferred recipient
  const recipient = 'info@cbecapitalsc.com'; // Changed from contact@cbecapitalsc.com
  const subject = `Contact Form Submission from ${data.name}`;
  const body = `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`;
  
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}