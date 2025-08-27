
export default function ServicesCards({ heading, imageUrl, icon }) {
  return (
<section
  className="relative rounded-md shadow-xl overflow-hidden group w-full h-56 cursor-pointer transition-transform duration-500"
  style={{
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Gradient overlay */}
  <div className="absolute transition inset-0 bg-black/50"></div>

  {/* Content at bottom */}
  <div className="absolute bottom-0 left-0 right-0 z-10 p-5 flex items-center gap-4 
                  group-hover:bg-black/60 transition">
    {/* Icon with glow */}
    <div className="border border-white rounded-md w-12 h-12 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    {/* Heading */}
    <h2 className="font-bold text-white text-xl group-hover:translate-x-2 transition-transform duration-300">
      {heading}
    </h2>
  </div>
</section>

  );
}