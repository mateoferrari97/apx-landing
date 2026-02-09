'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ImageStrip() {
  const images = [
    { src: '/images/new/2-.png', alt: 'APX Image 1', name: 'A medida de cada modelo', zoom: true },
    { src: '/images/new/3.png', alt: 'APX Image 2', name: 'PVC de alta resistencia (7.5 kg)', zoom: false },
    { src: '/images/new/4.png', alt: 'APX Image 3', name: 'Diseño antideslizante', zoom: false },
    { src: '/images/new/5.png', alt: 'APX Image 4', name: 'Espesor de 10 mm', zoom: true },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="w-full overflow-hidden">
      {/* Mobile Carousel */}
      <div className="md:hidden relative">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="relative aspect-[4/3] min-w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`object-cover ${image.zoom ? 'scale-110' : ''}`}
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span
                  className="text-mariana-light text-xl text-center px-4"
                  style={{ fontFamily: "'HelveticaNeue', 'Helvetica Neue', Helvetica, sans-serif", fontWeight: 700 }}
                >
                  {image.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* Dots indicator */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
        {/* Navigation arrows */}
        <button
          onClick={() => setCurrentSlide(prev => (prev > 0 ? prev - 1 : images.length - 1))}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/30 rounded-full text-white"
        >
          ‹
        </button>
        <button
          onClick={() => setCurrentSlide(prev => (prev < images.length - 1 ? prev + 1 : 0))}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/30 rounded-full text-white"
        >
          ›
        </button>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2">
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
