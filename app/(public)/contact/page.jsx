'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    FileText,
    Building2,
    User,
    Send,
    CheckCircle2,
    ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';
import toast from 'react-hot-toast';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        phone: '',
        email: '',
        subject: 'Product Price & Quotation Inquiry',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.phone || formData.phone.length < 10) {
            toast.error("Please provide a valid 10-digit mobile number");
            return;
        }

        setIsSubmitted(true);
        toast.success("Message received! Our Karol Bagh desk will contact you.");
    };

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
                                className="h-12 sm:h-14 w-auto object-contain" 
                            />
                        </div>
                    </div>
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full mb-3">
                        <span>Corporate Office & Helpdesk</span>
                        <span>•</span>
                        <span>Karol Bagh, New Delhi</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
                        Contact Garg Telecom Pvt. Ltd.
                    </h1>
                    <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                        Have a query regarding enterprise telecom solutions, optical fiber, bulk hardware quotations, or government tenders? Connect with our dedicated sales and technical NOC desks.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
                    {/* Left: Contact Info Cards (5 Cols) */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Office & Store Card */}
                        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5">
                            <h3 className="text-lg font-bold text-slate-900 pb-3 border-b border-slate-100 flex items-center gap-2">
                                <Building2 className="w-5 h-5 text-blue-600" /> Dealership Office & Warehouse
                            </h3>

                            <div className="space-y-4 text-xs text-slate-600">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="text-slate-900 block text-sm">Physical Address:</strong>
                                        <p className="text-slate-700 leading-relaxed mt-0.5">
                                            {COMPANY_INFO.address.fullAddress}
                                        </p>
                                        <span className="text-[11px] text-slate-400 mt-1 block">
                                            Landmark: {COMPANY_INFO.address.landmark}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Phone className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="text-slate-900 block text-sm">Direct Helpline & RFQ:</strong>
                                        <a
                                            href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                                            className="text-base font-bold text-emerald-700 hover:underline block mt-0.5"
                                        >
                                            {COMPANY_INFO.contact.phone}
                                        </a>
                                        <span className="text-[11px] text-slate-500">Available Mon-Sat for instant pricing</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Mail className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="text-slate-900 block text-sm">Official Email:</strong>
                                        <a
                                            href={`mailto:${COMPANY_INFO.contact.email}`}
                                            className="text-blue-600 hover:underline font-semibold block mt-0.5"
                                        >
                                            {COMPANY_INFO.contact.email}
                                        </a>
                                        <span className="text-[11px] text-slate-500">Send purchase orders & tenders</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Clock className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="text-slate-900 block text-sm">Business Working Hours:</strong>
                                        <p className="text-slate-700 mt-0.5">Monday – Saturday: 10:00 AM – 8:00 PM</p>
                                        <p className="text-slate-500">Sunday: Closed (Online RFQ Active)</p>
                                    </div>
                                </div>
                            </div>

                            {/* Direct Quote Portal Callout */}
                            <div className="pt-2">
                                <Link
                                    href="/quote"
                                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow-md"
                                >
                                    <FileText className="w-4 h-4 text-cyan-300" />
                                    Submit Formal RFQ / Quote Request
                                </Link>
                            </div>
                        </div>

                        {/* Proprietor Information */}
                        <div className="p-6 bg-slate-900 text-white rounded-3xl border border-slate-800 space-y-2">
                            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block">
                                Leadership Desk
                            </span>
                            <h4 className="text-base font-bold text-white">
                                {COMPANY_INFO.owner}
                            </h4>
                            <p className="text-xs text-slate-300">
                                {COMPANY_INFO.designation} – Overseeing customer satisfaction, wholesale B2B pricing, and prompt logistics dispatch across Delhi-NCR and Pan-India.
                            </p>
                        </div>
                    </div>

                    {/* Right: Interactive Contact Form (7 Cols) */}
                    <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xs">
                        <div className="pb-4 border-b border-slate-100 mb-6">
                            <h3 className="text-xl font-bold text-slate-900">
                                Send an Enquiry / Message
                            </h3>
                            <p className="text-xs text-slate-500 mt-1">
                                Fill out the details below and our team will get back to you with wholesale rates or answers to your questions.
                            </p>
                        </div>

                        {isSubmitted ? (
                            <div className="text-center py-12 space-y-4">
                                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                                    <CheckCircle2 className="w-10 h-10" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-800">Message Received!</h4>
                                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our Karol Bagh sales team will respond to your inquiry at <strong className="text-slate-900">{formData.phone}</strong> or <strong className="text-slate-900">{formData.email}</strong> within 2 hours.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="px-5 py-2.5 bg-blue-600 text-white text-xs font-bold rounded-xl"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                                            Your Full Name *
                                        </label>
                                        <div className="relative">
                                            <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                                            <input
                                                type="text"
                                                required
                                                placeholder="e.g. Rahul Sharma"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full text-xs pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                                            Company / Business Name (Optional)
                                        </label>
                                        <div className="relative">
                                            <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                                            <input
                                                type="text"
                                                placeholder="e.g. Apex Technologies"
                                                value={formData.company}
                                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                className="w-full text-xs pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                                            Mobile Number (+91) *
                                        </label>
                                        <div className="relative">
                                            <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                                            <input
                                                type="tel"
                                                required
                                                placeholder="10-digit number"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full text-xs pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                                            <input
                                                type="email"
                                                placeholder="name@company.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full text-xs pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        Subject / Topic of Enquiry
                                    </label>
                                    <select
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="Product Price & Quotation Inquiry">Product Price & Quotation Inquiry</option>
                                        <option value="Bulk Order / B2B Tender Procurement">Bulk Order / B2B Tender Procurement</option>
                                        <option value="Structured Cabling & Hardware Supply">Structured Cabling & Hardware Supply</option>
                                        <option value="CCTV & Surveillance System Design">CCTV & Surveillance System Design</option>
                                        <option value="Enterprise Wi-Fi & Fiber Networking">Enterprise Wi-Fi & Fiber Networking</option>
                                        <option value="Dealership / Vendor Collaboration">Dealership / Vendor Collaboration</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        Your Message / Equipment List *
                                    </label>
                                    <textarea
                                        rows={4}
                                        required
                                        placeholder="Please share specific requirements, quantities, or questions..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full text-xs p-3 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow-md flex items-center justify-center gap-2"
                                >
                                    <Send className="w-4 h-4" /> Send Message to Karol Bagh Store
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* Karol Bagh Location & Map Section */}
                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xs">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div>
                            <span className="text-xs font-bold text-blue-600 uppercase">Map & Directions</span>
                            <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                                Location: Karol Bagh, New Delhi (Delhi - 110007)
                            </h3>
                            <p className="text-xs text-slate-500">
                                Easily accessible via Delhi Metro Blue Line (Karol Bagh Metro Station).
                            </p>
                        </div>

                        <a
                            href={`https://maps.google.com/?q=Karol+Bagh+New+Delhi+Delhi+110007`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 bg-slate-100 hover:bg-blue-50 text-blue-700 border border-slate-200 rounded-xl text-xs font-bold transition flex items-center gap-2"
                        >
                            <MapPin className="w-4 h-4" /> Open in Google Maps
                        </a>
                    </div>

                    {/* Styled Map Representation */}
                    <div className="w-full h-64 sm:h-80 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                        <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg mb-3 animate-bounce">
                            <MapPin className="w-8 h-8" />
                        </div>
                        <h4 className="text-base font-bold text-slate-900">
                            Garg Telecom Showroom & Warehouse
                        </h4>
                        <p className="text-xs text-slate-600 max-w-md mt-1">
                            Karol Bagh, New Delhi, Delhi - 110007 (Near Karol Bagh Metro Station)
                        </p>
                        <p className="text-[11px] text-slate-400 mt-2">
                            Same-Day Store Pickup • Walk-in Hardware Demos • Wholesale Counter Billing
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
