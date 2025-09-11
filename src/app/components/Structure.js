"use client";

import Image from "next/image";
import React from "react";

const ORGANIZATIONAL_CHART_DATA = {
  dosen: {
    mame: "Aby Nugrah Septanto, S.Kep.,Ns., M.Sc.",
    position: "Dosen Pembimbing Lapangan",
    imageUrl: "/struktur/dosen.png",
  },
  ketuaKelas: {
    name: "Teguh",
    position: "Ketua",
    major: "Ilmu Keolahragaan",
    imageUrl: "/struktur/teguh.png",
  },
  sekretaris: {
    name: "Amanda",
    position: "Sekretaris",
    major: "Ilmu Administrasi Negara",
    imageUrl: "/struktur/amanda.png",
  },

  bendahara: {
    name: "Fadilah",
    position: "Bendahara",
    major: "Akuntansi",
    imageUrl: "/struktur/fadhilah.png",
  },
  divisi: {
    humas: [
      {
        name: "Tya",
        position: "Humas",
        major: "Manajemen",
        imageUrl: "/struktur/tya.png",
      },
      {
        name: "Nabila",
        major: "Ekonomi",
        imageUrl: "/struktur/nabila.png",
      },
      {
        name: "Charina",
        major: "Manajemen",
        imageUrl: "/struktur/charina.png",
      },
    ],
    acara: [
      {
        name: "Theo",
        position: "Acara",
        major: "Matematika",
        imageUrl: "/struktur/theo.png",
      },
      {
        name: "Nurna",
        major: "PPKN",
        imageUrl: "/struktur/nurna.png",
      },
      {
        name: "Isna",
        major: "Akuntansi",
        imageUrl: "/struktur/isna.png",
      },
    ],
    perlengkapan: [
      {
        name: "Iqbal",
        position: "Perlengkapan",
        major: "Ilmu Keolahragaan",
        imageUrl: "/struktur/iqbal.png",
      },
      {
        name: "Burhan",
        major: "Teknik Sipil",
        imageUrl: "/struktur/burhan.png",
      },
      {
        name: "Lutfhi",
        major: "Teknik Sipil",
        imageUrl: "/struktur/lutfhi.png",
      },
    ],
    dokumentasi: [
      {
        name: "Natsya",
        major: "Teknik Informatika",
        imageUrl: "/struktur/natasya.png",
      },
      {
        name: "Rengga",
        major: "Teknik Informatika",
        imageUrl: "/struktur/rengga.png",
      },
      {
        name: "Arta",
        major: "Teknik Informatika",
        imageUrl: "/struktur/arta.png",
      },
    ],
  },
};

const MemberCard = ({ name, major, imageUrl }) => {
  return (
    <div
      // Kontainer utama card dengan efek hover group
      className="group relative flex items-center space-x-2 lg:space-x-3  md:space-x-3 p-2 md:p-3 rounded-xl shadow-lg bg-gray-800 border border-gray-700 overflow-hidden transform transition-all duration-300 ease-in-out hover:shadow-indigo-500/30 hover:-translate-y-1 hover:scale-105 min-w-52 justify-center"
    >
      {/* 1. Bagian Kiri: Gambar */}
      <div className="flex-shrink-0">
        <div className="relative w-7 h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 ">
          <Image
            src={imageUrl}
            alt={`Foto ${name}`}
            fill
            className="rounded-full object-contain transition-transform duration-300 group-hover:scale-105"
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
      className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center scroll-mt-28"
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
          Dosen Pembimbing Lapangan
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
        </div>
      </div>

      {/* LEVEL 3 (Sekretaris & Bendahara) */}
      <div className="flex flex-col items-center justify-center">
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
            className="h-0.5 w-[170px] sm:w-[184px] md:w-[270px] lg:w-[450px] xl:w-[566px] bg-white"
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
        <div className="flex justify-center items-center gap-x-[24px] sm:gap-x-[38px] md:gap-x-[115px] lg:gap-x-[284px] xl:gap-[500px]">
          <div className="text-white my-1">Bendahara</div>
          <div className="text-white my-1">Sekretaris</div>
        </div>
        <div className="flex justify-center items-center gap-x-[24px] sm:gap-x-[38px] md:gap-x-[115px] lg:gap-x-[284px] xl:gap-[340px]">
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <MemberCard
              name={ORGANIZATIONAL_CHART_DATA.sekretaris.name}
              position={ORGANIZATIONAL_CHART_DATA.sekretaris.position}
              major={ORGANIZATIONAL_CHART_DATA.sekretaris.major}
              imageUrl={ORGANIZATIONAL_CHART_DATA.sekretaris.imageUrl}
            />
            <div
              className="w-0.5 h-5 bg-white relative mr-5"
              data-aos="fade-up"
              data-aos-delay="550"
            />
          </div>
          {/* Vertical line */}

          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <MemberCard
              name={ORGANIZATIONAL_CHART_DATA.bendahara.name}
              position={ORGANIZATIONAL_CHART_DATA.bendahara.position}
              major={ORGANIZATIONAL_CHART_DATA.bendahara.major}
              imageUrl={ORGANIZATIONAL_CHART_DATA.bendahara.imageUrl}
            />
            <div
              className="w-0.5 h-5 bg-white relative"
              data-aos="fade-up"
              data-aos-delay="550"
            />
          </div>
        </div>
        {/* Vertical line */}
        <div
          className="h-0.5 w-[170px] sm:w-[184px] md:w-[270px] lg:w-[450px] xl:w-[573px] xl:ml-[2px] bg-white"
          data-aos="fade-up"
          data-aos-delay="400"
        />
        {/* Horizontal line */}
        <div
          className="w-0.5 h-10 bg-white relative"
          data-aos="fade-up"
          data-aos-delay="550"
        />

        <div
          className="h-0.5 w-[170px] sm:w-[184px] md:w-[270px] lg:w-[450px] xl:w-[746px] bg-white"
          data-aos="fade-up"
          data-aos-delay="400"
        />
        <div className="flex justify-center items-center xl:gap-x-[370px]">
          <div
            className="w-0.5 h-5 bg-white relative"
            data-aos="fade-up"
            data-aos-delay="550"
          />
          <div
            className="w-0.5 h-5 bg-white relative"
            data-aos="fade-up"
            data-aos-delay="550"
          />
          <div
            className="w-0.5 h-5 bg-white relative"
            data-aos="fade-up"
            data-aos-delay="550"
          />
        </div>
      </div>

      {/* LEVEL 4 (Humas, Acara, Perlengkapan) */}
      <div className="flex flex-col items-center">
        {/* Vertical line */}

        <div className="flex justify-center gap-x-[120px] sm:gap-x-[150px] md:gap-x-[230px] lg:gap-x-[324px] xl:gap-x-[325px] my-1">
          <div data-aos="fade-up" data-aos-delay="600" className="">
            Humas
          </div>
          <div data-aos="fade-up" data-aos-delay="600">
            Acara
          </div>
          <div data-aos="fade-up" data-aos-delay="600" className="">
            Perkap
          </div>
        </div>

        <div className="flex justify-center gap-x-[24px] sm:gap-x-[50px] md:gap-x-[120px] lg:gap-x-[180px] xl:gap-x-[170px]">
          <div className="flex flex-col gap-3 items-center">
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
            <div className="w-0.5 h-5 bg-white" />
          </div>
          <div className="flex flex-col gap-3 items-center">
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
            <div className="w-0.5 h-5 bg-white " />
          </div>
          <div className="hidden sm:flex flex-col sm:flex-col xl:flex-col gap-3 items-center">
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
            <div className="w-0.5 h-5 bg-white " />
          </div>
        </div>

        <div
          className="flex sm:hidden xl:inline-block h-0.5 bg-white w-[758px]"
          data-aos="fade-up"
          data-aos-delay="650"
        />
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

        <div className="flex justify-center gap-x-[24px] sm:gap-x-[50px] md:gap-x-[120px] lg:gap-x-[180px] xl:gap-x-[50px] 2xl:gap-x-[80px">
          <div className="flex  justify-center gap-x-5">
            {ORGANIZATIONAL_CHART_DATA.divisi.dokumentasi.map(
              (member, index) => (
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
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Structure;
