import React from "react";
import Nav from "@/components/Nav";
import About from "@/components/About";
import Framework from "@/components/Framework";
import Services from "@/components/Services";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-500">
      <Nav />
      <About />
      <Framework />
      <Services />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
