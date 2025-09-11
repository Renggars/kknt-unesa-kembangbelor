// app/components/Hero.js
"use client";

import { motion } from "motion/react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute left-0 w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/blog.png')" }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-purple-900/50 to-black/60" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center text-white px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl mb-2 font-light tracking-wide"
        >
          Hi, There!
        </motion.p>
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold uppercase tracking-tighter"
          style={{ textShadow: "0px 4px 15px rgba(0,0,0,0.5)" }}
        >
          Welcome
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg lg:text-xl xl::text-2xl mt-3 font-medium text-gray-300"
        >
          TO KKNT UNESA DESA KEMBANGBELOR 2025
        </motion.p>

        <motion.div variants={itemVariants} className="mt-8 sm:mt-10">
          <button className="bg-white text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer">
            Jelajahi Karya Kami
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
