'use client';

import { motion } from 'framer-motion';
import {
  Lightbulb,
  Pencil,
  Trees,
  Hammer,
  Sparkles,
  Truck,
  Wrench,
  Ruler,
  PaintBucket,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const processSteps = [
  {
    number: 1,
    title: 'Consultation',
    description: 'We discuss your vision, requirements, and preferences in detail.',
    icon: Lightbulb,
  },
  {
    number: 2,
    title: 'Design & Planning',
    description: 'Creating detailed plans and designs tailored to your specifications.',
    icon: Pencil,
  },
  {
    number: 3,
    title: 'Material Selection',
    description: 'Choosing the perfect wood and materials for your project.',
    icon: Trees,
  },
  {
    number: 4,
    title: 'Crafting',
    description: 'Bringing your project to life with precision and care.',
    icon: Hammer,
  },
  {
    number: 5,
    title: 'Finishing',
    description: 'Applying the final touches and protective finishes.',
    icon: Sparkles,
  },
  {
    number: 6,
    title: 'Delivery',
    description: 'Safe delivery and installation of your custom piece.',
    icon: Truck,
  },
];

const tools = [
  { name: 'Hand Tools', icon: Wrench },
  { name: 'Precision Measuring', icon: Ruler },
  { name: 'Finishing Tools', icon: PaintBucket },
  { name: 'Power Tools', icon: Hammer },
];

export default function AboutPage() {
  return (
    <div className="container px-4 py-24 md:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">About Kev Simmonds</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Crafting wooden creations with passion, precision, and attention to detail
        </p>
      </motion.div>

      {/* Personal Story */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-24"
      >
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 aspect-[16/9] overflow-hidden rounded-lg bg-gradient-to-br from-wood-400 to-wood-600">
            <div className="flex h-full items-center justify-center">
              <Hammer className="h-24 w-24 text-white/30" />
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-lg leading-relaxed text-foreground">
              In my spare time, I like to get creative, building all sorts of things from wood.
              What started as a hobby has evolved into a passion for creating beautiful, functional
              pieces that bring joy to people&apos;s homes and lives.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Each project is an opportunity to transform raw materials into something special.
              Whether it&apos;s a custom dining table, decorative shelving, or a commissioned piece,
              I approach every project with the same dedication to quality and craftsmanship.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I believe that the best woodwork comes from understanding both the material and the
              vision. By combining traditional techniques with modern design sensibilities, I create
              pieces that are built to last and designed to be cherished.
            </p>
          </div>
        </div>
      </motion.section>

      <Separator className="my-16" />

      {/* Craftsmanship Philosophy */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl">
            Philosophy & Approach
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Quality over quantity. Every piece that leaves my workshop meets the highest
              standards of craftsmanship.
            </p>
            <p>
              Attention to detail. From the selection of materials to the final finish, every step
              is executed with precision.
            </p>
            <p>
              Customer collaboration. Your vision guides the process, ensuring the final product
              exceeds expectations.
            </p>
          </div>
        </div>
      </motion.section>

      <Separator className="my-16" />

      {/* Process Timeline */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">The Process</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From concept to completion, here&apos;s how I bring your woodworking project to life
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      <Separator className="my-16" />

      {/* Tools & Materials */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">Tools & Materials</h2>
            <p className="text-lg text-muted-foreground">
              Using quality tools and materials to ensure exceptional results
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Tools */}
            <div>
              <h3 className="mb-6 text-xl font-semibold">Workshop Tools</h3>
              <div className="space-y-4">
                {tools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <div key={tool.name} className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium">{tool.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Materials */}
            <div>
              <h3 className="mb-6 text-xl font-semibold">Preferred Materials</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Oak - Strong and beautiful grain
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Walnut - Rich, dark tones
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Pine - Versatile and cost-effective
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Cedar - Weather-resistant
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Maple - Smooth, light finish
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Cherry - Warm, elegant appearance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h3 className="mb-4 font-serif text-2xl font-bold">Ready to start your project?</h3>
        <p className="mb-6 text-muted-foreground">
          Let&apos;s discuss how I can bring your woodworking vision to life.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
        >
          Get in Touch
        </a>
      </motion.div>
    </div>
  );
}
