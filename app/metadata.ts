import { Metadata } from 'next';

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = ''
): Metadata {
  const fullTitle = `${title} | Jacob Morgan`;
  const url = `https://thefutureorganization.com${path}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: 'Jacob Morgan - The Future Organization',
      images: [
        {
          url: '/assets/images/jacob-morgan-og.jpg',
          width: 1200,
          height: 630,
          alt: 'Jacob Morgan - Leadership Keynote Speaker',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      creator: '@jacobm',
      images: ['/assets/images/jacob-morgan-og.jpg'],
    },
    alternates: {
      canonical: url,
    },
  };
}