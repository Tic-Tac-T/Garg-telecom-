import React from 'react';
import CertificateVerifier from '@/components/certificates/CertificateVerifier';

export const metadata = {
    title: 'Certificate Verification | Garg Telecom Pvt. Ltd.',
    description: 'Official credential verification portal for Garg Telecom Pvt. Ltd.',
    robots: {
        index: false,
        follow: false,
        noarchive: true,
        nocache: true,
        googleBot: {
            index: false,
            follow: false,
            noarchive: true,
            noimageindex: true
        }
    }
};

export default async function VerifyCertificatePage({ params }) {
    // In Next.js 15, params is a Promise that must be awaited
    const resolvedParams = await params;
    const token = resolvedParams?.token || '';

    return <CertificateVerifier token={token} />;
}
