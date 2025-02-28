import React from "react";
import aboutME from "../../assets/ab.png";

const AboutUs = () => {
 return (
  <div id="about" className="min-h-screen flex justify-center items-center py-12 bg-gray-900 px-4">
   <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">

    {/* Text Section */}
    <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
     <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-400">
      About Me
     </h1>
     <p className="text-gray-300 text-start text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
      I’m Asst. Prof. Dr. Hassaan Zahid, a neurosurgeon with over 10 years
      of experience in treating complex brain and spine conditions. With an
      MBBS from UHS Lahore, an FCPS in Neurosurgery, and an MS in Pediatric
      Neurosurgery, I specialize in areas such as brain tumors, spinal disc
      herniation, and cerebral palsy. I provide consultations at Mansoorah
      Hospital and Evercare Hospital in Lahore, ensuring comprehensive,
      personalized care for my patients.
     </p>
     <div>
      <button className="bg-indigo-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300">
       Contact Now
      </button>
     </div>
    </div>

    {/* Image Section */}
    <div className="w-full md:w-1/2 flex justify-center">
     <img
      src={aboutME}
      alt="Dr. Hassaan Zahid"
      className="w-72 sm:w-80 md:w-96 lg:w-[28rem] h-auto object-contain rounded-lg shadow-lg"
     />
    </div>

   </div>
  </div>
 );
};

export default AboutUs;
