"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/logo/logo.png"
                alt="Emerald Airlines"
                width={143}
                height={40}
                className="h-10 w-auto brightness-200"
              />
              <span className="text-xl font-semibold text-white tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-emerald-100">
                Emerald Airlines
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-200 hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-200 hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Services
            </Link>
            <Link
              href="/about-us"
              className="text-gray-200 hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link
              href="/feedbacks"
              className="text-gray-200 hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Feedbacks
            </Link>
            <Link
              href="/contact"
              className="text-gray-200 hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center">
              <div className="mr-3">
                <p className="text-sm text-gray-300">Call Anytime</p>
                <p className="text-blue-400 font-bold">+92 (8800) - 6780</p>
              </div>
              <div className="bg-blue-500 hover:bg-blue-600 transition-colors duration-200 rounded-full p-2">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-200 hover:text-blue-400 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 rounded-b-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-200 hover:bg-gray-700 hover:text-blue-400 rounded-md transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-gray-200 hover:bg-gray-700 hover:text-blue-400 rounded-md transition-colors duration-200"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-200 hover:bg-gray-700 hover:text-blue-400 rounded-md transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/feedback"
                className="block px-3 py-2 text-gray-200 hover:bg-gray-700 hover:text-blue-400 rounded-md transition-colors duration-200"
              >
                Feedback
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-200 hover:bg-gray-700 hover:text-blue-400 rounded-md transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
