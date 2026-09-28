'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
    ChevronRight,
    HelpCircle,
    BookOpen,
    Filter,
    ShieldCheck,
    Building2,
    ArrowRight,
    ChevronDown
} from 'lucide-react';
import { CATEGORIES } from '@/data/categories';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function CategoryDetailPage({ params }) {
    const resolvedParams = use(params);
    const { slug } = resolvedParams;

    const category = CATEGORIES.find((c) => c.slug === slug);

    if (!category) {
        notFound();
    }

    const [selectedBrand, setSelectedBrand] = useState('all');
    const [openFaq, setOpenFaq] = useState(0);

    const categoryProducts = PRODUCTS.filter((p) => p.category === category.slug);

    const displayedProducts = selectedBrand === 'all'
        ? categoryProducts
        : categoryProducts.filter((p) => p.brand.toLowerCase() === selectedBrand.toLowerCase());

    const otherCategories = CATEGORIES.filter((c) => c.slug !== category.slug).slice(0, 4);

    return (
        <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
                    <Link href="/" className="hover:text-blue-600 transition">Home</Link>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    <Link href="/categories" className="hover:text-blue-600 transition">Categories</Link>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-slate-800 font-semibold">{category.name}</span>
                </nav>

                {/* Category Hero */}
                <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs mb-8">
                    <div className="max-w-3xl">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full">
                            Category Overview
                        </span>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-2">
                            {category.name}
                        </h1>
                        <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                            {category.description}
                        </p>

                        {/* Popular Brands in Category Filter Bar */}
                        <div className="flex items-center gap-2 mt-6 flex-wrap">
                            <span className="text-xs font-bold text-slate-500 mr-1">Filter by Brand:</span>
                            <button
                                onClick={() => setSelectedBrand('all')}
                                className={`text-xs px-3 py-1.5 rounded-xl font-semibold transition ${
                                    selectedBrand === 'all'
                                        ? 'bg-blue-600 text-white shadow-xs'
                                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                }`}
                            >
                                All Brands ({categoryProducts.length})
                            </button>

                            {category.popularBrands.map((brand, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedBrand(brand)}
                                    className={`text-xs px-3 py-1.5 rounded-xl font-semibold transition ${
                                        selectedBrand.toLowerCase() === brand.toLowerCase()
                                            ? 'bg-blue-600 text-white shadow-xs'
                                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                    }`}
                                >
                                    {brand}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Product Listings Grid */}
                <div className="mb-14">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-slate-900">
                            Available Equipment ({displayedProducts.length})
                        </h2>
                        <span className="text-xs text-slate-500">
                            Karol Bagh Stock • 100% Genuine Certified
                        </span>
                    </div>

                    {displayedProducts.length === 0 ? (
                        <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center">
                            <p className="text-sm text-slate-600">
                                No products found for brand "{selectedBrand}".
                            </p>
                            <button
                                onClick={() => setSelectedBrand('all')}
                                className="mt-3 px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg"
                            >
                                Reset Brand Filter
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {displayedProducts.map((p) => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    )}
                </div>

                {/* Buyer Guidance Tips */}
                {category.buyingGuide && (
                    <div className="bg-blue-900 text-white rounded-3xl p-6 sm:p-8 mb-12 shadow-md">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-blue-800 border border-blue-600/40 flex items-center justify-center text-cyan-300 flex-shrink-0">
                                <BookOpen className="w-5 h-5" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-base font-bold text-white">
                                    Karol Bagh Dealer Buying Guidance for {category.name}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                                    {category.buyingGuide}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* FAQ Accordion */}
                {category.faqs && category.faqs.length > 0 && (
                    <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-12 shadow-xs">
                        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <HelpCircle className="w-5 h-5 text-blue-600" />
                            Frequently Asked Questions about {category.name}
                        </h3>

                        <div className="space-y-3">
                            {category.faqs.map((faq, idx) => (
                                <div
                                    key={idx}
                                    className="border border-slate-200 rounded-xl overflow-hidden transition"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                                        className="w-full text-left p-4 bg-slate-50/80 hover:bg-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-800 transition"
                                    >
                                        <span>{faq.q}</span>
                                        <ChevronDown
                                            className={`w-4 h-4 text-slate-500 transition-transform ${
                                                openFaq === idx ? 'rotate-180' : ''
                                            }`}
                                        />
                                    </button>
                                    {openFaq === idx && (
                                        <div className="p-4 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Other Categories Link */}
                <div className="border-t border-slate-200 pt-8">
                    <h3 className="text-base font-bold text-slate-900 mb-4">
                        Explore Related Categories
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {otherCategories.map((c) => (
                            <Link
                                key={c.id}
                                href={`/category/${c.slug}`}
                                className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-blue-400 shadow-2xs hover:shadow-md transition text-center group"
                            >
                                <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition block">
                                    {c.name}
                                </span>
                                <span className="text-[10px] text-slate-400 mt-1 block">
                                    View Products →
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
