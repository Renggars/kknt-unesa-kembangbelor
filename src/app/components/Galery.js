"use client";

import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";

const galleryImages = [
  "/foto-1.jpg",
  "/foto-2.jpg",
  "/foto-3.jpg",
  "/foto-4.jpg",
  "/foto-5.jpg",
  "/foto-6.jpg",
];

export default function Gallery() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section
      id="gallery"
      className="relative w-full min-h-screen py-20 flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br "></div>

      <div className="relative z-10 w-full  mx-auto">
        {/* Title */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Gallery
          </h2>
          <p className="px-2 mt-3 md:mt-4 text-lg md:text-xl text-gray-400">
            Kumpulan momen tak terlupakan dari perjalanan kami di Desa
            Kembangbelor 2025
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            spaceBetween={100}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="w-full"
          >
            {galleryImages.map((src, index) => (
              <SwiperSlide
                key={index}
                style={{ width: "auto", maxWidth: "65%" }}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  width={750}
                  height={850}
                  className="rounded-2xl object-cover shadow-2xl"
                />
              </SwiperSlide>
            ))}

            <div className="slider-controler mt-8">
              <div className="swiper-button-prev slider-arrow"></div>
              <div className="swiper-button-next slider-arrow"></div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </motion.div>

        {/* Additional Content & CTA */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.8 }}
          variants={fadeIn}
          className="text-center mt-16"
        >
          <h3 className="text-xl font-semibold text-white">
            Momen Terbaik Kami
          </h3>
          <p className="px-2 max-w-2xl mx-auto mt-3 text-lg text-gray-400">
            Setiap foto menyimpan cerita unik, dari canda tawa di kelas hingga
            kebersamaan saat acara KKN. Ini adalah arsip digital dari kenangan
            yang membentuk kami.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
