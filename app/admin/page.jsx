'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    FileText,
    Boxes,
    Building2,
    Phone,
    Mail,
    Printer,
    Search,
    Filter,
    CheckCircle2,
    Clock,
    ShieldCheck,
    Tag,
    ChevronDown,
    ExternalLink
} from 'lucide-react';
import { useQuote } from '@/context/QuoteContext';
import { PRODUCTS } from '@/data/products';
import { BRANDS } from '@/data/brands';
import { COMPANY_INFO } from '@/data/company';

export default function AdminDashboardPage() {
    const { quotesHistory, updateQuoteStatus } = useQuote();

    const [activeTab, setActiveTab] = useState('rfqs');
    const [statusFilter, setStatusFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredQuotes = quotesHistory.filter(q => {
        const matchesStatus = statusFilter === 'all' || q.status.toLowerCase() === statusFilter.toLowerCase();
        const matchesSearch = searchTerm === '' ||
            q.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (q.companyName && q.companyName.toLowerCase().includes(searchTerm.toLowerCase())) ||
            q.phone.includes(searchTerm);
        return matchesStatus && matchesSearch;
    });

    const statusBadge = (status) => {
        switch (status.toLowerCase()) {
            case 'new':
                return 'bg-blue-100 text-blue-700 border-blue-200';
            case 'contacted':
                return 'bg-amber-100 text-amber-700 border-amber-200';
            case 'quoted':
                return 'bg-purple-100 text-purple-700 border-purple-200';
            case 'dispatched':
                return 'bg-emerald-100 text-emerald-700 border-emerald-200';
            default:
                return 'bg-slate-100 text-slate-700 border-slate-200';
        }
    };

    return (
        <div className="space-y-6 max-w-7xl mx-auto pb-12">
            {/* Top Dealership Title & Owner Welcome */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                        Dealer Management Overview
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-0.5">
                        Garg Telecom Dealership Desk
                    </h1>
                    <p className="text-xs text-slate-500 mt-1">
                        Proprietor: <strong className="text-slate-800">{COMPANY_INFO.owner}</strong> • Karol Bagh, New Delhi (110007)
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <Link
                        href="/quote"
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow-xs flex items-center gap-1.5"
                    >
                        <FileText className="w-3.5 h-3.5" /> + New Quote
                    </Link>
                    <Link
                        href="/products"
                        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition border border-slate-300 flex items-center gap-1.5"
                    >
                        <Boxes className="w-3.5 h-3.5" /> Catalog
                    </Link>
                </div>
            </div>

            {/* KPI Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between text-slate-500">
                        <span className="text-xs font-bold uppercase">Total Quotations (RFQ)</span>
                        <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-2xl font-black text-slate-900">
                        {quotesHistory.length}
                    </div>
                    <span className="text-[11px] text-emerald-600 font-semibold block">
                        Live customer RFQ records
                    </span>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between text-slate-500">
                        <span className="text-xs font-bold uppercase">Listed Products</span>
                        <Boxes className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div className="text-2xl font-black text-slate-900">
                        {PRODUCTS.length}
                    </div>
                    <span className="text-[11px] text-slate-500 block">
                        Switches, CCTV, Routers, Cables
                    </span>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between text-slate-500">
                        <span className="text-xs font-bold uppercase">Active Brands</span>
                        <ShieldCheck className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="text-2xl font-black text-slate-900">
                        {BRANDS.length}
                    </div>
                    <span className="text-[11px] text-slate-500 block">
                        Cisco, Hikvision, D-Link, etc.
                    </span>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between text-slate-500">
                        <span className="text-xs font-bold uppercase">Hub & Tax Status</span>
                        <Building2 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div className="text-lg font-black text-emerald-700">
                        Active & Invoicing
                    </div>
                    <span className="text-[11px] text-slate-500 block">
                        GST Input Credit Compliant
                    </span>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center border-b border-slate-200 gap-4">
                <button
                    onClick={() => setActiveTab('rfqs')}
                    className={`pb-3 text-sm font-bold border-b-2 transition ${
                        activeTab === 'rfqs'
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-slate-500 hover:text-slate-900'
                    }`}
                >
                    Quotations & Inquiries ({quotesHistory.length})
                </button>
                <button
                    onClick={() => setActiveTab('inventory')}
                    className={`pb-3 text-sm font-bold border-b-2 transition ${
                        activeTab === 'inventory'
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-slate-500 hover:text-slate-900'
                    }`}
                >
                    Inventory & Pricing Matrix ({PRODUCTS.length})
                </button>
            </div>

            {/* TAB 1: RFQ & Quotations Manager */}
            {activeTab === 'rfqs' && (
                <div className="space-y-4">
                    {/* Filter & Search Bar */}
                    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-2 flex-1 max-w-sm relative">
                            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                            <input
                                type="text"
                                placeholder="Search by RFQ ID, client name, phone..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        <div className="flex items-center gap-2 text-xs">
                            <span className="text-slate-500 font-medium">Filter Status:</span>
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none"
                            >
                                <option value="all">All Statuses</option>
                                <option value="new">New</option>
                                <option value="contacted">Contacted</option>
                                <option value="quoted">Quoted</option>
                                <option value="dispatched">Dispatched</option>
                            </select>
                        </div>
                    </div>

                    {/* Quotations List Table */}
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-xs text-left">
                                <thead className="bg-slate-100/80 text-slate-600 uppercase text-[10px] border-b border-slate-200">
                                    <tr>
                                        <th className="py-3 px-4">Ref ID & Date</th>
                                        <th className="py-3 px-4">Customer / Company</th>
                                        <th className="py-3 px-4">Contact</th>
                                        <th className="py-3 px-4">Requested Hardware</th>
                                        <th className="py-3 px-4">Status</th>
                                        <th className="py-3 px-4 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {filteredQuotes.length === 0 ? (
                                        <tr>
                                            <td colSpan={6} className="py-10 text-center text-slate-500">
                                                No quotation inquiries found matching filters.
                                            </td>
                                        </tr>
                                    ) : (
                                        filteredQuotes.map((quote) => (
                                            <tr key={quote.id} className="hover:bg-slate-50/70 transition">
                                                <td className="py-3 px-4 align-top">
                                                    <span className="font-mono font-bold text-blue-700 block">
                                                        {quote.id}
                                                    </span>
                                                    <span className="text-[10px] text-slate-400 block mt-0.5">
                                                        {new Date(quote.date).toLocaleDateString('en-IN', {
                                                            day: 'numeric',
                                                            month: 'short',
                                                            hour: '2-digit',
                                                            minute: '2-digit'
                                                        })}
                                                    </span>
                                                    <span className="text-[10px] text-slate-500 font-medium block mt-0.5">
                                                        📍 {quote.location || 'Delhi-NCR'}
                                                    </span>
                                                </td>

                                                <td className="py-3 px-4 align-top">
                                                    <strong className="text-slate-900 block text-sm">
                                                        {quote.customerName}
                                                    </strong>
                                                    {quote.companyName && (
                                                        <span className="text-slate-600 block text-[11px] font-medium">
                                                            {quote.companyName}
                                                        </span>
                                                    )}
                                                    {quote.gstin && (
                                                        <span className="text-[10px] text-slate-500 font-mono block mt-0.5">
                                                            GST: {quote.gstin}
                                                        </span>
                                                    )}
                                                </td>

                                                <td className="py-3 px-4 align-top space-y-1">
                                                    <a
                                                        href={`tel:${quote.phone}`}
                                                        className="text-slate-900 hover:text-blue-600 font-semibold block"
                                                    >
                                                        {quote.phone}
                                                    </a>
                                                    {quote.email && (
                                                        <span className="text-[11px] text-slate-500 block truncate max-w-[160px]">
                                                            {quote.email}
                                                        </span>
                                                    )}
                                                </td>

                                                <td className="py-3 px-4 align-top max-w-xs">
                                                    <div className="space-y-1">
                                                        {quote.items.map((it, idx) => (
                                                            <div key={idx} className="text-[11px] text-slate-700">
                                                                <span className="font-bold text-blue-600">{it.quantity}x</span> {it.name.slice(0, 32)}...
                                                            </div>
                                                        ))}
                                                        {quote.notes && (
                                                            <p className="text-[10px] text-slate-500 italic pt-1 border-t border-slate-100">
                                                                "{quote.notes.slice(0, 70)}..."
                                                            </p>
                                                        )}
                                                    </div>
                                                </td>

                                                <td className="py-3 px-4 align-top">
                                                    <select
                                                        value={quote.status}
                                                        onChange={(e) => updateQuoteStatus(quote.id, e.target.value)}
                                                        className={`text-[11px] font-bold px-2 py-1 rounded-lg border cursor-pointer focus:outline-none ${statusBadge(quote.status)}`}
                                                    >
                                                        <option value="New">New</option>
                                                        <option value="Contacted">Contacted</option>
                                                        <option value="Quoted">Quoted</option>
                                                        <option value="Dispatched">Dispatched</option>
                                                        <option value="Closed">Closed</option>
                                                    </select>
                                                </td>

                                                <td className="py-3 px-4 align-top text-right space-x-1.5 whitespace-nowrap">
                                                    {quote.email && (
                                                        <a
                                                            href={`mailto:${quote.email}?subject=Quotation%20${quote.id}%20-%20Garg%20Telecom`}
                                                            className="p-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg inline-block"
                                                            title="Email Customer"
                                                        >
                                                            <Mail className="w-4 h-4" />
                                                        </a>
                                                    )}

                                                    <a
                                                        href={`tel:${quote.phone}`}
                                                        className="p-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg inline-block"
                                                        title="Call Customer"
                                                    >
                                                        <Phone className="w-4 h-4" />
                                                    </a>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {/* TAB 2: Inventory & Pricing Matrix */}
            {activeTab === 'inventory' && (
                <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
                    <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-700">
                            Garg Telecom Master Product Catalog ({PRODUCTS.length} Equipment SKUs)
                        </span>
                        <Link
                            href="/products"
                            className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"
                        >
                            Open Public Catalogue <ExternalLink className="w-3 h-3" />
                        </Link>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-xs text-left">
                            <thead className="bg-slate-100/80 text-slate-600 uppercase text-[10px] border-b border-slate-200">
                                <tr>
                                    <th className="py-3 px-4">Equipment Model</th>
                                    <th className="py-3 px-4">Category</th>
                                    <th className="py-3 px-4">Brand</th>
                                    <th className="py-3 px-4">Indicative Price</th>
                                    <th className="py-3 px-4">B2B Bulk Rate</th>
                                    <th className="py-3 px-4">Stock Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {PRODUCTS.map((p) => (
                                    <tr key={p.id} className="hover:bg-slate-50/70">
                                        <td className="py-3 px-4">
                                            <strong className="text-slate-900 block">{p.name}</strong>
                                            <span className="text-[11px] font-mono text-slate-500">Model: {p.model}</span>
                                        </td>
                                        <td className="py-3 px-4 text-slate-600">{p.categoryName}</td>
                                        <td className="py-3 px-4 font-semibold text-blue-700">{p.brand}</td>
                                        <td className="py-3 px-4 font-bold text-slate-900">{p.priceDisplay}</td>
                                        <td className="py-3 px-4 font-semibold text-emerald-700">{p.b2bPriceDisplay || "Contact Desk"}</td>
                                        <td className="py-3 px-4">
                                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                                Karol Bagh Ready
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}