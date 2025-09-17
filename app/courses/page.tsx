import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership, Employee Experience & Future of Work Courses | Jacob Morgan",
  description: "Join world-class organizations in trusting Jacob Morgan with leadership development and employee experience training. Interactive courses with direct access to Jacob.",
  keywords: "leadership courses, employee experience training, future of work, leadership development, corporate training, Jacob Morgan courses",
  authors: [{ name: "Jacob Morgan" }],
  creator: "Jacob Morgan",
  publisher: "The Future Organization",

  openGraph: {
    title: "Leadership, Employee Experience & Future of Work Courses | Jacob Morgan",
    description: "Join world-class organizations in trusting Jacob Morgan with leadership development and employee experience training. Interactive courses with direct access to Jacob.",
    type: 'website',
    siteName: 'Jacob Morgan - Leadership & Future of Work Expert',
    locale: 'en_US',
    images: [{
      url: '/assets/images/banner-scaled.jpg',
      width: 1920,
      height: 1080,
      alt: 'Leadership and Future of Work Courses',
    }],
  },

  twitter: {
    card: 'summary_large_image',
    title: "Leadership, Employee Experience & Future of Work Courses | Jacob Morgan",
    description: "Join world-class organizations in trusting Jacob Morgan with leadership development and employee experience training.",
    creator: '@jacobmorgan',
    images: ['/assets/images/banner-scaled.jpg'],
  },

  alternates: {
    canonical: 'https://thefutureorganization.com/courses',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#1e3a8a] shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                src="/assets/images/jacob-logo.png"
                alt="Jacob Morgan"
                width={300}
                height={68}
                priority
                className="h-12 w-auto"
              />
            </Link>
            <Navigation />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/banner-scaled.jpg"
            alt="Leadership and Future of Work Courses"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            LEADERSHIP, EMPLOYEE EXPERIENCE, &<br />
            THE FUTURE OF WORK COURSES
          </h1>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-white leading-relaxed mb-8">
              Some of the world's top organizations trust Jacob Morgan with their leadership development and employee
              experience training. Jacob's courses are fun, engaging, and interactive where participants can have direct access
              to him via the course platform. Training and development programs shouldn't be boring! Jacob also offers
              custom training solutions and bulk seat discounts to various programs. Learn more or reach out to Jacob directly
              at <a href="mailto:Jacob@thefutureorganization.com" className="text-white underline hover:text-orange-200 transition-colors">Jacob@thefutureorganization.com</a>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:Jacob@thefutureorganization.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors"
            >
              Contact Jacob
            </a>
            <Link
              href="#courses"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Courses Section - Placeholder for now */}
      <section id="courses" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive training programs designed to transform leaders and organizations for the future of work.
            </p>
          </div>

          {/* Course cards will be added here based on API data or additional requirements */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for course cards */}
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Leadership Development</h3>
              <p className="text-gray-600 mb-6">
                Transform your leadership approach for the modern workplace.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More
              </button>
            </div>

            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Employee Experience</h3>
              <p className="text-gray-600 mb-6">
                Create exceptional experiences that engage and retain talent.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More
              </button>
            </div>

            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Future of Work</h3>
              <p className="text-gray-600 mb-6">
                Prepare your organization for the evolving workplace landscape.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-lg text-white mb-8 opacity-90">
            Contact Jacob Morgan to discuss custom training solutions and bulk seat discounts for your team.
          </p>
          <a
            href="mailto:Jacob@thefutureorganization.com?subject=Course Inquiry"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">
            &copy; 2025 Jacob Morgan. All rights reserved.
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}