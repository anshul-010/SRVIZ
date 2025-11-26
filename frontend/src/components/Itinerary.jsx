import React, { useEffect, useState } from "react";
import axios from "axios";

export const Itinerary = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchItinerary() {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:8080/api/itinerary");
      setData(res.data.data || []);
    } catch (err) {
      setError(err.message || "Failed to load itinerary");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchItinerary();
  }, []);

  return (
    <section id="itinerary" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">SAMPLE ITINERARY</h2>
          <p className="text-orange-500 hover:text-orange-600">
            Explore +
          </p>
        </div>

        {loading && (
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex-none w-64 bg-gray-200 animate-pulse h-64 rounded-lg"
                ></div>
              ))}
            </div>
          </div>
        )}

        {!loading && error && (
          <p className="text-red-500 text-center text-lg">{error}</p>
        )}

        {!loading && data.length === 0 && !error && (
          <p className="text-gray-500 text-center text-lg">
            No itinerary items found.
          </p>
        )}

        {!loading && data.length > 0 && (
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-6">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="flex-none w-64 bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <div className="mt-4 flex justify-between">
                      <p className="text-gray-600 font-bold text-sm mb-2">
                        {item.location}
                      </p>
                      <span className="inline-block bg-orange-500 text-white text-xs tracking-wider px-3 py-1 rounded-full">
                        explore
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
