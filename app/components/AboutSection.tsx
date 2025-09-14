"use client";
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header with lighthouse icon */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-2 flex-wrap">
            <Image
              src="/fr-blue.png"
              alt="Future Ready Icon"
              width={60}
              height={60}
              className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
            />
            <span className="text-[#1e3a8a]">bout</span>
            <span className="text-orange-500">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Blue geometric background shape */}
              <div className="absolute -bottom-8 -left-8 w-full h-full bg-[#1e3a8a] rounded-lg transform rotate-3 -z-10"></div>

              <div className="relative bg-white rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/jacob-image.png"
                  alt="Jacob Morgan"
                  width={500}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
                Hi I'm Jacob Morgan
              </h3>
              <p className="text-xl md:text-2xl font-semibold text-[#334155] mb-6">
                A professionally trained futurist, best-selling author of 6 books, and keynote speaker.
              </p>
            </div>

            <div className="space-y-4 text-[#334155] leading-relaxed">
              <p>
                Jacob is a professionally trained futurist, keynote speaker, and the international best-selling author of 6 books which focus on leadership, the future of work, and employee experience. His passion and mission is to create future-ready leaders, employees, and organizations.
              </p>

              <p>
                Jacob is also the founder of Future of Work Leaders, a global CHRO community of the world's top people leaders. In addition, he hosts the popular Future-Ready Leadership Podcast which is one of the most popular management and leadership podcasts.
              </p>

              <p>
                His work has been endorsed by the CEOs of: Unilever, Cisco, Mastercard, Nestle, Best Buy, SAP, KPMG, T-Mobile, Audi, Kaiser Permanente, and many others.
              </p>

              <p>
                Jacob lives in Los Angeles, California with his amazing wife Blake, their two kids, and their two Yorkie rescue dogs. He's an avid chess and pickleball player and health and fitness enthusiast.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="mailto:jacob@TheFutureOrganization"
                className="inline-block bg-[#1e3a8a] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-500 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                BOOK JACOB
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}