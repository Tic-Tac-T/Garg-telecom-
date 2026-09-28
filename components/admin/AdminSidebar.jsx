'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
    LayoutDashboard,
    FileText,
    Boxes,
    Building2,
    Settings,
    PhoneCall,
    ExternalLink
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function AdminSidebar() {
    const pathname = usePathname();

    const links = [
        { name: 'RFQ & Inquiries', href: '/admin', icon: FileText },
        { name: 'Products Catalog', href: '/products', icon: Boxes, external: true },
        { name: 'Store Info', href: '/about', icon: Building2, external: true },
        { name: 'Contact Karol Bagh', href: '/contact', icon: PhoneCall, external: true },
    ];

    return (
        <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between p-4 hidden md:flex min-h-[calc(100vh-65px)]">
            <div className="space-y-6">
                {/* Dealer Profile summary */}
                <div className="p-3.5 bg-slate-800/80 rounded-2xl border border-slate-700/60 text-xs space-y-1">
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block">
                        Dealership Owner
                    </span>
                    <h4 className="text-sm font-bold text-white">{COMPANY_INFO.owner}</h4>
                    <p className="text-slate-400 text-[11px]">{COMPANY_INFO.designation}</p>
                    <p className="text-slate-500 text-[10px] pt-1">Karol Bagh, New Delhi</p>
                </div>

                {/* Nav Links */}
                <div className="space-y-1.5">
                    {links.map((link, idx) => {
                        const Icon = link.icon;
                        const isCurrent = pathname === link.href;
                        return (
                            <Link
                                key={idx}
                                href={link.href}
                                target={link.external ? '_blank' : '_self'}
                                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                                    isCurrent
                                        ? 'bg-blue-600 text-white shadow-xs'
                                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                                }`}
                            >
                                <div className="flex items-center gap-2.5">
                                    <Icon className="w-4 h-4" />
                                    <span>{link.name}</span>
                                </div>
                                {link.external && <ExternalLink className="w-3 h-3 opacity-60" />}
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Quick Support Box */}
            <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/40 text-[11px] text-slate-400 space-y-1">
                <span className="text-white font-bold block">Karol Bagh Desk</span>
                <p>Mon - Sat: 10 AM - 8 PM</p>
                <p className="text-emerald-400 font-mono">{COMPANY_INFO.contact.phone}</p>
            </div>
        </aside>
    );
}