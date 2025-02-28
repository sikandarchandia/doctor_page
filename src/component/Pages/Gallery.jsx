import React from "react";
import pic1 from "../../assets/g1.avif";
import pic2 from "../../assets/g2.avif";
import pic3 from "../../assets/g3.webp";
import pic4 from "../../assets/g4.webp";
import pic5 from "../../assets/g5.webp";
import pic6 from "../../assets/g6.avif";
import pic7 from "../../assets/g7.avif";
import pic8 from "../../assets/g8.avif";

const Gallery = () => {
 const galleryImages = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

 return (
  <div id="gallery" className="px-4 py-8 bg-gray-900 min-h-screen">
   {/* Heading */}
   <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8">
    Gallery
   </h1>

   {/* Responsive Grid */}
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
    {galleryImages.map((image, index) => (
     <div key={index} className="w-full max-w-[300px]">
      <img
       src={image}
       alt={`Gallery Image ${index + 1}`}
       className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
      />
     </div>
    ))}
   </div>
  </div>
 );
};

export default Gallery;
