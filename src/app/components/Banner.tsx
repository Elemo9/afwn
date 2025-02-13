"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="w-screen h-screen relative overflow-hidden flex items-center justify-center px-4">
      {/* Background Video */}
      <video
        controls={false}
        src="https://res.cloudinary.com/dyn1k6wcl/video/upload/v1739270611/WhatsApp_Video_2025-02-10_at_11.44.14_df1a16e7_jomt3o.mp4"
        loop
        muted
        playsInline
        autoPlay
        className="absolute w-full h-full object-cover brightness-50"
        title="Background Video"
      />

      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>

      {/* Content Wrapper */}
      <div className="relative text-left max-w-[90%] md:max-w-[800px] flex flex-col gap-6 items-start">
        {/* Title Section */}
        <motion.h1
          className="relative text-white uppercase font-extrabold leading-tight text-[12vw] md:text-[6em] tracking-wide"
          style={{ fontFamily: "'Block Horns', sans-serif" }}
        >
          <motion.span
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative bg-clip-text text-transparent bg-[url('/assets/africa.png')] bg-cover bg-center drop-shadow-lg"
          >
            AFRICA
          </motion.span>{" "}
          <motion.span
            className="relative inline-block"
            initial={{ opacity: 0, y: 50, rotate: 10 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.span
              className="absolute inset-0 text-white opacity-40 blur-md"
              initial={{ opacity: 0, y: 50, rotate: 10 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              FASHION
            </motion.span>
            <motion.span
              className="relative text-white font-extrabold"
              initial={{ opacity: 0, y: -50, rotate: -10 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              FASHION
            </motion.span>
          </motion.span>{" "}
          <motion.span
            className="text-yellow-500 font-extrabold"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            WEEK NIGERIA
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-white text-lg md:text-xl tracking-wide text-left leading-snug"
          style={{ fontFamily: "'TT Neoris', serif" }}
        >
          ...Where culture and creativity collide
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="p-[4px] rounded-full shadow-lg"
          style={{
            background: "linear-gradient(to right, #ffff00, #ffffff, #bfa48f)",
          }}
        >
          <motion.button
            whileTap={{
              scale: 0.95,
              y: 2, 
              transition: { type: "spring", stiffness: 200, damping: 8 }, // Smooth bounce
            }}
            className="relative rounded-full font-bold text-white text-lg md:text-2xl px-8 md:px-10 py-3 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/assets/africa.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <motion.span
              className="block uppercase"
              whileHover={{
                textShadow:
                  "0px 0px 10px rgba(255,255,255,0.9), 0px 0px 16px rgba(255,255,255,1)",
              }}
              transition={{ duration: 0.3 }}
              style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.9)" }}
            >
              Register Now
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
