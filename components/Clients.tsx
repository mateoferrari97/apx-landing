import Image from 'next/image'

export default function Clients() {
  const allClients = [
    { name: 'AutoPremier', logo: '/images/Conces/Logo AutoPremier.svg' },
    { name: 'Klasse', logo: '/images/Conces/Logo autos - Klasse.svg' },
    { name: 'Besten', logo: '/images/Conces/Logo Besten.svg' },
    { name: 'Colcar', logo: '/images/Conces/Logo Colcar ok.svg' },
    { name: 'Lonco-Hue', logo: '/images/Conces/Logo Lonco-Hue.svg' },
    { name: 'Diesel San Miguel', logo: '/images/Conces/Logo Diesel San Miguel - OK.svg' },
    { name: 'LaMerced', logo: '/images/Conces/Logo LaMerced flor - OK.svg' },
    { name: 'Cigliutti Guerini', logo: '/images/Conces/Logo sprinter - Cigliutti Guerini.svg' },
  ]

  // Desktop layout: 5 + 3
  const desktopFirstRow = allClients.slice(0, 5)
  const desktopSecondRow = allClients.slice(5, 8)

  // Mobile layout: 3 + 3 + 2
  const mobileFirstRow = allClients.slice(0, 3)
  const mobileSecondRow = allClients.slice(3, 6)
  const mobileThirdRow = allClients.slice(6, 8)

  const LogoImage = ({ client }: { client: { name: string; logo: string } }) => (
    <div className="h-8 md:h-12 relative">
      <Image
        src={client.logo}
        alt={client.name}
        width={150}
        height={48}
        className="h-full w-auto object-contain"
      />
    </div>
  )

  return (
    <section className="py-16 px-10 md:px-20" style={{ backgroundColor: '#e0e0e0' }}>
      <div className="max-w-[1400px] mx-auto">
        <h2
          className="text-mariana-dark text-3xl md:text-4xl lg:text-5xl text-center uppercase tracking-wide mb-12"
          style={{ fontFamily: "'HelveticaNeue-BoldCond', 'Helvetica Neue', Helvetica, sans-serif" }}
        >
          Nuestros clientes
        </h2>

        {/* Mobile Layout: 3 + 3 + 2 */}
        <div className="md:hidden flex flex-col gap-6">
          <div className="flex justify-center items-center gap-4">
            {mobileFirstRow.map((client, index) => (
              <LogoImage key={index} client={client} />
            ))}
          </div>
          <div className="flex justify-center items-center gap-4">
            {mobileSecondRow.map((client, index) => (
              <LogoImage key={index} client={client} />
            ))}
          </div>
          <div className="flex justify-center items-center gap-4">
            {mobileThirdRow.map((client, index) => (
              <LogoImage key={index} client={client} />
            ))}
          </div>
        </div>

        {/* Desktop Layout: 5 + 3 */}
        <div className="hidden md:flex flex-col gap-8">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-10">
            {desktopFirstRow.map((client, index) => (
              <LogoImage key={index} client={client} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-10">
            {desktopSecondRow.map((client, index) => (
              <LogoImage key={index} client={client} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
