import React from 'react'
import { FaDotCircle } from "react-icons/fa";


export default function GetATicket() {
  return (
    <div className='flex items-center h-fit w-full py-24'>
        <div className='w-[85%] mx-auto flex flex-col gap-10'>
            <h2 className='text-7xl text-white font-black '>AFWN2025 ENTRY / TICKET SALES</h2>
            <div className='flex items-center h-[600px] justify-between mt-8'>
                
                <div className='flex flex-col gap-6 w-[45%] h-full justify-between border border-white rounded-[2rem] p-12'>
                    <h4 className='text-5xl font-black text-white uppercase'>GOLD PACKAGE</h4>
                    
                    <div className='flex flex-col gap-8'>
                        <div className='flex items-center gap-6'>
                            <FaDotCircle className='text-yellow-500' size={25}/>
                            <p className='text-white font-extralight '>Entry to ONE DAY AFWN2025 Exhibition & Food Halls</p>
                        </div>

                        <div className='flex items-center gap-6'>
                            <FaDotCircle className='text-yellow-500' size={25}/>
                            <p className='text-white font-extralight '>Entry to ONE DAY 1 Catwalk Showcase</p>
                        </div>

                        <div className='flex items-center gap-6'>
                            <FaDotCircle className='text-yellow-500' size={25}/>
                            <p className='text-white font-extralight '>Adire Festivals</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-6'>
                        <button className='w-fit h-fit px-20 py-5 text-white uppercase bg-yellow-500 rounded-3xl font-semibold tracking-widest text-lg'>Buy Ticket</button>
                        <p className='text-yellow-500 text-4xl font-bold '>&#8358;10,000</p>
                    </div>
                </div>

                <div className='flex flex-col gap-6  w-[45%] h-full justify-between bg-white rounded-3xl p-12'>
                    <h4 className='text-5xl font-black text-black uppercase'>DIAMOND PACKAGE</h4>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-6'>
                            <FaDotCircle className='text-yellow-500' size={25}/>
                            <p className='text-black font-extralight '>Entry to ONE DAY AFWN2025 Exhibition & Food Halls</p>
                        </div>

                        <div className='flex items-center gap-6'>
                            <FaDotCircle className='text-yellow-500' size={25}/>
                            <p className='text-black font-extralight '>Entry to ONE DAY 1 Catwalk Showcase</p>
                        </div>

                        <div className='flex items-center gap-6'>
                            <FaDotCircle className='text-yellow-500' size={25}/>
                            <p className='text-black font-extralight '>Adire Festivals</p>
                        </div>

                        <div className='flex items-center gap-6'>
                            <FaDotCircle className='text-yellow-500' size={25}/>
                            <p className='text-black font-extralight '>AFWN 2025 Exhibitors</p>
                        </div>

                        <div className='flex items-center gap-6'>
                            <FaDotCircle className='text-yellow-500' size={25}/>
                            <p className='text-black font-extralight '>Trade Expo 2025</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-6'>
                        <button className='w-fit h-fit px-20 py-5 text-white uppercase bg-yellow-500 rounded-3xl font-semibold tracking-widest text-lg'>Buy Ticket</button>
                        <p className='text-yellow-500 text-4xl font-bold '>&#8358;50,000</p>
                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}
