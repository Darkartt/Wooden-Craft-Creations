'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const featuredProjects = [
  {
    id: 1,
    title: 'Custom Oak Dining Table',
    category: 'Furniture',
    description: 'A beautiful handcrafted dining table made from solid oak.',
    image: '/projects/placeholder-1.jpg',
  },
  {
    id: 2,
    title: 'Decorative Wall Shelves',
    category: 'Decorations',
    description: 'Elegant floating shelves with natural wood grain finish.',
    image: '/projects/placeholder-2.jpg',
  },
  {
    id: 3,
    title: 'Garden Bench',
    category: 'Outdoor',
    description: 'Weather-resistant outdoor bench with classic design.',
    image: '/projects/placeholder-3.jpg',
  },
];

export function FeaturedProjects() {
  return (
    <section className="bg-muted/40 py-24">
      <div className="container px-4 md:px-8">
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
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-wood-400 to-wood-600">
                    <span className="font-serif text-6xl font-bold text-white/20">
                      {project.id}
                    </span>
                  </div>
                  <div className="absolute right-4 top-4">
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
