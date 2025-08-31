import React from 'react'
import TestimonialsMarquee from '../components/TestimonialsMarquee';
import WorldMap from '../components/WorldMap';
import StatsCounter from '../components/StatsCounter';

const Testimonial = () => {
  return (
    <>
     <div className="bg-gradient-to-r from-white via-white to-blue-50 py-16 text-center">
      {/* Section Label */}
      <p data-aos="fade-down" className="uppercase tracking-widest text-xl text-gray-500 mb-4 mt-12">
        Our Impact
      </p>

      {/* Main Heading */}
      <h2 data-aos="fade-down" className="text-3xl md:text-6xl font-bold text-gray-600">
        Trusted by homeowners{" "}
        <span className="bg-gradient-to-r from-[#157682] to-[#4fd1c5] bg-clip-text text-transparent">worldwide</span>
      </h2>

      <WorldMap />

      <div data-aos="fade-up" className='mt-16'>
        <StatsCounter />
      </div>
    <div className='mt-8'>
      <TestimonialsMarquee />
    </div>

    </div>
    </>
  )
}

export default Testimonial
