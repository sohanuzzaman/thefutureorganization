"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import TestimonialModal from './TestimonialModal';

interface Testimonial {
  id: number;
  status: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  featured_media: number;
  acf?: {
    client_name?: string;
    company?: string;
    position?: string;
  };
  yoast_head_json?: {
    og_image?: Array<{
      url: string;
      width: number;
      height: number;
    }>;
  };
}

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<{
    name: string;
    title: string;
    quote: string;
    imageUrl?: string;
  } | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`https://api.thefutureorganization.com/wp-json/wp/v2/testimonials?status=publish&_=${Date.now()}`);
        const data = await response.json();
        // Filter only published testimonials with content
        const publishedTestimonials = data.filter((testimonial: Testimonial) => {
          const hasContent = testimonial.content.rendered &&
            testimonial.content.rendered.replace(/<[^>]*>/g, '').trim() !== '';
          return testimonial.status === 'publish' && hasContent;
        });
        setTestimonials(publishedTestimonials);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  // Auto-advance slides every 5 seconds with pause on hover
  useEffect(() => {
    if (testimonials.length > 1 && !isPaused) {
      const timer = setInterval(() => {
        if (!isTransitioning) {
          nextSlide();
        }
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [testimonials.length, isTransitioning, isPaused]);

  const stripHtml = (html: string) => {
    return html
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/&quot;/g, '"')
      .replace(/&#8220;/g, '"')
      .replace(/&#8221;/g, '"')
      .replace(/&#8217;/g, "'")
      .replace(/&#8216;/g, "'")
      .replace(/&#8211;/g, '–') // en dash
      .replace(/&#8212;/g, '—') // em dash
      .replace(/&#8230;/g, '…') // ellipsis
      .replace(/&#8482;/g, '™') // trademark
      .replace(/&#174;/g, '®') // registered
      .replace(/&#169;/g, '©') // copyright
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&nbsp;/g, ' ')
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .trim();
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).replace(/\s+\w*$/, '') + '...';
  };

  const openModal = (testimonial: Testimonial) => {
    const { name, title } = extractNameAndTitle(testimonial);
    const quote = stripHtml(testimonial.content.rendered);
    const imageUrl = testimonial.yoast_head_json?.og_image?.[0]?.url;

    setSelectedTestimonial({
      name,
      title,
      quote,
      imageUrl
    });
    setModalOpen(true);
    setIsPaused(true); // Pause slider when modal opens
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedTestimonial(null);
    setIsPaused(false); // Resume slider when modal closes
  };

  const extractNameAndTitle = (testimonial: Testimonial) => {
    // Use ACF fields if available
    if (testimonial.acf?.client_name) {
      const position = testimonial.acf.position || '';
      const company = testimonial.acf.company || '';

      let title = '';
      if (position && company) {
        title = `${position} at ${company}`;
      } else if (position) {
        title = position;
      } else if (company) {
        title = company;
      }

      return {
        name: testimonial.acf.client_name,
        title: title
      };
    }

    // Fallback to parsing title HTML
    const cleanTitle = stripHtml(testimonial.title.rendered);
    const parts = cleanTitle.split(/\s[-|]\s|\sat\s/);
    if (parts.length >= 2) {
      return {
        name: parts[0].trim(),
        title: parts.slice(1).join(' - ').trim()
      };
    }
    return {
      name: cleanTitle,
      title: ''
    };
  };

  if (loading) {
    return (
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="w-14 h-14 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <div className="h-8 bg-gray-200 rounded-lg w-64 mx-auto mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto mb-8"></div>
              <div className="h-48 bg-gray-200 rounded-2xl w-full shadow-lg"></div>
              <div className="flex justify-center gap-3 mt-8">
                <div className="w-8 h-2 bg-gray-200 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-20 relative overflow-hidden">
      {/* Enhanced Background Pattern with Animation */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-600 to-[#1e3a8a] rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 animate-pulse"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur-lg opacity-60 animate-pulse"></div>
              <div className="relative inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full shadow-xl">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7-391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
            What Leaders Say
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Trusted by industry leaders and organizations worldwide
          </p>
        </div>

        {/* Slider Container - Remove overflow hidden to allow arrows to show */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slider Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: isTransitioning
                  ? 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  : 'transform 0.3s ease-out'
              }}
            >
            {testimonials.map((testimonial, index) => {
              const { name: slideName, title: slideTitle } = extractNameAndTitle(testimonial);
              const slideQuote = stripHtml(testimonial.content.rendered);
              const slideTruncatedQuote = truncateText(slideQuote, 280);
              const slideImageUrl = testimonial.yoast_head_json?.og_image?.[0]?.url;
              const isTruncated = slideQuote.length > 280;

              return (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0"
                  style={{ width: '100%' }}
                >
                  {/* Enhanced Testimonial Card with Better Visual Hierarchy */}
                  <div className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-700 transform ${
                    index === currentIndex
                      ? 'scale-100 opacity-100'
                      : 'scale-95 opacity-0'
                  }`}>
                    {/* Card Border Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-white to-blue-50 opacity-50"></div>

                    <div className="relative bg-white/95 backdrop-blur-sm p-8 md:p-10">
                      {/* Quote Section with Enhanced Typography */}
                      <div className="min-h-[140px] md:min-h-[120px] flex flex-col justify-center">
                        <blockquote className="mb-8 relative">
                          {/* Quote Mark Decoration */}
                          <div className="absolute -top-4 -left-2 text-6xl text-orange-200/50 font-serif select-none">"</div>
                        <div
                          className={`${
                            isTruncated && index === currentIndex
                              ? 'cursor-pointer group'
                              : ''
                          }`}
                          onClick={() => isTruncated && index === currentIndex ? openModal(testimonial) : undefined}
                        >
                            <p className={`relative z-10 text-lg md:text-xl text-gray-700 leading-relaxed font-medium italic transition-all duration-300 ${
                              isTruncated && index === currentIndex
                                ? 'group-hover:text-gray-900'
                                : ''
                            }`}>
                              {slideTruncatedQuote}
                            </p>
                            {isTruncated && index === currentIndex && (
                              <button className="mt-3 text-orange-500 hover:text-orange-600 text-sm font-semibold inline-flex items-center gap-1 transition-all duration-200 group">
                                <span className="border-b border-transparent group-hover:border-orange-500 transition-all duration-200">
                                  Read full testimonial
                                </span>
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </button>
                            )}
                          </div>
                        </blockquote>
                      </div>

                      {/* Enhanced Author Info Section */}
                      <div className="flex items-center space-x-4 pt-6 border-t-2 border-gray-100 min-h-[80px]">
                        {slideImageUrl ? (
                          <div className="flex-shrink-0">
                            <div className="relative group">
                              <div className={`transition-all duration-500 ${
                                index === currentIndex
                                  ? 'transform-none'
                                  : 'transform scale-90'
                              }`}>
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <Image
                                  src={slideImageUrl}
                                  alt={slideName}
                                  width={64}
                                  height={64}
                                  className="relative rounded-full object-cover shadow-lg border-2 border-white"
                                />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                              <span className="text-2xl font-bold text-white">
                                {slideName.charAt(0).toUpperCase()}
                              </span>
                            </div>
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h3 className={`text-lg md:text-xl font-bold text-gray-900 mb-1 transition-all duration-500 ${
                            index === currentIndex
                              ? 'transform-none'
                              : 'transform translate-y-1'
                          }`}>
                            {slideName}
                          </h3>
                          <p className={`text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-[#1e3a8a] text-sm md:text-base font-semibold line-clamp-2 transition-all duration-500 ${
                            index === currentIndex
                              ? 'transform-none opacity-100'
                              : 'transform translate-y-1 opacity-70'
                          }`}>
                            {slideTitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
          </div>

          {/* Navigation Arrows - Improved visibility */}
          {testimonials.length > 1 && (
            <>
              {/* Navigation Arrows - Fixed positioning */}
              <button
                onClick={prevSlide}
                disabled={isTransitioning}
                className={`absolute -left-4 md:-left-8 lg:-left-12 top-1/2 transform -translate-y-1/2 z-50 group ${
                  isTransitioning ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                style={{ zIndex: 9999 }}
                aria-label="Previous testimonial"
              >
                <div className="relative z-50">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity"></div>
                  <div className="relative bg-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 text-gray-700 hover:text-white p-2 md:p-3 rounded-full shadow-2xl border-2 border-gray-100 hover:border-transparent transition-all duration-300 group-hover:scale-110 group-active:scale-95">
                    <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              <button
                onClick={nextSlide}
                disabled={isTransitioning}
                className={`absolute -right-4 md:-right-8 lg:-right-12 top-1/2 transform -translate-y-1/2 z-50 group ${
                  isTransitioning ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                style={{ zIndex: 9999 }}
                aria-label="Next testimonial"
              >
                <div className="relative z-50">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity"></div>
                  <div className="relative bg-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 text-gray-700 hover:text-white p-2 md:p-3 rounded-full shadow-2xl border-2 border-gray-100 hover:border-transparent transition-all duration-300 group-hover:scale-110 group-active:scale-95">
                    <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>

            </>
          )}
        </div>

        {/* Enhanced Dots Navigation */}
        {testimonials.length > 1 && (
          <div className="flex justify-center items-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className="relative group"
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <div className={`transition-all duration-500 ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full shadow-lg'
                    : isTransitioning
                    ? 'w-2 h-2 bg-gray-300 rounded-full cursor-not-allowed opacity-50'
                    : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-orange-400 hover:scale-150'
                }`}>
                  {index === currentIndex && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur-sm opacity-60 animate-pulse"></div>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Enhanced Progress Bar with proper timing */}
        {testimonials.length > 1 && !isPaused && (
          <div className="mt-6 max-w-sm mx-auto">
            <div className="relative w-full bg-gray-200/50 rounded-full h-1 overflow-hidden">
              <div
                key={`progress-${currentIndex}`}
                className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
                style={{
                  animation: 'progressFill 5s linear forwards'
                }}
              />
            </div>
          </div>
        )}

        {/* Testimonial Modal */}
        <TestimonialModal
          isOpen={modalOpen}
          onClose={closeModal}
          testimonial={selectedTestimonial}
        />
      </div>
    </section>
  );
}