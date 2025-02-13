"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { useRouter } from 'next/navigation';

export default function page() {
    const router = useRouter();
  return (
    <div className='w-screen h-fit flex relative'>
        <div className='w-[55%] fixed top-0 left-0 bottom-0'>
        
            <Swiper
                    pagination={{
                        type:"progressbar",
                    }}
                    modules={[Autoplay, Pagination, Navigation]}                
                    loop={true}
                    autoplay={{
                        delay: 7500,
                        disableOnInteraction: false,
                    }}
                    grabCursor={true}
                    slidesPerView={"auto"}
                    className="registerSwiper"
                >
                    {                   
                    [
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739432982/IMG_8985_ldecjn.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739433016/IMG_9490_ti0spf.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739428644/IMG_8782_x2s87x.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739433014/IMG_9487_arcocw.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739432997/IMG_5046_nhm8tb.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739432925/IMG_5091_o8ekun.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739430731/IMG_8808_vd0p34.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739430750/IMG_8805_eetv9o.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739428332/IMG_8963_hornhi.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739432921/IMG_5122_kvr8ws.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739428346/IMG_8752_e74lns.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739428276/IMG_8753_lt0zae.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739430731/IMG_8824_nejiei.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739432908/IMG_2792_wwk3oc.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739430768/IMG_8768_oz8j40.jpg",
                        "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739428351/IMG_8748_ipylon.jpg",
                    ].map((image, index) => {
                        return (
                            <SwiperSlide key={index} className="registerSwiperCard">
                                <img src={image} alt={index+"fashion image"} className='hover:scale-125 duration-500 transition-all'/>
                            </SwiperSlide>
                        )
                    })                    
                }
            </Swiper>
        </div>
        <div className='w-[45%] h-screen bg-[#080808] flex items-center py-24 px-14 fixed top-0 right-0 bottom-0 cursor-pointer'>
            <div className='flex items-center gap-4 absolute left-4 top-5' onClick={() => router.push("/")}>
                <FaArrowLeft size={20} className='text-white cursor-pointer'/>
                <p className='text-white text-xs tracking-wider'>Back to Home</p>
            </div>

            <div className='flex flex-col gap-5 overflow-y-scroll scroll-m-6 overflow-x-hidden h-full pr-6'>
                <h3 className='text-yellow-500 text-2xl font-bold uppercase tracking-widest'>Welcome to Africa Fashion Week Nigeria</h3>
                <h4 className='text-white text-4xl font-extralight'>Designer & Exhibitor Application Form</h4>
                <p className='text-sm text-white'>The application is solely for Designers/ Exhibitors who wish to participate in Africa Fashion Week Nigeria 2025. Models and General Attendees are not qualified or allowed to apply.</p>
                <form className='flex flex-col gap-5 '>
                    <div className='flex flex-col gap-3'>
                        <label htmlFor='brand' className='text-white text-lg font-semibold'>Brand Name</label>
                        <input type='text' className='text-sm bg-transparent p-3 text-white border-white border-b rounded-md shadow-lg focus:outline-none' />
                    </div>

                    <div className='flex flex-col gap-3'>
                        <label htmlFor="Email" className='text-white text-lg font-semibold'>Email</label>
                        <input type="email" className='text-sm bg-transparent p-3 text-white border-white border-b rounded-md shadow-lg focus:outline-none'/>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <label htmlFor="OfficeTelephone" className='text-white text-lg font-semibold'> Official Telephone Number</label>
                        <input type="text" className='text-sm bg-transparent p-3 text-white border-white border-b rounded-md shadow-lg focus:outline-none'/>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <label htmlFor="WhatsappNumber" className='text-white text-lg font-semibold'>WhatsApp Number</label>
                        <input type="text" className='text-sm bg-transparent p-3 text-white border-white border-b rounded-md shadow-lg focus:outline-none'/>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <label htmlFor="StateofDomicile" className='text-white text-lg font-semibold'>State of Domicile</label>
                        <input type="text" className='text-sm bg-transparent p-3 text-white border-white border-b rounded-md shadow-lg focus:outline-none' />
                    </div>

                    <div className='flex flex-col gap-3'>
                        <label htmlFor="Website" className='text-white text-lg font-semibold'>Website</label>
                        <input type="text" className='text-sm bg-transparent p-3 text-white border-white border-b rounded-md shadow-lg focus:outline-none'/>
                    </div>


                    <div className='flex flex-col gap-3'>
                        <label htmlFor="SocialMedia" className='text-white text-lg font-semibold'>Social Media Handles: (Facebook, Twitter, Instagram, etc.)</label>
                        <input type="text" className='text-sm bg-transparent p-3 text-white border-white border-b rounded-md shadow-lg focus:outline-none'/>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <label htmlFor="ApplyWish" className='text-white text-lg font-semibold'>I/We wish to apply for the following</label>
                        <select className='text-sm bg-white p-3 text-black border-white border-b rounded-md shadow-lg focus:outline-none' >
                            <option value="Catwalk" className='hover:bg-yellow-500'>Catwalk</option>
                            <option value="Exhibition" className='hover:bg-yellow-500'>Exhibition</option>
                            <option value="Both" className='hover:bg-yellow-500'>Both</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <label htmlFor="DesignersCategories" className='text-white text-lg font-semibold'>Select Designers Categories</label>
                        <select className='text-sm bg-white p-3 text-black border-white border-b rounded-md shadow-lg focus:outline-none'>
                            <option value="Emerging" className='hover:bg-yellow-500'>Emerging Designers</option>
                            <option value="Established" className='hover:bg-yellow-500'>Established Designers</option>
                            <option value="Exclusive" className='hover:bg-yellow-500'>Exclusive Designers</option>
                        </select>
                    </div>

                    <button className='bg-yellow-500 text-white text-base font-semibold p-4 tracking-widest rounded-xl'>Submit Form</button>

                </form>
            </div>

        </div>

    </div>
  )
}
