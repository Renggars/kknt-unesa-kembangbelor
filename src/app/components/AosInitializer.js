"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AosInitializer() {
  // Inisialisasi AOS di dalam useEffect
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true,
    });
  }, []);

  // Komponen ini tidak perlu me-render apapun
  return null;
}
