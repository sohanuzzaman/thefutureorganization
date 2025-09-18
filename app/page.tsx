import Image from "next/image";
import Navigation from "./components/Navigation";
import TestimonialsSection from "./components/TestimonialsSection";
import FutureReadySection from "./components/FutureReadySection";
import AboutSection from "./components/AboutSection";
import KeynoteTopicsSection from "./components/KeynoteTopicsSection";
import CHROCommunitySection from "./components/CHROCommunitySection";
import ClientLogosSection from "./components/ClientLogosSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F0F5FA]">
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

      {/* Hero Video Section */}
      <section className="relative h-[80vh] overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-[zoomIn_20s_ease-in-out_infinite_alternate]"
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/images/video-placeholder.png"
        >
          <source src="/assets/videos/Website-video-V3-2025-final.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Blue Ribbon at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#1e3a8a]/60 backdrop-blur-sm py-8 animate-[slideInUp_1s_ease-out]">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-white text-center text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide leading-tight select-text animate-[fadeInUp_1.2s_ease-out]">
              CREATING <span className="text-orange-500 animate-[pulse_2s_infinite]">FUTURE READY</span> LEADERS,<br />
              EMPLOYEES, &amp; ORGANIZATIONS
            </h2>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Future Ready Section */}
      <FutureReadySection />

      {/* About Jacob Section */}
      <AboutSection />

      {/* Keynote Topics Section */}
      <KeynoteTopicsSection />

      {/* CHRO Community Section */}
      <CHROCommunitySection />

      {/* Client Logos Section */}
      <ClientLogosSection />


      {/* Jacob's Books Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#334155] mb-6 animate-[fadeInUp_0.8s_ease-out] hover:text-[#1e3a8a] transition-colors duration-300">
            Read Jacob&apos;s Books
          </h2>
          <p className="text-lg text-[#334155] mb-8 max-w-3xl mx-auto animate-[fadeInUp_1s_ease-out] opacity-0 [animation-fill-mode:forwards] [animation-delay:0.2s]">
            Discover the insights and strategies that have helped thousands of leaders and organizations prepare for the future.
          </p>

          <div className="mb-8 group">
            <Image
              src="/assets/images/book.png"
              alt="Jacob Morgan's Books"
              width={800}
              height={300}
              className="mx-auto transform group-hover:scale-105 transition-transform duration-500 animate-[fadeInUp_1.2s_ease-out] opacity-0 [animation-fill-mode:forwards] [animation-delay:0.4s]"
              priority
            />
          </div>

          <button className="bg-[#1e3a8a] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#1e40af] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-[fadeInUp_1.4s_ease-out] opacity-0 [animation-fill-mode:forwards] [animation-delay:0.6s]">
            See Jacob&apos;s Books
          </button>
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
