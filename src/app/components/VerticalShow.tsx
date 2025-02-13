"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';



export default function VerticalShow() {
  return (
    <div className='w-screen flex justify-start h-[800px] py-24 overflow-hidden px-24 '>
        <div className='w-[33.333%] h-fit'>
            <Swiper
                direction={'vertical'}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay]}                
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                grabCursor={true}
                slidesPerView={"auto"}
                className="mineSwiper"
            >
                {
                   
                    [
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242206/IMG_4059_bh2tas.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242202/IMG_4031_sjvzml.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242201/IMG_4074_knenq4.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242197/IMG_3799_hv6san.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242182/IMG_3394_zjpymq.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242182/IMG_3267_v9hnjy.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242181/IMG_2850_lptbrl.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242180/IMG_2272-1_mhlena.jpg",
                    ].map((image, index) => {
                        return (
                            <SwiperSlide key={index} className="mineSwiperCard">
                                <img src={image} alt={index+"fashion image"} className='brightness-50 hover:brightness-100 hover:scale-110'/>
                            </SwiperSlide>
                        )
                    })                    
                }
            </Swiper>            
        </div>

        {/* Second Column */}
        <div className='w-[33.333%] h-fit'>
            <Swiper
                direction={'vertical'}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay]}                
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                grabCursor={true}
                slidesPerView={"auto"}
                className="mineSwiper"
            >
                {
                   
                    [
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242206/IMG_4059_bh2tas.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242202/IMG_4031_sjvzml.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242201/IMG_4074_knenq4.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242197/IMG_3799_hv6san.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242182/IMG_3394_zjpymq.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242182/IMG_3267_v9hnjy.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242181/IMG_2850_lptbrl.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242180/IMG_2272-1_mhlena.jpg",
                    ].map((image, index) => {
                        return (
                            <SwiperSlide key={index} className="mineSwiperCard">
                                <img src={image} alt={index+"fashion image"} className='brightness-50 hover:brightness-100 hover:scale-110'/>
                            </SwiperSlide>
                        )
                    })                    
                }
            </Swiper>            
        </div>

        {/* Third Column */}
        <div className='w-[33.333%] h-fit'>
            <Swiper
                direction={'vertical'}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay]}                
                loop={true}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
                grabCursor={true}
                slidesPerView={"auto"}
                className="mineSwiper"
            >
                {                   
                    [
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242206/IMG_4059_bh2tas.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242202/IMG_4031_sjvzml.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242201/IMG_4074_knenq4.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242197/IMG_3799_hv6san.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242182/IMG_3394_zjpymq.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242182/IMG_3267_v9hnjy.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242181/IMG_2850_lptbrl.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242180/IMG_2272-1_mhlena.jpg",
                    ].map((image, index) => {
                        return (
                            <SwiperSlide key={index} className="mineSwiperCard">
                                <img src={image} alt={index+"fashion image"} className=' brightness-50 hover:brightness-100 hover:scale-110'/>
                            </SwiperSlide>
                        )
                    })                    
                }
            </Swiper>            
        </div>

    </div>
  )
}
