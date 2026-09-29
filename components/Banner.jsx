'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function Banner() {
    return (
        <div className="bg-slate-900 text-slate-200 text-xs border-b border-slate-800 transition-all">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className="flex flex-wrap items-center justify-between gap-y-2">
                    {/* Left: Office location and timings */}
                    <div className="flex items-center flex-wrap gap-x-3 gap-y-1">
                        <span className="flex items-center gap-1.5 text-blue-400 font-semibold">
                            <MapPin className="w-3.5 h-3.5 text-blue-400" />
                            {COMPANY_INFO.address.fullAddress}
                        </span>
                        <span className="hidden md:inline-block text-slate-700">|</span>
                        <span className="hidden md:flex items-center gap-1 text-emerald-400 font-medium">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                            GeM & ISO 9001:2015 Certified
                        </span>
                    </div>

                    {/* Right: Direct Contact & RFQ Portal */}
                    <div className="flex items-center gap-3 sm:gap-4 text-xs">
                        <a
                            href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                            className="flex items-center gap-1.5 hover:text-blue-400 transition font-medium"
                        >
                            <Phone className="w-3.5 h-3.5 text-blue-400" />
                            <span className="text-slate-400 hidden sm:inline">Tel:</span>
                            <span className="text-white font-semibold">{COMPANY_INFO.contact.phone}</span>
                        </a>

                        <span className="text-slate-700">|</span>

                        <a
                            href={`mailto:${COMPANY_INFO.contact.salesEmail}`}
                            className="hidden sm:flex items-center gap-1.5 hover:text-blue-400 transition"
                        >
                            <Mail className="w-3.5 h-3.5 text-slate-400" />
                            <span className="text-slate-300">{COMPANY_INFO.contact.salesEmail}</span>
                        </a>

                        <span className="hidden sm:inline-block text-slate-700">|</span>

                        <Link
                            href="/quote"
                            className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white px-2.5 py-0.5 rounded-full transition text-[11px] font-medium"
                        >
                            <ShieldCheck className="w-3 h-3 text-cyan-300" />
                            Quote Portal
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}