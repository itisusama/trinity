import React from 'react'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate();
  return (
    <section
      className="relative flex flex-col items-center justify-center mx-auto w-full text-center py-20 md:py-24 
                 bg-[url('https://res.cloudinary.com/dp5assqjg/image/upload/v1756280211/WhatsApp_Image_2025-08-27_at_10.00.33_AM_tfdiqv.jpg')] 
                 bg-cover bg-center bg-no-repeat"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-2xl md:text-3xl font-medium text-white max-w-2xl mx-auto">
          Hosting Made Effortless
        </h1>
        <p className="mt-4 text-sm md:text-base text-white max-w-xl mx-auto">
          Let Trinity Asset Care handle your rentals with expert management and smart automation so you enjoy higher profits and happier guests. Why wait? Let’s get started today!
        </p>
        <button onClick={()=>navigate("/contact")} className="bg-[#157682] cursor-pointer mt-6 text-white border border-[#157682] md:inline text-sm active:scale-95 transition-all w-40 h-11 rounded-md">
            Contact Us
        </button>
      </div>
    </section>
  )
}

export default Banner
