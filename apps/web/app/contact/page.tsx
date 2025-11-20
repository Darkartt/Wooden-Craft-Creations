'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Mail, Facebook, Linkedin, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast.success('Message sent successfully!', {
        description: 'Thank you for contacting us. We\'ll get back to you soon.',
      });

      reset();
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message', {
        description: 'Please try again later or contact us directly via email.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-24 md:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Get in Touch</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Have a project in mind? Let&apos;s discuss how we can bring your woodworking vision to
          life.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
                suppressHydrationWarning
              >
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    {...register('name')}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    {...register('email')}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+44 1234 567890"
                    {...register('phone')}
                    disabled={isSubmitting}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone.message}</p>
                  )}
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {/* Project Type */}
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type</Label>
                    <Select id="projectType" {...register('projectType')} disabled={isSubmitting}>
                      <option value="">Select a type</option>
                      <option value="furniture">Custom Furniture</option>
                      <option value="decorations">Decorative Pieces</option>
                      <option value="restoration">Restoration Work</option>
                      <option value="outdoor">Outdoor Projects</option>
                      <option value="other">Other</option>
                    </Select>
                  </div>

                  {/* Budget Range */}
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select id="budget" {...register('budget')} disabled={isSubmitting}>
                      <option value="">Select a range</option>
                      <option value="under-500">Under £500</option>
                      <option value="500-1000">£500 - £1,000</option>
                      <option value="1000-2500">£1,000 - £2,500</option>
                      <option value="2500-5000">£2,500 - £5,000</option>
                      <option value="over-5000">Over £5,000</option>
                    </Select>
                  </div>
                </div>

                {/* Preferred Contact Method */}
                <div className="space-y-2">
                  <Label htmlFor="preferredContact">
                    Preferred Contact Method <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    id="preferredContact"
                    {...register('preferredContact')}
                    disabled={isSubmitting}
                  >
                    <option value="">Select a method</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                  </Select>
                  {errors.preferredContact && (
                    <p className="text-sm text-destructive">{errors.preferredContact.message}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project... (minimum 50 characters)"
                    rows={6}
                    {...register('message')}
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Email Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Mail className="h-5 w-5 text-primary" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:kevswoodencreations@gmail.com"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                kevswoodencreations@gmail.com
              </a>
            </CardContent>
          </Card>

          {/* Social Media Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Social Media</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <a
                href="https://www.facebook.com/p/Kevs-Wooden-Craft-Creations-100032094896567/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-4 w-4" />
                Kevs Wooden Craft Creations
              </a>
              <a
                href="https://www.linkedin.com/in/kev-simmonds-1312aa179/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
                Kev Simmonds
              </a>
            </CardContent>
          </Card>

          {/* Response Time Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                I typically respond to inquiries within 24-48 hours. For urgent requests, please
                mention it in your message.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
