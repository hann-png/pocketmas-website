// Shared specifications by category
export const categorySpecs = {
  keychains: {
    features: [
      'Vibrant colors',
      'Lightweight and durable',
      'Smooth, polished finish',
      'Patriotic Malaysian design',
      'Perfect gift for Merdeka Day'
    ],
    materials: ['Premium Acrylic', 'Stainless Steel Ring'],
    size: ['4.1cm x 5.8cm'],
    care: [
      'Clean with soft, damp cloth',
      'Avoid harsh chemicals',
      'Store in dry place',
      'Handle with care to prevent scratches'
    ]
  },
  postcards: {
    features: [
      'High-quality colouring',
      'Vibrant color printing',
      'Standard postcard size',
      'Malaysian cultural themes',
      'Collectible series design',
      'Original printed postcards'
    ],
    materials: ['Glossy postcards', 'Bright Ink', 'Matte Lamination'],
    size: ['10.5cm x 14.8cm'],
    care: [
      'Keep away from direct sunlight',
      'Store in protective sleeves',
      'Avoid bending or folding',
      'Handle with clean, dry hands'
    ]
  },
  'diy-art': {
    features: [
      'Complete DIY art kit included',
      'digital display',
      'Educational Malaysian themes',
      'All skill levels welcome',
      'Interactive learning experience'
    ],
    materials: ['Canvas/Paper', 'Non-toxic Paints', 'Brushes & Tools', 'QR Display Code'],
    size: ['Small Kit (A4 size)', 'Medium Kit (A3 size)', 'Large Kit (A2 size)'],
    care: [
      'Allow paint to dry completely',
      'Store in cool, dry place',
      'Keep paints sealed when not in use',
      'Clean brushes after each use'
    ]
  }
}

// Individual product data with unique names, descriptions, and prices
export const products = [
  {
    id: 1,
    name: 'Chinese Cat',
    category: 'keychains',
    images: [
      'https://i.postimg.cc/vm3tXTXj/chinese-cat.jpg',
    ],
    price: 'RM 5.90',
    description: 'A charming cat in traditional Chinese attire, a tiny keepsake of culture and luck.',
    longDescription: 'This adorable cat keychain is dressed in traditional Chinese attire, blending cuteness with cultural heritage. Symbolizing luck and festivity, it makes a charming keepsake that celebrates the beauty of tradition in a playful way.'
  },
  {
    id: 2,
    name: 'Malay Cat',
    category: 'keychains',
    images: [
      'https://i.postimg.cc/0Q4dR4T0/malay-cat.jpg'
    ],
    price: 'RM 5.90',
    description: 'A playful cat in traditional Malay attire, symbolizing joy and cultural heritage.',
    longDescription: 'This adorable cat keychain is dressed in traditional Malay attire, blending cuteness with cultural heritage. Symbolizing joy and festivity, it makes a charming keepsake that celebrates the beauty of tradition in a playful way.'
  },
  {
    id: 3,
    name: 'Indian Cat',
    category: 'keychains',
    images: [
      'https://i.postimg.cc/xjkBJV1Y/indian-cat.jpg'
    ],
    price: 'RM 5.90',
    description: 'A charming cat in traditional Indian attire, symbolizing cultural diversity and festivity.',
    longDescription: 'This adorable cat keychain is dressed in traditional Indian attire, blending cuteness with cultural heritage. Symbolizing diversity and celebration, it makes a charming keepsake that honors the beauty of tradition in a playful way.'
  },
  {
    id: 4,
    name: 'Iban Cat',
    category: 'keychains',
    images: [
      'https://i.postimg.cc/yxShVPB4/iban-cat.jpg'
    ],
    price: 'RM 5.90',
    description: 'A charming cat in traditional Iban attire, symbolizing cultural heritage and festivity.',
    longDescription: 'This adorable cat keychain is dressed in traditional Iban attire, blending cuteness with cultural heritage. Symbolizing diversity and celebration, it makes a charming keepsake that honors the beauty of tradition in a playful way.'
  },
  {
    id: 5,
    name: 'Nyonya Cat',
    category: 'keychains',
    images: [
      'https://i.postimg.cc/7b83b2YC/nyonya-cat.jpg'
    ],
    price: 'RM 5.90',
    description: 'A charming cat in traditional Nyonya attire, symbolizing cultural heritage and festivity.',
    longDescription: 'This adorable cat keychain is dressed in traditional Nyonya attire, blending cuteness with cultural heritage. Symbolizing diversity and celebration, it makes a charming keepsake that honors the beauty of tradition in a playful way.'
  },
  {
    id: 6,
    name: 'Masjid Jamek',
    category: 'postcards',
    images: [
      'https://i.postimg.cc/ZRs91Szw/Masjid-Jamek.jpg'
    ],
    price: 'RM 11.90',
    description: 'Masjid Jamek, where graceful domes and minarets meet the heart of Kuala Lumpur’s history.',
    longDescription: 'This postcard captures the stunning architecture of Masjid Jamek, one of Kuala Lumpur’s oldest mosques. With its iconic domes and serene surroundings, it’s a perfect representation of the city’s rich cultural heritage.'
  },
  {
    id: 7,
    name: 'Kuala Lumpur Skyline',
    category: 'postcards',
    images: [
      'https://i.postimg.cc/jq9wctX5/Kuala-Lumpur-Skyline.jpg'
    ],
    price: 'RM 11.90',
    description: 'A stunning view of the Kuala Lumpur skyline, showcasing the city’s modern architecture.',
    longDescription: 'This postcard captures the breathtaking skyline of Kuala Lumpur, featuring iconic landmarks like the Petronas Twin Towers and Menara Kuala Lumpur. It’s a perfect memento for anyone who loves the vibrant city life and modern architecture.'
  },
  {
    id: 8,
    name: 'Bunga Raya',
    category: 'postcards',
    images: [
      'https://i.postimg.cc/x8WX13CH/Bunga-Raya.jpg'
    ],
    price: 'RM 11.90',
    description: 'A vibrant depiction of the national flower of Malaysia, symbolizing beauty and unity.',
    longDescription: 'This postcard features the stunning Bunga Raya, Malaysia’s national flower. With its bold colors and intricate details, it’s a perfect representation of the country’s rich natural heritage and cultural significance.'
  },
  {
    id: 9,
    name: 'Melacca Batik',
    category: 'postcards',
    images: [
      'https://i.postimg.cc/dty7SpH9/Melacca-Batik-Art.jpg'
    ],
    price: 'RM 11.90',
    description: 'A beautiful representation of Melacca’s famous batik art, showcasing intricate patterns and vibrant colors.',
    longDescription: 'This postcard features a stunning piece of Melacca’s batik art, known for its intricate patterns and vibrant colors. It’s a perfect memento for anyone who appreciates the beauty of traditional Malaysian craftsmanship.'
  },
  {
    id: 10,
    name: 'Petaling Street',
    category: 'postcards',
    images: [
      'https://i.postimg.cc/FzffvB9N/Petaling-Street.jpg'
    ],
    price: 'RM 11.90',
    description: 'A beautiful representation of Petaling Street, showcasing its vibrant culture and bustling atmosphere.',
    longDescription: 'This postcard features a stunning view of Petaling Street, known for its lively markets and rich cultural heritage. It’s a perfect memento for anyone who appreciates the vibrancy of Kuala Lumpur’s street life.'
  },
]

// Helper function to get product with specifications
export const getProductWithSpecs = (productId: number) => {
  const product = products.find(p => p.id === productId)
  if (!product) return null
  
  const specs = categorySpecs[product.category as keyof typeof categorySpecs]
  return {
    ...product,
    ...specs
  }
}

// Helper function to get all products for display
export const getProductsForDisplay = () => {
  return products.map(product => ({
    ...product,
    image: product.images[0] // Use first image for display
  }))
}
