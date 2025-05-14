'use client';

import { Input } from '@/components/ui/input';

type Props = {
    value: string;
    onChange: (value: string) => void;
};

export default function BlogPostsSearch({ value, onChange }: Props) {
    return (
        <div className="mb-6">
            <Input
                type="search"
                placeholder="Search posts..."
                className="max-w-sm"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}
