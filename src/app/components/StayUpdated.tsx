import React from "react";

export default function StayUpdated() {
  return (
    <div className="h-[800px] w-full flex items-center bg-white relative">
      <video
        controls={false}
        src={
          "https://res.cloudinary.com/dyn1k6wcl/video/upload/v1739270626/WhatsApp_Video_2025-02-10_at_11.44.14_1de161a5_hnmhtj.mp4"
        }
        loop
        muted
        playsInline
        autoPlay
        className="brightness-50 absolute w-full top-0 left-0 object-cover h-full"
      />

      <div className="h-fit w-[800px] flex flex-col items-center justify-center gap-5 absolute bottom-[25%] left-[30%]">
        <h2 className="text-[5.5em] leading-[1] font-black text-white uppercase">
          Stay Updated
        </h2>
        <p className="text-white text-base tracking-widest text-center leading-10">
          Stay in the loop with all the latest updates from African Fashion
          Fusion 2025! Be the first to know about featured designers, event
          schedules, ticket releases, and exclusive behind-the-scenes content.
          Sign up for our newsletter and follow us on social media for real-time
          updates and sneak peeks. Don't miss out on the chance to immerse
          yourself in the glamour and creativity of African fashion—stay
          connected and inspired!
        </p>
        <div className="w-[80%] relative rounded-[2.5rem] p-6 h-[80px] border-2 border-white">
          <input
            type="text"
            placeholder="Your Email..."
            className="w-full text-xl bg-transparent focus:outline-none text-white"
          />
          <button className="h-[50px] tracking-widest w-fit px-12 py-3 text-white bg-yellow-500 rounded-3xl absolute right-[3%] top-[16%]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}