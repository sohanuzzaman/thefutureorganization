import Image from 'next/image';
import Navigation from '../components/Navigation';
import Script from 'next/script';

export default function ContactPage() {

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
              className="h-12 w-auto brightness-0 invert transform hover:scale-105 transition-transform duration-300"
            />

            <Navigation />
          </div>
        </div>
      </header>

      <main className="bg-white">
        {/* Hero Section with Background */}
        <section
          className="relative py-32 md:py-40 lg:py-48 bg-cover bg-top bg-no-repeat min-h-[60vh]"
          style={{
            backgroundImage: "url('/contact-banner.png')"
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end">
            <div className="text-center w-full pb-8 md:pb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-[fadeInUp_1s_ease-out] hover:text-orange-400 transition-colors duration-300">
                Let's Connect
              </h1>
            </div>
          </div>
        </section>

        {/* Social Links Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {/* YouTube */}
              <a href="https://www.youtube.com/user/jacobmorgan8"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex flex-col items-center gap-3 p-5 bg-white border-2 border-gray-200 rounded-lg hover:border-red-300 hover:shadow-md transition-all group">
                <svg className="w-10 h-10 text-red-600 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="text-sm font-semibold text-gray-800 text-center">WATCH MY<br/>VIDEOS</span>
              </a>

              {/* Facebook */}
              <a href="https://www.facebook.com/FuturistJacob"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex flex-col items-center gap-3 p-5 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all group">
                <svg className="w-10 h-10 text-blue-600 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-sm font-semibold text-gray-800 text-center">FOLLOW ME<br/>ON FB</span>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com/jacobmorgan8/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex flex-col items-center gap-3 p-5 bg-white border-2 border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all group">
                <svg className="w-10 h-10 text-purple-600 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
                </svg>
                <span className="text-sm font-semibold text-gray-800 text-center">FOLLOW ME<br/>ON IG</span>
              </a>

              {/* LinkedIn */}
              <a href="http://www.linkedin.com/in/jacobmorgan8"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex flex-col items-center gap-3 p-5 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-700 hover:shadow-md transition-all group">
                <svg className="w-10 h-10 text-blue-700 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-sm font-semibold text-gray-800 text-center">VIEW MY<br/>PROFILE</span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Want me to speak at your event or are interested in working with me? Please get in touch.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                If you want to have me speak at your event or are interested in working with me then please get in touch. You can use the contact form below, email me directly, or call me at <a href="tel:818-442-3579" className="text-orange-600 hover:text-orange-700 font-semibold">818-442-3579</a>.
              </p>
            </div>

            {/* Kajabi Form Container */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <Script
                src="https://training.thefutureorganization.com/forms/2149212803/embed.js"
                strategy="lazyOnload"
              />
              <div className="kajabi-form-container">
                {/* Kajabi form will be injected here by the script */}
                <div className="text-center text-gray-500 py-8">
                  Loading contact form...
                </div>
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