'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
    Search,
    Filter,
    X,
    SlidersHorizontal,
    Grid,
    List,
    RotateCcw,
    ShieldCheck,
    Check,
    ChevronDown,
    Building2,
    FileText,
    ArrowUpDown
} from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { CATEGORIES } from '@/data/categories';
import { BRANDS } from '@/data/brands';
import ProductCard from '@/components/ProductCard';

function ProductsContent() {
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get('category') || 'all';
    const initialBrand = searchParams.get('brand') || 'all';
    const initialSearch = searchParams.get('search') || '';

    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [selectedBrand, setSelectedBrand] = useState(initialBrand);
    const [searchTerm, setSearchTerm] = useState(initialSearch);
    const [sortBy, setSortBy] = useState('featured');
    const [inStockOnly, setInStockOnly] = useState(false);
    const [viewMode, setViewMode] = useState('grid');
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    // Filter & Sort Logic
    const filteredProducts = useMemo(() => {
        let result = [...PRODUCTS];

        // 1. Search filter
        if (searchTerm.trim()) {
            const query = searchTerm.toLowerCase();
            result = result.filter(p =>
                p.name.toLowerCase().includes(query) ||
                p.brand.toLowerCase().includes(query) ||
                p.model.toLowerCase().includes(query) ||
                p.categoryName.toLowerCase().includes(query) ||
                (p.shortSpecs && p.shortSpecs.toLowerCase().includes(query))
            );
        }

        // 2. Category filter
        if (selectedCategory !== 'all') {
            result = result.filter(p => p.category === selectedCategory);
        }

        // 3. Brand filter
        if (selectedBrand !== 'all') {
            result = result.filter(p => p.brand.toLowerCase() === selectedBrand.toLowerCase());
        }

        // 4. In Stock filter
        if (inStockOnly) {
            result = result.filter(p => p.inStock);
        }

        // 5. Sort logic
        switch (sortBy) {
            case 'price-low-high':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-high-low':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'popular':
                result.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
                break;
            case 'newest':
                result.reverse();
                break;
            case 'featured':
            default:
                result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
                break;
        }

        return result;
    }, [searchTerm, selectedCategory, selectedBrand, inStockOnly, sortBy]);

    const handleClearFilters = () => {
        setSelectedCategory('all');
        setSelectedBrand('all');
        setSearchTerm('');
        setInStockOnly(false);
        setSortBy('featured');
    };

    const hasActiveFilters = selectedCategory !== 'all' || selectedBrand !== 'all' || searchTerm !== '' || inStockOnly;

    return (
        <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs & Header */}
                <div className="mb-6">
                    <nav className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                        <Link href="/" className="hover:text-blue-600 transition">Home</Link>
                        <span>/</span>
                        <span className="text-slate-800 font-semibold">Product Catalogue</span>
                    </nav>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                                Equipment Catalogue
                            </h1>
                            <p className="text-xs sm:text-sm text-slate-500 mt-1">
                                Discover telecom, networking, CCTV, and structured cabling products. Request wholesale B2B quotes easily.
                            </p>
                        </div>

                        {/* Top Search Bar */}
                        <div className="w-full md:w-80 relative">
                            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search by name, model, switch, cable..."
                                className="w-full text-xs pl-9 pr-8 py-2.5 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className="p-1 text-slate-400 hover:text-slate-600 absolute right-2.5 top-2"
                                >
                                    <X className="w-3.5 h-3.5" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Main Content Layout (Sidebar + Grid) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Desktop Sidebar Filters (3 Cols) */}
                    <aside className="hidden lg:block lg:col-span-3 bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-6 sticky top-28">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                            <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                <Filter className="w-4 h-4 text-blue-600" /> Filter Equipment
                            </span>
                            {hasActiveFilters && (
                                <button
                                    onClick={handleClearFilters}
                                    className="text-[11px] font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                                >
                                    <RotateCcw className="w-3 h-3" /> Reset
                                </button>
                            )}
                        </div>

                        {/* Stock Availability Toggle */}
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                            <label className="flex items-center justify-between cursor-pointer">
                                <span className="text-xs font-semibold text-slate-700">In Stock at Karol Bagh</span>
                                <input
                                    type="checkbox"
                                    checked={inStockOnly}
                                    onChange={(e) => setInStockOnly(e.target.checked)}
                                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                                />
                            </label>
                        </div>

                        {/* Categories List */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                                Categories
                            </h4>
                            <div className="space-y-1 max-h-60 overflow-y-auto pr-1">
                                <button
                                    onClick={() => setSelectedCategory('all')}
                                    className={`w-full text-left text-xs px-2.5 py-1.5 rounded-lg flex items-center justify-between transition ${
                                        selectedCategory === 'all'
                                            ? 'bg-blue-50 text-blue-700 font-bold'
                                            : 'text-slate-600 hover:bg-slate-50'
                                    }`}
                                >
                                    <span>All Categories</span>
                                    <span className="text-[10px] text-slate-400 font-mono">{PRODUCTS.length}</span>
                                </button>

                                {CATEGORIES.map((cat) => {
                                    const count = PRODUCTS.filter(p => p.category === cat.slug).length;
                                    return (
                                        <button
                                            key={cat.id}
                                            onClick={() => setSelectedCategory(cat.slug)}
                                            className={`w-full text-left text-xs px-2.5 py-1.5 rounded-lg flex items-center justify-between transition ${
                                                selectedCategory === cat.slug
                                                    ? 'bg-blue-50 text-blue-700 font-bold'
                                                    : 'text-slate-600 hover:bg-slate-50'
                                            }`}
                                        >
                                            <span className="truncate pr-1">{cat.name}</span>
                                            <span className="text-[10px] text-slate-400 font-mono">{count}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Brands List */}
                        <div className="pt-2 border-t border-slate-100">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                                Brands
                            </h4>
                            <div className="space-y-1 max-h-56 overflow-y-auto pr-1">
                                <button
                                    onClick={() => setSelectedBrand('all')}
                                    className={`w-full text-left text-xs px-2.5 py-1.5 rounded-lg flex items-center justify-between transition ${
                                        selectedBrand === 'all'
                                            ? 'bg-blue-50 text-blue-700 font-bold'
                                            : 'text-slate-600 hover:bg-slate-50'
                                    }`}
                                >
                                    <span>All Brands</span>
                                    <span className="text-[10px] text-slate-400 font-mono">{PRODUCTS.length}</span>
                                </button>

                                {BRANDS.map((brand) => {
                                    const count = PRODUCTS.filter(p => p.brand.toLowerCase() === brand.name.toLowerCase()).length;
                                    return (
                                        <button
                                            key={brand.id}
                                            onClick={() => setSelectedBrand(brand.name)}
                                            className={`w-full text-left text-xs px-2.5 py-1.5 rounded-lg flex items-center justify-between transition ${
                                                selectedBrand.toLowerCase() === brand.name.toLowerCase()
                                                    ? 'bg-blue-50 text-blue-700 font-bold'
                                                    : 'text-slate-600 hover:bg-slate-50'
                                            }`}
                                        >
                                            <span className="truncate pr-1">{brand.name}</span>
                                            <span className="text-[10px] text-slate-400 font-mono">{count}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* B2B Help Box */}
                        <div className="p-3.5 bg-blue-50/70 border border-blue-100 rounded-xl text-xs space-y-2">
                            <span className="font-bold text-blue-900 block flex items-center gap-1.5">
                                <Building2 className="w-3.5 h-3.5 text-blue-600" /> B2B Ordering Desk
                            </span>
                            <p className="text-[11px] text-slate-600">
                                Need custom quantities, dealer margins or project invoices?
                            </p>
                            <Link
                                href="/quote"
                                className="block text-center py-1.5 px-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-xs transition"
                            >
                                Request Custom Quote
                            </Link>
                        </div>
                    </aside>

                    {/* Products Grid Column (9 Cols) */}
                    <div className="lg:col-span-9 space-y-4">
                        {/* Control Bar (Sort, View Mode, Count, Mobile Filter Trigger) */}
                        <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                                {/* Mobile filter button */}
                                <button
                                    onClick={() => setIsMobileFilterOpen(true)}
                                    className="lg:hidden inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition"
                                >
                                    <Filter className="w-3.5 h-3.5 text-blue-600" />
                                    Filters {hasActiveFilters && <span className="w-2 h-2 rounded-full bg-blue-600"></span>}
                                </button>

                                <span className="text-xs text-slate-500 font-medium">
                                    Showing <strong className="text-slate-900">{filteredProducts.length}</strong> items
                                </span>
                            </div>

                            {/* Right: Sort & View Toggle */}
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1.5 text-xs text-slate-600">
                                    <span className="hidden sm:inline text-slate-400">Sort:</span>
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
                                    >
                                        <option value="featured">Featured First</option>
                                        <option value="popular">Popular Equipment</option>
                                        <option value="price-low-high">Price: Low to High</option>
                                        <option value="price-high-low">Price: High to Low</option>
                                        <option value="newest">Newest Arrivals</option>
                                    </select>
                                </div>

                                {/* View Switcher */}
                                <div className="hidden sm:flex items-center border border-slate-200 rounded-lg p-0.5 bg-slate-50">
                                    <button
                                        onClick={() => setViewMode('grid')}
                                        className={`p-1.5 rounded-md transition ${viewMode === 'grid' ? 'bg-white shadow-2xs text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
                                        title="Grid view"
                                    >
                                        <Grid className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => setViewMode('list')}
                                        className={`p-1.5 rounded-md transition ${viewMode === 'list' ? 'bg-white shadow-2xs text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
                                        title="List view"
                                    >
                                        <List className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Active Filter Badges */}
                        {hasActiveFilters && (
                            <div className="flex items-center gap-2 flex-wrap text-xs">
                                <span className="text-slate-400 font-medium">Active:</span>
                                {selectedCategory !== 'all' && (
                                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 border border-blue-200 text-blue-700 rounded-full font-medium">
                                        Category: {CATEGORIES.find(c => c.slug === selectedCategory)?.name || selectedCategory}
                                        <button onClick={() => setSelectedCategory('all')}><X className="w-3 h-3 hover:text-red-500" /></button>
                                    </span>
                                )}
                                {selectedBrand !== 'all' && (
                                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 border border-blue-200 text-blue-700 rounded-full font-medium">
                                        Brand: {selectedBrand}
                                        <button onClick={() => setSelectedBrand('all')}><X className="w-3 h-3 hover:text-red-500" /></button>
                                    </span>
                                )}
                                {inStockOnly && (
                                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-full font-medium">
                                        In Stock Only
                                        <button onClick={() => setInStockOnly(false)}><X className="w-3 h-3 hover:text-red-500" /></button>
                                    </span>
                                )}
                                {searchTerm && (
                                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-700 rounded-full font-medium">
                                        Query: "{searchTerm}"
                                        <button onClick={() => setSearchTerm('')}><X className="w-3 h-3 hover:text-red-500" /></button>
                                    </span>
                                )}
                                <button
                                    onClick={handleClearFilters}
                                    className="text-xs text-red-600 hover:underline font-semibold ml-1"
                                >
                                    Clear all
                                </button>
                            </div>
                        )}

                        {/* Product Grid / List */}
                        {filteredProducts.length === 0 ? (
                            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
                                <Search className="w-12 h-12 text-slate-300 mx-auto" />
                                <h3 className="text-base font-bold text-slate-800">No products match your filters</h3>
                                <p className="text-xs text-slate-500 max-w-md mx-auto">
                                    Try adjusting your search query, selecting a different brand or category, or resetting all filters.
                                </p>
                                <button
                                    onClick={handleClearFilters}
                                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-semibold hover:bg-blue-700 transition"
                                >
                                    <RotateCcw className="w-3.5 h-3.5" /> Reset Filters
                                </button>
                            </div>
                        ) : viewMode === 'list' ? (
                            <div className="space-y-4">
                                {filteredProducts.map((p) => (
                                    <ProductCard key={p.id} product={p} layout="list" />
                                ))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredProducts.map((p) => (
                                    <ProductCard key={p.id} product={p} layout="grid" />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Filter Drawer */}
            {isMobileFilterOpen && (
                <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex justify-end">
                    <div className="w-full max-w-xs bg-white h-full p-5 overflow-y-auto space-y-6">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                            <span className="text-base font-bold text-slate-900">Filters</span>
                            <button onClick={() => setIsMobileFilterOpen(false)} className="p-1 text-slate-400">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Categories */}
                        <div>
                            <h4 className="text-xs font-bold uppercase text-slate-500 mb-2">Categories</h4>
                            <div className="space-y-1">
                                <button
                                    onClick={() => setSelectedCategory('all')}
                                    className={`w-full text-left text-xs p-2 rounded-lg ${selectedCategory === 'all' ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-600'}`}
                                >
                                    All Categories
                                </button>
                                {CATEGORIES.map(c => (
                                    <button
                                        key={c.id}
                                        onClick={() => setSelectedCategory(c.slug)}
                                        className={`w-full text-left text-xs p-2 rounded-lg ${selectedCategory === c.slug ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-600'}`}
                                    >
                                        {c.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Brands */}
                        <div className="pt-2 border-t border-slate-200">
                            <h4 className="text-xs font-bold uppercase text-slate-500 mb-2">Brands</h4>
                            <div className="space-y-1">
                                <button
                                    onClick={() => setSelectedBrand('all')}
                                    className={`w-full text-left text-xs p-2 rounded-lg ${selectedBrand === 'all' ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-600'}`}
                                >
                                    All Brands
                                </button>
                                {BRANDS.map(b => (
                                    <button
                                        key={b.id}
                                        onClick={() => setSelectedBrand(b.name)}
                                        className={`w-full text-left text-xs p-2 rounded-lg ${selectedBrand.toLowerCase() === b.name.toLowerCase() ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-600'}`}
                                    >
                                        {b.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={() => setIsMobileFilterOpen(false)}
                            className="w-full py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold shadow-md"
                        >
                            Apply Filters
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function ProductsPage() {
    return (
        <Suspense fallback={<div className="p-12 text-center text-slate-500">Loading equipment catalogue...</div>}>
            <ProductsContent />
        </Suspense>
    );
}
