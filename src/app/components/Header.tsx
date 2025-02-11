"use client";

import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { CgProfile } from "react-icons/cg";

export default function Header() {
  const [scrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 0){
        setIsScrolled(true);
      }else{
        setIsScrolled(false)
      } 
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll)
  }, []);



  return (
    <header className={`w-screen flex justify-between items-center fixed top-0 left-0 z-50 px-24 transition-all duration-500 ${scrolled ? "h-[100px] bg-black" : "h-[120px] bg-transparent"}`}>

      <nav className='flex items-center gap-4 '>
        <Link href={"/gallery"} className='uppercase text-white text-xs tracking-wider font-semibold hover:text-yellow-500 duration-300 transition-all'>Gallery</Link>
        <Link href={"/about"} className='uppercase text-white text-xs tracking-wider font-semibold hover:text-yellow-500 duration-300 transition-all'>About</Link>
        <Link href={"/news"} className='uppercase text-white text-xs tracking-wider font-semibold hover:text-yellow-500 duration-300 transition-all'>News</Link>
      </nav>
      
      <h2 className='text-5xl font-extralight tracking-widest text-white uppercase ml-24'>AFWN</h2>
      
      <nav className='flex items-center gap-4 '>
        <Link href={"/gallery"} className='uppercase text-white text-xs tracking-wider font-semibold hover:text-yellow-500 duration-300 transition-all'>Registrations</Link>
        <Link href={"/about"} className='uppercase text-white text-xs tracking-wider font-semibold hover:text-yellow-500 duration-300 transition-all'>Showcasing</Link>
        <Link href={"/news"} className='uppercase text-xs tracking-wider font-semibold text-yellow-500 hover:text-yellow-500 duration-300 transition-all'>Subscribe</Link>
        <CgProfile size={25} className='text-yellow-500'/>
      </nav>
    </header>
  )
}
