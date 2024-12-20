import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { MarketData } from '../types/market';

interface MarketOverviewProps {
  data: MarketData[];
}

export default function MarketOverview({ data }: MarketOverviewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item) => (
        <div key={item.symbol} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">{item.symbol}</h3>
              <p className="text-2xl font-bold mt-2">${item.price.toFixed(2)}</p>
            </div>
            <div className={`flex items-center ${
              item.change >= 0 ? 'text-green-500' : 'text-red-500'
            }`}>
              {item.change >= 0 ? (
                <TrendingUp className="h-5 w-5" />
              ) : (
                <TrendingDown className="h-5 w-5" />
              )}
              <span className="ml-1">{item.changePercent.toFixed(2)}%</span>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Volume</span>
              <span>{item.volume.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mt-1">
              <span>Market Cap</span>
              <span>${(item.marketCap / 1e9).toFixed(2)}B</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}