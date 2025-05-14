'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { adminNavigationItems } from '@/constants/navitems';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenuItem,
  SidebarMenu,
  SidebarMenuButton,
} from '@/components/ui/sidebar';

export default function AdminSidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <Sidebar className="hidden md:block">
      <SidebarHeader className="h-16 flex items-center px-6">
        <Link href="/" className="font-bold text-xl">PROTOFILO ADMIN</Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminNavigationItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    asChild
                    className={isActive(item.path) ? 'bg-sidebar-accent' : ''}
                  >
                    <Link href={item.path}>
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <div className="absolute bottom-6 left-0 right-0 px-6">
        <Link
          href="/"
          className="flex items-center justify-center w-full px-4 py-2 bg-portfolio-yellow text-portfolio-black hover:bg-portfolio-black hover:text-white transition-colors duration-300"
        >
          Back to Website
        </Link>
      </div>
    </Sidebar>
  );
}
