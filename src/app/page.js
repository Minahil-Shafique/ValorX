import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 text-white">
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Contact />
    <Footer />
  </div>
  );
}
