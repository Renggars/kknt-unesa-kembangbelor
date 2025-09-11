"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Efek untuk background navbar saat di-scroll
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

  // Efek untuk mengunci scroll body saat menu mobile terbuka
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Gallery", href: "#gallery" },
    { name: "Structure", href: "#structure" },
    { name: "Contact", href: "#contact" },
  ];

  // Variasi animasi untuk container menu mobile
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: "-100%",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.5,
        staggerChildren: 0.1, // Memberi jeda animasi untuk setiap item di dalamnya
      },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.3,
      },
    },
  };

  // Variasi animasi untuk setiap link di menu mobile
  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        {/* Background Layer */}
        <div
          className={`absolute top-0 left-0 h-full w-full transition-all duration-300 ease-in-out ${
            scrolled || isMenuOpen // Background juga aktif saat menu terbuka
              ? "bg-gray-950/70 backdrop-blur-sm border-b border-gray-600"
              : "bg-transparent border-b border-transparent"
          }`}
        />
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 w-full"
        >
          <div className="mx-auto py-2 flex justify-between items-center px-6 sm:px-10 md:px-24">
            <Link
              href="/"
              className="relative w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
            >
              <Image
                src="/logo.png"
                alt="KKNT UNESA DESA KEMBANGBELOR 2025"
                fill
                className="object-contain"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-lg">
              {navLinks.map((nav) => (
                <Link
                  key={nav.name}
                  href={nav.href}
                  className="text-gray-200 hover:text-white transition-colors duration-200"
                >
                  {nav.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white z-50 p-2"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                // Ikon 'X' (Close)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Ikon Hamburger
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/90 backdrop-blur-lg z-40 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((nav) => (
              <motion.div key={nav.name} variants={linkVariants}>
                <Link
                  href={nav.href}
                  onClick={() => setIsMenuOpen(false)} // Tutup menu saat link di-klik
                  className="text-gray-200 hover:text-white transition-colors duration-200 text-3xl font-semibold"
                >
                  {nav.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
