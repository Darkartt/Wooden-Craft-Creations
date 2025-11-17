'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-secondary p-12 text-center shadow-xl md:p-16"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 wood-texture opacity-10" />

          <div className="relative z-10">
            <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Ready to Start Your Project?
            </h2>
            <p className="mb-8 text-lg text-white/90 md:text-xl">
              Let&apos;s bring your woodworking vision to life. Get in touch to discuss your custom
              project.
            </p>
            <Button asChild size="lg" variant="secondary" className="group">
              <Link href="/contact">
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
