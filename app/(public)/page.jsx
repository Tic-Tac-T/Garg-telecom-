'use client';

import React from 'react';
import Hero from '@/components/Hero';
import CategoriesSection from '@/components/CategoriesSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import BusinessSolutionsSection from '@/components/BusinessSolutionsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import BrandsSection from '@/components/BrandsSection';
import CompanyStats from '@/components/CompanyStats';
import KarolBaghSpotlight from '@/components/KarolBaghSpotlight';
import PreFooterCTA from '@/components/PreFooterCTA';

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* 1. Hero Section with business messaging & visual hub */}
            <Hero />

            {/* 2. Product Categories Showcase Cards */}
            <CategoriesSection />

            {/* 3. Featured Products with quick specs & quote requests */}
            <FeaturedProducts />

            {/* 4. Business Solutions Grid (Home, Office, Retail, Corporate, Warehouse) */}
            <BusinessSolutionsSection />

            {/* 5. Why Choose Garg Telecom */}
            <WhyChooseUs />

            {/* 6. Brands We Deal With */}
            <BrandsSection />

            {/* 7. Animated Company Statistics */}
            <CompanyStats />

            {/* 8. Karol Bagh Dealership & Leadership Spotlight */}
            <KarolBaghSpotlight />

            {/* 9. Pre-Footer Big CTA */}
            <PreFooterCTA />
        </main>
    );
}
