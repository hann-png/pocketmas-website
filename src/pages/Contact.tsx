import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, Instagram, Facebook, Twitter } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 🔹 Replace with your Google Form action URL (must end with /formResponse)
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdpe_LQZINfbW7DZr4pHgU8PVh6lhMNP0z-mG5-SzRt9hsVAQ/formResponse"

    // 🔹 Map your Google Form entry IDs here
    const formDataToSend = new FormData()
    formDataToSend.append("entry.2005620554", formData.name)     // Name
    formDataToSend.append("entry.1045781291", formData.email)    // Email
    formDataToSend.append("entry.839337160", formData.message)   // Message

    try {
      await fetch(formUrl, {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors"
      })

      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000)
    } catch (error) {
      console.error("Form submission error:", error)
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our products or the Merdeka Day event? We'd love to hear from you! Get in touch and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="backdrop-blur-lg bg-white/20 rounded-2xl p-8 border border-white/30">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-100/50 border border-green-200/50 rounded-xl">
                <p className="text-green-700 font-medium">
                  ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your inquiry, questions about products, event details, or any other message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold rounded-xl transition-all duration-200 ${
                  isSubmitting
                    ? 'opacity-70 cursor-not-allowed'
                    : 'hover:from-blue-700 hover:to-red-700 hover:shadow-lg hover:transform hover:-translate-y-1'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="backdrop-blur-lg bg-white/20 rounded-2xl p-8 border border-white/30">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Instagram</h3>
                    <p className="text-gray-600">@pocketmas_apu</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">+60 18-988 0932</p>
                    <p className="text-sm text-gray-500">Available during business hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Event Location</h3>
                    <p className="text-gray-600">Asia Pacific University of Technology & Innovation (APU)</p>
                    <p className="text-sm text-gray-500">University in Kuala Lumpur, Malaysia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Mon - Fri: 9:00 AM - 5:00 PM</p>
                    <p className="text-sm text-gray-500">Malaysian Standard Time (MST)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="backdrop-blur-lg bg-white/20 rounded-2xl p-8 border border-white/30">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Follow Us</h2>
              <p className="text-gray-600 mb-6">
                Stay updated with our latest products, event announcements, and behind-the-scenes content.
              </p>
              
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/pocketmas_apu/"
                  className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-200"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

            {/* FAQ */}
            <div className="backdrop-blur-lg bg-blue-50/50 rounded-2xl p-8 border border-blue-200/30">
              <h2 className="text-2xl font-semibold text-blue-800 mb-6">Quick Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">When is the event?</h3>
                  <p className="text-blue-700 text-sm">27 August 2025, 10:00 AM - 5:00 PM</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">Can I buy online?</h3>
                  <p className="text-blue-700 text-sm">No, all sales are in-person only at our event location.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">What payment methods do you accept?</h3>
                  <p className="text-blue-700 text-sm">We accept cash and QR payments only.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">How does the DIY Art display work?</h3>
                  <p className="text-blue-700 text-sm">Your drawn artwork will be scanned by us and showcased on the large screens at the event.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
