export default function Events() {
  const eventsData = [
    {
      title: "Track & Field",
      description: "Witness speed, endurance, and skill as athletes compete in track and field events.",
      image: "https://img.olympics.com/images/image/private/t_16-9_760/f_auto/primary/anqzatvkwbptzkgx9guw",
      link: "https://olympics.com/en/sport-events/2024-ibu-biathlon-world-cup-annecy"
    },
    {
      title: "Para Athletics",
      description: "India to host Para Athletics World Championships 2025 in New Delhi",
      image: "https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w2440/f_auto/primary/nobzmv137gsas0q6cnv9",
      link: "https://olympics.com/en/news/para-athletics-world-championships-2025-india-host-new-delhi"
    },
    {
      title: "Snow Board",
      description: "Marvel at the grace and strength of gymnasts from across the globe.",
      image: "https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w2440/f_auto/primary/b8u33qcnf1ydknirzczm",
      link: "https://olympics.com/en/news/stars-to-watch-at-the-fis-snowboard-world-cup-parallel-slalom-in-davos"
    },
  ];

  return (
    <section id="events" className="pt-20 bg-cover bg-center py-16 relative" style={{ backgroundImage: "url('/images/events-bg.jpg')" }}>
      <div className="container mx-auto text-center text-white relative z-10">
        <h2 className="text-4xl font-bold mb-6">Upcoming Events</h2>
        <p className="text-lg mb-12">Join us for an unforgettable experience filled with athleticism, excitement, and passion!</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {eventsData.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-gray-700 font-bold text-xl mb-4">{event.title}</h3>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <a href={event.link} className="text-indigo-600 hover:text-indigo-800 transition-all duration-200">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
    </section>
  );
}
