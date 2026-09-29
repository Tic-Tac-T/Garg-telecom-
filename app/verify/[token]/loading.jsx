import React from 'react';
import { Shield, Loader2 } from 'lucide-react';

export default function Loading() {
    return (
        <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="relative mx-auto w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping"></div>
                    <div className="relative w-14 h-14 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg">
                        <Shield className="w-7 h-7 text-blue-400" />
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800/40">
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        Garg Telecom Verification Portal
                    </div>
                    <h2 className="text-xl font-bold text-white">Verifying certificate...</h2>
                    <p className="text-xs text-slate-400">
                        Validating cryptographic token against authentic institutional records.
                    </p>
                </div>
            </div>
        </div>
    );
}
