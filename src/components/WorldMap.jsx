import React from "react";

const locations = [
  { name: "Pakistan", top: "52%", left: "72%" },
  { name: "USA", top: "45%", left: "22%" },
  { name: "Canada", top: "32%", left: "25%" },
  { name: "Puerto Rico (San Juan)", top: "58%", left: "32%" },
  { name: "UK", top: "35%", left: "54%" },
  { name: "Bulgaria", top: "42%", left: "58%" },
];

export default function WorldMap() {
  return (
    <div data-aos="fade-up" className="relative w-full flex flex-col items-center">
      <div className="relative w-full max-w-5xl mt-16">
        <img src="https://cdn.prod.website-files.com/6736de2a05e13650764a2792/6739986ed2d3bd0a46385dc5_Vector.webp" alt="World Map" className="w-full h-[470px]" />
        {locations.map((loc, index) => (
          <div
            key={index}
            className="absolute group"
            style={{ top: loc.top, left: loc.left, transform: "translate(-50%, -50%)" }}
          >
            <div className="w-4 h-4 bg-[#157682] rounded-full border-2 border-white shadow-lg cursor-pointer"></div>
            <div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-white text-gray-800 text-sm px-2 py-1 rounded shadow">
              {loc.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}