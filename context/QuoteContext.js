'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const QuoteContext = createContext(null);

export function QuoteProvider({ children }) {
    const [items, setItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [quickQuoteProduct, setQuickQuoteProduct] = useState(null);
    const [quotesHistory, setQuotesHistory] = useState([]);
    const [isMounted, setIsMounted] = useState(false);

    // Load from localStorage on mount
    useEffect(() => {
        setIsMounted(true);
        try {
            const savedItems = localStorage.getItem('gt_quote_cart');
            if (savedItems) {
                setItems(JSON.parse(savedItems));
            }
            const savedHistory = localStorage.getItem('gt_quotes_history');
            if (savedHistory) {
                setQuotesHistory(JSON.parse(savedHistory));
            } else {
                // Initialize default sample quotes so admin dashboard looks active
                const initialQuotes = [
                    {
                        id: "GT-RFQ-2026-1042",
                        date: new Date(Date.now() - 3600000 * 4).toISOString(),
                        customerName: "Vikas Sharma",
                        companyName: "Nexus IT Solutions Pvt Ltd",
                        gstin: "07AAACN1234F1Z5",
                        phone: "+91 98112 34567",
                        email: "vikas@nexusit.in",
                        location: "Connaught Place, New Delhi",
                        status: "Quoted",
                        notes: "Need urgent delivery by tomorrow evening for client project deployment.",
                        items: [
                            { name: "Cisco CBS110-24T-EU 24-Port Gigabit Unmanaged Switch", quantity: 2, model: "CBS110-24T-EU" },
                            { name: "D-Link CAT6 UTP 305-Meter 100% Solid Annealed Bare Copper Cable", quantity: 4, model: "NCB-C6UBLUR-305" },
                            { name: "D-Link 9U Wall Mount Communication Server Rack", quantity: 1, model: "NWR-9U5545-GR" }
                        ]
                    },
                    {
                        id: "GT-RFQ-2026-1038",
                        date: new Date(Date.now() - 86400000 * 2).toISOString(),
                        customerName: "Rajeev Goel",
                        companyName: "Goel Electronics Showroom",
                        gstin: "07AABCG5544B1ZV",
                        phone: "+91 98711 99882",
                        email: "rajeev@goelelec.com",
                        location: "Chandni Chowk, Delhi",
                        status: "Dispatched",
                        notes: "Payment done via NEFT. Need GST invoice copy along with shipment.",
                        items: [
                            { name: "Hikvision DS-2CD2043G2-I 4MP AcuSense WDR Fixed IP Bullet Camera", quantity: 6, model: "DS-2CD2043G2-I" },
                            { name: "Hikvision DS-7608NI-Q1 8 Channel 4K Ultra-HD Network Video Recorder", quantity: 1, model: "DS-7608NI-Q1" },
                            { name: "Western Digital WD Purple 4TB 24/7 Surveillance Internal Hard Drive", quantity: 1, model: "WD43PURZ" },
                            { name: "TP-Link TL-SG1008P 8-Port Gigabit PoE Switch", quantity: 1, model: "TL-SG1008P" }
                        ]
                    },
                    {
                        id: "GT-RFQ-2026-1031",
                        date: new Date(Date.now() - 86400000 * 4).toISOString(),
                        customerName: "Dr. Ananya Roy",
                        companyName: "Roy Diagnostics & Polyclinic",
                        phone: "+91 99100 44556",
                        email: "contact@roydoctors.org",
                        location: "Paharganj, New Delhi",
                        status: "New",
                        notes: "Upgrading clinic Wi-Fi access points and waiting area CCTV coverage.",
                        items: [
                            { name: "TP-Link Omada EAP225 AC1350 Dual-Band Wireless Gigabit Access Point", quantity: 3, model: "EAP225" },
                            { name: "Hikvision 4MP Smart Wi-Fi Dome Security Camera", quantity: 4, model: "DS-2CD1143G0-I" }
                        ]
                    }
                ];
                setQuotesHistory(initialQuotes);
                localStorage.setItem('gt_quotes_history', JSON.stringify(initialQuotes));
            }
        } catch (e) {
            console.error("Storage error:", e);
        }
    }, []);

    // Save cart items to localStorage on change
    useEffect(() => {
        if (!isMounted) return;
        try {
            localStorage.setItem('gt_quote_cart', JSON.stringify(items));
        } catch (e) {
            console.error("Storage error:", e);
        }
    }, [items, isMounted]);

    const addItem = (product, quantity = 1, notes = "") => {
        setItems(prev => {
            const existingIndex = prev.findIndex(item => item.product.id === product.id);
            if (existingIndex > -1) {
                const updated = [...prev];
                updated[existingIndex].quantity += quantity;
                if (notes) updated[existingIndex].notes = notes;
                toast.success(`Updated "${product.name.slice(0, 30)}..." in Quote Cart!`);
                return updated;
            } else {
                toast.success(`Added "${product.name.slice(0, 30)}..." to Quote Cart!`);
                return [...prev, { product, quantity, notes }];
            }
        });
    };

    const removeItem = (productId) => {
        setItems(prev => prev.filter(item => item.product.id !== productId));
        toast.error("Item removed from Quote Cart");
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            removeItem(productId);
            return;
        }
        setItems(prev => prev.map(item =>
            item.product.id === productId ? { ...item, quantity } : item
        ));
    };

    const updateNotes = (productId, notes) => {
        setItems(prev => prev.map(item =>
            item.product.id === productId ? { ...item, notes } : item
        ));
    };

    const clearCart = () => {
        setItems([]);
        try {
            localStorage.removeItem('gt_quote_cart');
        } catch (e) {}
    };

    const submitQuote = (customerData) => {
        const randomNum = Math.floor(1000 + Math.random() * 9000);
        const quoteId = `GT-RFQ-2026-${randomNum}`;
        const newQuote = {
            id: quoteId,
            date: new Date().toISOString(),
            status: "New",
            customerName: customerData.name || "Customer",
            companyName: customerData.companyName || "Individual / Self",
            gstin: customerData.gstin || "",
            phone: customerData.phone,
            email: customerData.email,
            location: customerData.location || "Delhi-NCR",
            timeline: customerData.timeline || "Within 1 Week",
            notes: customerData.notes || "",
            items: items.map(i => ({
                id: i.product.id,
                name: i.product.name,
                model: i.product.model,
                brand: i.product.brand,
                quantity: i.quantity,
                notes: i.notes || "",
                indicativePrice: i.product.priceDisplay || "Contact for Price"
            }))
        };

        const updatedHistory = [newQuote, ...quotesHistory];
        setQuotesHistory(updatedHistory);
        try {
            localStorage.setItem('gt_quotes_history', JSON.stringify(updatedHistory));
        } catch (e) {}

        // Clear cart
        clearCart();
        return newQuote;
    };

    const updateQuoteStatus = (quoteId, newStatus) => {
        const updated = quotesHistory.map(q => q.id === quoteId ? { ...q, status: newStatus } : q);
        setQuotesHistory(updated);
        try {
            localStorage.setItem('gt_quotes_history', JSON.stringify(updated));
            toast.success(`Quote status updated to "${newStatus}"`);
        } catch (e) {}
    };

    const totalItems = items.reduce((acc, curr) => acc + curr.quantity, 0);

    return (
        <QuoteContext.Provider value={{
            items,
            addItem,
            removeItem,
            updateQuantity,
            updateNotes,
            clearCart,
            totalItems,
            isCartOpen,
            setIsCartOpen,
            quickQuoteProduct,
            setQuickQuoteProduct,
            quotesHistory,
            submitQuote,
            updateQuoteStatus
        }}>
            {children}
        </QuoteContext.Provider>
    );
}

export function useQuote() {
    const context = useContext(QuoteContext);
    if (!context) {
        throw new Error('useQuote must be used within a QuoteProvider');
    }
    return context;
}
