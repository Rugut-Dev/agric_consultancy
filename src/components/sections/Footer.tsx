import Link from 'next/link'
import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-green-200 md:flex-1">
            &copy; {new Date().getFullYear()} Jewell Farms & Consulting. All rights reserved.
          </div>

          {/* Quick Links and Contact Email */}
          <div className="flex items-center space-x-6 text-sm">
            <nav className="flex space-x-6">
              <Link href="/#" className="text-green-200 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/#" className="text-green-200 hover:text-white transition-colors">
                Privacy
              </Link>
            </nav>

            {/* Contact Email */}
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-green-200" />
              <a href="mailto:info@agroconsult.com" className="text-green-200 hover:text-white transition-colors">
                info@agroconsult.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
