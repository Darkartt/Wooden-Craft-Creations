'use client';

import { Armchair, Palette, Wrench, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Custom Furniture',
    description: 'Bespoke furniture pieces designed and crafted to your exact specifications.',
    icon: Armchair,
  },
  {
    title: 'Decorative Pieces',
    description: 'Unique wooden decorations that add character and warmth to any space.',
    icon: Palette,
  },
  {
    title: 'Restoration Work',
    description: 'Breathing new life into cherished pieces with expert restoration services.',
    icon: Wrench,
  },
  {
    title: 'Commissioned Projects',
    description: 'Transform your ideas into reality with custom commissioned woodwork.',
    icon: Sparkles,
  },
];

export function Services() {
  return (
    <section className="bg-muted/40 py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">Services & Specialties</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Offering a comprehensive range of woodworking services tailored to bring your vision to
            life
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                  <CardHeader>
                    <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
