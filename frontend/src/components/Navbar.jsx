import { Menu, X } from "lucide-react";
import React, { useState } from "react";

export const Navbar = ({ setShowForm }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll function
  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // close mobile menu after clicking
  };

  return (
    <nav className="fixed top-0 w-full text-white z-50 bg-black/20 backdrop-blur-md transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center">
            <span className="ml-2 text-xl font-semibold hidden sm:block">
              SPORTS
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#"
              onClick={(e) => smoothScroll(e, "body")}
              className="hover:text-orange-500 transition">
              Home
            </a>

            <a href="#packages"
              onClick={(e) => smoothScroll(e, "#packages")}
              className="hover:text-orange-500 transition">
              Packages
            </a>

            <a href="#chooseus"
              onClick={(e) => smoothScroll(e, "#chooseus")}
              className="hover:text-orange-500 transition">
              Choose Us
            </a>

            <a href="#itinerary"
              onClick={(e) => smoothScroll(e, "#itinerary")}
              className="hover:text-orange-500 transition">
              Itinerary
            </a>

            <a href="#enquiries"
              onClick={(e) => smoothScroll(e, "#enquiries")}
              className="hover:text-orange-500 transition">
              Enquiries
            </a>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <button
              onClick={() => setShowForm(true)}
              className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full transition transform hover:scale-105"
            >
              Enquiry Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/20 backdrop-blur-md px-4 py-4 space-y-3">

          <a
            href="#"
            onClick={(e) => smoothScroll(e, "body")}
            className="block hover:text-orange-500"
          >
            Home
          </a>

          <a
            href="#packages"
            onClick={(e) => smoothScroll(e, "#packages")}
            className="block hover:text-orange-500"
          >
            Packages
          </a>

          <a
            href="#chooseus"
            onClick={(e) => smoothScroll(e, "#chooseus")}
            className="block hover:text-orange-500"
          >
            Choose Us
          </a>

          <a
            href="#itinerary"
            onClick={(e) => smoothScroll(e, "#itinerary")}
            className="block hover:text-orange-500"
          >
            Itinerary
          </a>

          <a
            href="#enquiries"
            onClick={(e) => smoothScroll(e, "#enquiries")}
            className="block hover:text-orange-500"
          >
            Enquiries
          </a>

          <button
            onClick={() => { setShowForm(true); setIsMenuOpen(false); }}
            className="w-full bg-orange-500 px-6 py-2 rounded-full mt-2"
          >
            Enquiry Now
          </button>
        </div>
      )}
    </nav>
  );
};
