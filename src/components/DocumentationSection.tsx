import React, { useState } from 'react';
import { 
  BookOpen, 
  FileText, 
  Zap, 
  Calculator, 
  Shield, 
  Users, 
  ChevronRight,
  Clock,
  CheckCircle,
  AlertTriangle,
  Info,
  ExternalLink,
  Copy,
  TrendingUp,
  Lock,
  Coins,
  Target
} from 'lucide-react';

const DocumentationSection: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'Protocol Overview', icon: BookOpen },
    { id: 'quickstart', label: 'Quick Start Guide', icon: Zap },
    { id: 'tokenomics', label: 'Token Economics', icon: Calculator },
    { id: 'staking', label: 'Staking Guide', icon: Lock },
    { id: 'security', label: 'Security Model', icon: Shield },
    { id: 'governance', label: 'Governance', icon: Users }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-gray-700 pb-8">
        <h1 className="text-4xl font-bold mb-4">AetherCycle Protocol Overview</h1>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-bold mb-2 text-blue-400">Protocol Details</h3>
            <ul className="space-y-1 text-gray-300">
              <li><span className="text-gray-400">Type:</span> Autonomous DeFi Protocol</li>
              <li><span className="text-gray-400">Version:</span> 1.0</li>
              <li><span className="text-gray-400">Network:</span> Base (Ethereum Layer 2)</li>
              <li><span className="text-gray-400">Total Supply:</span> 888,888,888 AEC (Fixed)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-green-400">Publication Info</h3>
            <ul className="space-y-1 text-gray-300">
              <li><span className="text-gray-400">Publication Date:</span> July 2025</li>
              <li><span className="text-gray-400">Last Updated:</span> July 4, 2025</li>
              <li><span className="text-gray-400">Status:</span> Live on Base Network</li>
            </ul>
          </div>
        </div>
      </div>

      {/* What is AetherCycle */}
      <div>
        <h2 className="text-2xl font-bold mb-6">What is AetherCycle?</h2>
        
        <div className="bg-red-900/20 border border-red-700 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold text-red-400 mb-4">The Problem with Modern DeFi</h3>
          <p className="text-gray-300 mb-4">
            The decentralized finance ecosystem faces fundamental sustainability challenges that have led to the failure of countless protocols:
          </p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-start">
              <AlertTriangle size={16} className="mr-2 text-red-400 mt-1 flex-shrink-0" />
              <span><strong>Yield Locusts:</strong> Users farm high APY rewards temporarily, dump tokens, and leave when emissions end</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle size={16} className="mr-2 text-red-400 mt-1 flex-shrink-0" />
              <span><strong>Founder Risk:</strong> Teams typically hold 20-30% allocations with short vesting periods, creating constant sell pressure</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle size={16} className="mr-2 text-red-400 mt-1 flex-shrink-0" />
              <span><strong>Governance Capture:</strong> Multisig controls and whale dominance undermine true decentralization</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle size={16} className="mr-2 text-red-400 mt-1 flex-shrink-0" />
              <span><strong>Growth Dependency:</strong> Unsustainable tokenomics requiring infinite user growth to maintain operations</span>
            </li>
          </ul>
          <p className="text-red-300 mt-4 font-medium">
            Most DeFi protocols die within 6-24 months when their growth assumptions prove incorrect and token emissions end.
          </p>
        </div>

        <div className="bg-green-900/20 border border-green-700 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold text-green-400 mb-4">The AetherCycle Solution</h3>
          <p className="text-gray-300 mb-4">
            AetherCycle introduces <strong>Autonomous Finance (AutonoFi)</strong> - a new category of DeFi protocols that operate independently of human intervention through mathematical sustainability guarantees.
          </p>
          <div className="bg-green-800/20 p-4 rounded border-l-4 border-green-400">
            <p className="text-green-200 font-medium">
              <strong>Core Innovation:</strong> Instead of relying on promises, roadmaps, or continuous growth, AEC delivers a complete, working autonomous system that operates through pure mathematics.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h4 className="font-bold text-red-400 mb-4">Traditional DeFi</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Promises future features via roadmaps</li>
              <li>• Depends on team execution and funding</li>
              <li>• High founder allocations (20-30%)</li>
              <li>• Governance can modify core parameters</li>
              <li>• Success depends on speculation and hype</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h4 className="font-bold text-green-400 mb-4">AetherCycle</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Everything exists at genesis - no roadmap needed</li>
              <li>• Operates autonomously through smart contracts</li>
              <li>• Minimal founder allocation (1%) with community control</li>
              <li>• Immutable core parameters - no governance corruption</li>
              <li>• Success depends on mathematical sustainability</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Core Concepts */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Core Concepts</h2>
        
        <div className="space-y-6">
          <div className="bg-blue-900/20 border border-blue-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center">
              <Shield className="mr-2" size={20} />
              Pure Protocol Architecture
            </h3>
            <p className="text-gray-300 mb-4">AetherCycle embodies the "Pure Protocol" design philosophy:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" /><strong>Immutable Core:</strong> All essential parameters locked permanently at deployment</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" /><strong>No Admin Keys:</strong> No human can pause, modify, or control core functions</li>
              </ul>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" /><strong>Complete at Launch:</strong> Every feature works from day one - no future development required</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" /><strong>Community Operated:</strong> Protocol maintenance performed by community incentives</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-900/20 border border-purple-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center">
              <Calculator className="mr-2" size={20} />
              Mathematical Endowment System
            </h3>
            <p className="text-gray-300 mb-4">The protocol's sustainability foundation is a Mathematical Endowment comprising 35% of total supply (311,111,111 AEC):</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2 text-purple-300">Core Parameters</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li><span className="text-purple-400">Purpose:</span> Provides guaranteed baseline funding independent of market conditions</li>
                  <li><span className="text-purple-400">Release Mechanism:</span> 0.5% of remaining balance released monthly</li>
                  <li><span className="text-purple-400">Duration:</span> Infinite - mathematical proof ensures perpetual operation</li>
                  <li><span className="text-purple-400">Control:</span> Fully automated smart contract - no human access</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-purple-300">Example Timeline</h4>
                <div className="bg-gray-900 p-3 rounded text-xs font-mono">
                  <div>Month 1: Release 1,555,556 AEC</div>
                  <div>Month 12: Release 1,464,912 AEC</div>
                  <div>Month 60: Release 1,211,904 AEC</div>
                  <div>Month 120: Release 979,851 AEC</div>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  The endowment ensures protocol operation even during extended bear markets or low user activity.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-900/20 border border-yellow-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-yellow-400 mb-4 flex items-center">
              <Zap className="mr-2" size={20} />
              PerpetualEngine - Autonomous Economic Processor
            </h3>
            <p className="text-gray-300 mb-4">The PerpetualEngine is AEC's autonomous economic heart that processes all protocol revenue:</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-2 text-yellow-300">Revenue Sources</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Transaction taxes (2-12.5% depending on trading route)</li>
                  <li>• LP staking yields from protocol-owned liquidity</li>
                  <li>• Monthly endowment releases</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-yellow-300">Automated Distribution</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• <span className="text-red-400">20% Burn:</span> Permanent supply reduction</li>
                  <li>• <span className="text-blue-400">40% Liquidity:</span> Automated LP provision to strengthen ecosystem</li>
                  <li>• <span className="text-green-400">40% Rewards:</span> Distribution to all staking participants</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-yellow-300">Community Operation</h4>
                <p className="text-sm text-gray-300">
                  Anyone can trigger processing cycles and earn 0.1% of processed revenue as incentive.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-900/20 border border-green-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center">
              <Users className="mr-2" size={20} />
              Community Control Framework
            </h3>
            <p className="text-gray-300 mb-4">AetherCycle implements unprecedented community control over founder compensation:</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-2 text-green-300">Founder Allocation</h4>
                <p className="text-sm text-gray-300">Only 1% of total supply (vs industry average 20-30%)</p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-green-300">Vesting Period</h4>
                <p className="text-sm text-gray-300">5-year cliff (no gradual releases)</p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-green-300">Community Powers</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• <strong>Extend Vesting:</strong> DAO can vote to extend founder vesting up to 2 additional years</li>
                  <li>• <strong>Burn Allocation:</strong> DAO can permanently destroy founder tokens for poor performance</li>
                </ul>
              </div>
            </div>
            <p className="text-green-200 mt-4 font-medium">
              This creates the strongest accountability mechanism ever deployed in DeFi.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div>
        <h2 className="text-2xl font-bold mb-6">How It Works</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Target className="mr-2 text-orange-400" size={20} />
              Transaction Tax System - "Tolerant Fortress"
            </h3>
            <p className="text-gray-300 mb-4">AetherCycle implements a three-tier tax system that protects the ecosystem while remaining permissionless:</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-900/20 border border-green-700 p-4 rounded">
                <h4 className="font-bold text-green-400 mb-2">Tier 1: Tax-Free Zones</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Wallet-to-wallet transfers: 0% tax</li>
                  <li>• Staking contract interactions: 0% tax</li>
                  <li>• Protocol infrastructure: 0% tax</li>
                </ul>
              </div>
              <div className="bg-yellow-900/20 border border-yellow-700 p-4 rounded">
                <h4 className="font-bold text-yellow-400 mb-2">Tier 2: Official Markets</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Uniswap V2 AEC/USDC pair: 2-2.5% tax</li>
                  <li>• Approved contract interactions: 2.5% tax</li>
                </ul>
              </div>
              <div className="bg-red-900/20 border border-red-700 p-4 rounded">
                <h4 className="font-bold text-red-400 mb-2">Tier 3: Unofficial Routes</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Unknown smart contracts: 10% tax</li>
                  <li>• Automated trading systems: 12.5% tax</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-300 mt-4">
              This system encourages liquidity concentration while capturing value from arbitrage and MEV activities.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Revenue Processing Cycle</h3>
            <p className="text-gray-300 mb-4">The PerpetualEngine processes accumulated revenue through the following automated cycle:</p>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: 1, title: "Collection Phase", desc: "Gather transaction taxes, LP yields, and endowment releases" },
                { step: 2, title: "Burn Phase", desc: "Permanently destroy 20% of collected AEC" },
                { step: 3, title: "Liquidity Phase", desc: "Convert 40% to balanced LP tokens and stake permanently" },
                { step: 4, title: "Rewards Phase", desc: "Distribute 40% across three staking systems" },
                { step: 5, title: "Incentive Phase", desc: "Pay 0.1% to cycle executor" }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">{phase.step}</span>
                  </div>
                  <h4 className="font-bold text-sm mb-1">{phase.title}</h4>
                  <p className="text-xs text-gray-400">{phase.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-blue-300 mt-4 text-center font-medium">
              This cycle can be triggered by anyone, ensuring continuous operation without central authority.
            </p>
          </div>
        </div>
      </div>

      {/* Getting Involved */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Getting Involved</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-blue-900/20 border border-blue-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Fair Launch Participation</h3>
              <p className="text-gray-300 mb-4">Join the AEC fair launch to acquire tokens at community-determined prices:</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" />Prepare USDC: Only stablecoin accepted for contributions</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" />Contribute During Window: 48-hour participation period</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" />Receive Proportional Allocation: Based on your contribution percentage</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" />Claim Tokens: Available immediately after launch</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" />Trade Immediately: Liquidity deployed automatically</li>
              </ul>
            </div>

            <div className="bg-green-900/20 border border-green-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-400 mb-4">Staking Opportunities</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-green-300">For Long-term Holders:</h4>
                  <ul className="text-sm text-gray-300 ml-4">
                    <li>• Stake AEC tokens with lock periods up to 180 days</li>
                    <li>• Earn up to 1.6x reward multipliers</li>
                    <li>• Compound automatically or claim regularly</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-green-300">For Liquidity Providers:</h4>
                  <ul className="text-sm text-gray-300 ml-4">
                    <li>• Provide AEC/USDC liquidity on Uniswap V2</li>
                    <li>• Stake LP tokens for enhanced rewards (60% of total rewards)</li>
                    <li>• Earn from both trading fees and protocol distributions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-purple-900/20 border border-purple-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Community Governance</h3>
              <p className="text-gray-300 mb-4">Participate in protocol governance:</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center"><Users size={16} className="mr-2 text-purple-400" />Founder Oversight: Vote on extending or burning founder allocation</li>
                <li className="flex items-center"><Users size={16} className="mr-2 text-purple-400" />Community Building: Help grow the ecosystem through education and development</li>
                <li className="flex items-center"><Users size={16} className="mr-2 text-purple-400" />Cycle Execution: Earn rewards by triggering PerpetualEngine cycles</li>
                <li className="flex items-center"><Users size={16} className="mr-2 text-purple-400" />Security Monitoring: Report bugs and vulnerabilities for bounty rewards</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Next Steps</h3>
              <p className="text-gray-300 mb-4">Ready to explore AetherCycle further?</p>
              <div className="grid grid-cols-2 gap-3">
                <button className="border border-gray-600 text-white px-4 py-2 text-sm hover:bg-gray-700 transition-colors">
                  Read FAQ
                </button>
                <button className="border border-gray-600 text-white px-4 py-2 text-sm hover:bg-gray-700 transition-colors">
                  Study Whitepaper
                </button>
                <button className="border border-gray-600 text-white px-4 py-2 text-sm hover:bg-gray-700 transition-colors">
                  Join Community
                </button>
                <button className="bg-white text-black px-4 py-2 text-sm hover:bg-gray-200 transition-colors">
                  Launch App
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-700 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Conclusion</h2>
        <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto mb-4">
          AetherCycle represents a paradigm shift from speculative DeFi to mathematical DeFi. Instead of promises and roadmaps, AEC delivers working autonomous systems. Instead of founder-dependent protocols, AEC provides community-controlled sustainability.
        </p>
        <p className="text-xl font-bold text-center text-blue-400 mb-4">
          This is not just another DeFi token - this is the emergence of Autonomous Finance, designed to operate for decades through pure mathematics rather than human intervention.
        </p>
        <p className="text-center text-gray-300 font-medium">
          What you see now is what you get. No promises, no roadmap, no centralized control. Just mathematics.
        </p>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p className="mb-2">
          <strong>Disclaimer:</strong> This document describes experimental financial software with inherent risks. All smart contracts are immutable post-deployment. Participants should conduct thorough research and understand all risks before participation. This is not financial advice.
        </p>
        <p>
          <strong>Contact:</strong> aethercycle@gmail.com | <strong>Last Updated:</strong> July 4, 2025
        </p>
        <p className="mt-2 font-mono text-xs">
          AetherCycle Protocol - Engineered for Eternity
        </p>
      </div>
    </div>
  );

  const renderQuickStart = () => (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-gray-700 pb-8">
        <h1 className="text-4xl font-bold mb-4">Quick Start Guide</h1>
        <p className="text-xl text-gray-300">Begin using AEC in 5 minutes</p>
        <p className="text-gray-400">Get up and running with AetherCycle Protocol quickly and safely.</p>
      </div>

      {/* Prerequisites */}
      <div className="bg-blue-900/20 border border-blue-700 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Clock className="mr-2 text-blue-400" size={24} />
          Prerequisites (1 minute)
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-blue-300 mb-3">What You Need:</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" /><strong>Wallet:</strong> MetaMask, Coinbase Wallet, or any Web3 wallet</li>
              <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" /><strong>Network:</strong> Base network configured</li>
              <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" /><strong>Funds:</strong> USDC for Fair Launch participation (optional)</li>
              <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" /><strong>Browser:</strong> Chrome, Firefox, or Brave recommended</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-blue-300 mb-3">Base Network Setup:</h3>
            <div className="bg-gray-900 p-4 rounded">
              <p className="text-sm text-gray-300 mb-2">If Base isn't in your wallet yet:</p>
              <ol className="text-sm text-gray-300 space-y-1">
                <li>1. Visit bridge.base.org</li>
                <li>2. Click "Add Base Network"</li>
                <li>3. Confirm in your wallet</li>
              </ol>
              <div className="mt-3 text-xs text-gray-400">
                <div><strong>Name:</strong> Base</div>
                <div><strong>RPC:</strong> https://mainnet.base.org</div>
                <div><strong>Chain ID:</strong> 8453</div>
                <div><strong>Currency:</strong> ETH</div>
                <div><strong>Explorer:</strong> https://basescan.org</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 1 */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3 text-white font-bold">1</span>
          Get AEC Tokens (2 minutes)
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-900/20 border border-green-700 p-4 rounded">
            <h3 className="font-bold text-green-400 mb-3">Option A: Fair Launch (Recommended)</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-300 mb-2"><strong>When:</strong> During 48-hour Fair Launch period</p>
                <p className="text-sm text-gray-300 mb-3"><strong>What:</strong> Contribute USDC, get proportional AEC allocation</p>
              </div>
              <ol className="text-sm text-gray-300 space-y-1">
                <li>1. Visit: app.aethercycle.xyz</li>
                <li>2. Connect wallet to Base network</li>
                <li>3. Enter USDC amount you want to contribute</li>
                <li>4. Confirm transaction and wait for completion</li>
                <li>5. Claim tokens after Fair Launch ends</li>
              </ol>
              <div className="bg-gray-900 p-3 rounded mt-3">
                <p className="text-xs font-mono text-green-400">
                  Formula: Your AEC = (Your USDC ÷ Total USDC) × Fair Launch Allocation
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-900/20 border border-yellow-700 p-4 rounded">
            <h3 className="font-bold text-yellow-400 mb-3">Option B: DEX Trading (Post-Launch)</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-300 mb-2"><strong>When:</strong> After Fair Launch completes</p>
                <p className="text-sm text-gray-300 mb-3"><strong>Where:</strong> Uniswap V2 AEC/USDC pair</p>
              </div>
              <ol className="text-sm text-gray-300 space-y-1">
                <li>1. Visit: app.uniswap.org</li>
                <li>2. Connect wallet to Base network</li>
                <li>3. Select: AEC/USDC trading pair</li>
                <li>4. Set slippage: 3-5% (due to 2% tax)</li>
                <li>5. Swap USDC for AEC</li>
              </ol>
              <div className="bg-red-900/20 p-2 rounded mt-3">
                <p className="text-xs text-red-300">
                  <strong>Note:</strong> 2% tax applies to DEX purchases
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3 text-white font-bold">2</span>
          Choose Your Strategy (1 minute)
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-purple-900/20 border border-purple-700 p-4 rounded">
              <h3 className="font-bold text-purple-400 mb-2">🚀 For Quick Participation:</h3>
              <p className="text-sm text-gray-300 mb-2"><strong>Goal:</strong> Get involved immediately</p>
              <p className="text-sm text-gray-300 mb-2"><strong>Action:</strong> Hold AEC tokens, participate in governance</p>
              <p className="text-sm text-gray-300"><strong>Benefit:</strong> Exposure to protocol growth, voting rights</p>
            </div>
            
            <div className="bg-green-900/20 border border-green-700 p-4 rounded">
              <h3 className="font-bold text-green-400 mb-2">💰 For Yield Earning:</h3>
              <p className="text-sm text-gray-300 mb-2"><strong>Goal:</strong> Earn passive income</p>
              <p className="text-sm text-gray-300 mb-2"><strong>Action:</strong> Stake AEC tokens with lock periods</p>
              <p className="text-sm text-gray-300"><strong>Benefit:</strong> 1.1x to 1.6x reward multipliers</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-blue-900/20 border border-blue-700 p-4 rounded">
              <h3 className="font-bold text-blue-400 mb-2">🌊 For Liquidity Providers:</h3>
              <p className="text-sm text-gray-300 mb-2"><strong>Goal:</strong> Maximum rewards</p>
              <p className="text-sm text-gray-300 mb-2"><strong>Action:</strong> Provide AEC/USDC liquidity, stake LP tokens</p>
              <p className="text-sm text-gray-300"><strong>Benefit:</strong> 60% of all protocol rewards</p>
            </div>
            
            <div className="bg-pink-900/20 border border-pink-700 p-4 rounded">
              <h3 className="font-bold text-pink-400 mb-2">🎨 For NFT Collectors:</h3>
              <p className="text-sm text-gray-300 mb-2"><strong>Goal:</strong> Unique utility</p>
              <p className="text-sm text-gray-300 mb-2"><strong>Action:</strong> Mint Aetheria NFTs, stake for rewards</p>
              <p className="text-sm text-gray-300"><strong>Benefit:</strong> Continuous yield + collectible value</p>
            </div>
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center mr-3 text-white font-bold">3</span>
          Start Earning (1 minute)
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-green-900/20 border border-green-700 p-4 rounded">
            <h3 className="font-bold text-green-400 mb-3">Token Staking (Easiest)</h3>
            <ol className="text-sm text-gray-300 space-y-1 mb-3">
              <li>1. Visit: app.aethercycle.xyz/stake</li>
              <li>2. Connect wallet with AEC tokens</li>
              <li>3. Choose lock period:</li>
              <li className="ml-4">• 30 days = 1.1x multiplier</li>
              <li className="ml-4">• 90 days = 1.3x multiplier</li>
              <li className="ml-4">• 180 days = 1.6x multiplier</li>
              <li>4. Stake tokens and start earning immediately</li>
            </ol>
          </div>
          
          <div className="bg-blue-900/20 border border-blue-700 p-4 rounded">
            <h3 className="font-bold text-blue-400 mb-3">LP Staking (Highest Rewards)</h3>
            <ol className="text-sm text-gray-300 space-y-1 mb-3">
              <li>1. Add liquidity on Uniswap V2 (AEC/USDC pair)</li>
              <li>2. Receive LP tokens from Uniswap</li>
              <li>3. Visit: app.aethercycle.xyz/stake-lp</li>
              <li>4. Stake LP tokens with preferred lock period</li>
              <li>5. Earn 60% of all protocol rewards</li>
            </ol>
          </div>
          
          <div className="bg-purple-900/20 border border-purple-700 p-4 rounded">
            <h3 className="font-bold text-purple-400 mb-3">NFT Staking (Unique Utility)</h3>
            <ol className="text-sm text-gray-300 space-y-1 mb-3">
              <li>1. Visit: app.aethercycle.xyz/nft</li>
              <li>2. Mint Aetheria NFT using AEC tokens</li>
              <li>3. Stake NFT in staking contract</li>
              <li>4. Earn rewards based on NFT rarity</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Step 4 */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3 text-white font-bold">4</span>
          Monitor & Optimize (Ongoing)
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-purple-300 mb-3">Track Your Performance:</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center"><TrendingUp size={16} className="mr-2 text-green-400" /><strong>Dashboard:</strong> app.aethercycle.xyz/dashboard</li>
              <li className="flex items-center"><Coins size={16} className="mr-2 text-yellow-400" /><strong>Rewards:</strong> Check pending and claimed rewards</li>
              <li className="flex items-center"><Calculator size={16} className="mr-2 text-blue-400" /><strong>APY Calculator:</strong> Estimate returns based on lock periods</li>
              <li className="flex items-center"><Info size={16} className="mr-2 text-purple-400" /><strong>Protocol Stats:</strong> Monitor TVL, burn rate, reward distribution</li>
            </ul>
            
            <h3 className="font-bold text-purple-300 mb-3 mt-6">Stay Informed:</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center"><Users size={16} className="mr-2 text-green-400" /><strong>Discord:</strong> Real-time community discussions</li>
              <li className="flex items-center"><ExternalLink size={16} className="mr-2 text-blue-400" /><strong>Twitter:</strong> Protocol updates and announcements</li>
              <li className="flex items-center"><FileText size={16} className="mr-2 text-gray-400" /><strong>GitHub:</strong> Technical updates and code reviews</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-purple-300 mb-3">Optimize Strategy:</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center"><TrendingUp size={16} className="mr-2 text-green-400" /><strong>Compound rewards:</strong> Reinvest earned AEC for higher returns</li>
              <li className="flex items-center"><Lock size={16} className="mr-2 text-yellow-400" /><strong>Extend locks:</strong> Longer periods = higher multipliers</li>
              <li className="flex items-center"><Target size={16} className="mr-2 text-blue-400" /><strong>Diversify:</strong> Combine token staking + LP staking + NFT staking</li>
            </ul>
            
            <div className="bg-gray-900 p-4 rounded mt-6">
              <h4 className="font-bold text-gray-300 mb-2">Quick Reference</h4>
              <div className="text-xs text-gray-400 space-y-1">
                <div><strong>Tax Structure:</strong></div>
                <div>• Wallet-to-wallet: 0% tax</div>
                <div>• Official DEX: 2-2.5% tax</div>
                <div>• Unofficial contracts: 10-12.5% tax</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Safety & Support */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-red-900/20 border border-red-700 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center">
            <Shield className="mr-2" size={20} />
            Safety Checklist
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-red-300 mb-2">Before You Start:</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" />Verify website URL: Only use aethercycle.xyz</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" />Check contract addresses: Match official documentation</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" />Start small: Test with minimal amounts first</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" />Understand risks: Read disclaimer and risk assessment</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-red-300 mb-2">Red Flags to Avoid:</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li className="flex items-center"><AlertTriangle size={16} className="mr-2 text-red-400" />Fake websites: Always verify official links</li>
                <li className="flex items-center"><AlertTriangle size={16} className="mr-2 text-red-400" />Social media scams: No official team DMs</li>
                <li className="flex items-center"><AlertTriangle size={16} className="mr-2 text-red-400" />Unofficial tokens: Only use verified contract address</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-900/20 border border-blue-700 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center">
            <Users className="mr-2" size={20} />
            Support
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-blue-300 mb-2">Community Help:</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>• Discord: #support channel for real-time help</li>
                <li>• GitHub: Technical documentation and code review</li>
                <li>• FAQ: Comprehensive answers to common questions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-blue-300 mb-2">Official Contact:</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>• General: aethercycle@gmail.com</li>
                <li>• Security: Report vulnerabilities for bug bounty rewards</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Congratulations */}
      <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-700 p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">🎉 Congratulations!</h2>
        <p className="text-lg text-gray-300 mb-4">
          You're now ready to participate in the world's first truly autonomous DeFi protocol.
        </p>
        <p className="text-gray-400 mb-6">
          Remember: AetherCycle is experimental software. Only invest what you can afford to lose, and always do your own research.
        </p>
        <button className="bg-white text-black px-8 py-3 font-bold hover:bg-gray-200 transition-colors">
          ⚡ Start your AetherCycle journey: app.aethercycle.xyz
        </button>
        <p className="text-xs text-gray-500 mt-4">
          Quick Start Guide - Last Updated: July 4, 2025<br />
          AetherCycle Protocol - Autonomous Finance
        </p>
      </div>
    </div>
  );

  const renderTokenomicsDetailed = () => (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-gray-700 pb-8">
        <h1 className="text-4xl font-bold mb-4">Token Economics</h1>
        <h2 className="text-2xl text-blue-400 mb-4">Mathematical Model Explained</h2>
        <p className="text-xl text-gray-300">
          Comprehensive mathematical analysis of AetherCycle's autonomous economic system. 
          Mathematical sustainability guarantees through rigorous economic modeling.
        </p>
      </div>

      {/* Executive Summary */}
      <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-700 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Executive Summary</h2>
        <p className="text-gray-300 mb-6">
          AetherCycle implements a mathematically sustainable economic model designed for infinite operation through autonomous mechanisms. 
          Unlike traditional DeFi protocols that rely on continuous growth assumptions, AEC's economic model provides mathematical guarantees 
          of perpetual operation through:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" /><strong>Mathematical Endowment:</strong> 35% of supply providing infinite baseline funding</li>
            <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" /><strong>Revenue Diversification:</strong> Multiple sustainable income streams</li>
            <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" /><strong>Automated Processing:</strong> Zero human intervention in economic operations</li>
          </ul>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" /><strong>Deflationary Pressure:</strong> Continuous supply reduction mechanisms</li>
            <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" /><strong>Community Alignment:</strong> 99% of value accrual to community participants</li>
          </ul>
        </div>
      </div>

      {/* Token Specification */}
      <div className="bg-gray-800 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Token Specification</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-blue-400 mb-4">Basic Parameters</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-400">Name:</span><span>AetherCycle</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Symbol:</span><span>AEC</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Network:</span><span>Base (Ethereum Layer 2)</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Standard:</span><span>ERC-20</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Decimals:</span><span>18</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Total Supply:</span><span className="text-green-400">888,888,888 AEC (FIXED)</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Supply Type:</span><span className="text-red-400">Deflationary</span></div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-green-400 mb-4">Key Properties</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" /><strong>Immutable Supply:</strong> No additional tokens can ever be created</li>
              <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-red-400" /><strong>Burn Mechanism:</strong> Permanent supply reduction through protocol operations</li>
              <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-blue-400" /><strong>Tax Integration:</strong> Built-in transaction taxes funding autonomous operations</li>
              <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-purple-400" /><strong>Governance Rights:</strong> Limited to founder accountability only</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Distribution Model */}
      <div className="bg-gray-800 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Distribution Model</h2>
        <h3 className="text-lg font-bold mb-4">Initial Allocation Breakdown</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3">Allocation Category</th>
                <th className="text-left py-3">Percentage</th>
                <th className="text-left py-3">Token Amount</th>
                <th className="text-left py-3">Purpose</th>
                <th className="text-left py-3">Vest/Lock</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-gray-800">
                <td className="py-3">Perpetual Endowment</td>
                <td className="py-3 text-blue-400 font-bold">35%</td>
                <td className="py-3">311,111,111</td>
                <td className="py-3">Mathematical sustainability fund</td>
                <td className="py-3 text-red-400">Permanent lock</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3">Ecosystem Rewards</td>
                <td className="py-3 text-green-400 font-bold">40%</td>
                <td className="py-3">355,555,555</td>
                <td className="py-3">Staking incentives distribution</td>
                <td className="py-3 text-yellow-400">Performance-based</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3">Contributor Airdrop</td>
                <td className="py-3 text-purple-400 font-bold">8%</td>
                <td className="py-3">71,111,111</td>
                <td className="py-3">Task-based community rewards</td>
                <td className="py-3 text-yellow-400">Merit-based</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3">Fair Launch</td>
                <td className="py-3 text-yellow-400 font-bold">7%</td>
                <td className="py-3">62,222,222</td>
                <td className="py-3">Public price discovery</td>
                <td className="py-3 text-green-400">No vesting</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3">Initial Liquidity</td>
                <td className="py-3 text-cyan-400 font-bold">6%</td>
                <td className="py-3">53,333,333</td>
                <td className="py-3">Uniswap V2 bootstrap</td>
                <td className="py-3 text-red-400">Permanent lock</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3">Security Bounty</td>
                <td className="py-3 text-orange-400 font-bold">2%</td>
                <td className="py-3">17,777,777</td>
                <td className="py-3">Bug bounties and audits</td>
                <td className="py-3 text-gray-400">As-needed</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3">Lottery/Gambit</td>
                <td className="py-3 text-pink-400 font-bold">1%</td>
                <td className="py-3">8,888,889</td>
                <td className="py-3">Gaming ecosystem fund</td>
                <td className="py-3 text-blue-400">Automated</td>
              </tr>
              <tr>
                <td className="py-3">Founder</td>
                <td className="py-3 text-red-400 font-bold">1%</td>
                <td className="py-3">8,888,888</td>
                <td className="py-3">Development compensation</td>
                <td className="py-3 text-red-400">5-year cliff</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-green-900/20 border border-green-700 p-6 rounded-lg">
            <h4 className="text-lg font-bold text-green-400 mb-4">Community-Controlled Allocation: 99%</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" />Direct community benefit: 93%</li>
              <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" />Security and infrastructure: 6%</li>
              <li className="flex items-center"><CheckCircle size={16} className="mr-2 text-green-400" />Total community control: 99%</li>
            </ul>
          </div>
          <div className="bg-red-900/20 border border-red-700 p-6 rounded-lg">
            <h4 className="text-lg font-bold text-red-400 mb-4">Founder Risk: 1%</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center"><AlertTriangle size={16} className="mr-2 text-red-400" />Subject to community burn/extend votes</li>
              <li className="flex items-center"><AlertTriangle size={16} className="mr-2 text-red-400" />5-year cliff vesting (no gradual unlock)</li>
              <li className="flex items-center"><AlertTriangle size={16} className="mr-2 text-red-400" />Smallest founder allocation in DeFi history</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mathematical Endowment System */}
      <div className="bg-purple-900/20 border border-purple-700 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Calculator className="mr-3 text-purple-400" size={24} />
          Mathematical Endowment System
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-purple-300 mb-4">Core Parameters</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><span className="text-purple-400">Initial Balance:</span> 311,111,111 AEC (35% of total supply)</li>
              <li><span className="text-purple-400">Release Rate:</span> 0.5% of current balance per month</li>
              <li><span className="text-purple-400">Release Frequency:</span> Monthly (30-day cooldown)</li>
              <li><span className="text-purple-400">Control Mechanism:</span> Fully automated smart contract</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-purple-300 mb-4">Mathematical Formula</h3>
            <div className="bg-gray-900 p-4 rounded font-mono text-sm">
              <div>Monthly Release = Current Balance × 0.005</div>
              <div>Remaining Balance = Current Balance × 0.995</div>
              <div className="text-purple-400 mt-2">Balance(n) = 311,111,111 × (0.995)^n</div>
              <div className="text-gray-400 text-xs mt-2">Where n = number of months since deployment</div>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-bold text-purple-300 mb-4">Projected Release Schedule</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3">Month</th>
                <th className="text-left py-3">Release Amount (AEC)</th>
                <th className="text-left py-3">Remaining Balance (AEC)</th>
                <th className="text-left py-3">Cumulative Released</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-gray-800">
                <td className="py-3 font-medium">1</td>
                <td className="py-3 text-green-400">1,555,556</td>
                <td className="py-3">309,555,555</td>
                <td className="py-3 text-blue-400">1,555,556</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3 font-medium">6</td>
                <td className="py-3 text-green-400">1,517,361</td>
                <td className="py-3">301,855,068</td>
                <td className="py-3 text-blue-400">9,256,043</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3 font-medium">12</td>
                <td className="py-3 text-green-400">1,464,912</td>
                <td className="py-3">292,982,400</td>
                <td className="py-3 text-blue-400">18,128,711</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3 font-medium">24</td>
                <td className="py-3 text-green-400">1,338,089</td>
                <td className="py-3">267,617,800</td>
                <td className="py-3 text-blue-400">43,493,311</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3 font-medium">60</td>
                <td className="py-3 text-green-400">1,211,904</td>
                <td className="py-3">242,380,800</td>
                <td className="py-3 text-blue-400">68,730,311</td>
              </tr>
              <tr>
                <td className="py-3 font-medium">120</td>
                <td className="py-3 text-green-400">979,851</td>
                <td className="py-3">195,970,200</td>
                <td className="py-3 text-blue-400">115,140,911</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-gray-900 p-6 rounded mt-8">
          <h3 className="text-lg font-bold text-purple-300 mb-4">Perpetual Operation Proof</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold mb-2">Mathematical Guarantee:</h4>
              <div className="font-mono text-sm text-purple-400">
                lim(n→∞) Balance(n) = 0, but for any finite n: Balance(n) {'>'} 0
              </div>
              <div className="text-sm text-gray-300 mt-2">
                Therefore: ∃ monthly releases for all finite time periods
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-lg font-bold text-purple-400">After 10 years</div>
                <div className="text-gray-400">195,970,200 AEC remaining (63% of original)</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-purple-400">After 20 years</div>
                <div className="text-gray-400">148,735,400 AEC remaining (48% of original)</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-purple-400">∞</div>
                <div className="text-gray-400">Protocol funded for centuries</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-700 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Mathematical Certainty</h2>
        <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto mb-6">
          AetherCycle's token economics represent a paradigm shift from speculative to mathematical DeFi. 
          Through rigorous mathematical modeling, the protocol ensures guaranteed baseline operation, 
          revenue diversification, automatic value accrual, and sustainable growth.
        </p>
        <div className="text-xl font-bold text-blue-400 text-center">
          This is not speculation – this is mathematical certainty.
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
        <div className="flex items-start">
          <AlertTriangle className="mr-3 text-yellow-400 mt-1 flex-shrink-0" size={20} />
          <div className="text-sm text-gray-400">
            <strong className="text-yellow-400">Disclaimers:</strong> Economic projections based on mathematical models and assumptions. 
            Actual results may vary based on market conditions, adoption rates, and external factors. Token values may fluctuate dramatically. 
            Past performance does not guarantee future results. This analysis is for educational purposes and does not constitute financial advice.
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-4 text-center">
          Token Economics - Mathematical Model<br />
          Last Updated: July 4, 2025<br />
          AetherCycle Protocol - Autonomous Finance
        </p>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return renderOverview();
      case 'quickstart':
        return renderQuickStart();
      case 'tokenomics':
        return renderTokenomicsDetailed();
      case 'staking':
        return (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">Staking Guide</h2>
            <p className="text-gray-400">Comprehensive staking documentation coming soon...</p>
          </div>
        );
      case 'security':
        return (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">Security Model</h2>
            <p className="text-gray-400">Security documentation coming soon...</p>
          </div>
        );
      case 'governance':
        return (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">Governance</h2>
            <p className="text-gray-400">Governance documentation coming soon...</p>
          </div>
        );
      default:
        return renderOverview();
    }
  };

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">DOCUMENTATION</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technical documentation for the AEC protocol. 
            Everything you need to understand and interact with the autonomous system.
          </p>
        </div>

        {/* Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  activeSection === section.id
                    ? 'bg-white text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <section.icon size={16} className="mr-2" />
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="min-h-[800px]">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default DocumentationSection;