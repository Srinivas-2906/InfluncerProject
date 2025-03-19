
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import Button from './Button';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6",
      isScrolled ? "py-3 glass shadow-sm" : "py-5 bg-transparent"
    )}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold tracking-tight">
            Collabstr
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium link-hover">Find Creators</a>
            <a href="#" className="text-sm font-medium link-hover">Pricing</a>
            <a href="#" className="text-sm font-medium link-hover">How It Works</a>
            <a href="#" className="text-sm font-medium link-hover">Join as Creator</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">
              Get Started
            </Button>
          </div>
          
          {isMobile && (
            <button 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          )}
        </div>
        
        {isMobile && isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 animate-fade-in bg-white rounded-xl shadow-lg p-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-sm font-medium py-2">Find Creators</a>
              <a href="#" className="text-sm font-medium py-2">Pricing</a>
              <a href="#" className="text-sm font-medium py-2">How It Works</a>
              <a href="#" className="text-sm font-medium py-2">Join as Creator</a>
            </nav>
            <div className="flex flex-col space-y-3 mt-4 pt-4 border-t">
              <Button variant="outline" fullWidth>
                Sign In
              </Button>
              <Button fullWidth>
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
