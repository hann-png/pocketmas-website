import React from 'react'
import { QrCode, Smartphone, Camera, Monitor, Palette, Gift, MapPin} from 'lucide-react'
import ScrollToTopLink from '../components/ScrollToTopLink'

const ScanDisplay = () => {
  const steps = [
    {
      id: 1,
      title: "Find the DIY section",
      description: "Find the DIY section of our booth and get a seat at the table.",
      image: "https://i.postimg.cc/qq6MPXcv/booth.jpg",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Create Your Artwork",
      description: "There will be templates and colouring tools available so feel free to create your own patriotic designs.",
      image: "https://i.postimg.cc/q7QRy7M4/art.jpg",
      icon: <Palette className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Upload your Artwork",
      description: "Locate the man in the photo and he will assist you in uploading your artwork.",
      image: "https://i.postimg.cc/d1xVNSyf/Ian.jpg",
      icon: <Camera className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Display on Big Screen",
      description: "Once your artwork is uploaded, it will be displayed on the big screen for everyone to see.",
      image: "https://i.postimg.cc/qRR7Ldzn/display.jpg",
      icon: <Monitor className="w-6 h-6" />
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            How DIY Art Display Works
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Transform your handcrafted Malaysian-themed artwork into a digital showcase experience. Follow these simple steps to display your creation on any screen.
          </p>
        </div>

        {/* Step-by-Step Guide */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                  
                  {/* Step Number Badge */}
                  <div className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-r from-blue-600 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.id}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 w-full">
                <div className="backdrop-blur-lg bg-white/20 rounded-2xl p-8 border border-white/30 h-full">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-red-600 rounded-xl text-white mr-4">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                      {step.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Progress Indicator */}
                  <div className="mt-8">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                      <span>Step {step.id} of {steps.length}</span>
                      <span>{Math.round((step.id / steps.length) * 100)}% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-red-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(step.id / steps.length) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="backdrop-blur-lg bg-gradient-to-r from-blue-600/20 to-red-600/20 rounded-2xl p-12 border border-white/30">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Want to take a look at our Products?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Take a look using the link below or visit us at our booth to learn more about our products.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="backdrop-blur-lg bg-blue-50/30 rounded-xl p-6 border border-blue-200/30">
                <h4 className="font-semibold text-blue-800 mb-2">📅 Event Date</h4>
                <p className="text-blue-700">27 August 2025</p>
              </div>
              <div className="backdrop-blur-lg bg-red-50/30 rounded-xl p-6 border border-red-200/30">
                <h4 className="font-semibold text-red-800 mb-2">🕐 Time</h4>
                <p className="text-red-700">10:00 AM - 5:00 PM</p>
              </div>
              <div className="backdrop-blur-lg bg-yellow-50/30 rounded-xl p-6 border border-yellow-200/30">
                <h4 className="font-semibold text-yellow-800 mb-2">📍 Sales</h4>
                <p className="text-yellow-700">In-person only</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ScrollToTopLink
                to="/products"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View Products
              </ScrollToTopLink>
              <ScrollToTopLink
                to="/contact"
                className="inline-flex items-center px-8 py-4 backdrop-blur-lg bg-white/20 text-gray-800 font-semibold rounded-xl border border-white/40 hover:bg-white/40 transition-all duration-200"
              >
                Contact Us
              </ScrollToTopLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScanDisplay
