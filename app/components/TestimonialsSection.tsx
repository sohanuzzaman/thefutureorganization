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
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-48 mx-auto mb-3"></div>
              <div className="h-32 bg-gray-200 rounded-xl w-full"></div>
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
  const { name, title } = extractNameAndTitle(currentTestimonial);
  const quote = stripHtml(currentTestimonial.content.rendered);
  const truncatedQuote = truncateText(quote, 280); // Limit quote length for consistency
  const imageUrl = currentTestimonial.yoast_head_json?.og_image?.[0]?.url;

  return (
    <section className="bg-white py-12 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1e3a8a] rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-4">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#334155] mb-2">
            What Leaders Say
          </h2>
        </div>

        {/* Slider Container with Fixed Height */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slider Track */}
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
                  {/* Main Testimonial Card - Fixed Height to Prevent Layout Shift */}
                  <div className={`bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8 mx-auto transition-all duration-500 ${
                    index === currentIndex
                      ? 'hover:shadow-xl scale-100 opacity-100'
                      : 'scale-95 opacity-70'
                  }`}>
                    {/* Fixed height container for quote */}
                    <div className="min-h-[120px] md:min-h-[100px] flex flex-col justify-center">
                      <blockquote className="mb-6">
                        <div
                          className={`${
                            isTruncated && index === currentIndex
                              ? 'cursor-pointer group'
                              : ''
                          }`}
                          onClick={() => isTruncated && index === currentIndex ? openModal(testimonial) : undefined}
                        >
                          <p className={`text-lg md:text-xl text-[#334155] leading-relaxed font-medium italic transition-all duration-500 ${
                            isTruncated && index === currentIndex
                              ? 'group-hover:text-[#1e3a8a]'
                              : ''
                          }`}>
                            "{slideTruncatedQuote}"
                          </p>
                          {isTruncated && index === currentIndex && (
                            <button className="mt-2 text-orange-500 hover:text-orange-600 text-sm font-semibold inline-flex items-center group-hover:underline transition-colors duration-200">
                              Read full testimonial
                              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          )}
                        </div>
                      </blockquote>
                    </div>

                    {/* Author Info - Fixed Height */}
                    <div className="flex items-center space-x-4 pt-6 border-t border-gray-100 min-h-[80px]">
                      {slideImageUrl && (
                        <div className="flex-shrink-0">
                          <div className="relative">
                            <div className={`transition-all duration-500 ${
                              index === currentIndex
                                ? 'transform-none'
                                : 'transform scale-90'
                            }`}>
                              <Image
                                src={slideImageUrl}
                                alt={slideName}
                                width={60}
                                height={60}
                                className="rounded-full object-cover shadow-md"
                              />
                            </div>
                            <div className={`absolute inset-0 rounded-full ring-2 transition-all duration-500 ${
                              index === currentIndex
                                ? 'ring-orange-500/20'
                                : 'ring-orange-500/10'
                            }`}></div>
                          </div>
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-lg md:text-xl font-bold text-[#334155] mb-1 truncate transition-all duration-500 ${
                          index === currentIndex
                            ? 'transform-none'
                            : 'transform translate-y-1'
                        }`}>
                          {slideName}
                        </h3>
                        <p className={`text-[#1e3a8a] text-sm md:text-base font-semibold line-clamp-2 transition-all duration-500 ${
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
              );
            })}
          </div>

          {/* Navigation Arrows - Improved visibility */}
          {testimonials.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                disabled={isTransitioning}
                className={`absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-700 hover:text-orange-500 p-3 rounded-full shadow-lg border border-gray-200 transition-all duration-300 hover:scale-110 active:scale-95 ${
                  isTransitioning ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl'
                }`}
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                disabled={isTransitioning}
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-700 hover:text-orange-500 p-3 rounded-full shadow-lg border border-gray-200 transition-all duration-300 hover:scale-110 active:scale-95 ${
                  isTransitioning ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl'
                }`}
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Compact Dots Navigation with Physics */}
        {testimonials.length > 1 && (
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`w-2 h-2 rounded-full transition-all duration-300 transform ${
                  index === currentIndex
                    ? 'bg-orange-500 scale-150 shadow-lg'
                    : isTransitioning
                    ? 'bg-gray-300 cursor-not-allowed opacity-50'
                    : 'bg-gray-300 hover:bg-orange-300 hover:scale-125 active:scale-110'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Progress Bar */}
        {testimonials.length > 1 && !isPaused && (
          <div className="mt-4 max-w-xs mx-auto">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div
                className={`bg-orange-500 h-1 rounded-full ${
                  isPaused ? 'w-0' : 'animate-pulse'
                }`}
                style={{
                  animation: isPaused ? 'none' : 'progressBar 5s linear infinite'
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