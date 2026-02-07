import Image from 'next/image'

export default function Clients() {
  const firstRow = [
    { name: 'AutoPremier', logo: '/images/Conces/Logo AutoPremier.svg' },
    { name: 'Klasse', logo: '/images/Conces/Logo autos - Klasse.svg' },
    { name: 'Besten', logo: '/images/Conces/Logo Besten.svg' },
    { name: 'Colcar', logo: '/images/Conces/Logo Colcar ok.svg' },
    { name: 'Lonco-Hue', logo: '/images/Conces/Logo Lonco-Hue.svg' },
  ]

  const secondRow = [
    { name: 'Diesel San Miguel', logo: '/images/Conces/Logo Diesel San Miguel - OK.svg' },
    { name: 'LaMerced', logo: '/images/Conces/Logo LaMerced flor - OK.svg' },
    { name: 'Cigliutti Guerini', logo: '/images/Conces/Logo sprinter - Cigliutti Guerini.svg' },
  ]

  return (
    <section className="py-16 px-10 md:px-20" style={{ backgroundColor: '#e0e0e0' }}>
      <div className="max-w-[1400px] mx-auto">
        <h2
          className="text-mariana-dark text-3xl md:text-4xl lg:text-5xl text-center uppercase tracking-wide mb-12"
          style={{ fontFamily: "'HelveticaNeue-BoldCond', 'Helvetica Neue', Helvetica, sans-serif" }}
        >
          Nuestros clientes
        </h2>
        <div className="flex flex-col gap-6 md:gap-8">
          {/* First row */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-10">
            {firstRow.map((client, index) => (
              <div key={index} className="h-10 md:h-12 relative">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={150}
                  height={48}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
          {/* Second row */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-10">
            {secondRow.map((client, index) => (
              <div key={index} className="h-10 md:h-12 relative">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={150}
                  height={48}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
