import React from "react";
import hospitable from "../assets/hospitable.jpeg";
import ownerrez from "../assets/ownerrez.png";
import hostaway from "../assets/hostaway.png";
import enso from "../assets/enso.jpeg";
import hostfull from "../assets/hostfull.jpeg";
import guestly from "../assets/guestly.png";
import breezeway from "../assets/breezeway.jpeg";
import airbnb from "../assets/airbnb.jpeg";
import vrbo from "../assets/vrbo.png";
import booking from "../assets/booking.png";

const Marquee = () => {
  const logos = [
    hospitable,
    ownerrez,
    hostaway,
    enso,
    hostfull,
    guestly,
    breezeway,
    airbnb,
    vrbo,
    booking,
  ];

  return (
    <div className="relative w-full overflow-hidden bg-white py-6">
      {/* Track */}
      <div className="flex w-max animate-marquee">
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="mx-8 flex items-center">
            <img
              src={logo}
              alt={`Company ${index}`}
              className="h-32 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
