"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      role="banner"
      className="bg-zinc-950 text-white shadow-md fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-indigo-500">
          Esaaka Dev
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex gap-8 text-sm font-medium"
          role="navigation"
          aria-label="Main navigation"
        >
          <Link href="/" className="hover:text-indigo-400 transition">
            Home
          </Link>
          <Link href="/services" className="hover:text-indigo-400 transition">
            Services
          </Link>
          <Link href="/about" className="hover:text-indigo-400 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-indigo-400 transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 px-6 py-4 space-y-3">
          <Link href="/" className="block hover:text-indigo-400" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/services" className="block hover:text-indigo-400" onClick={toggleMenu}>
            Services
          </Link>
          <Link href="/about" className="block hover:text-indigo-400" onClick={toggleMenu}>
            About
          </Link>
          <Link href="/contact" className="block hover:text-indigo-400" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
