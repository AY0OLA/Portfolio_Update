"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Linkedin, Github, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/AY0OLA",
      label: "GitHub Profile",
      color: "hover:text-gray-900",
      delay: 600,
    },
    {
      icon: Twitter,
      href: "https://x.com/ayooladav",
      label: "Twitter Profile",
      color: "hover:text-blue-400",
      delay: 800,
    },
    {
      icon: Mail,
      href: "ayoolaokunowo@gmail.com",
      label: "Send Email",
      color: "hover:text-red-500",
      delay: 1000,
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-white border-t border-gray-200 py-16">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left" data-aos="fade-right">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Okunowo David
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Backend developer crafting beautiful,scalable code, functional
              digital experiences with modern technologies and clean code.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-600 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                  data-aos="zoom-in"
                  data-aos-delay={social.delay}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center" data-aos="fade-up">
            <h4 className="text-lg font-semibold text-gray-900 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                    data-aos="fade-up"
                    data-aos-delay={100 * index}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right" data-aos="fade-left">
            <h4 className="text-lg font-semibold text-gray-900 mb-6">
              Get In Touch
            </h4>
            <div className="space-y-3 text-gray-600">
              <p className="font-medium">+234 815 636 7170</p>
              <p className="font-medium">ayoolaokunowo@gmail.com</p>
              <p className="text-sm">Nigeria</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p
              className="text-gray-600 text-center md:text-left"
              data-aos="fade-right"
            >
              &copy; {new Date().getFullYear()} Okunowo David. All rights
              reserved.
            </p>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-gray-500 hover:text-blue-600 transition-colors duration-300 text-sm font-medium"
            data-aos="fade-up"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
