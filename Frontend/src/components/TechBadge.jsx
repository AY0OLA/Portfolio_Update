
import React from "react";
import TechIcons from "./icons/TechIcons";

const TechBadge = ({ name, color }) => {
  const key = name;
  const Icon = TechIcons[key] ?? TechIcons.default;

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-lg border font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base ${color}`}
      role="listitem"
    >
      <span className="flex-shrink-0">
        <Icon className="w-4 h-4 text-current" aria-hidden="true" />
      </span>
      <span className="capitalize">{name}</span>
    </div>
  );
};

export default TechBadge;
