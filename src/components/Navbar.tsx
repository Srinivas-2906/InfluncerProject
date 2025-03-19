
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import Button from './Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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
          
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 animate-fade-in">
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
