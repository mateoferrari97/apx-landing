'use client'

import { useState } from 'react'
import Image from 'next/image'

const galleryImages = [
  { url: '/images/1.jpg', alt: 'Galería imagen 1' },
  { url: '/images/2.jpg', alt: 'Galería imagen 2' },
  { url: '/images/3.jpg', alt: 'Galería imagen 3' },
  { url: '/images/4.jpg', alt: 'Galería imagen 4' },
  { url: '/images/5.jpg', alt: 'Galería imagen 5' },
  { url: '/images/6.jpg', alt: 'Galería imagen 6' },
  { url: '/images/b.jpg', alt: 'Galería imagen 7' },
  { url: '/images/back.jpg', alt: 'Galería imagen 8' },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <section className="bg-primary py-10 px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                className="gallery-item relative aspect-square overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image.url)}
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
                <div className="gallery-overlay">
                  <span className="text-mariana-light text-xs tracking-button uppercase">
                    Ver tamaño completo
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-mariana-light text-xs tracking-button uppercase hover:opacity-80 transition-opacity"
            onClick={() => setSelectedImage(null)}
          >
            Cerrar
          </button>
          <div className="relative w-[90vw] h-[90vh]">
            <Image
              src={selectedImage}
              alt="Imagen ampliada"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}
