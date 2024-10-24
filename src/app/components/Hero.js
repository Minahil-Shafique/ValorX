"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black h-screen flex items-center justify-center text-white">
      {/* Background Image or Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Optionally add a background image */}
        <Image
          src="/your-background-image.jpg"
          alt="Digital Art Background"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 text-center px-5">
        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          Empowering Your Vision <br /> with <span className="text-blue-500">Digital Art</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg md:text-xl text-gray-300">
          We create stunning digital artwork, avatars, and full-body designs to elevate your brand.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-10 flex justify-center space-x-4">
          <Link href="#portfolio">
            <button className="bg-blue-600 px-6 py-3 text-lg rounded-full hover:bg-blue-700 transition duration-300">
              View Portfolio
            </button>
          </Link>
          <Link href="#contact">
            <button className="bg-transparent border-2 border-blue-600 px-6 py-3 text-lg rounded-full hover:bg-blue-700 hover:text-white transition duration-300">
              Get a Quote
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
