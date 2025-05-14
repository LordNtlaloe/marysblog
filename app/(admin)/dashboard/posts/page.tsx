'use client';

import { useEffect, useState } from 'react';
import BlogPostsHeader from '@/components/blog/BlogPostsHeader';
import BlogPostsSearch from '@/components/blog/BlogPostsSearch';
import BlogPostsTable from '@/components/blog/BlogPostsTable';

type Post = {
    _id: string;
    title: string;
    category: string;
    date: string;
};

export default function BlogPostsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch('/api/posts');
                const data = await res.json();
                setPosts(data);
            } catch (error) {
                console.error('Error loading posts:', error);
            }
        };
        fetchPosts();
    }, []);

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <BlogPostsHeader />
            <BlogPostsSearch value={searchTerm} onChange={setSearchTerm} />
            <BlogPostsTable posts={filteredPosts.map(post => ({
                ...post,
                id: Number(post._id)
            }))} />
        </div>
    );
}
