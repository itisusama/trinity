import React from "react";
import testimonials from "../data/testimonials";
import TestimonialCards from "./TestimonialCards";

const TestimonialsMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden py-10">
      {/* Fade Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      {/* Marquee Container */}
      <div className="flex gap-4 animate-testimonial-marquee">
        {testimonials.map((item, i) => (
          <TestimonialCards
            key={i}
            text={item.text}
            name={item.name}
            title={item.title}
            img={item.img}
          />
        ))}

        {/* Duplicate for seamless loop */}
        {testimonials.map((item, i) => (
          <TestimonialCards
            key={`dup-${i}`}
            text={item.text}
            name={item.name}
            title={item.title}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsMarquee;
