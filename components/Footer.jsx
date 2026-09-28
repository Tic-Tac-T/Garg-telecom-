'use client';

import React from 'react';
import Link from 'next/link';
import {
    Network,
    MapPin,
    Phone,
    Mail,
    Clock,
    MessageCircle,
    ShieldCheck,
    ChevronRight,
    Building2,
    Lock
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';
import { CATEGORIES } from '@/data/categories';
import { SOLUTIONS } from '@/data/solutions';

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
            {/* Trust Features Bar */}
            <div className="border-b border-slate-800/80 bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="flex items-center gap-3.5">
                            <div className="w-12 h-12 rounded-xl bg-blue-900/40 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white">100% Genuine Equipment</h4>
                                <p className="text-xs text-slate-400 mt-0.5">Direct from certified global brand distribution channels.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3.5">
                            <div className="w-12 h-12 rounded-xl bg-cyan-900/40 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                                <Building2 className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white">Karol Bagh Hub & B2B Rates</h4>
                                <p className="text-xs text-slate-400 mt-0.5">Wholesale pricing, volume slabs & GST Input Tax Credit.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3.5">
                            <div className="w-12 h-12 rounded-xl bg-emerald-900/40 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white">Rapid 2-Hour Quotations</h4>
                                <p className="text-xs text-slate-400 mt-0.5">Fast BOM price matching and technical guidance.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3.5">
                            <div className="w-12 h-12 rounded-xl bg-violet-900/40 border border-violet-500/20 flex items-center justify-center text-violet-400 flex-shrink-0">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white">Delhi-NCR & Pan-India</h4>
                                <p className="text-xs text-slate-400 mt-0.5">Same-day local dispatch & reliable express cargo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Links */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                    {/* Column 1: Company Profile */}
                    <div className="lg:col-span-2 space-y-4">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
                                <Network className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <span className="text-xl font-black tracking-tight text-white">
                                    GARG <span className="text-blue-400">TELECOM</span>
                                </span>
                                <span className="block text-[10px] text-slate-400">
                                    Telecom, Networking & Surveillance Solutions
                                </span>
                            </div>
                        </Link>

                        <p className="text-xs text-slate-400 leading-relaxed pr-4">
                            {COMPANY_INFO.tagline} Established dealership in Karol Bagh, New Delhi, supplying high-performance Wi-Fi routers, Gigabit switches, CCTV security cameras, NVR/DVR systems, structured CAT6 copper cabling, and EPABX intercom solutions to homes, offices, schools, and enterprise businesses.
                        </p>

                        <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-xs space-y-1">
                            <p className="font-semibold text-white">
                                Proprietor: <span className="text-blue-400">{COMPANY_INFO.owner}</span>
                            </p>
                            <p className="text-slate-400">
                                Specializing in B2B IT procurement, government/corporate billing, and turnkey telecom supply.
                            </p>
                        </div>

                        {/* Direct WhatsApp Callout */}
                        <div>
                            <a
                                href={COMPANY_INFO.contact.whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-emerald-600/90 hover:bg-emerald-600 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition shadow-md"
                            >
                                <MessageCircle className="w-4 h-4 fill-white" />
                                Chat on WhatsApp: {COMPANY_INFO.contact.phone}
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Equipment Categories */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                            Product Categories
                        </h4>
                        <ul className="space-y-2 text-xs">
                            {CATEGORIES.slice(0, 7).map((cat) => (
                                <li key={cat.id}>
                                    <Link
                                        href={`/category/${cat.slug}`}
                                        className="text-slate-400 hover:text-blue-400 transition flex items-center gap-1.5"
                                    >
                                        <ChevronRight className="w-3 h-3 text-slate-600" />
                                        {cat.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="/categories"
                                    className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1.5 pt-1"
                                >
                                    <ChevronRight className="w-3 h-3" />
                                    View All Categories →
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Solutions & Services */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                            Solutions & Services
                        </h4>
                        <ul className="space-y-2 text-xs">
                            {SOLUTIONS.slice(0, 5).map((sol) => (
                                <li key={sol.id}>
                                    <Link
                                        href={`/solutions/${sol.slug}`}
                                        className="text-slate-400 hover:text-blue-400 transition flex items-center gap-1.5"
                                    >
                                        <ChevronRight className="w-3 h-3 text-slate-600" />
                                        {sol.title}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="/services"
                                    className="text-slate-400 hover:text-blue-400 transition flex items-center gap-1.5"
                                >
                                    <ChevronRight className="w-3 h-3 text-slate-600" />
                                    Structured Cabling Solutions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="text-slate-400 hover:text-blue-400 transition flex items-center gap-1.5"
                                >
                                    <ChevronRight className="w-3 h-3 text-slate-600" />
                                    Installation Assistance (Delhi-NCR)
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="text-slate-400 hover:text-blue-400 transition flex items-center gap-1.5"
                                >
                                    <ChevronRight className="w-3 h-3 text-slate-600" />
                                    Bulk Procurement & B2B Billing
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Dealership & Office Info */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                            Karol Bagh Dealership
                        </h4>
                        <div className="space-y-2.5 text-xs text-slate-400">
                            <div className="flex items-start gap-2.5">
                                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <strong className="text-white block">Office & Store:</strong>
                                    {COMPANY_INFO.address.fullAddress}
                                    <span className="block text-slate-500 text-[11px] mt-0.5">
                                        Near Karol Bagh Metro Station
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                                <div>
                                    <span className="text-slate-500 block text-[11px]">Helpline & RFQ:</span>
                                    <a
                                        href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                                        className="text-white hover:text-blue-400 font-semibold"
                                    >
                                        {COMPANY_INFO.contact.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                                <div>
                                    <span className="text-slate-500 block text-[11px]">Email Quotations:</span>
                                    <a
                                        href={`mailto:${COMPANY_INFO.contact.email}`}
                                        className="text-white hover:text-blue-400"
                                    >
                                        {COMPANY_INFO.contact.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-2.5">
                                <Clock className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="text-slate-500 block text-[11px]">Business Hours:</span>
                                    <span>Mon - Sat: 10:00 AM – 8:00 PM</span>
                                    <span className="block text-slate-500 text-[11px]">Sunday: On Request</span>
                                </div>
                            </div>

                            <div className="pt-2">
                                <Link
                                    href="/quote"
                                    className="w-full inline-flex items-center justify-center py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition shadow-xs"
                                >
                                    Request Quotation / RFQ
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-900 bg-slate-950 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <div>
                        <p>© {new Date().getFullYear()} Garg Telecom. All Rights Reserved. Products from leading networking and surveillance brands.</p>
                        <p className="text-[11px] text-slate-600 mt-0.5">
                            Proprietor: Sanjeev Kumar Bansal | Karol Bagh, New Delhi, Delhi - 110007
                        </p>
                    </div>

                    <div className="flex items-center gap-4 flex-wrap">
                        <Link href="/about" className="hover:text-slate-300 transition">About Dealership</Link>
                        <Link href="/brands" className="hover:text-slate-300 transition">Brands</Link>
                        <Link href="/products" className="hover:text-slate-300 transition">Product Catalogue</Link>
                        <Link href="/contact" className="hover:text-slate-300 transition">Contact Us</Link>
                        <Link href="/admin" className="hover:text-blue-400 transition flex items-center gap-1">
                            <Lock className="w-3 h-3" /> Dealer Portal
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}