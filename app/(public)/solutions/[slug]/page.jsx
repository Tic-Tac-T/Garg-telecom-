'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
    ChevronRight,
    AlertTriangle,
    CheckCircle2,
    Layers,
    Wrench,
    FileText,
    MessageCircle,
    Phone,
    Building2,
    ArrowRight,
    ShieldCheck
} from 'lucide-react';
import { SOLUTIONS } from '@/data/solutions';
import { COMPANY_INFO } from '@/data/company';

export default function SolutionDetailPage({ params }) {
    const resolvedParams = use(params);
    const { slug } = resolvedParams;

    const solution = SOLUTIONS.find((s) => s.slug === slug);

    if (!solution) {
        notFound();
    }

    const otherSolutions = SOLUTIONS.filter((s) => s.id !== solution.id).slice(0, 3);

    return (
        <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
                    <Link href="/" className="hover:text-blue-600 transition">Home</Link>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    <Link href="/solutions" className="hover:text-blue-600 transition">Solutions</Link>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-slate-800 font-semibold">{solution.title}</span>
                </nav>

                {/* Hero Card */}
                <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl mb-10 border border-slate-800">
                    <div className="max-w-3xl space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800/40">
                                {solution.category}
                            </span>
                            <span className="text-xs text-blue-300 bg-blue-900/60 px-2.5 py-0.5 rounded">
                                {solution.badge}
                            </span>
                        </div>

                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                            {solution.title}
                        </h1>

                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                            {solution.shortDesc}
                        </p>

                        <div className="flex flex-wrap items-center gap-3 pt-4">
                            <Link
                                href="/quote"
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow-md flex items-center gap-2"
                            >
                                <FileText className="w-4 h-4" /> Request Solution BOM Quote
                            </Link>
                            <Link
                                href="/contact"
                                className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm rounded-xl transition border border-slate-700 shadow-md flex items-center gap-2"
                            >
                                <Phone className="w-4 h-4 text-blue-400" />
                                Speak With Solution Engineer
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Architecture Sections Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
                    {/* Left: Problem & Recommended Architecture (7 Cols) */}
                    <div className="lg:col-span-7 space-y-8">
                        {/* 1. The Challenge */}
                        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                                    <AlertTriangle className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Site Analysis</span>
                                    <h2 className="text-lg font-bold text-slate-900">The Problem & Practical Challenge</h2>
                                </div>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                {solution.problem}
                            </p>
                        </div>

                        {/* 2. Recommended Setup */}
                        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                                    <Layers className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Topology Design</span>
                                    <h2 className="text-lg font-bold text-slate-900">Recommended Architecture Setup</h2>
                                </div>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                {solution.recommendedSetup}
                            </p>
                        </div>

                        {/* 3. Implementation Steps */}
                        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                                    <Wrench className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Field Deployment</span>
                                    <h2 className="text-lg font-bold text-slate-900">Step-by-Step Implementation Approach</h2>
                                </div>
                            </div>

                            <ol className="space-y-4">
                                {solution.implementationSteps.map((step, idx) => (
                                    <li key={idx} className="flex items-start gap-3.5">
                                        <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                                            {idx + 1}
                                        </span>
                                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                                            {step}
                                        </p>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    {/* Right: Bill of Materials & Benefits (5 Cols) */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Equipment Checklist / BOM */}
                        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
                            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                                <h3 className="text-base font-bold text-slate-900">
                                    Recommended Hardware (BOM)
                                </h3>
                                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                                    Garg Telecom Stock
                                </span>
                            </div>

                            <div className="space-y-3">
                                {solution.equipmentList.map((eq, idx) => (
                                    <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                                        <span className="text-[11px] font-bold text-blue-700 block">
                                            {eq.item}
                                        </span>
                                        <span className="text-xs font-semibold text-slate-900 mt-0.5 block">
                                            {eq.model}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-5 mt-5 border-t border-slate-100">
                                <Link
                                    href="/quote"
                                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow-xs"
                                >
                                    Get Price Quote for this BOM <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Benefits */}
                        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-md">
                            <h3 className="text-base font-bold text-white mb-4">
                                Key Business Outcomes
                            </h3>
                            <div className="space-y-3">
                                {solution.benefits.map((b, idx) => (
                                    <div key={idx} className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-xs text-slate-300 leading-relaxed font-medium">
                                            {b}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Explore other solutions */}
                <div className="border-t border-slate-200 pt-8">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">
                        Other Business Solutions
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {otherSolutions.map((s) => (
                            <Link
                                key={s.id}
                                href={`/solutions/${s.slug}`}
                                className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-400 shadow-2xs hover:shadow-md transition flex flex-col justify-between group"
                            >
                                <div>
                                    <span className="text-[10px] font-bold text-blue-600 uppercase">{s.category}</span>
                                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition mt-1">
                                        {s.title}
                                    </h4>
                                    <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                                        {s.shortDesc}
                                    </p>
                                </div>
                                <span className="text-xs font-bold text-blue-600 mt-3 flex items-center gap-1">
                                    View Architecture →
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
