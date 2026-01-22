import type { Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'mariana. | Moda lenta hecha en pequeños lotes',
  description: 'Descubre nuestra nueva colección limitada. Moda lenta y sostenible hecha en pequeños lotes.',
  keywords: ['moda lenta', 'slow fashion', 'colección limitada', 'zapatos artesanales', 'tacones'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${cormorant.variable} m-0 p-0`}>
      <body className="font-cormorant text-mariana-light text-lg antialiased bg-mariana-dark m-0 p-0 w-full min-w-full">
        {children}
      </body>
    </html>
  )
}
