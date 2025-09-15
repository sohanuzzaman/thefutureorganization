"use client";
import Image from 'next/image';

// SVG Icons
const ChartIcon = () => (
  <svg className="w-6 h-6 text-[#1e3a8a]" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/>
    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/>
  </svg>
);

const UsersIcon = () => (
  <svg className="w-6 h-6 text-[#1e3a8a]" fill="currentColor" viewBox="0 0 20 20">
    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
  </svg>
);

const UserIcon = () => (
  <svg className="w-6 h-6 text-[#1e3a8a]" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
  </svg>
);

const SupportIcon = () => (
  <svg className="w-6 h-6 text-[#1e3a8a]" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
  </svg>
);

const MicrophoneIcon = () => (
  <svg className="w-6 h-6 text-[#1e3a8a]" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"/>
  </svg>
);

const ChatIcon = () => (
  <svg className="w-6 h-6 text-[#1e3a8a]" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
  </svg>
);

export default function CHROCommunitySection() {
  const features = [
    {
      icon: <ChartIcon />,
      title: "Monthly visual Discussions",
      description: "Solve real challenges and share insights with peers."
    },
    {
      icon: <UsersIcon />,
      title: "In-Person Events",
      description: "Build meaningful connections and gain fresh ideas."
    },
    {
      icon: <UserIcon />,
      title: "Direct Access to Jacob For Insights",
      description: "Get expert advice on trends, strategy, and impact."
    },
    {
      icon: <SupportIcon />,
      title: "Peer support",
      description: "Exchange ideas and solutions with trusted peers."
    },
    {
      icon: <MicrophoneIcon />,
      title: "Have a Voice",
      description: "Shape discussions and influence the community."
    },
    {
      icon: <ChatIcon />,
      title: "Private Online Community",
      description: "Exclusive insights and high-value conversations."
    }
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a8a] leading-tight mb-6">
                Future Of Work Leaders CHRO<br />
                Global CHRO Community
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4 text-[#334155] leading-relaxed">
              <p>
                A new community of the world's best CHROs that are moving beyond traditional HR to creating future-ready
                organizations (leadership, the future of work, and employee experience). Members include Johnson & Johnson,
                Dow, Lego, Northrop Grumman, Neiman Marcus, and dozens of others.
              </p>
              <p>
                We host in-person and virtual events and have a thriving community. Learn more and request an invitation by
                visiting the{" "}
                <a href="#" className="text-[#1e3a8a] underline hover:text-orange-500 transition-colors">
                  Future of Work Leaders
                </a>{" "}
                page or emailing Jacob directly,{" "}
                <a href="mailto:Jacob@TheFutureOrganization.com" className="text-[#1e3a8a] underline hover:text-orange-500 transition-colors">
                  Jacob@TheFutureOrganization.com
                </a>
              </p>
            </div>

          </div>

          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/chro_sketch.png"
              alt="CHRO Community Sketch"
              width={600}
              height={400}
              className="w-full h-auto max-w-lg"
              priority
            />
          </div>
        </div>

        {/* Features Grid - Single Row at Bottom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mt-16">
          {features.map((feature, index) => (
            <div key={index} className="border border-[#1e3a8a] rounded-lg p-4 hover:shadow-lg transition-shadow text-center">
              <div className="flex justify-center mb-3">
                {feature.icon}
              </div>
              <h4 className="font-bold text-[#334155] text-sm leading-tight mb-2">
                {feature.title}
              </h4>
              <p className="text-[#334155] text-xs leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}