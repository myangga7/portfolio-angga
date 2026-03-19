// src/components/layouts/Footer.jsx
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/myangga7",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/angga-n-96181157/",
      label: "LinkedIn",
    },
    /* {
      icon: FaInstagram,
      href: "https://instagram.com/username-anda",
      label: "Instagram",
    }, */
    /* {
      icon: FaXTwitter,
      href: "https://twitter.com/username-anda",
      label: "Twitter",
    }, */
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Brand */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Angga Portfolio
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
            self-taught Frontend Developer.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mb-8">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-xl hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Icon />
              </a>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
            © {currentYear} Angga Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
