"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Gallery", href: "#gallery" },
    { name: "Structure", href: "#structure" },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div
        className={`absolute top-0 left-0 h-full w-full transition-all duration-300 ease-in-out ${
          scrolled
            ? "bg-gray-950 border-b-2 border-gray-600 opacity-70"
            : "bg-transparent border-b border-transparent"
        }`}
      />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Image
            src="/logo.png"
            alt="KKNT UNESA DESA KEMBANGBELOR 2025"
            width={80}
            height={80}
          />
          <div className="hidden md:flex space-x-8 text-xl">
            {navLinks.map((nav) => (
              <Link key={nav.name} href={nav.href}>
                <div className="text-gray-200 hover:text-white transition-colors duration-200">
                  {nav.name}
                </div>
              </Link>
            ))}
          </div>
          <button className="md:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </motion.nav>
    </div>
  );
}
