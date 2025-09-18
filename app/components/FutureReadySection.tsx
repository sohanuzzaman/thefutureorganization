"use client";
import Image from 'next/image';

export default function FutureReadySection() {
  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      style={{
        backgroundImage: 'url(/trianglebg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-white/70"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#334155] mb-4 flex items-center justify-center gap-2 flex-wrap">
            What It Means To Be{" "}
            <span className="text-[#1e3a8a] flex items-center gap-2">
              FUTURE RE
              <Image
                src="/fr-blue.png"
                alt="Future Ready Icon"
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 inline"
              />
              DY
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Leadership */}
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-[#4dd0e1] text-white px-4 py-2 rounded-lg font-semibold text-sm uppercase tracking-wide">
                  LEADERSHIP
                </div>
              </div>
              <p className="text-[#334155] leading-relaxed">
                Embracing a new set of skills and mindsets is essential for leaders
                to thrive in a constantly changing environment. Leaders must
                balance competence and connection to guide teams through
                uncertainty and achieve goals.
              </p>
            </div>

            {/* Future of Work */}
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold text-sm uppercase tracking-wide">
                  FUTURE OF WORK
                </div>
              </div>
              <p className="text-[#334155] leading-relaxed">
                Organizations must adapt to rapid technological advancements,
                evolving business models, and shifting employee expectations.
                Success requires embracing flexibility, continuous learning, and
                being forward thinking.
              </p>
            </div>

            {/* Employee Experience */}
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-[#1e3a8a] text-white px-4 py-2 rounded-lg font-semibold text-sm uppercase tracking-wide">
                  EMPLOYEE EXPERIENCE
                </div>
              </div>
              <p className="text-[#334155] leading-relaxed">
                A future-ready employee experience integrates culture,
                technology, and space to create an environment where people
                feel valued, supported, and motivated to do their best work,
                balancing competence and connection.
              </p>
            </div>
          </div>

          {/* Right side - Triangle Diagram */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative max-w-2xl w-full">
              <Image
                src="/triangle-update.png"
                alt="Future Ready Triangle - Leadership, Future of Work, Employee Experience"
                width={800}
                height={600}
                className="w-full h-auto transform hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}