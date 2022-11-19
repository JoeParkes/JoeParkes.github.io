
import profilePicture from '../images/profilepicture.jpg';
import github from '../images/github-white.png';
import lounge from '../images/lounge-photo.png'
import lounge_bf from '../images/lounge-black-friday.webp'
import lounge_slide_2 from '../images/lounge_neon.webp'
import lounge_slide_3 from '../images/lounge_christmas.webp'
import lounge_slide_4 from '../images/lounge_slide_3.webp'
import Modal from 'react-modal';
import { FaRegWindowClose } from 'react-icons/fa';



import { motion, useAnimationControls } from "framer-motion"
import React, { useEffect } from "react";


//SWIPER
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export default function CustomSwiper() {

    const controls = useAnimationControls()

    useEffect(() => {
        controls.start({ opacity: 1, y: 0 })
    }, [])

    return (
        <section id="swiper" className="swiper">
            <motion.div className="main-content-image" animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 1, delay: 1.5 }}>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={10}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        // when window width is >= 250px
                        250: {
                            width: 400,
                            slidesPerView: 1.2,
                            spaceBetween: 10,
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
                        <img src={lounge} loading='lazy' />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={lounge_bf} loading='lazy' />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={lounge_slide_4} loading='lazy' />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={lounge_slide_3} loading='lazy' />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={lounge_slide_2} loading='lazy' />

                    </SwiperSlide>
                </Swiper>
            </motion.div>
        </section>
    );
}