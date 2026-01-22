import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Plataforma Terra',
    price: '129 €',
    image: '/images/1.jpg',
    alt: 'Plataforma Terra',
    link: '/shop/p/terra-chunk',
  },
  {
    id: 2,
    name: 'Tacones Naranja',
    price: '165 €',
    image: '/images/2.jpg',
    alt: 'Tacones Naranja',
    link: '/shop/p/naranja-heel',
  },
  {
    id: 3,
    name: 'Tacones Chiquita',
    price: '120 €',
    image: '/images/3.jpg',
    alt: 'Tacones Chiquita',
    link: '/shop/p/chiquita-wallet',
  },
]

export default function Products() {
  return (
    <section id="products" className="bg-primary py-20 px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="group">
              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover image-hover"
                />
              </div>

              {/* Product Info */}
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-h3 font-normal">{product.name}</h3>
                <span className="text-lg font-light">{product.price}</span>
              </div>

              {/* CTA */}
              <Link
                href={product.link}
                className="text-xs tracking-button uppercase underline-hover inline-block text-mariana-light"
              >
                Comprar ahora
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
