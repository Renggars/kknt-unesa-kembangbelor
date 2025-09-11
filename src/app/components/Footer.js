import React from "react";
import Link from "next/link"; // Gunakan Link dari Next.js jika Anda memakainya
import { FaInstagram, FaTiktok } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="px-12 py-12 md:px-16 lg:px-10 xl:px-20">
        {/* Bagian Atas Footer dengan Kolom-kolom */}
        <div className="grid grid-cols-2 gap-6 md:gap-2 lg:gap-8 md:grid-cols-4">
          {/* Kolom 1: Logo & Deskripsi Singkat */}
          <div className="flex items-start justify-center">
            <Image
              src={"/logo.png"}
              alt="Logo"
              width={120}
              height={120}
              className="hidden xl:block"
            />
            <div className="col-span-2">
              <h2 className="lg:text-xl font-bold text-white sm:mb-2 xl:mb-2">
                KKNT UNESA 2025
              </h2>
              <p className="text-gray-400 text-sm">
                Program Kuliah Kerja Nyata Tematik oleh Universitas Negeri
                Surabaya di Desa Kembangbelor.
              </p>
              <Image
                src="/logo.png"
                alt="Logo"
                width={120}
                height={120}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain xl:hidden"
              />
            </div>
          </div>

          {/* Kolom 2: Link Navigasi Cepat */}
          <div className="sm:ml-12 md:ml-10 lg:ml-16 xl:ml-20">
            <h3 className="font-semibold text-white tracking-wider uppercase sm::mb-2 lg:mb-4">
              Explore
            </h3>
            <ul className="sm:space-y-1 md:space-y-2 lg:space-y-3">
              <li>
                <Link
                  href="#home"
                  className="hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="hover:text-white transition-colors duration-200"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#structure"
                  className="hover:text-white transition-colors duration-200"
                >
                  Structure
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Informasi Kontak */}
          <div>
            <h3 className="font-semibold text-white tracking-wider uppercase sm:mb-2 lg:mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <IoLocation className="text-red-500 sm:text-3xl md:text-4xl lg:text-3xl mr-2" />
                <span className="md:text-xs lg:text-sm">
                  Jl.Tirtawning No.05, Belor, Kembangbelor, Kec. Pacet, <br />
                  Kabupaten Mojokerto, Jawa Timur 61374
                </span>
              </li>
              <li className="flex items-center">
                <Image
                  src="/gmail.png"
                  alt="Gmail"
                  width={24}
                  height={24}
                  className="mr-2 w-5 h-5 sm:w-5 sm:h-5 md:w-4 md:h-4 object-contain"
                />

                <a
                  href="mailto:info@kknunesa.com"
                  className="hover:text-white md:text-sm lg:text-base transition-colors duration-200"
                >
                  contact@kknKembangBelor
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Media Sosial */}
          <div className="sm:ml-12 md:ml-7 lg:ml-0">
            <h3 className="font-semibold text-white tracking-wider uppercase sm:mb-2 lg:mb-4">
              Follow Us
            </h3>
            <p className="text-sm text-gray-400 sm:mb-2 lg:mb-4">
              Dapatkan update terbaru dari kegiatan kami.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/kknt_kembangbelor"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                href="https://www.tiktok.com/@kknt.kembang.belor"
                aria-label="Tiktok"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaTiktok size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Garis Pemisah */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          {/* Bagian Bawah Footer: Copyright & Credit */}
          <div className="text-center text-sm text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} KKNT UNESA Kembangbelor. All
              Rights Reserved.
            </p>
            <p className="mt-2">
              Developed by{" "}
              <Link
                href="https://portfolio-reactjs-wine.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gray-400 hover:text-white transition-colors"
              >
                Renggars
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
