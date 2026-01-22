'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
    }
  }

  return (
    <section id="newsletter" className="bg-mariana-charcoal py-20 px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/images/back.jpg"
              alt="Newsletter background"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-mariana-light text-[36px] font-normal mb-4">
              Mantente al día.
            </h2>
            <p className="text-mariana-light font-light mb-8">
              Recibe una notificación cuando esté disponible nuestra próxima colección.
            </p>

            {isSubmitted ? (
              <p className="text-mariana-light text-xl">¡Gracias!</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-b border-mariana-light text-mariana-light py-2 px-0 flex-1 placeholder:text-mariana-gray"
                  required
                />
                <button
                  type="submit"
                  className="text-mariana-light text-xs tracking-button uppercase border border-mariana-light px-6 py-3 hover:bg-mariana-light hover:text-mariana-dark transition-colors"
                >
                  Suscribirse
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
