import Image from 'next/image';

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

  // Hardcoded client logos
  const clientLogos = [
    { name: "Microsoft", image: "ms-1.png" },
    { name: "NYU", image: "NYU-transparant.png" },
    { name: "Jude Children's Research Hospital", image: "jude-childrens-research-hospital.png" },
    { name: "Adobe", image: "adobe-red.png" },
    { name: "Chevron", image: "Chevron.png" },
    { name: "Samsung", image: "samsung.png" },
    { name: "Cisco", image: "cisco.png" },
    { name: "Harvard Business Review", image: "hbr-transparent.png" },
    { name: "Sodexo", image: "sodexo.png" },
    { name: "Rolls-Royce", image: "rr.png" },
    { name: "Nationwide", image: "nationwide.png" },
    { name: "Pepsi", image: "pepsi-1.png" },
    { name: "Lowe's", image: "lowis.png" },
    { name: "Wells Fargo", image: "wells-fargo.png" },
    { name: "SAP", image: "sap-1.png" },
    { name: "Mastercard", image: "mastercard.png" },
    { name: "Royal Caribbean", image: "royal-caribian.png" },
    { name: "Visa", image: "visa-1.png" },
    { name: "Raytheon", image: "raytheon-1.png" },
    { name: "HP", image: "hp-1.png" },
    { name: "FESMA", image: "fesma.png" },
    { name: "Comcast", image: "comcast-1.png" },
    { name: "Bank of America", image: "bank-of-america.png" },
    { name: "American Express", image: "American-Express.png" },
    { name: "Oracle", image: "Oracle.png" },
    { name: "EY", image: "EJ.png" },
    { name: "Disney", image: "Disney.png" },
    { name: "Gallagher", image: "gallagher.png" },
    { name: "Tata", image: "tata.png" },
    { name: "BAT", image: "bat.png" },
    { name: "Fidelity", image: "fidelty.png" },
    { name: "PwC", image: "pwc.png" },
    { name: "Salesforce", image: "sf.png" },
    { name: "IBM", image: "IBM_S.png" },
    { name: "BAE Systems", image: "BAE.png" },
    { name: "TED", image: "TED_S.png" }
  ];

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
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="group relative p-2 transition-all duration-300 hover:scale-110 w-full h-20 flex items-center justify-center"
            >
              <Image
                src={`/assets/images/client-logos/${logo.image}`}
                alt={logo.name}
                width={120}
                height={80}
                className="max-w-full max-h-full w-auto h-auto object-contain transition-all duration-300"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
          ))}
        </div>

        {/* Show count for large numbers */}
        <div className="text-center mt-12">
          <p className="text-white text-lg">
            And <span className="font-bold text-orange-500">many more</span> leading organizations
          </p>
        </div>
      </div>
    </section>
  );
}