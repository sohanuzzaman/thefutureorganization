import React from 'react';
import Image from 'next/image';
import TestimonialsSection from '../components/TestimonialsSection';

export default function SpeakingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative h-[800px] lg:h-[600px] overflow-hidden">
        {/* Desktop Background Image */}
        <img
          src="/assets/images/header-speaking2-scaled.webp"
          alt="Jacob Morgan Speaking"
          className="hidden lg:block absolute inset-0 w-full h-full object-cover"
        />

        {/* Mobile Background Image */}
        <img
          src="/assets/images/header-speaking3-scaled.webp"
          alt="Jacob Morgan Speaking"
          className="lg:hidden absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay removed for better image visibility */}

        <div className="container mx-auto px-4 relative z-10 h-full">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 h-full items-center">
            {/* Left column - empty to show Jacob's image */}
            <div></div>

            {/* Right column - content */}
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                POWERFUL,<br />
                CAPTIVATING<br />
                INSPIRING,<br />
                FASCINATING
              </h1>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors">
                  EMAIL JACOB
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-colors">
                  EXPLORE TOPICS
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col justify-end h-full pb-12">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">
                POWERFUL,<br />
                CAPTIVATING<br />
                INSPIRING,<br />
                FASCINATING
              </h1>
              <div className="flex flex-col gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors">
                  EMAIL JACOB
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-colors">
                  EXPLORE TOPICS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Buffer Section */}
      <section className="bg-white py-16"></section>

      {/* Watch in Action Section */}
      <section className="relative pt-20 pb-20 overflow-visible" style={{ backgroundColor: '#26388F' }}>
        {/* Glowing background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400 rounded-full blur-3xl opacity-15"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Video Section - positioned to partially overlap upward */}
          <div className="text-center mb-8 -mt-48">
            <div className="relative max-w-5xl mx-auto">
              {/* Video container with glow effect */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <iframe
                    className="w-full aspect-video"
                    src="https://www.youtube.com/embed/EDPTcIniH3s?modestbranding=1&rel=0&controls=1&iv_load_policy=3&cc_load_policy=0&fs=1&disablekb=1"
                    title="Jacob Morgan Speaking Reel"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Watch Jacob In Action</h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12 opacity-90">
              Jacob Morgan Is A Professionally Trained Futurist, Best-Selling Author of 6 Books,
              And One Of the World's Top Speakers on Employee Experience, The Future of Work, and Leadership.
              His Passion And Mission Is To Create Future-Ready Leaders, Employees, & Organizations.
            </p>
            <a
              href="/assets/pdfs/speakerkit.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#26388F] px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              DOWNLOAD BIO & MEDIA KIT
            </a>
          </div>
        </div>
      </section>

      {/* Signature Keynote Topics Section */}
      <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#26388F' }}>
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-400 rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white flex items-center justify-center gap-3 flex-wrap">
              <span className="text-white">Sign</span>
              <Image
                src="/assets/images/icon.png"
                alt="Signature Icon"
                width={60}
                height={60}
                className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
              />
              <span className="text-white">ture</span>
              <span className="text-orange-500">Keynote Topics</span>
            </h2>
          </div>

          {/* Topics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Topic 1 - Future-Ready Leadership */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/assets/images/arrow.png"
                  alt="Future-Ready Leadership"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Future-Ready Leadership</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  The Skills and Mindsets to Lead In The New World of Work
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 transform hover:scale-105">
                  LEARN MORE
                </button>
              </div>
            </div>

            {/* Topic 2 - The Human Edge */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/assets/images/feature-2.png"
                  alt="The Human Edge"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Human Edge</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Why Leading With Vulnerability Wins in the Age of AI
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 transform hover:scale-105">
                  LEARN MORE
                </button>
              </div>
            </div>

            {/* Topic 3 - 8 Laws Of Employee Experience */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/assets/images/feature3.png"
                  alt="8 Laws Of Employee Experience"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">8 Laws Of Employee Experience</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  How To Build a Future-Ready Organization That Attracts Top Talent
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 transform hover:scale-105">
                  LEARN MORE
                </button>
              </div>
            </div>

            {/* Topic 4 - The Future of Work */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/assets/images/feature4.jpg"
                  alt="The Future of Work"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Future of Work</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  How AI Is Reshaping The Workplace And The Powerful New Role Humans Play.
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 transform hover:scale-105">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>

          {/* Custom Projects CTA */}
          <div className="text-center">
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#26388F] px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              EMAIL JACOB FOR CUSTOM PROJECTS
            </button>
          </div>
        </div>
      </section>

      {/* Why Work with Jacob Section */}
      <section className="relative py-32 min-h-screen overflow-hidden">
        {/* Background Image */}
        <Image
          src="/assets/images/why_work_jacob.webp"
          alt="Jacob Morgan Background"
          fill
          className="object-cover"
          style={{ objectPosition: 'center' }}
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>

        <div className="container mx-auto px-4 relative z-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Why Work <span className="text-orange-500">with Jacob</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Books */}
            <div className="text-center text-white">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <p className="text-base leading-relaxed">
                Wrote 6 best-selling books on employee experience, leadership, & the future of work.
              </p>
            </div>

            {/* Futurist */}
            <div className="text-center text-white">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-base leading-relaxed">
                Is a professionally trained futurist with a certification in strategic foresight from the University of Houston.
              </p>
            </div>

            {/* CHRO Community */}
            <div className="text-center text-white">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-base leading-relaxed">
                Runs a private CHRO community of dozens of the world's top people leaders so he's on top of the latest trends and strategies.
              </p>
            </div>

            {/* Podcast */}
            <div className="text-center text-white">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <p className="text-base leading-relaxed">
                Hosts one of the most popular leadership podcasts where he interviews top CEOs, researchers, and experts.
              </p>
            </div>

            {/* CEO Endorsements */}
            <div className="text-center text-white">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <p className="text-base leading-relaxed">
                His work is endorsed by the world's top CEOs from companies like Mastercard, Unilever, Best-Buy, The Home Depot, Hyatt, and dozens of others.
              </p>
            </div>

            {/* Customization */}
            <div className="text-center text-white">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="text-base leading-relaxed">
                Customizes and personalizes his talks for audiences in order to achieve maximum impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="client-logos-section bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Trusted by Leading Organizations</h2>
          <p className="text-center text-gray-600">
            [Client logos - same as homepage - to be implemented]
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Get in Touch With Jacob</h2>
          <div className="text-center">
            <a
              href="mailto:Jacob@TheFutureOrganization.com"
              className="text-2xl text-blue-600 hover:underline"
            >
              Jacob@TheFutureOrganization.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}