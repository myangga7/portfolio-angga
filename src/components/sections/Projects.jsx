// src/components/sections/Projects.jsx - Premium Version dengan Background Keren
import { useState } from "react";
import { projects, categories } from "../../data/projects";
import Button from "../common/Button";
import ProjectModal from "../ui/ProjectModal";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaFilter,
  FaTimes,
} from "react-icons/fa";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter projects berdasarkan category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Featured projects (untuk ditampilkan pertama)
  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* ===== BACKGROUND PREMIUM LAYERS ===== */}

      {/* Layer 1: Large Floating Orbs - Warna-warni yang bergerak */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-500/20 dark:bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 -right-20 w-120 h-120 bg-purple-500/20 dark:bg-purple-400/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-pink-500/10 dark:bg-pink-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-yellow-500/20 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-40 w-40 h-40 bg-green-500/20 rounded-full blur-2xl animate-float-slow animation-delay-1000"></div>
        <div className="absolute top-60 left-60 w-24 h-24 bg-red-500/20 rounded-full blur-2xl animate-float"></div>
      </div>

      {/* Layer 2: Grid Pattern - Efek teknologi */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(156, 163, 175) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Layer 3: Noise Texture - Efek premium seperti di website mahal */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      ></div>

      {/* Layer 4: Gradient Overlay - Transisi halus ke konten */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/50 to-white dark:via-gray-900/50 dark:to-gray-900 pointer-events-none"></div>

      {/* Konten Utama */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-4">
            🚀 My Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured{" "}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some of the projects I’ve worked.
          </p>
        </div>

        {/* Category Filter - Desktop */}
        <div className="hidden md:flex justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Category Filter - Mobile */}
        <div className="md:hidden mb-8">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-full px-4 py-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-between"
          >
            <span className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <FaFilter className="text-blue-600" />
              Filter: {selectedCategory}
            </span>
            <span
              className={`transform transition-transform ${isFilterOpen ? "rotate-180" : ""}`}
            >
              ▼
            </span>
          </button>

          {isFilterOpen && (
            <div className="mt-2 p-2 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsFilterOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-linear-to-b from-blue-600 to-purple-600 rounded-full"></span>
                Featured Projects
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  ({featuredProjects.length} projects)
                </span>
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => openModal(project)}
                    className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer transform hover:-translate-y-2"
                  >
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Featured Badge */}
                      <span className="absolute top-4 left-4 px-3 py-1 bg-linear-to-r from-yellow-400 to-yellow-500 text-yellow-900 text-xs font-bold rounded-full shadow-lg">
                        ⭐ FEATURED
                      </span>

                      {/* Year Badge */}
                      <span className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full">
                        {project.year}
                      </span>

                      {/* Quick Actions - Muncul saat hover */}
                      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-90">
                        <button
                          className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-blue-600 hover:scale-110 transition-all duration-300"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.liveUrl, "_blank");
                          }}
                        >
                          <FaExternalLinkAlt />
                        </button>
                        <button
                          className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-gray-800 hover:scale-110 transition-all duration-300"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, "_blank");
                          }}
                        >
                          <FaGithub />
                        </button>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                        {project.shortDescription || project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags?.slice(0, 4).map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags?.length > 4 && (
                          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium">
                            +{project.tags.length - 4}
                          </span>
                        )}
                      </div>

                      {/* View Details Link */}
                      <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:gap-2 transition-all">
                        <span>View Details</span>
                        <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-linear-to-b from-gray-600 to-gray-400 rounded-full"></span>
                More Projects
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  ({otherProjects.length} projects)
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => openModal(project)}
                    className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer transform hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-2 right-2 px-2 py-0.5 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                        {project.year}
                      </span>
                    </div>

                    <div className="p-4">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                        {project.shortDescription || project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {project.tags?.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-20">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open("https://github.com/myangga7", "_blank")}
            className="group border-2 hover:border-blue-600 dark:hover:border-blue-400"
          >
            <span className="flex items-center gap-3">
              <FaGithub className="text-xl text-black" />
              <span className="text-black">All Projects on GitHub</span>
              <FaArrowRight className="transform group-hover:translate-x-2 transition-transform" />
            </span>
          </Button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;
