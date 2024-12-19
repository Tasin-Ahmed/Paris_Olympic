export default function Events() {
    const eventsData = [
      {
        title: "Track & Field",
        description: "Witness speed, endurance, and skill as athletes compete in track and field events.",
        image: "/images/track-field.jpg",
        link: "/events/track-and-field"
      },
      {
        title: "Swimming",
        description: "Dive into the excitement with world-class swimming competitions.",
        image: "/images/swimming.jpg",
        link: "/events/swimming"
      },
      {
        title: "Gymnastics",
        description: "Marvel at the grace and strength of gymnasts from across the globe.",
        image: "/images/gymnastics.jpg",
        link: "/events/gymnastics"
      },
    ];
  
    return (
      <section id="events" className="bg-cover bg-center py-16 relative" style={{ backgroundImage: "url('/images/events-bg.jpg')" }}>
        <div className="container mx-auto text-center text-white relative z-10">
          <h2 className="text-4xl font-bold mb-6">Upcoming Events</h2>
          <p className="text-lg mb-12">Join us for an unforgettable experience filled with athleticism, excitement, and passion!</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventsData.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-4">{event.title}</h3>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <a href={event.link} className="text-indigo-600 hover:text-indigo-800 transition-all duration-200">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Overlay for background image */}
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      </section>
    );
  }
  