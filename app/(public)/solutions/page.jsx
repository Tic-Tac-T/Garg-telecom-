'use client';

import React from 'react';
import Link from 'next/link';
import {
    Building2,
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

export default function SolutionsIndexPage() {
    return (
        <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full">
                        Architecture Blueprints
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">
                        Turnkey Telecom & Surveillance Solutions
                    </h1>
                    <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                        Industry-specific blueprints engineered to resolve common networking bottlenecks, blind spots, and communication hurdles with proven hardware packages.
                    </p>
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SOLUTIONS.map((sol) => (
                        <div
                            key={sol.id}
                            className="bg-white rounded-3xl border border-slate-200 hover:border-blue-400 p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                                        {sol.category}
                                    </span>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                                        {sol.badge}
                                    </span>
                                </div>

                                <h2 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition mb-2">
                                    {sol.title}
                                </h2>

                                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                                    {sol.problem}
                                </p>

                                {/* Equipment snippet */}
                                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5 mb-4">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                                        Recommended BOM (Bill of Materials):
                                    </span>
                                    {sol.equipmentList.slice(0, 3).map((eq, eIdx) => (
                                        <div key={eIdx} className="flex items-center gap-2 text-xs text-slate-700">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                                            <span className="truncate">{eq.item}: <strong className="text-slate-900 font-semibold">{eq.model}</strong></span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Link
                                href={`/solutions/${sol.slug}`}
                                className="inline-flex items-center justify-between py-2.5 px-4 bg-slate-50 group-hover:bg-blue-600 group-hover:text-white text-blue-600 rounded-xl text-xs font-bold transition"
                            >
                                <span>View Architecture & Implementation</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
