'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[32px] border border-white/40 bg-wood-100/90 p-12 text-center shadow-[0_25px_80px_rgba(0,0,0,0.08)] dark:border-border dark:bg-wood-900/60 dark:shadow-[0_25px_80px_rgba(0,0,0,0.6)] md:p-16"
        >
          {/* Background Layers */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 hero-grid opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-transparent to-secondary/20" />
            <div className="absolute inset-0 wood-texture opacity-20" />
          </div>

          {/* Floating accents */}
          <motion.div
            aria-hidden
            className="absolute -left-10 top-10 hidden h-32 w-32 rounded-full bg-primary/20 blur-3xl sm:block"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden
            className="absolute -right-10 bottom-10 hidden h-32 w-32 rounded-full bg-secondary/20 blur-3xl sm:block"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative z-10">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/70 px-4 py-1 text-sm font-medium uppercase tracking-[0.2em] text-primary shadow-sm dark:border-primary/40 dark:bg-primary/10">
              Crafted Together
            </p>
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Ready to Start Your Project?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Let&apos;s bring your woodworking vision to life. Get in touch to discuss your custom
              project.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-primary">
                <Link href="/gallery">View work</Link>
              </Button>
            </div>
          </div>

          {/* Decorative corners */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-6">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <span className="mx-4 h-3 w-3 rounded-full bg-primary/40" />
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
