import Link from 'next/link'
import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-portfolio-black text-white py-10">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="font-bold text-2xl tracking-tighter">PROTOFILO.</Link>
                        <p className="mt-2 text-gray-400 text-sm">
                            UI Developer & Designer
                        </p>
                    </div>

                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <nav className="flex space-x-6">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About', path: '/#about' },
                                { name: 'Works', path: '/#works' },
                                { name: 'Blog', path: '/blog' },
                                { name: 'Contact', path: '/#contact' },
                            ].map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    className="text-gray-400 hover:text-portfolio-yellow transition-colors duration-300 text-sm"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div>
                        <p className="text-gray-400 text-sm">
                            &copy; {currentYear} Abdulrahman. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>   
    )
}
