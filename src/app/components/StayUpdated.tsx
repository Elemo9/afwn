"use client";

import React from "react";
import { motion } from "framer-motion";

export default function StayUpdated() {
  return (
    <motion.div
      className="h-[800px] w-full flex items-center bg-white relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }} //
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Background Video */}
      <video
        controls={false}
        src="https://res.cloudinary.com/dyn1k6wcl/video/upload/v1739270626/WhatsApp_Video_2025-02-10_at_11.44.14_1de161a5_hnmhtj.mp4"
        loop
        muted
        playsInline
        autoPlay
        loading="lazy"
        className="brightness-50 absolute w-full h-full object-cover"
        onError={(e) => console.error("Video failed to load", e)}
      />

      {/* Content Overlay */}
      <div className="h-fit w-[90%] md:w-[800px] flex flex-col items-center justify-center gap-5 absolute bottom-[25%] left-1/2 transform -translate-x-1/2 text-center px-4">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-6xl lg:text-[5.5em] leading-[1] font-black text-white uppercase"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Stay Updated
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-white text-sm md:text-base tracking-widest text-center leading-6 md:leading-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Stay in the loop with all the latest updates from African Fashion Fusion 2025! Be the first to know about featured
          designers, event schedules, ticket releases, and exclusive behind-the-scenes content. Sign up for our newsletter and
          follow us on social media for real-time updates and sneak peeks. Don't miss out on the chance to immerse yourself in
          the glamour and creativity of African fashion—stay connected and inspired!
        </motion.p>

        {/* Email Input and Subscribe Button */}
        <motion.div
          className="w-full md:w-[80%] relative rounded-[2.5rem] p-[2px] shadow-lg"
          style={{
            background: "linear-gradient(to right, #ffff00, #ffffff, #bfa48f)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div
            className="w-full flex items-center rounded-[2.5rem] p-1 gap-4"
            style={{
              background: "linear-gradient(to right, #000000, #1a1a1a, #000000)",
              height: "60px",
            }}
          >
            {/* Input Field */}
            <input
              type="email"
              placeholder="Your Email..."
              aria-label="Enter your email to subscribe"
              className="w-full text-base md:text-xl bg-transparent focus:outline-none text-white placeholder-white px-4 font-bold"
              style={{ height: "40px" }}
            />

            {/* Animated Subscribe Button */}
            <motion.button
              aria-label="Subscribe to updates"
              className="relative rounded-full font-bold text-white px-6 md:px-8 py-2 flex items-center justify-center shadow-lg ml-2"
              style={{
                background:
                  "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/assets/africa.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "51px",
              }}
              whileHover={{ scale: 1.1 }} //
              whileTap={{ scale: 0.9 }} //
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
