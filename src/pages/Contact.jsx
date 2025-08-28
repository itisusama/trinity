import React from 'react'
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "../components/ContactForm";
import USAMap from '../components/USAMap';

const Contact = () => {
  return (
     <div className="flex flex-col min-h-screen">

      {/* Main Content */}
      <main className="flex-grow">
        {/* Heading */}
        <section className="max-w-5xl mx-auto px-6 md:px-12 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            We’re here to help you grow
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Whether you're scheduling your first consultation or a follow-up
            strategy session, our appointments are key to building client
            relationships.
          </p>
        </section>

        {/* Grid Section */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 py-12 grid md:grid-cols-2 gap-10 items-center">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8">
            <ContactForm />
          </div>

          {/* Map Section */}
            <div className="w-full h-[400px]">
            <USAMap />
            </div>

        </section>

        {/* Contact Info Cards */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-3 gap-6">
          {/* Phone */}
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <Phone className="w-10 h-10 text-[#157682] mb-4" />
            <h3 className="font-semibold text-xl mb-2">Phone</h3>
            <p className="text-gray-600">+92 300 1234567</p>
          </div>

          {/* Email */}
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <Mail className="w-10 h-10 text-[#157682] mb-4" />
            <h3 className="font-semibold text-xl mb-2">Email</h3>
            <p className="text-gray-600">info@example.com</p>
          </div>

          {/* Visit Us */}
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <MapPin className="w-10 h-10 text-[#157682] mb-4" />
            <h3 className="font-semibold text-xl mb-2">Visit Us</h3>
            <p className="text-gray-600">123 Main Street, Lahore</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Contact