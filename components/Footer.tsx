import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-mariana-dark py-10 px-10">
      <div className="max-w-[1400px] mx-auto text-center">
        <p className="text-mariana-gray text-sm">
          Hecho con{' '}
          <Link
            href="https://squarespace.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-mariana-light transition-colors"
          >
            Squarespace
          </Link>
        </p>
      </div>
    </footer>
  )
}
