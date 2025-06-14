import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white tracking-tight hover:text-indigo-400 transition">
          Gopa's Navbar
        </h1>

        {/* Hamburger Button (shown only on small screens) */}
        <button
          className="md:hidden text-gray-300 text-xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Nav Links for desktop */}
        <nav className="hidden md:flex">
          <ul className="flex gap-8 text-gray-300 font-medium">
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Nav Links for mobile (toggle visibility) */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-gray-800 md:hidden px-6 py-4 shadow-lg z-40">
          <ul className="flex flex-col gap-4 text-gray-300 font-medium">
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
