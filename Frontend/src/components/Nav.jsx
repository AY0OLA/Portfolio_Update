"use client";
import { User, Folder, Briefcase, Mail, Sun, Moon } from "lucide-react";
// import { useTheme } from "next-themes";

const Nav = () => {
  // const { theme, setTheme } = useTheme();

  // const toggleTheme = () => {
  //   setTheme(theme === "dark" ? "light" : "dark");
  // };

  return (
    <>
      {/* Desktop Nav */}
      <nav className="hidden md:block bg-white dark:bg-gray-900 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md z-20 py-4 font-inter transition-colors duration-500">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            OKUNOWO DAVID
          </h1>

          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
            >
              Services
            </a>
            <a
              href="#project"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
            >
              Contact
            </a>

            {/* Theme Toggle */}
            {/* <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {theme === "dark" ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-gray-600" />
              )}
            </button> */}
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 flex justify-around items-center py-3 z-50">
        <a
          href="#about"
          className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-600"
        >
          <User size={22} />
          <span className="text-xs">About</span>
        </a>
        <a
          href="#services"
          className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-600"
        >
          <Folder size={22} />
          <span className="text-xs">Services</span>
        </a>
        <a
          href="#project"
          className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-600"
        >
          <Briefcase size={22} />
          <span className="text-xs">Project</span>
        </a>
        <a
          href="#contact"
          className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-600"
        >
          <Mail size={22} />
          <span className="text-xs">Contact</span>
        </a>

        {/* Mobile Theme Toggle */}
        {/* <button
          onClick={toggleTheme}
          className="flex flex-col items-center text-gray-600 dark:text-gray-300"
        >
          {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
          <span className="text-xs">Theme</span>
        </button> */}
      </div>
    </>
  );
};

export default Nav;
