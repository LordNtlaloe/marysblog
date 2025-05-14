import React from 'react'

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row">
                    {/* Left Column - About Image */}
                    <div className="md:w-1/2 mb-10 md:mb-0 relative">
                        <div className="relative w-full">
                            <div className="w-4/5 h-96 bg-gray-300 relative z-10">
                                {/* This would be your about section image */}
                            </div>
                            <div className="absolute top-5 right-5 w-full h-full border-2 border-portfolio-yellow z-0"></div>
                            <div className="absolute -top-3 -left-3 w-8 h-8 bg-portfolio-yellow rounded-full"></div>
                        </div>
                    </div>

                    {/* Right Column - About Content */}
                    <div className="md:w-1/2 md:pl-16">
                        <h2 className="section-title">
                            <span className="text-portfolio-yellow">who am i</span>
                            <br />
                            HELLO
                        </h2>

                        <div className="space-y-4">
                            <p>
                                I am a ui developer. It is a long time fact that a reader will be distracted by the readable
                                content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                more-or-less normal distribution.
                            </p>

                            <p>
                                It is a fact that a reader will be distracted by the readable content of a page when looking
                                at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
                            </p>

                            <div className="mt-8 grid grid-cols-2 gap-y-4">
                                <div>
                                    <h4 className="font-bold">Name:</h4>
                                    <p>Abdulrahman</p>
                                </div>
                                <div>
                                    <h4 className="font-bold">Email:</h4>
                                    <p>hello@example.com</p>
                                </div>
                                <div>
                                    <h4 className="font-bold">Phone:</h4>
                                    <p>+1 234 567 8900</p>
                                </div>
                                <div>
                                    <h4 className="font-bold">Location:</h4>
                                    <p>New York, USA</p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <a href="/files/resume.pdf" className="inline-block px-8 py-3 bg-portfolio-black text-white hover:bg-portfolio-yellow hover:text-portfolio-black transition-colors duration-300">
                                    DOWNLOAD CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
