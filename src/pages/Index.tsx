
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CategoryFilter from '@/components/CategoryFilter';
import InfluencerCarousel from '@/components/InfluencerCarousel';
import FeaturedInfluencers from '@/components/FeaturedInfluencers';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <CategoryFilter />
        <InfluencerCarousel />
        <FeaturedInfluencers />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
