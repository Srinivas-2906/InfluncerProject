
import React from 'react';
import { Home, Search, PlusCircle, Heart, User } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const MobileNavbar = () => {
  const isMobile = useIsMobile();
  
  if (!isMobile) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-sm">
      <div className="flex items-center justify-around h-16">
        <NavItem icon={<Home className="w-6 h-6" />} label="Home" isActive />
        <NavItem icon={<Search className="w-6 h-6" />} label="Discover" />
        <NavItem icon={<PlusCircle className="w-6 h-6" />} label="Create" />
        <NavItem icon={<Heart className="w-6 h-6" />} label="Saved" />
        <NavItem icon={<User className="w-6 h-6" />} label="Profile" />
      </div>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const NavItem = ({ icon, label, isActive = false }: NavItemProps) => {
  return (
    <button className="flex flex-col items-center justify-center w-full h-full">
      <div className={cn(
        "flex flex-col items-center justify-center",
        isActive ? "text-primary" : "text-gray-500"
      )}>
        {icon}
        <span className="mt-1 text-xs font-medium">{label}</span>
      </div>
    </button>
  );
};

export default MobileNavbar;
