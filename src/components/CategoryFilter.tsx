
import { useState } from 'react';
import { cn } from "@/lib/utils";

// Sample data
const platforms = [
  { id: 'all', name: 'All Platforms' },
  { id: 'instagram', name: 'Instagram' },
  { id: 'tiktok', name: 'TikTok' },
  { id: 'youtube', name: 'YouTube' },
  { id: 'twitter', name: 'Twitter' }
];

const categories = [
  { id: 'all', name: 'All Categories' },
  { id: 'lifestyle', name: 'Lifestyle' },
  { id: 'fashion', name: 'Fashion' },
  { id: 'beauty', name: 'Beauty' },
  { id: 'fitness', name: 'Fitness' },
  { id: 'food', name: 'Food' },
  { id: 'travel', name: 'Travel' },
  { id: 'tech', name: 'Technology' }
];

const locations = [
  { id: 'all', name: 'All Locations' },
  { id: 'usa', name: 'United States' },
  { id: 'canada', name: 'Canada' },
  { id: 'uk', name: 'United Kingdom' },
  { id: 'australia', name: 'Australia' }
];

const CategoryFilter = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  
  return (
    <section className="py-4 md:py-8">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Browse Creators</h2>
          <p className="text-muted-foreground mt-1">Filter by platform, category, and location</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Platform</label>
            <div className="scroll-container pb-2">
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  onClick={() => setSelectedPlatform(platform.id)}
                  className={cn(
                    "scroll-item whitespace-nowrap px-4 py-2 rounded-full text-sm transition-all",
                    selectedPlatform === platform.id
                      ? "bg-primary text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  )}
                >
                  {platform.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Category</label>
            <div className="scroll-container pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn(
                    "scroll-item whitespace-nowrap px-4 py-2 rounded-full text-sm transition-all",
                    selectedCategory === category.id
                      ? "bg-primary text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  )}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Location</label>
            <div className="scroll-container pb-2">
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => setSelectedLocation(location.id)}
                  className={cn(
                    "scroll-item whitespace-nowrap px-4 py-2 rounded-full text-sm transition-all",
                    selectedLocation === location.id
                      ? "bg-primary text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  )}
                >
                  {location.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
