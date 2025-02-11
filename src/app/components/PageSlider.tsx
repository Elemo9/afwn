"use client";
import React,{useRef, useState} from 'react'
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper Styles
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

function PageSlider() {
  return (
    <section className='w-full h-fit py-24 flex items-center justify-center'>
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            autoplay={{
                delay:3500,
                disableOnInteraction:false
            }}
            coverflowEffect={{
                rotate: 45,
                stretch:0,
                depth:80,
                modifier:1,
                slideShadows:true
            }}
            modules={[EffectCoverflow, Autoplay]}
            className='mySwiper'
        >
            <SwiperSlide>
                <img src={"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242206/IMG_4059_bh2tas.jpg"} alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242202/IMG_4031_sjvzml.jpg"} alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242201/IMG_4074_knenq4.jpg"} alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242197/IMG_3799_hv6san.jpg"} alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242182/IMG_3394_zjpymq.jpg"} alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242182/IMG_3267_v9hnjy.jpg"} alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242181/IMG_2850_lptbrl.jpg"} alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242180/IMG_2272-1_mhlena.jpg"} alt=''/>
            </SwiperSlide>
        </Swiper>


    </section>
  )
}

export default PageSlider