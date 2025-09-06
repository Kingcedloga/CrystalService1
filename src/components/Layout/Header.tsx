import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Truck, Phone, Search } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { 
      name: 'Services', 
      href: '/services',
      submenu: [
        { name: 'Dédouanement', href: '/customs' },
        { name: 'Fret & Transport', href: '/freight' },
        { name: 'Agence de Voyage', href: '/travel' },
        { name: 'Représentation Maritime', href: '/maritime-representation' }
      ]
    },
    { name: 'Suivi', href: '/tracking' },
    { name: 'À Propos', href: '/about' },
    { name: 'Actualités', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`bg-white lg:rounded-full px-6 py-3 transition-all duration-300 ${scrolled ? 'shadow-2xl' : 'shadow-2xl'} mt-0 lg:mt-6`}>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/Logo 12.png" 
                alt="Logo"  
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation and CTA - All aligned to the right */}
            <div className="hidden lg:flex items-center space-x-6">
              <nav className="flex items-center space-x-4">
                {navigation.map((item) => ( 
                  <div key={item.name} className="relative group">
                    <Link
                      to={item.href}
                      className={cn(
                        "block px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-blue-500 hover:bg-gray-50 rounded-md whitespace-nowrap",
                        location.pathname === item.href && "text-brand-blue-500 bg-brand-blue-100",
                        item.highlight && "bg-brand-blue-100 text-brand-blue-600"
                      )}
                    > 
                      {item.name}
                    </Link>
                    
                    {item.submenu && (
                      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="py-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-blue-500"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* CTA Buttons */}
              <div className="flex items-center">
                <Button size="sm" className="rounded-full px-4 py-2 text-sm" asChild>
                  <Link to="/quote">
                    Devis gratuit
                  </Link>
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200 mt-4"
            >
              <div className="py-4 space-y-2 px-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className={cn(
                        "block px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md",
                        location.pathname === item.href && "text-blue-600 bg-blue-50",
                        item.highlight && "bg-blue-100 text-blue-700"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-brand-blue-500 hover:bg-gray-50 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                  <Button className="rounded-full" asChild>
                    <Link to="/quote">Demander un devis</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};