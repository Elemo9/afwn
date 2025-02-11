"use client"
import React from 'react'
import {motion} from "framer-motion";


export default function Banner() {
  return (
    <section className='w-screen h-screen '>
        <video controls={false} src={"https://res.cloudinary.com/dyn1k6wcl/video/upload/v1739270611/WhatsApp_Video_2025-02-10_at_11.44.14_df1a16e7_jomt3o.mp4"} loop muted playsInline autoPlay className=' brightness-50 absolute w-full top-0 left-0 object-cover h-full ' />
        <div className='h-fit w-[800px] flex flex-col gap-3 absolute bottom-[25%] right-[5%] text-right items-end'>
            <h2 className='text-[5.5em] leading-[1] font-black text-white uppercase'>AFRICA FASHION WEEK <span className='text-yellow-500'>NIGERIA</span></h2>
            <p className='text-white text-base tracking-widest'>where culture and creativity collide...</p>
            <button className='bg-yellow-500 px-16 uppercase font-semibold tracking-widest rounded-2xl py-5 text-lg text-white'>Get Ticket</button>            
        </div>
    </section>
  )
}
