import Image from 'next/image'

export default function ImageStrip() {
  const images = [
    { src: '/images/section3-1.jpeg', alt: 'APX Image 1', name: 'A medida de cada modelo' },
    { src: '/images/section3-2.jpeg', alt: 'APX Image 2', name: 'PVC de alta resistencia (7.5 kg)' },
    { src: '/images/section3-3.jpeg', alt: 'APX Image 3', name: 'Espesor de 10 mm' },
    { src: '/images/section3-4.jpeg', alt: 'APX Image 4', name: 'Diseño antideslizante' },
  ]

  return (
    <section className="w-full overflow-hidden">
      <div className="flex">
        {images.map((image, index) => (
          <div key={index} className="flex-1 relative aspect-[4/3] group cursor-pointer">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-all duration-300 group-hover:brightness-[0.3]"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-mariana-light text-sm md:text-base lg:text-lg font-semibold whitespace-nowrap" style={{ fontFamily: 'Lato, sans-serif' }}>
                {image.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
