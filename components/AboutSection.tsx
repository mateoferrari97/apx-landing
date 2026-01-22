export default function AboutSection() {
  return (
    <section className="bg-mariana-gray py-20 px-10 md:px-20" style={{ fontFamily: 'Lato, sans-serif' }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* Left Column - Large Bold Text */}
          <div>
            <h2 className="text-mariana-light text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              ¿Por qué elegir<br />nuestras Alfombras?
            </h2>
          </div>

          {/* Right Column - Paragraph Text */}
          <div className="lg:pt-2">
            <ul className="text-mariana-light text-base md:text-lg leading-relaxed font-normal space-y-6">
              <li className="pl-4" style={{ borderLeft: '2px solid #e0e0e0' }}>Refuerza la imagen de tu marca</li>
              <li className="pl-4" style={{ borderLeft: '2px solid #e0e0e0' }}>Eleva la calidad percibida en la entrega</li>
              <li className="pl-4" style={{ borderLeft: '2px solid #e0e0e0' }}>Tu marca presente en cada uso</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
