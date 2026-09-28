'use client';

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { PRODUCTS } from '@/data/products';

export default function LegacyProductRedirect() {
    const { productId } = useParams();
    const router = useRouter();

    useEffect(() => {
        const found = PRODUCTS.find(p => p.id === productId || p.slug === productId);
        if (found) {
            router.replace(`/products/${found.slug}`);
        } else {
            router.replace('/products');
        }
    }, [productId, router]);

    return (
        <div className="min-h-[50vh] flex items-center justify-center text-slate-500">
            Loading equipment details...
        </div>
    );
}