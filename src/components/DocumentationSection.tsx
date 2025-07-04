import React from 'react';
import { BookOpen, FileText, ExternalLink, Download } from 'lucide-react';

const DocumentationSection: React.FC = () => {
  const docCategories = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      items: [
        { name: 'Protocol Overview', description: 'Understanding AEC fundamentals' },
        { name: 'Quick Start Guide', description: 'Begin using AEC in 5 minutes' },
        { name: 'Token Economics', description: 'Mathematical model explained' },
        { name: 'Security Model', description: 'Immutable architecture details' },
      ]
    },
    {
      title: 'Technical Documentation',
      icon: FileText,
      items: [
        { name: 'Smart Contract Specification', description: 'Complete contract interfaces' },
        { name: 'PerpetualEngine Mechanics', description: 'Autonomous mechanism details' },
        { name: 'Mathematical Proofs', description: 'Sustainability calculations' },
        { name: 'Audit Reports', description: 'Security verification results' },
      ]
    },
    {
      title: 'Research & Analysis',
      icon: FileText,
      items: [
        { name: 'Whitepaper v2.0', description: 'Complete protocol specification' },
        { name: 'Economic Analysis', description: 'Sustainability mathematics' },
        { name: 'Risk Assessment', description: 'Comprehensive risk analysis' },
        { name: 'Regulatory Resistance', description: 'Decentralization analysis' },
      ]
    }
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">DOCUMENTATION</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete technical documentation and research papers for the AEC protocol.
            Mathematics, not marketing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {docCategories.map((category, index) => (
            <div key={index} className="border border-gray-700 bg-gray-900 p-8">
              <div className="flex items-center mb-6">
                <category.icon className="mr-3" size={24} />
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="group cursor-pointer">
                    <div className="flex items-center justify-between p-3 hover:bg-gray-800 transition-colors">
                      <div>
                        <h4 className="font-mono text-sm font-medium group-hover:text-white">
                          {item.name}
                        </h4>
                        <p className="text-xs text-gray-400 mt-1">{item.description}</p>
                      </div>
                      <ExternalLink size={16} className="text-gray-400 group-hover:text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 border border-gray-700 bg-gray-900">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Download Complete Documentation</h3>
              <p className="text-gray-300">
                Get the full technical specification, whitepaper, and implementation guide.
              </p>
            </div>
            <button className="mt-4 md:mt-0 bg-white text-black px-6 py-3 font-mono text-sm hover:bg-gray-200 transition-colors flex items-center gap-2">
              <Download size={16} />
              DOWNLOAD PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentationSection;