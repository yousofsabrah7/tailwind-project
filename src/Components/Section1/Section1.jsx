import React from 'react'
import { FaChartLine, FaFacebook, FaCode, FaCheck } from "react-icons/fa6"

const cards = [
    {
        icon: FaChartLine,
        iconBg: "bg-[#7C5CFC]/20",
        iconColor: "text-[#A78BFA]",
        iconHoverBg: "group-hover:bg-[#7C5CFC]",
        iconHoverColor: "group-hover:text-white",
        hoverBorder: "hover:border-[#7C5CFC]/50",
        hoverShadow: "hover:shadow-[#7C5CFC]/10",
        accentFrom: "from-[#7C5CFC]", accentTo: "to-[#A78BFA]",
        title: "Search Engine Optimization",
        desc: "We ensure your website appears on the first pages of search engines and increases qualified visitors.",
        features: ["Keyword Analysis", "Content Optimization", "Link Building"]
    },
    {
        icon: FaFacebook,
        iconBg: "bg-[#EC4899]/15",
        iconColor: "text-[#F472B6]",
        iconHoverBg: "group-hover:bg-[#EC4899]",
        iconHoverColor: "group-hover:text-white",
        hoverBorder: "hover:border-[#F472B6]/50",
        hoverShadow: "hover:shadow-[#F472B6]/10",
        accentFrom: "from-[#EC4899]", accentTo: "to-[#F472B6]",
        title: "Social Media Marketing",
        desc: "We design professional websites that are compatible with all devices.",
        features: ["Precise Targeting", "Results Analysis", "Campaign Optimization"]
    },
    {
        icon: FaCode,
        iconBg: "bg-[#2DD4BF]/15",
        iconColor: "text-[#2DD4BF]",
        iconHoverBg: "group-hover:bg-[#0D9488]",
        iconHoverColor: "group-hover:text-white",
        hoverBorder: "hover:border-[#2DD4BF]/50",
        hoverShadow: "hover:shadow-[#2DD4BF]/10",
        accentFrom: "from-[#0D9488]", accentTo: "to-[#2DD4BF]",
        title: "Website Design & Development",
        desc: "We design professional websites that are compatible with all devices.",
        features: ["Responsive Design", "High Speed", "Easy Management"]
    }
]

const Section1 = () => {
    return (
        <section className="py-20 px-8 max-w-[1400px] mx-auto">

            <div className="text-center mb-16">
                <span className='inline-block bg-[#7C5CFC]/20 border border-[#7C5CFC]/30 text-[#A78BFA] text-[11px] font-bold px-4 py-[5px] rounded-full tracking-widest uppercase mb-4'>
                    Our Services
                </span>
                <h2 className='text-[32px] md:text-[38px] font-extrabold tracking-tight text-white mb-3'>
                    Our Integrated Services
                </h2>
                <p className='text-[#9CA3AF] text-base md:text-lg'>
                    We offer a comprehensive range of digital solutions to grow your business.
                </p>
                <div className="w-12 h-1 bg-[#7C5CFC] rounded-full mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {cards.map((card, i) => {
                    const Icon = card.icon
                    return (
                        <div
                            key={i}
                            className={`bg-[#13131A] border border-white/[0.08] rounded-2xl p-6
                                        flex flex-col gap-5 cursor-pointer group
                                        transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
                                        ${card.hoverBorder} ${card.hoverShadow}
                                        animate-[fadeUp_.6s_ease_both]`}
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            <div className={`size-14 ${card.iconBg} ${card.iconHoverBg} rounded-xl flex items-center justify-center transition-all duration-300`}>
                                <Icon className={`text-2xl ${card.iconColor} ${card.iconHoverColor} transition-colors duration-300`} />
                            </div>

                            <h2 className='text-xl font-bold text-white'>{card.title}</h2>

                            <p className='text-[#9CA3AF] text-sm leading-relaxed'>{card.desc}</p>

                            <div className="flex flex-col gap-2">
                                {card.features.map((f, j) => (
                                    <div key={j} className="flex items-center gap-2">
                                        <FaCheck className='text-[#34D399] text-xs flex-shrink-0' />
                                        <span className='text-[#9CA3AF] text-sm'>{f}</span>
                                    </div>
                                ))}
                            </div>

                            <div className={`w-0 group-hover:w-full h-[2px] bg-gradient-to-r ${card.accentFrom} ${card.accentTo} rounded-full transition-all duration-500`}></div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Section1