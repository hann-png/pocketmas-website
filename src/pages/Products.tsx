import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, Filter } from 'lucide-react'

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'keychains', name: 'Acrylic Keychains' },
    { id: 'postcards', name: 'Postcards' },
    { id: 'diy-art', name: 'DIY Art' }
  ]

  const products = [
    {
      id: 1,
      name: 'Jalur Gemilang Keychain',
      category: 'keychains',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'RM 15 - 25',
      description: 'Premium acrylic keychain featuring the Malaysian flag design'
    },
    {
      id: 2,
      name: 'Petronas Twin Towers Keychain',
      category: 'keychains',
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'RM 18 - 28',
      description: 'Iconic twin towers silhouette in premium acrylic'
    },
    {
      id: 3,
      name: 'Hibiscus Flower Keychain',
      category: 'keychains',
      image: 'https://images.unsplash.com/photo-1597149960419-0d90ac2e3db4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'RM 12 - 22',
      description: 'Beautiful hibiscus design representing Malaysia\'s national flower'
    },
    {
      id: 4,
      name: 'Merdeka Heritage Postcard Set',
      category: 'postcards',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'RM 8 - 15',
      description: 'Set of 5 postcards featuring Malaysian historical landmarks'
    },
    {
      id: 5,
      name: 'Cultural Diversity Postcards',
      category: 'postcards',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'RM 10 - 18',
      description: 'Celebrating Malaysia\'s multicultural heritage'
    },
    {
      id: 6,
      name: 'Traditional Food Postcards',
      category: 'postcards',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'RM 6 - 12',
      description: 'Delicious Malaysian cuisine illustrations'
    },
    {
      id: 7,
      name: 'Paint Your Malaysia Canvas',
      category: 'diy-art',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'RM 25 - 45',
      description: 'DIY canvas kit with Malaysian themes and QR display feature'
    },
    {
      id: 8,
      name: 'Batik Pattern Art Kit',
      category: 'diy-art',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'RM 30 - 50',
      description: 'Create your own batik-inspired artwork with guided templates'
    },
    {
      id: 9,
      name: 'Malaysian Wildlife Coloring Set',
      category: 'diy-art',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      price: 'RM 20 - 35',
      description: 'Educational coloring set featuring Malaysian animals'
    }
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
            Discover our exclusive Merdeka Day collection featuring handcrafted keychains, beautiful postcards, and interactive DIY art pieces
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
