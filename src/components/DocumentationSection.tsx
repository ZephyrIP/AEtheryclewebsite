import React, { useState } from 'react';
import { BookOpen, FileText, ExternalLink, Download, ChevronRight, ArrowLeft, Clock, CheckCircle, AlertTriangle, Wallet, Zap } from 'lucide-react';

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
          content: 'quick-start'
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

  const QuickStartGuide = () => (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <button
          onClick={() => setSelectedDoc(null)}
          className="flex items-center text-gray-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Documentation
        </button>
        <h1 className="text-4xl font-bold mb-4">Quick Start Guide</h1>
        <div className="flex items-center text-gray-400 mb-4">
          <Clock size={16} className="mr-2" />
          <span>Begin using AEC in 5 minutes</span>
        </div>
        <p className="text-gray-300">Get up and running with AetherCycle Protocol quickly and safely.</p>
      </div>

      <div className="space-y-12 text-gray-300 leading-relaxed">
        {/* Prerequisites */}
        <section>
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">1</div>
            <h2 className="text-2xl font-bold text-white">Prerequisites (1 minute)</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4 text-blue-400">What You Need:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-400 mr-2 flex-shrink-0" />
                  <span><strong>Wallet:</strong> MetaMask, Coinbase Wallet, or any Web3 wallet</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-400 mr-2 flex-shrink-0" />
                  <span><strong>Network:</strong> Base network configured</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-400 mr-2 flex-shrink-0" />
                  <span><strong>Funds:</strong> USDC for Fair Launch participation (optional)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-400 mr-2 flex-shrink-0" />
                  <span><strong>Browser:</strong> Chrome, Firefox, or Brave recommended</span>
                </li>
              </ul>
            </div>

            <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4 text-purple-400">Base Network Setup:</h3>
              <p className="mb-3">If Base isn't in your wallet yet:</p>
              <ol className="space-y-2 text-sm">
                <li>1. Visit <span className="text-blue-400 font-mono">bridge.base.org</span></li>
                <li>2. Click "Add Base Network"</li>
                <li>3. Confirm in your wallet</li>
              </ol>
              
              <div className="mt-4 p-3 bg-gray-800 rounded text-xs font-mono">
                <div><strong>Name:</strong> Base</div>
                <div><strong>RPC:</strong> https://mainnet.base.org</div>
                <div><strong>Chain ID:</strong> 8453</div>
                <div><strong>Currency:</strong> ETH</div>
                <div><strong>Explorer:</strong> https://basescan.org</div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 1: Get AEC Tokens */}
        <section>
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3">2</div>
            <h2 className="text-2xl font-bold text-white">Get AEC Tokens (2 minutes)</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border border-green-600 bg-green-900/20 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4 text-green-400 flex items-center">
                <Zap size={20} className="mr-2" />
                Option A: Fair Launch (Recommended)
              </h3>
              <div className="space-y-3">
                <div><strong>When:</strong> During 48-hour Fair Launch period</div>
                <div><strong>What:</strong> Contribute USDC, get proportional AEC allocation</div>
              </div>
              
              <div className="mt-4 p-4 bg-gray-800 rounded">
                <h4 className="font-bold mb-2">Steps:</h4>
                <ol className="space-y-1 text-sm">
                  <li>1. Visit: <span className="text-blue-400 font-mono">app.aethercycle.xyz</span></li>
                  <li>2. Connect wallet to Base network</li>
                  <li>3. Enter USDC amount you want to contribute</li>
                  <li>4. Confirm transaction and wait for completion</li>
                  <li>5. Claim tokens after Fair Launch ends</li>
                </ol>
              </div>
              
              <div className="mt-4 p-3 bg-blue-900/30 border border-blue-600 rounded">
                <div className="text-sm font-mono">
                  <strong>Formula:</strong> Your AEC = (Your USDC ÷ Total USDC) × Fair Launch Allocation
                </div>
              </div>
            </div>

            <div className="border border-yellow-600 bg-yellow-900/20 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4 text-yellow-400 flex items-center">
                <ExternalLink size={20} className="mr-2" />
                Option B: DEX Trading (Post-Launch)
              </h3>
              <div className="space-y-3">
                <div><strong>When:</strong> After Fair Launch completes</div>
                <div><strong>Where:</strong> Uniswap V2 AEC/USDC pair</div>
              </div>
              
              <div className="mt-4 p-4 bg-gray-800 rounded">
                <h4 className="font-bold mb-2">Steps:</h4>
                <ol className="space-y-1 text-sm">
                  <li>1. Visit: <span className="text-blue-400 font-mono">app.uniswap.org</span></li>
                  <li>2. Connect wallet to Base network</li>
                  <li>3. Select: AEC/USDC trading pair</li>
                  <li>4. Set slippage: 3-5% (due to 2% tax)</li>
                  <li>5. Swap USDC for AEC</li>
                </ol>
              </div>
              
              <div className="mt-4 p-3 bg-yellow-900/30 border border-yellow-600 rounded">
                <div className="text-sm">
                  <AlertTriangle size={14} className="inline mr-1" />
                  <strong>Note:</strong> 2% tax applies to DEX purchases
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 2: Choose Strategy */}
        <section>
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">3</div>
            <h2 className="text-2xl font-bold text-white">Choose Your Strategy (1 minute)</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-gray-700 bg-gray-900 p-4 rounded-lg">
              <h3 className="font-bold text-blue-400 mb-2 flex items-center">
                🚀 For Quick Participation
              </h3>
              <div className="text-sm space-y-1">
                <div><strong>Goal:</strong> Get involved immediately</div>
                <div><strong>Action:</strong> Hold AEC tokens, participate in governance</div>
                <div><strong>Benefit:</strong> Exposure to protocol growth, voting rights</div>
              </div>
            </div>

            <div className="border border-gray-700 bg-gray-900 p-4 rounded-lg">
              <h3 className="font-bold text-green-400 mb-2 flex items-center">
                💰 For Yield Earning
              </h3>
              <div className="text-sm space-y-1">
                <div><strong>Goal:</strong> Earn passive income</div>
                <div><strong>Action:</strong> Stake AEC tokens with lock periods</div>
                <div><strong>Benefit:</strong> 1.1x to 1.6x reward multipliers</div>
              </div>
            </div>

            <div className="border border-gray-700 bg-gray-900 p-4 rounded-lg">
              <h3 className="font-bold text-cyan-400 mb-2 flex items-center">
                🌊 For Liquidity Providers
              </h3>
              <div className="text-sm space-y-1">
                <div><strong>Goal:</strong> Maximum rewards</div>
                <div><strong>Action:</strong> Provide AEC/USDC liquidity, stake LP tokens</div>
                <div><strong>Benefit:</strong> 60% of all protocol rewards</div>
              </div>
            </div>

            <div className="border border-gray-700 bg-gray-900 p-4 rounded-lg">
              <h3 className="font-bold text-purple-400 mb-2 flex items-center">
                🎨 For NFT Collectors
              </h3>
              <div className="text-sm space-y-1">
                <div><strong>Goal:</strong> Unique utility</div>
                <div><strong>Action:</strong> Mint Aetheria NFTs, stake for rewards</div>
                <div><strong>Benefit:</strong> Continuous yield + collectible value</div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 3: Start Earning */}
        <section>
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold mr-3">4</div>
            <h2 className="text-2xl font-bold text-white">Start Earning (1 minute)</h2>
          </div>

          <div className="space-y-6">
            <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4 text-green-400">Token Staking (Easiest)</h3>
              <ol className="space-y-2">
                <li>1. Visit: <span className="text-blue-400 font-mono">app.aethercycle.xyz/stake</span></li>
                <li>2. Connect wallet with AEC tokens</li>
                <li>3. Choose lock period:
                  <ul className="ml-6 mt-2 space-y-1 text-sm">
                    <li>• 30 days = 1.1x multiplier</li>
                    <li>• 90 days = 1.3x multiplier</li>
                    <li>• 180 days = 1.6x multiplier</li>
                  </ul>
                </li>
                <li>4. Stake tokens and start earning immediately</li>
              </ol>
            </div>

            <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4 text-cyan-400">LP Staking (Highest Rewards)</h3>
              <ol className="space-y-2">
                <li>1. Add liquidity on Uniswap V2 (AEC/USDC pair)</li>
                <li>2. Receive LP tokens from Uniswap</li>
                <li>3. Visit: <span className="text-blue-400 font-mono">app.aethercycle.xyz/stake-lp</span></li>
                <li>4. Stake LP tokens with preferred lock period</li>
                <li>5. Earn 60% of all protocol rewards</li>
              </ol>
            </div>

            <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4 text-purple-400">NFT Staking (Unique Utility)</h3>
              <ol className="space-y-2">
                <li>1. Visit: <span className="text-blue-400 font-mono">app.aethercycle.xyz/nft</span></li>
                <li>2. Mint Aetheria NFT using AEC tokens</li>
                <li>3. Stake NFT in staking contract</li>
                <li>4. Earn rewards based on NFT rarity</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Step 4: Monitor & Optimize */}
        <section>
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold mr-3">5</div>
            <h2 className="text-2xl font-bold text-white">Monitor & Optimize (Ongoing)</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4 text-blue-400">Track Your Performance:</h3>
              <ul className="space-y-2">
                <li>• <strong>Dashboard:</strong> <span className="text-blue-400 font-mono">app.aethercycle.xyz/dashboard</span></li>
                <li>• <strong>Rewards:</strong> Check pending and claimed rewards</li>
                <li>• <strong>APY Calculator:</strong> Estimate returns based on lock periods</li>
                <li>• <strong>Protocol Stats:</strong> Monitor TVL, burn rate, reward distribution</li>
              </ul>
            </div>

            <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4 text-green-400">Stay Informed:</h3>
              <ul className="space-y-2">
                <li>• <strong>Discord:</strong> Real-time community discussions</li>
                <li>• <strong>Twitter:</strong> Protocol updates and announcements</li>
                <li>• <strong>GitHub:</strong> Technical updates and code reviews</li>
              </ul>
            </div>

            <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg md:col-span-2">
              <h3 className="text-lg font-bold mb-4 text-purple-400">Optimize Strategy:</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-bold mb-2">Compound rewards:</h4>
                  <p className="text-sm">Reinvest earned AEC for higher returns</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Extend locks:</h4>
                  <p className="text-sm">Longer periods = higher multipliers</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Diversify:</h4>
                  <p className="text-sm">Combine token staking + LP staking + NFT staking</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Reference */}
        <section className="border border-gray-700 bg-gray-900 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">Quick Reference</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-yellow-400">Tax Structure:</h3>
              <ul className="space-y-2">
                <li>• <strong>Wallet-to-wallet:</strong> 0% tax</li>
                <li>• <strong>Official DEX:</strong> 2-2.5% tax</li>
                <li>• <strong>Unofficial contracts:</strong> 10-12.5% tax</li>
              </ul>

              <h3 className="text-lg font-bold mb-4 mt-6 text-green-400">Reward Sources:</h3>
              <ul className="space-y-2">
                <li>• <strong>Transaction taxes:</strong> Continuous revenue stream</li>
                <li>• <strong>Perpetual Endowment:</strong> 0.5% monthly releases (infinite)</li>
                <li>• <strong>LP yields:</strong> Growing protocol-owned liquidity</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-400">Key Numbers:</h3>
              <ul className="space-y-2">
                <li>• <strong>Total Supply:</strong> 888,888,888 AEC (fixed)</li>
                <li>• <strong>Founder Allocation:</strong> 1% (5-year vesting)</li>
                <li>• <strong>Community Control:</strong> 99% of supply</li>
                <li>• <strong>Sustainability:</strong> Mathematical guarantee via endowment</li>
              </ul>

              <h3 className="text-lg font-bold mb-4 mt-6 text-purple-400">Important Addresses:</h3>
              <div className="space-y-2 text-sm font-mono">
                <div>• <strong>AEC Token:</strong> [Contract Address]</div>
                <div>• <strong>PerpetualEngine:</strong> [Contract Address]</div>
                <div>• <strong>Staking Contracts:</strong> [Contract Addresses]</div>
                <div>• <strong>Uniswap V2 Pair:</strong> [Pair Address]</div>
              </div>
              <p className="text-xs text-gray-400 mt-2">Contract addresses will be published at launch</p>
            </div>
          </div>
        </section>

        {/* Safety Checklist */}
        <section className="border border-red-600 bg-red-900/20 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-red-400 text-center flex items-center justify-center">
            <AlertTriangle size={24} className="mr-2" />
            Safety Checklist
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-green-400">Before You Start:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-400 mr-2 flex-shrink-0" />
                  <span>Verify website URL: Only use aethercycle.xyz</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-400 mr-2 flex-shrink-0" />
                  <span>Check contract addresses: Match official documentation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-400 mr-2 flex-shrink-0" />
                  <span>Start small: Test with minimal amounts first</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-400 mr-2 flex-shrink-0" />
                  <span>Understand risks: Read disclaimer and risk assessment</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-400 mr-2 flex-shrink-0" />
                  <span>Secure wallet: Use hardware wallet for large amounts</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-red-400">Red Flags to Avoid:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <AlertTriangle size={16} className="text-red-400 mr-2 flex-shrink-0" />
                  <span>Fake websites: Always verify official links</span>
                </li>
                <li className="flex items-center">
                  <AlertTriangle size={16} className="text-red-400 mr-2 flex-shrink-0" />
                  <span>Social media scams: No official team DMs</span>
                </li>
                <li className="flex items-center">
                  <AlertTriangle size={16} className="text-red-400 mr-2 flex-shrink-0" />
                  <span>Unofficial tokens: Only use verified contract address</span>
                </li>
                <li className="flex items-center">
                  <AlertTriangle size={16} className="text-red-400 mr-2 flex-shrink-0" />
                  <span>Too-good-to-be-true APYs: Sustainable yields only</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-white">Common Issues & Solutions</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4 text-red-400">Transaction Failed:</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Check gas:</strong> Ensure sufficient ETH for Base network fees</li>
                <li>• <strong>Increase slippage:</strong> Try 5% for DEX trades</li>
                <li>• <strong>Network congestion:</strong> Wait and retry during lower traffic</li>
              </ul>
            </div>

            <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4 text-yellow-400">Tokens Not Showing:</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Add token:</strong> Import AEC contract address to wallet</li>
                <li>• <strong>Refresh wallet:</strong> Sometimes requires manual refresh</li>
                <li>• <strong>Check network:</strong> Ensure you're on Base network</li>
              </ul>
            </div>

            <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4 text-blue-400">Staking Issues:</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Approve first:</strong> Most staking requires token approval step</li>
                <li>• <strong>Minimum amounts:</strong> Check minimum staking requirements</li>
                <li>• <strong>Lock periods:</strong> Understand unlock dates before staking</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-white">Next Steps</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4 text-blue-400">Learn More:</h3>
              <ul className="space-y-2">
                <li>📖 <strong>Token Economics:</strong> Understand mathematical sustainability model</li>
                <li>🔒 <strong>Security Model:</strong> Learn about immutable architecture</li>
                <li>📊 <strong>Risk Assessment:</strong> Comprehensive risk analysis</li>
                <li>📋 <strong>FAQ:</strong> Answers to 30+ common questions</li>
              </ul>
            </div>

            <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4 text-green-400">Get Involved:</h3>
              <ul className="space-y-2">
                <li>💬 <strong>Join Discord:</strong> Real-time community support</li>
                <li>🐦 <strong>Follow Twitter:</strong> Protocol updates and news</li>
                <li>💻 <strong>GitHub:</strong> Review smart contract code</li>
                <li>🗳️ <strong>Governance:</strong> Participate in founder accountability votes</li>
              </ul>
            </div>

            <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg md:col-span-2">
              <h3 className="text-lg font-bold mb-4 text-purple-400">Advanced Features:</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>⚡ <strong>PerpetualEngine:</strong> Learn how to trigger reward cycles</div>
                <div>🎮 <strong>AECGambit:</strong> Try provably fair on-chain gambling</div>
                <div>🎨 <strong>Aetheria NFTs:</strong> Explore the limited NFT collection</div>
              </div>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="border border-gray-700 bg-gray-900 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">Support</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-400">Community Help:</h3>
              <ul className="space-y-2">
                <li>• <strong>Discord:</strong> #support channel for real-time help</li>
                <li>• <strong>GitHub:</strong> Technical documentation and code review</li>
                <li>• <strong>FAQ:</strong> Comprehensive answers to common questions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-green-400">Official Contact:</h3>
              <ul className="space-y-2">
                <li>• <strong>General:</strong> <span className="text-blue-400 font-mono">aethercycle@gmail.com</span></li>
                <li>• <strong>Security:</strong> Report vulnerabilities for bug bounty rewards</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="border border-green-600 bg-green-900/20 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4 text-green-400">🎉 Congratulations!</h2>
          <p className="text-lg mb-4">You're now ready to participate in the world's first truly autonomous DeFi protocol.</p>
          <p className="text-gray-300 mb-6">
            <strong>Remember:</strong> AetherCycle is experimental software. Only invest what you can afford to lose, and always do your own research.
          </p>
          <a
            href="https://app.aethercycle.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-black px-8 py-3 font-mono text-sm hover:bg-gray-200 transition-colors"
          >
            <Zap size={16} className="mr-2" />
            Start your AetherCycle journey
          </a>
        </section>

        {/* Footer */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p className="mb-2"><strong>Quick Start Guide - Last Updated:</strong> July 4, 2025</p>
          <p className="text-lg font-bold text-white">AetherCycle Protocol - Autonomous Finance</p>
        </div>
      </div>
    </div>
  );

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

  if (selectedDoc === 'quick-start') {
    return (
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuickStartGuide />
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