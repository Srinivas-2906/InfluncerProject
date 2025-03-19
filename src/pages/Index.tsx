
import React from 'react';
import Navbar from '@/components/Navbar';
import MobileNavbar from '@/components/MobileNavbar';
import HeroSection from '@/components/HeroSection';
import CategoryFilter from '@/components/CategoryFilter';
import InfluencerCarousel from '@/components/InfluencerCarousel';
import FeaturedInfluencers from '@/components/FeaturedInfluencers';
import Footer from '@/components/Footer';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className={isMobile ? "pb-16" : ""}>
        <HeroSection />
        <CategoryFilter />
        <InfluencerCarousel />
        <FeaturedInfluencers />
      </main>
      <Footer />
      <MobileNavbar />
    </div>
  );
};

export default Index;
