import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8",
        isScrolled 
          ? "py-3 bg-white/80 backdrop-blur-lg shadow-sm" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-kisan-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">MK</span>
          </div>
          <span className={cn(
            "font-display font-bold text-xl transition-colors duration-300",
            isScrolled ? "text-kisan-900" : "text-kisan-900"
          )}>
            Modern Kisan
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks isScrolled={isScrolled} />
          <LanguageSelector />
          <button className="btn-primary h-10 px-5">
            Start Learning
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-kisan-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 py-6 flex flex-col gap-6">
          <MobileNavLinks setIsOpen={setIsOpen} />
          <div className="py-2">
            <LanguageSelector />
          </div>
          <button 
            className="btn-primary w-full"
            onClick={() => setIsOpen(false)}
          >
            Start Learning
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLinks = ({ isScrolled }: { isScrolled: boolean }) => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '#masterclasses' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'About Us', href: '#company' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Partners', href: '#partners' }
  ];

  return (
    <>
      {links.map((link) => (
        <a 
          key={link.name}
          href={link.href}
          className={cn(
            "font-medium transition-colors duration-300 hover:text-kisan-500",
            isScrolled ? "text-kisan-900" : "text-kisan-900"
          )}
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

const MobileNavLinks = ({ setIsOpen }: { setIsOpen: (value: boolean) => void }) => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '#masterclasses' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'About Us', href: '#company' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Partners', href: '#partners' }
  ];

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {links.map((link) => (
        <a 
          key={link.name}
          href={link.href}
          className="font-medium text-kisan-900 transition-colors hover:text-kisan-500 py-2"
          onClick={handleClick}
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

export default Navbar;
