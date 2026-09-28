'use client';

import React from 'react';
import Link from 'next/link';
import {
    ShieldCheck,
    FileText,
    ArrowUpRight,
    Check,
    Plus,
    MessageCircle,
    Info,
    Sparkles
} from 'lucide-react';
import { useQuote } from '@/context/QuoteContext';
import { COMPANY_INFO } from '@/data/company';

export default function ProductCard({ product, layout = 'grid' }) {
    const { addItem, setQuickQuoteProduct, items } = useQuote();

    const isInCart = items.some(item => item.product.id === product.id);

    const handleAdd = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addItem(product, 1);
    };

    const handleQuickQuote = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setQuickQuoteProduct(product);
    };

    const handleWhatsApp = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const text = `Hello Garg Telecom, I would like to inquire about: *${product.name}* (Model: ${product.model}). Please share your best price and stock availability.`;
        window.open(`https://wa.me/${COMPANY_INFO.contact.phoneRaw.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`, '_blank');
    };

    if (layout === 'list') {
        return (
            <div className="bg-white rounded-2xl border border-slate-200 hover:border-blue-400 p-4 sm:p-5 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 group">
                {/* Visual Thumbnail */}
                <div className="flex items-center gap-4 min-w-0 flex-1">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-slate-100 border border-slate-200 p-2 flex items-center justify-center flex-shrink-0 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-slate-900 to-blue-950 text-white flex flex-col items-center justify-center text-center p-1 shadow-sm">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 font-mono">
                                {product.brand}
                            </span>
                            <span className="text-[9px] text-slate-300 truncate font-mono mt-0.5 max-w-[55px]">
                                {product.model}
                            </span>
                        </div>
                        {product.badge && (
                            <span className="absolute top-1 left-1 text-[9px] font-bold bg-blue-600 text-white px-1.5 py-0.5 rounded shadow-xs">
                                {product.badge}
                            </span>
                        )}
                    </div>

                    {/* Details */}
                    <div className="min-w-0 space-y-1.5">
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                                {product.brand}
                            </span>
                            <span className="text-xs font-mono font-medium text-slate-500">
                                Model: {product.model}
                            </span>
                            <span className="text-xs text-slate-400 hidden sm:inline">•</span>
                            <span className="text-xs text-slate-500 hidden sm:inline">
                                {product.categoryName}
                            </span>
                        </div>

                        <Link
                            href={`/products/${product.slug}`}
                            className="block text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition"
                        >
                            {product.name}
                        </Link>

                        <p className="text-xs text-slate-500 line-clamp-2 max-w-2xl">
                            {product.shortDescription}
                        </p>

                        <div className="flex items-center gap-3 text-xs text-slate-600 pt-1">
                            {product.inStock ? (
                                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                    {product.stockStatus || "In Stock - Karol Bagh"}
                                </span>
                            ) : (
                                <span className="text-amber-600 font-medium">Available on Order</span>
                            )}
                            <span className="text-slate-300">•</span>
                            <span className="text-slate-500 font-medium">Genuine Brand Warranty</span>
                        </div>
                    </div>
                </div>

                {/* Pricing & Actions */}
                <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-4 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100 flex-shrink-0">
                    <div className="text-left md:text-right">
                        <span className="text-[11px] text-slate-400 block uppercase tracking-wider font-semibold">
                            Indicative Price
                        </span>
                        <div className="text-xl font-black text-slate-900">
                            {product.priceDisplay}
                        </div>
                        {product.b2bPriceDisplay && (
                            <span className="text-xs font-semibold text-emerald-700 block">
                                {product.b2bPriceDisplay}
                            </span>
                        )}
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleQuickQuote}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow-xs flex items-center gap-1.5"
                        >
                            <FileText className="w-3.5 h-3.5" /> Request Quote
                        </button>

                        <button
                            onClick={handleAdd}
                            className={`p-2 rounded-xl text-xs font-bold transition border ${
                                isInCart
                                    ? 'bg-blue-50 text-blue-700 border-blue-300'
                                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300'
                            }`}
                            title={isInCart ? "In Quote Cart" : "Add to Quote Cart"}
                        >
                            {isInCart ? <Check className="w-4 h-4 text-blue-600" /> : <Plus className="w-4 h-4" />}
                        </button>

                        <Link
                            href={`/products/${product.slug}`}
                            className="p-2 rounded-xl text-slate-400 hover:text-blue-600 hover:bg-blue-50 border border-slate-200 transition"
                            title="View Full Specifications"
                        >
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // Default Grid Layout
    return (
        <div className="bg-white rounded-2xl border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            {/* Card Top: Brand Badge & Stock Status */}
            <div className="p-4 pb-0 flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold text-blue-700 bg-blue-50/90 px-2.5 py-0.5 rounded-full border border-blue-100/80">
                    {product.brand}
                </span>

                {product.badge ? (
                    <span className="text-[10px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-blue-700 to-cyan-600 text-white px-2 py-0.5 rounded-full shadow-2xs">
                        {product.badge}
                    </span>
                ) : (
                    <span className="text-[11px] text-slate-400 font-mono font-medium">
                        {product.model}
                    </span>
                )}
            </div>

            {/* Visual Presentation */}
            <div className="px-4 py-4 flex items-center justify-center">
                <div className="w-full h-44 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100/80 border border-slate-100 flex flex-col items-center justify-center p-4 relative overflow-hidden group-hover:scale-102 transition-transform duration-300">
                    {/* Visual Graphic Representation */}
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white flex flex-col items-center justify-center p-2 shadow-md border border-slate-700/30 group-hover:border-blue-500/50 transition">
                        <span className="text-xs font-black tracking-wider text-cyan-400 font-mono">
                            {product.brand.toUpperCase()}
                        </span>
                        <div className="w-10 h-0.5 bg-blue-500/50 my-1 rounded-full"></div>
                        <span className="text-[10px] font-bold text-slate-200 text-center leading-tight line-clamp-2">
                            {product.model}
                        </span>
                    </div>

                    {/* Stock pill */}
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px]">
                        <span className="text-emerald-700 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-md font-semibold border border-emerald-200/60 flex items-center gap-1 shadow-2xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            In Stock
                        </span>
                        <span className="text-slate-500 font-mono font-medium bg-white/90 px-1.5 py-0.5 rounded shadow-2xs">
                            Karol Bagh
                        </span>
                    </div>
                </div>
            </div>

            {/* Product Meta */}
            <div className="px-4 pb-2 space-y-1.5 flex-1">
                <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                    {product.categoryName}
                </div>

                <Link
                    href={`/products/${product.slug}`}
                    className="block text-sm font-bold text-slate-900 group-hover:text-blue-600 transition line-clamp-2 leading-snug"
                    title={product.name}
                >
                    {product.name}
                </Link>

                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {product.shortSpecs || product.shortDescription}
                </p>
            </div>

            {/* Pricing Section */}
            <div className="px-4 py-2.5 bg-slate-50/70 border-t border-slate-100 flex items-baseline justify-between">
                <div>
                    <span className="text-[10px] text-slate-400 block font-medium">Indicative Price</span>
                    <span className="text-base font-black text-slate-900">
                        {product.priceDisplay}
                    </span>
                </div>
                <div className="text-right">
                    <span className="text-[10px] text-emerald-700 font-semibold block">
                        Bulk B2B Rates Available
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                        GST Invoice Available
                    </span>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="p-3 bg-white border-t border-slate-100 grid grid-cols-2 gap-2">
                <button
                    onClick={handleQuickQuote}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow-xs"
                >
                    <FileText className="w-3.5 h-3.5" />
                    Quote
                </button>

                <Link
                    href={`/products/${product.slug}`}
                    className="w-full inline-flex items-center justify-center gap-1 py-2 px-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition"
                >
                    Details <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </Link>
            </div>
        </div>
    );
}