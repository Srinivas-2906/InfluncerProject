
import InfluencerCard from './InfluencerCard';

// Sample data for featured influencers
const featuredInfluencers = [
  {
    id: 1,
    name: 'Jennifer Lopez',
    username: 'jenniferlopez',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Celebrity',
    followers: '2.8M',
    engagement: '6.5%',
    price: '5000'
  },
  {
    id: 2,
    name: 'Alex Morgan',
    username: 'alexmorgan',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Sports',
    followers: '1.4M',
    engagement: '4.2%',
    price: '2500'
  },
  {
    id: 3,
    name: 'Nina Williams',
    username: 'ninaw',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Fashion',
    followers: '950K',
    engagement: '5.1%',
    price: '1800'
  },
  {
    id: 4,
    name: 'Mark Johnson',
    username: 'markj',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Business',
    followers: '680K',
    engagement: '3.8%',
    price: '1200'
  },
  {
    id: 5,
    name: 'Sophia Chen',
    username: 'sophiac',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Lifestyle',
    followers: '520K',
    engagement: '4.5%',
    price: '900'
  },
  {
    id: 6,
    name: 'Carlos Rivera',
    username: 'carlosr',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Travel',
    followers: '780K',
    engagement: '3.9%',
    price: '1500'
  }
];

const FeaturedInfluencers = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Featured Influencers</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Connect with our top performing creators who deliver exceptional results for brands
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredInfluencers.map((influencer) => (
            <InfluencerCard
              key={influencer.id}
              name={influencer.name}
              username={influencer.username}
              avatar={influencer.avatar}
              category={influencer.category}
              followers={influencer.followers}
              engagement={influencer.engagement}
              price={influencer.price}
              variant="featured"
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="inline-flex items-center text-primary font-medium hover:underline">
            View all influencers
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInfluencers;
