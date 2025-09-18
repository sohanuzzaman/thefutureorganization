import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thefutureorganization.com'),
  title: "Employee Experience | Future of Work | Leadership Keynote Speaker | Jacob Morgan",
  description: "Jacob Morgan is a professionally trained futurist, best-selling author, and keynote speaker. He creates future-ready organizations, leaders, and employees.",
  keywords: [
    "Jacob Morgan",
    "Future of Work",
    "Employee Experience",
    "Leadership Speaker",
    "Keynote Speaker",
    "Leadership Development",
    "Future Ready Organizations",
    "Digital Transformation",
    "Employee Engagement",
    "Workplace Culture",
    "Business Futurist",
    "Best-Selling Author",
    "CHRO Community",
    "Executive Leadership",
  ],
  authors: [{ name: "Jacob Morgan" }],
  creator: "Jacob Morgan",
  publisher: "The Future Organization",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/fr-blue.png',
    shortcut: '/fr-blue.png',
    apple: '/fr-blue.png',
  },
  openGraph: {
    title: "Jacob Morgan - Leadership Keynote Speaker | Future of Work Expert",
    description: "Transform your organization with Jacob Morgan, a leading futurist and keynote speaker specializing in employee experience, leadership, and the future of work.",
    url: 'https://thefutureorganization.com',
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
    title: "Jacob Morgan - Future of Work Expert & Keynote Speaker",
    description: "Transform your organization with insights on employee experience, leadership, and the future of work.",
    creator: '@jacobm',
    images: ['/assets/images/jacob-morgan-og.jpg'],
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
  alternates: {
    canonical: 'https://thefutureorganization.com',
  },
  verification: {
    google: 'verification_token',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: 'light' }}>
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            @media (prefers-color-scheme: dark) {
              body {
                color-scheme: light !important;
                background-color: white !important;
                color: rgb(17, 24, 39) !important;
              }
            }
          `
        }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jacob Morgan",
              "url": "https://thefutureorganization.com",
              "image": "https://thefutureorganization.com/assets/images/jacob-morgan.jpg",
              "sameAs": [
                "https://twitter.com/jacobm",
                "https://www.linkedin.com/in/jacobmorgan",
                "https://www.youtube.com/jacobmorgan",
              ],
              "jobTitle": "Futurist, Author, and Keynote Speaker",
              "worksFor": {
                "@type": "Organization",
                "name": "The Future Organization"
              },
              "description": "Jacob Morgan is a professionally trained futurist, best-selling author, and keynote speaker specializing in employee experience, leadership, and the future of work.",
              "knowsAbout": [
                "Future of Work",
                "Employee Experience",
                "Leadership Development",
                "Digital Transformation",
                "Organizational Culture"
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${poppins.variable} font-poppins antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
