"use client"

import { blogPosts } from '@/data/blogpost';
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';


export default function BlogPost() {
    const { id } = useParams<{ id: string }>();
    const router = useRouter();

    // Find the blog post by ID
    const post = blogPosts.find(post => post.id === id);

    // Redirect to blog list if post doesn't exist
    useEffect(() => {
        if (!post) {
            router.push('/blog');
        }
    }, [post, router]);

    if (!post) {
        return null; // Will redirect via useEffect
    }

    // Get related posts (same category, excluding current post)
    const relatedPosts = blogPosts
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 3);

    return (
        <section className="py-20">
            <div className="container mx-auto">
                {/* Back to Blog */}
                <div className="mb-8">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-portfolio-black hover:text-portfolio-yellow transition-colors duration-300"
                    >
                        <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                        Back to Blog
                    </Link>
                </div>

                {/* Blog Header */}
                <div className="mb-10">
                    <div className="mb-4">
                        <span className="bg-portfolio-yellow text-portfolio-black px-3 py-1 text-sm">
                            {post.category}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

                    <div className="flex items-center text-gray-500">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>By {post.author}</span>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="mb-10">
                    <Image
                        src={post.image}
                        alt={post.title}
                        className="w-full h-96 object-cover"
                        width={500}
                        height={500}
                    />
                </div>

                {/* Blog Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <div
                            className="prose prose-lg max-w-none"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Tags */}
                        <div className="mt-10 pt-6 border-t border-gray-200">
                            <h3 className="text-lg font-bold mb-3">Tags:</h3>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="bg-gray-100 text-gray-800 px-3 py-1 text-sm rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div>
                        {/* Related Posts */}
                        <div className="bg-gray-50 p-6">
                            <h3 className="text-xl font-bold mb-4">Related Posts</h3>

                            <div className="space-y-4">
                                {relatedPosts.length > 0 ? (
                                    relatedPosts.map(relatedPost => (
                                        <div key={relatedPost.id} className="flex space-x-4">
                                            <Image
                                                src={relatedPost.image}
                                                alt={relatedPost.title}
                                                className="w-16 h-16 object-cover"
                                            />
                                            <div>
                                                <h4 className="font-medium hover:text-portfolio-yellow transition-colors duration-300">
                                                    <Link href={`/blog/${relatedPost.id}`}>{relatedPost.title}</Link>
                                                </h4>
                                                <p className="text-sm text-gray-500">{relatedPost.date}</p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>No related posts found.</p>
                                )}
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="mt-8 bg-gray-50 p-6">
                            <h3 className="text-xl font-bold mb-4">Categories</h3>

                            <ul className="space-y-2">
                                {Array.from(new Set(blogPosts.map(p => p.category))).map(category => (
                                    <li key={category}>
                                        <Link
                                            href="/blog"
                                            className="flex items-center justify-between hover:text-portfolio-yellow transition-colors duration-300"
                                        >
                                            <span>{category}</span>
                                            <span className="bg-gray-200 text-gray-600 px-2 py-0.5 text-xs rounded-full">
                                                {blogPosts.filter(p => p.category === category).length}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
    )
}
