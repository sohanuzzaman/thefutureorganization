"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ClientLogo {
  id: number;
  title: {
    rendered: string;
  };
  link: string;
  yoast_head_json?: {
    og_image?: Array<{
      url: string;
      width: number;
      height: number;
    }>;
  };
  featured_media: number;
  media_url?: string;
}

interface ClientLogosSectionProps {
  title?: string;
  titleHighlight?: string;
  backgroundImage?: string;
}

export default function ClientLogosSection({
  title = "Jacob has Worked with the",
  titleHighlight = "World's Top Companies",
  backgroundImage = "/clientlogo-bg.png"
}: ClientLogosSectionProps) {
  const [logos, setLogos] = useState<ClientLogo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = await fetch('https://api.thefutureorganization.com/wp-json/wp/v2/clientlogo?per_page=100');
        const data = await response.json();
        console.log('Fetched logos raw data:', data); // Debug log

        // Fetch media details for logos with featured_media
        const logosWithMedia = await Promise.all(
          data.map(async (logo: ClientLogo) => {
            console.log(`Processing logo: ${logo.title.rendered}, Featured Media: ${logo.featured_media}`);

            if (logo.featured_media && logo.featured_media > 0) {
              try {
                const mediaResponse = await fetch(`https://api.thefutureorganization.com/wp-json/wp/v2/media/${logo.featured_media}`);
                const mediaData = await mediaResponse.json();
                console.log(`Media data for ${logo.title.rendered}:`, mediaData.source_url);
                return {
                  ...logo,
                  media_url: mediaData.source_url
                };
              } catch (error) {
                console.error(`Error fetching media for logo ${logo.id}:`, error);
                return logo;
              }
            }
            return logo;
          })
        );

        console.log('Final logos with media:', logosWithMedia.length, 'logos processed'); // Debug log
        setLogos(logosWithMedia);
      } catch (error) {
        console.error('Error fetching client logos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLogos();
  }, []);

  if (loading) {
    return (
      <section
        className="py-20 px-4 relative overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {title}{" "}
              <span className="text-orange-500">{titleHighlight}</span>
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="py-20 px-4 relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}{" "}
            <span className="text-orange-500">{titleHighlight}</span>
          </h2>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo) => {
            // Try multiple sources for logo URL
            const logoUrl = logo.media_url ||
              (logo.yoast_head_json?.og_image && logo.yoast_head_json.og_image.length > 0
                ? logo.yoast_head_json.og_image[0].url
                : null);

            // Debug for Jude Children's Research Hospital specifically
            if (logo.title.rendered.includes('Jude')) {
              console.log('Jude logo debug:', {
                title: logo.title.rendered,
                featured_media: logo.featured_media,
                media_url: logo.media_url,
                yoast_og_image: logo.yoast_head_json?.og_image?.[0]?.url,
                final_logoUrl: logoUrl
              });
            }

            // Skip logos without proper images
            if (!logoUrl) {
              console.log(`No logo URL for: ${logo.title.rendered}`);
              return null;
            }

            // Skip if the image URL contains Jacob's photo (fallback image)
            if (logoUrl.includes('JacobHome.png')) {
              console.log(`Skipping Jacob's fallback image for: ${logo.title.rendered}`);

              // Temporary fix for Jude Children's Research Hospital
              if (logo.title.rendered.includes('Jude')) {
                const judeLogoUrl = 'https://thefutureorganization.com/wp-content/uploads/2025/03/jude-childrens-research-hospital@logotyp.us_.png';
                return (
                  <div
                    key={logo.id}
                    className="group relative p-2 transition-all duration-300 hover:scale-110 w-full h-20 flex items-center justify-center"
                  >
                    <Image
                      src={judeLogoUrl}
                      alt={logo.title.rendered}
                      width={120}
                      height={80}
                      className="max-w-full max-h-full w-auto h-auto object-contain transition-all duration-300"
                      style={{ filter: 'brightness(0) invert(1)' }}
                      unoptimized
                    />
                  </div>
                );
              }

              return null;
            }

            return (
              <div
                key={logo.id}
                className="group relative p-2 transition-all duration-300 hover:scale-110 w-full h-20 flex items-center justify-center"
              >
                <Image
                  src={logoUrl}
                  alt={logo.title.rendered}
                  width={120}
                  height={80}
                  className="max-w-full max-h-full w-auto h-auto object-contain transition-all duration-300"
                  style={{ filter: 'brightness(0) invert(1)' }}
                  unoptimized
                />
              </div>
            );
          })}
        </div>

        {/* Show count for large numbers */}
        {logos.length > 12 && (
          <div className="text-center mt-12">
            <p className="text-white text-lg">
              And <span className="font-bold text-orange-500">{logos.length - 12}+ more</span> leading organizations
            </p>
          </div>
        )}
      </div>
    </section>
  );
}