import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'JKL Woodcrafts - Handcrafted Wooden Creations',
    short_name: 'JKL Woodcrafts',
    description:
      'Handcrafted wooden furniture and decorative pieces by Kev Simmonds. Custom woodworking projects with attention to detail.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#B8935F',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
