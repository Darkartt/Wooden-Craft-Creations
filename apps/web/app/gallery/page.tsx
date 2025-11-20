'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type Category = 'all' | 'furniture' | 'decorations' | 'custom' | 'outdoor';

interface Project {
  id: number;
  title: string;
  category: Exclude<Category, 'all'>;
  description: string;
  materials?: string;
  dimensions?: string;
  image: string;
  imageAlt: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Heritage Wishing Well',
    category: 'outdoor',
    description:
      'Signature garden centrepiece complete with concealed access chamber and waterproof drawer.',
    materials: 'Pressure-treated timber, aged finish, concealed hardware',
    image: '/gallery/wishing-well-hero.jpg',
    imageAlt: 'Handcrafted timber wishing well in a garden setting',
  },
  {
    id: 2,
    title: 'Weathered Wishing Well',
    category: 'outdoor',
    description:
      'The same well after Kev’s custom ageing treatment that accelerates the natural patina.',
    materials: 'Pressure-treated timber, eco-friendly ageing wash',
    image: '/gallery/wishing-well-aged.jpg',
    imageAlt: 'Aged wooden wishing well with weathered finish',
  },
  {
    id: 3,
    title: 'Timber Garden Pavilion',
    category: 'outdoor',
    description:
      'Freestanding pitched-roof shelter delivered ready for client-installed roofing and finishes.',
    materials: 'C24 structural timber, exterior joinery',
    dimensions: 'Bespoke footprint',
    image: '/gallery/timber-gazebo.jpg',
    imageAlt: 'Timber framed gazebo under construction outdoors',
  },
  {
    id: 4,
    title: 'Keepsake Storage Boxes',
    category: 'decorations',
    description:
      'Stackable pine boxes sized for home organisation, gifting, and personalised lettering.',
    materials: 'Planed pine boards, rope pulls',
    dimensions: 'Custom sizing',
    image: '/gallery/keepsake-boxes.jpg',
    imageAlt: 'Stack of handcrafted pine storage boxes',
  },
  {
    id: 5,
    title: 'Oak Collectors Cabinet',
    category: 'furniture',
    description:
      'Solid oak display cabinet with LED-ready shelves for curated collections and memorabilia.',
    materials: 'Quarter-sawn oak, acrylic shelving, inset lighting channels',
    image: '/gallery/oak-display-cabinet.jpg',
    imageAlt: 'Tall oak display cabinet with glass shelves and LED lighting',
  },
  {
    id: 6,
    title: 'Cabinet Detailing & Glazing',
    category: 'custom',
    description:
      'Inset glazed doors, adjustable shelving, and concealed brackets engineered for heirloom displays.',
    materials: 'Solid oak, toughened glass, brass hardware',
    image: '/gallery/oak-display-cabinet-open.jpg',
    imageAlt: 'Close-up of oak display cabinet interior and glass doors',
  },
  {
    id: 7,
    title: 'Gresford Colliery Memorial',
    category: 'custom',
    description:
      'Commemorative plaque blending engraved marble with layered oak to honour the 1934 disaster.',
    materials: 'Oak, reclaimed marble, brass fasteners',
    image: '/gallery/gresford-memorial.jpg',
    imageAlt: 'Handcrafted memorial plaque dedicated to the Gresford Colliery Disaster',
  },
  {
    id: 8,
    title: 'Salt & Pepper Mill Set',
    category: 'decorations',
    description:
      'Lathe-turned oak grinders brought to life with brass hardware and a food-safe finish.',
    materials: 'Solid oak, stainless grinder cores',
    image: '/gallery/salt-pepper-oak.jpg',
    imageAlt: 'Pair of handcrafted oak salt and pepper mills on a workbench',
  },
  {
    id: 9,
    title: 'Oversized Domino Set',
    category: 'decorations',
    description:
      'Supersized hardwood dominos for garden games, each hand-painted and lacquered.',
    materials: 'Select hardwoods, exterior lacquer',
    image: '/gallery/oversized-dominoes.jpg',
    imageAlt: 'Large wooden domino tiles displayed on a table',
  },
  {
    id: 10,
    title: 'Bespoke Cottage Windows',
    category: 'custom',
    description:
      'Made-to-measure window frames produced for a self-build extension and installed on-site.',
    materials: 'Redwood joinery timber, double-glazed units',
    image: '/gallery/bespoke-windows.jpg',
    imageAlt: 'Custom timber window frames installed in a home extension',
  },
  {
    id: 11,
    title: 'Toy Swords & Wands',
    category: 'decorations',
    description:
      'Crowd-favourite market pieces that pair smooth-sanded blades with playful painted hilts.',
    materials: 'Pine, child-safe finishes',
    image: '/gallery/toy-swords.jpg',
    imageAlt: 'Handmade wooden toy swords and wands on display',
  },
  {
    id: 12,
    title: 'Four Poster Bed Frame',
    category: 'furniture',
    description:
      'Room-height canopy structure that slips around an existing base for a dramatic bedroom update.',
    materials: 'Laminated pine posts, hidden mechanical fixings',
    image: '/gallery/four-poster-bed.jpg',
    imageAlt: 'Handcrafted four-poster bed frame surrounding an existing mattress base',
  },
  {
    id: 13,
    title: 'Doorstep Delivery Chest',
    category: 'custom',
    description:
      'Lockable grocery box that keeps parcels dry and hidden, sized for modern doorstep drops.',
    materials: 'Treated cladding boards, concealed hinges, shingle lid',
    image: '/gallery/doorstep-delivery-box.jpg',
    imageAlt: 'Large handcrafted wooden delivery box on a doorstep',
  },
  {
    id: 14,
    title: 'Oak Diamond Desk Clock',
    category: 'decorations',
    description:
      'Tilting diamond profile keeps the face easy to read while showcasing grain-matched oak.',
    materials: 'Solid oak, quartz clockwork, hand-cut numerals',
    image: '/gallery/484518012_1326419048437912_2317820083652240650_n.jpg',
    imageAlt: 'Diamond-shaped oak desk clock with bold Arabic numerals',
  },
  {
    id: 15,
    title: 'Octagon Mantle Clock',
    category: 'decorations',
    description:
      'Statement octagon body with chamfered edges and a satin lacquer finish for living rooms.',
    materials: 'Select oak, quartz clockwork, matte lacquer',
    image: '/gallery/484569297_1326418721771278_2354381229037742689_n.jpg',
    imageAlt: 'Octagon oak mantle clock with hand-applied numerals',
  },
  {
    id: 16,
    title: 'Zodiac Wall Clock',
    category: 'decorations',
    description:
      'Circular wall clock featuring hand-carved zodiac glyphs and subtle two-tone finishing.',
    materials: 'Maple veneer, engraved numerals, quartz clockwork',
    image: '/gallery/484790652_1326419101771240_2131787446032870772_n.jpg',
    imageAlt: 'Round wall clock with carved zodiac symbols replacing numerals',
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalOverflow;
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedProject]);

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-24 md:px-8">
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
              {/* Project Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="group relative block h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-label={`Enlarge ${project.title}`}
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <p className="pointer-events-none absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-wide text-white/80">
                    Click to enlarge
                  </p>
                  <div className="pointer-events-none absolute right-4 top-4">
                    <Badge variant="secondary" className="capitalize">
                      {project.category}
                    </Badge>
                  </div>
                </button>
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

      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.title} enlarged view`}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-background"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[4/3] bg-muted">
              <Image
                src={selectedProject.image}
                alt={selectedProject.imageAlt}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6">
              <div className="mb-3 flex items-center gap-3 text-sm text-muted-foreground">
                <Badge variant="secondary" className="capitalize">
                  {selectedProject.category}
                </Badge>
                <span>Project spotlight</span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground">{selectedProject.title}</h3>
              <p className="mt-2 text-muted-foreground">{selectedProject.description}</p>
              {selectedProject.materials && (
                <p className="mt-4 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Materials:</span> {selectedProject.materials}
                </p>
              )}
            </div>
            <Button
              variant="outline"
              className="absolute right-4 top-4 bg-background/90"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </Button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
