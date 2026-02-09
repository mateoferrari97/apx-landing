export default function AboutSection() {
  return (
    <section className="bg-mariana-gray py-16 px-10 md:px-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Title - Centered */}
        <h2
          className="text-mariana-light text-3xl md:text-4xl lg:text-5xl text-center uppercase tracking-wide mb-12"
          style={{ fontFamily: "'HelveticaNeue-BoldCond', 'Helvetica Neue', Helvetica, sans-serif" }}
        >
          ¿Por qué elegir nuestras alfombras?
        </h2>

        {/* Three Columns with Dividers */}
        <div className="flex flex-col md:flex-row justify-center items-center text-center">
          {/* Column 1 */}
          <div className="flex-1 py-4 md:py-0 px-6">
            <p className="text-mariana-light text-xl md:text-2xl" style={{ fontFamily: "'HelveticaNeue', 'Helvetica Neue', Helvetica, sans-serif" }}>
              <span style={{ fontWeight: 700 }} className="block">Refuerza la imagen</span>
              <span style={{ fontWeight: 400 }}>de tu concesionario</span>
            </p>
          </div>

          {/* Divider */}
          <div className="w-24 h-px md:w-px md:h-16 bg-mariana-light/50 my-2 md:my-0"></div>

          {/* Column 2 */}
          <div className="flex-1 py-4 md:py-0 px-6">
            <p className="text-mariana-light text-xl md:text-2xl" style={{ fontFamily: "'HelveticaNeue', 'Helvetica Neue', Helvetica, sans-serif" }}>
              <span style={{ fontWeight: 700 }} className="block">Eleva la calidad percibida</span>
              <span style={{ fontWeight: 400 }}>en la entrega</span>
            </p>
          </div>

          {/* Divider */}
          <div className="w-24 h-px md:w-px md:h-16 bg-mariana-light/50 my-2 md:my-0"></div>

          {/* Column 3 */}
          <div className="flex-1 py-4 md:py-0 px-6">
            <p className="text-mariana-light text-xl md:text-2xl" style={{ fontFamily: "'HelveticaNeue', 'Helvetica Neue', Helvetica, sans-serif" }}>
              <span style={{ fontWeight: 700 }} className="block">Tu marca presente</span>
              <span style={{ fontWeight: 400 }}>en cada uso</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
