import React from 'react'
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "../components/ContactForm";
import { assets } from '../assets/assets';

const Contact = () => {
  return (
     <div className="flex flex-col min-h-screen bg-gradient-to-r from-white via-white to-blue-50">

      {/* Main Content */}
      <main className="flex-grow">
        {/* Heading */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 mt-[7rem] text-center">
          <h1 data-aos="fade-down" className="text-4xl md:text-6xl font-bold mb-6 text-gray-600">
            We’re here to help you grow
          </h1>
          <p data-aos="fade-up" className="text-lg md:text-xl text-gray-500 leading-relaxed">
            Whether you're scheduling your first consultation or a follow-up
            strategy session, our appointments are key to building client
            relationships.
          </p>
        </section>

        {/* Grid Section */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 mt-[4rem] grid md:grid-cols-2 gap-10 items-center">
          {/* Contact Form */}
          <div data-aos="fade-right" className="bg-white shadow-lg rounded-2xl p-6 md:p-8">
            <ContactForm />
          </div>

          {/* Map Image */}
          <div className="w-full h-[500px]" data-aos="fade-left">
            <img
              src="https://cdn.prod.website-files.com/6736de2a05e13650764a2792/6739986ed2d3bd0a46385dc5_Vector.webp"
              alt="Map"
              className="object-cover"
            />
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="mx-auto px-6 md:px-12 lg:py-16 my-16 lg:mb-0 flex flex-wrap justify-center gap-6">
          {/* Phone */}
          <div data-aos="fade-up" className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
            <Phone className="w-10 h-10 text-[#157682] mb-4" />
            <h3 className="font-semibold text-xl mb-2">Phone</h3>
            <p className="text-gray-600">+1 (817) 532-4429</p>
          </div>

          {/* Email */}
          <div data-aos="fade-up" className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
            <Mail className="w-10 h-10 text-[#157682] mb-4" />
            <h3 className="font-semibold text-xl mb-2">Email</h3>
            <p className="text-gray-600">trinityassetcare@gmail.com</p>
          </div>

          {/* Visit Us */}
          <div data-aos="fade-up" className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
            <MapPin className="w-10 h-10 text-[#157682] mb-4" />
            <h3 className="font-semibold text-xl mb-2">Visit Us</h3>
            <p className="text-gray-600">2nd Floor, MM Tower, MM Alam, Lahore</p>
          </div>
          
          {/* Visit Us */}
          <div data-aos="fade-up" className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
            <MapPin className="w-10 h-10 text-[#157682] mb-4" />
            <h3 className="font-semibold text-xl mb-2">Visit Us</h3>
            <p className="text-gray-600">8 The Green, Suite B, Dover, 19901</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Contact