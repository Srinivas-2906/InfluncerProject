
import React from 'react';
import { cn } from "@/lib/utils";

interface InfluencerCardProps {
  name: string;
  username: string;
  avatar: string;
  category: string;
  followers: string;
  engagement: string;
  price: string;
  className?: string;
  variant?: 'default' | 'featured';
}

const InfluencerCard = ({
  name,
  username,
  avatar,
  category,
  followers,
  engagement,
  price,
  className,
  variant = 'default'
}: InfluencerCardProps) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-2xl transition-all duration-300",
        variant === 'default' 
          ? "w-[280px] h-[380px]" 
          : "w-full h-full min-h-[380px]",
        "bg-white border border-gray-100 hover:shadow-xl",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
      
      <img 
        src={avatar} 
        alt={name}
        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      
      <div className="absolute top-3 left-3 z-20">
        <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium text-gray-900">
          {category}
        </span>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transition-transform duration-300">
        <h3 className="text-lg font-medium text-white mb-1">{name}</h3>
        <p className="text-sm text-white/80 mb-3">@{username}</p>
        
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-2">
            <p className="text-xs text-white/70">Followers</p>
            <p className="text-sm font-medium text-white">{followers}</p>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-2">
            <p className="text-xs text-white/70">Engage</p>
            <p className="text-sm font-medium text-white">{engagement}</p>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-2">
            <p className="text-xs text-white/70">Price</p>
            <p className="text-sm font-medium text-white">${price}</p>
          </div>
        </div>
        
        <button className="w-full bg-white text-gray-900 rounded-full py-2 text-sm font-medium transition-all hover:bg-primary hover:text-white">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default InfluencerCard;
