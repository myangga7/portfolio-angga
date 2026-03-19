// src/components/sections/Contact.jsx
import { useState } from "react";
import Button from "../common/Button";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Fungsi untuk membuat tautan email
  const createMailtoLink = () => {
    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );
    return `mailto:angga7nugraha@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "angga7nugraha@gmail.com",
      link: "mailto:angga7nugraha@gmail.com",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Indonesia",
      link: "https://maps.google.com",
    },
  ];

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
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
            Let's Create Something Amazing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Any projects or questions? I'm here to help. Send me a message and
            I'll get back to you right away.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
              >
                <div className="text-3xl mb-3">{info.icon}</div>
                <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {info.label}
                </h3>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  {info.value}
                </p>
              </a>
            ))}

            {/* Social Links */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Social Media
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-2xl hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send a Message
              </h3>

              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all text-gray-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all text-gray-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all resize-none text-gray-900 dark:text-white"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Send Email Button */}
                <a
                  href={createMailtoLink()}
                  className={`w-full inline-block text-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                    !formData.name || !formData.email || !formData.message
                      ? "opacity-50 cursor-not-allowed pointer-events-none"
                      : ""
                  }`}
                >
                  Send via Email
                </a>

                {/* Info Text */}
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  ⚡ This will launch your default email app (Outlook, Gmail,
                  Apple Mail, dll.)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
