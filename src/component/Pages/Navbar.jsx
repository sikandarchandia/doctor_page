import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import pic from "../../assets/neuro.png";
import React from "react";

const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);

 return (
  <nav className="fixed w-full z-20 flex justify-between items-center px-4 py-3 bg-gray-200 shadow-md">
   <div className="w-16 h-16">
    <img src={pic} alt="Logo" className="h-full w-full rounded-full" />
   </div>


   <ul className="hidden md:flex space-x-7 w-[50%] justify-evenly items-center">
    {["Home", "About", "Disease", "Timing", "Gallery", "Contact"].map((item) => (
     <li key={item}>
      <a
       href={`#${item.toLowerCase()}`}
       className="text-blue-800 font-medium hover:cursor-pointer hover:text-blue-600 transition"
      >
       {item}
      </a>
     </li>
    ))}
   </ul>


   <div className="md:hidden z-30" onClick={() => setIsOpen(!isOpen)}>
    {isOpen ? <FiX size={30} className="text-blue-800" /> : <FiMenu size={30} className="text-blue-800" />}
   </div>


   <div
    className={`fixed top-0 right-0 h-full w-3/4 bg-gray-200 shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
     } md:hidden`}
   >
    <ul className="flex flex-col items-center space-y-6 mt-20">
     {[
      "Home",
      "About",
      "Disease",
      "Timing",
      "Gallery",
      "Contact",
     ].map((item) => (
      <li key={item}>
       <a
        href={`#${item.toLowerCase()}`}
        className="text-blue-800 font-medium hover:cursor-pointer hover:text-blue-600 transition"
        onClick={() => setIsOpen(false)}
       >
        {item}
       </a>
      </li>
     ))}
    </ul>
   </div>
  </nav>
 );
};

export default Navbar;
