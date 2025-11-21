import Link from 'next/link';
import { Facebook, Linkedin, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-serif text-2xl font-bold text-primary">JKL</span>
              <span className="font-medium">Woodcrafts</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Handcrafted wooden creations with attention to detail and quality craftsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link
                href="/"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="/gallery"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="font-semibold">Get in Touch</h3>
            <div className="flex flex-col space-y-3 text-sm">
              <a
                href="mailto:kevswoodencreations@gmail.com"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                kevswoodencreations@gmail.com
              </a>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/p/Kevs-Wooden-Craft-Creations-100032094896567/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kev-simmonds-1312aa179/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row md:text-left">
          <p>
            &copy; {currentYear} JKL Woodcrafts. All rights reserved. Crafted by{' '}
            <Link href="/" className="hover:text-primary">
              Kev Simmonds
            </Link>
            .
          </p>
          <p className="text-xs">Built with ❤️by <a href="https://www.linkedin.com/in/velislav-tsvetanov-48432b2b4/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Darkart</a></p>
        </div>
      </div>
    </footer>
  );
}
