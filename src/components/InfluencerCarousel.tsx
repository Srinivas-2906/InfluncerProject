
import { useRef, useEffect, useState } from 'react';
import InfluencerCard from './InfluencerCard';
import { useIsMobile } from '@/hooks/use-mobile';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

// Improved influencer data with real images
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
  },
  {
    id: 7,
    name: 'Sophia Lee',
    username: 'sophial',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Food',
    followers: '510K',
    engagement: '4.5%',
    price: '380'
  },
  {
    id: 8,
    name: 'Marcus Johnson',
    username: 'marcusj',
    avatar: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Gaming',
    followers: '920K',
    engagement: '3.4%',
    price: '700'
  }
];

const InfluencerCarousel = () => {
  const isMobile = useIsMobile();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  
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
  
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Popular Influencers</h2>
            <p className="text-muted-foreground mt-2">Discover trending creators across all platforms</p>
          </div>
        </div>
        
        {isMobile ? (
          // Mobile horizontal scroll view
          <div className="relative -mx-4">
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto px-4 pb-6 snap-x snap-mandatory scrollbar-hide"
              onScroll={handleScroll}
            >
              {influencers.map((influencer) => (
                <div 
                  key={influencer.id} 
                  className="snap-start flex-shrink-0 first:pl-4 last:pr-4"
                >
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
            
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: Math.ceil(influencers.length / 2) }).map((_, i) => (
                <span 
                  key={i}
                  className={cn(
                    "block h-1.5 rounded-full transition-all duration-300",
                    i === Math.floor(scrollPosition / (300 * 2)) 
                      ? "w-6 bg-primary" 
                      : "w-2 bg-gray-300"
                  )}
                />
              ))}
            </div>
          </div>
        ) : (
          // Desktop carousel using shadcn/ui carousel component
          <Carousel className="w-full">
            <CarouselContent>
              {influencers.map((influencer) => (
                <CarouselItem key={influencer.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <InfluencerCard
                    name={influencer.name}
                    username={influencer.username}
                    avatar={influencer.avatar}
                    category={influencer.category}
                    followers={influencer.followers}
                    engagement={influencer.engagement}
                    price={influencer.price}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex justify-end gap-2 mt-4">
              <CarouselPrevious className="static transform-none" />
              <CarouselNext className="static transform-none" />
            </div>
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default InfluencerCarousel;
