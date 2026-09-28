'use client';

import React from 'react';
import Link from 'next/link';
import { Network, ArrowLeft, Phone, UserCheck, Shield } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function AdminNavbar() {
    return (
        <header className="flex items-center justify-between px-6 lg:px-10 py-3.5 bg-slate-900 border-b border-slate-800 text-white">
            <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-xs">
                    <Network className="w-5 h-5" />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <span className="text-base font-black tracking-tight text-white">
                            GARG TELECOM
                        </span>
                        <span className="text-[10px] font-bold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/40">
                            DEALER PORTAL
                        </span>
                    </div>
                    <span className="text-[10px] text-slate-400 block">
                        Karol Bagh, New Delhi (110007) • Proprietor: {COMPANY_INFO.owner}
                    </span>
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