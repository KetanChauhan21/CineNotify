import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    const closeCheck = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <>
            <nav className="bg-gray-950 border-b border-gray-800 fixed w-full z-50 top-0">
                <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-white">
                        <span className="text-red-600">Cine</span>Notify
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
                        <li>
                            <Link to="/" className="hover:text-red-500 transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/categories" className="hover:text-red-500 transition">
                                Categories
                            </Link>
                        </li>
                        <li>
                            <Link to="/trending" className="hover:text-red-500 transition">
                                Trending
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-red-500 transition">
                                About
                            </Link>
                        </li>
                    </ul>

                    {/* Right Button (Desktop) */}
                    <div className="hidden md:block">
                        <Link
                            to="/login"
                            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white text-sm transition"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-300"
                        onClick={() => closeCheck()}
                        aria-label="Open menu"
                    >
                        {isOpen ? <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg> :

                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        }
                    </button>
                </div>
            </nav>

            {/* Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={closeCheck}
            />

            {/* Left Drawer */}
            <aside
                className={`fixed top-0 left-0 z-50 h-full w-72 bg-gray-950 border-r border-gray-800 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Drawer Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800">
                    <Link to="/" onClick={closeCheck} className="text-xl font-bold text-white">
                        <span className="text-red-600">Cine</span>Notify
                    </Link>
                </div>

                {/* Drawer Links */}
                <div className="px-5 py-6 space-y-4 text-gray-300">
                    <Link to="/" onClick={closeCheck} className="block hover:text-red-500">
                        Home
                    </Link>
                    <Link
                        to="/categories"
                        onClick={closeCheck}
                        className="block hover:text-red-500"
                    >
                        Categories
                    </Link>
                    <Link
                        to="/trending"
                        onClick={closeCheck}
                        className="block hover:text-red-500"
                    >
                        Trending
                    </Link>
                    <Link to="/about" onClick={closeCheck} className="block hover:text-red-500">
                        About
                    </Link>

                    <Link
                        to="/login"
                        onClick={closeCheck}
                        className="mt-6 block bg-red-600 hover:bg-red-700 text-white text-center py-2 rounded-lg"
                    >
                        Get Started
                    </Link>
                </div>
            </aside>
        </>
    );
};

export default Navbar;
