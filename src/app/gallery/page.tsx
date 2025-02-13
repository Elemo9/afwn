import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import Footer from '../components/Footer'

export default function page() {
  return (
    <section className='w-screen bg-black'>
        <Header />
        
        {/* Video Banner Area */}
        <div className='w-full h-[650px] overflow-hidden'>
            <video 
                src={"https://res.cloudinary.com/dyn1k6wcl/video/upload/v1739422455/AFWN_SHORT_VERSION_lsov3y.mp4"}  
                loop
                muted                
                playsInline
                autoPlay
                className="w-full h-full object-cover brightness-50"
            />
        </div>

        {/* Image Gallery */}
        {/* Image Organization Navigation */}
        <div className='h-fit flex justify-start items-start w-[85%] mx-auto py-16'>
            <h2 className='text-6xl font-bold text-white '>AFW NIGERIA 2024 Gallery</h2>
        </div>
        
        <div className='w-ful h-[120px] bg-[#0c0c0c] flex items-center justify-center gap-8'>
            <h4 className='text-white text-base cursor-pointer hover:text-yellow-500 text-yellow-500'>Campaign Shoot</h4>
            <h4 className='text-white text-base cursor-pointer hover:text-yellow-500'>Casting</h4>
            <h4 className='text-white text-base cursor-pointer hover:text-yellow-500'>Day 1</h4>
            <h4 className='text-white text-base cursor-pointer hover:text-yellow-500'>Day 2</h4>
            <h4 className='text-white text-base cursor-pointer hover:text-yellow-500'>Day 3</h4>
            <h4 className='text-white text-base cursor-pointer hover:text-yellow-500'>Fittings Day 1</h4>
            <h4 className='text-white text-base cursor-pointer hover:text-yellow-500'>Fittings Day 2</h4>
            <h4 className='text-white text-base cursor-pointer hover:text-yellow-500'>Press</h4>
        </div>

        {/* Images Gallery */}
        <div className='w-[85%] mx-auto h-fit'>
            {/* Campaign Shoot Images */}
            <div className='w-full my-12 gap-4 h-fit flex justify-start '>
                <div className='w-[33.3333%] gap-4 flex flex-col overflow-hidden'>
                    {
                        [
                            "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739425568/IMG_8482_vpjwvw.jpg",
                            "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739425600/IMG_8466_pq5ila.jpg",
                            "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739425630/IMG_8424_pxuz9d.jpg",
                            "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739425659/IMG_8369_wub7an.jpg",
                            "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739425688/IMG_8362_chvwrt.jpg",
                            "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739425722/IMG_8179_cmluz2.jpg",
                            "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739425823/IMG_8331_lixkud.jpg",
                        ].map((image, index) => (
                            <img 
                                key={index+"abcd"}
                                src={image} 
                                alt={index+"Feature image"}
                                className='w-full h-auto object-cover'
                            />
                        ))                       
                    }
                </div>
                <div className='w-[33.3333%] gap-4 flex flex-col overflow-hidden'>
                    {
                        [
                            "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739425752/IMG_8336_ogsh3g.jpg",
                            "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739425852/IMG_8335_byo1df.jpg",
                            "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739425882/IMG_8327_lgcbst.jpg",
                            "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739425924/IMG_8293_revsdw.jpg",
                            "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739425958/IMG_8279_gcj7hg.jpg",
                            "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739425985/IMG_8263_ye7fvx.jpg",
                            "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739426014/IMG_8258_opkozx.jpg",
                        ].map((image, index) => (
                            <img 
                                src={image} 
                                key={index+"abcd"}
                                alt={index+"Feature image"}
                                className='w-full h-auto object-cover'
                            />
                        ))
                    }
                </div>
                <div className='w-[33.3333%] gap-4 flex flex-col overflow-hidden'>
                    {
                        [
                            "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739426044/IMG_8254_qs6pkg.jpg",
                            "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739426120/IMG_8218_tkltaa.jpg",
                            "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739426152/IMG_8107_bmeftl.png",
                            "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739426153/IMG_8096_ptpnio.png",
                            "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739426193/IMG_8187_nda5kq.jpg",
                            "https://res.cloudinary.com/dyn1k6wcl/image/upload/v1739426231/IMG_8171_azeqxc.jpg",
                        ].map((image, index) => (
                            <img 
                                src={image} 
                                key={index+"abcd"}
                                alt={index+"Feature image"}
                                className='w-full h-auto object-cover'
                            />
                        ))
                    }
                </div>
            </div>
        </div>


        <Footer />

    </section>
  )
}
