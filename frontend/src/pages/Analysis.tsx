import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { getAnalysis } from '../services/api';
import { CryptoAnalysis } from '../types/crypto';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function Analysis() {
  const [analysis, setAnalysis] = useState<CryptoAnalysis | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAnalysis();
        setAnalysis(data);
      } catch (err) {
        setError('Failed to fetch analysis data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!analysis) return null;

  const chartData = {
    labels: analysis.top5ByMarketCap.map(crypto => crypto.name),
    datasets: [
      {
        label: 'Market Cap (USD)',
        data: analysis.top5ByMarketCap.map(crypto => crypto.market_cap),
        backgroundColor: '#9164FF',
        borderColor: '#00FFFF',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#FFFFFF',
        },
      },
      title: {
        display: true,
        text: 'Top 5 Cryptocurrencies by Market Cap',
        color: '#FFFFFF',
      },
    },
    scales: {
      y: {
        grid: {
          color: '#333333',
        },
        ticks: {
          color: '#FFFFFF',
        },
      },
      x: {
        grid: {
          color: '#333333',
        },
        ticks: {
          color: '#FFFFFF',
        },
      },
    },
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Market Analysis</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
          <div className="flex items-center space-x-3">
            <DollarSign className="text-[#00FFFF]" size={24} />
            <h3 className="text-lg font-semibold">Average Price</h3>
          </div>
          <p className="mt-2 text-2xl font-bold">${analysis.averagePrice.toLocaleString()}</p>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
          <div className="flex items-center space-x-3">
            <TrendingUp className="text-green-400" size={24} />
            <h3 className="text-lg font-semibold">Highest 24h Change</h3>
          </div>
          <p className="mt-2 text-2xl font-bold text-green-400">
            {analysis.highestChange.change.toFixed(2)}%
          </p>
          <p className="text-sm text-gray-400">{analysis.highestChange.name}</p>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
          <div className="flex items-center space-x-3">
            <TrendingDown className="text-red-400" size={24} />
            <h3 className="text-lg font-semibold">Lowest 24h Change</h3>
          </div>
          <p className="mt-2 text-2xl font-bold text-red-400">
            {analysis.lowestChange.change.toFixed(2)}%
          </p>
          <p className="text-sm text-gray-400">{analysis.lowestChange.name}</p>
        </div>
      </div>

      <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}