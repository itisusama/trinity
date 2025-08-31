import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative bg-gray-50 py-16 overflow-hidden"
    >
      {/* Decorative teal circle */}
      <div className="absolute top-0 -right-5 w-64 h-full bg-[#157682] rounded-l-full opacity-20 blur-3xl"></div>

      <div className="max-w-full mx-auto px-6 lg:px-12">
        {/* Heading */}
        <h1
          className="text-4xl md:text-6xl font-extrabold text-center text-gray-600"
          data-aos="fade-down"
        >
          About
          <span className="bg-gradient-to-r ml-2 from-[#157682] to-[#4fd1c5] bg-clip-text text-transparent">
            Trinity
          </span>
        </h1>

        {/* Content */}
        <div className="mt-12 flex flex-col md:flex-row items-center gap-12">
          {/* Right Text */}
          <div data-aos="fade-up" className="flex-1 lg:px-12 text-md leading-relaxed text-gray-700 space-y-6">
            <p>
              Every great business starts with a simple idea. At{" "}
              <span className="font-semibold text-gray-900">
                Trinity Asset Care
              </span>
              , ours was this: every property has hidden potential, and with the
              right care, it can become so much more than just a place to stay.
            </p>

            <p>
              We began as a small, passionate team who understood two things
              very well <span className="font-semibold">technology</span> and{" "}
              <span className="font-semibold">hospitality</span>. We saw how
              overwhelming it could be for property owners to juggle guest
              communication, bookings, cleaning schedules, and pricing
              strategies while still trying to provide a memorable guest
              experience. That’s when we realized: what if we could take the
              burden off their shoulders and turn hosting into something
              effortless, profitable, and enjoyable?
            </p>

            <p>
              From that vision,{" "}
              <span className="font-semibold">Trinity Asset Care</span> was born.
              Today, we’re a nimble, tech-savvy startup dedicated to
              transforming ordinary rentals into standout guest magnets.
            </p>

            <p>
              By combining the power of leading OTAs Airbnb, Booking.com, and
              VRBO with best-in-class PMS tools like Hostaway, Guesty,
              Hospitable, Hostfully, OwnerRez, and Monday.com, we’ve built a
              system that blends the efficiency of automation with the warmth of
              human touch.
            </p>

            <h2 className="text-4xl font-bold">Our <span className="bg-gradient-to-r from-[#157682] to-[#4fd1c5] bg-clip-text text-transparent">
            Mission
          </span></h2>

            <p className="border-l-4 border-[#157682] pl-4 text-gray-900">
              Our mission is simple: to help you unlock your property’s full
              potential while delivering unforgettable experiences to your
              guests. Hosting should never feel stressful—it should feel
              rewarding. And that’s exactly what we’re here to make happen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
