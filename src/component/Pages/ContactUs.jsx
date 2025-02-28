import React from "react";

const ContactUs = () => {
 return (
  <div id="contact" className="flex flex-col items-center justify-center px-4 py-12 bg-gray-900 min-h-screen">
   {/* Heading */}
   <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
    Have questions? <br /> Get in touch!
   </h1>

   {/* Contact Form */}
   <form className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-md sm:max-w-lg">
    {/* Name Input */}
    <div className="mb-4">
     <label className="block text-gray-700 font-semibold mb-2">Name</label>
     <input
      type="text"
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter your name"
     />
    </div>

    {/* Email Input */}
    <div className="mb-4">
     <label className="block text-gray-700 font-semibold mb-2">Email</label>
     <input
      type="email"
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter your email"
     />
    </div>

    {/* Phone Number Input */}
    <div className="mb-4">
     <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
     <input
      type="number"
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter your phone number"
     />
    </div>

    {/* Message Input */}
    <div className="mb-4">
     <label className="block text-gray-700 font-semibold mb-2">Message</label>
     <textarea
      className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Type your message here..."
     ></textarea>
    </div>

    {/* Submit Button */}
    <button
     type="submit"
     className="w-full bg-blue-900 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-all"
    >
     Submit
    </button>
   </form>
  </div>
 );
};

export default ContactUs;
