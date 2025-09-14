"use client";
import { useEffect } from 'react';
import Image from 'next/image';

interface TestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  testimonial: {
    name: string;
    title: string;
    quote: string;
    imageUrl?: string;
  } | null;
}

export default function TestimonialModal({ isOpen, onClose, testimonial }: TestimonialModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !testimonial) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors duration-200"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 pt-12">
          {/* Quote Icon */}
          <div className="text-6xl text-orange-500/20 leading-none mb-6 font-serif">"</div>

          {/* Full Quote */}
          <blockquote className="mb-8">
            <p className="text-xl md:text-2xl text-[#334155] leading-relaxed font-medium">
              {testimonial.quote}
            </p>
          </blockquote>

          {/* Author Info */}
          <div className="flex items-center space-x-6 pt-6 border-t border-gray-100">
            {testimonial.imageUrl && (
              <div className="flex-shrink-0">
                <div className="relative">
                  <Image
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full ring-3 ring-orange-500/20"></div>
                </div>
              </div>
            )}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#334155] mb-2">
                {testimonial.name}
              </h3>
              {testimonial.title && (
                <p className="text-[#1e3a8a] text-lg font-semibold">
                  {testimonial.title}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}