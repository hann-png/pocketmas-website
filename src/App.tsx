import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import ScanDisplay from './pages/ScanDisplay'
import EventInfo from './pages/EventInfo'
import Contact from './pages/Contact'
import CountdownBanner from './components/CountdownBanner'

function App() {
  const [showCountdown, setShowCountdown] = useState(true)

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 font-inter">
        <div className="fixed inset-0 bg-gradient-to-br from-blue-100/20 via-white/10 to-red-100/20 pointer-events-none" />
        
        {showCountdown && <CountdownBanner onClose={() => setShowCountdown(false)} />}
        <Header />
        
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/scan-display" element={<ScanDisplay />} />
            <Route path="/event-info" element={<EventInfo />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App
