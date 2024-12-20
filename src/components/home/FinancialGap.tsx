import React from 'react';
import { financialGaps } from '../../data/business';

export default function FinancialGap() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 mb-12">Bridging the Financial Services Gap</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {financialGaps.map((gap) => (
            <div key={gap.id} className="flex items-start space-x-4">
              <div className="bg-blue-100 p-4 rounded-lg">
                <span className="text-2xl font-bold text-blue-600">{gap.id}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{gap.title}</h3>
                <p className="text-gray-600">{gap.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}