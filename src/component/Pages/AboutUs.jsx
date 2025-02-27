import React from "react";
import aboutME from "../../assets/ab.png";

const AboutUs = () => {
 return (
  <div className="min-h-[80vh] flex justify-center items-center mt-7 py-12 bg-gray-900">
   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">

    <div className="w-full md:w-1/2 space-y-6">
     <h1 className="text-4xl lg:text-5xl font-bold text-indigo-400">
      About Me
     </h1>
     <p className="text-gray-300 text-lg leading-relaxed">
      I’m Asst. Prof. Dr. Hassaan Zahid, a neurosurgeon with over 10 years
      of experience in treating complex brain and spine conditions. With an
      MBBS from UHS Lahore, an FCPS in Neurosurgery, and an MS in Pediatric
      Neurosurgery, I specialize in areas such as brain tumors, spinal disc
      herniation, cerebral palsy, and more. I provide consultations at
      Mansoorah Hospital and Evercare Hospital in Lahore, where I’m
      committed to delivering comprehensive, personalized care to each of
      my patients.
     </p>
     <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300">
      Contact Now
     </button>
    </div>


    <div className="w-full md:w-1/2 h-[70vh]  relative">
     <img
      src={aboutME}
      alt="Dr. Hassaan Zahid"
      className="w-full h-full object-contain rounded-lg"
     />
     {/* <div className="absolute inset-0  rounded-lg transition-opacity duration-300"></div> */}
    </div>
   </div>
  </div>
 );
};

export default AboutUs;