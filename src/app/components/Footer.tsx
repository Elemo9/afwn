import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaPinterest, FaX, FaYoutube } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className='h-fit py-16 bg-[#141414]'>

        <div className='border-b border-yellow-500 h-[150px] flex items-center justify-between w-[85%] mx-auto'>
            <nav className='flex gap-4 items-center w-fit h-fit'>
                <Link href="/about" className='text-xs text-white/50'>
                    About Us
                </Link>
                <Link href={"/services"} className='text-xs text-white/50'>
                    Services
                </Link>
                <Link href={"/event"} className='text-xs text-white/50'>
                    Events
                </Link>
                <Link href={"/contact"} className='text-xs text-white/50'>
                    Contact
                </Link>
                <Link href={"/gallery"} className='text-xs text-white/50'>
                    Gallery
                </Link>
                <Link href={"/news"} className='text-xs text-white/50'>
                    News
                </Link>
                <Link href={"/registrations"} className='text-xs text-white/50'>
                    Registrations
                </Link>
                <Link href={"/showcasing"} className='text-xs text-white/50'>
                    Showcasing
                </Link>
            </nav>

            <h4 className='text-3xl text-white uppercase '>Africa Fashion Week Nigeria</h4>

        </div>

        <div className='border-b border-yellow-500 h-[200px] flex items-center w-[85%] mx-auto justify-between'>
            <div className='flex flex-col gap-4'>
                <h4 className='text-4xl text-white font-bold'>AFWN</h4>
                <div className='flex gap-4 items-center w-fit h-fit'>
                    <FaFacebook size={15} className='text-yellow-500 cursor-pointer'/>
                    <FaX size={15} className='text-yellow-500 cursor-pointer'/>
                    <FaYoutube size={15} className='text-yellow-500 cursor-pointer'/>
                    <FaPinterest size={15} className='text-yellow-500 cursor-pointer'/>
                    <FaInstagram size={15} className='text-yellow-500 cursor-pointer'/>
                </div>
            </div>

            <div className='flex flex-col gap-4'>
                <h4 className='text-2xl font-semibold text-white'>Nigerian Office:</h4>
                <p className='text-sm text-white/50'>Lagos Oriental Hotel, Victoria Island Lagos</p>
            </div>

            <div className='flex flex-col gap-4'>
                <h4 className='text-2xl font-semibold text-white'>Ile-Ife Office:</h4>
                <p className='text-sm text-white/50'>Adire House, Ile-Ife, Osun State.</p>
            </div>
        </div>

        <div className='flex justify-between py-12 w-[85%] mx-auto'>            
            <div className='flex gap-4'>
                <div className='text-white/50 text-sm border-r border-yellow-300 pr-4 cursor-pointer'>&copy; 2025 African Fashion Week Nigeria. All rights reserved.</div>
                <div className='text-white/50 text-sm cursor-pointer' >Developed by StripeEdge Systems</div>
            </div>
            
            <div className='w-fit flex h-fit gap-4'>
                <div className='text-white/50 text-sm border-r border-yellow-300 pr-4 cursor-pointer'>Term of use</div>
                <div className='text-white/50 text-sm border-r border-yellow-300 pr-4 cursor-pointer'>Privacy Policy</div>
                <div className='text-white/50 text-sm cursor-pointer'>Cookie Policy</div>
            </div>            
        </div>

    </footer>
  )
}
