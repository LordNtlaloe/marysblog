"use client"
import Image from 'next/image';
import React, { useState } from 'react'

const projects = [
    {
        id: 1,
        title: 'Architecture Project',
        category: 'webdesign',
        image: '/public/placeholder.svg',
        url: '/projects/architecture'
    },
    {
        id: 2,
        title: 'Modern Building',
        category: 'webdesign',
        image: '/public/placeholder.svg',
        url: '/projects/modern-building'
    },
    {
        id: 3,
        title: 'Office Design',
        category: 'branding',
        image: '/public/placeholder.svg',
        url: '/projects/office-design'
    },
    {
        id: 4,
        title: 'Mountain View',
        category: 'graphic',
        image: '/public/placeholder.svg',
        url: '/projects/mountain-view'
    },
    {
        id: 5,
        title: 'Airplane Project',
        category: 'graphic',
        image: '/public/placeholder.svg',
        url: '/projects/airplane-project'
    },
    {
        id: 6,
        title: 'Design Project',
        category: 'branding',
        image: '/public/placeholder.svg',
        url: '/projects/design-project'
    },
    {
        id: 7,
        title: 'Ferris Wheel',
        category: 'webdesign',
        image: '/public/placeholder.svg',
        url: '/projects/ferris-wheel'
    },
    {
        id: 8,
        title: 'Ocean View',
        category: 'graphic',
        image: '/public/placeholder.svg',
        url: '/projects/ocean-view'
    },
    {
        id: 9,
        title: 'Mountain Clouds',
        category: 'branding',
        image: '/public/placeholder.svg',
        url: '/projects/mountain-clouds'
    }
];





export default function Works() {
    const [filter, setFilter] = useState('all');

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);
    return (
        <section id="works" className="py-20 bg-portfolio-light-gray">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="section-title inline-block">
                        MY WORK
                        <span className="block text-lg font-normal text-gray-600 mt-2">awesome projects</span>
                    </h2>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center mb-12 gap-2">
                    {['all', 'graphic', 'webdesign', 'branding', 'videos'].map((category) => (
                        <button
                            key={category}
                            className={`filter-button uppercase ${filter === category ? 'active' : ''}`}
                            onClick={() => setFilter(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="project-card group">
                            <Image
                                src={project.image}
                                alt={project.title}
                                className="w-full h-64 object-cover"
                                width={500}
                                height={500}
                            />
                            <div className="project-overlay">
                                {project.id === 6 ? (
                                    <div className="bg-portfolio-yellow p-6 text-center">
                                        <h3 className="text-xl font-bold">DESIGN PROJECT</h3>
                                        <p className="mt-2">Click to view details Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis amet.</p>
                                    </div>
                                ) : (
                                    <a
                                        href={project.url}
                                        className="w-12 h-12 rounded-full bg-portfolio-yellow flex items-center justify-center text-xl"
                                    >
                                        +
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="text-center mt-12">
                    <button className="px-8 py-3 bg-portfolio-black text-white hover:bg-portfolio-yellow hover:text-portfolio-black transition-colors duration-300">
                        LOAD MORE
                    </button>
                </div>
            </div>
        </section>
    )
}
