import React from "react";

const Categories = () => {
  const categories = [
    { name: "Action", emoji: "🔥" },
    { name: "Comedy", emoji: "😂" },
    { name: "Horror", emoji: "👻" },
    { name: "Sci-Fi", emoji: "🚀" },
    { name: "Romance", emoji: "❤️" },
    { name: "Adventure", emoji: "🌍" },
    { name: "Thriller", emoji: "🎯" },
    { name: "Drama", emoji: "🎭" },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white pt-24 px-6">
      
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Select Movie <span className="text-red-600">Categories</span>
      </h1>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center hover:bg-red-600 hover:scale-105 transition duration-300 cursor-pointer shadow-lg"
          >
            <div className="text-4xl mb-3">{category.emoji}</div>
            <h2 className="text-lg font-semibold">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
