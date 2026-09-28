'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    Wrench,
    Server,
    Camera,
    Cable,
    PhoneCall,
    Building2,
    ShieldCheck,
    CheckCircle2,
    Clock,
    Phone,
    MessageCircle,
    ArrowRight,
    Send
} from 'lucide-react';
import { SERVICES } from '@/data/services';
import { COMPANY_INFO } from '@/data/company';
import toast from 'react-hot-toast';

export default function ServicesPage() {
    const [serviceFormData, setServiceFormData] = useState({
        name: '',
        phone: '',
        company: '',
        service: 'Networking Equipment Supply',
        location: '',
        details: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!serviceFormData.phone || serviceFormData.phone.length < 10) {
            toast.error("Please enter a valid 10-digit mobile number");
            return;
        }

        setIsSubmitted(true);
        toast.success("Service inquiry received. Our team will contact you!");
    };

    return (
        <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full">
                        Hardware Supply & Technical Deployment
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">
                        Our Telecom & Networking Services
                    </h1>
                    <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                        Beyond equipment sales, Garg Telecom assists clients with structured cabling planning, enterprise equipment sizing, B2B procurement, and on-site technician coordination across Delhi-NCR.
                    </p>
                    <p className="text-xs text-slate-400 mt-2 italic">
                        * Note: Installation and technical support services may be available depending on project requirements and site location.
                    </p>
                </div>

                {/* Services Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {SERVICES.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-3xl border border-slate-200 hover:border-blue-400 p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                                        {service.badge}
                                    </span>
                                    <span className="text-xs text-slate-400 font-medium">
                                        Karol Bagh Desk
                                    </span>
                                </div>

                                <h2 className="text-xl font-bold text-slate-900">
                                    {service.title}
                                </h2>

                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="space-y-2 pt-2 border-t border-slate-100">
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                                        Service Highlights:
                                    </span>
                                    {service.features.map((feat, fIdx) => (
                                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600">
                                    <strong>Ideal For:</strong> {service.idealFor}
                                </div>
                            </div>

                            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                                <a
                                    href={COMPANY_INFO.contact.whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                                >
                                    <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                                    WhatsApp Consultation
                                </a>

                                <Link
                                    href="/quote"
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow-xs"
                                >
                                    Request Quote
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Direct Service Booking / Consultation Form */}
                <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-6 space-y-4">
                            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800/40">
                                Pre-Sales Engineering Desk
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                                Discuss Your Technical Project With Our Team
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                Share your building layout, camera counts, or network switch requirements. We provide free pre-sales equipment sizing, budget estimates, and technician availability across Delhi-NCR.
                            </p>

                            <div className="space-y-2 pt-2 text-xs text-slate-300">
                                <p className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-cyan-400" /> Direct consultation with Sanjeev Kumar Bansal
                                </p>
                                <p className="flex items-center gap-2">
                                    <Building2 className="w-4 h-4 text-emerald-400" /> Karol Bagh walk-in store open 6 days a week
                                </p>
                                <p className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-blue-400" /> Direct Hotline: {COMPANY_INFO.contact.phone}
                                </p>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-6 bg-slate-800/90 rounded-2xl border border-slate-700 p-6">
                            {isSubmitted ? (
                                <div className="text-center py-8 space-y-3">
                                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                                        <CheckCircle2 className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-lg font-bold text-white">Inquiry Received!</h4>
                                    <p className="text-xs text-slate-300 max-w-sm mx-auto">
                                        Our Karol Bagh engineering coordinator will reach out to you at {serviceFormData.phone}.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-3.5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="e.g. Amit Verma"
                                                value={serviceFormData.name}
                                                onChange={(e) => setServiceFormData({ ...serviceFormData, name: e.target.value })}
                                                className="w-full text-xs p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number (+91) *</label>
                                            <input
                                                type="tel"
                                                required
                                                placeholder="10-digit mobile number"
                                                value={serviceFormData.phone}
                                                onChange={(e) => setServiceFormData({ ...serviceFormData, phone: e.target.value })}
                                                className="w-full text-xs p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-300 mb-1">Service Required</label>
                                            <select
                                                value={serviceFormData.service}
                                                onChange={(e) => setServiceFormData({ ...serviceFormData, service: e.target.value })}
                                                className="w-full text-xs p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            >
                                                {SERVICES.map((s) => (
                                                    <option key={s.id} value={s.title}>{s.title}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-semibold text-slate-300 mb-1">Project Location</label>
                                            <input
                                                type="text"
                                                placeholder="Karol Bagh / Delhi-NCR"
                                                value={serviceFormData.location}
                                                onChange={(e) => setServiceFormData({ ...serviceFormData, location: e.target.value })}
                                                className="w-full text-xs p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-slate-300 mb-1">Project Details / Requirements</label>
                                        <textarea
                                            rows={2}
                                            placeholder="Number of camera points, switch ports, cable meters, etc."
                                            value={serviceFormData.details}
                                            onChange={(e) => setServiceFormData({ ...serviceFormData, details: e.target.value })}
                                            className="w-full text-xs p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow-md flex items-center justify-center gap-2"
                                    >
                                        <Send className="w-3.5 h-3.5" /> Submit Service Inquiry
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
