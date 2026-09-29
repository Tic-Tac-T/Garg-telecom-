'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AlertTriangle, ArrowLeft, ShieldAlert } from 'lucide-react';

export default function CertificateNotFound() {
    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between">
            {/* Top Minimal Branding Header */}
            <header className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md px-4 sm:px-8 py-4">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-white/10 p-1 border border-white/20">
                            <Image
                                src="/garg_telecom_icon.png"
                                alt="Garg Telecom"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div>
                            <span className="text-sm font-black tracking-wide text-white block">
                                GARG TELECOM <span className="text-blue-400 font-normal">PVT. LTD.</span>
                            </span>
                            <span className="text-[10px] text-slate-400 block tracking-wider uppercase">
                                Verification Portal
                            </span>
                        </div>
                    </Link>

                    <Link
                        href="/"
                        className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" /> Return to Website
                    </Link>
                </div>
            </header>

            {/* Error Message Card */}
            <main className="flex-1 flex items-center justify-center p-4 sm:p-8">
                <div className="max-w-lg w-full bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl text-center relative overflow-hidden">
                    {/* Background accent glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative space-y-6">
                        <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center mx-auto shadow-inner">
                            <ShieldAlert className="w-8 h-8" />
                        </div>

                        <div className="space-y-2">
                            <span className="text-[11px] font-bold uppercase tracking-widest text-rose-400 bg-rose-950/60 px-3 py-1 rounded-full border border-rose-800/40">
                                Verification Failed
                            </span>
                            <h1 className="text-2xl sm:text-3xl font-black text-white pt-1">
                                Certificate Not Found
                            </h1>
                            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mx-auto">
                                We could not verify a certificate associated with this verification link.
                            </p>
                        </div>

                        <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700/60 text-xs text-slate-400 text-left space-y-1.5">
                            <p className="font-semibold text-slate-300 flex items-center gap-2">
                                <AlertTriangle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                                Security Notice
                            </p>
                            <p>
                                Certificates issued by Garg Telecom Pvt. Ltd. contain unique cryptographic verification tokens. If you scanned a physical QR code, please verify the complete URL was not truncated.
                            </p>
                        </div>

                        <div className="pt-2">
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition shadow-lg shadow-blue-900/30"
                            >
                                <ArrowLeft className="w-4 h-4" /> Return to Garg Telecom
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            {/* Subtle Minimal Footer */}
            <footer className="border-t border-slate-900 bg-slate-950/80 px-4 py-4 text-center text-xs text-slate-400">
                <p>
                    © {new Date().getFullYear()} Garg Telecom Pvt. Ltd. • Official Verification Security Desk
                </p>
            </footer>
        </div>
    );
}
