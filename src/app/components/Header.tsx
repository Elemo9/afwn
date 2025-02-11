"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CgProfile, CgMenu, CgClose } from "react-icons/cg";

export default function Header() {
  const [scrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header
      className={`w-screen flex justify-between items-center fixed top-0 left-0 z-50 px-4 md:px-12 lg:px-24 transition-all duration-500 ${
        scrolled
          ? "h-[80px] md:h-[100px] bg-gradient-to-r from-black via-gray-900 to-black shadow-lg"
          : "h-[100px] md:h-[120px] bg-transparent"
      }`}
    >
      {/* Left Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        {["Gallery", "About", "News"].map((item) => (
          <motion.div
            key={item}
            whileHover={{ scale: 1.1, textShadow: "0px 0px 10px rgba(255,255,255,0.8)" }}
            transition={{ duration: 0.3 }}
          >
            <Link href={`/${item.toLowerCase()}`} className="uppercase text-white text-sm tracking-wider font-semibold transition-all duration-300 hover:text-yellow-500">
              {item}
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Logo */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight tracking-widest text-white uppercase">
        AFWN
      </h2>

      {/* Right Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        {["Registrations", "Showcasing", "Subscribe"].map((item) => (
          <motion.div
            key={item}
            whileHover={{ scale: 1.1, textShadow: "0px 0px 10px rgba(255,255,255,0.8)" }}
            transition={{ duration: 0.3 }}
          >
            <Link href={`/${item.toLowerCase()}`} className="uppercase text-white text-sm tracking-wider font-semibold transition-all duration-300 hover:text-yellow-500">
              {item}
            </Link>
          </motion.div>
        ))}
        <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
          <CgProfile size={25} className="text-yellow-500 transition-transform duration-300" />
        </motion.div>
      </nav>

      {/* Mobile Menu Button */}
      <button onClick={toggleMobileMenu} className="md:hidden text-white focus:outline-none">
        {isMobileMenuOpen ? <CgClose size={25} /> : <CgMenu size={25} />}
      </button>

      {/* Mobile Side Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 120 }}
          className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-95 z-50 flex flex-col items-center pt-20 md:hidden"
        >
          <button onClick={toggleMobileMenu} className="absolute top-6 right-6 text-white focus:outline-none">
            <CgClose size={25} />
          </button>

          {/* Mobile Menu Items */}
          <div className="flex flex-col items-center space-y-6">
            {["Gallery", "About", "News", "Registrations", "Showcasing", "Subscribe"].map((item) => (
              <motion.div key={item} whileHover={{ scale: 1.1, textShadow: "0px 0px 10px rgba(255,255,255,0.8)" }} transition={{ duration: 0.3 }}>
                <Link href={`/${item.toLowerCase()}`} className="uppercase text-white text-xl tracking-wider font-semibold transition-all duration-300 hover:text-yellow-500" onClick={toggleMobileMenu}>
                  {item}
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
              <CgProfile size={30} className="text-yellow-500 transition-transform duration-300" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </header>
  );
}

