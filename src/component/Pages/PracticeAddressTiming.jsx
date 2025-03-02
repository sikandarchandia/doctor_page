import React from "react";

const PracticeAddressTiming = () => {
 return (
  <div id="timing" className="flex flex-col justify-center items-center bg-gray-900 min-h-screen px-4 py-8">
   {/* Heading */}
   <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-6">
    Practice Address and Timings
   </h1>

   {/* Table Container */}
   <div className="w-full overflow-x-auto">
    <div className="min-w-[800px] overflow-x-auto">
     <table className="border-collapse border border-gray-400 w-full">
      <thead>
       <tr className="bg-gray-200 text-gray-900 text-sm sm:text-base text-center">
        <th className="border border-gray-400 p-2">Hospital Name</th>
        <th className="border border-gray-400 p-2">Area</th>
        <th className="border border-gray-400 p-2">Days</th>
        <th className="border border-gray-400 p-2">Timing</th>
        <th className="border border-gray-400 p-2">Fees</th>
        <th className="border border-gray-400 p-2">Location</th>
       </tr>
      </thead>

      <tbody>
       {/* Row 1 */}
       <tr className="text-sm sm:text-base">
        <td className="border border-gray-400 p-2 text-white text-center">Mansoorah Hospital</td>
        <td className="border border-gray-400 p-2 text-white text-center">Mustafa Town, Lahore</td>
        <td className="border border-gray-400 p-2 text-white text-center">Monday - Friday</td>
        <td className="border border-gray-400 p-2 text-white text-center">05:00 PM - 07:00 PM</td>
        <td className="border border-gray-400 p-2 text-white text-center">2000 PKR</td>
        <td className="border border-gray-400 p-2 flex justify-center">
         <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27217.725660090364!2d74.24592169977052!3d31.490754193636562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903b72ebca367%3A0x78d0e9100bc79a68!2sMustafa%20Town%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1740728559035!5m2!1sen!2s"
          width="200"
          height="100"
          className="rounded-lg w-full sm:w-[200px]"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
         ></iframe>
        </td>
       </tr>

       {/* Row 2 */}
       <tr className="text-sm sm:text-base">
        <td className="border border-gray-400 p-2 text-white text-center">Evercare Hospital</td>
        <td className="border border-gray-400 p-2 text-white text-center">Nespak Housing Scheme, Lahore</td>
        <td className="border border-gray-400 p-2 text-white text-center">Monday - Saturday</td>
        <td className="border border-gray-400 p-2 text-white text-center">08:00 PM - 10:00 PM</td>
        <td className="border border-gray-400 p-2 text-white text-center">4,000 PKR</td>
        <td className="border border-gray-400 p-2 flex justify-center">
         <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6808.427202795247!2d74.27821305986974!3d31.435785996581114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190116d878951d%3A0x8ff83f4a9877c5ca!2sNespak%20Housing%20Scheme%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1740729825971!5m2!1sen!2s"
          width="200"
          height="100"
          className="rounded-lg w-full sm:w-[200px]"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
         ></iframe>
        </td>
       </tr>
      </tbody>
     </table>
    </div>
   </div>
  </div>
 );
};

export default PracticeAddressTiming;