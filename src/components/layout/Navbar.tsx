'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Search, Bell, Monitor, Briefcase, FileText, MessageSquare, User, Calendar, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left: Logo & Nav Links */}
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="bg-blue-600 p-1.5 rounded-full">
                                <div className="text-white font-bold text-xl leading-none">f</div>
                            </div>
                            <span className="text-xl font-bold text-blue-900">FindJobs</span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center gap-6">
                            <NavLink href="#" active>Find Jobs</NavLink>
                            <NavLink href="#">Top Companies</NavLink>
                            <NavLink href="#">Job Tracker</NavLink>
                            <NavLink href="#">My Calendar</NavLink>
                            <NavLink href="#">Documents</NavLink>
                            <NavLink href="#">Messages</NavLink>
                            <NavLink href="#">Notifications</NavLink>
                        </div>
                    </div>

                    {/* Right: Search, Actions, Profile (Desktop) */}
                    <div className="hidden lg:flex items-center gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                            />
                        </div>

                        <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            Resume Builder
                        </button>

                        <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm relative">
                            <Image
                                src="https://i.pravatar.cc/150?u=albert"
                                alt="Profile"
                                width={40}
                                height={40}
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-4">
                        <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden border border-white shadow-sm relative">
                            <Image
                                src="https://i.pravatar.cc/150?u=albert"
                                alt="Profile"
                                width={32}
                                height={32}
                                className="object-cover"
                            />
                        </div>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-500 hover:text-gray-700 p-2"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-4 shadow-lg absolute w-full left-0 top-16 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <MobileNavLink href="#" active>Find Jobs</MobileNavLink>
                        <MobileNavLink href="#">Top Companies</MobileNavLink>
                        <MobileNavLink href="#">Job Tracker</MobileNavLink>
                        <MobileNavLink href="#">My Calendar</MobileNavLink>
                        <MobileNavLink href="#">Documents</MobileNavLink>
                        <MobileNavLink href="#">Messages</MobileNavLink>
                        <MobileNavLink href="#">Notifications</MobileNavLink>
                    </div>

                    <hr className="border-gray-100" />

                    <div className="flex flex-col gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button className="w-full bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            Resume Builder
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}

function NavLink({ href, children, active }: { href: string; children: React.ReactNode; active?: boolean }) {
    return (
        <Link
            href={href}
            className={cn(
                "text-sm font-medium transition-colors hover:text-blue-600",
                active ? "text-blue-600" : "text-gray-500"
            )}
        >
            {children}
        </Link>
    )
}

function MobileNavLink({ href, children, active }: { href: string; children: React.ReactNode; active?: boolean }) {
    return (
        <Link
            href={href}
            className={cn(
                "block py-2 text-base font-medium transition-colors hover:text-blue-600 hover:bg-gray-50 rounded-lg px-2",
                active ? "text-blue-600 bg-blue-50" : "text-gray-600"
            )}
        >
            {children}
        </Link>
    )
}
