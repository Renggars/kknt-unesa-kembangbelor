"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { LuMessageCircleMore, LuSend, LuImagePlus } from "react-icons/lu";

// Komponen untuk bagian Lokasi dan Kontak
const ContactSection = () => {
  const socialMediaLinks = [
    {
      icon: "/gmail.png",
      label: "contact@kknKembangBelor",
      link: "mailto:contact@kknKembangBelor",
    },
    {
      icon: "/instagram.png",
      label: "instagram.com/kknKembangBelor",
      link: "https://www.instagram.com/kknt_kembangbelor/",
    },
    {
      icon: "/tiktok.png",
      label: "@kknt.kembang.belor",
      link: "https://www.tiktok.com/@kknt.kembang.belor",
    },
  ];

  return (
    <div className="flex flex-col items-center md:items-start w-full">
      {/* Bagian Kiri: Our Location */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-100">
        Our location
      </h2>
      <div className="relative w-full h-[200px] lg:h-[300px] rounded-2xl overflow-hidden shadow-xl border border-gray-700">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1715.1369198696264!2d112.55926104599824!3d-7.656485360177616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78770df742bbdb%3A0x240424901653d069!2zQmFsYWkgRGVzYSBLZW1iYW5nYmVsb3Ig6qan6qat6qa66qai6qa66qax6qaP6qa66qap6qeA6qan6qaB6qan6qa66qat6qa66qa06qaC!5e0!3m2!1sid!2sid!4v1756642655544!5m2!1sid!2sid"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0"
        />
      </div>

      {/* Bagian Kanan / bawhahContact Us */}
      <div className="flex flex-col items-center md:items-start mt-8 w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-100">
          Contact us
        </h2>
        <div className="w-full flex-col items-center md:items-start">
          {/* Alamat */}
          <div className="flex items-start mb-6">
            <span className="text-2xl hidden lg:inline-block">📍</span>
            <p className="md:text-lg text-gray-300">
              Jl.Tirtawning No.05, Belor, Kembangbelor, Kec. Pacet, <br />
              Kabupaten Mojokerto, Jawa Timur 61374
            </p>
          </div>
          {/* Tombol Get Direction */}
          <Link
            href="https://maps.app.goo.gl/4Twt4iZv3TsfqsWu8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-orange-500 hover:bg-orange-400 text-white font-semibold py-2 lg:py-3 px-5 lg:px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 mb-8 cursor-pointer">
              GET DIRECTION
            </button>
          </Link>
          {/* Tautan Media Sosial */}
          <div className="flex flex-col space-y-4 w-fulld">
            {socialMediaLinks.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
              >
                <div className="flex gap-4 items-center">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={28} // Ukuran ikon dikecilkan sedikit untuk mobile
                    height={28}
                    className="sm:w-10 sm:h-10"
                  />
                  <p className=" md:text-xl">{item.label}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Komponen untuk bagian Komentar
const CommentForm = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("");
  const fileInputRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFileName(e.target.files[0].name);
    }
  };

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      const newComment = {
        id: Date.now(),
        name: data.name,
        message: data.message,
        profilePhoto: "https://via.placeholder.com/100x100.png?text=Profile", // Placeholder photo
        timestamp: Date.now(),
      };
      setComments((prevComments) => [...prevComments, newComment]);
      reset();
      setSelectedFileName("");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-gray-900 p-6 md:p-8 rounded-2xl w-full">
      <div className="flex items-center gap-4 mb-10 mt-1">
        <div className="p-3 rounded-2xl bg-indigo-500/25">
          <LuMessageCircleMore className="text-3xl md:text-4xl text-indigo-500" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
          Comments{" "}
          <span className="text-indigo-500/20">({comments.length})</span>
        </h2>
      </div>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Name</span>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder="Your Name"
            className="bg-gray-800 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-white font-medium mb-4">Your Message</span>
          <textarea
            {...register("message", { required: "Message is required" })}
            rows="4"
            placeholder="Your Message"
            className="bg-gray-800 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </label>
        <div className="flex flex-col">
          <label className="text-white font-medium mb-4">
            Profile Photo <span className="text-gray-400"> (optional)</span>
          </label>
          <div className="flex flex-col items-center gap-2 p-4 bg-gray-800 rounded-xl">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
            <button
              disabled
              type="button"
              onClick={() => fileInputRef.current.click()}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-indigo-400 bg-indigo-500/20 hover:bg-indigo-500/30 transition-all duration-300 group"
            >
              <LuImagePlus className="text-2xl group-hover:scale-110 transition-transform" />
              <span>Choose Profile Photo</span>
            </button>
            {selectedFileName && (
              <p className="text-center text-gray-400 mt-2">
                {selectedFileName}
              </p>
            )}
            <p className="text-center text-gray-300 mt-2">Max file size: 5MB</p>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full relative h-12 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-semibold rounded-2xl overflow-hidden group transition-all duration-250"
        >
          <div className="absolute bg-white/30 inset-0 translate-y-12 group-hover:translate-y-0 transition-transform duration-500" />
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Posting...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <LuSend className="text-xl" />
              <span>Post Comment</span>
            </div>
          )}
        </button>
      </form>
      <div className="mt-6 h-full max-h-[400px] overflow-y-auto flex flex-col gap-2">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-800 p-4 rounded-lg mt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {comment.profilePhoto ? (
                  <Image
                    src={comment.profilePhoto}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover"
                    width={40}
                    height={40}
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-600" />
                )}
                <div className="flex flex-col">
                  <p className="text-white font-bold">{comment.name}</p>
                  <p className="text-gray-300 mt-2">{comment.message}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                {comment.timestamp
                  ? new Date(comment.timestamp).toLocaleString()
                  : "Just now"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full bg-black text-white min-h-screen flex flex-col lg:grid lg:grid-cols-2 items-center justify-center gap-12 lg:gap-20 py-16 px-6 sm:px-12 md:px-16 lg:px-10 xl:px-24"
    >
      <ContactSection />
      <CommentForm />
    </section>
  );
};

export default Contact;
