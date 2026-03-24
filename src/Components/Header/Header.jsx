import React from 'react'
import { FaList } from "react-icons/fa";

const Header = () => {
    return (
        <header className='h-16 fixed w-full z-20 bg-[#0A0A0F]/90 backdrop-blur-xl border-b border-white/[0.08] '>
            <nav className='flex justify-between px-4 h-full items-center max-w-[1400px] mx-auto'>
                <div className="left-side flex items-center gap-2">
                    <h2 className='text-[22px] font-extrabold tracking-tight bg-gradient-to-r from-white to-[#A78BFA] bg-clip-text text-transparent '>
                        DigitalPro
                    </h2>
                    <span className='bg-[#7C5CFC]/20 border border-[#7C5CFC]/35 text-[#A78BFA] rounded-full text-[10px] font-semibold px-3 py-[3px] tracking-wide'>
                        Marketing Agency
                    </span>
                </div>
                <span className='w-1/2 relative'>
                    <FaList className='md:hidden text-3xl m-auto peer cursor-pointer' />
                    <div className="hidden peer-hover:flex md:flex absolute md:static top-[110%] left-0 w-full bg-[#0A0A0F] md:bg-transparent p-4 md:p-0 rounded-xl border border-white/[0.08] md:border-none z-50">
                        <ul className='flex flex-col md:flex-row justify-evenly gap-3 w-full'>
                            <li className={style}>Home</li>
                            <li className={style}>Service</li>
                            <li className={style}>Our Work</li>
                            <li className={style}>Our Team</li>
                            <li className={style}>Contact Us</li>
                        </ul>
                    </div>
                </span>
                <button className="bg-[#7C5CFC]  px-5 py-[10px] text-sm font-bold rounded-xl cursor-pointer text-white shadow-[0_0_20px_rgba(124,92,252,0.35)] hover:bg-[#6B4FE8] hover:shadow-[0_0_32px_rgba(124,92,252,0.55)] hover:-translate-y-0.5 transition-all duration-200">
                    Get a Consultation
                </button>
            </nav>
        </header>
    )
}

const style = "cursor-pointer font-semibold text-[#9CA3AF] hover:text-white relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#7C5CFC] after:rounded-full after:transition-all after:duration-300 hover:after:w-full transition-colors duration-200"

export default Header