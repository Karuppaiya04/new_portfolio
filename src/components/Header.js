import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';
export default function Header() {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="flex items-center justify-between bg-gray-900 text-white px-4 py-3 md:py-4">
      <h1 className="font-bold text-lg sm:text-xl md:text-2xl">Kp Dev</h1>
      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex space-x-4 items-center">
          <li><a href="#home" className="hover:text-[#09f4fc] transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-[#09f4fc] transition-colors">About</a></li>
          <li><a href="#projects" className="hover:text-[#09f4fc] transition-colors">Projects</a></li>
          <li><a href="#resume" className="hover:text-[#09f4fc] transition-colors">Resume</a></li>
          <li><a href="#skills" className="hover:text-[#09f4fc] transition-colors">Skills</a></li>
          <li>
            <a
              href="#contact"
              className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-full border-2 border-gray-700 hover:bg-[#09f4fc] hover:text-black hover:border-[#09f4fc] transition-all duration-300 shadow focus:outline-none focus:ring-2 focus:ring-[#09f4fc]"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {/* Mobile Nav */}
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="block md:hidden focus:outline-none"
        aria-label="Toggle Menu"
      >
        <Bars3Icon className="text-white h-7 w-7" />
      </button>
      {toggleMenu && (
        <nav className="absolute top-16 left-0 w-full bg-gray-900 z-50 md:hidden shadow-lg">
          <ul className="flex flex-col items-center py-4 space-y-3">
            <li><a href="#home" className="hover:text-[#09f4fc] transition-colors" onClick={() => setToggleMenu(false)}>Home</a></li>
            <li><a href="#about" className="hover:text-[#09f4fc] transition-colors" onClick={() => setToggleMenu(false)}>About</a></li>
            <li><a href="#projects" className="hover:text-[#09f4fc] transition-colors" onClick={() => setToggleMenu(false)}>Projects</a></li>
            <li><a href="#resume" className="hover:text-[#09f4fc] transition-colors" onClick={() => setToggleMenu(false)}>Resume</a></li>
            <li>
              <a
                href="#contact"
                className="bg-gray-800 text-white font-semibold py-2 px-8 rounded-full border-2 border-gray-700 hover:bg-[#09f4fc] hover:text-black hover:border-[#09f4fc] transition-all duration-300 shadow text-center focus:outline-none focus:ring-2 focus:ring-[#09f4fc]"
                onClick={() => setToggleMenu(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}