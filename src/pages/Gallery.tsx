import React, { useState } from 'react'
import { X, Heart, Star, Eye } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Artworks' },
    { id: 'keychains', name: 'Keychains' },
    { id: 'postcards', name: 'Postcards' },
    { id: 'diy-art', name: 'DIY Art' },
    { id: 'customer-creations', name: 'Customer Creations' }
  ]

  const galleryItems = [
    {
      id: 1,
      title: 'Jalur Gemilang Collection',
      category: 'keychains',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Beautiful Malaysian flag-themed keychains in various sizes',
      likes: 124,
      featured: true
    },
    {
      id: 2,
      title: 'Heritage Postcards',
      category: 'postcards',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Vintage-style postcards featuring Malaysian landmarks',
      likes: 89,
      featured: false
    },
    {
      id: 3,
      title: 'Petronas Towers Keychain',
      category: 'keychains',
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Iconic twin towers design in premium acrylic',
      likes: 156,
      featured: true
    },
    {
      id: 4,
      title: 'DIY Batik Canvas',
      category: 'diy-art',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Customer-created batik pattern artwork',
      likes: 203,
      featured: true
    },
    {
      id: 5,
      title: 'Cultural Diversity Set',
      category: 'postcards',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Celebrating Malaysia\'s multicultural heritage',
      likes: 78,
      featured: false
    },
    {
      id: 6,
      title: 'Hibiscus Garden',
      category: 'keychains',
      image: 'https://images.unsplash.com/photo-1597149960419-0d90ac2e3db4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'National flower design in vibrant colors',
      likes: 142,
      featured: false
    },
    {
      id: 7,
      title: 'Customer Art: My Malaysia',
      category: 'customer-creations',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Beautiful customer creation showcasing Malaysian wildlife',
      likes: 267,
      featured: true
    },
    {
      id: 8,
      title: 'Traditional Food Art',
      category: 'diy-art',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'DIY artwork featuring Malaysian cuisine',
      likes: 95,
      featured: false
    },
    {
      id: 9,
      title: 'Merdeka Spirit',
      category: 'customer-creations',
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Customer\'s patriotic artwork celebrating independence',
      likes: 189,
      featured: true
    }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  const featuredItems = galleryItems.filter(item => item.featured)

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of handcrafted products and amazing customer creations celebrating Malaysia's rich heritage and culture
          </p>
        </div>

        {/* Featured Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
            <Star className="w-6 h-6 mr-2 text-yellow-500" />
            Featured Artworks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="group backdrop-blur-lg bg-white/20 rounded-2xl overflow-hidden border border-white/30 hover:bg-white/30 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center space-x-2 text-white">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">View</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 capitalize">
                      {item.category.replace('-', ' ')}
                    </span>
                    <div className="flex items-center text-red-500">
                      <Heart className="w-4 h-4 mr-1" />
                      <span className="text-sm">{item.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="backdrop-blur-lg bg-white/20 rounded-2xl p-6 border border-white/30">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Browse by Category</h3>
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group backdrop-blur-lg bg-white/20 rounded-2xl overflow-hidden border border-white/30 hover:bg-white/30 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.featured && (
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1 text-sm">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 capitalize">
                    {item.category.replace('-', ' ')}
                  </span>
                  <div className="flex items-center text-red-500">
                    <Heart className="w-3 h-3 mr-1" />
                    <span className="text-xs">{item.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              
              {(() => {
                const item = galleryItems.find(item => item.id === selectedImage)
                return item ? (
                  <div className="backdrop-blur-lg bg-white/10 rounded-2xl overflow-hidden border border-white/20">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">
                          {item.title}
                        </h3>
                        {item.featured && (
                          <span className="px-3 py-1 bg-yellow-500 text-white text-sm font-bold rounded-full flex items-center">
                            <Star className="w-4 h-4 mr-1" />
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-gray-200 mb-4">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 capitalize">
                          Category: {item.category.replace('-', ' ')}
                        </span>
                        <div className="flex items-center text-red-400">
                          <Heart className="w-5 h-5 mr-2" />
                          <span>{item.likes} likes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null
              })()}
            </div>
          </div>
        )}

        {/* No items message */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No artworks found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Gallery
