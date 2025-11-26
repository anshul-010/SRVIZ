import React from 'react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { TopPackages } from './components/TopPackages'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Itinerary } from './components/Itinerary'
import { AddOnVip } from './components/AddOnVip'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { MessageCircle } from 'lucide-react'
import { F1 } from './components/F1'

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <Navbar />

      <HeroSection />
      <div className="relative mb-56">
        <div className="absolute left-1/2 -translate-x-1/2 w-[90vw] -top-15">
          <F1 />
        </div>
      </div>

      <TopPackages />
      <WhyChooseUs />

      <Itinerary />

      <AddOnVip />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <p className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition transform hover:scale-110 z-50">
        <MessageCircle size={28} />
      </p>
    </div>
  )
}

export default App