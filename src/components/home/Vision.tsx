import React from 'react';
import { visionSteps } from '../../data/vision';

export default function Vision() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 mb-12">
          Our Vision: Transforming Africa's Financial Landscape
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visionSteps.map((step) => (
            <div key={step.id} className="relative">
              <div className="bg-blue-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-600 mb-4">{step.id}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-12 text-gray-700 text-center max-w-3xl mx-auto">
          At CBE Capital, we envision a future where Ethiopia's financial sector drives transformative national development. Our mission is to become the cornerstone of financial growth and stability, empowering businesses and investors through innovative financial offerings.
        </p>
      </div>
    </div>
  );
}