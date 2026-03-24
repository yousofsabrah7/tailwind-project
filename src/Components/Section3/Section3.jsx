import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const parts = [
    {
        initials: "AM", topBg: "from-[#1E1040] to-[#2D1B69]",
        avatarBg: "from-[#7C5CFC] to-[#A78BFA]", jobColor: "text-[#A78BFA]",
        hoverBorder: "hover:border-[#7C5CFC]/50", hoverShadow: "hover:shadow-[#7C5CFC]/15",
        name: "Ahmed Mohamed", job: "Marketing Director", about: "10 years of experience in digital marketing"
    },
    {
        initials: "SA", topBg: "from-[#2D1020] to-[#4A1535]",
        avatarBg: "from-[#EC4899] to-[#F472B6]", jobColor: "text-[#F9A8D4]",
        hoverBorder: "hover:border-[#F472B6]/50", hoverShadow: "hover:shadow-[#F472B6]/12",
        name: "Sara Ahmed", job: "SEO Specialist", about: "Specialized in search engine optimization"
    },
    {
        initials: "MA", topBg: "from-[#0A2020] to-[#0F3535]",
        avatarBg: "from-[#0D9488] to-[#2DD4BF]", jobColor: "text-[#5EEAD4]",
        hoverBorder: "hover:border-[#2DD4BF]/50", hoverShadow: "hover:shadow-[#2DD4BF]/12",
        name: "Mohamed Ali", job: "Web Developer", about: "Expert in web development"
    },
    {
        initials: "NK", topBg: "from-[#201008] to-[#3D1F05]",
        avatarBg: "from-[#D97706] to-[#FCD34D]", jobColor: "text-[#FCD34D]",
        hoverBorder: "hover:border-[#FCD34D]/50", hoverShadow: "hover:shadow-[#FCD34D]/10",
        name: "Noura Khaled", job: "Graphic Designer", about: "Specialized in visual identity design"
    }
];

const Section3 = () => {
    return (
        <>
            <style>{`
        @keyframes fadeUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
        }
    `}</style>

            <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-10 sm:mb-12 lg:mb-14">
                    <span className='inline-block bg-[#7C5CFC]/20 border border-[#7C5CFC]/30 text-[#A78BFA] text-[10px] sm:text-[11px] font-bold px-3 sm:px-4 py-[5px] rounded-full tracking-widest uppercase mb-3 sm:mb-4'>
                        Our Team
                    </span>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-extrabold tracking-tight text-white mb-2 sm:mb-3'>
                        Our Creative Team
                    </h2>
                    <p className='text-sm sm:text-base text-[#9CA3AF] max-w-xl mx-auto'>
                        An elite group of the best digital marketing experts.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-5">
                    {parts.map((part, i) => (
                        <div
                            key={i}
                            className={`bg-[#13131A] border border-white/[0.08] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${part.hoverBorder} ${part.hoverShadow} animate-[fadeUp_.6s_ease_both]`}
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            <div className={`h-36 sm:h-44 bg-gradient-to-br ${part.topBg} flex items-center justify-center relative group overflow-hidden`}>
                                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${part.avatarBg} text-white flex items-center justify-center text-lg sm:text-xl font-extrabold border-2 border-white/15 z-10 transition-all duration-300 group-hover:opacity-0 group-hover:scale-75`}>
                                    {part.initials}
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center gap-2 sm:gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                    {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, j) => (
                                        <a
                                            key={j}
                                            href="#"
                                            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white text-xs sm:text-sm hover:bg-white/20 hover:scale-110 transition-all duration-200"
                                            aria-label={`Social media link ${j + 1}`}
                                        >
                                            <Icon />
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="p-4 sm:p-5 text-center border-t border-white/[0.06]">
                                <h3 className='text-sm sm:text-base font-bold text-white mb-1'>{part.name}</h3>
                                <p className={`text-xs sm:text-sm font-semibold mb-2 ${part.jobColor}`}>{part.job}</p>
                                <p className='text-[11px] sm:text-xs text-[#9CA3AF] leading-relaxed'>{part.about}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Section3;