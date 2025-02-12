import React from 'react';

export default function WelcomeToAFWN() {
  return (
    <div className="h-fit w-full flex items-center py-16 md:py-24">
      <div className="flex flex-col md:flex-row justify-between w-[90%] max-w-[1200px] mx-auto px-4">
        
        {/* Left Section */}
        <div className="flex flex-col gap-6 w-full md:w-[48%] text-center md:text-left">
          <h2 className="text-3xl font-black uppercase tracking-[0.4em] text-yellow-500">
            Welcome
          </h2>
          <h4 
            className="text-4xl md:text-6xl uppercase font-semibold text-white"
            style={{ fontFamily: 'Didot, serif' }}
          >
            Africa Fashion Week Nigeria
          </h4>
          <p className="text-base tracking-widest text-white">
            The largest global showcase of emerging African creatives.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-8 w-full md:w-[48%] text-center md:text-left">
          <p className="text-sm tracking-widest leading-7 md:leading-8 text-white">
            African Fashion Week Nigeria (AFWN) is the premier platform celebrating the vibrant world of African fashion. 
            As the largest global showcase of emerging African creatives, AFWN unites designers, models, 
            and fashion enthusiasts to highlight the richness of African heritage, 
            innovation, and craftsmanship. From bold prints to contemporary designs, 
            this event bridges tradition and modernity, putting African fashion on the global stage.
          </p>
          
          <p className="text-sm tracking-widest leading-7 md:leading-8 text-white">
            AFWN empowers the next generation of African talent through runway shows, exhibitions, and networking opportunities. 
            It&apos;s a space for emerging designers to shine and for industry leaders to discover the future of African fashion. 
            Join us in celebrating the creativity, diversity, 
            and beauty of African design. Welcome to AFWN—where fashion dreams come to life!
          </p>
        </div>

      </div>
    </div>
  );
}