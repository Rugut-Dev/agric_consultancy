'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Sprout, Droplet, Sun, TrendingUp } from 'lucide-react'

const services = [
  { icon: Sprout, title: "Sustainable Agriculture", description: "Adopt eco-friendly farming techniques that prioritize environmental conservation and long-term productivity." },
  { icon: Droplet, title: "Advanced Water Management", description: "Innovative irrigation solutions to conserve water and improve crop health." },
  { icon: Sun, title: "Precision Crop Optimization", description: "Harness the power of data and analytics to boost crop yields and enhance efficiency." },
  { icon: TrendingUp, title: "Agri-Market Insights", description: "Leverage real-time market trends to stay competitive and grow your agricultural business." },
]

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="about-us" className="py-24 bg-gradient-to-b from-white via-green-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-green-100/50 bg-grid-16 -z-10" />
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-extrabold mb-6 text-green-900">Shaping the Future of Agriculture</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            With deep-rooted expertise and innovative approaches, we partner with farmers globally to build resilient, sustainable, and data-driven agricultural practices.
          </p>
        </div>

        {/* Services Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <Card key={index} className={`transition-transform transform-gpu duration-1000 delay-${index * 150} ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10'}`}>
              <CardContent className="p-8 text-center">
                <service.icon className="w-12 h-12 text-green-700 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-green-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Commitment Section */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold mb-6 text-green-900">Our Commitment to Excellence</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We are committed to fostering a more sustainable and prosperous future for agriculture. By merging traditional farming wisdom with cutting-edge technology, we deliver solutions tailored to your farm's unique challenges and opportunities.
          </p>
        </div>
      </div>
    </section>
  )
}
