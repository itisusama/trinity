import React from "react";

const ContactForm = () => {
  return (
    <section>
      <form className="flex flex-col gap-5 text-sm w-full">
        {/* Full Name */}
        <div className="w-full">
          <label className="text-black/70" htmlFor="fullName">
            Full Name
          </label>
          <input
            id="fullName"
            className="h-12 p-3 mt-2 w-full border border-gray-300 rounded-md outline-none focus:border-[#157682]"
            type="text"
            required
          />
        </div>

        {/* Company Name */}
        <div className="w-full">
          <label className="text-black/70" htmlFor="companyName">
            Company Name
          </label>
          <input
            id="companyName"
            className="h-12 p-3 mt-2 w-full border border-gray-300 rounded-md outline-none focus:border-[#157682]"
            type="text"
          />
        </div>

        {/* Phone */}
        <div className="w-full">
          <label className="text-black/70" htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            className="h-12 p-3 mt-2 w-full border border-gray-300 rounded-md outline-none focus:border-[#157682]"
            type="tel"
            required
          />
        </div>

        {/* Email */}
        <div className="w-full">
          <label className="text-black/70" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            className="h-12 p-3 mt-2 w-full border border-gray-300 rounded-md outline-none focus:border-[#157682]"
            type="email"
            required
          />
        </div>

        {/* Subject */}
        <div className="w-full">
          <label className="text-black/70" htmlFor="subject">
            Subject
          </label>
          <input
            id="subject"
            className="h-12 p-3 mt-2 w-full border border-gray-300 rounded-md outline-none focus:border-[#157682]"
            type="text"
            required
          />
        </div>

        {/* Message */}
        <div className="w-full">
          <label className="text-black/70" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full mt-2 p-3 h-40 border border-gray-300 rounded-md resize-none outline-none focus:border-[#157682]"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="border border-[#157682] text-[#157682] cursor-pointer px-4 h-12 rounded-md mt-4 hover:bg-[#157682] hover:text-white transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
