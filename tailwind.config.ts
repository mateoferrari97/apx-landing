import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#353a3e',
        'mariana-dark': '#1a1a1a',
        'mariana-charcoal': '#222526',
        'mariana-gray': '#353a3e',
        'mariana-light': '#e0e0e0',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        lato: ['Lato', 'sans-serif'],
        'helvetica-bold-cond': ['var(--font-helvetica-bold-cond)', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
        'helvetica-neue': ['HelveticaNeue', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
      },
      fontSize: {
        'h1': 'clamp(36px, 5vw, 56px)',
        'h2': 'clamp(32px, 4vw, 48px)',
        'h3': '24px',
      },
      lineHeight: {
        'heading': '1.1',
        'heading-2': '1.2',
        'body': '1.7',
      },
      letterSpacing: {
        'logo': '0.02em',
        'heading': '0.01em',
        'button': '0.1em',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}

export default config
