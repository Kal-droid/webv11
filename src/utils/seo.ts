import { Helmet } from 'react-helmet-async';
import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export function SEO({ 
  title = 'CBE Capital',
  description = 'Leading investment banking and financial services in Ethiopia',
  keywords = 'investment banking, Ethiopia, financial services',
  image = '/images/cbe-capital-logo.png',
  url = 'https://cbecapitalsc.com'
}: SEOProps) {
  const fullTitle = `${title} - Investment Banking & Financial Services`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      <link rel="canonical" href={url} />
    </Helmet>
  );
}