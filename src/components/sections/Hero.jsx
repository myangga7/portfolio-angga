// src/components/sections/Hero.jsx - Premium Version
import { useEffect, useRef, useState } from "react";
import Button from "../common/Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100; // Kecepatan ngetik (ms)
  const deletingSpeed = 50; // Kecepatan hapus (ms)
  const pauseTime = 2000; // Jeda antar kata (ms)

  const texts = [
    "Front-End Engineer",
    "UI/UX Enthusiast",
    "Startup Builder",
    "Graphic Design",
    "Business Development",
    "Event Organizer",
    "Sales & Marketing",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[currentTextIndex];

      if (isDeleting) {
        // Mode menghapus
        setDisplayText(currentText.substring(0, displayText.length - 1));

        // Jika sudah habis, ganti ke kata berikutnya
        if (displayText.length === 1) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        // Mode mengetik
        setDisplayText(currentText.substring(0, displayText.length + 1));

        // Jika sudah selesai, jeda lalu hapus
        if (displayText.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex]);

  const stats = [
    { value: "10+", label: "Years Experience", icon: "✨" },
    { value: "50+", label: "Projects Completed", icon: "🚀" },
    { value: "15+", label: "Happy Clients", icon: "🤝" },
    { value: "5", label: "Awards Won", icon: "🏆" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, name: "GitHub", url: "https://github.com/myangga7" },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/angga-n-96181157/",
    },
    /* { icon: "📷", name: "Instagram", url: "https://instagram.com" } */
    /* { icon: "🐦", name: "Twitter", url: "https://twitter.com" } */
    ,
    ,
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 dark:bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-120 h-120 bg-purple-500/20 dark:bg-purple-400/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-pink-500/10 dark:bg-pink-400/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Social Proof Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700 mb-8 animate-float-slow">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
            Available for freelance & full-time opportunities
          </span>
        </div>
        {/* Avatar dengan efek glow premium */}
        <div className="relative inline-block mb-8 group">
          {/* Multiple glow layers */}
          <div
            className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-700"
            style={{
              width: "160px",
              height: "160px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          ></div>
          <div
            className="absolute inset-0 bg-purple-500 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 delay-100"
            style={{
              width: "160px",
              height: "160px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          ></div>
          {/* Avatar container */}
          <div className="relative w-40 h-40 mx-auto rounded-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 p-1 animate-float">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 overflow-hidden">
              <img
                src="/images/anggan.jpg"
                alt="Angga Nugraha"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
          {/* Status badge */}

          {/* <span className="absolute -bottom-2 right-0 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg shadow-blue-500/50">
            OPEN
          </span> */}
        </div>

        {/* Greeting */}
        <div className="mb-4">
          <span className="text-lg text-gray-600 dark:text-gray-400">
            👋 Hello, I'm
          </span>
        </div>
        {/* Name with gradient */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Angga Nugraha
          </span>
        </h1>
        {/* Typing effect section */}
        <div className="h-16 md:h-20 mb-6 flex items-center justify-center gap-2">
          <span className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
            I'm a
          </span>
          <div className="relative">
            <span className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
              {displayText}
            </span>
            <span className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
          </div>
        </div>
        {/* Description dengan efek glass premium */}
        <div className="max-w-3xl mx-auto mb-10 p-8 glass-card rounded-3xl">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
            I build clean, interactive, and scalable
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              {" "}
              web experiences{" "}
            </span>
            that feel fast, intuitive, and
            <span className="text-purple-600 dark:text-purple-400 font-semibold">
              {" "}
              production-ready{" "}
            </span>
            for real users.
          </p>
        </div>
        {/* CTA Buttons dengan efek hover lebih keren */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            className="group relative overflow-hidden bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <span className="transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </span>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Let's Talk
          </Button>
        </div>
        {/* Stats Grid - Premium Cards */}
        {/*<div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-500 cursor-default"
            >
              <div className="text-4xl mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                {stat.icon}
              </div>
              <div className="font-bold text-2xl md:text-3xl text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>*/}
        {/* Social Links */}
        <div className="flex justify-center gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative w-12 h-12 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center text-2xl hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                {social.icon}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 group cursor-pointer">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center group-hover:border-blue-600 dark:group-hover:border-blue-400 transition-colors">
          <div className="w-1.5 h-3 bg-gray-600 dark:bg-gray-400 rounded-full mt-2 animate-bounce group-hover:bg-blue-600 dark:group-hover:bg-blue-400"></div>
        </div>
        <span className="absolute top-12 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Scroll Down
        </span>
      </div>
    </section>
  );
};

export default Hero;
