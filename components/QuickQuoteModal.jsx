'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { X, CheckCircle2, Phone, FileText, Send, Building2, User, Mail, MapPin } from 'lucide-react';
import { useQuote } from '@/context/QuoteContext';
import { COMPANY_INFO } from '@/data/company';
import toast from 'react-hot-toast';

export default function QuickQuoteModal() {
    const { quickQuoteProduct, setQuickQuoteProduct, submitQuote, addItem } = useQuote();

    const [quantity, setQuantity] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        gstin: '',
        phone: '',
        email: '',
        location: '',
        notes: '',
        timeline: 'Immediate (1-2 days)'
    });
    const [submittedQuote, setSubmittedQuote] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!quickQuoteProduct) return null;

    const handleClose = () => {
        setQuickQuoteProduct(null);
        setSubmittedQuote(null);
        setQuantity(1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.phone || formData.phone.length < 10) {
            toast.error("Please enter a valid 10-digit mobile number");
            return;
        }

        setIsSubmitting(true);

        setTimeout(() => {
            // First add item to cart temporarily so submitQuote can process it
            addItem(quickQuoteProduct, quantity, formData.notes);
            const quoteResult = submitQuote(formData);
            setSubmittedQuote(quoteResult);
            setIsSubmitting(false);
            toast.success(`Quotation Request Generated: ${quoteResult.id}`);
        }, 500);
    };

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 animate-fadeIn">
                {/* Header */}
                <div className="px-6 py-4 bg-gradient-to-r from-slate-900 to-blue-950 text-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-white p-1 rounded-lg shadow-xs">
                            <img src="/garg-telecom-icon.png" alt="Garg Telecom" className="h-7 w-auto object-contain" />
                        </div>
                        <div>
                            <span className="text-[11px] uppercase tracking-wider text-blue-300 font-semibold block">
                                Garg Telecom Pvt. Ltd. • Corporate RFQ Desk
                            </span>
                            <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                                {submittedQuote ? "Quotation Request Submitted!" : "Instant B2B Price Quotation"}
                            </h3>
                        </div>
                    </div>
                    <button
                        onClick={handleClose}
                        className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {submittedQuote ? (
                    /* Submission Success State */
                    <div className="p-6 text-center space-y-5">
                        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                            <CheckCircle2 className="w-10 h-10" />
                        </div>

                        <div>
                            <span className="text-xs font-mono font-bold px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200">
                                {submittedQuote.id}
                            </span>
                            <h4 className="text-xl font-bold text-slate-800 mt-2">
                                Thank You, {formData.name || 'Valued Customer'}!
                            </h4>
                            <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                                Your quotation request for <span className="font-semibold text-slate-800">{quantity}x {quickQuoteProduct.model}</span> has been registered with our Karol Bagh sales desk.
                            </p>
                        </div>

                        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs space-y-2">
                            <div className="flex justify-between">
                                <span className="text-slate-500">Item:</span>
                                <span className="font-medium text-slate-800 text-right">{quickQuoteProduct.name}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">Quantity:</span>
                                <span className="font-semibold text-slate-800">{quantity} Units</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">Contact:</span>
                                <span className="font-semibold text-slate-800">{formData.phone}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">Dealership Location:</span>
                                <span className="font-semibold text-blue-700">Karol Bagh, New Delhi (110007)</span>
                            </div>
                        </div>

                        {/* Direct Actions */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <Link
                                href="/quote"
                                onClick={handleClose}
                                className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition shadow-md"
                            >
                                <FileText className="w-4 h-4 text-cyan-300" />
                                View in Full RFQ Portal
                            </Link>
                            <a
                                href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                                className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3 px-4 rounded-xl transition border border-slate-300"
                            >
                                <Phone className="w-4 h-4 text-blue-600" />
                                Call Sales Team
                            </a>
                        </div>

                        <p className="text-[11px] text-slate-500">
                            Our sales desk will contact you within 2 hours with wholesale pricing, GST invoice options, and delivery timelines.
                        </p>
                    </div>
                ) : (
                    /* Quotation Request Form */
                    <form onSubmit={handleSubmit} className="p-6 space-y-4">
                        {/* Product Summary Box */}
                        <div className="p-3.5 bg-blue-50/70 border border-blue-100 rounded-xl flex items-center justify-between gap-4">
                            <div className="min-w-0">
                                <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider bg-blue-200/60 px-2 py-0.5 rounded">
                                    {quickQuoteProduct.brand} • {quickQuoteProduct.model}
                                </span>
                                <h4 className="text-sm font-semibold text-slate-900 truncate mt-1">
                                    {quickQuoteProduct.name}
                                </h4>
                                <span className="text-xs text-slate-500">
                                    Indicative: <strong className="text-slate-800">{quickQuoteProduct.priceDisplay}</strong>
                                    {quickQuoteProduct.b2bPriceDisplay && (
                                        <span className="text-emerald-700 ml-2 font-medium">
                                            (Volume discounts apply)
                                        </span>
                                    )}
                                </span>
                            </div>

                            {/* Quantity Selector */}
                            <div className="flex-shrink-0 flex items-center border border-slate-300 rounded-lg bg-white overflow-hidden shadow-2xs">
                                <button
                                    type="button"
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="px-2.5 py-1 text-slate-600 hover:bg-slate-100 transition text-sm font-bold"
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    min="1"
                                    value={quantity}
                                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                    className="w-12 text-center text-sm font-bold text-slate-800 focus:outline-none"
                                />
                                <button
                                    type="button"
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="px-2.5 py-1 text-slate-600 hover:bg-slate-100 transition text-sm font-bold"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Customer Details */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1">
                                    Your Full Name *
                                </label>
                                <div className="relative">
                                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. Ramesh Kumar"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1">
                                    Mobile Number (+91) *
                                </label>
                                <div className="relative">
                                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                                    <input
                                        type="tel"
                                        required
                                        placeholder="10-digit mobile number"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1">
                                    Company / Business Name (Optional)
                                </label>
                                <div className="relative">
                                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                                    <input
                                        type="text"
                                        placeholder="Company / Firm name"
                                        value={formData.companyName}
                                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                        className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1">
                                    GSTIN Number (Optional)
                                </label>
                                <input
                                    type="text"
                                    placeholder="For GST Tax Invoice"
                                    value={formData.gstin}
                                    onChange={(e) => setFormData({ ...formData, gstin: e.target.value.toUpperCase() })}
                                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white uppercase font-mono"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1">
                                    Email Address (Optional)
                                </label>
                                <div className="relative">
                                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                                    <input
                                        type="email"
                                        placeholder="hr@yourcompany.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1">
                                    Delivery City / Location
                                </label>
                                <div className="relative">
                                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                                    <input
                                        type="text"
                                        placeholder="Delhi-NCR / State"
                                        value={formData.location}
                                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                        className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                                Project Requirements / Notes
                            </label>
                            <textarea
                                rows={2}
                                placeholder="E.g. Need with 2 rolls of CAT6 cable and RJ45 clips, express delivery timeline, etc."
                                value={formData.notes}
                                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                            ></textarea>
                        </div>

                        <div className="pt-2 flex items-center justify-between">
                            <span className="text-[11px] text-slate-500">
                                ⚡ Same-day response from Karol Bagh sales team
                            </span>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition shadow-md flex items-center gap-2 disabled:opacity-75"
                            >
                                {isSubmitting ? (
                                    "Submitting..."
                                ) : (
                                    <>
                                        <Send className="w-3.5 h-3.5" /> Submit Quotation Request
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
