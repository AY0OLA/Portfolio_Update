"use client";

import React, { useState, useMemo } from "react";

const ProjectItem = ({ project }) => (
  <div className="group relative bg-gradient-to-br from-white to-gray-50/80 p-8 lg:p-12 rounded-none lg:rounded-2xl border-b border-gray-200 lg:border lg:border-gray-100 hover:border-blue-200 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100/30 backdrop-blur-sm">
    {/* Background gradient effect on hover */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-none lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    <div className="relative flex flex-col xl:flex-row gap-8 xl:gap-12 items-start max-w-7xl mx-auto">
      {/* Project Image with modern frame */}
      <div className="xl:w-2/5 w-full">
        <div className="relative overflow-hidden rounded-none lg:rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-500">
          <img
            src={project.imageUrl}
            alt={project.name}
            className="w-full h-64 lg:h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://placehold.co/800x500/E2E8F0/475569?text=Project+Image`;
            }}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* Project Content */}
      <div className="xl:w-3/5 w-full flex flex-col space-y-6">
        {/* Project Header */}
        <div>
          <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-4">
            {project.name}
          </h3>
          <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tags with better styling */}
        <div className="flex flex-wrap gap-3">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-semibold rounded-full border border-blue-200/50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons with modern design */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-gray-700 hover:to-gray-800"
          >
            <svg
              className="w-5 h-5 mr-3"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View Code
            <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          <a
            href={project.liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-blue-500 hover:to-purple-500"
          >
            <svg
              className="w-5 h-5 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Live Demo
            <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav
      id="project"
      className="flex justify-center items-center space-x-3 mt-12 font-inter w-full py-8 bg-gray-50/50"
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 font-medium hover:from-gray-200 hover:to-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200/50 transform hover:scale-105"
      >
        ← Previous
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-110 ${
            currentPage === number
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-500/25 scale-110"
              : "bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 shadow-lg hover:shadow-xl border border-gray-200/50 hover:from-gray-200 hover:to-gray-100"
          }`}
        >
          {number}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 font-medium hover:from-gray-200 hover:to-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200/50 transform hover:scale-105"
      >
        Next →
      </button>
    </nav>
  );
};

const Project = () => {
  const projects = useMemo(
    () => [
      {
        id: "1",
        name: "Login",
        description:
          "A three-step graphical authentication flow, where each level tests a different cognitive skill. For years we’ve accepted that authentication means remembering strings of text like uppercase here, a number there and a symbol which you’ll forget next week. But humans aren’t great at remembering random characters but on the other hand we’re far better at recognising images, recalling order, and remembering spatial interactions. So I decided to explore a different approach.",
        imageUrl: "./login.png",
        tags: ["TypeScript", "Tailwind css", "Api"],
        githubLink: "https://github.com/AY0OLA/LoginPageFront",
        liveDemoLink: "https://login-page-front.vercel.app/",
      },
      {
        id: "2",
        name: "MovieBox",
        description:
          "A website where you can search for movies, years and things concerning a particular film",
        imageUrl: "./moviebox.png",
        tags: ["React.js", "CSS", "Api"],
        githubLink: "https://github.com/AY0OLA/Movies",
        liveDemoLink: "https://movieproject-beta.vercel.app/",
      },
      {
        id: "3",
        name: "Fitness",
        description:
          "A website for a gym that all subcribers to track their progress",
        imageUrl: "./fitness.png",
        tags: ["React.js", "Tailwindcss", "API"],
        githubLink: "https://github.com/AY0OLA/GYM",
        liveDemoLink: "https://gym-topaz-ten.vercel.app/",
      },
      {
        id: "4",
        name: "D-Collection",
        description: "A website for collection brand.",
        imageUrl: "./d-collection.png",
        tags: ["React.js", "Tailwindcss"],
        githubLink: "https://github.com/AY0OLA/D-Collection",
        liveDemoLink: "https://dcollection.vercel.app/",
      },
    ],
    [],
  );

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const currentProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    return projects.slice(startIndex, endIndex);
  }, [currentPage, projects, projectsPerPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 font-inter text-gray-900 w-full">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full">
        {/* Full-width header */}
        <header className="w-full py-20 bg-gradient-to-r from-gray-50/80 to-blue-50/50 border-b border-gray-200/50">
          <div className="w-full px-6 lg:px-12">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 bg-clip-text text-transparent text-center">
              My Projects
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-6xl mx-auto leading-relaxed text-center">
              Discover my journey through innovative web development projects.
              Each creation represents unique challenges solved with modern
              technologies and clean code.
            </p>
          </div>
        </header>

        <main className="w-full">
          {currentProjects.length > 0 ? (
            <div className="w-full">
              {currentProjects.map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="w-full py-32 text-center bg-white">
              <div className="text-6xl mb-4">🚧</div>
              <p className="text-xl text-gray-600">
                More amazing projects coming soon!
              </p>
            </div>
          )}

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default Project;
