import React, { useState, useEffect } from 'react'
import { X, Calendar } from 'lucide-react'

interface CountdownBannerProps {
  onClose: () => void
}

const CountdownBanner: React.FC<CountdownBannerProps> = ({ onClose }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2025-08-27T10:00:00').getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative z-50 backdrop-blur-lg bg-gradient-to-r from-blue-600/90 to-red-600/90 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Calendar className="w-5 h-5" />
            <div className="flex items-center space-x-6">
              <span className="font-medium">Merdeka Day Event Countdown:</span>
              <div className="flex items-center space-x-4 text-sm">
                <div className="text-center">
                  <div className="font-bold text-lg">{timeLeft.days}</div>
                  <div className="text-xs opacity-90">Days</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg">{timeLeft.hours}</div>
                  <div className="text-xs opacity-90">Hours</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg">{timeLeft.minutes}</div>
                  <div className="text-xs opacity-90">Min</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg">{timeLeft.seconds}</div>
                  <div className="text-xs opacity-90">Sec</div>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1 rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="w-4 h-4" aria-hidden="true"/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CountdownBanner
