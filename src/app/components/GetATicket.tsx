"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaDotCircle } from "react-icons/fa";

export default function GetATicket() {
  return (
    <div className="flex items-center h-fit w-full py-24 bg-black">
      <div className="w-[85%] mx-auto flex flex-col gap-10">
        <h2 className="text-4xl md:text-7xl text-white font-black text-center md:text-left">
          AFWN 2025 ENTRY / TICKET SALES
        </h2>

        <div className="flex flex-col md:flex-row items-center h-fit md:h-[600px] justify-between mt-8 gap-8 md:gap-0">
          {/* Gold Package */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6 w-full md:w-[45%] h-full justify-between p-[3px] rounded-[2rem] transition-all transform hover:scale-105"
            style={{
              background: "linear-gradient(to right, #ffd700, #ffecb3, #bfa48f)",
            }}
          >
            <div className="flex flex-col gap-6 h-full justify-between bg-black rounded-[2rem] p-8 md:p-12">
              <h4 className="text-4xl md:text-5xl font-black text-white uppercase">
                GOLD PACKAGE
              </h4>

              <div className="flex flex-col gap-6">
                {[
                  "Entry to ONE DAY AFWN2025 Exhibition & Food Halls",
                  "Entry to ONE DAY 1 Catwalk Showcase",
                  "Adire Festivals",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 md:gap-6">
                    <FaDotCircle className="text-yellow-500" size={20} />
                    <p className="text-white font-extralight">{item}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                <motion.div
                  className="rounded-full overflow-hidden"
                  style={{
                    background: "linear-gradient(to right, #ffff00, #ffffff, #bfa48f)",
                    padding: "2px",
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                    whileTap={{ scale: 0.95 }}
                    className="relative rounded-full font-semibold text-white px-6 md:px-8 py-2 flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/assets/africa.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "50px",
                      width: "100%",
                    }}
                  >
                    Buy Ticket
                  </motion.button>
                </motion.div>
                <p className="text-yellow-500 text-3xl md:text-4xl font-bold">
                  &#8358;10,000
                </p>
              </div>
            </div>
          </motion.div>

          {/* Diamond Package */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-6 w-full md:w-[45%] h-full justify-between p-[3px] rounded-3xl transition-all transform hover:scale-105"
            style={{
              background: "linear-gradient(to right, #b9f2ff, #ffffff, #b9f2ff)",
            }}
          >
            <div className="flex flex-col gap-6 h-full justify-between bg-black rounded-3xl p-8 md:p-12">
              <h4 className="text-4xl md:text-5xl font-black text-white uppercase">
                DIAMOND PACKAGE
              </h4>

              <div className="flex flex-col gap-4">
                {[
                  "Entry to ONE DAY AFWN2025 Exhibition & Food Halls",
                  "Entry to ONE DAY 1 Catwalk Showcase",
                  "Adire Festivals",
                  "AFWN 2025 Exhibitors",
                  "Trade Expo 2025",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 md:gap-6">
                    <FaDotCircle className="text-yellow-500" size={20} />
                    <p className="text-white font-extralight">{item}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                <motion.div
                  className="rounded-full overflow-hidden"
                  style={{
                    background: "linear-gradient(to right, #ffff00, #ffffff, #bfa48f)",
                    padding: "2px",
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                    whileTap={{ scale: 0.95 }}
                    className="relative rounded-full font-semibold text-white px-6 md:px-8 py-2 flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/assets/africa.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "50px",
                      width: "100%",
                    }}
                  >
                    Buy Ticket
                  </motion.button>
                </motion.div>
                <p className="text-yellow-500 text-3xl md:text-4xl font-bold">
                  &#8358;50,000
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
