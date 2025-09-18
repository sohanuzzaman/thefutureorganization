import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jacob Morgan - The Future Organization',
    short_name: 'Jacob Morgan',
    description: 'Jacob Morgan is a professionally trained futurist, best-selling author, and keynote speaker specializing in employee experience, leadership, and the future of work.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F0F5FA',
    theme_color: '#1e3a8a',
    icons: [
      {
        src: '/fr-blue.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/fr-blue.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}