import React from 'react';
import { Shield, Eye, Lock, Users } from 'lucide-react';

const PrivacySection: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">PRIVACY POLICY</h2>
          <p className="text-xl text-gray-300">
            Your privacy is fundamental to our autonomous protocol. We believe in 
            minimal data collection and maximum transparency.
          </p>
        </div>

        <div className="space-y-12">
          {/* What We Don't Collect */}
          <div className="border border-gray-700 bg-gray-900 p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <Shield className="mr-3 text-red-400" size={24} />
              <h3 className="text-2xl font-bold">WHAT WE DON'T COLLECT</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Personal information
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Email addresses
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                IP tracking or analytics
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Browsing behavior
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Marketing data
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Usage statistics
              </li>
            </ul>
          </div>

          {/* What We Actually Use */}
          <div className="border border-gray-700 bg-gray-900 p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <Eye className="mr-3 text-green-400" size={24} />
              <h3 className="text-2xl font-bold">WHAT WE ACTUALLY USE</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Wallet address (for protocol interactions only)
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Optional Twitter connection (for mission verification)
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Optional Discord connection (for mission verification)
              </li>
            </ul>
          </div>

          {/* Why It's This Simple */}
          <div className="border border-gray-700 bg-gray-900 p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <Lock className="mr-3 text-blue-400" size={24} />
              <h3 className="text-2xl font-bold">WHY IT'S THIS SIMPLE</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Autonomous protocol requires no user data
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Everything happens on-chain via blockchain
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                No tracking needed - mathematics, not analytics
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Decentralized by design with no central database
              </li>
            </ul>
          </div>

          {/* Your Control */}
          <div className="border border-gray-700 bg-gray-900 p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <Users className="mr-3 text-yellow-400" size={24} />
              <h3 className="text-2xl font-bold">YOUR CONTROL</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Connect/disconnect wallet anytime
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Remove social connections anytime
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                All protocol interactions are voluntary
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Blockchain transactions are inherently public
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="border border-gray-700 bg-gray-900 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-6">CONTACT</h3>
            <p className="text-gray-300 mb-4">
              Privacy questions: <span className="font-mono text-white">aethercycle@gmail.com</span>
            </p>
            <p className="text-sm text-gray-400">
              Last updated: {currentDate}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;