"use client";

import { useRef, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useAnimation, useInView } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaLaptopCode,
  FaNodeJs,
  FaTools,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiPostman,
  SiDocker,
  SiGithub,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";

// --- Skills Data ---
const technicalSkills = [
  {
    id: "frontend",
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3 / SCSS", icon: <FaCss3Alt className="text-blue-400" /> },
      {
        name: "JavaScript (ES6+)",
        icon: <FaJsSquare className="text-yellow-400" />,
      },
      {
        name: "TypeScript",
        icon: <TbBrandTypescript className="text-blue-500" />,
      },
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <TbBrandNextjs className="text-white" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-400" />,
      },
      {
        name: "Responsive Design",
        icon: <FaLaptopCode className="text-green-400" />,
      },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
      { name: "Python", icon: <SiPython className="text-yellow-500" /> },
      { name: "Django", icon: <SiDjango className="text-green-600" /> },
      { name: "FastAPI", icon: <FaTools className="text-cyan-400" /> },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
    ],
  },
  {
    id: "cms-tools",
    title: "CMS & Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
      { name: "GitHub", icon: <SiGithub className="text-gray-200" /> },
      { name: "VS Code", icon: <FaTools className="text-blue-300" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
    ],
  },
  {
    id: "DevOps",
    title: "DevOps",
    skills: [
      { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
      { name: "GitHub Actions", icon: <SiGithub className="text-cyan-300" /> },
    ],
  },
];

// --- Animation variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, when: "beforeChildren" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } },
};

const skillPillVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.04, duration: 0.35, ease: "easeOut" },
  }),
  hover: { scale: 1.03 },
};

// --- MAIN COMPONENT ---
export default function Framework() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);
  const [activeSkillCategory, setActiveSkillCategory] = useState("frontend");

  // ref + in-view + controls for framer-motion
  const skillsRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(skillsRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) controls.start("show");
  }, [isInView, controls]);

  const visibleCategories = technicalSkills.filter((c) =>
    ["frontend", "backend", "databases", "cms-tools", "DevOps"].includes(c.id),
  );

  const currentSkills = technicalSkills.find(
    (category) => category.id === activeSkillCategory,
  );

  return (
    <main className="relative text-white overflow-hidden py-16 lg:py-24 grainy min-h-screen w-full bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>

      {/* Minimal background elements - constrained to not cause overflow */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 sm:-translate-y-36 sm:translate-x-36"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-50 rounded-full translate-y-1/2 -translate-x-1/2 sm:translate-y-48 sm:-translate-x-48"></div>
      <section
        id="skills"
        className="relative z-10 py-16 sm:py-20 lg:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto"
        data-aos="fade-right"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
          Technologies I Work With
        </h3>
        <motion.div
          ref={skillsRef}
          className="space-y-12"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
            variants={containerVariants}
          >
            {visibleCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveSkillCategory(category.id)}
                className={`px-4 py-2 sm:px-5 sm:py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 ease-out ${
                  activeSkillCategory === category.id
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105"
                    : "bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white"
                }`}
                variants={itemVariants}
                aria-pressed={activeSkillCategory === category.id}
              >
                {category.title}
              </motion.button>
            ))}
          </motion.div>

          <div>
            {currentSkills && (
              <motion.div
                key={currentSkills.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-3xl font-bold text-center text-purple-400 mb-8 mt-6 md:mt-8 group">
                  {currentSkills.title}
                </h3>

                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                  {currentSkills.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="inline-flex items-center gap-3 px-5 py-2 rounded-full border bg-purple-900/20 text-white cursor-pointer group text-lg sm:text-xl font-medium"
                      variants={skillPillVariants}
                      initial="hidden"
                      animate="show"
                      whileHover="hover"
                      custom={skillIndex}
                    >
                      <div className="text-2xl sm:text-3xl ">{skill.icon}</div>
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Additional Info Section */}
        <div
          className="mt-12 sm:mt-20 grid md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className="text-center p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">
              Creative Design
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm">
              Beautiful, user-centered designs that engage and convert visitors
            </p>
          </div>

          <div className="text-center p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">
              Clean Code
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm">
              Scalable, maintainable code following industry best practices
            </p>
          </div>

          <div className="text-center p-4 sm:p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">
              Fast Performance
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm">
              Optimized applications that load quickly and run smoothly
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
