import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/new/1.png"
        alt="APX - Equipamiento Premium Automotor"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-mariana-dark/40" />

      {/* Content - Centered */}
      <div className="relative z-10 text-center max-w-[1100px] px-10 animate-fade-in-up">
        <h1 className="font-helvetica-bold-cond text-mariana-light text-2xl md:text-5xl lg:text-6xl leading-tight tracking-wide mb-6 uppercase">
          El producto que entregás<br />
          también construye tu marca
        </h1>
        <p
          className="text-mariana-light text-lg md:text-xl leading-relaxed max-w-[800px] mx-auto mb-8"
          style={{ fontFamily: "'HelveticaNeue', 'Helvetica Neue', Helvetica, sans-serif" }}
        >
          <span style={{ fontWeight: 400 }}>Desarrollamos </span>
          <span style={{ fontWeight: 700 }}>alfombras premium a medida de cada modelo,</span>
          <span style={{ fontWeight: 400 }}> para que tu concesionario ofrezca </span>
          <span style={{ fontWeight: 700 }}>calidad, durabilidad</span>
          <span style={{ fontWeight: 400 }}> y una </span>
          <span style={{ fontWeight: 700 }}>experiencia a la altura</span>
          <span style={{ fontWeight: 400 }}> de su nombre.</span>
        </p>
        <a
          href="https://wa.me/5491150975248?text=Hola!%20Me%20interesa%20saber%20sobre%20sus%20productos"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-helvetica-bold-cond bg-mariana-light text-mariana-dark text-xl md:text-2xl px-10 py-3 rounded-lg hover:bg-white transition-colors uppercase tracking-wide"
        >
          Solicitar info
        </a>
      </div>
    </section>
  )
}
