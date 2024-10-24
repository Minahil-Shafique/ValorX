"use client";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-800 text-white text-center">
      {/* Title */}
      <h2 className="text-4xl font-bold mb-10">Our Services</h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Service 1: Custom Avatars */}
        <div className="p-8 bg-gray-900 rounded-lg transition duration-300 hover:bg-gray-700 hover:scale-105">
          <h3 className="text-2xl font-semibold">Custom Avatars</h3>
          <p className="mt-4 text-gray-300">
            Personalized avatars designed to reflect your unique identity. Whether for branding, social media, or gaming, we craft avatars that stand out.
          </p>
        </div>

        {/* Service 2: Full-Body Illustrations */}
        <div className="p-8 bg-gray-900 rounded-lg transition duration-300 hover:bg-gray-700 hover:scale-105">
          <h3 className="text-2xl font-semibold">Full-Body Illustrations</h3>
          <p className="mt-4 text-gray-300">
            High-quality, detailed full-body illustrations tailored to your needs. Perfect for character design, promotional material, or digital art collections.
          </p>
        </div>

        {/* Service 3: Digital Portraits */}
        <div className="p-8 bg-gray-900 rounded-lg transition duration-300 hover:bg-gray-700 hover:scale-105">
          <h3 className="text-2xl font-semibold">Digital Portraits</h3>
          <p className="mt-4 text-gray-300">
            Stunning digital portraits that capture the essence of your character. Ideal for personal gifts, profile pictures, and more.
          </p>
        </div>

        {/* Service 4: Custom Artwork for Products */}
        <div className="p-8 bg-gray-900 rounded-lg transition duration-300 hover:bg-gray-700 hover:scale-105">
          <h3 className="text-2xl font-semibold">Custom Artwork for Products</h3>
          <p className="mt-4 text-gray-300">
            Unique artwork designed for your products—whether it’s merchandise, packaging, or branding. We bring your vision to life with creative designs.
          </p>
        </div>

        {/* Service 5: Character Design */}
        <div className="p-8 bg-gray-900 rounded-lg transition duration-300 hover:bg-gray-700 hover:scale-105">
          <h3 className="text-2xl font-semibold">Character Design</h3>
          <p className="mt-4 text-gray-300">
            From concept to final design, we create dynamic characters with personality, tailored to your needs for games, animation, or marketing.
          </p>
        </div>

        {/* Service 6: Vector Illustrations */}
        <div className="p-8 bg-gray-900 rounded-lg transition duration-300 hover:bg-gray-700 hover:scale-105">
          <h3 className="text-2xl font-semibold">Vector Illustrations</h3>
          <p className="mt-4 text-gray-300">
            Scalable vector illustrations perfect for web, print, and branding purposes. Crisp, clean, and ready to enhance your projects.
          </p>
        </div>
      </div>

    </section>
  );
}
