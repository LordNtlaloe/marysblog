'use client';

import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';

export default function AdminTopbar({ onMenuClick }: { onMenuClick: () => void }) {
    return (
        <header className="bg-white border-b h-16 flex items-center justify-between px-4 md:px-6">
            <div className="flex items-center md:hidden">
                <Button variant="ghost" size="sm" onClick={onMenuClick}>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </Button>
                <SidebarTrigger className="ml-2 hidden md:flex" />
            </div>

            <div className="md:hidden">
                <span className="font-semibold">Admin Panel</span>
            </div>

            <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-300 mr-2"></div>
                <span className="text-sm font-medium">Abdulrahman</span>
            </div>
        </header>
    );
}
