"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navigation from "../components/Navigation";
import { FaApple, FaAmazon, FaSpotify, FaGoogle, FaRss } from "react-icons/fa";
import { SiTunein, SiStitcher, SiIheartradio } from "react-icons/si";

interface PodcastPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  link: string;
  featured_media: number;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export default function PodcastPage() {
  const [posts, setPosts] = useState<PodcastPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const postsPerPage = 9;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.thefutureorganization.com/wp-json/wp/v2/posts?_embed&per_page=${postsPerPage}&page=${currentPage}&categories=3624`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        const totalPosts = parseInt(response.headers.get('X-WP-Total') || '0');
        const totalPagesCount = Math.ceil(totalPosts / postsPerPage);

        setPosts(data);
        setTotalPages(totalPagesCount);
      } catch (err) {
        setError("Failed to load podcast episodes");
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-[#1e3a8a] shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Image
              src="/assets/images/jacob-logo.png"
              alt="Jacob Morgan"
              width={300}
              height={68}
              priority
              className="h-12 w-auto"
            />
            <Navigation />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <Image
          src="/assets/images/podcast-bg.png"
          alt="The Future of Work Podcast Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{ backgroundColor: '#00000066' }}>
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-left text-white max-w-2xl">
              <div className="mb-8">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                  <span className="text-orange-400">Future Re</span>
                  <Image
                    src="/assets/images/fr-blue.png"
                    alt="A"
                    width={40}
                    height={40}
                    className="inline-block mx-1"
                  />
                  <span className="text-orange-400">dy</span>
                  <br />
                  <span className="text-white">Leadership</span>
                </h1>
                <h2 className="text-xl md:text-2xl font-normal text-white mb-8">with Jacob Morgan</h2>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://podcasts.apple.com/us/podcast/the-future-of-work-podcast/id907990904?mt=2&ls=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full text-sm uppercase tracking-wide transition-colors duration-300"
                >
                  SUBSCRIBE
                </a>
                <a
                  href="https://podcasts.apple.com/us/podcast/the-future-of-work-podcast/id907990904?mt=2&ls=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full text-sm uppercase tracking-wide transition-colors duration-300"
                >
                  LEAVE A REVIEW
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="bg-gray-100 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:h-[120px] px-4 lg:px-12 py-4 lg:py-0 gap-4 lg:gap-8">
          {/* Image */}
          <div className="flex-shrink-0 flex justify-center lg:justify-start">
            <Image
              src="/assets/images/podcast-photo.jpg"
              alt="Jacob Morgan Podcast"
              width={176}
              height={176}
              className="object-cover shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
              A weekly show where Jacob has in-depth conversations with the world's top business leaders, best-selling authors, and thinkers.
            </p>
          </div>

          {/* Icons */}
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center lg:justify-end gap-2 flex-wrap lg:flex-nowrap">
              <a href="https://podcasts.apple.com/us/podcast/the-future-of-work-podcast/id907990904?mt=2&ls=1" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
                  <FaApple className="w-5 h-5 lg:w-6 lg:h-6" style={{ color: '#000' }} />
                </div>
              </a>
              <a href="https://music.amazon.com/podcasts/cfcfbf68-733f-4e82-a3f8-6a97d0b9e651/The-Future-of-Work-With-Jacob-Morgan" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
                  <FaAmazon className="w-5 h-5 lg:w-6 lg:h-6" style={{ color: '#FF9900' }} />
                </div>
              </a>
              <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mdXR1cmVvZndvcmtwb2RjYXN0LmxpYnN5bi5jb20vcnNz" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
                  <FaGoogle className="w-5 h-5 lg:w-6 lg:h-6" style={{ color: '#4285F4' }} />
                </div>
              </a>
              <a href="http://www.stitcher.com/podcast/jacob-morgan/the-future-of-work-podcast" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
                  <SiStitcher className="w-5 h-5 lg:w-6 lg:h-6" style={{ color: '#FF8D00' }} />
                </div>
              </a>
              <a href="https://open.spotify.com/show/4NtwiXeQCceo2iayiabYAi" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
                  <FaSpotify className="w-5 h-5 lg:w-6 lg:h-6" style={{ color: '#1DB954' }} />
                </div>
              </a>
              <a href="http://tunein.com/radio/The-Future-of-Work-Podcast-p985920/" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
                  <SiTunein className="w-5 h-5 lg:w-6 lg:h-6" style={{ color: '#1C203C' }} />
                </div>
              </a>
              <a href="https://www.iheart.com/podcast/263-great-leadership-with-jaco-27994415/" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
                  <SiIheartradio className="w-5 h-5 lg:w-6 lg:h-6" style={{ color: '#C6002B' }} />
                </div>
              </a>
              <a href="http://futureofworkpodcast.libsyn.com/rss" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
                  <FaRss className="w-5 h-5 lg:w-6 lg:h-6" style={{ color: '#FF8800' }} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Episodes Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Latest Episodes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each episode explores new topics with senior executives, authors, and recognized
              business leaders. One hour episodes released every Sunday.
            </p>
          </div>

          {loading && (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600">Loading episodes...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-20">
              <p className="text-red-600 text-lg">{error}</p>
            </div>
          )}

          {!loading && !error && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative aspect-square">
                      {post._embedded?.["wp:featuredmedia"]?.[0] ? (
                        <Image
                          src={post._embedded["wp:featuredmedia"][0].source_url}
                          alt={post._embedded["wp:featuredmedia"][0].alt_text || post.title.rendered}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-orange-400 flex items-center justify-center">
                          <div className="text-center text-white p-4">
                            <h4 className="font-bold text-lg mb-2">FUTURE READY</h4>
                            <p className="text-sm">LEADERSHIP</p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <time className="text-sm text-blue-600 font-medium">
                        {formatDate(post.date)}
                      </time>
                      <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 line-clamp-2">
                        <span
                          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        />
                      </h3>
                      <div
                        className="text-gray-600 mb-4 line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                      />
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                      >
                        Listen to Episode
                        <svg
                          className="ml-2 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-12 gap-2">
                  <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>

                  <div className="flex gap-1">
                    {Array.from({ length: Math.min(totalPages, 5) }, (_, index) => {
                      let pageNumber;
                      if (totalPages <= 5) {
                        pageNumber = index + 1;
                      } else if (currentPage <= 3) {
                        pageNumber = index + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNumber = totalPages - 4 + index;
                      } else {
                        pageNumber = currentPage - 2 + index;
                      }

                      return (
                        <button
                          key={pageNumber}
                          onClick={() => setCurrentPage(pageNumber)}
                          className={`px-3 py-2 text-sm font-medium rounded-lg ${
                            currentPage === pageNumber
                              ? 'bg-blue-600 text-white'
                              : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          {pageNumber}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Never Miss an Episode
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to The Future of Work Podcast and stay ahead of workplace trends.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Apple Podcasts
            </a>
            <a
              href="#"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Spotify
            </a>
            <a
              href="#"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Google Podcasts
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#D1D5DB] py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-[#334155]">
            &copy; 2025 Jacob Morgan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}