import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-lg'
    }`}>
      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center animate-fade-in">
            <a href="#home">
              <img 
                src="/imagee.jpg" 
                alt="Cold Frost Logo" 
                className="h-12 w-auto hover:scale-105 transition-transform duration-300" 
              />
            </a>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Services', 'About', 'Equipment', 'Contact'].map((item, index) => (
              <a 
                key={item}
                href={item === 'Equipment' ? '#solutions' : `#${item.toLowerCase()}`} 
                className="text-gray-700 hover:text-teal-600 font-medium transition-all duration-300 relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            <a 
              href="#contact" 
              className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-lg"
            >
              Get Quote
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-teal-600 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-slide-down">
            <nav className="flex flex-col space-y-4">
              {['Home', 'Services', 'About', 'Equipment', 'Contact'].map((item, index) => (
                <a 
                  key={item}
                  href={item === 'Equipment' ? '#solutions' : `#${item.toLowerCase()}`} 
                  className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-all duration-300 font-medium w-fit transform hover:scale-105"
              >
                Get Quote
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;