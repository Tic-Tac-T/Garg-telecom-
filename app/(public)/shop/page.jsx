'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Shop() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/products');
    }, [router]);

    return (
        <div className="min-h-[50vh] flex items-center justify-center text-slate-500">
            Redirecting to Equipment Catalogue...
        </div>
    );
}