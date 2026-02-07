export default function Contact() {
  return (
    <section className="bg-white py-20 px-10 md:px-20">
      <div className="max-w-[1400px] mx-auto text-center">
        <h2
          className="text-mariana-dark text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide mb-4"
          style={{ fontFamily: "'HelveticaNeue-BoldCond', 'Helvetica Neue', Helvetica, sans-serif" }}
        >
          Sumá un diferencial a tu concesionario
        </h2>
        <p
          className="text-mariana-dark text-xl md:text-2xl mb-10"
          style={{ fontFamily: "'HelveticaNeue', 'Helvetica Neue', Helvetica, sans-serif", fontWeight: 700 }}
        >
          Fidelizá a tus clientes con un producto de calidad.
        </p>
        <a
          href="https://wa.me/5491150975248?text=Hola!%20Me%20interesa%20saber%20sobre%20sus%20productos"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-helvetica-bold-cond bg-mariana-dark text-mariana-light text-xl md:text-2xl px-10 py-3 rounded-lg hover:bg-black transition-colors uppercase tracking-wide"
        >
          Contactanos
        </a>
      </div>
    </section>
  )
}
