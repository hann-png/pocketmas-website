import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, Filter } from 'lucide-react'

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'keychains', name: 'Keychains' },
    { id: 'postcards', name: 'Postcards' },
  ]

  const products = [
    {
      id: 1,
      name: 'Chinese Cat',
      category: 'keychains',
      image: 'https://i.postimg.cc/vm3tXTXj/chinese-cat.jpg',
      price: 'RM 5.90',
      description: 'A charming cat in traditional Chinese attire, a tiny keepsake of culture and luck.'
    },
    {
      id: 2,
      name: 'Malay Cat',
      category: 'keychains',
      image: 'https://i.postimg.cc/0Q4dR4T0/malay-cat.jpg',
      price: 'RM 5.90',
      description: 'A playful cat in traditional Malay attire, symbolizing joy and cultural heritage.'
    },
    {
      id: 3,
      name: 'Indian Cat',
      category: 'keychains',
      image: 'https://i.postimg.cc/xjkBJV1Y/indian-cat.jpg',
      price: 'RM 5.90',
      description: 'A graceful cat in traditional Indian attire, embodying elegance and cultural richness.'
    },
        {
      id: 4,
      name: 'Iban Cat',
      category: 'keychains',
      image: 'https://i.postimg.cc/yxShVPB4/iban-cat.jpg',
      price: 'RM 5.90',
      description: 'A charming cat in traditional Iban attire, representing the rich cultural heritage of the Iban people.'
    },
        {
      id: 5,
      name: 'Nyonya Cat',
      category: 'keychains',
      image: 'https://i.postimg.cc/7b83b2YC/nyonya-cat.jpg',
      price: 'RM 5.90',
      description: 'A beautiful cat in traditional Nyonya attire, showcasing the rich cultural heritage of the Peranakan community.'
    },
    {
      id: 6,
      name: 'Masjid Jamek',
      category: 'postcards',
      image: 'https://i.postimg.cc/ZRs91Szw/Masjid-Jamek.jpg',
      price: 'RM 12',
      description: 'Masjid Jamek, where graceful domes and minarets meet the heart of Kuala Lumpur’s history.'
    },
    {
      id: 7,
      name: 'Kuala Lumpur Skyline',
      category: 'postcards',
      image: 'https://i.postimg.cc/jq9wctX5/Kuala-Lumpur-Skyline.jpg',
      price: 'RM 12',
      description: 'Kuala Lumpur’s skyline with twin towers and shining spires rising above a city where culture and modern dreams meet.'
    },
    {
      id: 8,
      name: 'Bunga Raya',
      category: 'postcards',
      image: 'https://i.postimg.cc/x8WX13CH/Bunga-Raya.jpg',
      price: 'RM 12',
      description: 'The vibrant bunga raya, a symbol of courage and Malaysia’s beauty in full bloom.'
    },
    {
      id: 9,
      name: 'Melacca Batik',
      category: 'postcards',
      image: 'https://i.postimg.cc/dty7SpH9/Melacca-Batik-Art.jpg',
      price: 'RM 12',
      description: 'Melacca Batik, a beautiful representation of traditional Malaysian art.'
    },
    {
      id: 10,
      name: 'Petaling Street',
      category: 'postcards',
      image: 'https://i.postimg.cc/FzffvB9N/Petaling-Street.jpg',
      price: 'RM 12',
      description: 'Petaling Street, a vibrant maze of colors, flavors, and the heartbeat of Kuala Lumpur’s culture.'
    },
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our exclusive Merdeka Day collection featuring handcrafted keychains and beautiful postcards
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="backdrop-blur-lg bg-white/20 rounded-2xl p-6 border border-white/30">
            <div className="flex items-center mb-4">
              <Filter className="w-5 h-5 text-gray-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Filter by Category</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-lg'
                      : 'bg-white/30 text-gray-700 hover:bg-white/40 border border-white/40'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group backdrop-blur-lg bg-white/20 rounded-2xl overflow-hidden border border-white/30 hover:bg-white/30 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    to={`/product/${product.id}`}
                    className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-800 rounded-lg hover:bg-white transition-colors"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Link>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-blue-600">
                    {product.price}
                  </span>
                  <Link
                    to={`/product/${product.id}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    See Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No products message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products
