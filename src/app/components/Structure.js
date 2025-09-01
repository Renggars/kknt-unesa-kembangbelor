"use client";

import Image from "next/image";
import React, { useState } from "react";

const ORGANIZATIONAL_CHART_DATA = {
  dosen: {
    mame: "Renggars1",
    position: "Dosen",
    major: "Teknik Informatika",
    imageUrl: "/profile.jpeg",
  },
  ketuaKelas: {
    name: "Renggars2",
    position: "Ketua Kelas",
    major: "Teknik Informatika",
    imageUrl: "/profile.jpeg",
  },
  wakilKetua: {
    name: "Renggars3",
    position: "Wakil Ketua",
    major: "Teknik Informatika",
    imageUrl: "/profile.jpeg",
  },
  sekretaris: [
    {
      name: "Renggars4",
      position: "Sekretaris",
      major: "Teknik Informatika",
      imageUrl: "/profile.jpeg",
    },
    {
      name: "Renggars5",
      major: "Teknik Informatika",
      imageUrl: "/profile.jpeg",
    },
  ],
  bendahara: [
    {
      name: "Renggars 6",
      position: "Bendahara",
      major: "Teknik Informatika",
      imageUrl: "/profile.jpeg",
    },
    {
      name: "Renggars 7",
      major: "Teknik Informatika",
      imageUrl: "/profile.jpeg",
    },
  ],
  divisi: {
    humas: [
      {
        name: "Renggars 8",
        position: "Humas",
        major: "Teknik Informatika",
        imageUrl: "/profile.jpeg",
      },
      {
        name: "Renggars 9",
        major: "Teknik Informatika",
        imageUrl: "/profile.jpeg",
      },
    ],
    acara: [
      {
        name: "Renggars 10",
        position: "Acara",
        major: "Teknik Informatika",
        imageUrl: "/profile.jpeg",
      },
      {
        name: "Renggars 11",
        major: "Teknik Informatika",
        imageUrl: "/profile.jpeg",
      },
    ],
    perlengkapan: [
      {
        name: "Renggars 12",
        position: "Perlengkapan",
        major: "Teknik Informatika",
        imageUrl: "/profile.jpeg",
      },
      {
        name: "Renggars 13",
        major: "Teknik Informatika",
        imageUrl: "/profile.jpeg",
      },
    ],
    dokumentasi: [
      {
        name: "Renggars 14",
        major: "Teknik Informatika",
        imageUrl: "/profile.jpeg",
      },
      {
        name: "Renggars 15",
        major: "Teknik Informatika",
        imageUrl: "/profile.jpeg",
      },
      {
        name: "Renggars 16",
        major: "Teknik Informatika",
        imageUrl: "/profile.jpeg",
      },
    ],
  },
};

const MemberCard = ({ name, major, position, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center">
      {position && (
        <p
          className={`text-lg text-white font-medium transition-all duration-500 ease-in-out ${
            isHovered ? "-translate-y-1" : ""
          }`}
        >
          {position}
        </p>
      )}

      <div
        className="relative flex items-center space-x-4 p-3 rounded-xl shadow-lg bg-gray-800 border border-gray-700 overflow-hidden transform transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-1 hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Section */}
        <div className="flex-shrink-0 relative z-10">
          <Image
            src={imageUrl}
            alt="tes Alt"
            width={45}
            height={45}
            className={`rounded-full object-cover transition-all duration-500 ease-in-out ${
              isHovered ? "scale-105 shadow-lg" : ""
            }`}
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 flex flex-col relative z-10">
          <h3
            className={`font-bold text-lg text-gray-200
                      transition-all duration-500 ease-in-out
                      ${isHovered ? "text-white translate-x-1" : ""}`}
          >
            {name}
          </h3>
          {major && (
            <p
              className={`text-md text-gray-400 mt-[2px] transition-all duration-500 ease-in-out ${
                isHovered ? "translate-x-1" : ""
              }`}
            >
              {major}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const Structure = () => {
  return (
    <section
      id="structure"
      className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-100">
        Structure
      </h2>

      {/* Dosen */}
      <div className="flex flex-col items-center">
        <div data-aos="fade-up">
          <MemberCard
            name={ORGANIZATIONAL_CHART_DATA.dosen.name}
            position={ORGANIZATIONAL_CHART_DATA.dosen.position}
            imageUrl={ORGANIZATIONAL_CHART_DATA.dosen.imageUrl}
          />
        </div>

        {/* Vertical line */}
        <div
          className="w-0.5 h-10 bg-white"
          data-aos="fade-up"
          data-aos-delay="100"
        />
      </div>

      {/* Ketua & Wakil Ketua*/}
      <div className="flex flex-col items-center">
        <div className="flex  justify-center w-full max-w-6xl">
          {/* Horizontal line */}
          <div
            className="w-0.5 h-6 bg-white relative"
            data-aos="fade-up"
            data-aos-delay="350"
          />
          {/* Vertical line */}
          <div
            className="h-0.5 bg-white w-[630px]"
            data-aos="fade-up"
            data-aos-delay="250"
          />
          {/* Horizontal line */}
          <div
            className="w-0.5 h-6 bg-white relative"
            data-aos="fade-up"
            data-aos-delay="350"
          />
        </div>

        <div className="flex justify-center gap-[420px] mt-1">
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <MemberCard
              name={ORGANIZATIONAL_CHART_DATA.ketuaKelas.name}
              position={ORGANIZATIONAL_CHART_DATA.ketuaKelas.position}
              major={ORGANIZATIONAL_CHART_DATA.ketuaKelas.major}
              imageUrl={ORGANIZATIONAL_CHART_DATA.ketuaKelas.imageUrl}
            />
            {/* Vertical line */}
            <div
              className="w-0.5 h-6 bg-white ml-1.5"
              data-aos="fade-up"
              data-aos-delay="500"
            />
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <MemberCard
              name={ORGANIZATIONAL_CHART_DATA.wakilKetua.name}
              position={ORGANIZATIONAL_CHART_DATA.wakilKetua.position}
              major={ORGANIZATIONAL_CHART_DATA.wakilKetua.major}
              imageUrl={ORGANIZATIONAL_CHART_DATA.wakilKetua.imageUrl}
            />
            {/* Vertical line */}
            <div
              className="w-0.5 h-6 bg-white mr-1.5"
              data-aos="fade-up"
              data-aos-delay="500"
            />
          </div>
        </div>
        {/* Horizontal line */}
        <div
          className="h-0.5 bg-white w-[632px]"
          data-aos="fade-up"
          data-aos-delay="550"
        />
      </div>

      {/* LEVEL 3 (Sekretaris & Bendahara) */}
      <div className="flex flex-col items-center">
        {/* Vertical line */}
        <div
          className="w-0.5 h-10 bg-white"
          data-aos="fade-up"
          data-aos-delay="600"
        />
        <div className="flex w-full justify-center max-w-7xl">
          {/* Horizontal line */}
          <div
            className="w-0.5 h-6 bg-white relative"
            data-aos="fade-up"
            data-aos-delay="700"
          />
          {/* Vertical line */}
          <div
            className="h-0.5 w-[630px] bg-white"
            data-aos="fade-up"
            data-aos-delay="650"
          />
          {/* Horizontal line */}
          <div
            className="w-0.5 h-6 bg-white relative"
            data-aos="fade-up"
            data-aos-delay="700"
          />
        </div>

        <div className="flex justify-center gap-x-52 mt-1">
          <div className="flex flex-col items-center gap-3">
            {ORGANIZATIONAL_CHART_DATA.sekretaris.map((member, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={800 + index * 100}
              >
                <MemberCard
                  name={member.name}
                  position={member.position}
                  major={member.major}
                  imageUrl={member.imageUrl}
                />
              </div>
            ))}
          </div>

          {/* Vertical line */}
          <div
            className="w-0.5 h-64 bg-white -mt-8"
            data-aos="fade-up"
            data-aos-delay="950"
          />

          <div className="flex flex-col items-center gap-3">
            {ORGANIZATIONAL_CHART_DATA.bendahara.map((member, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={800 + index * 100}
              >
                <MemberCard
                  name={member.name}
                  position={member.position}
                  major={member.major}
                  imageUrl={member.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LEVEL 4 (Humas, Acara, Perlengkapan) */}
      <div className="flex flex-col items-center">
        {/* Horizontal line */}
        <div
          className="mx-auto h-0.5 w-[876px] bg-white"
          data-aos="fade-up"
          data-aos-delay="1050"
        />

        <div className="flex justify-center w-full max-w-5xl gap-x-[436px]">
          {/* Vertical line */}
          <div
            className="w-0.5 h-8 bg-white relative ml-1.5"
            data-aos="fade-up"
            data-aos-delay="1100"
          />
          <div
            className="w-0.5 h-8 bg-white relative"
            data-aos="fade-up"
            data-aos-delay="1100"
          />
          <div
            className="w-0.5 h-8 bg-white relative mr-1"
            data-aos="fade-up"
            data-aos-delay="1100"
          />
        </div>

        <div className="flex justify-center gap-x-[245px] mt-2">
          <div className="flex flex-col items-center gap-4">
            {ORGANIZATIONAL_CHART_DATA.divisi.humas.map((member, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={1200 + index * 100}
              >
                <MemberCard
                  name={member.name}
                  position={member.position}
                  major={member.major}
                  imageUrl={member.imageUrl}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-4">
            {ORGANIZATIONAL_CHART_DATA.divisi.acara.map((member, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={1200 + index * 100}
              >
                <MemberCard
                  name={member.name}
                  position={member.position}
                  major={member.major}
                  imageUrl={member.imageUrl}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-4">
            {ORGANIZATIONAL_CHART_DATA.divisi.perlengkapan.map(
              (member, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={1200 + index * 100}
                >
                  <MemberCard
                    name={member.name}
                    position={member.position}
                    major={member.major}
                    imageUrl={member.imageUrl}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* LEVEL 5 (Peralatan) */}
      <div className="flex flex-col items-center">
        {/* Vertical line */}
        <div
          className="w-0.5 h-10 bg-white"
          data-aos="fade-up"
          data-aos-delay="1400"
        />

        <div
          className="text-lg text-gray-400 mt-2"
          data-aos="fade-up"
          data-aos-delay="1500"
        >
          Dokumentasi
        </div>

        <div className="flex justify-center gap-4">
          {ORGANIZATIONAL_CHART_DATA.divisi.dokumentasi.map((member, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={1500}>
              <MemberCard
                name={member.name}
                major={member.major}
                imageUrl={member.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Structure;
