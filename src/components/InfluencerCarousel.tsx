
import { useRef, useEffect, useState } from 'react';
import InfluencerCard from './InfluencerCard';
import { useIsMobile } from '@/hooks/use-mobile';

// Sample data
const influencers = [
  {
    id: 1,
    name: 'Ashley Williams',
    username: 'ashleyw',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Lifestyle',
    followers: '452K',
    engagement: '3.2%',
    price: '350'
  },
  {
    id: 2,
    name: 'Michael Chen',
    username: 'mikechen',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Technology',
    followers: '1.2M',
    engagement: '2.8%',
    price: '800'
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    username: 'sarahj',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Fashion',
    followers: '680K',
    engagement: '4.1%',
    price: '500'
  },
  {
    id: 4,
    name: 'David Kim',
    username: 'davidk',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Fitness',
    followers: '320K',
    engagement: '5.0%',
    price: '250'
  },
  {
    id: 5,
    name: 'Emma Wilson',
    username: 'emmaw',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Beauty',
    followers: '890K',
    engagement: '3.7%',
    price: '650'
  },
  {
    id: 6,
    name: 'James Rodriguez',
    username: 'jamesr',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Travel',
    followers: '760K',
    engagement: '2.9%',
    price: '420'
  }
];

const InfluencerCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const updateScrollMeasurements = () => {
      if (scrollRef.current) {
        setMaxScroll(scrollRef.current.scrollWidth - scrollRef.current.clientWidth);
      }
    };
    
    updateScrollMeasurements();
    window.addEventListener('resize', updateScrollMeasurements);
    
    return () => window.removeEventListener('resize', updateScrollMeasurements);
  }, []);
  
  const handleScroll = () => {
    if (scrollRef.current) {
      setScrollPosition(scrollRef.current.scrollLeft);
    }
  };
  
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Popular Influencers</h2>
            <p className="text-muted-foreground mt-2">Discover trending creators across all platforms</p>
          </div>
          
          {!isMobile && (
            <div className="hidden md:flex items-center space-x-2">
              <button 
                onClick={scrollLeft}
                disabled={scrollPosition <= 5}
                className="p-2 rounded-full border bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-40 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button 
                onClick={scrollRight}
                disabled={scrollPosition >= maxScroll - 5}
                className="p-2 rounded-full border bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-40 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          )}
        </div>
        
        <div className="relative">
          <div
            ref={scrollRef}
            className="scroll-container"
            onScroll={handleScroll}
          >
            {influencers.map((influencer) => (
              <div key={influencer.id} className="scroll-item">
                <InfluencerCard
                  name={influencer.name}
                  username={influencer.username}
                  avatar={influencer.avatar}
                  category={influencer.category}
                  followers={influencer.followers}
                  engagement={influencer.engagement}
                  price={influencer.price}
                />
              </div>
            ))}
          </div>
          
          {isMobile && (
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: Math.ceil(influencers.length / 2) }).map((_, i) => (
                <span 
                  key={i}
                  className={`block h-1.5 rounded-full transition-all duration-300 ${
                    i === Math.floor(scrollPosition / (300 * 2)) 
                      ? "w-6 bg-primary" 
                      : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InfluencerCarousel;
