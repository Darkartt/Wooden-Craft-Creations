import { Hero } from '@/components/sections/hero';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { Services } from '@/components/sections/services';
import { CTASection } from '@/components/sections/cta-section';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedProjects />
      <CTASection />
    </>
  );
}
