import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";

export default function EventSection() {
  return (
    <section className="h-fit w-full py-24">
      <div className="w-[85%] mx-auto flex flex-col gap-12">
        <p className="w-fit h-fit px-12 py-4 rounded-3xl border border-yellow-500 text-white text-sm">
          Our Coming Events
        </p>
        <div className="w-full flex items-center justify-between">
          <h3 className="text-white font-extrabold text-6xl w-[800px]">
            Experience the Pulse of African Fashion: Unmissable Events Await!
          </h3>
          <button className="bg-yellow-500 text-white font-semibold px-10 py-4 rounded-3xl">
            Explore Older Events
          </button>
        </div>

        {/* Event Cards */}
        <div className="flex items-center w-full bg-[#1d1d1d] rounded-3xl px-10 py-12">
          <div className="w-[90%] mx-auto flex items-center justify-between">
            <img
              src={
                "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739242201/IMG_4074_knenq4.jpg"
              }
              alt="Image for model"
              className="w-[35%] h-[400px] object-cover rounded-xl"
            />

            <div className="flex flex-col gap-5 w-[60%]">
              <h2 className="font-bold leading-[1.5em] text-5xl text-white">
                African Fashion Week Nigeria 2025 Summit
              </h2>
              <p className="text-lg text-white/30">
                African Fashion and its Economic Impacts on Art, Film, Music and Tech
              </p>
              <h4 className="text-white text-2xl mt-4 font-semibold">AFWN Inc.</h4>
              <div className="w-full flex items-center justify-between">
                <div className="flex gap-4 items-center">
                  <FaLocationDot size={15} className="text-white/30" />
                  <p className="text-white/30">
                    Lagos Oriental Hotel, Victoria Island Lagos
                  </p>
                </div>

                <div className="flex gap-4 items-center">
                  <FaRegCalendarAlt size={15} className="text-white/30" />
                  <p className="text-white/30">December 6th, 2025</p>
                </div>

                <div className="flex gap-4 items-center">
                  <FaRegClock size={15} className="text-white/30" />
                  <p className="text-white/30">12PM - 3PM</p>
                </div>
              </div>

              <button className="bg-yellow-500 w-fit px-12 py-5 text-white font-semibold text-lg shadow-2xl rounded-3xl">
                View Event Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}