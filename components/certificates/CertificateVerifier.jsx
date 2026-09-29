'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Loader2, ShieldCheck, AlertCircle, ArrowLeft } from 'lucide-react';
import CertificateVerificationView from './CertificateVerificationView';
import CertificateNotFound from './CertificateNotFound';

export default function CertificateVerifier({ token }) {
    const [state, setState] = useState({
        isLoading: true,
        isVerified: false,
        isRevoked: false,
        certificate: null,
        errorMessage: null
    });

    useEffect(() => {
        let isMounted = true;

        async function verify() {
            // Client-side quick check: 64-char hex format
            if (!token || !/^[a-fA-F0-9]{64}$/.test(token.trim())) {
                if (isMounted) {
                    setState({
                        isLoading: false,
                        isVerified: false,
                        isRevoked: false,
                        certificate: null,
                        errorMessage: 'Certificate not found'
                    });
                }
                return;
            }

            try {
                const response = await fetch(`/api/certificates/verify/${encodeURIComponent(token.trim())}`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    },
                    cache: 'no-store'
                });

                const data = await response.json();

                if (!isMounted) return;

                if (response.ok && data.verified === true && data.certificate) {
                    setState({
                        isLoading: false,
                        isVerified: true,
                        isRevoked: false,
                        certificate: data.certificate,
                        errorMessage: null
                    });
                } else if (data.status === 'Revoked' && data.certificate) {
                    setState({
                        isLoading: false,
                        isVerified: false,
                        isRevoked: true,
                        certificate: data.certificate,
                        errorMessage: data.message || 'Certificate has been revoked'
                    });
                } else {
                    setState({
                        isLoading: false,
                        isVerified: false,
                        isRevoked: false,
                        certificate: null,
                        errorMessage: data.message || 'Certificate not found'
                    });
                }
            } catch (err) {
                if (isMounted) {
                    setState({
                        isLoading: false,
                        isVerified: false,
                        isRevoked: false,
                        certificate: null,
                        errorMessage: 'Verification request failed'
                    });
                }
            }
        }

        verify();

        return () => {
            isMounted = false;
        };
    }, [token]);

    // 1. Loading State: "Verifying certificate..." with clean indicator
    // Absolutely NO "Verified" or certificate data is shown before the API confirms.
    if (state.isLoading) {
        return (
            <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between selection:bg-blue-600 selection:text-white font-sans">
                {/* Header */}
                <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md px-4 sm:px-8 py-3.5">
                    <div className="max-w-4xl mx-auto flex items-center justify-between">
                        <div className="flex items-center gap-3">
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
                                    Garg Telecom Pvt. Ltd.
                                </span>
                                <span className="text-[10px] text-slate-400 block tracking-wider">
                                    Telecommunications &amp; Digital Solutions
                                </span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Loading indicator */}
                <main className="flex-1 flex items-center justify-center p-4">
                    <div className="text-center space-y-4 max-w-sm w-full py-12">
                        <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                            <div className="absolute inset-0 rounded-full border-4 border-blue-500/20 animate-ping"></div>
                            <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-lg shadow-blue-900/20">
                                <Loader2 className="w-7 h-7 animate-spin text-blue-400" />
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <h2 className="text-lg font-bold text-white tracking-tight">
                                Verifying certificate...
                            </h2>
                            <p className="text-xs text-slate-400">
                                Querying cryptographic credential registry...
                            </p>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="border-t border-slate-900 bg-slate-950/80 px-4 py-4 text-center text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} Garg Telecom Pvt. Ltd. • Credential Verification Desk</p>
                </footer>
            </div>
        );
    }

    // 2. Revoked State: Certificate found but revoked by issuing authority
    if (state.isRevoked && state.certificate) {
        return (
            <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between selection:bg-blue-600 selection:text-white font-sans">
                <header className="border-b border-slate-800 bg-slate-900/80 px-4 sm:px-8 py-3.5">
                    <div className="max-w-4xl mx-auto flex items-center justify-between">
                        <div className="flex items-center gap-3">
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
                                    Garg Telecom Pvt. Ltd.
                                </span>
                                <span className="text-[10px] text-slate-400 block tracking-wider">
                                    Telecommunications &amp; Digital Solutions
                                </span>
                            </div>
                        </div>
                        <Link
                            href="/"
                            className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition"
                        >
                            <ArrowLeft className="w-3.5 h-3.5" /> Return to Website
                        </Link>
                    </div>
                </header>

                <main className="flex-1 flex items-center justify-center p-4 sm:p-6">
                    <div className="max-w-xl w-full bg-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
                        <div className="flex items-center gap-3 text-amber-400">
                            <AlertCircle className="w-8 h-8 flex-shrink-0" />
                            <div>
                                <h1 className="text-xl font-bold text-white">Certificate Revoked</h1>
                                <p className="text-xs text-amber-300/80">
                                    This certificate was previously issued but has been marked as REVOKED by the issuer.
                                </p>
                            </div>
                        </div>

                        <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2 text-xs">
                            <div className="flex justify-between border-b border-slate-800 pb-2">
                                <span className="text-slate-400">Recipient:</span>
                                <span className="text-white font-bold">{state.certificate.recipientName}</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-800 pb-2">
                                <span className="text-slate-400">Certificate ID:</span>
                                <span className="font-mono text-slate-300">{state.certificate.certificateId}</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-800 pb-2">
                                <span className="text-slate-400">Issue Date:</span>
                                <span className="text-slate-300">{state.certificate.issueDate}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-400">Current Status:</span>
                                <span className="text-amber-400 font-bold uppercase">REVOKED</span>
                            </div>
                        </div>

                        <div className="pt-2">
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition"
                            >
                                <ArrowLeft className="w-4 h-4" /> Return to Garg Telecom
                            </Link>
                        </div>
                    </div>
                </main>

                <footer className="border-t border-slate-900 bg-slate-950/80 px-4 py-4 text-center text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} Garg Telecom Pvt. Ltd. • Credential Verification Desk</p>
                </footer>
            </div>
        );
    }

    // 3. Not Found / Invalid State
    if (!state.isVerified || !state.certificate) {
        return <CertificateNotFound />;
    }

    // 4. Verified State
    return <CertificateVerificationView certificate={state.certificate} />;
}
