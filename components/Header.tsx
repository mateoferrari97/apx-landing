import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header
      style={{ position: 'absolute', top: 0, left: 0, zIndex: 50, padding: '20px 40px' }}
    >
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt="APX"
          width={350}
          height={147}
          className="brightness-0 invert"
        />
      </Link>
    </header>
  )
}
