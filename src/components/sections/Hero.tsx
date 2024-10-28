'use client'

import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('') // State for email input
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    // Handle hash change
    if (window.location.hash === '#waitlist') {
      const input = document.querySelector<HTMLInputElement>('#email-input');
      input?.focus();
    }
  }, []);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 14); // 2 weeks from now

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Handle form submission logic (e.g., send email to the server)
      console.log('Email submitted:', email)
      setEmailSubmitted(true) // Set submitted state to true
    }
  }

  // Add handleLearnMore function
  const handleLearnMore = () => {
    const element = document.querySelector('#about-us');
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section id="waitlist" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50"
        style={{
          backgroundImage: "url('/images/hero-bg6.jpg')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.6)"
        }}
      ></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Heading, Subheading, and Buttons */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block bg-green-400/20 text-green-300 border border-green-400/30 text-sm font-semibold px-4 py-1.5 rounded-full backdrop-blur-sm">
              Coming Soon - {timeLeft}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg">
              Cultivating Success in <span className="text-green-300">Modern Agriculture</span>
            </h1>
            <p className="text-xl text-green-100 drop-shadow-lg">
              Expert guidance for sustainable farming solutions, tailored to grow your agricultural business.
            </p>

            {/* Email Form */}
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                id="email-input"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500 text-gray-900 text-lg w-full sm:w-auto"
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all transform hover:translate-y-1 hover:shadow-lg flex items-center justify-center"
              >
                Join the Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>

            {/* Conditional Success Message */}
            {emailSubmitted && (
              <p className="text-green-200 mt-4">Thank you! You&apos;ve been added to the waitlist.</p>
            )}

            {/* Secondary CTA Button */}
            <button 
              onClick={handleLearnMore}
              className="bg-transparent hover:bg-white/10 text-white border border-white px-8 py-3 rounded-lg text-lg font-semibold transition-all transform hover:translate-y-1 hover:shadow-lg"
            >
              Learn More
            </button>
          </div>

          {/* Right Side - Expertise Section */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">Our Expertise</h2>
              <ul className="space-y-3">
                {['Sustainable Agriculture', 'Advanced Water Management', 'Precision Crop Optimization', 'Agri-Market Insights'].map(
                  (item, index) => (
                    <li key={index} className="flex items-center text-white">
                      <svg
                        className="h-5 w-5 mr-3 text-green-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
