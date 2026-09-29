'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { BRANDS } from '@/data/brands';

import BrandLogoBadge from '@/components/BrandLogoBadge';

export default function BrandsSection() {
    return (
        <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full">
                            Global Partners
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-2">
                            Brands We Deal With
                        </h2>
                        <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
                            Products from leading networking and surveillance brands, sourced through official distribution channels for 100% genuine equipment warranties.
                        </p>
                    </div>

                    <Link
                        href="/brands"
                        className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 transition"
                    >
                        Explore All Brand Portfolios <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Brands Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
                    {BRANDS.map((brand) => (
                        <Link
                            key={brand.id}
                            href={`/products?brand=${encodeURIComponent(brand.name)}`}
                            className="bg-white rounded-2xl border border-slate-200 hover:border-blue-400 p-5 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center justify-between group"
                        >
                            <div className="w-full mb-3">
                                <BrandLogoBadge brandId={brand.id} name={brand.name} accentColor={brand.accentColor} />
                            </div>

                            <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition">
                                {brand.name}
                            </h3>

                            <p className="text-[11px] text-slate-500 line-clamp-1 mt-1">
                                {brand.tagline}
                            </p>

                            <span className="mt-3 text-[10px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full group-hover:bg-blue-600 group-hover:text-white transition">
                                View Products →
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Brand Disclaimer Notice */}
                <div className="mt-8 text-center text-xs text-slate-500">
                    <p>
                        All brand names, trademarks, and logos belong to their respective manufacturers. Garg Telecom Pvt. Ltd. supplies genuine products sourced from verified distribution channels.
                    </p>
                </div>
            </div>
        </section>
    );
}
