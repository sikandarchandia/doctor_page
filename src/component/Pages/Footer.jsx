import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
 return (
  <footer className="bg-gray-800 text-white py-6 px-4">
   <div className="max-w-6xl mx-auto text-center">
    {/* Copyright Text */}
    <p className="text-sm sm:text-base md:text-lg font-semibold">
     &copy; 2025 Your Website. All rights reserved.
    </p>

    {/* Footer Links */}
    <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 mt-4">
     <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
     <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
     <a href="#" className="hover:text-blue-400 transition">Contact Us</a>
    </div>

    {/* Social Icons */}
    <div className="flex justify-center space-x-4 sm:space-x-6 mt-6">
     <a href="#" className="text-lg sm:text-xl hover:text-blue-400 transition">
      <FaFacebook />
     </a>
     <a href="#" className="text-lg sm:text-xl hover:text-blue-400 transition">
      <FaTwitter />
     </a>
     <a href="#" className="text-lg sm:text-xl hover:text-blue-400 transition">
      <FaInstagram />
     </a>
    </div>
   </div>
  </footer>
 );
};

export default Footer;
