"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaDotCircle } from "react-icons/fa";

export default function GetATicket() {
  const [clickedButton, setClickedButton] = useState(null);

  const handleClick = (button) => {
    setClickedButton(button);
    setTimeout(() => setClickedButton(null), 500);
  };

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
                    <FaDotCircle className="text-yellow-500" size={22} />
                    <p className="text-white font-bold">{item}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                <motion.div
                  className="rounded-full overflow-hidden relative p-[2px]"
                  style={{
                    background: "linear-gradient(to right, #ffff00, #ffffff, #bfa48f)",
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full"></div>

                  <motion.button
                    onClick={() => handleClick("gold")}
                    animate={clickedButton === "gold" ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="relative rounded-full font-bold text-white text-xl px-6 md:px-8 py-3 flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/assets/africa.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    Buy Ticket
                  </motion.button>
                </motion.div>
                <p className="text-yellow-500 text-3xl md:text-4xl font-extrabold">
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
                    <FaDotCircle className="text-yellow-500" size={22} />
                    <p className="text-white font-bold">{item}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                <motion.div
                  className="rounded-full overflow-hidden relative p-[2px]"
                  style={{
                    background: "linear-gradient(to right, #ffff00, #ffffff, #bfa48f)",
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full"></div>

                  <motion.button
                    onClick={() => handleClick("diamond")}
                    animate={clickedButton === "diamond" ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="relative rounded-full font-bold text-white text-xl px-6 md:px-8 py-3 flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/assets/africa.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    Buy Ticket
                  </motion.button>
                </motion.div>
                <p className="text-yellow-500 text-3xl md:text-4xl font-extrabold">
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
