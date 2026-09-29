'use client';

import React from 'react';
import Link from 'next/link';
import { Network, ArrowLeft, Phone, UserCheck, Shield } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function AdminNavbar() {
    return (
        <header className="flex items-center justify-between px-6 lg:px-10 py-3.5 bg-slate-900 border-b border-slate-800 text-white">
            <div className="flex items-center gap-3">
                <Link href="/" className="bg-white px-2 py-1 rounded-lg">
                    <img 
                        src="/garg-telecom-logo.png" 
                        alt="Garg Telecom Pvt. Ltd." 
                        className="h-8 w-auto object-contain" 
                    />
                </Link>
                <div>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/40">
                            ENTERPRISE NOC & OPERATIONS
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium hidden md:inline">
                            Karol Bagh Operations Hub
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4 text-xs">
                <span className="hidden sm:flex items-center gap-1.5 text-slate-300">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    Helpline: <strong className="text-white">{COMPANY_INFO.contact.phone}</strong>
                </span>

                <Link
                    href="/"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg transition border border-slate-700 font-medium"
                >
                    <ArrowLeft className="w-3.5 h-3.5" /> View Public Website
                </Link>
            </div>
        </header>
    );
}