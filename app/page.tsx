import Image from 'next/image'
import Link from 'next/link'
import { Server, Network, HeadphonesIcon } from 'lucide-react'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r text-black pt-20">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-9xl font-bold mb-6">Impact-IT</h1>
            <p className="text-xl mb-40">Providing cutting-edge technology solutions for your needs.</p>
            <Link className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-neutral-800" href={'/equipment'}>
              Get Equipment Now
            </Link>
          </div>
          <div className="flex-1 relative">
            <Image
              src="/image-placeholder.png"
              alt="IT Solutions"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="content-center text-black py-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-12 text-left">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 hover:bg-amber-100 rounded-2xl">
              <Server className="w-12 h-12 mb-8" />
              <h3 className="text-xl font-bold mb-6">Hardware Solutions</h3>
              <p className="mb-8">Premium computers, servers, and networking equipment for your business</p>
              <Link href="/" className="text-blue-600 hover:underline">Learn More →</Link>
            </div>
            <div className="p-6 bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 hover:bg-amber-100 rounded-2xl">
              <Network className="w-12 h-12 mb-8" />
              <h3 className="text-xl font-bold mb-6">IT Infrastructure</h3>
              <p className="mb-8">Complete infrastructure setup and maintenance services</p>
              <Link href="/" className="text-blue-600 hover:underline">Learn More →</Link>
            </div>
            <div className="p-6 bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 hover:bg-amber-100 rounded-2xl">
              <HeadphonesIcon className="w-12 h-12 mb-8" />
              <h3 className="text-xl font-bold mb-6">Technical Support</h3>
              <p className="mb-8">24/7 expert technical support and maintenance services</p>
              <Link href="/" className="text-blue-600 hover:underline">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}