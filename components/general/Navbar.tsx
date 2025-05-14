"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';


export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSetActive = (link: string) => {
        setActiveLink(link);
        setIsMenuOpen(false);
    };
    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="font-bold text-2xl tracking-tighter">PROTOFILO.</Link>

                {/* Mobile Menu Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="block md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <Menu className="h-6 w-6" />
                </Button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 items-center">
                    {[
                        { name: 'HOME', path: '/', id: 'home' },
                        { name: 'ABOUT', path: '/#about', id: 'about' },
                        { name: 'WORKS', path: '/#works', id: 'works' },
                        { name: 'BLOG', path: '/blog', id: 'blog' },
                        { name: 'CONTACT', path: '/#contact', id: 'contact' },
                    ].map((link) => (
                        <Link
                            key={link.id}
                            href={link.path}
                            className={`nav-link ${activeLink === link.id ? 'active' : ''}`}
                            onClick={() => handleSetActive(link.id)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/admin" className="px-4 py-2 bg-portfolio-black text-white hover:bg-portfolio-yellow hover:text-portfolio-black transition-colors duration-300">
                        ADMIN
                    </Link>
                </nav>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="fixed inset-0 bg-portfolio-black z-50 pt-20">
                        <nav className="flex flex-col items-center space-y-8 p-8">
                            {[
                                { name: 'HOME', path: '/', id: 'home' },
                                { name: 'ABOUT', path: '/#about', id: 'about' },
                                { name: 'WORKS', path: '/#works', id: 'works' },
                                { name: 'BLOG', path: '/blog', id: 'blog' },
                                { name: 'CONTACT', path: '/#contact', id: 'contact' },
                            ].map((link) => (
                                <Link
                                    key={link.id}
                                    href={link.path}
                                    className="text-white text-xl nav-link"
                                    onClick={() => handleSetActive(link.id)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                    href="/admin"
                                className="mt-6 px-6 py-3 bg-portfolio-yellow text-portfolio-black"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                ADMIN
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}
