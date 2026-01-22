export default function Contact() {
  return (
    <section className="bg-mariana-gray py-20 px-10 md:px-20" style={{ fontFamily: 'Lato, sans-serif' }}>
      <div className="max-w-[1400px] mx-auto text-center">
        <h2 className="text-mariana-light text-2xl md:text-3xl lg:text-4xl font-semibold italic mb-10">
          Sumá un diferencial a tu concesionario
        </h2>
        <a
          href="https://wa.me/541154099073?text=Solicito%20m%C3%A1s%20informaci%C3%B3n..."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-mariana-light text-mariana-dark text-base md:text-lg px-8 py-4 rounded-full hover:bg-white transition-colors font-medium"
        >
          Contactanos
        </a>
      </div>
    </section>
  )
}
