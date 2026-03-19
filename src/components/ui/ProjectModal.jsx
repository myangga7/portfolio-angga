// src/components/ui/ProjectModal.jsx
import { useEffect, useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import Button from "../common/Button";

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1,
    );
  };

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Modal Content */}
      <div
        className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
        >
          <FaTimes className="text-gray-600 dark:text-gray-300" />
        </button>

        {/* Image Carousel */}
        {project.images && project.images.length > 0 && (
          <div className="relative h-80 md:h-96 bg-gray-900 overflow-hidden">
            <img
              src={project.images[currentImageIndex]}
              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Carousel Navigation */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-blue-600 transition-all duration-300"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-blue-600 transition-all duration-300"
                >
                  <FaArrowRight />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "w-8 bg-blue-600"
                          : "bg-white/50 hover:bg-white"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Category Badge */}
            <span className="absolute top-4 left-4 px-4 py-2 bg-black/50 backdrop-blur-sm text-white rounded-full text-sm font-medium">
              {project.category}
            </span>
          </div>
        )}

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Title & Year */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h2>
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">
              {project.year}
            </span>
          </div>

          {/* Project Meta */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
            {project.client && (
              <div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Client
                </span>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {project.client}
                </p>
              </div>
            )}
            {project.role && (
              <div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Role
                </span>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {project.role}
                </p>
              </div>
            )}
            {project.duration && (
              <div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Duration
                </span>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {project.duration}
                </p>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Overview
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.techStack?.map((tech, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 ${tech.color || "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"}`}
                >
                  <span>{tech.icon}</span>
                  {tech.name}
                </span>
              )) ||
                project.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>

          {/* Challenges & Solutions */}
          {(project.challenges || project.solutions) && (
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {project.challenges && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
                  <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">
                    Challenges
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    {project.challenges.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm"
                      >
                        <span className="text-red-500 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {project.solutions && (
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">
                    Solutions
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    {project.solutions.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm"
                      >
                        <span className="text-green-500 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="flex-1 group"
              onClick={() => window.open(project.liveUrl, "_blank")}
            >
              <span className="flex items-center justify-center gap-2">
                <FaExternalLinkAlt />
                Live Demo
                <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex-1 group"
              onClick={() => window.open(project.githubUrl, "_blank")}
            >
              <span className="flex items-center justify-center gap-2">
                <FaGithub />
                View Code
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
