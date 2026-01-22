import Image from 'next/image'

export default function Clients() {
  const clients = [
    { name: 'AutoPremier', logo: '/images/client-autopremier.svg' },
    { name: 'Klasse', logo: '/images/client-klasse.svg' },
    { name: 'LaMercedPilar', logo: '/images/client-lamerced.svg' },
    { name: 'Lonco-Hue', logo: '/images/client-loncohue.svg' },
    { name: 'Cigliutti Guerini', logo: '/images/client-cigliutti.svg' },
  ]

  return (
    <section className="bg-mariana-light py-16 px-10 md:px-20" style={{ fontFamily: 'Lato, sans-serif' }}>
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-mariana-dark text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-12 italic">
          Nuestros clientes
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {clients.map((client, index) => (
            <div key={index} className="h-8 md:h-10 relative">
              <Image
                src={client.logo}
                alt={client.name}
                width={150}
                height={40}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
