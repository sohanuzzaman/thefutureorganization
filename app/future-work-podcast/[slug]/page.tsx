import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from "../../components/Navigation";
import { FaApple, FaAmazon, FaSpotify, FaGoogle, FaPlay, FaClock, FaCalendar } from "react-icons/fa";
import { Metadata } from "next";
import ShareButtons from "./ShareButtons";

interface PodcastEpisode {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  link: string;
  featured_media: number;
  yoast_head_json?: {
    og_title?: string;
    og_description?: string;
    article_published_time?: string;
    article_modified_time?: string;
    og_image?: Array<{
      url: string;
      width: number;
      height: number;
    }>;
  };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
      media_details?: {
        width: number;
        height: number;
      };
    }>;
    "wp:term"?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
  };
}

interface RelatedEpisode {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

interface EpisodePageProps {
  params: { slug: string };
}

// Dynamic ISR - pages generated on-demand with 5-minute revalidation
export const dynamic = 'force-dynamic';
export const revalidate = 300; // 5 minutes

async function fetchEpisodeBySlug(slug: string): Promise<PodcastEpisode | null> {
  try {
    const response = await fetch(
      `https://api.thefutureorganization.com/wp-json/wp/v2/posts?slug=${slug}&_embed&categories=3624`,
      { next: { revalidate: 300 } }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    if (!data || data.length === 0) {
      return null;
    }

    return data[0];
  } catch (error) {
    console.error("Error fetching episode:", error);
    return null;
  }
}

async function fetchRelatedEpisodes(currentId: number): Promise<RelatedEpisode[]> {
  try {
    const response = await fetch(
      `https://api.thefutureorganization.com/wp-json/wp/v2/posts?_embed&per_page=3&exclude=${currentId}&categories=3624`,
      { next: { revalidate: 300 } }
    );

    if (!response.ok) {
      return [];
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching related episodes:", error);
    return [];
  }
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&#\d+;/g, '').trim();
}

function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = stripHtml(content).split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export async function generateMetadata({ params }: EpisodePageProps): Promise<Metadata> {
  const episode = await fetchEpisodeBySlug(params.slug);

  if (!episode) {
    return {
      title: "Episode Not Found | Future Ready Leadership Podcast",
      description: "The requested podcast episode could not be found.",
    };
  }

  const title = stripHtml(episode.title.rendered);
  const description = stripHtml(episode.excerpt.rendered);
  const featuredImage = episode._embedded?.["wp:featuredmedia"]?.[0];
  const publishDate = new Date(episode.date).toISOString();

  return {
    title: `${title} | Future Ready Leadership Podcast`,
    description: description || "Listen to this episode of the Future Ready Leadership Podcast with Jacob Morgan.",
    keywords: "podcast, leadership, future of work, business, management, Jacob Morgan, " + title,
    authors: [{ name: "Jacob Morgan" }],
    creator: "Jacob Morgan",
    publisher: "The Future Organization",

    openGraph: {
      title: `${title} | Future Ready Leadership Podcast`,
      description: description,
      type: 'article',
      publishedTime: publishDate,
      authors: ['Jacob Morgan'],
      siteName: 'Future Ready Leadership Podcast',
      locale: 'en_US',
      images: featuredImage ? [{
        url: featuredImage.source_url,
        width: featuredImage.media_details?.width || 1200,
        height: featuredImage.media_details?.height || 630,
        alt: featuredImage.alt_text || title,
      }] : [{
        url: '/assets/images/podcast-hero-banner.png',
        width: 1200,
        height: 630,
        alt: 'Future Ready Leadership Podcast',
      }],
    },

    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      creator: '@jacobmorgan',
      images: featuredImage ? [featuredImage.source_url] : ['/assets/images/podcast-hero-banner.png'],
    },

    alternates: {
      canonical: `https://thefutureorganization.com/future-work-podcast/${params.slug}`,
      types: {
        'application/rss+xml': 'https://thefutureorganization.com/podcast/feed',
      },
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
}

// Generate structured data for SEO
function generateStructuredData(episode: PodcastEpisode, _relatedEpisodes: RelatedEpisode[]) {
  const title = stripHtml(episode.title.rendered);
  const description = stripHtml(episode.excerpt.rendered);
  const featuredImage = episode._embedded?.["wp:featuredmedia"]?.[0];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "PodcastEpisode",
        "@id": `https://thefutureorganization.com/future-work-podcast/${episode.slug}`,
        "url": `https://thefutureorganization.com/future-work-podcast/${episode.slug}`,
        "name": title,
        "description": description,
        "datePublished": episode.date,
        "image": featuredImage?.source_url || '/assets/images/podcast-hero-banner.png',
        "partOfSeries": {
          "@type": "PodcastSeries",
          "name": "Future Ready Leadership Podcast",
          "url": "https://thefutureorganization.com/future-work-podcast"
        },
        "author": {
          "@type": "Person",
          "name": "Jacob Morgan",
          "url": "https://thefutureorganization.com"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://thefutureorganization.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Podcast",
            "item": "https://thefutureorganization.com/future-work-podcast"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": title
          }
        ]
      }
    ]
  };
}

export default async function EpisodePage({ params }: EpisodePageProps) {
  const episode = await fetchEpisodeBySlug(params.slug);

  if (!episode) {
    notFound();
  }

  const relatedEpisodes = await fetchRelatedEpisodes(episode.id);
  const readingTime = estimateReadingTime(episode.content.rendered);
  const structuredData = generateStructuredData(episode, relatedEpisodes);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Social share URLs
  const shareUrl = `https://thefutureorganization.com/future-work-podcast/${episode.slug}`;
  const shareTitle = stripHtml(episode.title.rendered);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-[#1e3a8a] shadow-sm relative z-50 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <Link href="/">
                <Image
                  src="/assets/images/jacob-logo.png"
                  alt="Jacob Morgan"
                  width={300}
                  height={68}
                  priority
                  className="h-12 w-auto transform hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <Navigation />
            </div>
          </div>
        </header>

        {/* Hero Section with Featured Image */}
        <section className="relative">
          {episode._embedded?.["wp:featuredmedia"]?.[0] ? (
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src={episode._embedded["wp:featuredmedia"][0].source_url}
                alt={episode._embedded["wp:featuredmedia"][0].alt_text || episode.title.rendered}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="max-w-5xl mx-auto">
                  <nav className="text-sm mb-4">
                    <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                      Home
                    </Link>
                    <span className="mx-2 text-gray-400">/</span>
                    <Link href="/future-work-podcast" className="text-gray-300 hover:text-white transition-colors">
                      Podcast
                    </Link>
                  </nav>

                  <div className="flex flex-wrap items-center gap-4 text-white mb-4">
                    <time className="flex items-center gap-2">
                      <FaCalendar className="w-4 h-4" />
                      {formatDate(episode.date)}
                    </time>
                    <span className="flex items-center gap-2">
                      <FaClock className="w-4 h-4" />
                      {readingTime} min read
                    </span>
                  </div>

                  <h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-[fadeInUp_1s_ease-out] hover:text-orange-400 transition-colors duration-300"
                    dangerouslySetInnerHTML={{ __html: episode.title.rendered }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-r from-blue-600 to-orange-500 py-16">
              <div className="max-w-5xl mx-auto px-4">
                <nav className="text-sm mb-4">
                  <Link href="/" className="text-white/80 hover:text-white transition-colors">
                    Home
                  </Link>
                  <span className="mx-2 text-white/60">/</span>
                  <Link href="/future-work-podcast" className="text-white/80 hover:text-white transition-colors">
                    Podcast
                  </Link>
                </nav>

                <div className="flex flex-wrap items-center gap-4 text-white mb-4">
                  <time className="flex items-center gap-2">
                    <FaCalendar className="w-4 h-4" />
                    {formatDate(episode.date)}
                  </time>
                  <span className="flex items-center gap-2">
                    <FaClock className="w-4 h-4" />
                    {readingTime} min read
                  </span>
                </div>

                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                  dangerouslySetInnerHTML={{ __html: episode.title.rendered }}
                />
              </div>
            </div>
          )}
        </section>

        {/* Main Content */}
        <main className="py-12">
          <article className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content Column */}
              <div className="lg:col-span-3">
                {/* Listen Section */}
                <div className="bg-white p-8 rounded-xl shadow-lg mb-8 hover-lift animate-[fadeInUp_0.8s_ease-out] opacity-0 [animation-fill-mode:forwards]" style={{animationDelay: '0.2s'}}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 hover:text-orange-600 transition-colors duration-300">
                    <FaPlay className="w-5 h-5 text-orange-500 animate-[float_2s_ease-in-out_infinite]" />
                    Listen to this Episode
                  </h2>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <a href="https://podcasts.apple.com/us/podcast/the-future-of-work-podcast/id907990904?mt=2&ls=1"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex flex-col items-center gap-3 p-5 bg-white border-2 border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all group">
                      <FaApple className="w-10 h-10 text-gray-800 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-semibold text-gray-800 text-center">Apple<br/>Podcasts</span>
                    </a>

                    <a href="https://open.spotify.com/show/4NtwiXeQCceo2iayiabYAi"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex flex-col items-center gap-3 p-5 bg-white border-2 border-gray-200 rounded-lg hover:border-green-300 hover:shadow-md transition-all group">
                      <FaSpotify className="w-10 h-10 text-green-600 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-semibold text-gray-800 text-center">Spotify</span>
                    </a>

                    <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mdXR1cmVvZndvcmtwb2RjYXN0LmxpYnN5bi5jb20vcnNz"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex flex-col items-center gap-3 p-5 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all group">
                      <FaGoogle className="w-10 h-10 text-blue-600 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-semibold text-gray-800 text-center">Google<br/>Podcasts</span>
                    </a>

                    <a href="https://music.amazon.com/podcasts/cfcfbf68-733f-4e82-a3f8-6a97d0b9e651/The-Future-of-Work-With-Jacob-Morgan"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex flex-col items-center gap-3 p-5 bg-white border-2 border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-md transition-all group">
                      <FaAmazon className="w-10 h-10 text-orange-600 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-semibold text-gray-800 text-center">Amazon<br/>Music</span>
                    </a>
                  </div>
                </div>

                {/* Episode Content */}
                <div className="bg-white p-10 lg:p-16 rounded-xl shadow-lg prose prose-2xl max-w-none
                              prose-headings:font-bold prose-headings:text-gray-900 prose-headings:tracking-tight
                              prose-h1:text-5xl prose-h1:mt-16 prose-h1:mb-10 prose-h1:leading-tight
                              prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:leading-tight
                              prose-h3:text-3xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:leading-tight
                              prose-h4:text-2xl prose-h4:mt-10 prose-h4:mb-5 prose-h4:leading-tight
                              prose-p:text-gray-900 prose-p:leading-[2] prose-p:!my-10 prose-p:text-xl
                              prose-a:text-blue-700 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                              prose-strong:text-gray-900 prose-strong:font-bold
                              prose-em:text-gray-800 prose-em:italic
                              prose-ul:my-10 prose-ul:space-y-4 prose-ol:my-10 prose-ol:space-y-4
                              prose-li:text-gray-900 prose-li:leading-[1.8] prose-li:text-xl prose-li:mb-3
                              prose-li:marker:text-blue-700
                              prose-blockquote:border-l-4 prose-blockquote:border-orange-500
                              prose-blockquote:pl-10 prose-blockquote:py-8 prose-blockquote:my-12
                              prose-blockquote:italic prose-blockquote:text-gray-800 prose-blockquote:text-2xl
                              prose-blockquote:bg-orange-50 prose-blockquote:rounded-r-lg prose-blockquote:leading-[1.7]
                              prose-img:rounded-xl prose-img:shadow-lg prose-img:my-12 prose-img:w-full
                              prose-figure:my-12
                              prose-figcaption:text-center prose-figcaption:text-gray-700 prose-figcaption:text-base prose-figcaption:mt-4 prose-figcaption:leading-relaxed
                              prose-code:text-blue-800 prose-code:bg-blue-50 prose-code:px-3 prose-code:py-2 prose-code:rounded prose-code:text-lg prose-code:font-medium
                              prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:p-8 prose-pre:my-10 prose-pre:leading-relaxed prose-pre:overflow-auto
                              prose-hr:border-gray-300 prose-hr:my-16
                              prose-table:my-10 prose-th:text-left prose-th:font-semibold prose-th:text-gray-900 prose-th:py-4 prose-th:text-lg
                              prose-td:text-gray-900 prose-td:border-gray-300 prose-td:py-4 prose-td:leading-relaxed prose-td:text-lg
                              prose-video:w-full prose-video:rounded-xl prose-video:shadow-lg prose-video:my-12
                              prose-iframe:w-full prose-iframe:rounded-xl prose-iframe:shadow-lg prose-iframe:my-12
                              first:prose-p:text-2xl first:prose-p:font-medium first:prose-p:text-gray-900 first:prose-p:leading-[1.8]">
                  <div
                    className="episode-content"
                    dangerouslySetInnerHTML={{ __html: episode.content.rendered }}
                  />
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                {/* Share Section */}
                <div className="bg-white p-6 rounded-xl shadow-lg mb-8 sticky top-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Share this Episode</h3>
                  <ShareButtons shareUrl={shareUrl} shareTitle={shareTitle} />
                </div>

                {/* Subscribe CTA */}
                <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-6 rounded-xl shadow-lg text-white">
                  <h3 className="text-xl font-bold mb-3">Never Miss an Episode</h3>
                  <p className="text-sm mb-4 opacity-90">Subscribe to get the latest episodes delivered to your favorite podcast app.</p>
                  <Link href="/future-work-podcast"
                        className="block w-full text-center bg-white text-blue-600 font-bold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                    View All Episodes
                  </Link>
                </div>
              </aside>
            </div>

            {/* Related Episodes */}
            {relatedEpisodes.length > 0 && (
              <section className="mt-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">More Episodes</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedEpisodes.map((related) => (
                    <Link key={related.id} href={`/future-work-podcast/${related.slug}`}>
                      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full">
                        <div className="relative aspect-video">
                          {related._embedded?.["wp:featuredmedia"]?.[0] ? (
                            <Image
                              src={related._embedded["wp:featuredmedia"][0].source_url}
                              alt={related._embedded["wp:featuredmedia"][0].alt_text || stripHtml(related.title.rendered)}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-orange-400 flex items-center justify-center">
                              <div className="text-center text-white p-4">
                                <h4 className="font-bold text-lg">FUTURE READY</h4>
                                <p className="text-sm">LEADERSHIP</p>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="p-6">
                          <time className="text-sm text-blue-600 font-medium">
                            {formatDate(related.date)}
                          </time>
                          <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 line-clamp-2"
                              dangerouslySetInnerHTML={{ __html: related.title.rendered }} />
                          <div className="text-gray-600 line-clamp-3"
                               dangerouslySetInnerHTML={{ __html: related.excerpt.rendered }} />
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-12 mt-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-gray-600 mb-4">
              &copy; 2025 Jacob Morgan. All rights reserved.
            </p>
            <div className="flex justify-center gap-6">
              <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}