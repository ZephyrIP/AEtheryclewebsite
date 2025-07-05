import React, { useState } from 'react';
import { BookOpen, FileText, ExternalLink, Download, ChevronRight, ArrowLeft } from 'lucide-react';

const DocumentationSection: React.FC = () => {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

  const docCategories = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      items: [
        { 
          id: 'protocol-overview',
          name: 'Protocol Overview', 
          description: 'Understanding AEC fundamentals',
          content: 'protocol-overview'
        },
        { 
          id: 'quick-start',
          name: 'Quick Start Guide', 
          description: 'Begin using AEC in 5 minutes',
          content: null
        },
        { 
          id: 'token-economics',
          name: 'Token Economics', 
          description: 'Mathematical model explained',
          content: null
        },
        { 
          id: 'security-model',
          name: 'Security Model', 
          description: 'Immutable architecture details',
          content: null
        },
      ]
    },
    {
      title: 'Technical Documentation',
      icon: FileText,
      items: [
        { 
          id: 'smart-contracts',
          name: 'Smart Contract Specification', 
          description: 'Complete contract interfaces',
          content: null
        },
        { 
          id: 'perpetual-engine',
          name: 'PerpetualEngine Mechanics', 
          description: 'Autonomous mechanism details',
          content: null
        },
        { 
          id: 'mathematical-proofs',
          name: 'Mathematical Proofs', 
          description: 'Sustainability calculations',
          content: null
        },
        { 
          id: 'audit-reports',
          name: 'Audit Reports', 
          description: 'Security verification results',
          content: null
        },
      ]
    },
    {
      title: 'Research & Analysis',
      icon: FileText,
      items: [
        { 
          id: 'whitepaper',
          name: 'Whitepaper v2.0', 
          description: 'Complete protocol specification',
          content: null
        },
        { 
          id: 'economic-analysis',
          name: 'Economic Analysis', 
          description: 'Sustainability mathematics',
          content: null
        },
        { 
          id: 'risk-assessment',
          name: 'Risk Assessment', 
          description: 'Comprehensive risk analysis',
          content: null
        },
        { 
          id: 'regulatory-resistance',
          name: 'Regulatory Resistance', 
          description: 'Decentralization analysis',
          content: null
        },
      ]
    }
  ];

  const ProtocolOverview = () => (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <button
          onClick={() => setSelectedDoc(null)}
          className="flex items-center text-gray-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Documentation
        </button>
        <h1 className="text-4xl font-bold mb-4">AetherCycle Protocol Overview</h1>
        <div className="text-sm text-gray-400 space-y-1">
          <p>Autonomous DeFi Protocol</p>
          <p>Version: 1.0 | Publication Date: July 2025</p>
          <p>Network: Base (Ethereum Layer 2) | Total Supply: 888,888,888 AEC (Fixed)</p>
        </div>
      </div>

      <div className="space-y-12 text-gray-300 leading-relaxed">
        {/* Table of Contents */}
        <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-white">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            <div className="space-y-1">
              <div className="flex items-center text-blue-400 hover:text-blue-300 cursor-pointer">
                <ChevronRight size={14} className="mr-1" />
                What is AetherCycle?
              </div>
              <div className="flex items-center text-blue-400 hover:text-blue-300 cursor-pointer">
                <ChevronRight size={14} className="mr-1" />
                Core Concepts
              </div>
              <div className="flex items-center text-blue-400 hover:text-blue-300 cursor-pointer">
                <ChevronRight size={14} className="mr-1" />
                How It Works
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center text-blue-400 hover:text-blue-300 cursor-pointer">
                <ChevronRight size={14} className="mr-1" />
                Key Features
              </div>
              <div className="flex items-center text-blue-400 hover:text-blue-300 cursor-pointer">
                <ChevronRight size={14} className="mr-1" />
                Getting Involved
              </div>
            </div>
          </div>
        </div>

        {/* What is AetherCycle? */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-white">What is AetherCycle?</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-red-400">The Problem with Modern DeFi</h3>
            <p className="mb-4">The decentralized finance ecosystem faces fundamental sustainability challenges that have led to the failure of countless protocols:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span><strong>Yield Locusts:</strong> Users farm high APY rewards temporarily, dump tokens, and leave when emissions end</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span><strong>Founder Risk:</strong> Teams typically hold 20-30% allocations with short vesting periods, creating constant sell pressure</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span><strong>Governance Capture:</strong> Multisig controls and whale dominance undermine true decentralization</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span><strong>Growth Dependency:</strong> Unsustainable tokenomics requiring infinite user growth to maintain operations</span>
              </li>
            </ul>
            <p className="mt-4 text-red-300">Most DeFi protocols die within 6-24 months when their growth assumptions prove incorrect and token emissions end.</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-green-400">The AetherCycle Solution</h3>
            <p className="mb-4">AetherCycle introduces <strong>Autonomous Finance (AutonoFi)</strong> - a new category of DeFi protocols that operate independently of human intervention through mathematical sustainability guarantees.</p>
            <p className="text-green-300"><strong>Core Innovation:</strong> Instead of relying on promises, roadmaps, or continuous growth, AEC delivers a complete, working autonomous system that operates through pure mathematics.</p>
          </div>

          <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-white">What Makes AEC Different</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-red-400 mb-3">Traditional DeFi:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Promises future features via roadmaps</li>
                  <li>• Depends on team execution and funding</li>
                  <li>• High founder allocations (20-30%)</li>
                  <li>• Governance can modify core parameters</li>
                  <li>• Success depends on speculation and hype</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-green-400 mb-3">AetherCycle:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Everything exists at genesis - no roadmap needed</li>
                  <li>• Operates autonomously through smart contracts</li>
                  <li>• Minimal founder allocation (1%) with community control</li>
                  <li>• Immutable core parameters - no governance corruption</li>
                  <li>• Success depends on mathematical sustainability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Concepts */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-white">Core Concepts</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Pure Protocol Architecture</h3>
            <p className="mb-4">AetherCycle embodies the "Pure Protocol" design philosophy:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-gray-700 bg-gray-900 p-4 rounded">
                <h4 className="font-bold mb-2">Immutable Core</h4>
                <p className="text-sm">All essential parameters locked permanently at deployment</p>
              </div>
              <div className="border border-gray-700 bg-gray-900 p-4 rounded">
                <h4 className="font-bold mb-2">No Admin Keys</h4>
                <p className="text-sm">No human can pause, modify, or control core functions</p>
              </div>
              <div className="border border-gray-700 bg-gray-900 p-4 rounded">
                <h4 className="font-bold mb-2">Complete at Launch</h4>
                <p className="text-sm">Every feature works from day one - no future development required</p>
              </div>
              <div className="border border-gray-700 bg-gray-900 p-4 rounded">
                <h4 className="font-bold mb-2">Community Operated</h4>
                <p className="text-sm">Protocol maintenance performed by community incentives</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-purple-400">Mathematical Endowment System</h3>
            <p className="mb-4">The protocol's sustainability foundation is a Mathematical Endowment comprising 35% of total supply (311,111,111 AEC):</p>
            <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3">Endowment Details:</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Purpose:</strong> Provides guaranteed baseline funding independent of market conditions</li>
                    <li><strong>Release Mechanism:</strong> 0.5% of remaining balance released monthly</li>
                    <li><strong>Duration:</strong> Infinite - mathematical proof ensures perpetual operation</li>
                    <li><strong>Control:</strong> Fully automated smart contract - no human access</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3">Example Timeline:</h4>
                  <div className="space-y-2 text-sm font-mono">
                    <div>Month 1: Release 1,555,556 AEC</div>
                    <div>Month 12: Release 1,464,912 AEC</div>
                    <div>Month 60: Release 1,211,904 AEC</div>
                    <div>Month 120: Release 979,851 AEC</div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-purple-300">The endowment ensures protocol operation even during extended bear markets or low user activity.</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">PerpetualEngine - Autonomous Economic Processor</h3>
            <p className="mb-4">The PerpetualEngine is AEC's autonomous economic heart that processes all protocol revenue:</p>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="border border-gray-700 bg-gray-900 p-4 rounded">
                <h4 className="font-bold mb-2 text-yellow-400">Revenue Sources:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Transaction taxes (2-12.5%)</li>
                  <li>• LP staking yields</li>
                  <li>• Monthly endowment releases</li>
                </ul>
              </div>
              <div className="border border-gray-700 bg-gray-900 p-4 rounded">
                <h4 className="font-bold mb-2 text-green-400">Automated Distribution:</h4>
                <ul className="text-sm space-y-1">
                  <li>• 20% Burn: Permanent supply reduction</li>
                  <li>• 40% Liquidity: Automated LP provision</li>
                  <li>• 40% Rewards: Distribution to stakers</li>
                </ul>
              </div>
              <div className="border border-gray-700 bg-gray-900 p-4 rounded">
                <h4 className="font-bold mb-2 text-blue-400">Community Operation:</h4>
                <p className="text-sm">Anyone can trigger processing cycles and earn 0.1% of processed revenue as incentive.</p>
              </div>
            </div>
          </div>

          <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-orange-400">Community Control Framework</h3>
            <p className="mb-4">AetherCycle implements unprecedented community control over founder compensation:</p>
            <div className="space-y-3">
              <div><strong>Founder Allocation:</strong> Only 1% of total supply (vs industry average 20-30%)</div>
              <div><strong>Vesting Period:</strong> 5-year cliff (no gradual releases)</div>
              <div>
                <strong>Community Powers:</strong>
                <ul className="ml-6 mt-2 space-y-1">
                  <li>• <strong>Extend Vesting:</strong> DAO can vote to extend founder vesting up to 2 additional years</li>
                  <li>• <strong>Burn Allocation:</strong> DAO can permanently destroy founder tokens for poor performance</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-orange-300">This creates the strongest accountability mechanism ever deployed in DeFi.</p>
          </div>
        </section>

        {/* How It Works */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-white">How It Works</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Transaction Tax System - "Tolerant Fortress"</h3>
            <p className="mb-4">AetherCycle implements a three-tier tax system that protects the ecosystem while remaining permissionless:</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border border-green-600 bg-green-900/20 p-4 rounded">
                <h4 className="font-bold text-green-400 mb-2">Tier 1: Tax-Free Zones</h4>
                <ul className="text-sm space-y-1">
                  <li>• Wallet-to-wallet transfers: 0% tax</li>
                  <li>• Staking contract interactions: 0% tax</li>
                  <li>• Protocol infrastructure: 0% tax</li>
                </ul>
              </div>
              <div className="border border-yellow-600 bg-yellow-900/20 p-4 rounded">
                <h4 className="font-bold text-yellow-400 mb-2">Tier 2: Official Markets</h4>
                <ul className="text-sm space-y-1">
                  <li>• Uniswap V2 AEC/USDC pair: 2-2.5% tax</li>
                  <li>• Approved contract interactions: 2.5% tax</li>
                </ul>
              </div>
              <div className="border border-red-600 bg-red-900/20 p-4 rounded">
                <h4 className="font-bold text-red-400 mb-2">Tier 3: Unofficial Routes</h4>
                <ul className="text-sm space-y-1">
                  <li>• Unknown smart contracts: 10% tax</li>
                  <li>• Automated trading systems: 12.5% tax</li>
                </ul>
              </div>
            </div>
            <p className="mt-4">This system encourages liquidity concentration while capturing value from arbitrage and MEV activities.</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-purple-400">Revenue Processing Cycle</h3>
            <p className="mb-4">The PerpetualEngine processes accumulated revenue through the following automated cycle:</p>
            <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
              <div className="grid md:grid-cols-5 gap-4 text-center">
                <div className="border border-gray-600 p-3 rounded">
                  <div className="text-2xl mb-2">📥</div>
                  <div className="text-sm font-bold">Collection Phase</div>
                  <div className="text-xs text-gray-400 mt-1">Gather taxes, yields, endowment</div>
                </div>
                <div className="border border-gray-600 p-3 rounded">
                  <div className="text-2xl mb-2">🔥</div>
                  <div className="text-sm font-bold">Burn Phase</div>
                  <div className="text-xs text-gray-400 mt-1">Destroy 20% of collected AEC</div>
                </div>
                <div className="border border-gray-600 p-3 rounded">
                  <div className="text-2xl mb-2">💧</div>
                  <div className="text-sm font-bold">Liquidity Phase</div>
                  <div className="text-xs text-gray-400 mt-1">Convert 40% to LP tokens</div>
                </div>
                <div className="border border-gray-600 p-3 rounded">
                  <div className="text-2xl mb-2">🎁</div>
                  <div className="text-sm font-bold">Rewards Phase</div>
                  <div className="text-xs text-gray-400 mt-1">Distribute 40% to stakers</div>
                </div>
                <div className="border border-gray-600 p-3 rounded">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="text-sm font-bold">Incentive Phase</div>
                  <div className="text-xs text-gray-400 mt-1">Pay 0.1% to executor</div>
                </div>
              </div>
              <p className="mt-4 text-center text-purple-300">This cycle can be triggered by anyone, ensuring continuous operation without central authority.</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-green-400">Staking Ecosystem</h3>
            <p className="mb-4">AetherCycle offers three interconnected staking opportunities:</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border border-gray-700 bg-gray-900 p-4 rounded">
                <h4 className="font-bold mb-2">Token Staking (30% of rewards)</h4>
                <ul className="text-sm space-y-1">
                  <li>• Lock periods: 30/90/180 days</li>
                  <li>• Multipliers: 1.1x to 1.6x based on duration</li>
                  <li>• Automatic compound options available</li>
                </ul>
              </div>
              <div className="border border-gray-700 bg-gray-900 p-4 rounded">
                <h4 className="font-bold mb-2">LP Staking (60% of rewards)</h4>
                <ul className="text-sm space-y-1">
                  <li>• Stake AEC/USDC LP tokens</li>
                  <li>• Lock periods: 7/30/90 days with multipliers</li>
                  <li>• Protocol-owned liquidity receives base multiplier only</li>
                </ul>
              </div>
              <div className="border border-gray-700 bg-gray-900 p-4 rounded">
                <h4 className="font-bold mb-2">NFT Staking (10% of rewards)</h4>
                <ul className="text-sm space-y-1">
                  <li>• Stake Aetheria Artifact NFTs</li>
                  <li>• Rewards based on NFT rarity traits</li>
                  <li>• Limited collection of 500 pieces maximum</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Fair Launch Mechanism</h3>
            <p className="mb-4">Token distribution occurs through a completely fair launch process:</p>
            <div className="space-y-3">
              <div><strong>Contribution Method:</strong> USDC-only contributions over 48-hour period</div>
              <div><strong>Price Discovery:</strong> Community determines token price through contribution levels</div>
              <div><strong>Distribution Formula:</strong> (Your USDC / Total USDC) × Available Tokens</div>
              <div><strong>Liquidity Deployment:</strong> All USDC automatically paired with AEC for initial liquidity</div>
            </div>
            <p className="mt-4 text-blue-300">No private sales, no insider allocations, no vesting schedules for participants.</p>
          </div>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-white">Key Features</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3 text-red-400">Immutable Architecture</h3>
              <p className="mb-3">Once deployed, AetherCycle's core parameters cannot be modified:</p>
              <ul className="text-sm space-y-1">
                <li>• Tax rates: Fixed percentages for all transaction types</li>
                <li>• Revenue distribution: 20-40-40 split permanently locked</li>
                <li>• Endowment mechanics: Release rates and formulas immutable</li>
                <li>• Staking multipliers: All reward calculations fixed</li>
              </ul>
              <p className="mt-3 text-red-300 text-sm">This eliminates governance attacks and ensures predictable protocol behavior.</p>
            </div>

            <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3 text-green-400">Autonomous Operations</h3>
              <p className="mb-3">The protocol operates without human intervention:</p>
              <ul className="text-sm space-y-1">
                <li>• No Team Dependency: Continues working if founders disappear</li>
                <li>• Community Maintenance: Incentivized community members maintain operations</li>
                <li>• Mathematical Guarantees: Success based on proven formulas</li>
                <li>• No Upgrade Risk: Immutable code eliminates upgrade vulnerabilities</li>
              </ul>
            </div>

            <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3 text-orange-400">Founder Accountability</h3>
              <p className="mb-3">AetherCycle pioneered community-controlled founder compensation:</p>
              <ul className="text-sm space-y-1">
                <li>• Minimal Allocation: Only 1% vs industry standard 20-30%</li>
                <li>• Extended Vesting: 5-year cliff with community extension powers</li>
                <li>• Burn Authority: Community can permanently destroy founder tokens</li>
                <li>• Performance Accountability: Compensation tied directly to protocol success</li>
              </ul>
            </div>

            <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3 text-purple-400">Mathematical Sustainability</h3>
              <p className="mb-3">Every aspect of AetherCycle is designed for infinite operation:</p>
              <ul className="text-sm space-y-1">
                <li>• Endowment Proofs: Mathematical guarantee of perpetual funding</li>
                <li>• Revenue Diversification: Multiple income streams reduce failure points</li>
                <li>• Compound Growth: Protocol-owned liquidity grows automatically</li>
                <li>• Bear Market Resilience: Continues operating regardless of conditions</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 border border-gray-700 bg-gray-900 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-3 text-cyan-400">Regulatory Resistance</h3>
            <p className="mb-3">True decentralization provides regulatory protection:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-sm space-y-1">
                <li>• No Kill Switch: Impossible to shut down once deployed</li>
                <li>• No Central Authority: No entity can be pressured to modify protocol</li>
              </ul>
              <ul className="text-sm space-y-1">
                <li>• Immutable Code: Regulations cannot force parameter changes</li>
                <li>• Global Operation: Distributed across thousands of nodes worldwide</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Getting Involved */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-white">Getting Involved</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3 text-blue-400">Fair Launch Participation</h3>
              <p className="mb-3">Join the AEC fair launch to acquire tokens at community-determined prices:</p>
              <ul className="text-sm space-y-2">
                <li>• <strong>Prepare USDC:</strong> Only stablecoin accepted for contributions</li>
                <li>• <strong>Contribute During Window:</strong> 48-hour participation period</li>
                <li>• <strong>Receive Proportional Allocation:</strong> Based on your contribution percentage</li>
                <li>• <strong>Claim Tokens:</strong> Available immediately after launch</li>
                <li>• <strong>Trade Immediately:</strong> Liquidity deployed automatically</li>
              </ul>
            </div>

            <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3 text-green-400">Staking Opportunities</h3>
              <p className="mb-3">Earn rewards through multiple staking mechanisms:</p>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>For Long-term Holders:</strong>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>• Stake AEC tokens with lock periods up to 180 days</li>
                    <li>• Earn up to 1.6x reward multipliers</li>
                  </ul>
                </div>
                <div>
                  <strong>For Liquidity Providers:</strong>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>• Provide AEC/USDC liquidity on Uniswap V2</li>
                    <li>• Stake LP tokens for enhanced rewards (60% of total rewards)</li>
                  </ul>
                </div>
                <div>
                  <strong>For NFT Collectors:</strong>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>• Mint Aetheria Artifact NFTs using AEC</li>
                    <li>• Stake NFTs for continuous reward streams</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-bold mb-3 text-purple-400">Community Governance</h3>
            <p className="mb-3">Participate in protocol governance:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-sm space-y-1">
                <li>• <strong>Founder Oversight:</strong> Vote on extending or burning founder allocation</li>
                <li>• <strong>Community Building:</strong> Help grow the ecosystem through education</li>
              </ul>
              <ul className="text-sm space-y-1">
                <li>• <strong>Cycle Execution:</strong> Earn rewards by triggering PerpetualEngine cycles</li>
                <li>• <strong>Security Monitoring:</strong> Report bugs and vulnerabilities for bounty rewards</li>
              </ul>
            </div>
          </div>

          <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-3 text-yellow-400">Next Steps</h3>
            <p className="mb-3">Ready to explore AetherCycle further?</p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-sm space-y-1">
                <li>• <strong>Read the FAQ:</strong> Comprehensive answers to common questions</li>
                <li>• <strong>Study the Whitepaper:</strong> Complete technical specifications and mathematical proofs</li>
              </ul>
              <ul className="text-sm space-y-1">
                <li>• <strong>Join the Community:</strong> Discord for real-time discussion, Twitter for updates</li>
                <li>• <strong>Prepare for Launch:</strong> Set up wallet and acquire USDC for fair launch participation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-white">Resources</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="border border-gray-700 bg-gray-900 p-4 rounded">
              <h4 className="font-bold mb-2">Website:</h4>
              <p className="text-sm text-blue-400">aethercycle.xyz</p>
            </div>
            <div className="border border-gray-700 bg-gray-900 p-4 rounded">
              <h4 className="font-bold mb-2">Documentation:</h4>
              <p className="text-sm">Complete technical guides and implementation details</p>
            </div>
            <div className="border border-gray-700 bg-gray-900 p-4 rounded">
              <h4 className="font-bold mb-2">Community:</h4>
              <p className="text-sm">Discord, Twitter, GitHub for code review</p>
            </div>
            <div className="border border-gray-700 bg-gray-900 p-4 rounded">
              <h4 className="font-bold mb-2">Dashboard:</h4>
              <p className="text-sm text-blue-400">app.aethercycle.xyz (launching with testnet)</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="border border-gray-700 bg-gray-900 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">Conclusion</h2>
          <div className="space-y-4 text-center">
            <p>AetherCycle represents a paradigm shift from speculative DeFi to mathematical DeFi. Instead of promises and roadmaps, AEC delivers working autonomous systems. Instead of founder-dependent protocols, AEC provides community-controlled sustainability.</p>
            <p>This is not just another DeFi token - this is the emergence of <strong>Autonomous Finance</strong>, designed to operate for decades through pure mathematics rather than human intervention.</p>
            <p className="text-xl font-bold text-green-400">What you see now is what you get. No promises, no roadmap, no centralized control. Just mathematics.</p>
          </div>
        </section>

        {/* Footer */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p className="mb-2"><strong>Disclaimer:</strong> This document describes experimental financial software with inherent risks. All smart contracts are immutable post-deployment. Participants should conduct thorough research and understand all risks before participation. This is not financial advice.</p>
          <p className="mb-2"><strong>Contact:</strong> aethercycle@gmail.com</p>
          <p className="mb-4"><strong>Last Updated:</strong> July 4, 2025</p>
          <p className="text-lg font-bold text-white">AetherCycle Protocol - Engineered for Eternity</p>
        </div>
      </div>
    </div>
  );

  if (selectedDoc === 'protocol-overview') {
    return (
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProtocolOverview />
        </div>
      </section>
    );
  }

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
                    <div 
                      className="flex items-center justify-between p-3 hover:bg-gray-800 transition-colors"
                      onClick={() => item.content ? setSelectedDoc(item.content) : null}
                    >
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