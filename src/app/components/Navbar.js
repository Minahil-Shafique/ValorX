"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-5 text-white flex justify-between items-center fixed w-full top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link href="/">ValorX</Link>
      </div>

      {/* Links for larger screens */}
      <div className="hidden md:flex space-x-6">
        <Link href="/" className="hover:text-gray-400">
          Home
        </Link>
        <Link href="#portfolio" className="hover:text-gray-400">
          Portfolio
        </Link>
        <Link href="#services" className="hover:text-gray-400">
          Services
        </Link>
        <Link href="#about" className="hover:text-gray-400">
          About
        </Link>
        <Link href="#contact" className="hover:text-gray-400">
          Contact
        </Link>
      </div>

      {/* CTA Button */}
      <div className="hidden md:block">
        <a href="#contact">
          <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
            Get a Quote
          </button>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900 p-5 flex flex-col space-y-4">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="#portfolio" className="hover:text-gray-400">
            Portfolio
          </Link>
          <Link href="#services" className="hover:text-gray-400">
            Services
          </Link>
          <Link href="#about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="#contact" className="hover:text-gray-400">
            Contact
          </Link>
          <a href="#contact">
            <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
              Get a Quote
            </button>
          </a>
        </div>
      )}
    </nav>
  );
}
