import About from '@/components/general/About'
import Contact from '@/components/general/Contact'
import Hero from '@/components/general/Hero'
import Works from '@/components/general/Works'
import React from 'react'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Works />
      <Contact />
    </div>
  )
}
