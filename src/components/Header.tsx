import React, { useState } from 'react';
import { Menu, X, FileText, Shield, Users, HelpCircle, BookOpen, Calculator } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onSectionChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: null },
    { id: 'docs', label: 'Documentation', icon: BookOpen },
    { id: 'tokenomics', label: 'Token Economics', icon: Calculator },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'whitepaper', label: 'Whitepaper', icon: FileText },
    { id: 'community', label: 'Community', icon: Users },
  ];

  return (
    <header className="border-b border-gray-700 bg-black sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={() => onSectionChange('home')}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img 
                src="/Aethercycle_AEC_Logo.png" 
                alt="AEC Logo" 
                className="w-8 h-8 mr-3"
              />
              <span className="text-2xl font-bold tracking-wider text-white">
                AEC
              </span>
            </button>
            <span className="ml-4 text-sm text-gray-400 hidden sm:block">
              BASE NETWORK • IMMUTABLE
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  activeSection === item.id ? 'text-white' : 'text-gray-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2 text-sm font-medium transition-colors hover:text-white ${
                    activeSection === item.id ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  <div className="flex items-center">
                    {item.icon && <item.icon size={16} className="mr-2" />}
                    {item.label}
                  </div>
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;