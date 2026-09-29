'use client';

import React from 'react';
import {
    Boxes,
    BadgePercent,
    ShieldCheck,
    Building2,
    Truck,
    HeadphonesIcon,
    RotateCcw,
    Zap
} from 'lucide-react';

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: <Boxes className="w-6 h-6 text-blue-600" />,
            title: "Wide Product Selection",
            desc: "Over 500+ SKUs in ready stock covering switches, CCTV, routers, solid copper CAT6 cables, and fiber optic accessories."
        },
        {
            icon: <BadgePercent className="w-6 h-6 text-cyan-600" />,
            title: "Competitive Pricing",
            desc: "Direct Karol Bagh wholesale rates and special tiered pricing for bulk orders, system integrators, and resellers."
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
            title: "100% Reliable Equipment",
            desc: "Zero counterfeit products. We strictly supply genuine manufacturer-boxed hardware with official warranties."
        },
        {
            icon: <Building2 className="w-6 h-6 text-indigo-600" />,
            title: "Business & Bulk Orders",
            desc: "Official GST tax invoices with Input Tax Credit (ITC), formal purchase order handling, and project packing."
        },
        {
            icon: <Truck className="w-6 h-6 text-amber-600" />,
            title: "Ready Stock & Fast Dispatch",
            desc: "Immediate counter pickup in Karol Bagh, same-day delivery across Delhi-NCR, and express Pan-India cargo."
        },
        {
            icon: <HeadphonesIcon className="w-6 h-6 text-purple-600" />,
            title: "Technical Guidance",
            desc: "Pre-sales advice on PoE wattage budgets, camera megapixel choices, and server rack sizing before you buy."
        },
        {
            icon: <RotateCcw className="w-6 h-6 text-rose-600" />,
            title: "After-Sales Support",
            desc: "Prompt assistance with manufacturer RMA replacements, warranty service centers, and spare parts."
        },
        {
            icon: <Zap className="w-6 h-6 text-yellow-600" />,
            title: "Fast Enquiry Response",
            desc: "Official itemized quotations and RFQ proposals delivered within 2 hours during business hours."
        }
    ];

    return (
        <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full">
                        Karol Bagh Dealership Advantage
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-2">
                        Why Choose Garg Telecom Pvt. Ltd.
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                        For businesses looking to procure ₹5,000 to ₹5,00,000+ in networking and security equipment, we offer authentic hardware, wholesale pricing, and expert engineering assistance.
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((r, idx) => (
                        <div
                            key={idx}
                            className="p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white group-hover:scale-110 shadow-xs border border-slate-200 flex items-center justify-center mb-4 transition-transform duration-300">
                                {r.icon}
                            </div>
                            <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                                {r.title}
                            </h3>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                {r.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
