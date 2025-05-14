import React from 'react'

export default function Hero() {
    return (
        <div className="relative h-screen flex items-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 opacity-10">
                {Array.from({ length: 100 }).map((_, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-portfolio-black rounded-full"></div>
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto grid md:grid-cols-2 gap-12">
                <div className="flex flex-col justify-center animate-fade-in">
                    <div className="bg-portfolio-black text-white p-10">
                        <span className="text-xl">MY NAME IS</span>
                        <h1 className="text-5xl md:text-6xl font-bold mt-3 mb-5">
                            ABDULRAHMAN
                        </h1>
                        <div className="highlight-text text-lg mt-4">
                            I&apos;M A UI DEVELOPER
                        </div>
                    </div>
                </div>

                <div className="hidden md:flex items-center justify-center">
                    <div className="w-full h-[400px] bg-gray-300 relative">
                        {/* This would be your profile image */}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <div className="w-px h-12 bg-portfolio-yellow"></div>
                <span className="mt-2 text-sm opacity-70">SCROLL</span>
            </div>
        </div>
    )
}
