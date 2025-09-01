"use client";

import Image from "next/image";
import React from "react";

const ORGANIZATIONAL_CHART_DATA = {
  dosen: {
    mame: "Dosen1",
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
  sekretaris: {
    name: "Renggars4",
    position: "Sekretaris",
    major: "Teknik Informatika",
    imageUrl: "/profile.jpeg",
  },

  bendahara: {
    name: "Renggars 6",
    position: "Bendahara",
    major: "Teknik Informatika",
    imageUrl: "/profile.jpeg",
  },
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

const MemberCard = ({ name, major, imageUrl }) => {
  return (
    <div
      // Kontainer utama card dengan efek hover group
      className="group relative flex items-center space-x-2 lg:space-x-3  md:space-x-3 p-2 md:p-3 rounded-xl shadow-lg bg-gray-800 border border-gray-700 overflow-hidden transform transition-all duration-300 ease-in-out hover:shadow-indigo-500/30 hover:-translate-y-1 hover:scale-105"
    >
      {/* 1. Bagian Kiri: Gambar */}
      <div className="flex-shrink-0">
        <div className="relative w-7 h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 ">
          <Image
            src={imageUrl}
            alt={`Foto ${name}`}
            fill
            className="rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      {/* 2. Bagian Kanan: Konten Teks */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Nama (Atas) */}
        <h3 className="text-xs md:text-sm font-semibold text-gray-100 truncate group-hover:text-white transition-colors duration-300">
          {name}
        </h3>

        {/* Jurusan (Bawah) */}
        {major && (
          <p className="text-xs lg:text-sm text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
            {major}
          </p>
        )}
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
      <h2 className="text-2xl md:text-3xl font-bold mb-5 text-gray-100">
        Structure
      </h2>

      {/* Dosen */}
      <div className="flex flex-col items-center">
        <div
          className="text-white my-1"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Dosen
        </div>
        <div data-aos="fade-up">
          <MemberCard
            name={ORGANIZATIONAL_CHART_DATA.dosen.mame}
            position={ORGANIZATIONAL_CHART_DATA.dosen.position}
            imageUrl={ORGANIZATIONAL_CHART_DATA.dosen.imageUrl}
          />
        </div>

        {/* Vertical line */}
        <div
          className="w-0.5 h-6 bg-white"
          data-aos="fade-up"
          data-aos-delay="100"
        />
      </div>

      {/* Ketua & Wakil Ketua*/}
      <div className="flex flex-col items-center">
        <div className="flex justify-center w-full">
          {/* Horizontal line */}
          <div
            className="w-0.5 h-5 bg-white relative"
            data-aos="fade-up"
            data-aos-delay="200"
          />
          {/* Vertical line */}
          <div
            className="h-0.5 bg-white w-[170px] sm:w-[190px] md:w-[270px] lg:w-[450px] xl:w-[600px]"
            data-aos="fade-up"
            data-aos-delay="150"
          />
          {/* Horizontal line */}
          <div
            className="w-0.5 h-5 bg-white relative"
            data-aos="fade-up"
            data-aos-delay="200"
          />
        </div>

        <div className="flex justify-center gap-x-[24px] sm:gap-[38px] md:gap-x-[115px] lg:gap-x-[272px] xl:gap-[414px]">
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <div className="text-white my-1">Ketua</div>
            <MemberCard
              name={ORGANIZATIONAL_CHART_DATA.ketuaKelas.name}
              position={ORGANIZATIONAL_CHART_DATA.ketuaKelas.position}
              major={ORGANIZATIONAL_CHART_DATA.ketuaKelas.major}
              imageUrl={ORGANIZATIONAL_CHART_DATA.ketuaKelas.imageUrl}
            />
            {/* Vertical line */}
            <div
              className="w-0.5 h-5 bg-white ml-1.5"
              data-aos="fade-up"
              data-aos-delay="250"
            />
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <div className="text-white my-1">Wakil Ketua</div>
            <MemberCard
              name={ORGANIZATIONAL_CHART_DATA.wakilKetua.name}
              position={ORGANIZATIONAL_CHART_DATA.wakilKetua.position}
              major={ORGANIZATIONAL_CHART_DATA.wakilKetua.major}
              imageUrl={ORGANIZATIONAL_CHART_DATA.wakilKetua.imageUrl}
            />
            {/* Vertical line */}
            <div
              className="w-0.5 h-5 bg-white mr-1.5"
              data-aos="fade-up"
              data-aos-delay="250"
            />
          </div>
        </div>
        {/* Horizontal line */}
        <div
          className="h-0.5 bg-white w-[170px] sm:w-[184px] md:w-[270px] lg:w-[451px] xl:w-[600px]"
          data-aos="fade-up"
          data-aos-delay="300"
        />
      </div>

      {/* LEVEL 3 (Sekretaris & Bendahara) */}
      <div className="flex flex-col items-center">
        {/* Vertical line */}
        <div
          className="w-0.5 h-10 bg-white"
          data-aos="fade-up"
          data-aos-delay="350"
        />
        <div className="flex w-full justify-center max-w-7xl">
          {/* Horizontal line */}
          <div
            className="w-0.5 h-5 bg-white relative"
            data-aos="fade-up"
            data-aos-delay="400"
          />
          {/* Vertical line */}
          <div
            className="h-0.5 w-[170px] sm:w-[184px] md:w-[270px] lg:w-[450px] xl:w-[596px] bg-white"
            data-aos="fade-up"
            data-aos-delay="400"
          />
          {/* Horizontal line */}
          <div
            className="w-0.5 h-5 bg-white relative"
            data-aos="fade-up"
            data-aos-delay="400"
          />
        </div>
        <div className="flex justify-center gap-x-[24px] sm:gap-x-[38px] md:gap-x-[115px] lg:gap-x-[284px] xl:gap-[420px]">
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <div className="text-white my-1">Sekretaris</div>
            <MemberCard
              name={ORGANIZATIONAL_CHART_DATA.sekretaris.name}
              position={ORGANIZATIONAL_CHART_DATA.sekretaris.position}
              major={ORGANIZATIONAL_CHART_DATA.sekretaris.major}
              imageUrl={ORGANIZATIONAL_CHART_DATA.sekretaris.imageUrl}
            />
            {/* Vertical line */}
            <div
              className="w-0.5 h-8 sm:h-5 bg-white ml-1.5"
              data-aos="fade-up"
              data-aos-delay="500"
            />
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <div className="text-white my-1">Bendahara</div>
            <MemberCard
              name={ORGANIZATIONAL_CHART_DATA.bendahara.name}
              position={ORGANIZATIONAL_CHART_DATA.bendahara.position}
              major={ORGANIZATIONAL_CHART_DATA.bendahara.major}
              imageUrl={ORGANIZATIONAL_CHART_DATA.bendahara.imageUrl}
            />
            {/* Vertical line */}
            <div
              className="w-0.5 h-8 sm:h-5 bg-white mr-1.5"
              data-aos="fade-up"
              data-aos-delay="500"
            />
          </div>
        </div>
      </div>

      {/* LEVEL 4 (Humas, Acara, Perlengkapan) */}
      <div className="flex flex-col items-center">
        {/* Horizontal line */}
        <div
          className="mx-auto h-0.5 sm:w-[400px] md:w-[550px] lg:w-[730px] xl:w-[834px] bg-white"
          data-aos="fade-up"
          data-aos-delay="550"
        />

        <div className="hidden sm:flex justify-center w-full max-w-5xl sm:gap-x-[197px] md:gap-x-[272px] lg:gap-x-[362px] xl:gap-x-[414px]">
          {/* Vertical line */}
          <div
            className="w-0.5 h-5 bg-white relative ml-1"
            data-aos="fade-up"
            data-aos-delay="550"
          />
          <div
            className="w-0.5 h-5 bg-white relative"
            data-aos="fade-up"
            data-aos-delay="550"
          />
          <div
            className="w-0.5 h-5 bg-white relative mr-1"
            data-aos="fade-up"
            data-aos-delay="550"
          />
        </div>

        <div className="flex justify-center gap-x-[120px] sm:gap-x-[150px] md:gap-x-[230px] lg:gap-x-[324px] xl:gap-x-[367px] my-1">
          <div data-aos="fade-up" data-aos-delay="600">
            Humas
          </div>
          <div data-aos="fade-up" data-aos-delay="600">
            Acara
          </div>
          <div
            className="hidden sm:block"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Perkap
          </div>
        </div>

        <div className="flex justify-center gap-x-[24px] sm:gap-x-[50px] md:gap-x-[120px] lg:gap-x-[180px] xl:gap-x-[25px] 2xl:gap-x-[40px">
          <div className="flex flex-col xl:flex-row  gap-3">
            {ORGANIZATIONAL_CHART_DATA.divisi.humas.map((member, index) => (
              <div
                key={`humas-${index}`}
                data-aos="fade-up"
                data-aos-delay={550 + index * 50}
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
          <div className="flex flex-col xl:flex-row  gap-3">
            {ORGANIZATIONAL_CHART_DATA.divisi.acara.map((member, index) => (
              <div
                key={`acara-${index}`}
                data-aos="fade-up"
                data-aos-delay={550 + index * 50}
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

          <div className="hidden sm:flex sm:flex-col xl:flex-row gap-3">
            {ORGANIZATIONAL_CHART_DATA.divisi.perlengkapan.map(
              (member, index) => (
                <div
                  key={`perlengkapan-${index}`}
                  data-aos="fade-up"
                  data-aos-delay={550 + index * 50}
                >
                  <MemberCard
                    name={member.name}
                    major={member.major}
                    imageUrl={member.imageUrl}
                  />
                </div>
              )
            )}
          </div>
        </div>
        <div
          className="flex sm:hidden xl:flex gap-x-40"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="w-0.5 h-5 bg-white " />
          <div className="w-0.5 h-5 bg-white" />
        </div>

        <div
          className="flex sm:hidden xl:inline-block h-0.5 bg-white w-[164px]"
          data-aos="fade-up"
          data-aos-delay="650"
        />
      </div>

      {/* Vertical line */}
      <div
        className="w-0.5 h-6 bg-white"
        data-aos="fade-up"
        data-aos-delay="700"
      />
      <div className="sm:hidden my-1" data-aos="fade-up" data-aos-delay="600">
        Perkap
      </div>
      <div className="flex justify-center gap-x-[24px]">
        <div className="flex flex-col sm:hidden gap-3">
          {ORGANIZATIONAL_CHART_DATA.divisi.perlengkapan.map(
            (member, index) => (
              <div
                key={`perlengkapan-${index}`}
                data-aos="fade-up"
                data-aos-delay={550 + index * 50}
              >
                <MemberCard
                  name={member.name}
                  major={member.major}
                  imageUrl={member.imageUrl}
                />
              </div>
            )
          )}
        </div>
      </div>

      {/* LEVEL 5 (Dokumentasi) */}
      <div className="flex flex-col items-center">
        {/* Vertical line */}
        <div
          className="w-0.5 h-6 bg-white"
          data-aos="fade-up"
          data-aos-delay="700"
        />

        <div
          className="text-lg text-white my-1"
          data-aos="fade-up"
          data-aos-delay="750"
        >
          Dokumentasi
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {ORGANIZATIONAL_CHART_DATA.divisi.dokumentasi.map((member, index) => (
            <div
              key={`dokumentasi-${index}`}
              data-aos="fade-up"
              data-aos-delay={700 + index * 50}
            >
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
