"use client";

import { Mail, Phone, MapPin, Send, User, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct mailto link
    const subject = encodeURIComponent(`New Inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`);
    
    window.location.href = `mailto:sales@bizupwings.com.cn?subject=${subject}&body=${body}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-20 bg-gray-100 p-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Get in Touch</h2>

        {/* Contact Details */}
        <div className="grid md:grid-cols-3 gap-6 mb-6 text-gray-700">
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-2 flex-col">
                <div className="flex gap-1 items-center">
                    <MapPin className="text-blue-600" />
                    <h4 className="font-semibold">SHANGHAI</h4>
                </div>
                <div>
                    <p>Room 402, No.46, Lane 606, Pingcheng Rd, Jiading District, Shanghai</p>
                </div>
            </div>
            <div className="flex gap-2 flex-col">
                <div className="flex gap-1 items-center">
                    <MapPin className="text-blue-600" /> 
                    <h4 className="font-semibold">INDIA</h4>
                </div>
                <div>
                    <p>India: 314 Krishna Mall,Dwarka, Sector 12, New Delhi. Zip Code: 110075</p>
                </div>
            </div>
            
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-green-600" />
            <div>
              <h4 className="font-semibold">Call Us</h4>
              <p>China: +86 15317936268</p>
              <p>Ind: +91 8178484331</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-red-600" />
            <div className="">
              <h4 className="font-semibold">Email</h4>
              <p>sales@bizupwings.com.cn</p>
              <p>sources2004@yahoo.co.in</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 flex items-center border border-gray-300 rounded-md p-3">
              <User className="text-gray-500 mr-2" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full focus:outline-none"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="flex-1 flex items-center border border-gray-300 rounded-md p-3">
              <Mail className="text-gray-500 mr-2" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full focus:outline-none"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center border border-gray-300 rounded-md p-3">
            <MessageSquare className="text-gray-500 mr-2" />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full focus:outline-none h-24"
              required
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            <Send className="mr-2" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

