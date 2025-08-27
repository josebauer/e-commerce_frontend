"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Banner() {
  return (
    <section>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}                                            
        allowTouchMove={true}                                 
        className="h-60 md:h-96 lg:h-128 mb-8"
      >
        <SwiperSlide>
          <img
            src="banner.jpg"
            alt="Ferrari SF-24 na pista de interlagos com chuva"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="banner2.jpg"
            alt="Ferrari de Schumacher na pista"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="banner3.jpg"
            alt="Ferrari SF-24 na pista seca"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}