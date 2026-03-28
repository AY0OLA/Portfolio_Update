"use client";

import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

const initialForm = {
  user_name: "",
  user_email: "",
  message: "",
};

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    if (PUBLIC_KEY) {
      emailjs.init(PUBLIC_KEY);
    } else {
      console.warn("Missing EmailJS public key");
    }
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY,
      );

      setStatus("success");
      setFormData(initialForm);
      formRef.current?.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const socialLinks = [
    {
      icon: FaTwitter,
      url: "https://x.com/ayooladav",
    },
    {
      icon: FaGithub,
      url: "https://github.com/AY0OLA",
    },
  ];

  const contactMethods = [
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+234 815 636 7170",
      action: () => window.open("https://wa.me/2348156367170", "_blank"),
      color: "text-green-500",
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "ayoolaokunowo@gmail.com",
      action: () => (window.location.href = "mailto:ayoolaokunowo@gmail.com"),
      color: "text-red-500",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Nigeria",
      color: "text-blue-500",
    },
  ];

  const statusMessage = {
    loading: "Sending...",
    success: "Message sent!",
    error: "Something went wrong. Try again.",
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-gray-50">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 px-6">
        {/* LEFT */}
        <div data-aos="fade-right" className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold">Let's Work Together</h2>
            <p className="text-gray-600 mt-4">
              Have a project or idea? Let’s build something great.
            </p>
          </div>

          <div className="grid gap-4">
            {contactMethods.map((item, i) => (
              <div
                key={i}
                onClick={item.action}
                className={`flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border ${item.action && "cursor-pointer hover:scale-105"}`}
              >
                <item.icon className={`text-xl ${item.color}`} />
                <div>
                  <p className="font-semibold">{item.label}</p>
                  <p className="text-gray-600 text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            {socialLinks.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white rounded-lg shadow"
              >
                <item.icon />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <form
          id="contactForm"
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Message *
            </label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project, timeline, and any specific requirements..."
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-vertical"
            />
          </div>
          <button
            type="submit"
            disabled={status.type === "loading"}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span className="flex items-center justify-center gap-3">
              <FaEnvelope className="w-5 h-5" />
              {status.type === "loading" ? "Sending..." : "Send"}
            </span>
          </button>
          {status.type === "success" && (
            <div className="text-center text-green-600 font-medium mt-2">
              {status.text}
            </div>
          )}{" "}
          {status.type === "error" && (
            <div className="text-center text-red-600 font-medium mt-2">
              {status.text}
            </div>
          )}
          {status.type === "loading" && (
            <div className="text-center text-gray-600 font-medium mt-2">
              {status.text}
            </div>
          )}{" "}
          <p className="text-sm text-gray-500 text-center mt-4">
            Your message will be sent directly to my email for a quick response.
          </p>
        </form>
      </div>
    </section>
  );
}
