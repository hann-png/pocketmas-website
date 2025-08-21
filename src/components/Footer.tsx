import React from 'react'
import { Link } from 'react-router-dom'
import {SiInstagram, SiFacebook, SiX } from 'react-icons/si'
import {Star, Mail} from "lucide-react"

const Footer = () => {
  return (
    <footer className="relative mt-20 backdrop-blur-lg bg-white/10 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-red-600 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                POCKETMAS
              </span>
            </Link>
            <p className="text-gray-600 mb-4 max-w-md">
              Celebrating Malaysia's independence with exclusive handcrafted keychains, postcards, and DIY art collections. Join us for our special in-person event on 27 August.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200">
                <SiInstagram className="w-5 h-5 text-gray-600" />
              </a>
              <a href="#" aria-label="Facebook" className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200">
                <SiFacebook className="w-5 h-5 text-gray-600" />
              </a>
              <a href="#" aria-label="Twitter" className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200">
                <SiX className="w-5 h-5 text-gray-600" />
              </a>
              <a href="#" aria-label="Email" className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200">
                <Mail className="w-5 h-5 text-gray-600" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-600 hover:text-blue-600 transition-colors">Products</Link></li>
              <li><Link to="/event-info" className="text-gray-600 hover:text-blue-600 transition-colors">Event Info</Link></li>
              <li><Link to="/gallery" className="text-gray-600 hover:text-blue-600 transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Event Info */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Event Details</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>📅 27 August 2024</li>
              <li>🕐 10:00 AM - 6:00 PM</li>
              <li>📍 In-person sales only</li>
              <li>🎨 DIY Art Display</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-gray-600">
          <p>&copy; 2024 POCKETMAS. All rights reserved. Celebrating Malaysia's Independence Day.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
