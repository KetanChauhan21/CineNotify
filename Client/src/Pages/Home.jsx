import React from "react";
import Navbar from "@/Components/Navbar";
import Categories from "../Components/Categories";
import Trending from "../Components/Trending";
import Main from "./Main";
import CategoriesCard from "../Components/Categoriescard";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <Main />
      {/* footer  */}
      <Footer />
    </div>
  );
};

export default Home;
