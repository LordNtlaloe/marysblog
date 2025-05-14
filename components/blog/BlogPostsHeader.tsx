'use client';

import { Button } from '@/components/ui/button';

export default function BlogPostsHeader() {
    return (
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Blog Posts</h1>
            <Button className="bg-portfolio-yellow text-portfolio-black hover:bg-portfolio-black hover:text-white">
                Add New Post
            </Button>
        </div>
    );
}
