import React from 'react';

const parts = [
    { title: "Clients Worldwide", number: "+500" },
    { title: "Projects Completed", number: "+1000" },
    { title: "Marketing Experts", number: "+50" },
    { title: "Years of Experience", number: "+10" }
];

const Section2 = () => {
    return (
        <>
            <style>{`
        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

            <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#1A0A3C] to-[#0A1628] py-12 md:py-16 lg:py-20 px-4 sm:px-6">
                <div className="absolute w-64 h-64 bg-[#7C5CFC]/15 rounded-full -top-28 -left-20 z-0 blur-2xl"></div>
                <div className="absolute w-80 h-80 bg-[#2DD4BF]/10 rounded-full -bottom-36 -right-20 z-0 blur-2xl"></div>

                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 max-w-7xl mx-auto">
                    {parts.map((part, i) => (
                        <div
                            key={i}
                            className="text-center flex flex-col items-center justify-center gap-2 md:border-r border-white/10 last:border-r-0 px-4"
                            style={{ animation: `countUp 0.6s ease both ${i * 0.1}s` }}
                        >
                            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-none bg-gradient-to-r from-white to-[#A78BFA] bg-clip-text text-transparent">
                                {part.number}
                            </p>
                            <p className="text-xs sm:text-sm font-medium text-white/70">
                                {part.title}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Section2;