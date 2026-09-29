'use client';

import React from 'react';

export default function BrandLogoBadge({ brandId, name, accentColor, className = "h-12 w-full" }) {
    switch (brandId) {
        case 'cisco':
            return (
                <div className={`flex items-center justify-center gap-1.5 px-3 py-2 bg-blue-50/60 rounded-xl border border-blue-100 ${className}`}>
                    <svg className="h-6 w-6 text-[#049fd9]" viewBox="0 0 32 32" fill="currentColor">
                        {/* Cisco Iconic Bridge Bars */}
                        <rect x="2" y="14" width="2" height="6" rx="1" />
                        <rect x="6" y="10" width="2" height="12" rx="1" />
                        <rect x="10" y="6" width="2" height="18" rx="1" />
                        <rect x="14" y="2" width="2" height="24" rx="1" />
                        <rect x="18" y="6" width="2" height="18" rx="1" />
                        <rect x="22" y="10" width="2" height="12" rx="1" />
                        <rect x="26" y="14" width="2" height="6" rx="1" />
                    </svg>
                    <span className="font-black text-slate-900 tracking-tight text-sm">CISCO</span>
                </div>
            );

        case 'tp-link':
            return (
                <div className={`flex items-center justify-center gap-1.5 px-3 py-2 bg-teal-50/60 rounded-xl border border-teal-100 ${className}`}>
                    <div className="w-5 h-5 rounded-full border-2 border-[#1fa7b3] flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#1fa7b3]" />
                    </div>
                    <span className="font-extrabold text-[#1fa7b3] tracking-tighter text-sm lowercase">tp-link</span>
                </div>
            );

        case 'd-link':
            return (
                <div className={`flex items-center justify-center gap-1.5 px-3 py-2 bg-amber-50/60 rounded-xl border border-amber-100 ${className}`}>
                    <span className="font-black text-[#eb6c24] text-base tracking-wide">D-Link</span>
                </div>
            );

        case 'hikvision':
            return (
                <div className={`flex items-center justify-center gap-1 px-3 py-2 bg-red-50/60 rounded-xl border border-red-100 ${className}`}>
                    <span className="font-black text-[#d91f26] text-sm tracking-widest uppercase">HIKVISION</span>
                </div>
            );

        case 'cp-plus':
            return (
                <div className={`flex items-center justify-center gap-1 px-3 py-2 bg-rose-50/60 rounded-xl border border-rose-100 ${className}`}>
                    <span className="font-black text-[#e62129] text-sm tracking-tight uppercase">CP PLUS</span>
                </div>
            );

        case 'dahua':
            return (
                <div className={`flex items-center justify-center gap-1.5 px-3 py-2 bg-red-50/60 rounded-xl border border-red-100 ${className}`}>
                    <div className="w-3.5 h-3.5 rounded-full bg-[#d8242a] flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                    <span className="font-black text-[#d8242a] text-sm tracking-tight lowercase">dahua</span>
                </div>
            );

        case 'ubiquiti':
            return (
                <div className={`flex items-center justify-center gap-1.5 px-3 py-2 bg-sky-50/60 rounded-xl border border-sky-100 ${className}`}>
                    <div className="w-5 h-5 rounded-md bg-[#0559C9] flex items-center justify-center text-white font-black text-xs">
                        U
                    </div>
                    <span className="font-bold text-[#0559C9] text-xs tracking-wider uppercase">UBIQUITI</span>
                </div>
            );

        case 'netgear':
            return (
                <div className={`flex items-center justify-center gap-1 px-3 py-2 bg-purple-50/60 rounded-xl border border-purple-100 ${className}`}>
                    <span className="font-black text-slate-900 tracking-wider text-xs uppercase">NETGEAR</span>
                </div>
            );

        case 'mikrotik':
            return (
                <div className={`flex items-center justify-center gap-1 px-3 py-2 bg-red-50/60 rounded-xl border border-red-100 ${className}`}>
                    <span className="font-black text-[#d32f2f] tracking-wide text-xs uppercase">MikroTik</span>
                </div>
            );

        case 'western-digital':
            return (
                <div className={`flex items-center justify-center gap-1.5 px-3 py-2 bg-indigo-50/60 rounded-xl border border-indigo-100 ${className}`}>
                    <div className="w-5 h-5 rounded bg-[#4f137e] text-white flex items-center justify-center font-black text-[10px]">
                        WD
                    </div>
                    <span className="font-black text-slate-800 text-xs">Western Digital</span>
                </div>
            );

        case 'tenda':
            return (
                <div className={`flex items-center justify-center gap-1 px-3 py-2 bg-orange-50/60 rounded-xl border border-orange-100 ${className}`}>
                    <span className="font-black text-[#e65100] text-sm italic tracking-tight">Tenda</span>
                </div>
            );

        case 'seagate':
            return (
                <div className={`flex items-center justify-center gap-1 px-3 py-2 bg-emerald-50/60 rounded-xl border border-emerald-100 ${className}`}>
                    <span className="font-black text-[#00a651] text-xs tracking-tight uppercase">SEAGATE</span>
                </div>
            );

        case 'digilink':
            return (
                <div className={`flex items-center justify-center gap-1 px-3 py-2 bg-emerald-50/60 rounded-xl border border-emerald-100 ${className}`}>
                    <span className="font-black text-[#009530] text-xs tracking-tight">DIGILINK</span>
                    <span className="text-[9px] text-slate-400 font-semibold">(Schneider)</span>
                </div>
            );

        case 'honeywell':
            return (
                <div className={`flex items-center justify-center gap-1 px-3 py-2 bg-red-50/60 rounded-xl border border-red-100 ${className}`}>
                    <span className="font-black text-[#e51b24] text-xs tracking-wider uppercase">Honeywell</span>
                </div>
            );

        default:
            return (
                <div className={`flex items-center justify-center px-3 py-2 bg-slate-100 rounded-xl border border-slate-200 ${className}`}>
                    <span className="font-bold text-slate-800 text-xs">{name}</span>
                </div>
            );
    }
}
