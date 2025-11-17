'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

type Category = 'all' | 'furniture' | 'decorations' | 'custom' | 'outdoor';

interface Project {
  id: number;
  title: string;
  category: Exclude<Category, 'all'>;
  description: string;
  materials?: string;
  dimensions?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Custom Oak Dining Table',
    category: 'furniture',
    description: 'A beautiful handcrafted dining table made from solid oak with natural finish.',
    materials: 'Oak wood, natural oil finish',
    dimensions: '200cm x 100cm x 75cm',
  },
  {
    id: 2,
    title: 'Decorative Wall Shelves',
    category: 'decorations',
    description: 'Elegant floating shelves with natural wood grain finish.',
    materials: 'Pine wood, varnish',
    dimensions: '120cm x 25cm x 20cm',
  },
  {
    id: 3,
    title: 'Garden Bench',
    category: 'outdoor',
    description: 'Weather-resistant outdoor bench with classic design.',
    materials: 'Treated timber, outdoor stain',
    dimensions: '150cm x 60cm x 90cm',
  },
  {
    id: 4,
    title: 'Custom Bookshelf',
    category: 'furniture',
    description: 'Floor-to-ceiling bookshelf with adjustable shelves.',
    materials: 'Walnut wood, brass hardware',
    dimensions: '240cm x 180cm x 35cm',
  },
  {
    id: 5,
    title: 'Wooden Photo Frames',
    category: 'decorations',
    description: 'Handcrafted picture frames in various sizes.',
    materials: 'Mixed hardwoods',
    dimensions: 'Various sizes',
  },
  {
    id: 6,
    title: 'Commissioned Coffee Table',
    category: 'custom',
    description: 'Unique coffee table with live edge and glass top.',
    materials: 'Oak live edge, tempered glass',
    dimensions: '120cm x 70cm x 45cm',
  },
  {
    id: 7,
    title: 'Planter Boxes',
    category: 'outdoor',
    description: 'Set of three tiered planter boxes for outdoor use.',
    materials: 'Cedar wood, waterproof liner',
    dimensions: 'Various sizes',
  },
  {
    id: 8,
    title: 'Entryway Console',
    category: 'furniture',
    description: 'Slim console table perfect for narrow hallways.',
    materials: 'Maple wood, drawer hardware',
    dimensions: '100cm x 30cm x 80cm',
  },
  {
    id: 9,
    title: 'Wall Art Panels',
    category: 'decorations',
    description: 'Abstract wooden wall art with geometric patterns.',
    materials: 'Mixed woods, various stains',
    dimensions: '60cm x 60cm (set of 3)',
  },
  {
    id: 10,
    title: 'Custom Wine Rack',
    category: 'custom',
    description: 'Wall-mounted wine rack holding 12 bottles.',
    materials: 'Oak, metal brackets',
    dimensions: '90cm x 30cm x 15cm',
  },
  {
    id: 11,
    title: 'Garden Arbor',
    category: 'outdoor',
    description: 'Classic garden arbor with lattice sides.',
    materials: 'Treated pine, outdoor finish',
    dimensions: '120cm x 60cm x 240cm',
  },
  {
    id: 12,
    title: 'Bedside Tables (Pair)',
    category: 'furniture',
    description: 'Matching nightstands with single drawer.',
    materials: 'Cherry wood, soft-close runners',
    dimensions: '50cm x 40cm x 60cm each',
  },
];

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'furniture', label: 'Furniture' },
  { value: 'decorations', label: 'Decorations' },
  { value: 'custom', label: 'Custom' },
  { value: 'outdoor', label: 'Outdoor' },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="container px-4 py-24 md:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Project Gallery</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Explore our collection of handcrafted wooden creations, from custom furniture to
          decorative pieces
        </p>
      </motion.div>

      {/* Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-12 flex flex-wrap justify-center gap-2"
      >
        {categories.map((category) => (
          <Button
            key={category.value}
            variant={selectedCategory === category.value ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category.value)}
            className="transition-all"
          >
            {category.label}
          </Button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            layout
          >
            <Card className="group h-full overflow-hidden transition-all hover:shadow-lg hover:border-primary/50">
              {/* Project Image Placeholder */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-wood-400 to-wood-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-6xl font-bold text-white/20">{project.id}</span>
                </div>
                <div className="absolute right-4 top-4">
                  <Badge variant="secondary" className="capitalize">
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Project Details */}
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>

                {project.materials && (
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-foreground">Materials: </span>
                    <span className="text-xs text-muted-foreground">{project.materials}</span>
                  </div>
                )}

                {project.dimensions && (
                  <div>
                    <span className="text-xs font-semibold text-foreground">Dimensions: </span>
                    <span className="text-xs text-muted-foreground">{project.dimensions}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-24 text-center"
        >
          <p className="text-lg text-muted-foreground">
            No projects found in this category. Check back soon!
          </p>
        </motion.div>
      )}
    </div>
  );
}
