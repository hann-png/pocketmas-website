import React from 'react'
import { Calendar, Clock, MapPin, Users, Gift, Camera, Star } from 'lucide-react'

const EventInfo = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Merdeka Day Event
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for an exclusive in-person shopping experience celebrating Malaysia's Independence Day with handcrafted products and interactive DIY art displays
          </p>
        </div>

        {/* Event Details Card */}
        <div className="backdrop-blur-lg bg-gradient-to-br from-blue-600/20 to-red-600/20 rounded-3xl p-8 md:p-12 border border-white/30 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Date</h3>
              <p className="text-gray-600">27 August 2024</p>
              <p className="text-sm text-gray-500">Malaysia Independence Day</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Time</h3>
              <p className="text-gray-600">10:00 AM - 6:00 PM</p>
              <p className="text-sm text-gray-500">8 hours of celebration</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-600">In-Person Only</p>
              <p className="text-sm text-gray-500">Venue details via contact</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Format</h3>
              <p className="text-gray-600">Physical Event</p>
              <p className="text-sm text-gray-500">No online sales</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-12">
          <div className="backdrop-blur-lg bg-white/20 rounded-2xl p-8 border border-white/30">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <MapPin className="w-6 h-6 mr-2 text-blue-600" />
              Event Location
            </h2>
            
            {/* Placeholder for map - in real app, you'd use Google Maps or similar */}
            <div className="w-full h-96 bg-gray-100/50 rounded-xl flex items-center justify-center mb-6">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg font-medium">Interactive Map</p>
                <p className="text-gray-500">Exact location will be shared with registered attendees</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Getting There</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>🚗 Ample parking available</li>
                  <li>🚌 Public transport accessible</li>
                  <li>🚶‍♂️ Walking distance from main attractions</li>
                  <li>♿ Wheelchair accessible venue</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Nearby Landmarks</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>📍 Central shopping district</li>
                  <li>📍 Cultural heritage sites</li>
                  <li>📍 Food courts and restaurants</li>
                  <li>📍 Tourist information center</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Event Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="backdrop-blur-lg bg-white/20 rounded-2xl p-6 border border-white/30">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Exclusive Products</h3>
            <p className="text-gray-600">
              Shop our complete collection of Merdeka-themed keychains, postcards, and DIY art kits available only at this special event.
            </p>
          </div>

          <div className="backdrop-blur-lg bg-white/20 rounded-2xl p-6 border border-white/30">
            <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-4">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">DIY Art Display</h3>
            <p className="text-gray-600">
              Experience our interactive "Scan & Display" feature where your DIY artworks can be showcased on large screens for everyone to admire.
            </p>
          </div>

          <div className="backdrop-blur-lg bg-white/20 rounded-2xl p-6 border border-white/30">
            <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Special Offers</h3>
            <p className="text-gray-600">
              Enjoy exclusive Merdeka Day discounts, bundle deals, and limited-edition items available only during the event.
            </p>
          </div>
        </div>

        {/* Important Notice */}
        <div className="backdrop-blur-lg bg-red-50/50 rounded-2xl p-8 border border-red-200/30 mb-12">
          <h2 className="text-2xl font-semibold text-red-800 mb-4">Important Notice</h2>
          <div className="space-y-4 text-red-700">
            <p className="flex items-start">
              <span className="font-bold mr-2">⚠️</span>
              <span><strong>In-Person Sales Only:</strong> All products are available exclusively at our physical event location. No online purchases or deliveries are available.</span>
            </p>
            <p className="flex items-start">
              <span className="font-bold mr-2">💰</span>
              <span><strong>Cash & Card Accepted:</strong> We accept both cash payments and major credit/debit cards for your convenience.</span>
            </p>
            <p className="flex items-start">
              <span className="font-bold mr-2">📱</span>
              <span><strong>Bring Your Phone:</strong> Don't forget your smartphone to use our Scan & Display feature for DIY artworks!</span>
            </p>
          </div>
        </div>

        {/* Schedule */}
        <div className="backdrop-blur-lg bg-white/20 rounded-2xl p-8 border border-white/30 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Event Schedule</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-white/30 rounded-xl">
              <div className="w-20 text-center">
                <div className="text-lg font-bold text-blue-600">10:00</div>
                <div className="text-sm text-gray-600">AM</div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">Event Opens</h3>
                <p className="text-gray-600">Welcome visitors, product showcase begins</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-white/30 rounded-xl">
              <div className="w-20 text-center">
                <div className="text-lg font-bold text-blue-600">12:00</div>
                <div className="text-sm text-gray-600">PM</div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">DIY Art Workshop</h3>
                <p className="text-gray-600">Interactive session for creating and displaying artworks</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-white/30 rounded-xl">
              <div className="w-20 text-center">
                <div className="text-lg font-bold text-blue-600">15:00</div>
                <div className="text-sm text-gray-600">PM</div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">Merdeka Celebration</h3>
                <p className="text-gray-600">Special patriotic activities and photo opportunities</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-white/30 rounded-xl">
              <div className="w-20 text-center">
                <div className="text-lg font-bold text-blue-600">18:00</div>
                <div className="text-sm text-gray-600">PM</div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">Event Closes</h3>
                <p className="text-gray-600">Final purchases and farewell</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="backdrop-blur-lg bg-gradient-to-r from-blue-600/20 to-red-600/20 rounded-2xl p-8 border border-white/30">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Need More Information?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us for venue details, special requests, or any questions about the event
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventInfo
