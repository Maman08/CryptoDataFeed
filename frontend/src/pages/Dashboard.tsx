import React, { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import { getCryptos, downloadExcel } from '../services/api';
import { Crypto } from '../types/crypto';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';

export function Dashboard() {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCryptos();
        console.log('Fetched Cryptos:', data); // Debugging log
        setCryptos(Array.isArray(data) ? data : []);
      } catch (err) {
        setError('Failed to fetch cryptocurrency data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Cryptocurrency Dashboard</h1>
        <button
          onClick={downloadExcel}
          className="flex items-center space-x-2 bg-[#9164FF] hover:bg-[#7645FF] px-4 py-2 rounded-lg text-white transition-colors"
        >
          <Download size={20} />
          <span>Export to Excel</span>
        </button>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="bg-gray-800 text-gray-300">
            <tr>
              <th className="py-3 px-4">Logo</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Symbol</th>
              <th className="py-3 px-4 text-right">Price</th>
              <th className="py-3 px-4 text-right">Market Cap</th>
              <th className="py-3 px-4 text-right">Total Volume</th>
              <th className="py-3 px-4 text-right">24h Change</th>
            </tr>
          </thead>
          <tbody>
            {cryptos.map((crypto) => (
              <tr
                key={crypto.id}
                className="border-b border-gray-800 hover:bg-gray-900/50"
              >
                {/* Crypto Logo */}
                <td className="py-4 px-4">
                  <img
                    src={crypto.image}
                    alt={`${crypto.name} logo`}
                    className="w-6 h-6 rounded-full"
                  />
                </td>

                {/* Name */}
                <td className="py-4 px-4">{crypto.name || 'N/A'}</td>

                {/* Symbol */}
                <td className="py-4 px-4">
                  {crypto.symbol?.toUpperCase() || 'N/A'}
                </td>

                {/* Current Price */}
                <td className="py-4 px-4 text-right">
                  ${crypto.current_price?.toLocaleString() || '0.00'}
                </td>

                {/* Market Cap */}
                <td className="py-4 px-4 text-right">
                  ${crypto.market_cap?.toLocaleString() || '0'}
                </td>

                {/* Total Volume */}
                <td className="py-4 px-4 text-right">
                  ${crypto.total_volume?.toLocaleString() || '0'}
                </td>

                {/* 24h Change */}
                <td
                  className={`py-4 px-4 text-right ${
                    crypto.price_change_percentage_24h >= 0
                      ? 'text-green-400'
                      : 'text-red-400'
                  }`}
                >
                  {crypto.price_change_percentage_24h?.toFixed(2) || '0.00'}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
