import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white text-black shadow-lg shadow-slate-300">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <a href="#home">Solar Cleaner</a>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <Link to="/" className="hover:text-yellow-500">Home</Link>
                    </li>
                    <li>
                        <a href="#service" className="hover:text-yellow-500">Services</a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-yellow-500">About</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-yellow-500">Contact</a>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>
            {isOpen && <div className={`md:hidden bg-transparent  text-center space-y-2 px-4 py-4 ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
                <ul className={`space-y-2 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                    <li onClick={e => setIsOpen(false)} className="font-semibold">
                        <Link to="/" className="block hover:text-yellow-500">Home</Link>
                    </li>
                    <li onClick={e => setIsOpen(false)} className="font-semibold">
                        <a href="#service" className="block hover:text-yellow-500">Services</a>
                    </li>
                    <li onClick={e => setIsOpen(false)} className="font-semibold">
                        <a href="#about" className="block hover:text-yellow-500">About</a>
                    </li>
                    <li onClick={e => setIsOpen(false)} className="font-semibold">
                        <a href="#contact" className="block hover:text-yellow-500">Contact</a>
                    </li>
                </ul>
            </div>}
        </nav >
    );
};

export default Navbar;
