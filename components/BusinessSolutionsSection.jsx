'use client';

import React from 'react';
import Link from 'next/link';
import {
    Building,
    Store,
    Home,
    Warehouse,
    GraduationCap,
    PhoneCall,
    Network,
    Layers,
    ArrowRight,
    CheckCircle2
} from 'lucide-react';
import { SOLUTIONS } from '@/data/solutions';

export default function BusinessSolutionsSection() {
    return (
        <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 border border-cyan-800/40 px-3 py-1 rounded-full">
                            Turnkey Architectures
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-2">
                            Solutions for Every Requirement
                        </h2>
                        <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
                            How Garg Telecom provides equipment packages, bill of materials (BOM), and installation coordination for commercial, retail, and residential applications.
                        </p>
                    </div>

                    <Link
                        href="/solutions"
                        className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition"
                    >
                        View All Solutions <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SOLUTIONS.slice(0, 6).map((sol) => (
                        <div
                            key={sol.id}
                            className="bg-slate-800/80 hover:bg-slate-800 rounded-2xl border border-slate-700/80 hover:border-blue-500/60 p-6 transition-all duration-300 flex flex-col justify-between group shadow-lg"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-[11px] font-bold text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-800/40">
                                        {sol.category}
                                    </span>
                                    <span className="text-[10px] uppercase tracking-wider text-blue-300 bg-blue-900/60 px-2 py-0.5 rounded">
                                        {sol.badge}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition mb-2">
                                    {sol.title}
                                </h3>

                                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">
                                    {sol.shortDesc}
                                </p>

                                <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-700/50 mb-4 space-y-1.5">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                                        Core Hardware Included:
                                    </span>
                                    {sol.equipmentList.slice(0, 3).map((eq, eIdx) => (
                                        <div key={eIdx} className="flex items-center gap-2 text-xs text-slate-200">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                                            <span className="truncate">{eq.item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Link
                                href={`/solutions/${sol.slug}`}
                                className="inline-flex items-center justify-between text-xs font-bold text-cyan-400 group-hover:text-cyan-300 pt-3 border-t border-slate-700/60 transition"
                            >
                                <span>Explore Setup & BOM Checklist</span>
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
