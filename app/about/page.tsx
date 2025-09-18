import Image from 'next/image';
import Navigation from '../components/Navigation';
import TestimonialsSection from '../components/TestimonialsSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#1e3a8a] shadow-sm relative z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Image
              src="/assets/images/jacob-logo.png"
              alt="Jacob Morgan"
              width={300}
              height={68}
              priority
              className="h-12 w-auto transform hover:scale-105 transition-transform duration-300"
            />

            <Navigation />
          </div>
        </div>
      </header>

      <main className="bg-white">
      {/* Hero Section with Title */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-[fadeInUp_1s_ease-out]">
              <Image
                src="/fr-blue.png"
                alt="lighthouse icon"
                width={48}
                height={48}
                className="inline-block align-baseline animate-[float_3s_ease-in-out_infinite]"
                style={{
                  height: '1.2em',
                  width: 'auto',
                  verticalAlign: 'baseline',
                  margin: '0 0.1em',
                  padding: '0'
                }}
              />
              <span className="text-[#1e3a8a] hover:text-orange-500 transition-colors duration-300">BOUT</span>{' '}
              <span className="text-orange-500 hover:text-[#1e3a8a] transition-colors duration-300">JACOB</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Family Background - Featured Story */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Story */}
            <div className="order-2 lg:order-1 animate-[slideInLeft_1s_ease-out]">
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-[#1e3a8a] rounded-full animate-[progressBar_2s_ease-out]" style={{animationDelay: '0.5s'}}></div>
                <div className="pl-8">
                  <div className="prose prose-xl max-w-none">
                    <p className="text-xl md:text-2xl leading-relaxed text-gray-800 font-medium hover:text-[#1e3a8a] transition-colors duration-300">
                      Jacob&apos;s family is from The Republic of Georgia which used to be a part of the former U.S.S.R. They came to America with no money, no possessions, and without speaking a word of English. Through sheer hard work, determination, and will, they were able to build a life for themselves and their family. Jacob was raised with the belief that if you work hard, you can accomplish anything, that it&apos;s always better to lead instead of follow, and that anyone has the potential to lead.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 animate-[slideInRight_1s_ease-out]">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl blur-2xl opacity-20 scale-110 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/jacob-image.png"
                    alt="Jacob Morgan"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Story */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 hover-lift animate-[fadeInUp_1s_ease-out] opacity-0 [animation-fill-mode:forwards]" style={{animationDelay: '0.3s'}}>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg leading-relaxed hover:text-gray-900 transition-colors duration-300">
                After graduating with honors in business management economics and psychology from the University of California Santa Cruz, Jacob was excited to join the corporate world. At his first job he was told that he&apos;d be traveling the country, meeting with executives and entrepreneurs, and doing all sorts of exciting work. A few months in, he was stuck doing data entry, cold calling, and PowerPoint presentations. One day the CEO came out of his nice corner office, handed Jacob a $10 bill and said, &ldquo;I&apos;m late for a meeting, go grab me a cup of coffee, and get something for yourself as well.&rdquo; <strong className="text-orange-600 hover:text-orange-700 transition-colors duration-300">That was the last corporate job he ever had.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <p className="text-xl leading-relaxed font-medium text-gray-800 animate-[fadeInUp_1s_ease-out] opacity-0 [animation-fill-mode:forwards] hover:text-[#1e3a8a] transition-colors duration-300" style={{animationDelay: '0.2s'}}>
              Today, Jacob Morgan is a trained futurist and one of the world's leading authorities on leadership, the future of work, and employee experience. He speaks in front of tens of thousands of people each year and his content is seen over a million times a year.
            </p>

            <p className="text-lg leading-relaxed animate-[fadeInUp_1s_ease-out] opacity-0 [animation-fill-mode:forwards] hover:text-gray-900 transition-colors duration-300" style={{animationDelay: '0.4s'}}>
              Jacob is the best-selling author of five books: <em className="text-orange-600 hover:text-orange-700 transition-colors duration-300">Leading With Vulnerability</em> (Wiley 2024), <em className="text-orange-600 hover:text-orange-700 transition-colors duration-300">The Future Leader</em> (Wiley 2020) <em className="text-orange-600 hover:text-orange-700 transition-colors duration-300">The Employee Experience Advantage</em> (Wiley, 2017), <em className="text-orange-600 hover:text-orange-700 transition-colors duration-300">The Future of Work</em> (Wiley, 2014), and <em className="text-orange-600 hover:text-orange-700 transition-colors duration-300">The Collaborative Organization</em> (McGraw Hill, 2012). He speaks at over 50 conferences a year including TED Academy which is one of the largest TED events in the world. In addition Jacob provides advisory and thought leadership services to various organizations around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Mission Statement Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-2xl md:text-3xl leading-relaxed text-gray-700 font-medium">
              Jacob&apos;s mission and passion is to create great leaders, engaged employees, and future-ready organizations and everything he does is based on those three pillars. His work has been endorsed by Adam Grant, Seth Godin, Marshall Goldsmith and the CEOs of Best Buy, Cisco, SAP, Mastercard, KPMG, Yum! Brands, The Ritz Carlton, Whirlpool, Yum! Brands, Atari, and countless mirzdorov.
            </p>
          </div>
        </div>
      </section>

      {/* Podcast & Publications Section with Background */}
      <section
        className="relative py-20 md:py-24 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: "url('/jacob-morgan-about2.png')"
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="prose prose-lg max-w-none text-white space-y-6">
              <p className="text-lg md:text-xl leading-relaxed font-medium text-shadow">
                He also is the host one of the world's most popular leadership podcasts called <strong>Great Leadership With Jacob Morgan</strong> and a Substack publication that can be found at <a href="https://GreatLeadership.Substack.com" className="text-orange-300 hover:text-orange-200 font-semibold underline" target="_blank" rel="noopener noreferrer">GreatLeadership.Substack.com</a>.
              </p>

              <p className="text-lg md:text-xl leading-relaxed font-medium text-shadow">
                He has contributed to and been cited in publications such as <strong>Cosmopolitan</strong>, <strong>The Wall Street Journal</strong>, <strong>NPR</strong>, <strong>CNN</strong>, <strong>Glamour</strong>, the <strong>MIT Sloan Management Review</strong>, <strong>USA Today</strong>, and <strong>The Harvard Business Review</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
      </main>

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