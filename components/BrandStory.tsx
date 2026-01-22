import Image from 'next/image'

export default function BrandStory() {
  return (
    <section id="about" className="bg-primary pt-10 pb-20 px-10">
      {/* Hero Image */}
      <div className="max-w-[1400px] mx-auto mb-16">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src="/images/4.jpg"
            alt="Moda lenta"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-h2 font-normal leading-heading-2 text-center max-w-[800px] mx-auto mb-16">
        Moda lenta hecha en pequeños lotes.
      </h2>

      {/* Two Column Content */}
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <div className="max-w-[300px] mb-8">
              <Image
                src="/images/5.jpg"
                alt="Diseño artesanal"
                width={300}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-6 font-light leading-body">
              <p>
                Todo empieza con una idea. Tal vez quieras comenzar un negocio o convertir un pasatiempo en algo más. O bien, es posible que tengas un proyecto creativo para compartir con el mundo. Sea lo que sea, la manera en la que cuentes tu historia online puede marcar la diferencia.
              </p>
              <p>
                No te preocupes por sonar profesional. Suena como tú. Hay más de 1500 millones de sitios web, pero tu historia es lo que lo diferencia del resto. Si vuelves a leer las palabras y no oyes tu propia voz en la mente, es una señal de que aún tienes mucho trabajo por hacer.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-end">
            <div className="max-w-[400px]">
              <Image
                src="/images/6.jpg"
                alt="Propietaria y diseñadora Carmen"
                width={400}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
