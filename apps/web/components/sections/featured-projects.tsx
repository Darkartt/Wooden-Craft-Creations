'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const featuredProjects = [
  {
    id: 1,
    title: 'Heritage Wishing Well',
    category: 'Outdoor',
    description:
      'Garden centrepiece with hidden access hatch, aged by hand for a lived-in finish.',
    image: '/gallery/wishing-well-hero.jpg',
    imageAlt: 'Handcrafted wooden wishing well in a garden',
  },
  {
    id: 2,
    title: 'Oak Collectors Cabinet',
    category: 'Furniture',
    description:
      'Solid oak cabinet with LED-ready shelving for displaying treasured collections.',
    image: '/gallery/oak-display-cabinet.jpg',
    imageAlt: 'Tall oak display cabinet with glass doors',
  },
  {
    id: 3,
    title: 'Timber Garden Pavilion',
    category: 'Outdoor',
    description: 'Freestanding shelter built to order with joinery-grade framing.',
    image: '/gallery/timber-gazebo.jpg',
    imageAlt: 'Timber garden pavilion under construction outdoors',
  },
];

export function FeaturedProjects() {
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
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">Featured Projects</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A showcase of recent work demonstrating craftsmanship and attention to detail
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden transition-all hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">
                    #{project.id.toString().padStart(2, '0')}
                  </span>
                  <div className="pointer-events-none absolute right-4 top-4">
                    <Badge>{project.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button asChild size="lg" variant="outline" className="group">
            <Link href="/gallery">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
