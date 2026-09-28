'use client';

import React from 'react';
import Link from 'next/link';
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    UserCheck,
    Building2,
    ShieldCheck,
    MessageCircle,
    ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function KarolBaghSpotlight() {
    return (
        <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl border border-slate-800">
                    {/* Background decorations */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        {/* Left Details */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-300 text-xs font-semibold">
                                <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                                <span>Established Offline Dealership Expanding Online</span>
                            </div>

                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                                Physical Dealership & Warehouse in{" "}
                                <span className="text-cyan-400">Karol Bagh, New Delhi</span>
                            </h2>

                            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                                Operated under the leadership of <strong className="text-white">{COMPANY_INFO.owner}</strong>, Garg Telecom brings decades of deep vendor relationships in Delhi’s premier electronics and telecom market directly to your business.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                                <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/60 flex items-start gap-3">
                                    <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="text-white block text-sm">Store & Office</strong>
                                        <span className="text-slate-300">{COMPANY_INFO.address.fullAddress}</span>
                                        <span className="block text-[11px] text-slate-400 mt-0.5">Near Karol Bagh Metro Station</span>
                                    </div>
                                </div>

                                <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/60 flex items-start gap-3">
                                    <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="text-white block text-sm">Helpline & RFQ</strong>
                                        <a href={`tel:${COMPANY_INFO.contact.phoneRaw}`} className="text-emerald-400 font-bold hover:underline block text-sm">
                                            {COMPANY_INFO.contact.phone}
                                        </a>
                                        <span className="block text-[11px] text-slate-400 mt-0.5">{COMPANY_INFO.contact.email}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-3 pt-2">
                                <Link
                                    href="/about"
                                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow-md flex items-center gap-2"
                                >
                                    Learn More About Us <ArrowRight className="w-4 h-4" />
                                </Link>
                                <a
                                    href={COMPANY_INFO.contact.whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow-md flex items-center gap-2"
                                >
                                    <MessageCircle className="w-4 h-4 fill-white" />
                                    Direct WhatsApp Consultation
                                </a>
                            </div>
                        </div>

                        {/* Right Card: B2B Guarantee */}
                        <div className="lg:col-span-5">
                            <div className="bg-slate-800/90 rounded-2xl border border-slate-700 p-6 space-y-4">
                                <div className="flex items-center gap-3 pb-3 border-b border-slate-700">
                                    <div className="w-10 h-10 rounded-full bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400">
                                        <UserCheck className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-semibold">
                                            Leadership
                                        </span>
                                        <h4 className="text-base font-bold text-white">
                                            {COMPANY_INFO.owner}
                                        </h4>
                                        <span className="text-xs text-blue-400">
                                            {COMPANY_INFO.designation}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-xs text-slate-300 leading-relaxed">
                                    "Our goal at Garg Telecom is simple: make sure IT managers, installers, and business owners get authentic, reliable networking and surveillance equipment at honest prices with fast local dispatch."
                                </p>

                                <div className="space-y-2 pt-2 border-t border-slate-700/60 text-xs">
                                    <div className="flex items-center gap-2 text-slate-300">
                                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                                        <span>Official GST Invoices with Input Tax Credit</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-300">
                                        <Clock className="w-4 h-4 text-cyan-400" />
                                        <span>Same-day dispatch for Delhi-NCR orders</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-300">
                                        <Building2 className="w-4 h-4 text-amber-400" />
                                        <span>Store pickup & showroom demo available</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
