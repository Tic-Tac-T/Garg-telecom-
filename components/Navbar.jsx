'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Search,
    Phone,
    MessageCircle,
    FileText,
    Menu,
    X,
    ChevronDown,
    Network,
    Shield,
    Camera,
    Router,
    Cable,
    Server,
    PhoneCall,
    Building2,
    HardDrive
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';
import { CATEGORIES } from '@/data/categories';
import { useQuote } from '@/context/QuoteContext';
import QuickSearchModal from './QuickSearchModal';
import QuickQuoteModal from './QuickQuoteModal';
import QuoteDrawer from './QuoteDrawer';

export default function Navbar() {
    const pathname = usePathname();
    const { totalItems, setIsCartOpen } = useQuote();

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/products' },
        {
            name: 'Categories',
            href: '/categories',
            hasDropdown: true
        },
        { name: 'Solutions', href: '/solutions' },
        { name: 'Services', href: '/services' },
        { name: 'About Us', href: '/about' },
        { name: 'Brands', href: '/brands' },
        { name: 'Contact', href: '/contact' },
    ];

    const isActive = (href) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <>
            <header
                className={`sticky top-0 z-40 w-full transition-all duration-300 ${
                    isScrolled
                        ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200'
                        : 'bg-white border-b border-slate-100'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Left: Brand Logo & Identity */}
                        <Link href="/" className="flex items-center gap-3 group py-1">
                            <img
                                src="/garg-telecom-logo.png"
                                alt="Garg Telecom Pvt. Ltd. - Telecommunications & Digital Solutions"
                                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                            />
                        </Link>

                        {/* Desktop Navigation Links */}
                        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                            {navLinks.map((link) => {
                                if (link.hasDropdown) {
                                    return (
                                        <div
                                            key={link.name}
                                            className="relative"
                                            onMouseEnter={() => setIsCategoriesDropdownOpen(true)}
                                            onMouseLeave={() => setIsCategoriesDropdownOpen(false)}
                                        >
                                            <Link
                                                href={link.href}
                                                className={`px-3 py-2 text-sm font-semibold rounded-lg flex items-center gap-1 transition ${
                                                    isActive(link.href)
                                                        ? 'text-blue-600 bg-blue-50'
                                                        : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                                                }`}
                                            >
                                                {link.name}
                                                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                                            </Link>

                                            {/* Categories Mega Dropdown */}
                                            {isCategoriesDropdownOpen && (
                                                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-200 p-3 grid grid-cols-1 gap-1 animate-fadeIn">
                                                    <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                                                        Major Categories
                                                    </div>
                                                    {CATEGORIES.slice(0, 6).map((cat) => (
                                                        <Link
                                                            key={cat.id}
                                                            href={`/category/${cat.slug}`}
                                                            onClick={() => setIsCategoriesDropdownOpen(false)}
                                                            className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-blue-50 text-slate-700 hover:text-blue-700 transition text-xs font-medium"
                                                        >
                                                            <div className="w-7 h-7 rounded-lg bg-blue-100/70 text-blue-700 flex items-center justify-center">
                                                                <Network className="w-3.5 h-3.5" />
                                                            </div>
                                                            <div className="min-w-0">
                                                                <p className="truncate font-semibold text-slate-800">{cat.name}</p>
                                                                <p className="text-[10px] text-slate-500 truncate">{cat.shortDesc}</p>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                    <Link
                                                        href="/categories"
                                                        onClick={() => setIsCategoriesDropdownOpen(false)}
                                                        className="mt-1 block text-center py-2 text-xs font-bold text-blue-600 hover:text-blue-800 bg-slate-50 rounded-lg hover:bg-blue-50 transition"
                                                    >
                                                        View All 10+ Categories →
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                    );
                                }

                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`px-3 py-2 text-sm font-semibold rounded-lg transition ${
                                            isActive(link.href)
                                                ? 'text-blue-600 bg-blue-50'
                                                : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Right: Actions, Search, RFQ Cart & Highlighted Quote CTA */}
                        <div className="flex items-center gap-2 sm:gap-3">
                            {/* Search Button */}
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                aria-label="Search equipment"
                                className="p-2.5 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-full transition relative"
                                title="Search catalog (Cmd+K)"
                            >
                                <Search className="w-5 h-5" />
                            </button>

                            {/* Direct Phone Call Icon */}
                            <a
                                href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                                aria-label="Call Garg Telecom"
                                className="p-2.5 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-full transition hidden sm:inline-flex"
                                title={`Call: ${COMPANY_INFO.contact.phone}`}
                            >
                                <Phone className="w-5 h-5" />
                            </a>

                            {/* Quote Cart / RFQ List Button */}
                            <button
                                onClick={() => setIsCartOpen(true)}
                                aria-label="View Quotation Cart"
                                className="relative p-2.5 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition flex items-center gap-1.5"
                                title="View Quotation Cart"
                            >
                                <FileText className="w-5 h-5 text-slate-700" />
                                <span className="hidden md:inline-block text-xs font-bold text-slate-700">RFQ</span>
                                {totalItems > 0 && (
                                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-extrabold flex items-center justify-center shadow-xs animate-pulse">
                                        {totalItems}
                                    </span>
                                )}
                            </button>

                            {/* Highlighted Request Quote Button */}
                            <Link
                                href="/quote"
                                className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 hover:from-blue-800 hover:to-cyan-700 rounded-xl shadow-md shadow-blue-600/25 hover:shadow-lg transition-all duration-200 active:scale-95"
                            >
                                Request Quote
                            </Link>

                            {/* Mobile Hamburger Menu Toggle */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label="Toggle navigation menu"
                                className="p-2 text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-xl lg:hidden transition"
                            >
                                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Slide-down Navigation Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
                        <div className="space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition ${
                                        isActive(link.href)
                                            ? 'text-blue-600 bg-blue-50'
                                            : 'text-slate-700 hover:bg-slate-50'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="pt-4 border-t border-slate-200 space-y-2.5">
                            <Link
                                href="/quote"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full inline-flex items-center justify-center py-2.5 px-4 text-sm font-bold text-white bg-blue-600 rounded-xl shadow-xs"
                            >
                                Request a B2B Quote
                            </Link>

                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <a
                                    href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                                    className="flex items-center justify-center gap-1.5 py-2 px-3 border border-slate-300 rounded-lg text-slate-700 font-semibold"
                                >
                                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                                    Call Now
                                </a>
                                <Link
                                    href="/quote"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center justify-center gap-1.5 py-2 px-3 bg-blue-50 border border-blue-300 text-blue-800 rounded-lg font-semibold"
                                >
                                    <FileText className="w-3.5 h-3.5 text-blue-600" />
                                    RFQ Portal
                                </Link>
                            </div>

                            <p className="text-[11px] text-slate-500 text-center pt-1 font-medium">
                                📍 Karol Bagh, New Delhi - 110007 | Garg Telecom Pvt. Ltd.
                            </p>
                        </div>
                    </div>
                )}
            </header>

            {/* Modals & Slide-over Drawer */}
            <QuickSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            <QuickQuoteModal />
            <QuoteDrawer />
        </>
    );
}