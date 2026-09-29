'use client';

import React from 'react';
import Link from 'next/link';
import { FileText, Phone, MessageCircle, ArrowRight, ShieldAlert } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function PreFooterCTA() {
    return (
        <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 text-white relative overflow-hidden">
            {/* Subtle light accents */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-3xl mx-auto space-y-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 border border-cyan-800/40 px-3 py-1 rounded-full">
                        Get Started Today
                    </span>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                        Need Equipment for Your Home, Office or Business?
                    </h2>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
                        Tell us your requirements and our team will help you find suitable telecom, networking, or surveillance products at unbeatable wholesale rates.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
                        <Link
                            href="/quote"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-blue-600/30 transition duration-200"
                        >
                            <FileText className="w-4 h-4 text-cyan-300" />
                            Request a Quote
                        </Link>

                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm sm:text-base rounded-xl border border-slate-700 transition duration-200"
                        >
                            <Phone className="w-4 h-4 text-blue-400" />
                            Contact Us
                        </Link>

                        <Link
                            href="/products"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm sm:text-base rounded-xl border border-slate-700 transition duration-200"
                        >
                            <ArrowRight className="w-4 h-4 text-cyan-400" />
                            Browse Catalog
                        </Link>
                    </div>

                    <div className="pt-6 text-xs text-slate-400 flex items-center justify-center gap-4 flex-wrap">
                        <span>⚡ 2-Hour Response Time</span>
                        <span>•</span>
                        <span>📍 Karol Bagh Store Pickup Available</span>
                        <span>•</span>
                        <span>🧾 Official GST Tax Invoices</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
