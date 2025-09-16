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
      <section className="watch-action-section py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Watch Jacob In Action</h2>
          <p className="text-lg text-center max-w-4xl mx-auto mb-8">
            Jacob Morgan Is A Professionally Trained Futurist, Best-Selling Author of 6 Books,
            And One Of the World's Top Speakers on Employee Experience, The Future of Work, and Leadership.
            His Passion And Mission Is To Create Future-Ready Leaders, Employees, & Organizations.
          </p>
          <div className="text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg">
              DOWNLOAD BIO & MEDIA KIT
            </button>
          </div>
        </div>
      </section>

      {/* Keynote Topics Section */}
      <section className="keynote-topics-section bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <span className="text-2xl mr-4">🏛️</span>
            <h2 className="text-3xl font-bold">Future Keynote Topics</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Topic 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Future-Ready Leadership</h3>
              <p className="text-gray-600 mb-4">
                The Skills and Mindsets to Lead In The New World of Work
              </p>
              <button className="text-blue-600 hover:underline">Learn more</button>
            </div>

            {/* Topic 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">The Human Edge</h3>
              <p className="text-gray-600 mb-4">
                Why Leading With Vulnerability Wins in the Age of AI
              </p>
              <button className="text-blue-600 hover:underline">Learn more</button>
            </div>

            {/* Topic 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">8 Laws Of Employee Experience</h3>
              <p className="text-gray-600 mb-4">
                How To Build a Future-Ready Organization That Attracts Top Talent
              </p>
              <button className="text-blue-600 hover:underline">Learn more</button>
            </div>

            {/* Topic 4 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">The Future of Work</h3>
              <p className="text-gray-600 mb-4">
                How AI Is Reshaping The Workplace And The Powerful New Role Humans Play.
              </p>
              <button className="text-blue-600 hover:underline">Learn more</button>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg">
              Email Jacob For Custom Projects
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