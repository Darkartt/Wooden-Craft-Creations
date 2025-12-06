import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  preferredContact: z
    .string()
    .optional()
    .transform((val) => {
      if (!val || val === '') return 'email';
      if (val === 'email' || val === 'phone') return val;
      return 'email';
    }),
  message: z.string().min(50, 'Message must be at least 50 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
