import React from 'react'
import { FaCheck, FaPlay, FaChartLine } from 'react-icons/fa'
import { IoIosPeople } from "react-icons/io"

const Main = () => {
    return (
        <main className="min-h-screen flex flex-col md:flex-row py-28 px-8 max-w-[1400px] mx-auto gap-16 items-center animate-[fadeUp_.7s_ease_both]">

            <div className="w-full md:w-1/2 flex flex-col gap-7 items-center md:items-start text-center md:text-left">
                <span className='inline-flex items-center gap-2 bg-[#7C5CFC]/20 border border-[#7C5CFC]/30 text-[#A78BFA] text-xs font-bold px-4 py-[6px] rounded-full w-fit tracking-wider'>
                    <span className='w-1.5 h-1.5 bg-[#7C5CFC] rounded-full animate-pulse'></span>
                    #1 Digital Marketing Agency
                </span>

                <h2 className='text-[38px] md:text-[54px] font-extrabold leading-[1.1] tracking-tight text-white'>
                    We Create{' '}
                    <span className='bg-gradient-to-r from-[#A78BFA] to-[#F472B6] bg-clip-text text-transparent'>
                        Digital <br /> Success
                    </span>{' '}
                    for Your Brand
                </h2>

                <p className='text-[#9CA3AF] text-base md:text-lg leading-relaxed max-w-[480px]'>
                    We provide integrated marketing solutions that help your company grow and increase sales through innovative strategies.
                </p>

                <div className="flex gap-5 flex-wrap justify-center md:justify-start">
                    {['10+ Years Experience', '+500 Clients', 'Professional Team'].map((f, i) => (
                        <p key={i} className='flex items-center gap-2 text-sm font-semibold text-[#D1FAE5]'>
                            <FaCheck className='bg-[#34D399]/20 text-[#34D399] p-1 text-xl rounded-full flex-shrink-0 border border-[#34D399]/40' />
                            {f}
                        </p>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center w-full md:w-auto">
                    <button className='w-full sm:w-auto bg-[#7C5CFC] px-8 py-4 rounded-2xl text-base font-bold cursor-pointer text-white shadow-[0_0_24px_rgba(124,92,252,0.4)] hover:shadow-[0_0_40px_rgba(124,92,252,0.6)] hover:-translate-y-0.5 transition-all duration-200'>
                        Start Your Journey Now
                    </button>
                    <button className='w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-white/[0.08] px-7 py-[14px] rounded-2xl text-base font-semibold cursor-pointer text-white hover:border-white/25 hover:bg-white/[0.04] transition-all duration-200'>
                        <span className='w-7 h-7 bg-white/10 rounded-full flex items-center justify-center text-[9px]'>
                            <FaPlay />
                        </span>
                        Watch the Video
                    </button>
                </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
                <div className="relative w-full max-w-[340px] md:max-w-[440px]">
                    <div className="w-full aspect-[1/1.05] bg-gradient-to-br from-[#1E1040] to-[#0D1B2A] rounded-[28px] border border-[#7C5CFC]/25 relative overflow-hidden flex items-center justify-center">
                        <div className="absolute w-48 h-48 bg-[radial-gradient(circle,rgba(124,92,252,0.35)_0%,transparent_70%)] rounded-full -top-10 -right-10 animate-pulse"></div>
                        <div className="absolute w-36 h-36 bg-[radial-gradient(circle,rgba(244,114,182,0.25)_0%,transparent_70%)] rounded-full -bottom-8 -left-8 animate-pulse [animation-delay:1s]"></div>
                        <div className="z-10 relative flex flex-col items-center gap-4">
                            <FaChartLine className='text-[56px] md:text-[72px] text-[#A78BFA]/50' />
                            <div className="flex items-end gap-2 opacity-50">
                                {[44, 64, 54, 84, 74, 99].map((h, i) => (
                                    <div key={i} className="w-4 md:w-5 bg-[#7C5CFC]/60 rounded-md" style={{ height: `${h * 0.4}px` }}></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="absolute -bottom-5 -left-5 bg-[#13131A] border border-white/[0.08] rounded-2xl px-4 py-3 flex items-center gap-3 z-10 shadow-2xl animate-[floatAnim_4s_1s_ease-in-out_infinite]">
                        <div className='w-10 h-10 bg-[#34D399]/15 rounded-xl flex items-center justify-center'>
                            <IoIosPeople className='text-2xl text-[#34D399]' />
                        </div>
                        <div>
                            <span className='block text-xs text-[#9CA3AF]'>Happy Clients</span>
                            <span className='text-xl font-extrabold text-white'>+500</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main