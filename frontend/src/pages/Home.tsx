import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, TrendingUp, Download, Shield } from 'lucide-react';

export function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#00FFFF] to-[#9164FF] text-transparent bg-clip-text">
          Welcome to CryptoVision
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Your advanced cryptocurrency analytics platform. Track, analyze, and export real-time crypto market data with powerful visualization tools.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/dashboard"
            className="bg-[#9164FF] hover:bg-[#7645FF] px-6 py-3 rounded-lg transition-colors font-semibold"
          >
            View Dashboard
          </Link>
          <Link
            to="/analysis"
            className="border border-[#00FFFF] hover:bg-[#00FFFF]/10 px-6 py-3 rounded-lg transition-colors font-semibold"
          >
            View Analysis
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 hover:border-[#00FFFF] transition-colors">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-[#00FFFF]/10 rounded-lg">
              <BarChart3 className="text-[#00FFFF]" size={24} />
            </div>
            <h3 className="text-xl font-semibold">Real-time Dashboard</h3>
          </div>
          <p className="text-gray-400">
            Track the top 50 cryptocurrencies with live price updates, market cap, volume, and price changes.
          </p>
        </div>

        <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 hover:border-[#9164FF] transition-colors">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-[#9164FF]/10 rounded-lg">
              <TrendingUp className="text-[#9164FF]" size={24} />
            </div>
            <h3 className="text-xl font-semibold">Market Analysis</h3>
          </div>
          <p className="text-gray-400">
            Advanced analytics with interactive charts and key market indicators for informed decision-making.
          </p>
        </div>

        <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 hover:border-[#00FFFF] transition-colors">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-[#00FFFF]/10 rounded-lg">
              <Download className="text-[#00FFFF]" size={24} />
            </div>
            <h3 className="text-xl font-semibold">Data Export</h3>
          </div>
          <p className="text-gray-400">
            Export cryptocurrency data to Excel for detailed offline analysis and record-keeping.
          </p>
        </div>

        <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 hover:border-[#9164FF] transition-colors">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-[#9164FF]/10 rounded-lg">
              <Shield className="text-[#9164FF]" size={24} />
            </div>
            <h3 className="text-xl font-semibold">Reliable Data</h3>
          </div>
          <p className="text-gray-400">
            Trust in our accurate, real-time data sourced directly from leading cryptocurrency exchanges.
          </p>
        </div>
      </div>
    </div>
  );
}