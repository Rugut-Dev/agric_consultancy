import Link from 'next/link'
import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100 py-4 md:py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          {/* Copyright */}
          <div className="text-xs sm:text-sm text-green-200 order-3 sm:order-1">
            &copy; {new Date().getFullYear()} Jewell Farms & Consulting. All rights reserved.
          </div>

          {/* Quick Links */}
          <nav className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm order-1 sm:order-2">
            <Link href="/#" className="text-green-200 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/#" className="text-green-200 hover:text-white transition-colors">
              Privacy
            </Link>
          </nav>

          {/* Contact Email */}
          <div className="flex items-center space-x-2 text-xs sm:text-sm order-2 sm:order-3">
            <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-green-200" />
            <a href="mailto:info@agroconsult.com" className="text-green-200 hover:text-white transition-colors">
              info@agroconsult.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}