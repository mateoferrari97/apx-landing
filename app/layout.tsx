import type { Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const helveticaBoldCond = localFont({
  src: '../public/fonts/new/HelveticaNeue-BoldCond.otf',
  variable: '--font-helvetica-bold-cond',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'APX Supply',
  description: 'Equipamiento Premium Automotor. Alfombras premium a medida para concesionarios.',
  keywords: ['alfombras automotor', 'equipamiento premium', 'concesionarios', 'alfombras a medida'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${cormorant.variable} ${helveticaBoldCond.variable} m-0 p-0`}>
      <body className="font-cormorant text-mariana-light text-lg antialiased bg-mariana-dark m-0 p-0 w-full min-w-full">
        {children}
      </body>
    </html>
  )
}
