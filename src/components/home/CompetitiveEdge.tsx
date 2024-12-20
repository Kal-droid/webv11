import React from 'react';
import { competitiveEdges } from '../../data/business';

export default function CompetitiveEdge() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 mb-12">
          Our Competitive Edge: Experience Meets Innovation
        </h2>
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {competitiveEdges.map((edge) => (
              <div key={edge.id} className="bg-white p-6 rounded-lg shadow-md relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                  {edge.id}
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-4">{edge.title}</h3>
                <p className="text-gray-600">{edge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}