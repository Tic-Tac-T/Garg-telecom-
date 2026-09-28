'use client';

import React from 'react';
import Link from 'next/link';
import {
    Network,
    Camera,
    Router,
    Cable,
    Server,
    PhoneCall,
    Wifi,
    HardDrive,
    Wrench,
    Disc,
    ArrowRight,
    Building2,
    ShieldCheck
} from 'lucide-react';
import { CATEGORIES } from '@/data/categories';
import { PRODUCTS } from '@/data/products';

export default function CategoriesIndexPage() {
    const getCategoryIcon = (iconName) => {
        switch (iconName) {
            case 'Network': return <Network className="w-6 h-6 text-blue-600" />;
            case 'Camera': return <Camera className="w-6 h-6 text-blue-600" />;
            case 'Router': return <Router className="w-6 h-6 text-blue-600" />;
            case 'Cable': return <Cable className="w-6 h-6 text-blue-600" />;
            case 'HardDrive': return <HardDrive className="w-6 h-6 text-blue-600" />;
            case 'PhoneCall': return <PhoneCall className="w-6 h-6 text-blue-600" />;
            case 'Wifi': return <Wifi className="w-6 h-6 text-blue-600" />;
            case 'Server': return <Server className="w-6 h-6 text-blue-600" />;
            case 'Disc': return <Disc className="w-6 h-6 text-blue-600" />;
            case 'Wrench': return <Wrench className="w-6 h-6 text-blue-600" />;
            default: return <Network className="w-6 h-6 text-blue-600" />;
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full">
                        Complete Hardware Index
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">
                        Equipment Categories
                    </h1>
                    <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                        Garg Telecom supplies full-spectrum telecom, enterprise networking, IP video surveillance, and voice communication hardware for projects of all sizes.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {CATEGORIES.map((cat) => {
                        const count = PRODUCTS.filter(p => p.category === cat.slug).length;
                        return (
                            <div
                                key={cat.id}
                                className="bg-white rounded-3xl border border-slate-200 hover:border-blue-400 p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 flex items-center justify-center text-blue-600">
                                            {getCategoryIcon(cat.icon)}
                                        </div>
                                        <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-blue-600 transition">
                                            {count} Products
                                        </span>
                                    </div>

                                    <h2 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition mb-2">
                                        {cat.name}
                                    </h2>

                                    <p className="text-xs text-slate-500 leading-relaxed mb-4">
                                        {cat.description}
                                    </p>

                                    {/* Popular Brands */}
                                    <div className="space-y-1 mb-4">
                                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                                            Popular Brands:
                                        </span>
                                        <div className="flex flex-wrap gap-1.5 pt-0.5">
                                            {cat.popularBrands.map((brand, bIdx) => (
                                                <span
                                                    key={bIdx}
                                                    className="text-[11px] font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md"
                                                >
                                                    {brand}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <Link
                                    href={`/category/${cat.slug}`}
                                    className="inline-flex items-center justify-between py-2.5 px-4 bg-slate-50 group-hover:bg-blue-600 group-hover:text-white text-blue-600 rounded-xl text-xs font-bold transition mt-2"
                                >
                                    <span>Browse Category Catalogue</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
