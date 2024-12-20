import React from 'react';
import { SEO } from '../../utils/seo';

interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function PageSEO({ 
  title,
  description,
  keywords,
  image,
  url 
}: PageSEOProps) {
  return (
    <SEO
      title={title}
      description={description}
      keywords={keywords}
      image={image}
      url={url}
    />
  );
}