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
                    <div className="flex items-center flex-wrap gap-x-4 gap-y-1">
                        <span className="flex items-center gap-1.5 text-blue-400 font-medium">
                            <MapPin className="w-3.5 h-3.5 text-blue-400" />
                            {COMPANY_INFO.address.fullAddress}
                        </span>
                        <span className="hidden md:inline-block text-slate-600">|</span>
                        <span className="hidden md:flex items-center gap-1.5 text-slate-300">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            Mon - Sat: 10:00 AM – 8:00 PM
                        </span>
                        <span className="hidden lg:inline-block text-slate-600">|</span>
                        <span className="hidden lg:flex items-center gap-1.5 text-emerald-400">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                            100% Genuine Telecom & Security Brands
                        </span>
                    </div>

                    {/* Right: Direct Contact & WhatsApp */}
                    <div className="flex items-center gap-4 text-xs">
                        <a
                            href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                            className="flex items-center gap-1.5 hover:text-blue-400 transition font-medium"
                        >
                            <Phone className="w-3.5 h-3.5 text-blue-400" />
                            <span className="text-slate-300">Call:</span>
                            <span className="text-white font-semibold">{COMPANY_INFO.contact.phone}</span>
                        </a>

                        <span className="text-slate-600">|</span>

                        <a
                            href={`mailto:${COMPANY_INFO.contact.email}`}
                            className="hidden sm:flex items-center gap-1.5 hover:text-blue-400 transition"
                        >
                            <Mail className="w-3.5 h-3.5 text-slate-400" />
                            <span className="text-slate-300">{COMPANY_INFO.contact.email}</span>
                        </a>

                        <span className="hidden sm:inline-block text-slate-600">|</span>

                        <a
                            href={COMPANY_INFO.contact.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 bg-emerald-700/60 hover:bg-emerald-600 text-emerald-200 hover:text-white px-2.5 py-0.5 rounded-full transition text-[11px] font-medium border border-emerald-500/30"
                        >
                            <MessageCircle className="w-3 h-3 fill-emerald-400 text-emerald-400" />
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}