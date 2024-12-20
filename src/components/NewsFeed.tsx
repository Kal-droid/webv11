import React from 'react';
import { NewsItem } from '../types/market';
import { ExternalLink } from 'lucide-react';

interface NewsFeedProps {
  news: NewsItem[];
}

export default function NewsFeed({ news }: NewsFeedProps) {
  return (
    <div className="space-y-6">
      {news.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
          <p className="mt-2 text-gray-600">{item.summary}</p>
          <div className="mt-4 flex justify-between text-sm text-gray-500">
            <span>{item.source}</span>
            <span>{new Date(item.date).toLocaleDateString()}</span>
          </div>
        </div>
      ))}
    </div>
  );
}