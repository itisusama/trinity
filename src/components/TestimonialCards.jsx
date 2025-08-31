import React from "react";

const TestimonialCards = ({ text, name, title, img }) => {
  return (
    <div className="flex-shrink-0 w-80 bg-white shadow-lg rounded-2xl p-6 border border-gray-100 flex flex-col justify-between">
  {/* Quote Icon */}
  <div className="text-3xl text-[#157682] mb-4">“</div>

  {/* Testimonial Text */}
  <p className="text-gray-700 leading-relaxed flex-grow">
    {text}
  </p>

  {/* Profile Section (Stays at Bottom) */}
  <div className="flex justify-between items-center mt-6">
    <div className="text-left">
      <h4 className="font-semibold text-gray-900">{name}</h4>
      <p className="text-gray-500 text-sm">{title}</p>
    </div>
    <img
      src={img}
      alt={name}
      className="w-12 h-12 rounded-full object-cover"
    />
  </div>
</div>

  );
};

export default TestimonialCards;