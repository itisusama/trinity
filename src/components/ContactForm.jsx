import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(""); // success or error message

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" }); // clear error as user types
  };

  // Validate form fields
  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setStatus("Sending...");
      const response = await fetch("https://trinity-send.vercel.app/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({
          fullName: "",
          companyName: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Server error. Please try later.");
    }
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 text-sm w-full"
      >
        {/* Full Name */}
        <div className="w-full">
          <label className="text-black/70" htmlFor="fullName">
            Full Name
          </label>
          <input
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="h-12 p-3 mt-2 w-full border border-gray-300 rounded-md outline-none focus:border-[#157682]"
            type="text"
          />
          {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
        </div>

        {/* Company Name */}
        <div className="w-full">
          <label className="text-black/70" htmlFor="companyName">
            Company Name
          </label>
          <input
            id="companyName"
            value={formData.companyName}
            onChange={handleChange}
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
            value={formData.phone}
            onChange={handleChange}
            className="h-12 p-3 mt-2 w-full border border-gray-300 rounded-md outline-none focus:border-[#157682]"
            type="tel"
          />
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div className="w-full">
          <label className="text-black/70" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="h-12 p-3 mt-2 w-full border border-gray-300 rounded-md outline-none focus:border-[#157682]"
            type="email"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        {/* Subject */}
        <div className="w-full">
          <label className="text-black/70" htmlFor="subject">
            Subject
          </label>
          <input
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            className="h-12 p-3 mt-2 w-full border border-gray-300 rounded-md outline-none focus:border-[#157682]"
            type="text"
          />
          {errors.subject && <p className="text-red-500">{errors.subject}</p>}
        </div>

        {/* Message */}
        <div className="w-full">
          <label className="text-black/70" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full mt-2 p-3 h-40 border border-gray-300 rounded-md resize-none outline-none focus:border-[#157682]"
          ></textarea>
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="border border-[#157682] text-[#157682] cursor-pointer px-4 h-12 rounded-md mt-4 hover:bg-[#157682] hover:text-white transition"
        >
          Send Message
        </button>
      </form>

      {/* Status message */}
      {status && <p className="mt-4 text-center">{status}</p>}
    </section>
  );
};

export default ContactForm;