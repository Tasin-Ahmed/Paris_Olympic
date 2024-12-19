import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ufimmifputd3kkkvdgmb')" }}>
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center text-white p-4">
          <h1 className="text-6xl font-bold">Paris 2024 Olympics</h1>
          <p className="mt-4 text-lg">Experience the grandeur of sports and culture in the heart of France</p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded hover:bg-blue-700">
            Explore Events
          </button>
        </div>
      </header>

      {/* Highlights Section */}
      <section className="py-12 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">Event Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-gray-100 shadow rounded">
              <img src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/Q37GCXXWQJN6PCFKAWPISHPAPA.jpg" alt="Athletics" className="w-full h-40 object-cover rounded" />
              <h3 className="mt-4 text-2xl font-semibold">Athletics</h3>
              <p className="mt-2 text-gray-600">Feel the thrill as athletes compete in iconic track and field events.</p>
            </div>
            <div className="p-6 bg-gray-100 shadow rounded">
              <img src="https://assets.vogue.com/photos/66a8fae9fd63c7f8cc60517d/master/w_2560%2Cc_limit/GettyImages-2164260721.jpg" alt="Swimming" className="w-full h-40 object-cover rounded" />
              <h3 className="mt-4 text-2xl font-semibold">Swimming</h3>
              <p className="mt-2 text-gray-600">Witness world-class swimmers making history at the aquatic center.</p>
            </div>
            <div className="p-6 bg-gray-100 shadow rounded">
              <img src="https://www.wwlp.com/wp-content/uploads/sites/26/2021/07/howtowatch-thumb.jpg" alt="Gymnastics" className="w-full h-40 object-cover rounded" />
              <h3 className="mt-4 text-2xl font-semibold">Gymnastics</h3>
              <p className="mt-2 text-gray-600">Marvel at incredible routines performed by top gymnasts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Join the Celebration</h2>
          <p className="mt-4 text-lg">Stay updated with the latest news and events from Paris 2024 Olympics.</p>
          <form className="mt-6 flex flex-col md:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-md text-gray-800 focus:outline-none"
            />
            <button type="submit" className="px-6 py-3 bg-white text-blue-600 font-semibold text-lg rounded hover:bg-gray-100">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-6 bg-gray-800 text-gray-400 text-center">
        <p>© 2024 Paris Olympics. All rights reserved.</p>
      </footer>
    </div>
  );
}
