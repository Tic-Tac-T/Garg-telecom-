'use client';

import React from 'react';
import Link from 'next/link';
import {
    Building2,
    ShieldCheck,
    Award,
    MapPin,
    Phone,
    Mail,
    Clock,
    UserCheck,
    CheckCircle2,
    Truck,
    ArrowRight,
    FileText
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function AboutPage() {
    return (
        <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-200 inline-block">
                            <img 
                                src="/garg-telecom-logo.png" 
                                alt="Garg Telecom Pvt. Ltd. - Telecommunications & Digital Solutions" 
                                className="h-14 sm:h-16 w-auto object-contain" 
                            />
                        </div>
                    </div>
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full mb-3">
                        <span>Telecommunications & Sourcing</span>
                        <span>•</span>
                        <span>Karol Bagh, New Delhi</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
                        About Garg Telecom Pvt. Ltd.
                    </h1>
                    <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                        {COMPANY_INFO.division} • {COMPANY_INFO.tagline}
                    </p>
                </div>

                {/* Company Story & Overview Grid */}
                <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xs mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-7 space-y-5">
                            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                                Our Journey & Mission
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                                From Karol Bagh’s Historic Electronics Market to Modern Digital Commerce
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                For years, <strong className="text-slate-900">Garg Telecom</strong> has operated as an offline telecom equipment and electronics dealer headquartered in the bustling Karol Bagh commercial district of New Delhi. As one of North India’s most critical trading hubs for electronics and communications, Karol Bagh has enabled us to build direct channel relationships with global leaders like Cisco, D-Link, TP-Link, Hikvision, CP Plus, and Dahua.
                            </p>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                Today, under the guidance of our proprietor <strong className="text-slate-900">{COMPANY_INFO.owner}</strong>, we are bridging our physical stock advantage with a modern digital platform. Our goal is to make it seamless for startups, system integrators, corporate purchase managers, and individual customers to discover products, verify technical specifications, and receive competitive wholesale quotations without endless phone tags or middlemen margins.
                            </p>

                            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
                                <span className="flex items-center gap-1.5 text-blue-700">
                                    <CheckCircle2 className="w-4 h-4 text-blue-600" /> 100% Genuine Certified
                                </span>
                                <span className="flex items-center gap-1.5 text-emerald-700">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Official GST Billing
                                </span>
                                <span className="flex items-center gap-1.5 text-cyan-700">
                                    <CheckCircle2 className="w-4 h-4 text-cyan-600" /> Delhi-NCR Fast Dispatch
                                </span>
                            </div>
                        </div>

                        {/* Proprietor Spotlight Card */}
                        <div className="lg:col-span-5">
                            <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl p-7 text-white space-y-4 border border-slate-800 shadow-xl">
                                <div className="flex items-center gap-3 pb-3 border-b border-slate-700/60">
                                    <div className="w-12 h-12 rounded-xl bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400">
                                        <UserCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                                            Managing Director
                                        </span>
                                        <h3 className="text-lg font-bold text-white">
                                            {COMPANY_INFO.owner}
                                        </h3>
                                        <span className="text-xs text-blue-400">
                                            {COMPANY_INFO.designation}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-xs text-slate-300 leading-relaxed">
                                    "We believe trust in the electronics trade is earned through transparency. When a customer orders a 100% solid copper CAT6 cable or a 4MP IP camera from Garg Telecom, they know they are getting authentic manufacturer-boxed hardware backed by an official invoice and honest support."
                                </p>

                                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 text-xs space-y-1">
                                    <p className="text-slate-300">
                                        <strong>Store:</strong> Karol Bagh, New Delhi (110007)
                                    </p>
                                    <p className="text-slate-300">
                                        <strong>Direct Helpline:</strong> {COMPANY_INFO.contact.phone}
                                    </p>
                                    <p className="text-slate-300">
                                        <strong>Email:</strong> {COMPANY_INFO.contact.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4 Pillars of Operation */}
                <div className="mb-14">
                    <h3 className="text-xl font-bold text-slate-900 text-center mb-8">
                        The Core Pillars of Our Dealership
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                            <ShieldCheck className="w-8 h-8 text-blue-600 mb-2" />
                            <h4 className="text-base font-bold text-slate-900">Zero Counterfeits</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                We refuse to stock low-grade Copper Clad Aluminum (CCA) cables or unverified camera clones. Every piece of equipment is authentic.
                            </p>
                        </div>

                        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                            <Award className="w-8 h-8 text-cyan-600 mb-2" />
                            <h4 className="text-base font-bold text-slate-900">Wholesale Slabs</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                From single units for small shops to master cartons for large institutions, we pass on direct distributor margins to our clients.
                            </p>
                        </div>

                        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                            <Truck className="w-8 h-8 text-emerald-600 mb-2" />
                            <h4 className="text-base font-bold text-slate-900">Rapid Dispatch</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                Centrally situated in Delhi, we offer instant store pickup, same-day Delhi-NCR logistics, and Pan-India cargo forwarding.
                            </p>
                        </div>

                        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                            <Building2 className="w-8 h-8 text-purple-600 mb-2" />
                            <h4 className="text-base font-bold text-slate-900">Corporate & GST Ready</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                Fully compliant with Indian GST laws with clear HSN codes, allowing corporate buyers to claim 100% Input Tax Credit.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Visit Karol Bagh Dealership Section */}
                <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-2 text-center md:text-left">
                        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                            Visit Our Store
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-white">
                            Visit Us in Karol Bagh, New Delhi
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                            {COMPANY_INFO.address.fullAddress} • Monday to Saturday: 10:00 AM – 8:00 PM. Walk-ins welcome for live hardware demonstration and counter quotations.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 flex-shrink-0">
                        <Link
                            href="/contact"
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow-md"
                        >
                            Contact Details
                        </Link>
                        <Link
                            href="/quote"
                            className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm rounded-xl transition border border-slate-700 shadow-md flex items-center gap-1.5"
                        >
                            <FileText className="w-4 h-4 text-cyan-400" /> Request RFQ
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
