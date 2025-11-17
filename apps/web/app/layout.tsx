import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'JKL Woodcrafts | Handcrafted Wooden Creations by Kev Simmonds',
    template: '%s | JKL Woodcrafts',
  },
  description:
    'Discover beautiful handcrafted wooden furniture and decorative pieces by Kev Simmonds. Custom woodworking projects, restoration work, and commissioned pieces crafted with attention to detail.',
  keywords: [
    'woodworking',
    'custom furniture',
    'handcrafted wood',
    'wooden decorations',
    'custom carpentry',
    'wood restoration',
    'bespoke furniture',
    'Kev Simmonds',
    'JKL Woodcrafts',
  ],
  authors: [{ name: 'Kev Simmonds' }],
  creator: 'Kev Simmonds',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jklwoodcrafts.com',
    title: 'JKL Woodcrafts | Handcrafted Wooden Creations',
    description:
      'Beautiful handcrafted wooden furniture and decorative pieces by Kev Simmonds',
    siteName: 'JKL Woodcrafts',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JKL Woodcrafts | Handcrafted Wooden Creations',
    description:
      'Beautiful handcrafted wooden furniture and decorative pieces by Kev Simmonds',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
