import Image from "next/image";
import Navigation from "./components/Navigation";
import TestimonialsSection from "./components/TestimonialsSection";
import FutureReadySection from "./components/FutureReadySection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F0F5FA]">
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
              className="h-12 w-auto brightness-0 invert"
            />

            <Navigation />
          </div>
        </div>
      </header>

      {/* Hero Video Section */}
      <section className="relative h-[80vh] overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
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
        <div className="absolute bottom-0 left-0 right-0 bg-[#1e3a8a]/60 backdrop-blur-sm py-8">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-white text-center text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide leading-tight select-text">
              CREATING <span className="text-orange-500">FUTURE READY</span> LEADERS,<br />
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
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#334155] mb-6">
            Hi I&rsquo;m Jacob Morgan
          </h1>

          <p className="text-xl md:text-2xl text-[#334155] max-w-4xl mx-auto leading-relaxed">
            Jacob Morgan is a professionally trained futurist, best-selling author, and keynote speaker.
            He creates future-ready organizations, leaders, and employees.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#334155] text-center mb-8">
            Trusted by Leaders From
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center">
            <div className="w-24 h-24 relative">
              <Image
                src="/assets/images/Jose_Antonio.png"
                alt="Jose Antonio"
                fill
                className="object-contain rounded-full"
              />
            </div>
            <div className="w-24 h-24 relative">
              <Image
                src="/assets/images/HZ.png"
                alt="HZ"
                fill
                className="object-contain rounded-full"
              />
            </div>
            <div className="w-24 h-24 relative">
              <Image
                src="/assets/images/Hubert-Joly.png"
                alt="Hubert Joly"
                fill
                className="object-contain rounded-full"
              />
            </div>
            <div className="w-24 h-24 relative">
              <Image
                src="/assets/images/Michael-Miebach.png"
                alt="Michael Miebach"
                fill
                className="object-contain rounded-full"
              />
            </div>
            <div className="w-24 h-24 relative">
              <Image
                src="/assets/images/Mark-Hoplamazian.png"
                alt="Mark Hoplamazian"
                fill
                className="object-contain rounded-full"
              />
            </div>
            <div className="w-24 h-24 relative">
              <Image
                src="/assets/images/Wes-Kremer.png"
                alt="Wes Kremer"
                fill
                className="object-contain rounded-full"
              />
            </div>
            <div className="w-24 h-24 relative">
              <Image
                src="/assets/images/politica-social.png"
                alt="Politica Social"
                fill
                className="object-contain rounded-full"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#334155] mb-6">
            Creating Great Leaders, Engaged Employees, &amp; Future-Ready Organizations
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#334155] mb-3">Employee Experience</h3>
              <p className="text-[#334155]">
                Transform your workplace culture and create meaningful experiences for your employees.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#334155] mb-3">Future of Work</h3>
              <p className="text-[#334155]">
                Navigate the changing landscape of work with strategic insights and practical solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#334155] mb-3">Leadership</h3>
              <p className="text-[#334155]">
                Develop the leadership skills needed to thrive in tomorrow&rsquo;s business environment.
              </p>
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
