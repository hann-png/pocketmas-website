import React, { useState, useRef, useCallback } from 'react'
import { Camera, Upload, Play, Pause, SkipForward, SkipBack, X, QrCode } from 'lucide-react'

const ScanDisplay = () => {
  const [isScanning, setIsScanning] = useState(false)
  const [scannedImages, setScannedImages] = useState<string[]>([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isSlideshow, setIsSlideshow] = useState(false)
  const [manualUrl, setManualUrl] = useState('')
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const streamRef = useRef<MediaStream | null>(null)

  // Mock QR scanner - in real app, you'd use a proper QR code library
  const startScanning = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        streamRef.current = stream
        setIsScanning(true)
      }
    } catch (error) {
      console.error('Error accessing camera:', error)
      alert('Unable to access camera. Please use manual URL input.')
    }
  }, [])

  const stopScanning = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop())
      streamRef.current = null
    }
    setIsScanning(false)
  }, [])

  const simulateQRScan = () => {
    // Simulate scanning a QR code that contains an image URL
    const mockImageUrls = [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1597149960419-0d90ac2e3db4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
    
    const randomUrl = mockImageUrls[Math.floor(Math.random() * mockImageUrls.length)]
    setScannedImages(prev => [...prev, randomUrl])
    stopScanning()
  }

  const addManualUrl = () => {
    if (manualUrl.trim()) {
      setScannedImages(prev => [...prev, manualUrl.trim()])
      setManualUrl('')
    }
  }

  const removeImage = (index: number) => {
    setScannedImages(prev => prev.filter((_, i) => i !== index))
    if (currentImageIndex >= scannedImages.length - 1) {
      setCurrentImageIndex(Math.max(0, scannedImages.length - 2))
    }
  }

  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % scannedImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + scannedImages.length) % scannedImages.length)
  }

  // Auto-advance slideshow
  React.useEffect(() => {
    if (isSlideshow && scannedImages.length > 1) {
      const interval = setInterval(nextImage, 3000)
      return () => clearInterval(interval)
    }
  }, [isSlideshow, scannedImages.length])

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            DIY Art Session
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your DIY artworks will be displayed on the big screen after it is scanned and uploaded by us on that day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Scanner Section */}
          <div className="space-y-6">
            <div className="backdrop-blur-lg bg-white/20 rounded-2xl p-6 border border-white/30">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <QrCode className="w-6 h-6 mr-2 text-blue-600" />
                QR Code Scanner
              </h2>

              {!isScanning ? (
                <div className="text-center">
                  <div className="w-full h-64 bg-gray-100/50 rounded-xl flex items-center justify-center mb-6">
                    <div className="text-center">
                      <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">Camera preview will appear here</p>
                    </div>
                  </div>
                  <button
                    onClick={startScanning}
                    className="w-full bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold py-3 rounded-xl hover:from-blue-700 hover:to-red-700 transition-all duration-200"
                  >
                    Start Camera
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    className="w-full h-64 bg-black rounded-xl mb-6"
                  />
                  <canvas ref={canvasRef} className="hidden" />
                  <div className="flex space-x-4">
                    <button
                      onClick={simulateQRScan}
                      className="flex-1 bg-green-600 text-white font-semibold py-3 rounded-xl hover:bg-green-700 transition-colors"
                    >
                      Simulate Scan
                    </button>
                    <button
                      onClick={stopScanning}
                      className="flex-1 bg-gray-600 text-white font-semibold py-3 rounded-xl hover:bg-gray-700 transition-colors"
                    >
                      Stop Camera
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Manual URL Input */}
            <div className="backdrop-blur-lg bg-white/20 rounded-2xl p-6 border border-white/30">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Upload className="w-5 h-5 mr-2 text-blue-600" />
                Manual URL Input
              </h3>
              <div className="flex space-x-4">
                <input
                  type="url"
                  value={manualUrl}
                  onChange={(e) => setManualUrl(e.target.value)}
                  placeholder="Paste image URL here..."
                  className="flex-1 px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={addManualUrl}
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Add
                </button>
              </div>
            </div>

            {/* Scanned Images List */}
            {scannedImages.length > 0 && (
              <div className="backdrop-blur-lg bg-white/20 rounded-2xl p-6 border border-white/30">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Scanned Artworks ({scannedImages.length})
                </h3>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {scannedImages.map((url, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/30 rounded-lg">
                      <img
                        src={url}
                        alt={`Artwork ${index + 1}`}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <span className="flex-1 text-sm text-gray-700 truncate">
                        Artwork {index + 1}
                      </span>
                      <button
                        onClick={() => removeImage(index)}
                        className="p-1 text-red-500 hover:text-red-700 transition-colors"
                        title={`Remove Artwork ${index + 1}`}
                        aria-label={`Remove Artwork ${index + 1}`}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Display Section */}
          <div className="space-y-6">
            <div className="backdrop-blur-lg bg-white/20 rounded-2xl p-6 border border-white/30">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Artwork Display
                </h2>
                {scannedImages.length > 1 && (
                  <button
                    onClick={() => setIsSlideshow(!isSlideshow)}
                    className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                      isSlideshow
                        ? 'bg-red-600 text-white hover:bg-red-700'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    {isSlideshow ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                    {isSlideshow ? 'Stop' : 'Start'} Slideshow
                  </button>
                )}
              </div>

              {scannedImages.length > 0 ? (
                <div className="space-y-4">
                  <div className="relative">
                    <img
                      src={scannedImages[currentImageIndex]}
                      alt={`Artwork ${currentImageIndex + 1}`}
                      className="w-full h-96 object-cover rounded-xl"
                    />
                    {scannedImages.length > 1 && (
                      <div className="absolute inset-0 flex items-center justify-between p-4">
                        <button
                          onClick={prevImage}
                          className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                          title="Previous Artwork"
                          aria-label="Previous Artwork"
                        >
                          <SkipBack className="w-5 h-5" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                          title="Next Artwork"
                          aria-label="Next Artwork"
                        >
                          <SkipForward className="w-5 h-5" />
                        </button>
                      </div>
                    )}
                  </div>

                  {scannedImages.length > 1 && (
                    <div className="flex justify-center space-x-2">
                      {scannedImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentImageIndex
                              ? 'bg-blue-600'
                              : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                          title={`Go to artwork ${index + 1}`}
                          aria-label={`Go to artwork ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}

                  <div className="text-center">
                    <p className="text-gray-600">
                      Artwork {currentImageIndex + 1} of {scannedImages.length}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="w-full h-96 bg-gray-100/50 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Camera className="w-8 h-8 text-gray-500" />
                    </div>
                    <p className="text-gray-600">No artworks to display</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Scan a QR code or add an image URL to get started
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Instructions */}
            <div className="backdrop-blur-lg bg-blue-50/50 rounded-2xl p-6 border border-blue-200/30">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">How to Use</h3>
              <ul className="space-y-2 text-blue-700">
                <li className="flex items-start">
                  <span className="font-bold mr-2">1.</span>
                  <span>Use the camera to scan QR codes from your DIY artworks</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">2.</span>
                  <span>Or manually paste image URLs in the input field</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">3.</span>
                  <span>Your artworks will appear in the display area</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">4.</span>
                  <span>Use slideshow mode for automatic cycling through multiple artworks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScanDisplay
