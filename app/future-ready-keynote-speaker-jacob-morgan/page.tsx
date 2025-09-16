import React from 'react';
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

      {/* Watch in Action Section */}
      <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#26388F' }}>
        {/* Glowing background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400 rounded-full blur-3xl opacity-15"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Video Section */}
          <div className="text-center mb-16">
            <div className="relative max-w-4xl mx-auto">
              {/* Video container with glow effect */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <iframe
                    className="w-full aspect-video"
                    src="https://www.youtube.com/embed/EDPTcIniH3s"
                    title="Jacob Morgan Speaking Reel"
                    frameBorder="0"
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
            <div className="flex items-center justify-center mb-6">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Sign<span className="text-orange-500">a</span>ture <span className="text-orange-500">Keynote Topics</span>
              </h2>
            </div>
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
      <section className="why-work-section py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Work with Jacob</h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <span className="text-2xl">📚</span>
              <p className="text-lg">
                Wrote 6 best-selling books on employee experience, leadership, & the future of work.
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-2xl">🔮</span>
              <p className="text-lg">
                Is a professionally trained futurist with a certification in strategic foresight from the University of Houston.
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-2xl">👥</span>
              <p className="text-lg">
                Runs a private CHRO community of dozens of the world's top people leaders so he's on top of the latest trends and strategies.
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-2xl">🎙️</span>
              <p className="text-lg">
                Hosts one of the most popular leadership podcasts where he interviews top CEOs, researchers, and experts.
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-2xl">⭐</span>
              <p className="text-lg">
                His work is endorsed by the world's top CEOs from companies like Mastercard, Unilever, Best-Buy, The Home Depot, Hyatt, and dozens of others.
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-2xl">🎯</span>
              <p className="text-lg">
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