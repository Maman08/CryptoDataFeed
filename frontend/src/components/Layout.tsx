import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Coins, BarChart3 } from 'lucide-react';

export function Layout() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <header className="border-b border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 text-[#00FFFF] hover:text-[#9164FF] transition-colors">
              <Coins size={24} />
              <span className="font-bold text-xl">CryptoVision</span>
            </Link>
            <div className="flex space-x-6">
              <Link to="/dashboard" className="hover:text-[#00FFFF] transition-colors">Dashboard</Link>
              <Link to="/analysis" className="hover:text-[#00FFFF] transition-colors">Analysis</Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      <footer className="border-t border-gray-800 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} CryptoVision. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}