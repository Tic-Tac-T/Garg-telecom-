'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
    ShieldCheck,
    Truck,
    Clock,
    FileText,
    MessageCircle,
    Phone,
    Share2,
    CheckCircle2,
    Download,
    ArrowRight,
    Building2,
    Check,
    Plus,
    Tag,
    ChevronRight,
    HelpCircle,
    AlertCircle
} from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { COMPANY_INFO } from '@/data/company';
import { useQuote } from '@/context/QuoteContext';
import ProductCard from '@/components/ProductCard';
import toast from 'react-hot-toast';

export default function ProductDetailPage({ params }) {
    // In Next.js 15 App Router dynamic route params can be unwrapped with React.use()
    const resolvedParams = use(params);
    const { slug } = resolvedParams;

    const product = PRODUCTS.find((p) => p.slug === slug);

    if (!product) {
        notFound();
    }

    const { addItem, setQuickQuoteProduct, items } = useQuote();
    const isInCart = items.some(item => item.product.id === product.id);

    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('specs');
    const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

    // Direct in-page RFQ form state
    const [inquiryData, setInquiryData] = useState({
        name: '',
        company: '',
        phone: '',
        location: '',
        notes: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const relatedProducts = PRODUCTS.filter(
        (p) => p.category === product.category && p.id !== product.id
    ).slice(0, 4);

    const handleAddToCart = () => {
        addItem(product, quantity);
    };

    const handleInquirySubmit = (e) => {
        e.preventDefault();
        if (!inquiryData.phone || inquiryData.phone.length < 10) {
            toast.error("Please enter a valid 10-digit mobile number");
            return;
        }

        setIsSubmitted(true);
        toast.success("Quote request sent to Karol Bagh sales desk!");
    };

    return (
        <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 overflow-x-auto no-scrollbar">
                    <Link href="/" className="hover:text-blue-600 transition flex-shrink-0">Home</Link>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    <Link href="/products" className="hover:text-blue-600 transition flex-shrink-0">Products</Link>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    <Link href={`/category/${product.category}`} className="hover:text-blue-600 transition flex-shrink-0">
                        {product.categoryName}
                    </Link>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    <span className="text-slate-800 font-semibold truncate">{product.name}</span>
                </nav>

                {/* Main Product Hero Grid */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-10 mb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                        {/* Left: Product Visual Presentation (5 Cols) */}
                        <div className="lg:col-span-5 space-y-4">
                            <div className="w-full h-80 sm:h-96 rounded-2xl bg-white border border-slate-200 flex items-center justify-center p-3 relative overflow-hidden shadow-sm">
                                {product.imageUrl ? (
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                ) : (
                                    <div className="text-center space-y-3">
                                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-blue-900/60 border border-blue-500/40 flex items-center justify-center mx-auto shadow-inner">
                                            <span className="text-2xl sm:text-3xl font-black text-cyan-300 font-mono tracking-widest">
                                                {product.brand.slice(0, 3).toUpperCase()}
                                            </span>
                                        </div>
                                    </div>
                                )}

                                <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white/95 border border-blue-200/80 px-3 py-1 rounded-full shadow-xs">
                                        {product.brand}
                                    </span>
                                    {product.badge && (
                                        <span className="text-[10px] font-extrabold uppercase tracking-wider bg-blue-600 text-white px-2.5 py-0.5 rounded shadow-xs w-max">
                                            {product.badge}
                                        </span>
                                    )}
                                </div>

                                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                                    <span className="text-emerald-700 bg-white/95 px-2.5 py-1 rounded-lg border border-emerald-200 font-semibold flex items-center gap-1.5 shadow-xs">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                        {product.stockStatus || "In Stock - Karol Bagh"}
                                    </span>
                                    <span className="text-slate-700 bg-white/95 px-2.5 py-1 rounded-lg border border-slate-200 font-mono text-[11px] shadow-xs">
                                        Model: {product.model}
                                    </span>
                                </div>
                            </div>

                            {/* Trust badges below image */}
                            <div className="grid grid-cols-3 gap-2 text-center text-xs">
                                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                                    <ShieldCheck className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                                    <span className="font-semibold text-slate-700 block">Brand Warranty</span>
                                    <span className="text-[10px] text-slate-500">{product.specs["Warranty"] || "Official"}</span>
                                </div>
                                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                                    <Building2 className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                                    <span className="font-semibold text-slate-700 block">GST Invoice</span>
                                    <span className="text-[10px] text-slate-500">18% ITC Eligible</span>
                                </div>
                                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                                    <Truck className="w-4 h-4 text-cyan-600 mx-auto mb-1" />
                                    <span className="font-semibold text-slate-700 block">Fast Dispatch</span>
                                    <span className="text-[10px] text-slate-500">Delhi-NCR & Cargo</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Product Details, Actions & Quotation Triggers (7 Cols) */}
                        <div className="lg:col-span-7 space-y-6">
                            <div>
                                <div className="flex items-center gap-2 mb-2 flex-wrap">
                                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                                        {product.brand}
                                    </span>
                                    <span className="text-xs font-mono font-medium text-slate-500">
                                        Model: <strong className="text-slate-800">{product.model}</strong>
                                    </span>
                                    <span className="text-xs text-slate-400">•</span>
                                    <span className="text-xs text-slate-500 font-medium">
                                        SKU: {product.id}
                                    </span>
                                </div>

                                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
                                    {product.name}
                                </h1>

                                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                                    {product.shortDescription}
                                </p>
                            </div>

                            {/* Pricing Box */}
                            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div>
                                    <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">
                                        Indicative Price (Retail)
                                    </span>
                                    <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-0.5">
                                        {product.priceDisplay}
                                    </div>
                                    <span className="text-xs text-slate-500 mt-0.5 block">
                                        (Taxes extra as applicable / HSN Code included)
                                    </span>
                                </div>

                                <div className="sm:text-right border-t sm:border-t-0 sm:border-l border-slate-200 pt-3 sm:pt-0 sm:pl-6">
                                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 block sm:inline-block">
                                        Bulk & B2B Slabs Available
                                    </span>
                                    <p className="text-[11px] text-slate-500 mt-1">
                                        Special discount for 5+ units & contractors
                                    </p>
                                </div>
                            </div>

                            {/* Quantity & Primary Action Buttons */}
                            <div className="space-y-3 pt-2">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center border border-slate-300 rounded-xl bg-white p-1">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="px-3 py-1.5 text-sm font-bold text-slate-600 hover:bg-slate-100 rounded-lg transition"
                                        >
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            min="1"
                                            value={quantity}
                                            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                            className="w-14 text-center text-sm font-bold text-slate-900 focus:outline-none"
                                        />
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="px-3 py-1.5 text-sm font-bold text-slate-600 hover:bg-slate-100 rounded-lg transition"
                                        >
                                            +
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => setQuickQuoteProduct(product)}
                                        className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md transition"
                                    >
                                        <FileText className="w-4 h-4" /> Request Official Quote
                                    </button>

                                    <button
                                        onClick={handleAddToCart}
                                        className={`p-3.5 rounded-xl border font-bold transition flex items-center justify-center ${
                                            isInCart
                                                ? 'bg-blue-50 text-blue-700 border-blue-300'
                                                : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300'
                                        }`}
                                        title={isInCart ? "Already in RFQ Cart" : "Add to Quote Cart"}
                                    >
                                        {isInCart ? <Check className="w-5 h-5 text-blue-600" /> : <Plus className="w-5 h-5" />}
                                    </button>
                                </div>

                                {/* Direct Helpline & RFQ Action Buttons */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                                    <button
                                        onClick={() => setQuickQuoteProduct(product)}
                                        className="inline-flex items-center justify-center gap-2 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm transition"
                                    >
                                        <FileText className="w-4 h-4 text-cyan-300" />
                                        Request Price Quote
                                    </button>

                                    <a
                                        href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                                        className="inline-flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl transition"
                                    >
                                        <Phone className="w-4 h-4 text-cyan-400" />
                                        Call: {COMPANY_INFO.contact.phone}
                                    </a>
                                </div>
                            </div>

                            {/* Brochure & Stock Notice */}
                            <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500">
                                <span className="flex items-center gap-1.5">
                                    <Clock className="w-4 h-4 text-slate-400" />
                                    Same-Day Store Pickup in Karol Bagh (110007)
                                </span>
                                <button
                                    onClick={() => setIsBrochureModalOpen(true)}
                                    className="font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 hover:underline"
                                >
                                    <Download className="w-3.5 h-3.5" /> Technical Datasheet
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs Section: Technical Specifications, Description, Features, Applications */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden mb-12">
                    {/* Tab Navigation */}
                    <div className="flex items-center border-b border-slate-200 bg-slate-50 px-6 overflow-x-auto no-scrollbar">
                        <button
                            onClick={() => setActiveTab('specs')}
                            className={`py-4 px-4 text-xs sm:text-sm font-bold border-b-2 transition whitespace-nowrap ${
                                activeTab === 'specs'
                                    ? 'border-blue-600 text-blue-600 bg-white'
                                    : 'border-transparent text-slate-600 hover:text-slate-900'
                            }`}
                        >
                            Technical Specifications
                        </button>
                        <button
                            onClick={() => setActiveTab('features')}
                            className={`py-4 px-4 text-xs sm:text-sm font-bold border-b-2 transition whitespace-nowrap ${
                                activeTab === 'features'
                                    ? 'border-blue-600 text-blue-600 bg-white'
                                    : 'border-transparent text-slate-600 hover:text-slate-900'
                            }`}
                        >
                            Key Features & Highlights
                        </button>
                        <button
                            onClick={() => setActiveTab('overview')}
                            className={`py-4 px-4 text-xs sm:text-sm font-bold border-b-2 transition whitespace-nowrap ${
                                activeTab === 'overview'
                                    ? 'border-blue-600 text-blue-600 bg-white'
                                    : 'border-transparent text-slate-600 hover:text-slate-900'
                            }`}
                        >
                            Overview & Applications
                        </button>
                        <button
                            onClick={() => setActiveTab('package')}
                            className={`py-4 px-4 text-xs sm:text-sm font-bold border-b-2 transition whitespace-nowrap ${
                                activeTab === 'package'
                                    ? 'border-blue-600 text-blue-600 bg-white'
                                    : 'border-transparent text-slate-600 hover:text-slate-900'
                            }`}
                        >
                            Package & Warranty
                        </button>
                    </div>

                    {/* Tab 1: Technical Specifications Table */}
                    {activeTab === 'specs' && (
                        <div className="p-6 sm:p-8">
                            <div className="mb-4">
                                <h3 className="text-base font-bold text-slate-900">
                                    Structured Technical Specifications
                                </h3>
                                <p className="text-xs text-slate-500">
                                    Official technical parameters as verified by manufacturer datasheets.
                                </p>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-xs text-left border-collapse">
                                    <tbody>
                                        {Object.entries(product.specs).map(([key, value], idx) => (
                                            <tr
                                                key={key}
                                                className={`border-b border-slate-100 ${
                                                    idx % 2 === 0 ? 'bg-slate-50/70' : 'bg-white'
                                                }`}
                                            >
                                                <td className="py-3 px-4 font-semibold text-slate-700 w-1/3 sm:w-1/4 border-r border-slate-100">
                                                    {key}
                                                </td>
                                                <td className="py-3 px-4 text-slate-800 font-medium">
                                                    {value}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* Tab 2: Features Highlights */}
                    {activeTab === 'features' && (
                        <div className="p-6 sm:p-8 space-y-4">
                            <h3 className="text-base font-bold text-slate-900">
                                Product Features & Advantages
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                                {product.features.map((feat, idx) => (
                                    <div
                                        key={idx}
                                        className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
                                    >
                                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-xs text-slate-700 leading-relaxed font-medium">
                                            {feat}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Tab 3: Detailed Overview & Applications */}
                    {activeTab === 'overview' && (
                        <div className="p-6 sm:p-8 space-y-6">
                            <div>
                                <h3 className="text-base font-bold text-slate-900 mb-2">
                                    Detailed Product Overview
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                    {product.fullDescription}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-slate-100">
                                <h4 className="text-sm font-bold text-slate-900 mb-3">
                                    Recommended Use Cases & Environments
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {product.applications.map((app, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-200/70 rounded-lg text-xs font-semibold"
                                        >
                                            ✓ {app}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tab 4: Package Contents & Warranty */}
                    {activeTab === 'package' && (
                        <div className="p-6 sm:p-8 space-y-6">
                            <div>
                                <h3 className="text-base font-bold text-slate-900 mb-2">
                                    Box Contents
                                </h3>
                                <ul className="space-y-2 text-xs text-slate-700">
                                    {product.packageContents.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-4 border-t border-slate-100">
                                <h4 className="text-sm font-bold text-slate-900 mb-1">
                                    Warranty & Authenticity Guarantee
                                </h4>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    This product is 100% genuine and comes with the manufacturer’s official Indian warranty ({product.specs["Warranty"] || "Standard Warranty"}). Garg Telecom assists customers with invoice copies and service center guidance across Delhi-NCR.
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Direct In-Page Quotation Box */}
                <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-6 sm:p-10 text-white shadow-xl mb-12">
                    <div className="max-w-2xl">
                        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded">
                            Direct Inquiry
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-white mt-2">
                            Request Best Price for {product.model}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 mt-1">
                            Leave your contact number and our Karol Bagh desk will provide wholesale rate, GST bill details, and delivery date.
                        </p>

                        {isSubmitted ? (
                            <div className="mt-6 p-4 bg-emerald-900/50 border border-emerald-500/40 rounded-xl text-center space-y-2">
                                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                                <h5 className="font-bold text-sm text-white">Quotation Request Received!</h5>
                                <p className="text-xs text-slate-300">
                                    Our sales representative will call you at {inquiryData.phone} shortly.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleInquirySubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <input
                                    type="text"
                                    required
                                    placeholder="Your Name *"
                                    value={inquiryData.name}
                                    onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                                    className="text-xs px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="tel"
                                    required
                                    placeholder="Mobile Number (+91) *"
                                    value={inquiryData.phone}
                                    onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                                    className="text-xs px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Company Name (Optional)"
                                    value={inquiryData.company}
                                    onChange={(e) => setInquiryData({ ...inquiryData, company: e.target.value })}
                                    className="text-xs px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Delivery City / Area"
                                    value={inquiryData.location}
                                    onChange={(e) => setInquiryData({ ...inquiryData, location: e.target.value })}
                                    className="text-xs px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <div className="sm:col-span-2">
                                    <button
                                        type="submit"
                                        className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow-md"
                                    >
                                        Submit Request for {quantity} Unit(s)
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>

                {/* Related Products Carousel / Grid */}
                {relatedProducts.length > 0 && (
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">
                                    Related {product.categoryName} Equipment
                                </h3>
                                <p className="text-xs text-slate-500">
                                    Frequently purchased together with this model.
                                </p>
                            </div>
                            <Link
                                href={`/category/${product.category}`}
                                className="text-xs font-bold text-blue-600 hover:text-blue-800"
                            >
                                View all in {product.categoryName} →
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.map((p) => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Technical Datasheet Modal */}
            {isBrochureModalOpen && (
                <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-slate-200">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                            <div>
                                <span className="text-[10px] font-bold text-blue-600 uppercase">Garg Telecom Datasheet Desk</span>
                                <h4 className="text-base font-bold text-slate-900">{product.model} Technical Specification</h4>
                            </div>
                            <button onClick={() => setIsBrochureModalOpen(false)} className="text-slate-400 hover:text-slate-700">✕</button>
                        </div>

                        <p className="text-xs text-slate-600">
                            Technical datasheet for <strong className="text-slate-900">{product.name}</strong> is available for download or immediate delivery via Email / Portal.
                        </p>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1">
                            <p><strong>Brand:</strong> {product.brand}</p>
                            <p><strong>Model:</strong> {product.model}</p>
                            <p><strong>Category:</strong> {product.categoryName}</p>
                            <p><strong>Warranty:</strong> {product.specs["Warranty"] || "Standard Manufacturer Warranty"}</p>
                        </div>

                        <div className="flex gap-2 pt-2">
                            <button
                                onClick={() => {
                                    window.print();
                                    setIsBrochureModalOpen(false);
                                }}
                                className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl shadow-xs"
                            >
                                Print / Save Spec Sheet
                            </button>
                            <button
                                onClick={() => {
                                    setIsBrochureModalOpen(false);
                                    setQuickQuoteProduct(product);
                                }}
                                className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs flex items-center justify-center gap-1.5"
                            >
                                <FileText className="w-3.5 h-3.5" /> Request Price Quote
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
