"use client"
import React from 'react'
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';


export default function Contact() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted');
    };

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="section-title inline-block">
                        GET IN TOUCH
                        <span className="block text-lg font-normal text-gray-600 mt-2">Let&apos;s work together</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div>
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                            <p className="text-gray-700 mb-6">
                                Feel free to reach out to me for any inquiries or collaboration opportunities. I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-portfolio-yellow flex items-center justify-center mr-4">
                                        <span className="text-portfolio-black">📍</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Location</h4>
                                        <p className="text-gray-600">123 Design Street, New York, USA</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-portfolio-yellow flex items-center justify-center mr-4">
                                        <span className="text-portfolio-black">📧</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Email</h4>
                                        <p className="text-gray-600">hello@example.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-portfolio-yellow flex items-center justify-center mr-4">
                                        <span className="text-portfolio-black">📱</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Phone</h4>
                                        <p className="text-gray-600">+1 234 567 8900</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Follow Me</h3>
                            <div className="flex space-x-4">
                                {['Twitter', 'LinkedIn', 'Dribbble', 'Behance'].map((social) => (
                                    <a
                                        key={social}
                                        href={`#${social.toLowerCase()}`}
                                        className="w-10 h-10 bg-portfolio-black text-white flex items-center justify-center hover:bg-portfolio-yellow hover:text-portfolio-black transition-colors duration-300"
                                    >
                                        {social.charAt(0)}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 shadow-lg">
                        <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-sm font-medium">Name</label>
                                    <Input id="name" name="name" placeholder="Your Name" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                                    <Input id="email" name="email" type="email" placeholder="Your Email" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
                                <Input id="subject" name="subject" placeholder="Subject" required />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your Message"
                                    rows={5}
                                    required
                                />
                            </div>

                            <Button type="submit" className="w-full bg-portfolio-black text-white hover:bg-portfolio-yellow hover:text-portfolio-black">
                                SEND MESSAGE
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
