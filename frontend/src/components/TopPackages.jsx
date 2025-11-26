import { ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const TopPackages = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); // NEW
  const [error, setError] = useState(null); // NEW

  async function getData() {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8080/api/packages");
      setData(response.data.data || []);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <section id="packages" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">TOP PACKAGES</h2>
          <a
            href="#"
            className="text-orange-500 hover:text-orange-600 flex items-center"
          >
            Explore All Packages <ChevronRight size={20} />
          </a>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="bg-gray-200 animate-pulse h-72 rounded-xl flex justify-center items-center"
              >
                {" "}
                Loading...
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <p className="text-red-500 text-center text-lg">{error}</p>
        )}

        {/* Empty State */}
        {!loading && data.length === 0 && !error && (
          <p className="text-gray-500 text-center text-lg">
            No packages found.
          </p>
        )}

        {/* Main Data Cards */}
        {!loading && data.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition"
              >
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4">{pkg.location}</p>
                  <p className="text-gray-800 font-semibold mb-4">
                    Starting {pkg.price}
                  </p>
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition">
                    View Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
