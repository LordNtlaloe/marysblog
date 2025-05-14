'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { adminNavigationItems } from '@/constants/navitems';
import { Button } from '@/components/ui/button';

export default function AdminMobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={onClose} />
            )}

            <div
                className={`fixed top-0 left-0 h-full w-3/4 bg-white z-50 transform transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="h-16 flex items-center justify-between px-4 border-b">
                    <span className="font-bold">ADMIN PANEL</span>
                    <Button variant="ghost" size="sm" onClick={onClose}>
                        &times;
                    </Button>
                </div>

                <nav className="p-4">
                    <ul className="space-y-2">
                        {adminNavigationItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.path}
                                    className={`block px-4 py-2 ${isActive(item.path)
                                            ? 'bg-portfolio-yellow text-portfolio-black'
                                            : 'hover:bg-gray-100'
                                        }`}
                                    onClick={onClose}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="absolute bottom-6 left-0 right-0 px-4">
                    <Link
                        href="/"
                        className="block px-4 py-2 bg-portfolio-black text-white text-center"
                        onClick={onClose}
                    >
                        Back to Website
                    </Link>
                </div>
            </div>
        </>
    );
}
