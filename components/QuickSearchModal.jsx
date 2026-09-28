'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, X, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { useQuote } from '@/context/QuoteContext';

export default function QuickSearchModal({ isOpen, onClose }) {
    const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef(null);
    const { setQuickQuoteProduct } = useQuote();

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 50);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const term = searchTerm.trim().toLowerCase();
    const filteredProducts = term === '' ? PRODUCTS.slice(0, 6) : PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(term) ||
        p.brand.toLowerCase().includes(term) ||
        p.model.toLowerCase().includes(term) ||
        p.categoryName.toLowerCase().includes(term) ||
        (p.shortSpecs && p.shortSpecs.toLowerCase().includes(term))
    );

    const popularQueries = [
        "8 port switch",
        "CAT6 cable",
        "Hikvision camera",
        "WiFi 6 router",
        "PoE switch",
        "EPABX intercom",
        "9U rack",
        "WD Purple HDD"
    ];

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-start justify-center p-4 sm:p-6 md:p-10 animate-fadeIn">
            <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden mt-8 md:mt-14">
                {/* Search Bar Header */}
                <div className="flex items-center px-4 py-3.5 border-b border-slate-200 bg-slate-50/80">
                    <Search className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    <input
                        ref={inputRef}
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search products by model, brand, switch, CCTV, CAT6 cable, EPABX..."
                        className="w-full text-slate-800 placeholder-slate-400 bg-transparent text-base sm:text-lg focus:outline-none"
                    />
                    {searchTerm && (
                        <button
                            onClick={() => setSearchTerm('')}
                            className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200 mr-2"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    )}
                    <button
                        onClick={onClose}
                        className="px-2.5 py-1 text-xs font-semibold text-slate-500 hover:text-slate-800 bg-slate-200 hover:bg-slate-300 rounded-lg transition"
                    >
                        ESC
                    </button>
                </div>

                {/* Popular Query Tags */}
                <div className="px-5 py-2.5 bg-slate-100/60 border-b border-slate-200 flex items-center gap-2 overflow-x-auto text-xs text-slate-600 no-scrollbar">
                    <span className="font-semibold text-slate-500 flex items-center gap-1 flex-shrink-0">
                        <Tag className="w-3 h-3 text-blue-600" /> Popular:
                    </span>
                    {popularQueries.map((query, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSearchTerm(query)}
                            className="flex-shrink-0 px-2.5 py-1 bg-white hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 border border-slate-200 rounded-full transition"
                        >
                            {query}
                        </button>
                    ))}
                </div>

                {/* Search Results List */}
                <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2.5 divide-y divide-slate-100">
                    {filteredProducts.length === 0 ? (
                        <div className="text-center py-12 px-4">
                            <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                            <h4 className="text-base font-semibold text-slate-700">No matching products found</h4>
                            <p className="text-sm text-slate-500 mt-1 max-w-sm mx-auto">
                                Can't find what you are looking for? Contact our Karol Bagh dealership directly at +91 9953894014 for custom telecom procurement.
                            </p>
                            <Link
                                href="/contact"
                                onClick={onClose}
                                className="inline-block mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition"
                            >
                                Contact Karol Bagh Store
                            </Link>
                        </div>
                    ) : (
                        filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="pt-2.5 first:pt-0 flex items-center justify-between gap-4 p-2 rounded-xl hover:bg-blue-50/50 transition group"
                            >
                                <div className="flex items-center gap-3.5 min-w-0">
                                    <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center p-1.5 flex-shrink-0 border border-slate-200 group-hover:border-blue-200">
                                        <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-900 to-slate-900 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                                            {product.brand.slice(0, 2).toUpperCase()}
                                        </div>
                                    </div>
                                    <div className="min-w-0">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <span className="text-[11px] font-semibold text-blue-700 bg-blue-100/80 px-2 py-0.5 rounded">
                                                {product.brand}
                                            </span>
                                            <span className="text-xs text-slate-400 font-mono">
                                                {product.model}
                                            </span>
                                            {product.inStock && (
                                                <span className="text-[10px] text-emerald-700 font-medium flex items-center gap-0.5">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> In Stock
                                                </span>
                                            )}
                                        </div>
                                        <Link
                                            href={`/products/${product.slug}`}
                                            onClick={onClose}
                                            className="block text-sm font-semibold text-slate-900 hover:text-blue-600 truncate mt-0.5"
                                        >
                                            {product.name}
                                        </Link>
                                        <p className="text-xs text-slate-500 truncate hidden sm:block">
                                            {product.shortSpecs}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 flex-shrink-0">
                                    <div className="text-right hidden sm:block">
                                        <span className="text-xs text-slate-400 block font-normal">Indicative</span>
                                        <span className="text-sm font-bold text-slate-800">{product.priceDisplay}</span>
                                    </div>
                                    <button
                                        onClick={() => {
                                            setQuickQuoteProduct(product);
                                            onClose();
                                        }}
                                        className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-medium transition shadow-xs whitespace-nowrap"
                                    >
                                        Quote
                                    </button>
                                    <Link
                                        href={`/products/${product.slug}`}
                                        onClick={onClose}
                                        className="p-1.5 text-slate-400 hover:text-blue-600 rounded-lg hover:bg-blue-100 transition"
                                    >
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer bar */}
                <div className="px-5 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                    <span>
                        Showing {filteredProducts.length} of {PRODUCTS.length} equipment items
                    </span>
                    <Link
                        href="/products"
                        onClick={onClose}
                        className="font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                        View Full Catalogue <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
