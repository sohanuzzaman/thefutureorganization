import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import TestimonialsSection from "../components/TestimonialsSection";
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
            LEADERSHIP, EMPLOYEE EXPERIENCE, & THE FUTURE OF WORK COURSES
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

      {/* Courses Grid */}
      <section id="courses" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-6">

            {/* Course 1: The Customer of the Future Course */}
            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-72 h-40 md:h-48 flex-shrink-0">
                  <Image
                    src="/assets/images/2023/11/The-customer-of-the-future.png"
                    alt="The Customer of the Future Course"
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 flex-1">
                  <p className="text-sm text-gray-600 mb-2">Course Length: 3 hours</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Customer of the Future Course</h3>
                  <p className="text-gray-700 mb-6">
                    With emerging technology transforming customer expectations, it's more important than ever to keep a laser focus on the experience companies provide their customers. In The Customer Of The Future course Blake brings you the psychological, technical and experiential aspects of a customer strategy you can immediately apply at your own company.
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-gray-900">$299</p>
                    <a
                      href="https://education.blakemichellemorgan.com/the-customer-of-the-future"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Course 2: The Future Leader Course */}
            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-72 h-40 md:h-48 flex-shrink-0">
                  <Image
                    src="/assets/images/2023/11/future-leader-course.png"
                    alt="The Future Leader Course"
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 flex-1">
                  <p className="text-sm text-gray-600 mb-2">Course Length: 4-5 hours</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Future Leader Course</h3>
                  <p className="text-gray-700 mb-6">
                    Drawing from interviews with 140+ global CEOs and a 14,000-employee survey, Jacob's course equips tomorrow's leaders with crucial insights. It spotlights 4 key mindsets and 5 skills for leading in today's dynamic workplace. Extracted from corporate giants like Unilever and MasterCard, this course is a blueprint for organizational success.
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-gray-900">$699</p>
                    <a
                      href="https://training.thefutureorganization.com/the-future-leader-course-checkout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Course 3: Employee Experience Crash Course */}
            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-72 h-40 md:h-48 flex-shrink-0">
                  <Image
                    src="/assets/images/2023/11/employee-experience-course-1.png"
                    alt="Employee Experience Crash Course"
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 flex-1">
                  <p className="text-sm text-gray-600 mb-2">Course Length: 4-5 hours</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Employee Experience Crash Course</h3>
                  <p className="text-gray-700 mb-6">
                    Analyzed from 252+ global organizations, this course redefines employee experience as a key business trend. It uncovers the true influence of culture, technology, and physical space, proving engagement programs' shortfalls. The aim is to foster an environment where employees WANT to be part of your organization, not merely NEED to be.
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-gray-900">$499</p>
                    <a
                      href="https://training.thefutureorganization.com/ee-crash-course-checkout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Course 4: The Future of Work Fast Track */}
            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-72 h-40 md:h-48 flex-shrink-0">
                  <Image
                    src="/assets/images/2023/11/fast-track.png"
                    alt="The Future of Work Fast Track"
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 flex-1">
                  <p className="text-sm text-gray-600 mb-2">Course Length: 4-5 hours</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Future of Work Fast Track</h3>
                  <p className="text-gray-700 mb-6">
                    If you want to thrive in the future of work there are 12 skills you have to master and this course will teach out how to do just that. These include things like: learning to learn, thinking like an entrepreneur, collaborating, disconnecting from technology, having a growth mindset, and others. This program is designed for anyone looking to thrive in the new world of work.
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-gray-900">$799</p>
                    <a
                      href="https://training.thefutureorganization.com/fast-track-checkout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Course 5: The Morgan's 4 M's of Entrepreneurship */}
            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-72 h-40 md:h-48 flex-shrink-0">
                  <Image
                    src="/assets/images/2023/11/entrepreneurship.png"
                    alt="The Morgan's 4 M's of Entrepreneurship"
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 flex-1">
                  <p className="text-sm text-gray-600 mb-2">Course Length: 90 minutes</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Morgan's 4 M's of Entrepreneurship</h3>
                  <p className="text-gray-700 mb-6">
                    The Framework to Become Your Own Boss. This is the same framework we used to build a 7-figure business And we want to share it with you!
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-gray-900">$53</p>
                    <a
                      href="https://www.byobpodcast.com/morgans-4m-entrepreneurship-course"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Course 6: The 31 Day Leadership Reset */}
            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-72 h-40 md:h-48 flex-shrink-0">
                  <Image
                    src="/assets/images/2023/11/leadership-reset.png"
                    alt="The 31 Day Leadership Reset"
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 flex-1">
                  <p className="text-sm text-gray-600 mb-2">Course Length: 31 videos</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The 31 Day Leadership Reset</h3>
                  <p className="text-gray-700 mb-6">
                    31 videos where Jacob will share a leadership hack, tip, technique, or strategy from one of the world's top CEOs. Each video is 3-5 mins in length and is practical and actionable. You will learn what these world-class leaders are doing in their own personal and professional lives to be successful leaders.
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-gray-900">$67</p>
                    <a
                      href="https://www.futureofworkuniversity.com/offers/U2eDs4Sx/checkout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

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