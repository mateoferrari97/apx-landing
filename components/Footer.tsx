import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-mariana-dark py-16 px-10 md:px-20">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h3
            className="text-mariana-light text-3xl md:text-4xl uppercase tracking-wide mb-6"
            style={{ fontFamily: "'HelveticaNeue-BoldCond', 'Helvetica Neue', Helvetica, sans-serif" }}
          >
            Contacto
          </h3>
          <div
            className="text-mariana-light/80 text-sm md:text-base space-y-2"
            style={{ fontFamily: "'HelveticaNeue', 'Helvetica Neue', Helvetica, sans-serif", fontWeight: 400 }}
          >
            <p className="flex items-center justify-center md:justify-start gap-3">
              <Image
                src="/images/Iconos footer/Teléfono.svg"
                alt="Phone"
                width={20}
                height={20}
                className="w-5 h-5 flex-shrink-0"
              />
              +54 9 11-3148-9751
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3">
              <Image
                src="/images/Iconos footer/Mail.svg"
                alt="Email"
                width={20}
                height={20}
                className="w-5 h-5 flex-shrink-0"
              />
              info@apxsupply.com.ar
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3">
              <Image
                src="/images/Iconos footer/Ubic.svg"
                alt="Location"
                width={20}
                height={20}
                className="w-5 h-5 flex-shrink-0"
              />
              Buenos Aires, Argentina
            </p>
          </div>
        </div>

        {/* Logo */}
        <div className="w-56 md:w-80 mx-auto md:mx-0">
          <Image
            src="/images/logo-white.svg"
            alt="APX - Equipamiento Premium Automotor"
            width={250}
            height={80}
            className="w-full h-auto"
          />
        </div>
      </div>
    </footer>
  )
}
