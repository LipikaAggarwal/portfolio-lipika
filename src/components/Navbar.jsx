"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "projects", "experience", "about", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLinkClass = (section) =>
    `relative transition-colors duration-300
     ${
       activeSection === section
         ? "text-gray-100"
         : "text-gray-300 hover:text-gray-100"
     }
     after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-1/2
     after:origin-left after:transition-transform after:duration-300
     after:bg-gradient-to-r after:from-gray-300 after:to-gray-500
     ${
       activeSection === section
         ? "after:scale-x-100"
         : "after:scale-x-0 hover:after:scale-x-100"
     }`;

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 
        w-full max-w-4xl z-50 rounded-full px-6 py-4 shadow-lg text-gray-200
        ${
          isMenuOpen
            ? "bg-transparent backdrop-blur-0 border-0"
            : "bg-white/10 backdrop-blur-lg border border-white/20"
        }
        transition-[background,backdrop-filter] duration-300
      `}
    >
      <div className="flex items-center justify-between w-full">
        {/* LOGO */}
        <h1 className="text-xl font-bold text-gray-100 tracking-wide">
          Lipika
        </h1>

        {/* DESKTOP */}
        <nav className="hidden lg:flex gap-8 text-sm font-semibold">
          <Link href="#home" onClick={() => handleNavClick("home")} className={navLinkClass("home")}>
            Home
          </Link>
          <Link href="#about" onClick={() => handleNavClick("about")} className={navLinkClass("about")}>
            About
          </Link>
          <Link href="#projects" onClick={() => handleNavClick("projects")} className={navLinkClass("projects")}>
            Projects
          </Link>
          <Link href="#experience" onClick={() => handleNavClick("experience")} className={navLinkClass("experience")}>
            Experience
          </Link>
        </nav>
        <Link
          href="#contact"
          onClick={() => handleNavClick("contact")}
          className="hidden lg:inline-block px-6 py-2 rounded-full font-semibold
                     bg-gradient-to-r from-gray-400 to-gray-600
                     hover:from-gray-300 hover:to-gray-500
                     transition-all duration-300 text-gray-900 shadow-md"
        >
          Get In Touch
        </Link>

        {/* MOBILE */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-gray-100"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div
          className="lg:hidden mt-4 rounded-2xl px-4 py-6
                     bg-white/10 backdrop-blur-lg border border-white/20
                     shadow-md text-gray-200"
        >
          <div className="flex flex-col items-center gap-5 text-sm font-semibold">
            <Link
              href="#home"
              onClick={() => handleNavClick("home")}
              className={`${navLinkClass("home")} block w-full text-center py-2`}
            >
              Home
            </Link>

            <Link
              href="#about"
              onClick={() => handleNavClick("about")}
              className={`${navLinkClass("about")} block w-full text-center py-2`}
            >
              About
            </Link>

            <Link
              href="#projects"
              onClick={() => handleNavClick("projects")}
              className={`${navLinkClass("projects")} block w-full text-center py-2`}
            >
              Projects
            </Link>

            <Link
              href="#experience"
              onClick={() => handleNavClick("experience")}
              className={`${navLinkClass("experience")} block w-full text-center py-2`}
            >
              Experience
            </Link>

            <Link
              href="#contact"
              onClick={() => handleNavClick("contact")}
              className="w-full mt-2 px-6 py-3 rounded-full font-semibold text-center
                         bg-gradient-to-r from-gray-400 to-gray-600
                         hover:from-gray-300 hover:to-gray-500
                         transition-all duration-300 text-gray-900 shadow-md"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
