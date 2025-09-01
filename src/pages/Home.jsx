import React from 'react'
import heroImage from '../assets/hero.jpeg'
import ServicesCards from '../components/ServicesCards'
import { assets } from '../assets/assets'
import { Users, Layers, Settings, TrendingUp } from "lucide-react";
import AboutSection from '../components/AboutSection';
import Banner from '../components/Banner';
import Marquee from '../components/Marqee';
import { useNavigate } from 'react-router-dom';
import { services } from "../data/ServicesData";
import TestimonialsMarquee from '../components/TestimonialsMarquee';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
    {/* Hero */}
    <div
  className="h-[500px] w-full bg-cover bg-center relative"
  style={{ backgroundImage: `url(${heroImage})`, backgroundSize: "cover" }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-16 lg:px-24">
    <h3 data-aos="fade-down" className="text-white text-shadow-lg/30 font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-lg max-w-2xl">
      Your Rental Business <br /> Managed Better
    </h3>

    <p data-aos="fade-up" className="text-white mt-4 text-base md:text-lg lg:text-xl max-w-xl leading-relaxed drop-shadow-md">
      Trained Virtual Assistants & Full-Service Outsourcing <br /> 
       for Stress-Free Hosting.
    </p>

    <div className="flex gap-4 mt-6">
  <button data-aos="fade-up" onClick={()=>navigate("/contact")} className="border border-white text-white cursor-pointer px-4 h-12 rounded-md hover:bg-white hover:text-[#157682] transition">
    Get a Free Consultation
  </button>
  {/* <button data-aos="fade-up" className="border border-white text-white cursor-pointer px-4 h-12 rounded-md hover:bg-white hover:text-[#157682] transition">
    Learn More
  </button> */}
</div>
  </div>
</div>

    {/* Hero */}
    {/* ABOUT */}
    <AboutSection/>
    {/* ABOUT */}
    {/* Our Services */}
    <div id="services" className='py-6 sm:py-8 lg:py-12 bg-[#f1f6f2] md:px-8'>
      <h2 className='font-bold text-6xl text-center mb-6 text-gray-600' data-aos="fade-down">Our <span className="bg-gradient-to-r from-[#157682] to-[#4fd1c5] bg-clip-text text-transparent">
            Services
          </span></h2>
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-9">
      {services.map((service) => (
        <ServicesCards
          key={service.id}
          id={service.id}
          heading={service.heading}
          icon={service.icon}
          imageUrl={service.imageUrl}
        />
      ))}
    </div>
      {/* Cards */}
    </div>
    {/* Our Services */}

    {/* why choose */}
<div className="relative bg-white px-8 py-16 overflow-hidden">
  {/* Decorative teal semi-circle */}
  <div className="absolute top-0 -right-5 w-64 h-64 bg-[#157682] rounded-l-full opacity-20 blur-3xl"></div>

  <h2
    className="font-bold text-6xl text-center mb-12 text-gray-600"
    data-aos="fade-down"
  >
    Why Choose{" "}
    <span className="bg-gradient-to-r from-[#157682] to-[#4fd1c5] bg-clip-text text-transparent">
      Trinity
    </span>
  </h2>

  <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
    <div data-aos="zoom-in" className="flex items-start gap-4">
      <div className="bg-blue-100 text-blue-600 p-3 rounded-2xl shadow-sm">
        <Users size={28} />
      </div>
      <div>
        <h3 className="font-semibold text-lg">Real People, Real Results</h3>
        <p className="text-gray-600 text-sm">
          We’re not a faceless call center. We’re a team of STR professionals
          passionate about hospitality and results.
        </p>
      </div>
    </div>

    <div data-aos="zoom-in" className="flex items-start gap-4">
      <div className="bg-green-100 text-green-600 p-3 rounded-2xl shadow-sm">
        <Layers size={28} />
      </div>
      <div>
        <h3 className="font-semibold text-lg">Platform Agnostic</h3>
        <p className="text-gray-600 text-sm">
          Whether you're on Hostaway, OwnerRez, or something else, we adapt to
          your systems, not the other way around.
        </p>
      </div>
    </div>

    <div data-aos="zoom-in" className="flex items-start gap-4">
      <div className="bg-purple-100 text-purple-600 p-3 rounded-2xl shadow-sm">
        <Settings size={28} />
      </div>
      <div>
        <h3 className="font-semibold text-lg">Customizable Plans</h3>
        <p className="text-gray-600 text-sm">
          No cookie-cutter packages. Every client’s needs are different; we
          tailor our solutions to fit your property goals.
        </p>
      </div>
    </div>

    <div data-aos="zoom-in" className="flex items-start gap-4">
      <div className="bg-orange-100 text-orange-600 p-3 rounded-2xl shadow-sm">
        <TrendingUp size={28} />
      </div>
      <div>
        <h3 className="font-semibold text-lg">Growth-Oriented Partnership</h3>
        <p className="text-gray-600 text-sm">
          We’re not just managers, we’re collaborators. Our goal is to grow
          alongside you and treat your assets like our own.
        </p>
      </div>
    </div>
  </div>
</div>
{/* why choose */}


    {/* Marqee */}
    <h2 className="text-center w-full text-6xl font-bold mb-6 text-gray-600" data-aos="fade-down">
        Our <span className="bg-gradient-to-r from-[#157682] to-[#4fd1c5] bg-clip-text text-transparent">
    Platforms
  </span>
      </h2>
      <Marquee />
    {/* Marqee */}

    {/* Banner */}
    <Banner/>
    {/* Banner */}

    {/* Testimonial Marquee */}
    <TestimonialsMarquee />
    {/* Testimonial Marquee */}

    </>
  )
}

export default Home
