import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Star, Package, Palette, Shield, Heart } from 'lucide-react'

const ProductDetail = () => {
  const { id } = useParams()
  const [selectedImage, setSelectedImage] = useState(0)

  // Mock product data - in real app, this would come from an API
  const product = {
    id: parseInt(id || '1'),
    name: 'Jalur Gemilang Keychain',
    category: 'Acrylic Keychains',
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1597149960419-0d90ac2e3db4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    priceRange: 'RM 15 - 25',
    description: 'Celebrate Malaysia\'s independence with our premium Jalur Gemilang keychain. Crafted from high-quality acrylic with vibrant colors that capture the essence of our national flag. Perfect for Merdeka Day celebrations and as a patriotic accessory.',
    longDescription: 'This exclusive keychain features the iconic Malaysian flag design with meticulous attention to detail. Each piece is carefully crafted using premium acrylic materials that ensure durability and long-lasting color vibrancy. The design incorporates the traditional red, white, blue, and yellow colors of the Jalur Gemilang, making it a perfect symbol of Malaysian pride.',
    materials: ['Premium Acrylic', 'Stainless Steel Ring', 'UV-Resistant Coating'],
    sizes: ['Small (3cm x 2cm)', 'Medium (4cm x 3cm)', 'Large (5cm x 4cm)'],
    care: [
      'Clean with soft, damp cloth',
      'Avoid harsh chemicals',
      'Store in dry place',
      'Handle with care to prevent scratches'
    ],
    features: [
      'Vibrant, fade-resistant colors',
      'Lightweight and durable',
      'Smooth, polished finish',
      'Patriotic Malaysian design',
      'Perfect gift for Merdeka Day'
    ]
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/products"
          className="inline-flex items-center mb-8 text-blue-600 hover:text-blue-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="backdrop-blur-lg bg-white/20 rounded-2xl p-4 border border-white/30">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === index
                      ? 'border-blue-600 ring-2 ring-blue-200'
                      : 'border-white/30 hover:border-blue-400'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="backdrop-blur-lg bg-white/20 rounded-2xl p-8 border border-white/30">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-blue-100/50 text-blue-700 rounded-full text-sm font-medium">
                  {product.category}
                </span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {product.name}
              </h1>

              <p className="text-2xl font-bold text-blue-600 mb-6">
                {product.priceRange}
              </p>

              <p className="text-gray-600 mb-6">
                {product.description}
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">Handcrafted with love in Malaysia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Package className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Available at our Merdeka Day event</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Premium quality guarantee</span>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="backdrop-blur-lg bg-white/20 rounded-2xl p-6 border border-white/30">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Palette className="w-5 h-5 mr-2 text-blue-600" />
                Key Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Materials */}
          <div className="backdrop-blur-lg bg-white/20 rounded-2xl p-6 border border-white/30">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Materials</h3>
            <ul className="space-y-2">
              {product.materials.map((material, index) => (
                <li key={index} className="text-gray-600">• {material}</li>
              ))}
            </ul>
          </div>

          {/* Sizes */}
          <div className="backdrop-blur-lg bg-white/20 rounded-2xl p-6 border border-white/30">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Available Sizes</h3>
            <ul className="space-y-2">
              {product.sizes.map((size, index) => (
                <li key={index} className="text-gray-600">• {size}</li>
              ))}
            </ul>
          </div>

          {/* Care Instructions */}
          <div className="backdrop-blur-lg bg-white/20 rounded-2xl p-6 border border-white/30">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Care Instructions</h3>
            <ul className="space-y-2">
              {product.care.map((instruction, index) => (
                <li key={index} className="text-gray-600">• {instruction}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Long Description */}
        <div className="mt-12 backdrop-blur-lg bg-white/20 rounded-2xl p-8 border border-white/30">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">About This Product</h3>
          <p className="text-gray-600 leading-relaxed">
            {product.longDescription}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="backdrop-blur-lg bg-gradient-to-r from-blue-600/20 to-red-600/20 rounded-2xl p-8 border border-white/30">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Available at Our Merdeka Day Event
            </h3>
            <p className="text-gray-600 mb-6">
              Visit us on 27 August 2024 for exclusive in-person shopping experience
            </p>
            <Link
              to="/event-info"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Event Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
