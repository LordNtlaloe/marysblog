'use client';

import { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminMobileMenu from '@/components/admin/AdminMobileMenu';
import AdminTopbar from '@/components/admin/AdminToolbar';
import { Geist, Geist_Mono } from "next/font/google";
import "../(pages)/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <SidebarProvider>
                    <div className="min-h-screen flex w-full">
                        <AdminSidebar />

                        <AdminMobileMenu
                            isOpen={isMobileMenuOpen}
                            onClose={() => setIsMobileMenuOpen(false)}
                        />

                        <div className="flex-1 flex flex-col min-h-screen">
                            <AdminTopbar onMenuClick={() => setIsMobileMenuOpen(true)} />

                            <main className="flex-1 p-4 md:p-6 bg-gray-50 overflow-auto">
                                {children}
                            </main>
                        </div>
                    </div>
                </SidebarProvider>
            </body>
        </html>
    );
}
