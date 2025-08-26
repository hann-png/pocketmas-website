import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Gift, Palette, Calendar } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'Acrylic Keychains',
      description: 'Premium Malaysian-themed keychains with patriotic designs'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Postcards',
      description: 'Beautiful postcards celebrating Malaysia\'s heritage and culture'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'DIY Art',
      description: 'Design your art piece and display it'
    }
  ]

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-transparent to-red-900/70" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="flex justify-center mb-6">
              <img 
                src="https://i.postimg.cc/767MNN1k/pocketmaslogotr.png" 
                alt="Pocket Mas Logo" 
                className="h-20 md:h-24 w-auto object-contain"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              <span className="text-2xl md:text-4xl">Merdeka Day Specials</span>
            </h1>

            <p className="text-xl md:text-2xl text-black/90 mb-8 max-w-3xl mx-auto">
              Celebrate Malaysia's Independence Day with our exclusive collection of handcrafted keychains, postcards, and DIY art pieces.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link
                to="/event-info"
                className="inline-flex items-center px-8 py-4 backdrop-blur-lg bg-white/20 text-black font-semibold rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-200"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Event Details
              </Link>
            </div>

            <div className="mt-8 text-black/80">
              <p className="text-lg font-medium">📅 27 August 2025 • 🕐 10:00 AM - 5:00 PM • 📍 In-person sales only</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Special Collections
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover unique Malaysian-themed products crafted with love and patriotic spirit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group backdrop-blur-lg bg-white/20 rounded-2xl p-8 border border-white/30 hover:bg-white/30 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-lg bg-gradient-to-r from-blue-600/20 to-red-600/20 rounded-3xl p-12 border border-white/30 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ready to Celebrate Merdeka?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join us for an exclusive in-person shopping experience featuring the best of Malaysian-themed collectibles and DIY art.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Collection
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
