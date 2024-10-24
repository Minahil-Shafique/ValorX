"use client";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center md:text-left">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-10">About Us</h2>

        <div className="md:flex md:items-center md:space-x-10">
          {/* About Image */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img
              src="/valorX.jpeg"  // Replace with an actual image path
              alt="ValorX Team"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* About Content */}
          <div className="md:w-1/2">
            <p className="text-lg mb-6 text-gray-300">
              At <span className="font-bold text-white">ValorX</span>, we are passionate about transforming ideas into captivating digital art. With a team of experienced designers and artists, we specialize in creating unique avatars, stunning illustrations, and customized artwork tailored to your needs.
            </p>
            <p className="text-lg text-gray-300">
              Our mission is to empower businesses and individuals through creative visual solutions. Whether you’re looking for a personal touch in your branding, or bespoke art for a project, we strive to deliver high-quality, original pieces that make a lasting impression.
            </p>

            {/* Additional Details */}
            <div className="mt-8 space-y-4">
              <p className="text-gray-400">🎨 Over 100+ custom illustrations delivered</p>
              <p className="text-gray-400">✨ Clients worldwide trust our artistic expertise</p>
              <p className="text-gray-400">🌟 Passionate about bringing your vision to life</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
