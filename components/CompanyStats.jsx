'use client';

import React from 'react';
import { PackageCheck, Layers, Award, Zap } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function CompanyStats() {
    const stats = [
        {
            icon: <PackageCheck className="w-8 h-8 text-cyan-400" />,
            value: "500+",
            label: "Products in Catalog",
            desc: "Routers, Switches, CCTV, Cables & Accessories"
        },
        {
            icon: <Layers className="w-8 h-8 text-blue-400" />,
            value: "16+",
            label: "Product Categories",
            desc: "Enterprise & Retail Infrastructure"
        },
        {
            icon: <Award className="w-8 h-8 text-emerald-400" />,
            value: "100%",
            label: "Genuine Certified",
            desc: "Direct Brand Distribution Channels"
        },
        {
            icon: <Zap className="w-8 h-8 text-amber-400" />,
            value: "< 2 hrs",
            label: "Fast RFQ Turnaround",
            desc: "Itemized Quotes & Fast B2B Support"
        }
    ];

    return (
        <section className="py-16 bg-slate-900 border-b border-slate-800 text-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((s, idx) => (
                        <div
                            key={idx}
                            className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 text-center flex flex-col items-center hover:border-blue-500/50 transition-all duration-300 group"
                        >
                            <div className="mb-3 p-3 rounded-2xl bg-slate-900/80 border border-slate-800 group-hover:scale-110 transition-transform">
                                {s.icon}
                            </div>
                            <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                                {s.value}
                            </span>
                            <span className="text-sm font-bold text-slate-200 mt-1">
                                {s.label}
                            </span>
                            <p className="text-[11px] text-slate-400 mt-1">
                                {s.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
