import { ChevronRight, MessageCircle } from "lucide-react";
import React from "react";

export const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-black/60 to-black/40">
        <img
          src="https://www.muchbetteradventures.com/magazine/content/images/2024/04/mount-everest-at-sunset.jpg"
          alt="Sports Arena"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          SPORTS TRAVEL
          <br />
          PACKAGES FOR
          <br />
          GLOBAL EVENTS
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Hospitality Packages + Hotel/Guest + Sightseeing/Experiences and more+
          All trip arrangements in one
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setShowForm(true)}
            className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105 shadow-lg"
          >
            Plan My Trip
          </button>
          <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 px-8 py-4 rounded-full text-lg font-semibold transition border border-white/30">
            Explore Events
          </button>
        </div>
      </div>
    </section>
  );
};
