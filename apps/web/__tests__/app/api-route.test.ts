/**
 * API Route Tests
 *
 * Note: API route testing with Next.js requires a more complex setup with MSW or similar.
 * These tests verify the validation schema used by the API route.
 */

import { contactFormSchema } from '@/lib/validations';

describe('Send Email API Validation', () => {
  it('accepts valid contact form data', () => {
    const validData = {
      name: 'John Doe',
      email: 'john@example.com',
      preferredContact: 'email' as const,
      message:
        'This is a test message that is definitely longer than 50 characters to pass validation.',
    };

    const result = contactFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('rejects data with invalid email', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'not-an-email',
      preferredContact: 'email' as const,
      message: 'A valid message that is long enough to pass the minimum character requirement.',
    };

    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('rejects data with short message', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'john@example.com',
      preferredContact: 'email' as const,
      message: 'Too short',
    };

    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('rejects data with short name', () => {
    const invalidData = {
      name: 'J',
      email: 'john@example.com',
      preferredContact: 'email' as const,
      message: 'A valid message that is long enough to pass the minimum character requirement.',
    };

    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('accepts optional fields', () => {
    const dataWithOptionals = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+44 1234 567890',
      projectType: 'furniture',
      budget: '1000-2500',
      preferredContact: 'email' as const,
      message: 'A valid message that is long enough to pass the minimum character requirement.',
    };

    const result = contactFormSchema.safeParse(dataWithOptionals);
    expect(result.success).toBe(true);
  });
});
