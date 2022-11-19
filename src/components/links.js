import React from "react";
import lounge from '../images/logo-lounge-white.png';
import simply_health from '../images/simplyhealth-white.png';
import woolroom from '../images/woolroom-white.png';

//SWIPER
import { Scrollbar, Autoplay, Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import "swiper/css/lazy";

import { motion } from "framer-motion"

export default function Links() {
  return (
    <motion.section className="links" animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 1, delay: 1.75 }}>

      <Swiper
        modules={[Autoplay, Lazy]}
        spaceBetween={300}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        lazy={true}
        loop={true}
        breakpoints={{
          // when window width is >= 250px
          250: {
            width: 250,
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 0,
          },
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
      >

        <SwiperSlide>
          <img data-src={lounge} className="swiper-lazy img-links" loading='lazy' />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img data-src={woolroom} className="swiper-lazy img-links" loading='lazy' />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img data-src={simply_health} className="swiper-lazy img-links" loading='lazy' />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img data-src={woolroom} className="swiper-lazy img-links" loading='lazy' />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
      </Swiper>


      {/* <div className="logos">
        <div className="logo">
          <img src={lounge} />
        </div>
        <div className="logo">
          <img src={woolroom} />
        </div>
        <div className="logo">
          <img src={simply_health} />
        </div>
      </div> */}
    </motion.section>
  );
}