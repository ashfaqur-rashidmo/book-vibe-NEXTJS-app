
"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Navbar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-[#131313]"
          >
            Book <span className="text-[#23BE0A]">Vibe</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-[#131313] transition hover:text-[#23BE0A]"
            >
              Home
            </Link>

            <Link
              href="/listed-books"
              className="text-sm font-medium text-[#131313] transition hover:text-[#23BE0A]"
            >
              Listed Books
            </Link>

            <Link
              href="/books"
              className="text-sm font-medium text-[#131313] transition hover:text-[#23BE0A]"
            >
              All Books
            </Link>

            <Link
              href="/pages-to-read"
              className="text-sm font-medium text-[#131313] transition hover:text-[#23BE0A]"
            >
              Pages to Read
            </Link>

             <Link
                href="/read-books"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-[#131313] hover:text-[#23BE0A]"
              >
                Read Books
              </Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-md bg-[#23BE0A] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#1e9d08]">
              Sign In
            </button>

            <button className="rounded-md bg-[#59C6D2] px-4 py-2 text-sm font-medium text-[#131313] transition hover:bg-[#45b5c1]">
              Sign Up
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-md border border-gray-300 p-2 text-[#131313] md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              // Close icon
              <span className="text-xl">✕</span>
            ) : (
              // Hamburger icon
              <span className="text-xl">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-[#131313] hover:text-[#23BE0A]"
              >
                Home
              </Link>

              <Link
                href="/listed-books"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-[#131313] hover:text-[#23BE0A]"
              >
                Listed Books
              </Link>

              <Link
                href="/pages-to-read"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-[#131313] hover:text-[#23BE0A]"
              >
                Pages to Read
              </Link>

              <Link
                href="/read-books"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-[#131313] hover:text-[#23BE0A]"
              >
                Read Books
              </Link>

              {/* Mobile Buttons */}
              <div className="flex flex-col gap-2 pt-2">
                <button className="rounded-md bg-[#23BE0A] px-4 py-2 text-sm font-medium text-white hover:bg-[#1e9d08]">
                  Sign In
                </button>

                <button className="rounded-md bg-[#59C6D2] px-4 py-2 text-sm font-medium text-[#131313] hover:bg-[#45b5c1]">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
