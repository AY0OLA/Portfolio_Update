"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const technologies = [
    {
      img: "./react.svg",
      name: "React",
      color:
        "bg-blue-50 text-blue-800 border-blue-100 dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-800",
    },
    {
      img: "./next.svg",
      name: "Next.js",
      color:
        "bg-indigo-50 text-indigo-800 border-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-200 dark:border-indigo-800",
    },
    {
      img: "./typescript-icon.svg",
      name: "TypeScript",
      color:
        "bg-cyan-50 text-cyan-800 border-cyan-100 dark:bg-cyan-900/30 dark:text-cyan-200 dark:border-cyan-800",
    },
    {
      img: "./tailwind.webp",
      name: "Tailwind CSS",
      color:
        "bg-amber-50 text-amber-800 border-amber-100 dark:bg-amber-900/30 dark:text-amber-200 dark:border-amber-800",
    },
    {
      img: "./javascript.svg",
      name: "JavaScript",
      color:
        "bg-teal-50 text-teal-800 border-teal-100 dark:bg-teal-900/30 dark:text-teal-200 dark:border-teal-800",
    },
    {
      img: "./python.webp",
      name: "python",
      color:
        "bg-emerald-50 text-emerald-800 border-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-200 dark:border-emerald-800",
    },
    {
      img: "./django.webp",
      name: "Django",
      color:
        "bg-green-50 text-green-800 border-green-100 dark:bg-green-900/30 dark:text-green-200 dark:border-green-800",
    },
    {
      img: "./nodejs.webp",
      name: "Node.js",
      color:
        "bg-slate-50 text-slate-800 border-slate-100 dark:bg-slate-900/30 dark:text-slate-200 dark:border-slate-800",
    },
    {
      img: "./express.webp",
      name: "Express.js",
      color:
        "bg-purple-50 text-purple-800 border-purple-100 dark:bg-purple-900/30 dark:text-purple-200 dark:border-purple-800",
    },
    {
      img: "./git.svg",
      name: "Github Action",
      color:
        "bg-sky-50 text-sky-800 border-sky-100 dark:bg-sky-900/30 dark:text-sky-200 dark:border-sky-800",
    },
    {
      img: "./docker.webp",
      name: "Docker",
      color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    },
    {
      img: "./mongodb.webp",
      name: "Mongodb",
      color:
        "bg-green-50 text-green-800 border-green-100 dark:bg-green-900/30 dark:text-green-200 dark:border-green-800",
    },
    {
      img: "./postgres.webp",
      name: "PostgreSQL",
      color:
        "bg-cyan-50 text-cyan-800 border-cyan-100 dark:bg-cyan-900/30 dark:text-cyan-200 dark:border-cyan-800",
    },
    {
      img: "./fastapi.webp",
      name: "FastAPI",
      color:
        "bg-blue-50 text-blue-800 border-blue-100 dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-800",
    },
  ];
  return (
    <div
      id="about"
      className="min-h-screen w-full bg-white px-4 sm:px-8 font-inter flex items-center justify-center overflow-hidden relative dark:bg-gray-900 text-gray-900 dark:text-gray-900 p-6 rounded-lg"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>

      {/* Minimal background elements - constrained to not cause overflow */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 sm:-translate-y-36 sm:translate-x-36"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-50 rounded-full translate-y-1/2 -translate-x-1/2 sm:translate-y-48 sm:-translate-x-48"></div>

      <div className="container mx-auto py-8 sm:py-16 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Text Content */}
          <div
            className="lg:w-1/2 flex flex-col items-center justify-between text-center lg:text-left"
            data-aos="fade-right"
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-6 border border-blue-200"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full"></div>
              Available for new projects
            </div>

            <p
              className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Hi! I'm{" "}
              <span className="font-semibold text-blue-600">OKUNOWO DAVID</span>
              , a Backend Developer based in Lagos who loves turning ideas into
              smooth, scalable digital experiences. I’m all about clean code,
              great design, and solving real problems. <br /> I started with
              basic HTML/CSS and grew into building full-stack web apps with
              powerful backends and sleek frontends. I care about the little
              details, love creative challenges, and always aim to deliver work
              that’s both smart and user-friendly.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <a
                href="/Okunowo David resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg sm:rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm sm:text-base"
              >
                <span className="flex items-center gap-2">
                  {/* Theme-aware SVG icon: uses currentColor and sized with Tailwind */}
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-white dark:text-white"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    role="img"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Resume</title>
                    <g>
                      <path d="M276.239,252.183c-6.37,2.127-13.165,3.308-20.239,3.308c-7.074,0-13.87-1.181-20.24-3.308 c-46.272,7.599-70.489,41.608-70.489,82.877H256h90.728C346.728,293.791,322.515,259.782,276.239,252.183z" />
                      <path d="M256,240.788c27.43,0,49.658-22.24,49.658-49.666v-14.087c0-27.426-22.228-49.659-49.658-49.659 c-27.43,0-49.658,22.233-49.658,49.659v14.087C206.342,218.548,228.57,240.788,256,240.788z" />
                      <path d="M378.4,0H133.582C86.234,0,47.7,38.542,47.7,85.899v340.22C47.7,473.476,86.234,512,133.582,512h205.695 h13.175l9.318-9.301l93.229-93.229l9.301-9.31v-13.174V85.899C464.3,38.542,425.766,0,378.4,0z M432.497,386.985H384.35 c-24.882,0-45.074,20.183-45.074,45.073v48.139H133.582c-29.866,0-54.078-24.221-54.078-54.078V85.899 c0-29.874,24.212-54.096,54.078-54.096H378.4c29.876,0,54.096,24.222,54.096,54.096V386.985z" />
                    </g>
                  </svg>

                  <span>Resume</span>
                </span>
              </a>

              <Link
                href="#project"
                className="group inline-flex items-center justify-center border border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-200 text-sm sm:text-base"
              >
                View My Work
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div
            className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="relative">
              {/* Main image container */}
              <div className="relative bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg sm:shadow-2xl border border-gray-100 transform group hover:scale-105 transition-transform duration-500 max-w-xs sm:max-w-md">
                <img
                  src="./about.jpeg"
                  alt="Okunowo David"
                  className="rounded-xl sm:rounded-2xl object-cover w-full h-auto"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://placehold.co/400x500/E2E8F0/475569?text=Ogwara+Precious+Alisha";
                  }}
                />
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-green-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl shadow-lg">
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                  <span className="font-semibold text-xs sm:text-sm">
                    2+ Years Exp
                  </span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full shadow-lg"></div>
              <div className="absolute -bottom-3 left-8 sm:-bottom-6 sm:left-10 w-4 h-4 sm:w-6 sm:h-6 bg-blue-500 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
