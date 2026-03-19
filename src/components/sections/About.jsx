// src/components/sections/About.jsx
import { useState } from "react";
import Button from "../common/Button";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const skills = {
    frontend: [
      { name: "React/Next.js", level: 100 },
      { name: "TypeScript", level: 100 },
      { name: "Tailwind CSS", level: 100 },
      { name: "Etc.", level: 100 },
    ],
    backend: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 82 },
      { name: "GraphQL", level: 85 },
      { name: "MongoDB", level: 80 },
    ],
    tools: [
      { name: "Git/GitHub", level: 95 },
      { name: "Figma", level: 85 },
      { name: "AWS", level: 75 },
      { name: "Docker", level: 70 },
    ],
  };

  const experiences = [
    {
      year: "2023 - Present",
      title: "Senior Front-End Engineer",
      company: "Tech Unicorn Startup",
      description:
        "Memimpin tim front-end dalam membangun aplikasi SaaS dengan React dan TypeScript. Meningkatkan performa hingga 40%.",
    },
    {
      year: "2021 - 2023",
      title: "Front-End Developer",
      company: "Global Tech Company",
      description:
        "Mengembangkan komponen reusable dan design system untuk 5 produk berbeda.",
    },
    {
      year: "2019 - 2021",
      title: "UI Developer",
      company: "Digital Agency",
      description: "Membangun website interaktif untuk klien internasional.",
    },
    {
      year: "2017 - 2019",
      title: "Junior Developer",
      company: "Startup Lokal",
      description:
        "Memulai karir sebagai front-end developer, belajar dari nol hingga mahir.",
    },
  ];

  const education = [
    {
      year: "2020",
      title: "Front-End Development Bootcamp",
      institution: "Coding Academy",
      description:
        "Program intensif 6 bulan dengan fokus pada React dan modern web development.",
    },
    {
      year: "2015 - 2019",
      title: "Bachelor of Computer Science",
      institution: "University of Technology",
      description:
        "Lulus dengan predikat cum laude, fokus pada human-computer interaction.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
            Crafting Code, <br />
            Creating Experiences
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I am a self-taught Frontend Developer with a strong focus on
            building modern, responsive, and user-friendly web applications. I
            specialize in React, JavaScript, and Tailwind CSS, and I enjoy
            transforming ideas into real, functional products.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Profile */}
          <div className="space-y-8">
            {/* Profile Card */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-24 h-24 rounded-full bg-linear-to-br from-blue-500 to-purple-500 p-1">
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 overflow-hidden">
                    <img
                      src="/images/anggan.jpg"
                      alt="Angga Nugraha"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    Angga Nugraha
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                    Frontend Developer
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-xs font-medium">
                      React
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-xs font-medium">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300 rounded-full text-xs font-medium">
                      UI/UX
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I believe that good code is a balance of functionality,
                performance, and aesthetics. My specialty is building
                applications with scalable architecture and a great user
                experience.
              </p>

              {/* Stats */}
              {/* <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    10+
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Years Exp
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    50+
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Projects
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    15+
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Clients
                  </div>
                </div>
              </div> */}
            </div>

            {/* Education */}
            {/* <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                Education
              </h3>
              <div className="space-y-6">
                {education.map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700"
                  >
                    <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                      {item.year}
                    </span>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      {item.institution}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div> */}
          </div>

          {/* Right Column - Skills & Experience */}
          <div className="space-y-8">
            {/* Tabs */}
            {/* <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-1 inline-flex">
              <button
                onClick={() => setActiveTab("skills")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === "skills"
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => setActiveTab("experience")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === "experience"
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Experience
              </button>
            </div> */}

            {/* Skills Content */}
            {activeTab === "skills" && (
              <div className="space-y-8">
                {/* Frontend */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                    Frontend Development
                  </h3>
                  <div className="space-y-4">
                    {skills.frontend.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {/* {skill.level}% */}
                          </span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-linear-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                {/* <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                    Backend & Database
                  </h3>
                  <div className="space-y-4">
                    {skills.backend.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-linear-to-r from-green-500 to-blue-500 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div> */}

                {/* Tools */}
                {/* <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                    Tools & Workflow
                  </h3>
                  <div className="space-y-4">
                    {skills.tools.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-linear-to-r from-orange-500 to-pink-500 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>
            )}

            {/* Experience Content */}
            {/* {activeTab === "experience" && (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Work Experience
                </h3>
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700"
                    >
                      <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-purple-600"></div>
                      <span className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
                        {exp.year}
                      </span>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-1">
                        {exp.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                        {exp.company}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )} */}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
