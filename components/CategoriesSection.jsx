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
    ArrowRight
} from 'lucide-react';
import { CATEGORIES } from '@/data/categories';
import { PRODUCTS } from '@/data/products';

export default function CategoriesSection() {
    // Map string names to Lucide icon components
    const getCategoryIcon = (iconName) => {
        switch (iconName) {
            case 'Network':
                return <Network className="w-6 h-6 text-blue-600" />;
            case 'Camera':
                return <Camera className="w-6 h-6 text-blue-600" />;
            case 'Router':
                return <Router className="w-6 h-6 text-blue-600" />;
            case 'Cable':
                return <Cable className="w-6 h-6 text-blue-600" />;
            case 'HardDrive':
                return <HardDrive className="w-6 h-6 text-blue-600" />;
            case 'PhoneCall':
                return <PhoneCall className="w-6 h-6 text-blue-600" />;
            case 'Wifi':
                return <Wifi className="w-6 h-6 text-blue-600" />;
            case 'Server':
                return <Server className="w-6 h-6 text-blue-600" />;
            case 'Disc':
                return <Disc className="w-6 h-6 text-blue-600" />;
            case 'Wrench':
                return <Wrench className="w-6 h-6 text-blue-600" />;
            default:
                return <Network className="w-6 h-6 text-blue-600" />;
        }
    };

    return (
        <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
                            Product Catalogue
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-2">
                            Explore Our Product Categories
                        </h2>
                        <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
                            Specialized telecom, data networking, surveillance, and office communication hardware ready for immediate dispatch from our Karol Bagh hub.
                        </p>
                    </div>

                    <Link
                        href="/categories"
                        className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 transition group"
                    >
                        View All Categories <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Categories Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CATEGORIES.slice(0, 8).map((cat) => {
                        const count = PRODUCTS.filter(p => p.category === cat.slug).length;
                        return (
                            <div
                                key={cat.id}
                                className="bg-white rounded-2xl border border-slate-200 hover:border-blue-400 p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 flex items-center justify-center text-blue-600">
                                            {getCategoryIcon(cat.icon)}
                                        </div>
                                        <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-blue-600 transition">
                                            {count > 0 ? `${count} ${count === 1 ? 'Model' : 'Models'}` : 'Stock Hub'}
                                        </span>
                                    </div>

                                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition mb-2">
                                    {cat.name}
                                </h3>

                                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                                    {cat.shortDesc}
                                </p>

                                {/* Popular Brands in Category */}
                                <div className="flex items-center gap-1.5 flex-wrap mb-4">
                                    {cat.popularBrands.slice(0, 3).map((brand, bIdx) => (
                                        <span
                                            key={bIdx}
                                            className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
                                        >
                                            {brand}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <Link
                                href={`/category/${cat.slug}`}
                                className="inline-flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700 pt-3 border-t border-slate-100"
                            >
                                <span>Explore Products</span>
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    );
                    })}
                </div>
            </div>
        </section>
    );
}
