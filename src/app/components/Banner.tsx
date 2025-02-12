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

      {/* Content Wrapper */}
      <div className="relative text-center md:text-right max-w-[90%] md:max-w-[800px] flex flex-col gap-6 items-center md:items-end">
        {/* Title Section */}
        <motion.h1
          className="relative text-white uppercase font-extrabold leading-tight text-[10vw] md:text-[4.5em] tracking-wide"
          style={{ fontFamily: "Didot, serif" }}
        >
          <motion.span
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative bg-clip-text text-transparent bg-[url('/assets/africa.png')] bg-cover bg-center"
            style={{
              textShadow:
                "2px 2px 6px rgba(255,255,255,0.4), 3px 3px 8px rgba(0,0,0,0.3)",
            }}
          >
            AFRICA
          </motion.span>{" "}
          {/* FASHION */}
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
          {/* WEEK NIGERIA */}
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
          className="text-white text-sm md:text-lg tracking-wide text-center md:text-right leading-snug"
          style={{ fontFamily: "Maviste, serif" }}
        >
          ...Where culture and creativity collide
        </motion.p>

        {/* "Get Ticket" Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="p-[2px] rounded-full shadow-lg"
          style={{
            background: "linear-gradient(to right, #ffff00, #ffffff, #bfa48f)",
          }}
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="relative rounded-full font-semibold text-white px-6 md:px-8 py-2 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/assets/africa.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <motion.span
              className="block"
              whileHover={{
                textShadow:
                  "0px 0px 6px rgba(255,255,255,0.8), 0px 0px 12px rgba(255,255,255,0.8)",
              }}
              transition={{ duration: 0.3 }}
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
            >
              Get Ticket
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
