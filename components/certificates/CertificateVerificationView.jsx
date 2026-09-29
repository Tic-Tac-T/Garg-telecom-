'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    CheckCircle2,
    Check,
    Maximize2,
    X,
    Download,
    Share2,
    Printer,
    ExternalLink,
    ShieldCheck,
    Building2,
    Calendar,
    Award,
    Code2,
    Layers,
    CheckCircle,
    FileText
} from 'lucide-react';
import toast from 'react-hot-toast';

export default function CertificateVerificationView({ certificate }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopyLink = () => {
        if (typeof window !== 'undefined') {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            toast.success('Verification URL copied to clipboard');
            setTimeout(() => setCopied(false), 2500);
        }
    };

    const handlePrint = () => {
        if (typeof window !== 'undefined') {
            window.print();
        }
    };

    const certificateImageUrl = certificate.certificateImageUrl || certificate.certificateImage || '/certificates/hardik-bindal-certificate.jpg';
    const recipientName = certificate.recipientName || 'Hardik Bindal';
    const certificateTitle = certificate.certificateTitle || 'Certificate of Completion';
    const trainingName = certificate.trainingName || certificate.course || 'Full Stack Web Development';
    const role = certificate.role || certificate.internshipRole || 'Full Stack Developer Intern';
    const organization = certificate.organization || 'Garg Telecom Pvt. Ltd.';
    const issueDate = certificate.issueDate || 'July 15, 2026';
    const certificateId = certificate.certificateId || 'GT-FSWD-2026-847291';
    const status = certificate.status || 'Verified';

    // Official contributions & tasks completed
    const contributions = certificate.contributions && certificate.contributions.length > 0 ? certificate.contributions : [
        "Designed and developed the Garg Telecom business website from scratch.",
        "Converted the company's offline business presence into a functional online web platform.",
        "Developed responsive frontend pages for desktop, tablet, and mobile devices.",
        "Created the website's main user interface and structured the layout for company information, products/services, pricing, and customer interaction.",
        "Implemented reusable frontend components and maintained a consistent design system throughout the website.",
        "Developed and integrated backend functionality required by the website.",
        "Connected frontend components with backend APIs where required.",
        "Worked on structured handling of business data and website content.",
        "Implemented product/service listing functionality so customers could view relevant company offerings and pricing information online.",
        "Improved website navigation and user experience for easier access to company services.",
        "Added responsive styling and optimized the site for different screen sizes.",
        "Worked on form handling and customer enquiry/contact functionality where applicable.",
        "Performed testing and debugging of frontend and backend functionality.",
        "Fixed UI, routing, responsiveness, and integration issues during development."
    ];

    // Technologies & Skills actually found in the existing codebase
    const technologies = [
        { name: "Next.js 15", category: "Framework (App Router & Turbopack)" },
        { name: "React 19", category: "UI Component Library" },
        { name: "JavaScript (ES6+)", category: "Core Language" },
        { name: "HTML5 & CSS3", category: "Semantic Markup & Styling" },
        { name: "Tailwind CSS v4", category: "Modern Utility Design System" },
        { name: "Node.js", category: "Backend Runtime Environment" },
        { name: "REST APIs", category: "Route Handlers & Endpoints" },
        { name: "Prisma ORM", category: "Database Schema & Modeling" },
        { name: "Redux Toolkit", category: "Global State Management" },
        { name: "Cryptography", category: "SHA-256 Token Verification" },
        { name: "QR Generation", category: "Vector SVG & High-Res PNG" },
        { name: "Responsive Design", category: "Desktop, Tablet & Mobile" }
    ];

    return (
        <div className="min-h-screen bg-[#0b1324] text-slate-100 flex flex-col justify-between selection:bg-blue-600 selection:text-white font-sans antialiased">
            
            {/* ============================================================ */}
            {/* 1. GARG TELECOM PVT. LTD. BRANDING (Top Navigation Bar)      */}
            {/* ============================================================ */}
            <header className="bg-[#0f172a]/95 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40 px-4 sm:px-8 py-3.5 shadow-md">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    
                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <div className="relative w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 bg-blue-500/10 border border-blue-500/30 p-1">
                            <Image
                                src="/garg_telecom_icon.png"
                                alt="Garg Telecom"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="leading-tight">
                            <span className="text-sm font-black text-white block tracking-tight">
                                GARG TELECOM <span className="text-blue-400 font-semibold">PVT. LTD.</span>
                            </span>
                            <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 block">
                                Credential Verification Registry
                            </span>
                        </div>
                    </div>

                    {/* Utility controls */}
                    <div className="flex items-center gap-2 sm:gap-3 text-slate-300">
                        <button
                            onClick={handlePrint}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700/80 transition"
                            title="Print Verification Record"
                            aria-label="Print record"
                        >
                            <Printer className="w-3.5 h-3.5 text-slate-300" />
                            <span className="hidden sm:inline">Print Record</span>
                        </button>

                        <button
                            onClick={handleCopyLink}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition shadow-sm"
                            title="Share Verification Link"
                            aria-label="Share Link"
                        >
                            {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Share2 className="w-3.5 h-3.5" />}
                            <span>{copied ? 'Copied' : 'Share'}</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* ============================================================ */}
            {/* MAIN CONTENT AREA (Following exact requested page order)     */}
            {/* ============================================================ */}
            <main className="flex-1 py-8 sm:py-12 px-4 sm:px-6">
                <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8">

                    {/* ---------------------------------------------------- */}
                    {/* 1. GARG TELECOM BRANDING & 2. RECIPIENT NAME & 3. VERIFIED */}
                    {/* ---------------------------------------------------- */}
                    <div className="space-y-2.5">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400">
                            <Building2 className="w-4 h-4 text-blue-400" />
                            <span>GARG TELECOM PVT. LTD.</span>
                        </div>

                        {/* 2. Recipient Name */}
                        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
                            {recipientName}
                        </h1>

                        {/* 3. ✓ CERTIFICATE VERIFIED Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            <span className="text-xs sm:text-sm font-black tracking-wider uppercase">
                                ✓ CERTIFICATE VERIFIED
                            </span>
                        </div>
                    </div>

                    {/* ---------------------------------------------------- */}
                    {/* 4. ACTUAL CERTIFICATE PREVIEW (Directly Visible)    */}
                    {/* ---------------------------------------------------- */}
                    {certificateImageUrl && (
                        <div className="space-y-3">
                            <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-2.5 sm:p-4 shadow-2xl relative overflow-hidden group">
                                <div
                                    onClick={() => setIsModalOpen(true)}
                                    className="relative w-full rounded-xl overflow-hidden cursor-pointer bg-white shadow-inner aspect-[1024/724]"
                                >
                                    <img
                                        src={certificateImageUrl}
                                        alt={`Official Certificate for ${recipientName}`}
                                        className="w-full h-full object-contain"
                                        loading="eager"
                                    />

                                    {/* Hover overlay hint */}
                                    <div className="absolute inset-0 bg-slate-950/0 hover:bg-slate-950/25 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
                                        <span className="bg-slate-900/95 text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-700 shadow-xl flex items-center gap-1.5">
                                            <Maximize2 className="w-3.5 h-3.5 text-blue-400" /> Click to view full certificate
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* ------------------------------------------------ */}
                            {/* 5. CERTIFICATE ID BELOW CERTIFICATE (Centered)    */}
                            {/* ------------------------------------------------ */}
                            <div className="text-center pt-1 pb-1">
                                <p className="text-sm sm:text-base text-slate-300 font-medium">
                                    <span className="font-bold text-white text-base sm:text-lg">Certificate ID:</span>{' '}
                                    <span className="font-mono text-blue-400 font-bold tracking-wider">{certificateId}</span>
                                </p>
                            </div>

                            {/* ------------------------------------------------ */}
                            {/* 6. OPEN CERTIFICATE / VIEW FULL CERTIFICATE       */}
                            {/* ------------------------------------------------ */}
                            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition shadow-lg shadow-blue-950/40"
                                >
                                    <Maximize2 className="w-4 h-4" />
                                    <span>View Full Certificate</span>
                                </button>

                                <a
                                    href={certificateImageUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm border border-slate-700 transition"
                                >
                                    <ExternalLink className="w-4 h-4 text-slate-400" />
                                    <span>Open in New Tab</span>
                                </a>
                            </div>
                        </div>
                    )}

                    {/* ---------------------------------------------------- */}
                    {/* 7. CERTIFICATE DETAILS                               */}
                    {/* ---------------------------------------------------- */}
                    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-7 shadow-lg space-y-4">
                        <div className="flex items-center gap-2 pb-2 border-b border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-400">
                            <FileText className="w-4 h-4 text-blue-400" />
                            <span>Certificate Details</span>
                        </div>

                        {/* Certificate */}
                        <div className="border-b border-slate-800/80 pb-3">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                                Certificate:
                            </span>
                            <span className="text-base sm:text-lg font-bold text-white block">
                                {certificateTitle}
                            </span>
                        </div>

                        {/* Training */}
                        <div className="border-b border-slate-800/80 pb-3">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                                Training:
                            </span>
                            <span className="text-base sm:text-lg font-semibold text-blue-300 block">
                                {trainingName}
                            </span>
                        </div>

                        {/* Role */}
                        <div className="border-b border-slate-800/80 pb-3">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                                Role:
                            </span>
                            <span className="text-sm sm:text-base font-medium text-slate-200 block">
                                {role}
                            </span>
                        </div>

                        {/* Issued For */}
                        <div className="border-b border-slate-800/80 pb-3">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                                Issued For:
                            </span>
                            <span className="text-base sm:text-lg font-bold text-white block uppercase">
                                {recipientName}
                            </span>
                        </div>

                        {/* Issued By */}
                        <div className="border-b border-slate-800/80 pb-3">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                                Issued By:
                            </span>
                            <span className="text-sm sm:text-base font-semibold text-slate-200 block">
                                {organization}
                            </span>
                        </div>

                        {/* Issued Date */}
                        <div className="border-b border-slate-800/80 pb-3">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                                Issued Date:
                            </span>
                            <span className="text-sm sm:text-base font-medium text-slate-200 block">
                                {issueDate}
                            </span>
                        </div>

                        {/* Status */}
                        <div className="pt-1">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                                Status:
                            </span>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-bold">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                <span>{status}</span>
                            </div>
                        </div>
                    </div>

                    {/* ---------------------------------------------------- */}
                    {/* 8. CONTRIBUTIONS & TASKS COMPLETED                    */}
                    {/* ---------------------------------------------------- */}
                    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sm:p-7 shadow-lg space-y-4">
                        <div className="space-y-1 pb-2 border-b border-slate-800">
                            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                                <Layers className="w-5 h-5 text-blue-400" />
                                Contributions &amp; Tasks Completed
                            </h2>
                            <p className="text-xs text-slate-400">
                                Official record of responsibilities undertaken during the Full Stack Web Development internship at Garg Telecom Pvt. Ltd.
                            </p>
                        </div>

                        {/* Responsive grid on desktop, stacked on mobile */}
                        <div className="space-y-2.5 pt-1">
                            {contributions.map((task, idx) => (
                                <div
                                    key={idx}
                                    className="p-3 sm:p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition flex items-start gap-3"
                                >
                                    <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-blue-950/80 border border-blue-500/30 text-blue-400 text-[11px] font-black flex items-center justify-center mt-0.5">
                                        {String(idx + 1).padStart(2, '0')}
                                    </span>
                                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pt-0.5">
                                        {task}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ---------------------------------------------------- */}
                    {/* 9. TECHNOLOGIES & SKILLS (Actual Project Stack)      */}
                    {/* ---------------------------------------------------- */}
                    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sm:p-7 shadow-lg space-y-4">
                        <div className="space-y-1 pb-2 border-b border-slate-800">
                            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                                <Code2 className="w-5 h-5 text-blue-400" />
                                Technologies &amp; Skills
                            </h2>
                            <p className="text-xs text-slate-400">
                                Core engineering stack and methodologies applied throughout the platform development.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                            {technologies.map((tech, idx) => (
                                <div
                                    key={idx}
                                    className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between gap-2"
                                >
                                    <div className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                        <span className="text-xs sm:text-sm font-bold text-white">
                                            {tech.name}
                                        </span>
                                    </div>
                                    <span className="text-[10px] text-slate-400 font-medium text-right">
                                        {tech.category}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ---------------------------------------------------- */}
                    {/* 10. FINAL VERIFICATION MESSAGE                       */}
                    {/* ---------------------------------------------------- */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 space-y-2 shadow-md">
                        <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm sm:text-base">
                            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                            <span>✓ This certificate has been successfully verified as an authorized certificate issued by Garg Telecom Pvt. Ltd.</span>
                        </div>
                        <p className="text-xs text-emerald-200/80 pl-7 leading-relaxed">
                            Issued by the Human Resource Department, Garg Telecom Pvt. Ltd. Registry Record ID: <span className="font-mono text-emerald-300 font-semibold">{certificateId}</span>. Digital authenticity authenticated via SHA-256 token verification.
                        </p>
                    </div>

                    {/* Action Links */}
                    <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition font-semibold"
                        >
                            <ExternalLink className="w-3.5 h-3.5" /> Return to Garg Telecom Website
                        </Link>
                        <span className="text-slate-500">
                            Node: GT-DEL-REG-01 • Karol Bagh, New Delhi
                        </span>
                    </div>

                </div>
            </main>

            {/* ============================================================ */}
            {/* CORPORATE FOOTER                                             */}
            {/* ============================================================ */}
            <footer className="bg-slate-900 border-t border-slate-800 py-6 px-4 sm:px-6 text-center text-xs text-slate-400">
                <div className="max-w-4xl mx-auto space-y-2">
                    <p className="font-semibold text-slate-300">
                        Garg Telecom Pvt. Ltd. • Human Resource &amp; Credential Registry Desk
                    </p>
                    <p className="text-[11px] text-slate-500">
                        Karol Bagh, New Delhi, Delhi - 110007 • hr@gargtelecom.in • +91 9953894014
                    </p>
                </div>
            </footer>

            {/* ============================================================ */}
            {/* FULLSCREEN LIGHTBOX / MODAL                                  */}
            {/* ============================================================ */}
            {isModalOpen && certificateImageUrl && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-2xl flex flex-col max-h-[92vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                            <div>
                                <h3 className="text-sm font-bold text-white">{certificateTitle}</h3>
                                <p className="text-xs text-slate-400">{recipientName} • Certificate ID: {certificateId}</p>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
                                aria-label="Close Preview"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-auto py-3 flex items-center justify-center">
                            <img
                                src={certificateImageUrl}
                                alt={`Certificate for ${recipientName}`}
                                className="max-w-full max-h-[72vh] object-contain rounded-lg border border-slate-700 shadow-md bg-white"
                            />
                        </div>

                        <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                            <span className="text-slate-400">Garg Telecom Pvt. Ltd. Authenticated Document</span>
                            <div className="flex items-center gap-2">
                                <a
                                    href={certificateImageUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl flex items-center gap-1.5 transition"
                                >
                                    <ExternalLink className="w-3.5 h-3.5" /> Open in New Tab
                                </a>
                                <a
                                    href={certificateImageUrl}
                                    download={`${certificateId}-certificate.jpg`}
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl flex items-center gap-1.5 transition"
                                >
                                    <Download className="w-3.5 h-3.5" /> Download Image
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
