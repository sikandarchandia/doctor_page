import React from "react";
import bg from "../../assets/HomePic.png";
import { FaWhatsapp } from "react-icons/fa";

const Home = () => {
 return (
  <div id="home" className="min-h-screen flex justify-center items-center bg-gray-900 px-4">
   <div className="max-w-6xl w-full mx-auto">
    <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between space-y-6 md:space-y-0">


     <div className="text-center  lg:mt-16 md:text-left md:w-1/2">
      <h3 className="text-lg font-semibold text-indigo-400">Asst. Prof. Dr.</h3>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-400 mt-2">
       Hassaan Zahid
      </h1>
      <h4 className="text-lg sm:text-xl text-gray-300 mt-2">(Neuro Surgeon)</h4>
      <p className="text-gray-300 mt-4 max-w-md mx-auto md:mx-0">
       MBBS | FCPS (Neurosurgery) | CHPE | ATLS | MS (PAEDS Neurosurgery) | Assistant Professor
      </p>


      <div className="mt-6">
       <a
        href="#contact"
        className="inline-block bg-indigo-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
       >
        Contact Now
       </a>
      </div>

      {/* Phone Number */}
      <div className="mt-4 sm:mt-6">
       <p className="text-gray-300 flex cursor-pointer items-center gap-1 text-lg">
        <a
         href="https://wa.me/923334571797"
         target="_blank"
         rel="noopener noreferrer"
         className="flex items-center gap-1"
        >
         <FaWhatsapp className="text-green-600 text-2xl" />
         <span className="font-semibold">0333 4571797</span>
        </a>
       </p>
      </div>
     </div>

     <div className="w-56 h-56 mb-7 sm:w-64 sm:h-64 md:w-80 md:h-80 mt-40 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-indigo-600">
      <img
       src={bg}
       alt="Dr. Hassaan Zahid"
       className="w-full h-full object-cover"
      />
     </div>

    </div>
   </div>
  </div>
 );
};

export default Home;
