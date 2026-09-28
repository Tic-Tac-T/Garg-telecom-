'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, CheckCircle2, Search } from 'lucide-react';
import { BRANDS } from '@/data/brands';
import { PRODUCTS } from '@/data/products';

export default function BrandsPage() {
    const [search, setSearch] = useState('');

    const filteredBrands = search.trim() === ''
        ? BRANDS
        : BRANDS.filter(b =>
            b.name.toLowerCase().includes(search.toLowerCase()) ||
            b.description.toLowerCase().includes(search.toLowerCase()) ||
            b.categories.some(c => c.toLowerCase().includes(search.toLowerCase()))
        );

    return (
        <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full">
                        Brand Partnerships & Sourcing
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">
                        Leading Brands We Deal With
                    </h1>
                    <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                        We supply genuine products from the world's most reputable enterprise networking, telecom, and video surveillance manufacturers.
                    </p>

                    {/* Search filter for brands */}
                    <div className="mt-6 max-w-md mx-auto relative">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                            type="text"
                            placeholder="Filter brands (Cisco, Hikvision, D-Link...)"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full text-xs pl-9 pr-3 py-2.5 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
                        />
                    </div>
                </div>

                {/* Brands Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
                    {filteredBrands.map((brand) => {
                        const productCount = PRODUCTS.filter(p => p.brand.toLowerCase() === brand.name.toLowerCase()).length;
                        return (
                            <div
                                key={brand.id}
                                className="bg-white rounded-3xl border border-slate-200 hover:border-blue-400 p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 text-white flex items-center justify-center font-black text-lg shadow-sm border border-slate-700/30">
                                            {brand.name.slice(0, 2).toUpperCase()}
                                        </div>
                                        <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
                                            {productCount} Listed SKUs
                                        </span>
                                    </div>

                                    <div>
                                        <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">
                                            {brand.name}
                                        </h2>
                                        <p className="text-xs font-semibold text-blue-600 mt-0.5">
                                            {brand.tagline}
                                        </p>
                                    </div>

                                    <p className="text-xs text-slate-600 leading-relaxed">
                                        {brand.description}
                                    </p>

                                    {/* Categories */}
                                    <div className="pt-2">
                                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1.5">
                                            Product Domains:
                                        </span>
                                        <div className="flex flex-wrap gap-1.5">
                                            {brand.categories.map((cat, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text-[11px] font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md"
                                                >
                                                    {cat}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Popular Models */}
                                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                                            Popular Products:
                                        </span>
                                        {brand.popularProducts.slice(0, 3).map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                                                <span className="truncate">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <Link
                                    href={`/products?brand=${encodeURIComponent(brand.name)}`}
                                    className="mt-6 inline-flex items-center justify-between py-2.5 px-4 bg-slate-50 group-hover:bg-blue-600 group-hover:text-white text-blue-600 rounded-xl text-xs font-bold transition"
                                >
                                    <span>Browse {brand.name} Catalog</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {/* Safe Disclaimer */}
                <div className="p-6 bg-slate-100/80 rounded-2xl border border-slate-200 text-center text-xs text-slate-500 max-w-3xl mx-auto">
                    <ShieldCheck className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                    <p className="leading-relaxed">
                        Garg Telecom is an independent distributor and dealer supplying genuine products from verified manufacturer supply channels. All logos and product names are registered trademarks of their respective companies.
                    </p>
                </div>
            </div>
        </div>
    );
}
