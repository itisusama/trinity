
export default function ServicesCards({ heading, imageUrl, icon }) {
  return (
    <section 
  className="relative bg-white rounded-2xl shadow-xl overflow-hidden group w-full h-48 cursor-pointer transition-transform duration-300 hover:scale-105"
  style={{
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
>
  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

  {/* Content */}
  <div className="relative z-10 p-6 flex flex-col gap-4 justify-center h-full">
    <div className="flex gap-3 items-center">
      <div className="bg-[#13767c] rounded-full w-10 h-10 flex items-center justify-center text-white shadow-md">
        {icon}
      </div>
      <h2 className="font-bold text-white text-lg">{heading}</h2>
    </div>
  </div>
</section>

  );
}