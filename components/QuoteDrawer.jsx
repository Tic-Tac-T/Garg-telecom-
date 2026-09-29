'use client';

import React from 'react';
import Link from 'next/link';
import { X, Trash2, ArrowRight, FileCheck2, ShoppingBag, ShieldCheck } from 'lucide-react';
import { useQuote } from '@/context/QuoteContext';
import { COMPANY_INFO } from '@/data/company';

export default function QuoteDrawer() {
    const { isCartOpen, setIsCartOpen, items, removeItem, updateQuantity, clearCart, totalItems } = useQuote();

    if (!isCartOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/70 backdrop-blur-xs flex justify-end animate-fadeIn">
            <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-slate-200">
                {/* Header */}
                <div className="px-5 py-4 border-b border-slate-200 bg-slate-900 text-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-white p-1 rounded-lg shadow-xs">
                            <img src="/garg-telecom-icon.png" alt="GT" className="h-7 w-auto object-contain" />
                        </div>
                        <div>
                            <h3 className="font-bold text-sm sm:text-base text-white">B2B Quotation / RFQ Cart</h3>
                            <p className="text-[11px] text-slate-300">
                                Garg Telecom Pvt. Ltd. • {totalItems} {totalItems === 1 ? 'item' : 'items'} selected
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Items List */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3 divide-y divide-slate-100">
                    {items.length === 0 ? (
                        <div className="text-center py-16 px-4">
                            <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                            <h4 className="text-base font-semibold text-slate-700">Your Quote Cart is Empty</h4>
                            <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                                Browse our network switches, CCTV cameras, CAT6 cables, and enterprise Wi-Fi routers to add items to your quotation request.
                            </p>
                            <Link
                                href="/products"
                                onClick={() => setIsCartOpen(false)}
                                className="inline-block mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition"
                            >
                                Browse Equipment Catalogue
                            </Link>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div key={item.product.id} className="pt-3 first:pt-0 flex items-start justify-between gap-3">
                                <div className="w-12 h-12 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center p-0.5 flex-shrink-0 overflow-hidden">
                                    {item.product.imageUrl ? (
                                        <img
                                            src={item.product.imageUrl}
                                            alt={item.product.name}
                                            className="w-full h-full object-cover rounded"
                                        />
                                    ) : (
                                        <span className="text-[10px] font-bold text-slate-700 font-mono">
                                            {item.product.brand.slice(0, 3)}
                                        </span>
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-[10px] font-semibold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">
                                            {item.product.brand}
                                        </span>
                                        <span className="text-[11px] text-slate-400 font-mono">
                                            {item.product.model}
                                        </span>
                                    </div>
                                    <h4 className="text-xs font-semibold text-slate-800 truncate mt-0.5">
                                        {item.product.name}
                                    </h4>
                                    <div className="text-[11px] text-slate-500 mt-0.5">
                                        Indicative: <strong className="text-slate-800">{item.product.priceDisplay}</strong>
                                    </div>

                                    {/* Quantity and Controls */}
                                    <div className="flex items-center gap-3 mt-2">
                                        <div className="flex items-center border border-slate-200 rounded-md bg-white">
                                            <button
                                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                                className="px-2 py-0.5 text-xs text-slate-600 hover:bg-slate-100"
                                            >
                                                -
                                            </button>
                                            <span className="px-2 text-xs font-semibold text-slate-800">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                                className="px-2 py-0.5 text-xs text-slate-600 hover:bg-slate-100"
                                            >
                                                +
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => removeItem(item.product.id)}
                                            className="text-slate-400 hover:text-red-500 transition p-1"
                                            title="Remove item"
                                        >
                                            <Trash2 className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer Controls */}
                {items.length > 0 && (
                    <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-3">
                        <div className="flex items-center justify-between text-xs text-slate-600">
                            <span>Ready for wholesale quote</span>
                            <button
                                onClick={clearCart}
                                className="text-slate-400 hover:text-red-600 transition text-[11px]"
                            >
                                Clear all
                            </button>
                        </div>

                        <div className="p-2.5 bg-blue-50/80 border border-blue-200/60 rounded-lg flex items-center gap-2 text-[11px] text-blue-900">
                            <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <span>B2B quotes include GST Input Credit (ITC) & volume slab pricing.</span>
                        </div>

                        <Link
                            href="/quote"
                            onClick={() => setIsCartOpen(false)}
                            className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition shadow-md text-sm"
                        >
                            Proceed to Complete Quotation <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
