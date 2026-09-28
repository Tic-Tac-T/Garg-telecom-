'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Cart() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/quote');
    }, [router]);

    return (
        <div className="min-h-[50vh] flex items-center justify-center text-slate-500">
            Redirecting to Quotation / RFQ Cart...
        </div>
    );
}