'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    FileCheck2,
    Trash2,
    Plus,
    Building2,
    User,
    Phone,
    Mail,
    MapPin,
    Calendar,
    Send,
    MessageCircle,
    Printer,
    ArrowRight,
    ShieldCheck,
    CheckCircle2,
    Info,
    Store
} from 'lucide-react';
import { useQuote } from '@/context/QuoteContext';
import { COMPANY_INFO } from '@/data/company';
import toast from 'react-hot-toast';

export default function QuotePage() {
    const { items, removeItem, updateQuantity, updateNotes, clearCart, submitQuote, totalItems } = useQuote();

    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        gstin: '',
        phone: '',
        email: '',
        location: '',
        timeline: 'Immediate (1-2 days)',
        notes: '',
        customItemsText: ''
    });

    const [submittedQuote, setSubmittedQuote] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (items.length === 0 && !formData.customItemsText.trim()) {
            toast.error("Please add at least one item or enter custom requirements in the box.");
            return;
        }

        if (!formData.phone || formData.phone.length < 10) {
            toast.error("Please enter a valid 10-digit mobile number.");
            return;
        }

        setIsSubmitting(true);

        setTimeout(() => {
            const combinedNotes = formData.customItemsText
                ? `${formData.notes ? formData.notes + ' | ' : ''}Custom items requested: ${formData.customItemsText}`
                : formData.notes;

            const quote = submitQuote({
                ...formData,
                notes: combinedNotes
            });

            setSubmittedQuote(quote);
            setIsSubmitting(false);
            toast.success(`Quotation ${quote.id} created successfully!`);
        }, 500);
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full">
                        B2B Procurement & Quotation Desk
                    </span>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-2">
                        Request Equipment Quotation (RFQ)
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2">
                        Get verified wholesale rates, GST tax invoices, and bulk pricing directly from our Karol Bagh, New Delhi sales team.
                    </p>
                </div>

                {submittedQuote ? (
                    /* SUCCESS / PRINTABLE QUOTATION SUMMARY */
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden animate-fadeIn">
                        {/* Printable Header */}
                        <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800/40">
                                    {submittedQuote.id}
                                </span>
                                <h2 className="text-xl sm:text-2xl font-black text-white mt-2">
                                    Quotation Request Generated
                                </h2>
                                <p className="text-xs text-slate-300">
                                    Date: {new Date(submittedQuote.date).toLocaleString('en-IN')}
                                </p>
                            </div>

                            {/* Print & Action Buttons */}
                            <div className="flex items-center gap-2 flex-wrap">
                                <button
                                    onClick={handlePrint}
                                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 border border-slate-700"
                                >
                                    <Printer className="w-3.5 h-3.5" /> Print / Save PDF
                                </button>
                                <Link
                                    href="/products"
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-md"
                                >
                                    <ArrowRight className="w-3.5 h-3.5" /> Browse More Equipment
                                </Link>
                            </div>
                        </div>

                        {/* Printable Document Body */}
                        <div className="p-6 sm:p-10 space-y-6">
                            {/* Dealership & Customer Header */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                                <div>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                                        Dealership & Sourcing Hub:
                                    </span>
                                    <h4 className="text-sm font-bold text-slate-900 mt-0.5">{COMPANY_INFO.legalName}</h4>
                                    <p className="text-slate-600">{COMPANY_INFO.address.fullAddress}</p>
                                    <p className="text-slate-600">Phone: {COMPANY_INFO.contact.phone}</p>
                                    <p className="text-slate-600">Email: {COMPANY_INFO.contact.email}</p>
                                    <p className="text-slate-600">Proprietor: {COMPANY_INFO.owner}</p>
                                </div>

                                <div>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                                        Quotation Issued To:
                                    </span>
                                    <h4 className="text-sm font-bold text-slate-900 mt-0.5">{submittedQuote.customerName}</h4>
                                    {submittedQuote.companyName && (
                                        <p className="text-slate-700 font-semibold">{submittedQuote.companyName}</p>
                                    )}
                                    {submittedQuote.gstin && (
                                        <p className="text-slate-600 font-mono">GSTIN: {submittedQuote.gstin}</p>
                                    )}
                                    <p className="text-slate-600">Mobile: {submittedQuote.phone}</p>
                                    {submittedQuote.email && <p className="text-slate-600">Email: {submittedQuote.email}</p>}
                                    <p className="text-slate-600">Delivery: {submittedQuote.location || 'Delhi-NCR'}</p>
                                </div>
                            </div>

                            {/* Itemized Table */}
                            <div>
                                <h3 className="text-sm font-bold text-slate-900 mb-3">
                                    Itemized Equipment Requested
                                </h3>
                                <div className="overflow-x-auto border border-slate-200 rounded-xl">
                                    <table className="w-full text-xs text-left">
                                        <thead className="bg-slate-100 text-slate-700 uppercase text-[10px]">
                                            <tr>
                                                <th className="py-2.5 px-3">#</th>
                                                <th className="py-2.5 px-3">Equipment / Model</th>
                                                <th className="py-2.5 px-3">Brand</th>
                                                <th className="py-2.5 px-3 text-center">Qty</th>
                                                <th className="py-2.5 px-3">Indicative Rate</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {submittedQuote.items.length === 0 ? (
                                                <tr>
                                                    <td colSpan={5} className="py-4 px-3 text-center text-slate-500">
                                                        Custom BOM requirements specified in notes below.
                                                    </td>
                                                </tr>
                                            ) : (
                                                submittedQuote.items.map((it, idx) => (
                                                    <tr key={idx} className="hover:bg-slate-50">
                                                        <td className="py-2.5 px-3 text-slate-400 font-mono">{idx + 1}</td>
                                                        <td className="py-2.5 px-3 font-semibold text-slate-900">
                                                            {it.name}
                                                            <span className="block text-[11px] text-slate-500 font-mono font-normal">
                                                                Model: {it.model}
                                                            </span>
                                                        </td>
                                                        <td className="py-2.5 px-3 text-slate-700">{it.brand}</td>
                                                        <td className="py-2.5 px-3 text-center font-bold text-blue-600">{it.quantity}</td>
                                                        <td className="py-2.5 px-3 text-slate-700">{it.indicativePrice}</td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Notes & Terms */}
                            {submittedQuote.notes && (
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                                    <strong className="text-slate-800 block mb-1">Customer / Project Notes:</strong>
                                    <p className="text-slate-600">{submittedQuote.notes}</p>
                                </div>
                            )}

                            <div className="p-4 bg-blue-50/70 border border-blue-200/80 rounded-xl text-xs space-y-1.5 text-blue-950">
                                <h4 className="font-bold flex items-center gap-1.5 text-blue-900">
                                    <ShieldCheck className="w-4 h-4 text-blue-600" /> Quotation Policy & B2B Invoicing
                                </h4>
                                <p className="text-slate-600">
                                    • Final wholesale pricing will be confirmed by Garg Telecom sales desk within 2 hours.
                                </p>
                                <p className="text-slate-600">
                                    • Tax invoices with 18% GST and full Input Tax Credit (ITC) available for registered businesses.
                                </p>
                                <p className="text-slate-600">
                                    • Store pickup at Karol Bagh (110007) or same-day dispatch across Delhi-NCR. Pan-India shipping via transport cargo.
                                </p>
                            </div>

                            {/* Back link */}
                            <div className="pt-4 flex items-center justify-between">
                                <button
                                    onClick={() => setSubmittedQuote(null)}
                                    className="text-xs font-semibold text-blue-600 hover:underline"
                                >
                                    ← Create Another Quotation
                                </button>
                                <Link
                                    href="/products"
                                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition"
                                >
                                    Back to Catalogue
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* RFQ CREATION FORM & CART REVIEW */
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Left: Cart Items & Custom Requirements (6 Cols) */}
                        <div className="lg:col-span-6 space-y-6">
                            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
                                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                                    <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                                        <FileCheck2 className="w-5 h-5 text-blue-600" />
                                        Selected Equipment ({totalItems} {totalItems === 1 ? 'unit' : 'units'})
                                    </h2>
                                    {items.length > 0 && (
                                        <button
                                            onClick={clearCart}
                                            className="text-xs text-slate-400 hover:text-red-600 transition"
                                        >
                                            Clear all
                                        </button>
                                    )}
                                </div>

                                {items.length === 0 ? (
                                    <div className="text-center py-8 px-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                                        <p className="text-xs text-slate-500 mb-3">
                                            No products currently added to your Quote Cart.
                                        </p>
                                        <Link
                                            href="/products"
                                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition"
                                        >
                                            <Plus className="w-3.5 h-3.5" /> Select Products from Catalog
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                                        {items.map((item) => (
                                            <div
                                                key={item.product.id}
                                                className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start justify-between gap-3 text-xs"
                                            >
                                                <div className="min-w-0 flex-1">
                                                    <span className="text-[10px] font-bold text-blue-700 uppercase">
                                                        {item.product.brand} • {item.product.model}
                                                    </span>
                                                    <h4 className="font-semibold text-slate-900 truncate mt-0.5">
                                                        {item.product.name}
                                                    </h4>
                                                    <span className="text-slate-500 text-[11px] block mt-0.5">
                                                        Indicative: {item.product.priceDisplay}
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-2 flex-shrink-0">
                                                    <div className="flex items-center border border-slate-300 rounded-lg bg-white">
                                                        <button
                                                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                                            className="px-2 py-0.5 text-slate-600 hover:bg-slate-100"
                                                        >
                                                            -
                                                        </button>
                                                        <span className="px-2 font-bold text-slate-800">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                                            className="px-2 py-0.5 text-slate-600 hover:bg-slate-100"
                                                        >
                                                            +
                                                        </button>
                                                    </div>

                                                    <button
                                                        onClick={() => removeItem(item.product.id)}
                                                        className="text-slate-400 hover:text-red-500 p-1"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Custom Equipment Write-In Box */}
                                <div className="pt-2">
                                    <label className="block text-xs font-bold text-slate-700 mb-1">
                                        Need additional equipment not listed above?
                                    </label>
                                    <textarea
                                        rows={3}
                                        placeholder="E.g. 5x 24-Port Patch Panels, 3 rolls of CAT6 outdoor black cable, 8 channel SMPS box, or specify custom cable lengths..."
                                        value={formData.customItemsText}
                                        onChange={(e) => setFormData({ ...formData, customItemsText: e.target.value })}
                                        className="w-full text-xs p-3 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    ></textarea>
                                </div>
                            </div>

                            {/* Trust Perks */}
                            <div className="p-4 bg-white rounded-2xl border border-slate-200 text-xs space-y-2 text-slate-600">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                                    <span>Direct billing from Karol Bagh with manufacturer warranties</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Building2 className="w-4 h-4 text-blue-600" />
                                    <span>Wholesale volume slabs for system integrators & contractors</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Business & Contact Information Form (6 Cols) */}
                        <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
                            <h2 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100 mb-4">
                                Buyer / Business Information
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-3.5">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        Full Name *
                                    </label>
                                    <div className="relative">
                                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                                        <input
                                            type="text"
                                            required
                                            placeholder="Your full name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full text-xs pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                                            Mobile (+91) *
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
                                            Email Address *
                                        </label>
                                        <div className="relative">
                                            <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                                            <input
                                                type="email"
                                                required
                                                placeholder="your@email.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full text-xs pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                                            Company / Firm Name (Optional)
                                        </label>
                                        <div className="relative">
                                            <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                                            <input
                                                type="text"
                                                placeholder="Business name"
                                                value={formData.companyName}
                                                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                                className="w-full text-xs pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                                            GSTIN Number (Optional)
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="For GST Tax Credit"
                                            value={formData.gstin}
                                            onChange={(e) => setFormData({ ...formData, gstin: e.target.value.toUpperCase() })}
                                            className="w-full text-xs px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 uppercase font-mono"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                                            Delivery Location / Site
                                        </label>
                                        <div className="relative">
                                            <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                                            <input
                                                type="text"
                                                placeholder="Karol Bagh / Delhi-NCR / City"
                                                value={formData.location}
                                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                                className="w-full text-xs pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                                            Requirement Timeline
                                        </label>
                                        <select
                                            value={formData.timeline}
                                            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                                            className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="Immediate (1-2 days)">Immediate (1-2 days)</option>
                                            <option value="Within 1 Week">Within 1 Week</option>
                                            <option value="Within 1 Month">Within 1 Month</option>
                                            <option value="Planning / Budgeting">Planning / Budgeting</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                                        Project Scope & Instructions
                                    </label>
                                    <textarea
                                        rows={2}
                                        placeholder="Any specific delivery instructions, billing details, or warranty requirements..."
                                        value={formData.notes}
                                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    ></textarea>
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow-md flex items-center justify-center gap-2 disabled:opacity-75"
                                    >
                                        {isSubmitting ? (
                                            "Submitting Quotation..."
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4" /> Submit Official Quotation Request
                                            </>
                                        )}
                                    </button>
                                </div>

                                <p className="text-[11px] text-slate-500 text-center pt-1">
                                    ⚡ Average quotation turnaround is under 2 business hours.
                                </p>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
