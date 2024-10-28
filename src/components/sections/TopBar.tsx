'use client'
import Link from 'next/link'
import { Leaf } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function TopBar() {
  const handleWaitlistClick = () => {
    const element = document.querySelector('#waitlist');
    const input = document.querySelector<HTMLInputElement>('#email-input');
    element?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => input?.focus(), 800);
  }

  return (
    <header className="w-full py-4 fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-sm border-b border-green-100">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-green-800 hover:text-green-700 transition-colors">
          <Leaf className="h-6 w-6" />
          <span className="text-xl font-semibold">Jewell Farms & Consulting</span>
        </Link>
        <nav>
          <Button variant="outline" className="font-medium" onClick={handleWaitlistClick}>
            Join Waitlist
          </Button>
        </nav>
      </div>
    </header>
  )
}
