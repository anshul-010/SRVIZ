import { ChevronRight } from "lucide-react";
import React from "react";

export const F1 = () => {
  return (
    <div className="">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition group">
        <div className="absolute inset-0">
          <img
            src="https://www.digitaltrends.com/wp-content/uploads/2019/03/how-data-is-transforming-f1-racing-7533.jpg?fit=1920%2C1280&p=1"
            alt="F1 Japan Racing"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>

        <div className="relative p-8 lg:p-10">
          <div className="flex items-start justify-between">
            <div className="flex flex-col m-auto justify-center">
              <h3 className="text-white text-4xl lg:text-5xl font-bold mb-3 tracking-wider">
                F1 JAPAN
              </h3>
              <p className="text-gray-200 text-lg mb-2">
                Park Aketch 16x 16S.0522.6836a
              </p>
              <p className="text-orange-400 text-xl font-semibold mb-6">
                Starting ₹ 80,000 / group
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition transform hover:scale-105 shadow-lg inline-flex items-center"
              >
                Request My Package
                <ChevronRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
