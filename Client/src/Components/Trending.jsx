import React from "react";

const Trending = () => {
  const movies = [
    {
      id: 1,
      title: "The Dark Knight",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
      rating: "9.0",
    },
    {
      id: 2,
      title: "Interstellar",
      image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4",
      rating: "8.8",
    },
    {
      id: 3,
      title: "Avengers",
      image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f",
      rating: "8.5",
    },
    {
      id: 4,
      title: "Inception",
      image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b",
      rating: "8.9",
    },
    {
      id: 5,
      title: "Joker",
      image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c",
      rating: "8.4",
    },
    {
      id: 6,
      title: "Dune",
      image: "https://images.unsplash.com/photo-1502136969935-8d8eef54d77d",
      rating: "8.3",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white pt-24 px-6">

      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        🔥 Trending <span className="text-red-600">Movies</span>
      </h1>

      {/* Movie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="h-64 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">
                {movie.title}
              </h2>

              <div className="flex justify-between items-center">
                <span className="text-yellow-400 font-semibold">
                  ⭐ {movie.rating}
                </span>

                <button className="text-sm bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md transition">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Trending;
