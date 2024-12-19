"use client";

import React from "react";

export default function Highlights() {
  const highlights = [
    {
      title: "Fireworks bring an end to an incredible Closing Ceremony | Paris 2024 highlights",
      description: "At the Stade de France, IOC President Thomas Bach and French swimming sensation Léon Marchand and with other athletes blew out the Olympic flame in the lantern, as the Olympic Games are declared closed.",
      link: "https://olympics.app.link/7K8KpfMN8Kb",
    },
    {
      title: "Paris 2024 - The Recap | Olympic Games Paris 2024",
      description: "Experience the excitement of the Paris 2024 Games with daily sports highlights that capture the most thrilling moments from each day of competition. Relive iconic victories, unforgettable performances, and the intensity of the world's top athletes as they go for gold. This collection brings you the best of the Games, day by day.",
      link: "https://www.youtube.com/@Olympics/videos",
    },
    {
      title: "Behind the Screen | Paris 2024",
      description: "A look behind the scenes at how OBS broadcasts the biggest sporting event in the world.",
      link: "https://www.youtube.com/@Olympics/videos",
    },
    {
      title: "Best Moments | Paris 2024",
      description: "A look back at all the best moments of Paris 2024. We relive the iconic sporting achievements and memories from the Games, including the Ceremonies, all sports, and the new and familiar stars of the Olympics.",
      link: "https://www.youtube.com/@Olympics/videos",
    },
    {
      title: "Images of the Day - Day 16 | Olympic Games Paris 2024",
      description: "A look at the best moments of the Paris 2024 Games granting the chance to re-experience the greatest moments you might have missed.",
      link: "https://www.youtube.com/@Olympics/videos",
    },
    {
      title: "Triumphus Cosmos - Day 16 | Olympic Games Paris 2024",
      description: "The Golden Voyager and Olympic Rings at the Stade de France | Paris 2024 Closing Ceremony highlights. The Stade de France turned into a giant theatre, a Golden Voyager appeared from the sky, who discovered the Olympic rings, which were excavated out of the floor and hoisted into the air in the middle of the stadium.",
      link: "https://www.youtube.com/@Olympics/videos",
    },
    {
      title: "Day 16 at Paris 2024 Olympics: Sifan Hassan amazes in marathon on final day, USA double up on basketball gold and more",
      description: "On Day 16 at the Paris 2024 Olympics, Sifan Hassan of Ethiopia won gold with an Olympic record timing of 2:22.55 in the women’s marathon. USA clinched gold in women’s basketball, while China’s Li Wenwen secured gold in weightlifting in women's +81kg. Italy triumphed in women’s volleyball, Serbia won gold in men’s water polo, and Denmark claimed gold in handball. Catch all the thrilling action from the final day.",
      link: "https://www.youtube.com/@Olympics/videos",
    },
    {
      title: "Women's Omnium Finals | Cycling Track | Olympic Games Paris 2024",
      description: "The Women's Omnium Finals took place at the National Velodrome, France, on 11/08/2024. Jennifer Valente (USA) won the Gold with 144 points. Daria Pikulik (POL) came Silver and Ally Wollaston (NZL) completed the podium.",
      link: "https://www.youtube.com/@Olympics/videos",
    },
    {
      title: "Men's Freestyle 97kg Finals | Wrestling | Olympic Games Paris 2024",
      description: "The Men's Freestyle 97kg Finals were held on 11/08/2024 at Champs-de-Mars Arena, Paris. Akhmed Tazhudinov (BRN) claimed the Gold with a 2:0 win against Givi Matcharashvili (GEO).",
      link: "https://www.youtube.com/@Olympics/videos",
    },
    {
      title: "FRA v USA - Women's Gold Medal Game | Basketball | Olympic Games Paris 2024",
      description: "The Women's Basketball Gold Medal Match took place on 11/08/2024 at Bercy Arena, Paris. The United States of America claimed Gold with a 67:66 win against France.",
      link: "https://www.youtube.com/@Olympics/videos",
    },
  ];

  return (
    <div className="p-6 bg-white min-h-screen">
      <header className="text-center py-6 bg-blue-500 text-white">
        <h1 className="text-4xl font-bold">Highlights Videos</h1>
      </header>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-bold mb-2">{highlight.title}</h2>
            <p className="text-gray-600 mb-4">{highlight.description}</p>
            <a
              href={highlight.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Watch now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}