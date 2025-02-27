import React from "react";
import bg from "../../assets/HomePic.png";

const Home = () => {
 return (
  <div className="min-h-[90vh] flex justify-center items-center bg-gray-900">
   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row items-center justify-between">
     {/* Doctor's Information */}
     <div className="mt-8 md:mt-0 md:mr-12 text-center md:text-left">
      <h3 className="text-lg font-semibold text-indigo-400">Asst. Prof. Dr.</h3>
      <h1 className="text-4xl lg:text-5xl font-bold text-indigo-400 mt-2">
       Hassaan Zahid
      </h1>
      <h4 className="text-xl text-gray-300 mt-2">(Neuro Surgeon)</h4>
      <p className="text-gray-300 mt-4 max-w-md">
       MBBS | FCPS (Neurosurgery) | CHPE | ATLS | MS (PAEDS Neurosurgery) |
       Assistant Professor
      </p>

      {/* Contact Button */}
      <div className="mt-6">
       <a
        href="#contact"
        className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300"
       >
        Contact Now
       </a>
      </div>

      {/* Phone Number */}
      <div className="mt-6">
       <p className="text-gray-300 text-lg">
        <span className="font-semibold">Phone:</span> 0333 4571797
       </p>
      </div>
     </div>


     <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-indigo-600 transform ">
      <img
       src={bg}
       alt="Dr. Hassaan Zahid"
       className="w-full h-full object-cover overflow-hidden"
      />
     </div>
    </div>
   </div>
  </div>
 );
};

export default Home;