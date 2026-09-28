'use client';

import React from 'react';
import Link from 'next/link';
import {
    ArrowRight,
    FileText,
    Phone,
    ShieldCheck,
    Truck,
    Wrench,
    CheckCircle,
    Server,
    Camera,
    Router,
    Wifi,
    Building2,
    Lock
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
            {/* Subtle background network grid effect */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

            {/* Glowing gradient ambient blobs */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Left Column: Messaging & CTAs (7 Cols) */}
                    <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                        {/* Location & Trust Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-300 text-xs font-semibold backdrop-blur-sm shadow-xs">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                            <span>Karol Bagh, New Delhi – Trusted Telecom & Surveillance Hub</span>
                        </div>

                        {/* Main Hero Headline */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                            Complete Telecom, <br className="hidden sm:inline" />
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                                Networking & Surveillance
                            </span>{" "}
                            Solutions
                        </h1>

                        {/* Subheading */}
                        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                            From routers and network switches to CCTV systems, intercoms and enterprise networking equipment,{" "}
                            <strong className="text-white font-semibold">Garg Telecom</strong> provides reliable technology solutions for homes and businesses across Delhi-NCR and Pan-India.
                        </p>

                        {/* Primary & Secondary Call to Actions */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                            <Link
                                href="/products"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all duration-200"
                            >
                                Explore Products <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/quote"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-xl transition duration-200"
                            >
                                <FileText className="w-4 h-4 text-cyan-400" />
                                Request a Quote
                            </Link>

                            <a
                                href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition duration-200"
                            >
                                <Phone className="w-4 h-4 text-emerald-400" />
                                Talk to Our Team
                            </a>
                        </div>

                        {/* Trust Indicators Bar */}
                        <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                            <div className="flex items-center gap-2.5">
                                <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                                <div>
                                    <h5 className="text-xs font-bold text-white">Wide Range</h5>
                                    <p className="text-[11px] text-slate-400">500+ Top SKUs</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <Building2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                <div>
                                    <h5 className="text-xs font-bold text-white">B2B Pricing</h5>
                                    <p className="text-[11px] text-slate-400">Wholesale Slabs</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <Server className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                                <div>
                                    <h5 className="text-xs font-bold text-white">Business Ready</h5>
                                    <p className="text-[11px] text-slate-400">Office & Retail</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <Wrench className="w-5 h-5 text-amber-400 flex-shrink-0" />
                                <div>
                                    <h5 className="text-xs font-bold text-white">Installation</h5>
                                    <p className="text-[11px] text-slate-400">Delhi-NCR Help</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Visual Showcase Hub (5 Cols) */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative mx-auto max-w-md lg:max-w-none bg-gradient-to-b from-slate-900 to-slate-950 p-6 rounded-3xl border border-slate-800 shadow-2xl shadow-blue-950/50">
                            {/* Header of showcase */}
                            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                                        Core Equipment Stack
                                    </span>
                                </div>
                                <span className="text-[10px] font-mono font-medium text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/40">
                                    Karol Bagh Ready Stock
                                </span>
                            </div>

                            {/* Equipment Interactive Grid */}
                            <div className="space-y-3">
                                {/* Item 1: Cisco Switch */}
                                <div className="p-3 bg-slate-800/70 hover:bg-slate-800 rounded-xl border border-slate-700/60 transition group flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-blue-950 border border-blue-600/40 flex items-center justify-center text-cyan-400 font-bold text-xs">
                                            SW
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-bold text-white group-hover:text-blue-400 transition">
                                                    Cisco CBS110 / CBS250
                                                </span>
                                                <span className="text-[9px] bg-blue-500/20 text-blue-300 px-1.5 py-0.2 rounded font-mono">
                                                    24P PoE+
                                                </span>
                                            </div>
                                            <p className="text-[11px] text-slate-400">Gigabit & Smart Managed Switching</p>
                                        </div>
                                    </div>
                                    <span className="text-xs font-mono font-bold text-emerald-400">In Stock</span>
                                </div>

                                {/* Item 2: Hikvision CCTV */}
                                <div className="p-3 bg-slate-800/70 hover:bg-slate-800 rounded-xl border border-slate-700/60 transition group flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-red-950 border border-red-600/40 flex items-center justify-center text-red-400 font-bold text-xs">
                                            CAM
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-bold text-white group-hover:text-red-400 transition">
                                                    Hikvision 4MP AcuSense
                                                </span>
                                                <span className="text-[9px] bg-red-500/20 text-red-300 px-1.5 py-0.2 rounded font-mono">
                                                    AI IP
                                                </span>
                                            </div>
                                            <p className="text-[11px] text-slate-400">Human/Vehicle Detection + Audio</p>
                                        </div>
                                    </div>
                                    <span className="text-xs font-mono font-bold text-emerald-400">In Stock</span>
                                </div>

                                {/* Item 3: D-Link CAT6 Cable */}
                                <div className="p-3 bg-slate-800/70 hover:bg-slate-800 rounded-xl border border-slate-700/60 transition group flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-emerald-950 border border-emerald-600/40 flex items-center justify-center text-emerald-400 font-bold text-xs">
                                            CBL
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-bold text-white group-hover:text-emerald-400 transition">
                                                    D-Link CAT6 Solid Copper
                                                </span>
                                                <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded font-mono">
                                                    305m
                                                </span>
                                            </div>
                                            <p className="text-[11px] text-slate-400">100% Pure Bare Annealed Copper</p>
                                        </div>
                                    </div>
                                    <span className="text-xs font-mono font-bold text-emerald-400">In Stock</span>
                                </div>

                                {/* Item 4: Panasonic PBX Intercom */}
                                <div className="p-3 bg-slate-800/70 hover:bg-slate-800 rounded-xl border border-slate-700/60 transition group flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-amber-950 border border-amber-600/40 flex items-center justify-center text-amber-400 font-bold text-xs">
                                            PBX
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-bold text-white group-hover:text-amber-400 transition">
                                                    Panasonic KX-TES824
                                                </span>
                                                <span className="text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.2 rounded font-mono">
                                                    3CO/8Ext
                                                </span>
                                            </div>
                                            <p className="text-[11px] text-slate-400">Office Telephony & Intercom Systems</p>
                                        </div>
                                    </div>
                                    <span className="text-xs font-mono font-bold text-emerald-400">In Stock</span>
                                </div>
                            </div>

                            {/* Direct Wholesale Box */}
                            <div className="mt-5 p-3.5 bg-gradient-to-r from-blue-950 to-slate-900 border border-blue-500/30 rounded-2xl flex items-center justify-between">
                                <div className="text-xs">
                                    <span className="text-slate-400 block">Proprietor Desk</span>
                                    <span className="font-bold text-white">{COMPANY_INFO.owner}</span>
                                </div>
                                <a
                                    href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                                    className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-xs transition"
                                >
                                    +91 9953894014
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}