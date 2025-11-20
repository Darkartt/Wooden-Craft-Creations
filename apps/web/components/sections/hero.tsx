'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Hammer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const floatingOrbs = [
  {
    size: 420,
    style: { top: '-12%', left: '-8%' },
    x: [0, 30, -20, 0],
    y: [0, 25, 0],
    delay: 0,
  },
  {
    size: 320,
    style: { top: '5%', right: '-10%' },
    x: [0, -25, 15, 0],
    y: [0, 35, 10, 0],
    delay: 0.6,
  },
  {
    size: 220,
    style: { bottom: '-12%', left: '25%' },
    x: [0, 15, -10, 0],
    y: [0, -25, 5, 0],
    delay: 1.2,
  },
];

const sparkles = [
  { top: '18%', left: '15%' },
  { top: '30%', left: '60%' },
  { top: '42%', left: '32%' },
  { top: '58%', left: '72%' },
  { top: '70%', left: '18%' },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-gradient-to-b from-wood-100 to-background dark:from-wood-900/20 dark:to-background">
      {/* Animated light-mode background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden dark:hidden">
        <motion.div
          aria-hidden
          className="hero-gradient"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />

        <motion.div
          aria-hidden
          className="hero-grid"
          animate={{ backgroundPositionX: ['0px', '80px'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />

        {floatingOrbs.map((orb, index) => (
          <motion.div
            key={index}
            aria-hidden
            className="hero-orb"
            style={{
              width: orb.size,
              height: orb.size,
              ...orb.style,
            }}
            animate={{ x: orb.x, y: orb.y }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: orb.delay,
              repeatType: 'mirror',
            }}
          />
        ))}

        {sparkles.map((sparkle, index) => (
          <motion.div
            key={`sparkle-${index}`}
            aria-hidden
            className="hero-spark"
            style={sparkle}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 3 + index, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 z-10 wood-texture opacity-25 dark:opacity-20" />

      <div className="relative z-20 mx-auto w-full max-w-6xl px-4 py-24 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_460px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
              className="mb-8 inline-flex items-center justify-center rounded-full bg-primary/10 p-4"
            >
              <Hammer className="h-12 w-12 text-primary" />
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-6 font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Handcrafted Wooden Creations
              <span className="block text-primary">by Kev Simmonds</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-10 text-lg text-muted-foreground md:text-xl"
            >
              Custom craftsmanship bringing your vision to life. From furniture to decorative
              pieces, each creation is built with passion, precision, and attention to detail.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="group">
                <Link href="/gallery">
                  View Gallery
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Imagery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative order-first overflow-hidden rounded-3xl border border-white/30 shadow-2xl sm:order-none"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            <Image
              src="/gallery/workshop-tools.jpg"
              alt="Close-up of woodworking tools on a bench"
              width={920}
              height={1100}
              priority
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-background/90 p-4 text-sm shadow-xl">
              <p className="font-semibold text-foreground">Workshop in Progress</p>
              <p className="text-muted-foreground">
                Every commission starts with carefully selected timber and well-loved tools.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    </section>
  );
}
