import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const getNavLinkClass = (path: string) => {
    return `${location.pathname === path ? 'text-primary-600 font-semibold' : 'text-neutral-700 hover:text-primary-600'} transition-colors px-3 py-2`;
  };

  const getSiteName = () => {
    if (location.pathname.includes('/elearning')) return 'Plateforme E-Learning';
    if (location.pathname.includes('/marketplace')) return 'Marketplace Agricole';
    return 'CIAPO COOP-CA';
  };

  const getHeaderBg = () => {
    if (location.pathname.includes('/elearning')) 
      return scrolled ? 'bg-white shadow-md' : 'bg-transparent';
    if (location.pathname.includes('/marketplace')) 
      return scrolled ? 'bg-white shadow-md' : 'bg-transparent';
    return scrolled ? 'bg-white shadow-md' : 'bg-transparent';
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderBg()}`}>
      <div className="container-custom py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Logo />
              <div className="ml-3">
                <span className="block font-heading font-bold text-xl">{getSiteName()}</span>
                <span className="text-xs text-neutral-500">Entrepreneuriat & Formation Agricole</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <ul className="flex space-x-1">
              <li><Link to="/" className={getNavLinkClass('/')}>Accueil</Link></li>
              <li><Link to="/programs" className={getNavLinkClass('/programs')}>Nos Services</Link></li>
              <li><Link to="/news" className={getNavLinkClass('/news')}>Actualités</Link></li>
              <li><Link to="/about" className={getNavLinkClass('/about')}>À Propos</Link></li>
              <li><Link to="/contact" className={getNavLinkClass('/contact')}>Contact</Link></li>
            </ul>

            <div className="border-l border-neutral-200 h-6 mx-2"></div>
            
            <div className="flex space-x-2">
              {/* <Link to="/elearning" className="button-outline text-sm py-2 px-4">E-Learning</Link> */}
              <Link to="/marketplace" className="button-primary text-sm py-2 px-4">Marketplace</Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 rounded-md text-neutral-700 hover:bg-neutral-100"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg py-4 px-6 absolute w-full">
          <ul className="space-y-4">
            <li><Link to="/" className={`block ${getNavLinkClass('/')}`}>Accueil</Link></li>
            <li><Link to="/programs" className={`block ${getNavLinkClass('/programs')}`}>Nos Programmes</Link></li>
            <li><Link to="/news" className={`block ${getNavLinkClass('/news')}`}>Actualités</Link></li>
            <li><Link to="/about" className={`block ${getNavLinkClass('/about')}`}>À Propos</Link></li>
            <li><Link to="/contact" className={`block ${getNavLinkClass('/contact')}`}>Contact</Link></li>
            
            <li className="pt-2 border-t border-neutral-200">
              <Link to="/elearning" className="block button-outline text-center mb-2">E-Learning</Link>
            </li>
            <li>
              <Link to="/marketplace" className="block button-primary text-center">Marketplace</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;