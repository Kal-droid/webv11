export const EMAIL_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID',
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', 
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY'
} as const;

export const EMAIL_TEMPLATE_VARS = {
  from_name: 'name',
  from_email: 'email',
  message: 'message'
} as const;