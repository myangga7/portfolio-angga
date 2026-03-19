import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setTimeout(() => setActiveLink(""), 1000);
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-extrabold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            AN
          </a>

          {/* Desktop Menu - EFEK GARIS NEON BERGERAK MEMUTARI */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.name)}
                className="relative group px-3 py-2 overflow-hidden"
              >
                {/* Teks utama */}
                <span
                  className={`relative z-10 text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 font-bold text-sm tracking-wide transition-colors duration-300 ${
                    activeLink === link.name ? "nav-link-active" : ""
                  }`}
                >
                  {link.name}
                </span>

                {/* GARIS NEON BERGERAK MEMUTARI - BUKAN LANGSUNG KOTAK */}

                {/* 1. Garis ATAS - bergerak dari KIRI ke KANAN */}
                <span className="absolute left-0 top-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_#3b82f6]"></span>

                {/* 2. Garis KANAN - bergerak dari ATAS ke BAWAH (setelah garis atas) */}
                <span className="absolute right-0 top-0 w-0.5 h-0 bg-blue-600 dark:bg-blue-400 group-hover:h-full transition-all duration-300 delay-300 shadow-[0_0_10px_#3b82f6]"></span>

                {/* 3. Garis BAWAH - bergerak dari KANAN ke KIRI (setelah garis kanan) */}
                <span className="absolute right-0 bottom-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300 delay-500 shadow-[0_0_10px_#3b82f6]"></span>

                {/* 4. Garis KIRI - bergerak dari BAWAH ke ATAS (setelah garis bawah) */}
                <span className="absolute left-0 bottom-0 w-0.5 h-0 bg-blue-600 dark:bg-blue-400 group-hover:h-full transition-all duration-300 delay-700 shadow-[0_0_10px_#3b82f6]"></span>
              </a>
            ))}

            {/* Resume Button */}
            {/* <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-bold hover:bg-blue-700 transition shadow-md hover:shadow-[0_0_15px_#3b82f6]">
              Resume
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-gray-900 dark:bg-white transform transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gray-900 dark:bg-white transform transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-64 pb-4" : "max-h-0"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative group block py-3 px-4 overflow-hidden"
              onClick={() => {
                handleLinkClick(link.name);
                setIsMobileMenuOpen(false);
              }}
            >
              {/* Background glow untuk efek klik */}
              <span className="absolute inset-0 bg-blue-600/0 group-active:bg-blue-600/20 transition-colors duration-150"></span>

              {/* Teks */}
              <span
                className={`relative z-10 text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 font-bold transition-colors duration-300 ${
                  activeLink === link.name ? "nav-link-active" : ""
                }`}
              >
                {link.name}
              </span>

              {/* Garis bawah yang muncul dari tengah untuk mobile */}
              <span className="absolute bottom-2 left-1/2 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-500 shadow-[0_0_10px_#3b82f6]"></span>
            </a>
          ))}
          <div className="pt-2 px-4">
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-bold hover:bg-blue-700 transition shadow-md hover:shadow-[0_0_15px_#3b82f6]">
              Resume
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
