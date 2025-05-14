"use client"
import { blogPosts } from '@/data/blogpost';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

export default function BlogList() {
    const [category, setCategory] = useState('all');

    const categories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category.toLowerCase())))];

    const filteredPosts = category === 'all'
        ? blogPosts
        : blogPosts.filter(post => post.category.toLowerCase() === category);

    return (
        <section className="py-20">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h1 className="section-title inline-block">
                        BLOG
                        <span className="block text-lg font-normal text-gray-600 mt-2">My thoughts and ideas</span>
                    </h1>
                </div>

                {/* Categories Filter */}
                <div className="flex flex-wrap justify-center mb-12 gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`filter-button capitalize ${category === cat ? 'active' : ''}`}
                            onClick={() => setCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post) => (
                        <article key={post.id} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                            <Link href={`/blog/${post.id}`} className="block">
                                <div className="relative">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-48 object-cover"
                                        width={500}
                                        height={500}
                                    />
                                    <div className="absolute top-0 left-0 bg-portfolio-yellow text-portfolio-black px-3 py-1 text-sm">
                                        {post.category}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center text-sm text-gray-500 mb-2">
                                        <span>{post.date}</span>
                                        <span className="mx-2">•</span>
                                        <span>By {post.author}</span>
                                    </div>

                                    <h2 className="text-xl font-bold mb-3 hover:text-portfolio-yellow transition-colors duration-300">
                                        {post.title}
                                    </h2>

                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center text-portfolio-black font-medium">
                                        Read More
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
