interface FormData {
  name: string;
  email: string;
  message: string;
}

export function validateForm(data: FormData): string | null {
  if (!data.name.trim()) {
    return 'Name is required';
  }

  if (!data.email.trim()) {
    return 'Email is required';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return 'Please enter a valid email address';
  }

  if (!data.message.trim()) {
    return 'Message is required';
  }

  if (data.message.length < 10) {
    return 'Message must be at least 10 characters long';
  }

  return null;
}