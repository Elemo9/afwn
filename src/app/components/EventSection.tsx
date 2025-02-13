"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";

export default function EventSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="h-fit w-full py-24"
    >
      <div className="w-[85%] mx-auto flex flex-col gap-12">
        {/* Event Tag */}
        <motion.p
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-fit h-fit px-12 py-4 rounded-3xl border border-yellow-500 text-white text-sm"
        >
          Our Coming Events
        </motion.p>

        {/* Header and Button */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <h3 className="text-white font-extrabold text-4xl md:text-6xl w-full md:w-[800px]">
            Experience the Pulse of African Fashion: Unmissable Events Await!
          </h3>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-yellow-500 text-white font-semibold px-10 py-4 rounded-3xl"
          >
            Explore Older Events
          </motion.button>
        </div>

        {/* Event Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row items-center w-full bg-[#1d1d1d] rounded-3xl px-10 py-12 gap-10"
        >
          {/* Event Image */}
          <Image
            src="https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242201/IMG_4074_knenq4.jpg"
            alt="Model Image"
            width={400}
            height={400}
            className="w-full md:w-[35%] h-[300px] md:h-[400px] object-cover rounded-xl"
          />

          {/* Event Details */}
          <div className="flex flex-col gap-5 w-full md:w-[60%]">
            <h2 className="font-bold leading-[1.5em] text-3xl md:text-5xl text-white">
              African Fashion Week Nigeria 2025 Summit
            </h2>
            <p className="text-lg text-white/60">
              African Fashion and its Economic Impacts on Art, Film, Music and Tech
            </p>
            <h4 className="text-white text-xl md:text-2xl mt-4 font-semibold">AFWN Inc.</h4>

            {/* Event Details Row */}
            <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
              <div className="flex gap-4 items-center">
                <FaLocationDot size={18} className="text-white/60" />
                <p className="text-white/60">Lagos Oriental Hotel, Victoria Island Lagos</p>
              </div>

              <div className="flex gap-4 items-center">
                <FaRegCalendarAlt size={18} className="text-white/60" />
                <p className="text-white/60">December 6th, 2025</p>
              </div>

              <div className="flex gap-4 items-center">
                <FaRegClock size={18} className="text-white/60" />
                <p className="text-white/60">12PM - 3PM</p>
              </div>
            </div>

            {/* View Event Button */}
            <motion.div
              className="rounded-full overflow-hidden flex justify-center w-fit mx-auto"
              style={{
                background: "linear-gradient(to right, #ffff00, #ffffff, #bfa48f)",
                padding: "2px",
              }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.button
                whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
                whileTap={{ scale: 0.98 }}
                className="relative rounded-full font-bold text-white px-8 py-3 flex items-center justify-center w-full"
                style={{
                  background:
                    "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/assets/africa.png')", // Restored gradient and image
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "55px",
                  textShadow: "0 0 10px rgba(255,255,255,0.7)",
                }}
              >
                View Event Details
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
