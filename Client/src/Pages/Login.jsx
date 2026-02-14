import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black px-4">

      {/* Login Card */}
      <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-800">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-center mb-6">
          <span className="text-red-600">Cine</span>Notify
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Login to discover your favorite movies 🎬
        </p>

        {/* Form */}
        <form className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition"
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex justify-between items-center text-sm text-gray-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-red-600" />
              Remember me
            </label>

            <Link to="/forgot-password" className="hover:text-red-500">
              Forgot Password?
            </Link>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-gray-400 text-center mt-6 text-sm">
          Don’t have an account?{" "}
          <Link to="/register" className="text-red-500 hover:underline">
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
