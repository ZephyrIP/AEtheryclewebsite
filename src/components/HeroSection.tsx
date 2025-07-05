import React from 'react';
import { ExternalLink } from 'lucide-react';

interface HeroSectionProps {
  onSectionChange: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSectionChange }) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Logo and Brand */}
          <div className="flex flex-col items-center mb-8">
            <img 
              src="/Aethercycle_AEC_Logo.png" 
              alt="AetherCycle Logo" 
              className="w-24 h-24 md:w-32 md:h-32 mb-6 opacity-90 hover:opacity-100 transition-opacity"
            />
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight">
              AUTONOMOUS
              <br />
              DEFI
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Self-sustaining protocol. No roadmap. No promises.
            <br />
            Just mathematics.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button
              onClick={() => onSectionChange('faq')}
              className="border border-gray-700 text-white px-8 py-3 font-mono text-sm hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              READ FAQ
            </button>
            
            <button
              onClick={() => onSectionChange('docs')}
              className="border border-gray-700 text-white px-8 py-3 font-mono text-sm hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              READ DOCS
              <ExternalLink size={16} />
            </button>

            <a
              href="https://app.aethercycle.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-3 font-mono text-sm hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              LAUNCH APP
            </a>
          </div>
        </div>

        <div className="mt-24 pt-16 border-t border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">888M</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Fixed Supply</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">1%</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Founder Allocation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">0</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">VC Allocation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Community</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;