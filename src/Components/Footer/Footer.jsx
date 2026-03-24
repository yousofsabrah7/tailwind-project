import React from 'react';
import {
    FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,
    FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaMap
} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-[#0A0A0F] border-t border-white/[0.08]'>
            <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.08]">

                <div className="w-full md:w-1/2 bg-[#13131A] border border-white/[0.08] rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col gap-4 md:gap-5">
                    <div>
                        <span className='inline-block bg-[#7C5CFC]/20 border border-[#7C5CFC]/30 text-[#A78BFA] text-[10px] sm:text-[11px] font-bold px-3 sm:px-4 py-[5px] rounded-full tracking-widest uppercase mb-2 sm:mb-3'>
                            Get In Touch
                        </span>
                        <h2 className='text-xl sm:text-2xl font-extrabold text-white'>Contact Us</h2>
                    </div>

                    <input
                        type="text"
                        className='w-full bg-[#0A0A0F] border border-white/[0.08] text-white px-3 sm:px-4 py-3 sm:py-4 rounded-xl placeholder-[#6B7280] focus:outline-none focus:border-[#7C5CFC] focus:shadow-[0_0_0_3px_rgba(124,92,252,0.15)] transition-all duration-200'
                        placeholder='Full Name'
                    />
                    <input
                        type="email"
                        className='w-full bg-[#0A0A0F] border border-white/[0.08] text-white px-3 sm:px-4 py-3 sm:py-4 rounded-xl placeholder-[#6B7280] focus:outline-none focus:border-[#7C5CFC] focus:shadow-[0_0_0_3px_rgba(124,92,252,0.15)] transition-all duration-200'
                        placeholder='Email Address'
                    />
                    <textarea
                        rows={4}
                        className='w-full bg-[#0A0A0F] border border-white/[0.08] text-white px-3 sm:px-4 py-3 sm:py-4 rounded-xl placeholder-[#6B7280] focus:outline-none focus:border-[#7C5CFC] focus:shadow-[0_0_0_3px_rgba(124,92,252,0.15)] transition-all duration-200 resize-none'
                        placeholder='Your Message...'
                    />
                    <button className='w-full bg-[#7C5CFC] text-white font-bold py-3 sm:py-4 rounded-xl shadow-[0_0_20px_rgba(124,92,252,0.35)] hover:bg-[#6B4FE8] hover:shadow-[0_0_32px_rgba(124,92,252,0.55)] hover:-translate-y-0.5 transition-all duration-200'>
                        Send Message
                    </button>
                </div>

                <div className='w-full md:w-1/2 flex flex-col gap-5 md:gap-6'>
                    <div>
                        <span className='inline-block bg-[#7C5CFC]/20 border border-[#7C5CFC]/30 text-[#A78BFA] text-[10px] sm:text-[11px] font-bold px-3 sm:px-4 py-[5px] rounded-full tracking-widest uppercase mb-2 sm:mb-3'>
                            Find Us
                        </span>
                        <h2 className='text-xl sm:text-2xl font-extrabold text-white'>Contact Information</h2>
                    </div>

                    <div className='flex flex-col gap-3 md:gap-4'>
                        {[
                            { icon: FaMapMarkerAlt, label: 'Address', value: 'Cairo, Egypt' },
                            { icon: FaPhoneAlt, label: 'Phone', value: '+20 123 456 7890' },
                            { icon: FaEnvelope, label: 'Email', value: 'info@digitalpro.com' },
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div key={i} className='flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-[#13131A] border border-white/[0.08] rounded-xl hover:border-[#7C5CFC]/40 transition-all duration-200 group'>
                                    <div className='size-9 sm:size-11 bg-[#7C5CFC]/20 border border-[#7C5CFC]/30 flex items-center justify-center rounded-xl flex-shrink-0 group-hover:bg-[#7C5CFC] transition-all duration-200'>
                                        <Icon className='text-[#A78BFA] group-hover:text-white transition-colors duration-200 text-sm sm:text-base' />
                                    </div>
                                    <div>
                                        <p className='text-[#6B7280] text-[10px] sm:text-xs font-medium'>{item.label}</p>
                                        <p className='text-white font-semibold text-xs sm:text-sm'>{item.value}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="w-full bg-gradient-to-br from-[#1A0A3C] to-[#0A1628] border border-[#7C5CFC]/20 rounded-2xl flex flex-col justify-center items-center gap-2 sm:gap-3 min-h-[100px] sm:min-h-[140px] p-4">
                        <div className='size-9 sm:size-12 bg-[#7C5CFC]/20 border border-[#7C5CFC]/30 rounded-xl flex items-center justify-center'>
                            <FaMap className='text-[#A78BFA] text-base sm:text-xl' />
                        </div>
                        <span className='text-[#6B7280] text-xs sm:text-sm font-medium'>Site Map</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 max-w-7xl mx-auto">
                <p className='text-[#6B7280] text-xs sm:text-sm text-center'>© 2024 DigitalPro. All rights reserved</p>
                <div className="flex items-center gap-3 sm:gap-4">
                    {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                        <div key={i} className='size-7 sm:size-9 bg-white/[0.05] border border-white/[0.08] rounded-lg flex items-center justify-center text-[#6B7280] hover:text-white hover:bg-[#7C5CFC] hover:border-[#7C5CFC] cursor-pointer transition-all duration-200'>
                            <Icon className='text-xs sm:text-sm' />
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;