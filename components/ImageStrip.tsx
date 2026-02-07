import Image from 'next/image'

export default function ImageStrip() {
  const images = [
    { src: '/images/new/2-.png', alt: 'APX Image 1', name: 'A medida de cada modelo', zoom: true },
    { src: '/images/new/3.png', alt: 'APX Image 2', name: 'PVC de alta resistencia (7.5 kg)', zoom: false },
    { src: '/images/new/4.png', alt: 'APX Image 3', name: 'Diseño antideslizante', zoom: false },
    { src: '/images/new/5.png', alt: 'APX Image 4', name: 'Espesor de 10 mm', zoom: true },
  ]

  return (
    <section className="w-full overflow-hidden">
      <div className="grid grid-cols-2">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-[4/3] group cursor-pointer overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`object-cover transition-all duration-300 group-hover:brightness-[0.3] ${image.zoom ? 'scale-110' : ''}`}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span
                className="text-mariana-light text-xl md:text-2xl lg:text-3xl text-center px-4"
                style={{ fontFamily: "'HelveticaNeue', 'Helvetica Neue', Helvetica, sans-serif", fontWeight: 700 }}
              >
                {image.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
