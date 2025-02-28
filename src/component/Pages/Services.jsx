import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React from "react";

import pic1 from "../../assets/swp1.jpg";
import pic2 from "../../assets/swp2.jpg";
import pic3 from "../../assets/swp3.jpg";
import pic4 from "../../assets/swp4.jpg";
import pic5 from "../../assets/swp5.jpg";
import pic6 from "../../assets/swp6.jpg";
import pic7 from "../../assets/swp7.jpg";
import pic8 from "../../assets/swp8.jpg";
import pic9 from "../../assets/swp9.jpg";
import pic10 from "../../assets/swp10.jpg";

const Services = () => {
 const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10];

 return (
  <div id="disease" className="  lg:min-h-screen md:h-[50vh] sm:h-[50vh] px-4">

   <div className="flex justify-center items-center mb-6">
    <h1 className="text-white font-bold text-xl p-4 sm:text-2xl md:text-3xl text-center">
     Brain & Spine Disorders Expert Diagnosis
    </h1>
   </div>

   {/* Swiper Carousel */}
   <Swiper
    slidesPerView={1}
    breakpoints={{
     480: { slidesPerView: 1.2, spaceBetween: 15 },
     640: { slidesPerView: 2, spaceBetween: 20 },
     768: { slidesPerView: 2.5, spaceBetween: 20 },
     1024: { slidesPerView: 3, spaceBetween: 30 },
    }}
    spaceBetween={20}
    keyboard={{ enabled: true }}
    pagination={{ clickable: true }}
    navigation={true}
    autoplay={{
     delay: 2500,
     disableOnInteraction: false,
    }}
    modules={[Keyboard, Pagination, Navigation, Autoplay]}
    className="mySwiper"
   >
    {images.map((image, index) => (
     <SwiperSlide key={index} className="flex justify-center items-center">
      <img
       src={image}
       alt={`Slide ${index + 1}`}
       className="w-full sm:w-[90%] h-auto rounded-lg shadow-lg"
      />
     </SwiperSlide>
    ))}
   </Swiper>
  </div>
 );
};

export default Services;
