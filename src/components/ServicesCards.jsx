
export default function ServicesCards({ heading, para, icon }) {
  return (
    <section className="bg-white rounded-md shadow-lg p-6">
      <div className="flex gap-2 items-center">
        <div className="bg-[#13767c] rounded-full w-8 h-8 flex items-center justify-center">
          {icon}
        </div>
        <h2 className="font-bold">{heading}</h2>
      </div>
      <p className="mt-6">{para}</p>
    </section>
  );
}