import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/3.jpg"
        alt="APX - Equipamiento Premium Automotor"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-mariana-dark/40" />

      {/* Content - Centered */}
      <div className="relative z-10 text-center max-w-[900px] px-10 animate-fade-in-up" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 600 }}>
        <h1 className="text-mariana-light text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wide mb-6">
          El producto que entregás también construye tu marca
        </h1>
        <p className="text-mariana-light text-base md:text-lg leading-relaxed max-w-[700px] mx-auto mb-8">
          Desarrollamos alfombras premium a medida de cada modelo, para que tu concesionario ofrezca calidad, durabilidad y una experiencia a la altura de su nombre.
        </p>
        <a
          href="https://wa.me/541154099073?text=Solicito%20m%C3%A1s%20informaci%C3%B3n..."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-mariana-dark text-mariana-light text-base md:text-lg px-8 py-4 rounded-full hover:bg-mariana-charcoal transition-colors"
        >
          Solicitar información
        </a>
      </div>
    </section>
  )
}
