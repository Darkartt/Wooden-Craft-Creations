import { contactFormSchema } from '@/lib/validations';

describe('Contact Form Validation', () => {
  const validData = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+44 1234 567890',
    projectType: 'furniture',
    budget: '1000-2500',
    preferredContact: 'email' as const,
    message:
      'I would like to order a custom oak dining table for my new home. Please contact me to discuss the details.',
  };

  it('validates correct data', () => {
    const result = contactFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('requires name to be at least 2 characters', () => {
    const result = contactFormSchema.safeParse({ ...validData, name: 'J' });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toContain('at least 2 characters');
    }
  });

  it('requires valid email', () => {
    const result = contactFormSchema.safeParse({ ...validData, email: 'invalid-email' });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toContain('valid email');
    }
  });

  it('requires message to be at least 50 characters', () => {
    const result = contactFormSchema.safeParse({ ...validData, message: 'Too short' });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toContain('at least 50 characters');
    }
  });

  it('allows optional phone field', () => {
    const { phone, ...dataWithoutPhone } = validData;
    const result = contactFormSchema.safeParse(dataWithoutPhone);
    expect(result.success).toBe(true);
  });

  it('requires preferredContact to be email or phone', () => {
    const result = contactFormSchema.safeParse({
      ...validData,
      preferredContact: 'invalid' as any,
    });
    expect(result.success).toBe(false);
  });
});
