import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaPinterest, FaX, FaYoutube } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className='h-fit py-8 sm:py-16 bg-gradient-to-r from-black via-gray-900 to-black shadow-lg'>
      {/* Top Section */}
      <div className='border-b border-yellow-500 h-fit py-8 sm:py-12 flex flex-col sm:flex-row items-center justify-between w-[85%] mx-auto gap-4 sm:gap-0'>
        <nav className='flex flex-wrap justify-center gap-4 w-full sm:w-fit'>
          {[
            { href: '/about', label: 'About Us' },
            { href: '/services', label: 'Services' },
            { href: '/event', label: 'Events' },
            { href: '/contact', label: 'Contact' },
            { href: '/gallery', label: 'Gallery' },
            { href: '/news', label: 'News' },
            { href: '/registrations', label: 'Registrations' },
            { href: '/showcasing', label: 'Showcasing' },
          ].map((link, index) => (
            <Link key={index} href={link.href} className='text-xs text-white/50 hover:text-yellow-500 transition-colors'>
              {link.label}
            </Link>
          ))}
        </nav>

        <h5 className='text-xl sm:text-3xl text-white uppercase text-center sm:text-left' style={{ fontFamily: "Didot, serif" }}>
          Africa Fashion Week Nigeria
        </h5>
      </div>

      {/* Middle Section */}
      <div className='border-b border-yellow-500 h-fit py-8 sm:py-12 flex flex-col sm:flex-row items-center justify-between w-[85%] mx-auto gap-8 sm:gap-0'>
        <div className='flex flex-col items-center sm:items-start gap-4'>
          <h4 className='text-2xl sm:text-4xl text-white font-bold'>AFWN</h4>
          <div className='flex gap-4'>
            <FaFacebook size={15} className='text-yellow-500 cursor-pointer hover:text-white transition-colors' />
            <FaX size={15} className='text-yellow-500 cursor-pointer hover:text-white transition-colors' />
            <FaYoutube size={15} className='text-yellow-500 cursor-pointer hover:text-white transition-colors' />
            <FaPinterest size={15} className='text-yellow-500 cursor-pointer hover:text-white transition-colors' />
            <FaInstagram size={15} className='text-yellow-500 cursor-pointer hover:text-white transition-colors' />
          </div>
        </div>

        <div className='flex flex-col items-center sm:items-start gap-4'>
          <h4 className='text-lg sm:text-2xl font-semibold text-white'>Lagos Office:</h4>
          <p className='text-sm text-white/50 text-center sm:text-left'>
            Lagos Oriental Hotel, Victoria Island Lagos
          </p>
        </div>

        <div className='flex flex-col items-center sm:items-start gap-4'>
          <h4 className='text-lg sm:text-2xl font-semibold text-white'>Ile-Ife Office:</h4>
          <p className='text-sm text-white/50 text-center sm:text-left'>
            Adire House, Ile-Ife, Osun State.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='flex flex-col sm:flex-row justify-between py-8 sm:py-12 w-[85%] mx-auto gap-4 sm:gap-0'>
        <div className='flex flex-col sm:flex-row gap-4 items-center sm:items-start'>
          <div className='text-white/50 text-sm text-center sm:text-left border-r border-yellow-300 pr-4 cursor-pointer'>
            &copy; 2025 African Fashion Week Nigeria. All rights reserved.
          </div>
          <div className='text-white/50 text-sm text-center sm:text-left cursor-pointer'>
            Website developed by <a href='https://stripeedge.com' target='_blank' rel='noopener noreferrer' className='text-yellow-500 hover:text-white transition-colors'>StripeEdge Systems</a>
          </div>
        </div>

        <div className='flex flex-wrap justify-center sm:justify-end gap-4'>
          <div className='text-white/50 text-sm border-r border-yellow-300 pr-4 cursor-pointer'>
            Terms of Use
          </div>
          <div className='text-white/50 text-sm border-r border-yellow-300 pr-4 cursor-pointer'>
            Privacy Policy
          </div>
          <div className='text-white/50 text-sm cursor-pointer'>
            Cookie Policy
          </div>
        </div>
      </div>
    </footer>
  );
}
