
import React from 'react';
import Button from './Button';

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-40 md:pb-20">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="space-y-4 text-reveal">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight md:leading-tight">
              Discover and Collaborate with <span className="text-primary">Top Influencers</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto text-balance">
              Find the perfect creators for your brand collaborations and marketing campaigns
            </p>
          </div>
          
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="w-full sm:w-auto">
              Find Creators
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Join as Creator
            </Button>
          </div>
          
          <div className="mt-10 md:mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className="text-sm text-gray-500 mb-4">Trusted by leading brands worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <img src="https://raw.githubusercontent.com/cruip/cruip-com/main/public/showcase-assets/logos/nike.svg" alt="Nike" className="h-5 md:h-7" />
              <img src="https://raw.githubusercontent.com/cruip/cruip-com/main/public/showcase-assets/logos/samsung.svg" alt="Samsung" className="h-5 md:h-7" />
              <img src="https://raw.githubusercontent.com/cruip/cruip-com/main/public/showcase-assets/logos/spotify.svg" alt="Spotify" className="h-5 md:h-7" />
              <img src="https://raw.githubusercontent.com/cruip/cruip-com/main/public/showcase-assets/logos/airbnb.svg" alt="Airbnb" className="h-5 md:h-7" />
              <img src="https://raw.githubusercontent.com/cruip/cruip-com/main/public/showcase-assets/logos/amazon.svg" alt="Amazon" className="h-5 md:h-7" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
