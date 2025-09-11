import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Galery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Structure from "./components/Structure";

export default function Home() {
  return (
    <main className="bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <Gallery />
      <Structure />
      <Contact />
      <Footer />
    </main>
  );
}
