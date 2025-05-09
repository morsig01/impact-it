import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-300 to-white text-black py-56">
        <div className="container mx-auto px-4">
          <h1 className="text-9xl font-bold mb-6">Impact-IT</h1>
          <p className="text-xl mb-40">Providing cutting-edge technology solutions for your needs.</p>
          <Link className="bg-white text-blue-800 px-8 py-3 font-semibold hover:bg-blue-50" href={'/equipment'}>
            Get Equipment Now
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="content-center bg-gray-100 text-black py-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-12 text-left">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Hardware Solutions</h3>
              <p>Premium computers, servers, and networking equipment for your business</p>
            </div>
            <div className="p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">IT Infrastructure</h3>
              <p>Complete infrastructure setup and maintenance services</p>
            </div>
            <div className="p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Technical Support</h3>
              <p>24/7 expert technical support and maintenance services</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
