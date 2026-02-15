import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo / About Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            CineNotify 🎬
          </h2>
          <p className="text-sm">
            Discover movies based on your favorite categories and
            get instant notifications when new movies are released.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/categories" className="hover:text-white transition">
                Categories
              </Link>
            </li>
            <li>
              <Link to="/trending" className="hover:text-white transition">
                Trending
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Contact
          </h3>
          <p className="text-sm">Email: support@cinenotify.com</p>
          <p className="text-sm">Location: India</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} CineNotify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
