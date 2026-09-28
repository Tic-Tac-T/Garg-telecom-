'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Filter } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
    const [selectedTab, setSelectedTab] = useState('all');

    const tabs = [
        { id: 'all', label: 'All Featured' },
        { id: 'network-switches', label: 'Network Switches' },
        { id: 'cctv-cameras', label: 'CCTV Cameras' },
        { id: 'routers-wifi', label: 'Routers & Wi-Fi' },
        { id: 'network-cables', label: 'Cables & Fiber' },
        { id: 'intercom-telecom', label: 'Intercom & EPABX' }
    ];

    const filtered = selectedTab === 'all'
        ? PRODUCTS.filter(p => p.featured)
        : PRODUCTS.filter(p => p.category === selectedTab);

    return (
        <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
                    <div>
                        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full mb-2">
                            <Sparkles className="w-3 h-3 text-blue-600" />
                            Wholesale & B2B Inventory
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
                            Featured Products
                        </h2>
                        <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
                            High-demand equipment from Cisco, Hikvision, D-Link, and TP-Link stocked at our Karol Bagh warehouse with immediate invoice billing.
                        </p>
                    </div>

                    <Link
                        href="/products"
                        className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 transition"
                    >
                        View Full 25+ Equipment Catalog <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setSelectedTab(tab.id)}
                            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                                selectedTab === tab.id
                                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filtered.slice(0, 8).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Bottom Callout */}
                <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                    <div>
                        <h4 className="text-base font-bold text-slate-900">
                            Need a custom Bill of Materials (BOM) quoted for your project?
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                            Submit your itemized equipment list and our sales team in Karol Bagh will prepare an official quotation within 2 hours.
                        </p>
                    </div>
                    <Link
                        href="/quote"
                        className="flex-shrink-0 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold rounded-xl transition shadow-xs"
                    >
                        Submit Project BOM
                    </Link>
                </div>
            </div>
        </section>
    );
}
